# Class 8: Adding the Dynamic Route

**File:** `src/main.jsx`
**Type:** Configuration Update
**Purpose:** Add a dynamic route parameter to handle individual project pages

---

## What is a Dynamic Route?

In Class 7, you added a **static route** for the Portfolio page:

```jsx
{ path: "portfolio", element: <Portfolio /> }
```

This route matches **exactly one URL**: `/portfolio`

Now we need a route that matches **many URLs**:

- `/portfolio/p1`
- `/portfolio/p2`
- `/portfolio/p3`
- ... and so on

We don't want to create a separate route for each project:

```jsx
// ❌ BAD: Creating a route for every project
{ path: "portfolio/p1", element: <Project1 /> }
{ path: "portfolio/p2", element: <Project2 /> }
{ path: "portfolio/p3", element: <Project3 /> }
// ... 10 more routes!
```

Instead, we use a **dynamic route** with a **route parameter**:

```jsx
// ✅ GOOD: One route handles ALL projects
{ path: "portfolio/:slug", element: <Project /> }
```

The `:slug` part is a **parameter** - it acts like a variable that matches any value!

---

## Route Parameters Explained

### Syntax

A route parameter starts with a colon (`:`):

```jsx
{ path: "portfolio/:slug", element: <Project /> }
         //      ^^^^^^
         //      This is the parameter
```

### What It Matches

The parameter matches **any value** in that position:

| URL                     | Matches? | Parameter Value       |
| ----------------------- | -------- | --------------------- |
| `/portfolio/p1`         | ✅ Yes   | `slug = "p1"`         |
| `/portfolio/p2`         | ✅ Yes   | `slug = "p2"`         |
| `/portfolio/my-project` | ✅ Yes   | `slug = "my-project"` |
| `/portfolio/123`        | ✅ Yes   | `slug = "123"`        |
| `/portfolio`            | ❌ No    | (no parameter)        |
| `/portfolio/p1/edit`    | ❌ No    | (extra segment)       |

**Key points:**

- The parameter name can be anything (`:slug`, `:id`, `:projectId`, etc.)
- It matches **exactly one segment** between slashes
- The component accesses it with `useParams()`

---

## Naming the Parameter

You can name the parameter anything:

```jsx
// All of these work the same way:
{ path: "portfolio/:slug", element: <Project /> }
{ path: "portfolio/:id", element: <Project /> }
{ path: "portfolio/:projectId", element: <Project /> }
```

**Why we're using `:slug`:**

- "Slug" is a common web development term for URL-friendly identifiers
- Originally from newspaper publishing (short name for a story)
- Implies the value is meant to be human-readable

**In our component:**

```jsx
// If route is "portfolio/:slug"
const { slug } = useParams();

// If route is "portfolio/:id"
const { id } = useParams();

// If route is "portfolio/:projectId"
const { projectId } = useParams();
```

The name just needs to match between the route definition and `useParams()`.

---

## Adding the Route

Let's add the dynamic route to our routing configuration.

**📁 Open file:** `src/main.jsx`

### Current State

Your `main.jsx` currently has the Portfolio route from Class 7:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

// Portfolio pages
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // portfolio routes
      { path: "portfolio", element: <Portfolio /> },

      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
```

---

### Step 1: Import the Project Component

First, let's import the `Project` component we just created.

**Find the imports section and add Project:**

```jsx
// Portfolio pages
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Project from "./pages/Project.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
```

**What's happening:**

- Added `import Project from "./pages/Project.jsx";`
- Placed after `Portfolio` (they're related)
- Now we can use `<Project />` in our route configuration

---

### Step 2: Add the Dynamic Route

Now let's add the dynamic route below the Portfolio route.

**Find the portfolio routes section and add the dynamic route:**

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // portfolio routes
      { path: "portfolio", element: <Portfolio /> },
      { path: "portfolio/:slug", element: <Project /> },

      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
```

**What's happening:**

1. **`{ path: "portfolio/:slug", element: <Project /> }`**
   - Defines a dynamic route
   - `:slug` is the route parameter
   - Renders the `Project` component

2. **Placement matters!**
   - Must come AFTER `{ path: "portfolio", element: <Portfolio /> }`
   - Static routes should come before dynamic routes
   - More specific → less specific

**Why order matters:**

