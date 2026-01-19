# Class 7: Adding the Portfolio Route

**File:** `src/main.jsx`  
**Type:** Configuration Update  
**Purpose:** Connect the `/portfolio` URL to the Portfolio page component

---

## What is Routing?

**Routing** is how your application maps URLs to different pages. When someone visits `/portfolio`, React Router needs to know which component to render.

### How React Router Works

React Router watches the browser's address bar. When the URL changes:
1. It looks at the route configuration (in `main.jsx`)
2. Finds the matching route
3. Renders the corresponding component

**Example:**
- Visit `http://localhost:5173/` → Shows `Home` component
- Visit `http://localhost:5173/about` → Shows `About` component
- Visit `http://localhost:5173/portfolio` → Shows `Portfolio` component (what we're adding!)

---

## Current Route Configuration

You set up React Router in **Class 2**. Here's what your `main.jsx` currently looks like:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

// Portfolio pages
import Home from "./pages/Home.jsx";
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
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

**What we need to do:**
1. Import the `Portfolio` component
2. Add a new route for `/portfolio`

---

## Understanding Nested Routes

Notice the structure of the route configuration:

```jsx
const router = createBrowserRouter([
  {
    path: "/",           // Parent route
    element: <App />,    // App layout (navbar, footer)
    children: [          // Child routes
      { index: true, element: <Home /> },        // /
      { path: "about", element: <About /> },     // /about
      { path: "resume", element: <Resume /> },   // /resume
      { path: "contact", element: <Contact /> }, // /contact
    ],
  },
]);
```

**How it works:**
- **Parent route** (`path: "/"`) renders the `App` component
- `App` component has `Navbar`, `Footer`, and an `<Outlet />` (from Class 1)
- **Child routes** render inside the `<Outlet />`
- All pages share the same navbar and footer!

**Visual representation:**
```
┌────────────────────────────────────┐
│          Navbar (App)              │
├────────────────────────────────────┤
│                                    │
│     <Outlet /> ← Child routes      │
│     render here                    │
│                                    │
├────────────────────────────────────┤
│          Footer (App)              │
└────────────────────────────────────┘
```

---

## Adding the Portfolio Route

### Step 1: Import the Portfolio Component

First, let's import the `Portfolio` component we just created.

**📁 Open file:** `src/main.jsx`

**Find this section (near the top):**
```jsx
// Portfolio pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
```

**Add the Portfolio import:**
```jsx
// Portfolio pages
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
```

**What's happening:**
- We import the `Portfolio` component from `pages/Portfolio.jsx`
- Placed after `Home` (because it's related to Home's projects preview)
- We can now use `<Portfolio />` in our route configuration

---

### Step 2: Add the Route

Now let's add the route to the configuration.

**Find the `children` array in the router configuration:**
```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
```

**Add the portfolio route after the Home route:**
```jsx
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
```

**What's happening:**

1. **`{ path: "portfolio", element: <Portfolio /> }`**
   - Defines a route for the `/portfolio` URL
   - When users visit `/portfolio`, the `Portfolio` component renders
   - The path is relative to the parent route (`/`)

2. **Comment `// portfolio routes`**
   - Organizational comment
   - Hints that more portfolio-related routes will be added later
   - In Class 8, we'll add the individual project route here

3. **Placement**
   - Placed right after Home (they're related)
   - Before other top-level pages (About, Resume, Contact)
   - This ordering makes the code more readable

---

## Complete Updated File

Here's what your complete `main.jsx` should look like after both changes:

**📁 File:** `src/main.jsx`

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
  </React.StrictMode>
);
```

**Changes made:**
1. ✅ Imported `Portfolio` component
2. ✅ Added portfolio route with comment
3. ✅ Placed route logically after Home

---

## How the Route Works

Let's trace what happens when a user clicks "Portfolio" in the navbar:

1. **User clicks the Portfolio link**
   - Navbar has: `<NavLink to="/portfolio">Portfolio</NavLink>` (from Class 2)
   - React Router intercepts the click (no page reload!)

2. **React Router looks up the route**
   - Checks the route configuration in `main.jsx`
   - Finds `{ path: "portfolio", element: <Portfolio /> }`
   - Matches `/portfolio` to this route

3. **Components render**
   - `App` component stays rendered (navbar + footer stay visible)
   - `<Outlet />` in App renders the `<Portfolio />` component
   - `Portfolio` component renders `<SEO>` and `<Projects>` components
   - `Projects` component displays all project cards

4. **Browser updates**
   - Address bar shows `http://localhost:5173/portfolio`
   - Browser tab title shows "Portfolio | Your Name"
   - User sees all projects in a grid

**All without a page refresh!** This is **client-side routing**.

---

## Testing the Route

### Step 1: Save and Start Dev Server

1. **Save `main.jsx`**
2. **Make sure dev server is running:**
   - If not running: `npm run dev`
   - If already running: It should auto-reload

### Step 2: Navigate to Portfolio

**Option 1: Click the navbar link**
1. Go to your homepage (`http://localhost:5173`)
2. Click "Portfolio" in the navbar
3. You should see the Portfolio page with all projects

**Option 2: Type the URL directly**
1. Type `http://localhost:5173/portfolio` in the address bar
2. Press Enter
3. You should see the Portfolio page

### Step 3: Verify the Page

✅ **Check that:**
- All projects are displayed (not just 3)
- No "View More Projects" button appears
- The heading says "Portfolio"
- Subheading says "Click any card to view details."
- Browser tab title says "Portfolio | Your Name"
- Navbar "Portfolio" link is highlighted (active state)

### Step 4: Test Navigation

✅ **Test going back and forth:**
1. Click "Home" in navbar → Should go back to homepage
2. Click "Portfolio" → Should return to portfolio page
3. Use browser back/forward buttons → Should work correctly
4. Address bar updates correctly for each page

---

## Understanding Route Paths

### Absolute vs. Relative Paths

In our configuration, child routes use **relative paths**:

```jsx
// Relative path (no leading slash)
{ path: "portfolio", element: <Portfolio /> }  // Becomes /portfolio

// If we used an absolute path (with leading slash)
{ path: "/portfolio", element: <Portfolio /> } // Also /portfolio
```

Both work, but relative paths are preferred because:
- Cleaner and more concise
- Automatically combine with parent path
- More maintainable if parent path changes

### Index Routes

Notice the Home route uses `index: true`:

```jsx
{ index: true, element: <Home /> }  // Matches /
```

This is a special route that matches the parent path exactly (`/`). It's equivalent to:

```jsx
{ path: "", element: <Home /> }
```

But `index: true` is more explicit and readable.

---

## Looking Ahead: Dynamic Routes (Class 8)

In the next class, we'll add a **dynamic route** for individual project pages:

```jsx
children: [
  { index: true, element: <Home /> },
  
  // portfolio routes
  { path: "portfolio", element: <Portfolio /> },
  { path: "portfolio/:slug", element: <Project /> }, // ← Class 8

  { path: "about", element: <About /> },
  // ...
]
```

The `:slug` part is a **route parameter** - it matches any value:
- `/portfolio/p1` → Renders `<Project />` with `slug = "p1"`
- `/portfolio/p2` → Renders `<Project />` with `slug = "p2"`
- `/portfolio/my-awesome-project` → Renders `<Project />` with `slug = "my-awesome-project"`

We'll learn how to read this parameter using the `useParams()` hook!

---

## Common Routing Patterns

### 1. Flat Routes (what we're using)
```jsx
children: [
  { path: "portfolio", element: <Portfolio /> },
  { path: "about", element: <About /> },
  { path: "contact", element: <Contact /> },
]
```

**URLs:** `/portfolio`, `/about`, `/contact`

### 2. Nested Path Segments
```jsx
children: [
  { path: "portfolio/projects", element: <Portfolio /> },
  { path: "portfolio/case-studies", element: <CaseStudies /> },
]
```

**URLs:** `/portfolio/projects`, `/portfolio/case-studies`

### 3. Dynamic Routes (Class 8)
```jsx
children: [
  { path: "portfolio/:slug", element: <Project /> },
  { path: "blog/:postId", element: <BlogPost /> },
]
```

**URLs:** `/portfolio/anything`, `/blog/123`

---

## What You've Learned

✅ **React Router Concepts:**
- How routes map URLs to components
- Nested routes and parent-child relationships
- Client-side routing (no page reloads)
- Route configuration structure

✅ **Code Organization:**
- Import statements for page components
- Logical ordering of routes
- Using comments to organize related routes

✅ **Testing:**
- Navigating between pages
- Verifying route behavior
- Checking browser state (URL, tab title)

✅ **File Structure:**
- How `main.jsx` acts as the routing configuration
- Connection between navbar links and routes
- Where new routes should be added

---

## Troubleshooting

### Issue: Portfolio page shows blank screen

**Problem:** Navigating to `/portfolio` shows nothing

**Solution:**
- Check that you imported Portfolio: `import Portfolio from "./pages/Portfolio.jsx"`
- Verify the route exists: `{ path: "portfolio", element: <Portfolio /> }`
- Make sure Portfolio.jsx has no errors (check browser console)
- Try hard-refreshing the page (Cmd/Ctrl + Shift + R)

---

### Issue: Import error for Portfolio

**Problem:** `Cannot find module './pages/Portfolio.jsx'`

**Solution:**
- Verify you created the file in the previous guide
- Check the file path is correct: `src/pages/Portfolio.jsx`
- Make sure the file is named exactly `Portfolio.jsx` (case-sensitive!)
- Try restarting the dev server: Stop (Ctrl+C) and run `npm run dev` again

---

### Issue: Route not matching

**Problem:** Clicking Portfolio link doesn't work

**Solution:**
- Check Navbar has the correct link: `<NavLink to="/portfolio">Portfolio</NavLink>`
- Verify path in route config: `{ path: "portfolio", element: <Portfolio /> }`
- Make sure paths match (both should be "portfolio")
- Check for typos in the path

---

### Issue: Page loads but shows wrong content

**Problem:** `/portfolio` loads but shows the Home page

**Solution:**
- Check you're using the right component: `element: <Portfolio />`
- Make sure you imported the correct component
- Verify you didn't accidentally map it to `<Home />`

---

### Issue: 404 error on refresh

**Problem:** Page works when clicking links, but refreshing `/portfolio` gives a 404

**Solution:**
- This is normal in development! Vite handles it automatically.
- If deploying to production, you'll need to configure your server to redirect all routes to `index.html`
- Vite's dev server already does this for you

---

### Issue: Multiple routes match

**Problem:** Both Home and Portfolio seem to render

**Solution:**
- Check that routes are in the `children` array, not separate
- Verify you have only one `<Outlet />` in App.jsx
- Make sure paths are unique (no duplicate `path: "portfolio"`)

---

## Visual Summary

Here's what we accomplished:

### Before (Class 6)
```
Routes:
- / → Home
- /about → About
- /resume → Resume
- /contact → Contact
```

### After (Class 7)
```
Routes:
- / → Home
- /portfolio → Portfolio ← NEW!
- /about → About
- /resume → Resume
- /contact → Contact
```

### Coming in Class 8
```
Routes:
- / → Home
- /portfolio → Portfolio
- /portfolio/:slug → Individual project ← NEXT!
- /about → About
- /resume → Resume
- /contact → Contact
```

---

## Next Steps

🎉 **Congratulations!** You've completed Class 7!

Your portfolio website now has:
- ✅ A reusable Breadcrumb component
- ✅ A dedicated Portfolio page showing all projects
- ✅ A `/portfolio` route connected to the page

**Try it out:**
1. Navigate to `/portfolio` in your browser
2. See all your projects in a grid
3. Notice there's no "View More" button
4. Check that the browser tab title says "Portfolio | Your Name"

**In Class 8**, you'll build:
- Individual project detail pages (`/portfolio/p1`, `/portfolio/p2`, etc.)
- Dynamic routing with `useParams()`
- Expanded project data with full descriptions
- Using the Breadcrumb component to show navigation hierarchy

---

**Excellent work!** Your portfolio is getting more robust with each class. The Portfolio page gives visitors a clear, organized view of all your work! 🚀