```jsx
// ✅ CORRECT: Static before dynamic
{ path: "portfolio", element: <Portfolio /> },        // Matches /portfolio
{ path: "portfolio/:slug", element: <Project /> },    // Matches /portfolio/anything

// ❌ WRONG: Dynamic before static
{ path: "portfolio/:slug", element: <Project /> },    // Would match /portfolio AND /portfolio/p1
{ path: "portfolio", element: <Portfolio /> },        // Never reached!
```

React Router checks routes from top to bottom. The first match wins!

---

## Complete Updated File

Here's what your complete `main.jsx` should look like:

**📁 File:** `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

// Portfolio pages
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Project from "./pages/Project.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // portfolio routes
      { path: "portfolio", element: <Portfolio /> },
      { path: "portfolio/:slug", element: <Project /> },

      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
```

**Changes made:**

1. ✅ Imported `Project` component
2. ✅ Added dynamic route `portfolio/:slug`
3. ✅ Placed it correctly (after static portfolio route)

---

## How the Routing Works

Let's trace what happens for different URLs:

### Scenario 1: User visits /portfolio

1. **React Router checks routes:**
   - `{ index: true }` → No match (not root path)
   - `{ path: "portfolio" }` → **MATCH!**

2. **Renders:**
   - `<App />` (layout with navbar, footer)
   - `<Portfolio />` (list of all projects)

**Result:** User sees the portfolio grid

---

### Scenario 2: User visits /portfolio/p1

1. **React Router checks routes:**
   - `{ index: true }` → No match
   - `{ path: "portfolio" }` → No match (extra segment)
   - `{ path: "portfolio/:slug" }` → **MATCH!** (`:slug` captures "p1")

2. **Renders:**
   - `<App />` (layout with navbar, footer)
   - `<Project />` (detail page)

3. **Inside Project component:**
   - `useParams()` returns `{ slug: "p1" }`
   - `projects.find()` searches for project with `id: "p1"`
   - Displays project 1 details

**Result:** User sees project 1 detail page

---

### Scenario 3: User visits /portfolio/invalid-id

1. **React Router checks routes:**
   - `{ path: "portfolio/:slug" }` → **MATCH!** (`:slug` captures "invalid-id")

2. **Renders:**
   - `<App />` (layout)
   - `<Project />` (detail page)

3. **Inside Project component:**
   - `useParams()` returns `{ slug: "invalid-id" }`
   - `projects.find()` searches... returns `undefined` (no match)
   - `if (!project)` condition is true
   - Renders error UI with "Project not found"

**Result:** User sees 404 error page

---

## Route Matching Order

React Router checks routes **from top to bottom** and uses the **first match**:

```jsx
children: [
  { index: true, element: <Home /> }, // 1. Checked first
  { path: "portfolio", element: <Portfolio /> }, // 2. Checked second
  { path: "portfolio/:slug", element: <Project /> }, // 3. Checked third
  { path: "about", element: <About /> }, // 4. Checked fourth
  // ...
];
```

**Best practice:** Order routes from most specific to least specific.

### Example: Why Order Matters

```jsx
// ❌ WRONG: Wildcard route comes first
{ path: "*", element: <NotFound /> },        // Matches EVERYTHING
{ path: "about", element: <About /> },       // Never reached!

// ✅ CORRECT: Specific routes first, wildcard last
{ path: "about", element: <About /> },       // Matches /about
{ path: "*", element: <NotFound /> },        // Matches anything else
```

In our case:

- `/portfolio` (static) comes before `/portfolio/:slug` (dynamic)
- This ensures `/portfolio` matches the Portfolio list, not the Project detail

---

## Testing the Route

### Step 1: Save and Start Dev Server

1. **Save `main.jsx`**
2. **Ensure dev server is running:**
   - If running: It should auto-reload
   - If not: Run `npm run dev`

---

### Step 2: Test Navigation from Cards

**Option 1: From Home page**

1. Go to `http://localhost:5173`
2. Scroll to "Featured Projects" section
3. Click any project card
4. You should see the project detail page!

**Option 2: From Portfolio page**

1. Go to `http://localhost:5173/portfolio`
2. Click any project card
3. You should see the project detail page!

---

### Step 3: Test Direct URL Entry

**Type URLs directly in the address bar:**

1. **`http://localhost:5173/portfolio/p1`**
   - Should show Project 1 detail page
   - Title should be "Project Name"
   - Should show overview, highlights, etc.

2. **`http://localhost:5173/portfolio/p2`**
   - Should show Project 2 detail page
   - Title should be "E-Commerce Platform"
   - Different content than p1

3. **`http://localhost:5173/portfolio/p5`**
   - Should show Project 5 detail page
   - Has basic info (title, blurb, image)
   - Shows "No overview available" (no detailed data)

4. **`http://localhost:5173/portfolio/invalid`**
   - Should show "Project not found" error
   - Should have "Go Back" button

---

### Step 4: Verify Page Elements

For projects with full data (p1-p4), check:

✅ **Breadcrumb navigation**

- Shows: Home > Portfolio > Project Name
- "Home" and "Portfolio" are clickable
- Project name is not clickable (current page)

✅ **Go Back button**

- Clicking returns to previous page
- Works whether you came from Home or Portfolio

✅ **Project header**

- Title is large and prominent
- Blurb appears below title

✅ **Two-column layout** (on desktop)

- Image on left
- Details on right

✅ **Overview section**

- "Overview" heading
- Detailed description paragraph

✅ **Highlights section**

- "Highlights" heading
- Bullet list of achievements

✅ **Project Details section**

- "Project Details" heading
- Role, Tools, Timeline, Client (if present)

✅ **SEO**

- Browser tab title shows project name
- Check page source for meta tags

---

### Step 5: Test Responsive Behavior

**On mobile (or narrow browser window):**

- Two-column grid stacks vertically
- Image appears above details
- All content remains accessible

**How to test:**

1. Open browser DevTools (F12 or Cmd+Option+I)
2. Click device toolbar icon (Cmd+Shift+M)
3. Select a mobile device (e.g., iPhone 12)
4. Navigate to a project detail page
5. Verify layout stacks properly

---

## Understanding the Complete Flow

Here's the full journey from click to display:

### 1. User Interaction

```jsx
// In ProjectCard.jsx (from Class 4)
<Link to={`/portfolio/${project.id}`}>// ...card content...</Link>
```

- User clicks card for project with `id: "p1"`
- Link navigates to `/portfolio/p1`

---

### 2. Routing (main.jsx)

```jsx
{ path: "portfolio/:slug", element: <Project /> }
```

- React Router matches this route
- Captures `slug = "p1"`
- Renders `<Project />` component

---

### 3. Component Logic (Project.jsx)

```jsx
const { slug } = useParams(); // Gets "p1" from URL
const project = projects.find((p) => p.id === slug); // Finds project with id "p1"
```

- Gets parameter from URL
- Searches projects array
- Finds matching project object

---

### 4. Rendering

```jsx
<h1>{project.title}</h1>
<p>{project.blurb}</p>
<p>{project.overview}</p>
// ... etc
```

- Uses project data to render page
- All content is dynamic based on which project was clicked

---

## Multiple Parameters (Advanced)

You can have multiple parameters in one route:

```jsx
// Example: Blog with categories and posts
{ path: "blog/:category/:slug", element: <BlogPost /> }

// Matches: /blog/react/hooks-tutorial
const { category, slug } = useParams();
// category = "react"
// slug = "hooks-tutorial"
```

**For our portfolio**, we only need one parameter (`:slug`), but this shows the flexibility of dynamic routing!

---

## What You've Learned

✅ **Dynamic Routing:**

- Route parameters with `:parameterName`
- One route matching multiple URLs
- Parameter naming conventions

✅ **Route Configuration:**

- Adding dynamic routes to router
- Route ordering (static before dynamic)
- How React Router matches routes

✅ **Complete Data Flow:**

- URL → Route → Component → Data → Display
- How all pieces connect together

✅ **Testing:**

- Multiple ways to navigate to pages
- Verifying different scenarios
- Testing error cases

---

## Common Questions

### "Why does the parameter need a colon?"

**Answer:**
The colon (`:`) tells React Router: "this is a variable, not a literal path segment."

```jsx
// With colon = parameter (matches any value)
{
  path: "portfolio/:slug";
}
// Matches: /portfolio/p1, /portfolio/p2, /portfolio/anything

// Without colon = literal (matches exact string)
{
  path: "portfolio/slug";
}
// Matches: ONLY /portfolio/slug (literally the word "slug")
```

The colon is React Router's syntax for "this can be anything."

---

### "Can I have optional parameters?"

**Answer:**
Yes! Add a question mark (`?`):

```jsx
// Optional parameter
{
  path: "portfolio/:slug?";
}

// Matches BOTH:
// /portfolio (slug = undefined)
// /portfolio/p1 (slug = "p1")
```

**We don't need this** because we have separate routes for list (`/portfolio`) and detail (`/portfolio/:slug`).

---

### "What if two routes could match the same URL?"

**Answer:**
React Router uses the **first match** it finds. Order matters!

```jsx
// First match wins
{ path: "portfolio/:slug", element: <Project /> },    // Matches /portfolio/new
{ path: "portfolio/new", element: <NewProject /> },   // Never reached!

// Correct order:
{ path: "portfolio/new", element: <NewProject /> },   // Matches /portfolio/new first
{ path: "portfolio/:slug", element: <Project /> },    // Matches other URLs
```

**Our setup is fine** because `/portfolio` and `/portfolio/:slug` don't overlap - they match different URL patterns.

---

### "Can parameters be numbers?"

**Answer:**
Parameters are always **strings**, but they can contain numbers:

```jsx
// URL: /portfolio/123
const { slug } = useParams();
console.log(slug); // "123" (string, not number)
console.log(typeof slug); // "string"

// To use as number:
const id = Number(slug); // 123 (number)
```

For our project IDs like "p1", "p2", we keep them as strings for comparison.

---

## Troubleshooting

### Issue: Clicking project cards does nothing

**Problem:** Route not registered or card links broken

**Solution:**

- Verify route exists: `{ path: "portfolio/:slug", element: <Project /> }`
- Check card links (from Class 4): `<Link to={project.href}>`
- Verify `project.href` in data matches pattern `/portfolio/{id}`
- Check console for errors

---

### Issue: All URLs show the Portfolio list

**Problem:** Dynamic route not matching

**Solution:**

- Check route path: should be `"portfolio/:slug"` (with colon)
- Verify Project component is imported
- Make sure dynamic route comes AFTER static portfolio route
- Check for typos in route path

---

### Issue: Project not found for all URLs

**Problem:** Parameter name mismatch or data lookup issue

**Solution:**

- Verify parameter name matches:
  - Route: `path: "portfolio/:slug"`
  - Component: `const { slug } = useParams()`
- Check project data `id` field matches what's in URLs
- Console log to debug: `console.log(slug, project)`

---

### Issue: Page refreshes instead of smooth navigation

**Problem:** Using `<a>` tags instead of React Router `<Link>`

**Solution:**

- Project cards should use: `<Link to={...}>` (from react-router-dom)
- NOT: `<a href={...}>` (causes page reload)
- This should already be correct from Class 4

---

### Issue: Browser back button doesn't work

**Problem:** Navigation not tracked in history

**Solution:**

- React Router should handle this automatically
- Verify you're using `<Link>` components, not `<a>` tags
- Check that `RouterProvider` wraps app (from Class 2)
- Try hard refresh (Cmd/Ctrl + Shift + R)

---

## Visual Summary

### Route Hierarchy

```
/                           → Home page
/portfolio                  → Portfolio list (all projects)
/portfolio/p1               → Project 1 detail
/portfolio/p2               → Project 2 detail
/portfolio/p3               → Project 3 detail
...
/about                      → About page
/resume                     → Resume page
/contact                    → Contact page
```

### Route Configuration

```jsx
const router = createBrowserRouter([
  {
    path: "/",                    // Parent route
    element: <App />,             // Layout (navbar, footer)
    children: [                   // Child routes (render in <Outlet />)
      { index: true, element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "portfolio/:slug", element: <Project /> },  ← NEW!
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
```

---

## Next Steps

🎉 **Congratulations!** You've completed Class 8!

Your portfolio now has:

- ✅ Detailed project data (overview, highlights, role, etc.)
- ✅ Individual project detail pages
- ✅ Dynamic routing (one component, many URLs)
- ✅ Breadcrumb navigation
- ✅ Error handling for invalid projects
- ✅ "Go Back" navigation
- ✅ SEO for each project page

**Try it out:**

1. Click any project card from Home or Portfolio pages
2. See full project details with all information
3. Use breadcrumbs to navigate up the hierarchy
4. Test the "Go Back" button
5. Try visiting `/portfolio/invalid` to see error handling

**In Class 9**, you'll build the About page, which will include:

- Complex data structures (bio, values, experience, education)
- Timeline layouts
- Multi-section page composition
- Everything you've learned so far combined!

---

**Excellent work!** Your portfolio is now a fully dynamic, multi-page application with proper routing and navigation! 🚀
