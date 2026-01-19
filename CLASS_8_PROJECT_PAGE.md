# Class 8: Building the Project Detail Page

**Component:** `src/pages/Project.jsx`  
**Type:** Dynamic Page Component  
**Purpose:** Display full details for individual projects using dynamic routing

---

## What is Dynamic Routing?

So far, every page you've built has had a **fixed URL**:
- `/` always shows the Home page
- `/portfolio` always shows the Portfolio page
- `/about` always shows the About page

But what if you want **one page component** to display **different content** based on the URL?

**That's dynamic routing!**

### Example: Blog Posts

Imagine a blog with thousands of posts. You don't want to create a separate component for each post:

```jsx
// ❌ BAD: Creating a component for every post
<Route path="/blog/post-1" element={<Post1 />} />
<Route path="/blog/post-2" element={<Post2 />} />
<Route path="/blog/post-3" element={<Post3 />} />
// ... thousands more!
```

Instead, you create **ONE component** that reads the URL and shows the right content:

```jsx
// ✅ GOOD: One component handles all posts
<Route path="/blog/:slug" element={<BlogPost />} />

// Matches:
// /blog/my-first-post → Shows "my-first-post"
// /blog/react-tips → Shows "react-tips"
// /blog/anything → Shows "anything"
```

### Our Use Case: Project Details

We have 10 projects (p1, p2, ..., p10). Instead of creating 10 separate components, we'll create **one `Project` component** that works for all projects:

```jsx
// ONE component handles ALL projects!
<Route path="/portfolio/:slug" element={<Project />} />

// Matches:
// /portfolio/p1 → Shows project data for "p1"
// /portfolio/p2 → Shows project data for "p2"
// /portfolio/p10 → Shows project data for "p10"
```

**The `:slug` part is a route parameter** - it's like a variable in the URL!

---

## How It Works: The Flow

Let's trace what happens when someone clicks a project card:

**Step 1: User clicks a project card**
- Card has: `<Link to="/portfolio/p1">`
- URL changes to: `http://localhost:5173/portfolio/p1`

**Step 2: React Router matches the route**
- Looks at route config: `{ path: "portfolio/:slug", element: <Project /> }`
- Matches! The `:slug` part captured "p1"
- Renders the `Project` component

**Step 3: Component gets the parameter**
- `useParams()` hook reads the URL parameter
- Returns: `{ slug: "p1" }`

**Step 4: Component finds the project data**
- Uses `Array.find()` to search projects array
- Finds the project where `id === "p1"`

**Step 5: Component renders the project**
- Uses the project data to display title, overview, highlights, etc.
- All dynamic based on the URL!

**Same component, different data based on URL!**

---

## React Router Hooks Explained

### useParams()

**What it does:** Returns an object containing URL parameters.

**Example:**
```jsx
import { useParams } from "react-router-dom";

function Project() {
  const { slug } = useParams();
  console.log(slug); // "p1" if URL is /portfolio/p1
}
```

**Destructuring explained:**
```jsx
// Route definition:
{ path: "portfolio/:slug", element: <Project /> }

// In component:
const { slug } = useParams();  // Gets the :slug part

// If you had multiple parameters:
{ path: "portfolio/:category/:slug", element: <Project /> }
const { category, slug } = useParams();
```

---

### useNavigate()

**What it does:** Returns a function to navigate programmatically (without links).

**Example:**
```jsx
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();
  
  // Navigate to a specific route
  navigate('/portfolio');
  
  // Go back one page (like browser back button)
  navigate(-1);
  
  // Go forward one page
  navigate(1);
}
```

**Use cases:**
- "Go Back" buttons
- Redirects after form submission
- Navigation after login/logout
- Programmatic route changes based on logic

---

## Building the Project Detail Page

This is a complex component with many parts, so we'll build it in stages.

### STAGE 1: Imports and Component Setup

Let's start by creating the file and importing everything we need.

**📁 Create file:** `src/pages/Project.jsx`

```jsx
import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import SEO from "../components/ui/SEO.jsx";
import { projects } from "../data/projects.js";
import { FaArrowLeft } from "react-icons/fa";

export default function Project() {
  
}
```

**What's happening:**

1. **`import { useParams, useNavigate } from "react-router-dom"`**
   - `useParams` - Get URL parameter (the project ID)
   - `useNavigate` - Navigate programmatically (for "Go Back" button)

2. **UI Components**
   - `Section`, `Container` - Layout components from Class 1
   - `Button` - Button component from Class 1
   - `Breadcrumb` - Breadcrumb component from Class 7
   - `SEO` - SEO component from Class 2

3. **`import { projects } from "../data/projects.js"`**
   - Import the projects array we just updated
   - We'll search this array to find the right project

4. **`import { FaArrowLeft } from "react-icons/fa"`**
   - Left arrow icon for "Go Back" button
   - From Font Awesome icon library

---

### STAGE 2: Get URL Parameter and Find Project

Now let's use the hooks to get the URL parameter and find the matching project.

```jsx
import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import SEO from "../components/ui/SEO.jsx";
import { projects } from "../data/projects.js";
import { FaArrowLeft } from "react-icons/fa";

export default function Project() {
  const { slug } = useParams(); // expects id like "p1", "p2"...
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === slug);

  return (
    
  );
}
```

**What's happening:**

1. **`const { slug } = useParams();`**
   - Calls `useParams()` hook to get URL parameters
   - Destructures `slug` from the returned object
   - If URL is `/portfolio/p1`, then `slug = "p1"`
   - The parameter name matches the route definition (`:slug`)

2. **`const navigate = useNavigate();`**
   - Calls `useNavigate()` hook to get navigation function
   - We'll use this for the "Go Back" button later

3. **`const project = projects.find((p) => p.id === slug);`**
   - `projects.find()` searches the projects array
   - `(p) => p.id === slug` is the search condition
   - Finds the first project where `id` matches `slug`
   - Returns the matching project object, or `undefined` if not found

**Array.find() explained:**
```jsx
const projects = [
  { id: "p1", title: "Project 1" },
  { id: "p2", title: "Project 2" },
  { id: "p3", title: "Project 3" },
];

// URL is /portfolio/p2, so slug = "p2"
const project = projects.find((p) => p.id === "p2");
// Returns: { id: "p2", title: "Project 2" }

// URL is /portfolio/invalid, so slug = "invalid"
const project = projects.find((p) => p.id === "invalid");
// Returns: undefined (no match)
```

---

### STAGE 3: Handle Project Not Found (404 Error)

Before rendering the main content, let's handle the case where the project doesn't exist.

```jsx
import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import SEO from "../components/ui/SEO.jsx";
import { projects } from "../data/projects.js";
import { FaArrowLeft } from "react-icons/fa";

export default function Project() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <Section>
        <Container>
          <h1 className="heading-section">Project not found</h1>
          <p className="mt-2 body-default">We couldn't find a project at /portfolio/{slug}</p>
          <div className="mt-6">
            <Button onClick={() => navigate(-1)} variant="secondary" size="sm">
              Go Back
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    
  );
}
```

**What's happening:**

1. **`if (!project)`**
   - Checks if `project` is falsy (undefined, null, false, etc.)
   - If `find()` didn't find a match, `project` will be `undefined`
   - `!undefined` is `true`, so the condition triggers

2. **Early return**
   - Immediately returns error UI
   - The code below this block won't run if there's no project
   - This is called "early return" or "guard clause" pattern

3. **Error UI**
   - Uses `Section` and `Container` for consistent layout
   - Shows clear error message
   - Displays the invalid slug so user knows what went wrong
   - Provides "Go Back" button for easy recovery

4. **`<Button onClick={() => navigate(-1)}`**
   - `onClick` handler calls `navigate(-1)`
   - `-1` means "go back one page in history"
   - Like clicking the browser's back button
   - Arrow function: `() => navigate(-1)` prevents immediate execution

**Why this matters:**
- Better user experience (helpful error instead of blank page)
- Prevents crashes from trying to access properties of `undefined`
- Gives users a way to recover (Go Back button)

---

### STAGE 4: SEO, Breadcrumb, and Header

Now let's start building the main content with SEO, breadcrumb navigation, and the project header.

```jsx
export default function Project() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <Section>
        <Container>
          <h1 className="heading-section">Project not found</h1>
          <p className="mt-2 body-default">We couldn't find a project at /portfolio/{slug}</p>
          <div className="mt-6">
            <Button onClick={() => navigate(-1)} variant="secondary" size="sm">
              Go Back
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <SEO
        title={project.title}
        description={
          project.blurb || `${project.title} - A project by YOUR NAME HERE showcasing UX design and development skills.`
        }
        url={`/portfolio/${project.id}`}
        image={project.image}
      />
      <Container>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }, { label: project.title }]}
        />

        <nav className="body-small subheading-muted">
          <Button onClick={() => navigate(-1)} variant="link" leftIcon={<FaArrowLeft className="w-4 h-4" />}>
            Go Back
          </Button>
        </nav>

        <header className="mt-4 max-w-3xl">
          <h1 className="heading-page">{project.title}</h1>
          <p className="mt-2 body-default">{project.blurb}</p>
        </header>

        
      </Container>
    </Section>
  );
}
```

**What's happening:**

1. **SEO Component**
   ```jsx
   <SEO
     title={project.title}
     description={project.blurb || `${project.title} - A project...`}
     url={`/portfolio/${project.id}`}
     image={project.image}
   />
   ```
   - `title={project.title}` - Dynamic page title (e.g., "E-Commerce Platform")
   - `description={project.blurb || ...}` - Use blurb, or fallback template if missing
   - `url={`/portfolio/${project.id}`}` - Template literal for dynamic URL
   - `image={project.image}` - Project image for social sharing

2. **Breadcrumb Navigation**
   ```jsx
   <Breadcrumb
     items={[
       { label: "Home", href: "/" },
       { label: "Portfolio", href: "/portfolio" },
       { label: project.title }  // No href = current page
     ]}
   />
   ```
   - Shows: Home > Portfolio > Project Name
   - First two items are clickable (have `href`)
   - Last item (current page) is not clickable
   - Uses the Breadcrumb component from Class 7!

3. **Go Back Button**
   ```jsx
   <nav className="body-small subheading-muted">
     <Button 
       onClick={() => navigate(-1)} 
       variant="link" 
       leftIcon={<FaArrowLeft className="w-4 h-4" />}
     >
       Go Back
     </Button>
   </nav>
   ```
   - Wrapped in `<nav>` with styles for subtle appearance
   - `variant="link"` - Styled as a link (not a button)
   - `leftIcon` - Arrow icon to the left of text
   - `onClick={() => navigate(-1)}` - Goes back in browser history

4. **Page Header**
   ```jsx
   <header className="mt-4 max-w-3xl">
     <h1 className="heading-page">{project.title}</h1>
     <p className="mt-2 body-default">{project.blurb}</p>
   </header>
   ```
   - `<header>` - Semantic HTML for page introduction
   - `max-w-3xl` - Limits width for readability
   - `heading-page` - Custom style from index.css
   - `{project.title}` - Dynamic title from data
   - `{project.blurb}` - Dynamic description from data

---

### STAGE 5: Project Details Grid (Final Component)

Finally, let's add the two-column grid with the project image and detailed information.

**📁 Complete file:** `src/pages/Project.jsx`

```jsx
import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import SEO from "../components/ui/SEO.jsx";
import { projects } from "../data/projects.js";
import { FaArrowLeft } from "react-icons/fa";

export default function Project() {
  const { slug } = useParams(); // expects id like "p1", "p2"...
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <Section>
        <Container>
          <h1 className="heading-section">Project not found</h1>
          <p className="mt-2 body-default">We couldn't find a project at /portfolio/{slug}</p>
          <div className="mt-6">
            <Button onClick={() => navigate(-1)} variant="secondary" size="sm">
              Go Back
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <SEO
        title={project.title}
        description={
          project.blurb || `${project.title} - A project by YOUR NAME HERE showcasing UX design and development skills.`
        }
        url={`/portfolio/${project.id}`}
        image={project.image}
       />
      <Container>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }, { label: project.title }]}
        />

        <nav className="body-small subheading-muted">
          <Button onClick={() => navigate(-1)} variant="link" leftIcon={<FaArrowLeft className="w-4 h-4" />}>
            Go Back
          </Button>
        </nav>

        <header className="mt-4 max-w-3xl">
          <h1 className="heading-page">{project.title}</h1>
          <p className="mt-2 body-default">{project.blurb}</p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card-base rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} hero`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          {/* Project Details on Right */}
          <div>
            <h2 className="subheading-primary">Overview</h2>
            <p className="mt-2 body-default">{project.overview || "No overview available for this project."}</p>

            {project.highlights && project.highlights.length > 0 && (
              <>
                <h3 className="mt-6 font-semibold">Highlights</h3>
                <ul className="mt-2 list-disc pl-5 body-default space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}

            {(project.role || project.tools || project.timeline || project.client) && (
              <>
                <h3 className="mt-6 font-semibold">Project Details</h3>
                <div className="mt-2 body-default space-y-2">
                  {project.role && (
                    <div>
                      <span className="font-medium">Role:</span> {project.role}
                    </div>
                  )}
                  {project.tools && project.tools.length > 0 && (
                    <div>
                      <span className="font-medium">Tools:</span> {project.tools.join(", ")}
                    </div>
                  )}
                  {project.timeline && (
                    <div>
                      <span className="font-medium">Timeline:</span> {project.timeline}
                    </div>
                  )}
                  {project.client && (
                    <div>
                      <span className="font-medium">Client:</span> {project.client}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
```

**What's happening in the grid:**

1. **Two-column responsive grid**
   ```jsx
   <div className="mt-8 grid gap-6 md:grid-cols-2">
   ```
   - `mt-8` - Top margin (spacing from header)
   - `grid` - CSS Grid layout
   - `gap-6` - Space between grid items
   - `md:grid-cols-2` - Two columns on medium screens and up (stacks on mobile)

2. **Left column: Project image**
   ```jsx
   <div className="card-base rounded-2xl overflow-hidden">
     <img
       src={project.image}
       alt={`${project.title} hero`}
       className="w-full h-auto object-cover"
       loading="lazy"
     />
   </div>
   ```
   - `card-base` - Custom style from index.css (card background)
   - `rounded-2xl` - Large rounded corners
   - `overflow-hidden` - Clips image to rounded corners
   - `alt={`${project.title} hero`}` - Dynamic alt text for accessibility
   - `loading="lazy"` - Lazy load image (performance optimization)

3. **Right column: Overview section**
   ```jsx
   <h2 className="subheading-primary">Overview</h2>
   <p className="mt-2 body-default">
     {project.overview || "No overview available for this project."}
   </p>
   ```
   - Shows `project.overview` if it exists
   - `||` (OR operator) provides fallback text if overview is missing
   - Handles projects like p5-p10 that don't have detailed data

4. **Highlights section (conditional)**
   ```jsx
   {project.highlights && project.highlights.length > 0 && (
     <>
       <h3 className="mt-6 font-semibold">Highlights</h3>
       <ul className="mt-2 list-disc pl-5 body-default space-y-1">
         {project.highlights.map((highlight, index) => (
           <li key={index}>{highlight}</li>
         ))}
       </ul>
     </>
   )}
   ```
   - **Double condition**: `project.highlights && project.highlights.length > 0`
     - First check: Does `highlights` exist?
     - Second check: Is the array not empty?
   - Only renders if BOTH conditions are true
   - `project.highlights.map()` loops through highlights array
   - Each highlight becomes a `<li>` item
   - `key={index}` required for React lists

5. **Project Details section (conditional)**
   ```jsx
   {(project.role || project.tools || project.timeline || project.client) && (
     <>
       <h3 className="mt-6 font-semibold">Project Details</h3>
       <div className="mt-2 body-default space-y-2">
         {project.role && (
           <div>
             <span className="font-medium">Role:</span> {project.role}
           </div>
         )}
         {project.tools && project.tools.length > 0 && (
           <div>
             <span className="font-medium">Tools:</span> {project.tools.join(", ")}
           </div>
         )}
         {project.timeline && (
           <div>
             <span className="font-medium">Timeline:</span> {project.timeline}
           </div>
         )}
         {project.client && (
           <div>
             <span className="font-medium">Client:</span> {project.client}
           </div>
         )}
       </div>
     </>
   )}
   ```
   - **Outer condition**: Show section only if AT LEAST ONE detail exists
   - **Inner conditions**: Show each field only if it exists
   - `project.tools.join(", ")` - Converts array to comma-separated string
     - `["React", "Vue"]` becomes `"React, Vue"`
   - Each detail has a label and value

---

## Understanding Conditional Rendering

This component uses **conditional rendering** extensively. Let's break it down:

### Pattern 1: OR operator for fallback

```jsx
{project.overview || "No overview available for this project."}
```

**How it works:**
- If `project.overview` exists and is truthy → use it
- If `project.overview` is falsy (undefined, null, "") → use fallback text

**Example:**
```jsx
// Project has overview
{ overview: "Detailed description" }
// Displays: "Detailed description"

// Project has no overview
{ }  // overview is undefined
// Displays: "No overview available for this project."
```

---

### Pattern 2: AND operator for conditional rendering

```jsx
{project.highlights && project.highlights.length > 0 && (
  <div>Highlights content</div>
)}
```

**How it works:**
- First check: `project.highlights` - Does it exist?
- Second check: `project.highlights.length > 0` - Is array not empty?
- If BOTH are true → render content
- If EITHER is false → render nothing

**Why two checks?**
- If `project.highlights` is `undefined`, checking `.length` would cause an error
- First check ensures the property exists before accessing `.length`

---

### Pattern 3: Multiple conditions with OR

```jsx
{(project.role || project.tools || project.timeline || project.client) && (
  <div>Project Details content</div>
)}
```

**How it works:**
- Show section if ANY of these fields exist
- If ALL are undefined → don't show section (no empty "Project Details" heading)

---

## Array Methods Used

### Array.find()

```jsx
const project = projects.find((p) => p.id === slug);
```

**What it does:** Returns the first element that matches the condition.

**Parameters:**
- Callback function that returns `true` or `false`
- `p` is each project in the array (parameter name is arbitrary)
- `p.id === slug` is the condition

**Returns:**
- The matching project object, or `undefined` if no match

---

### Array.map()

```jsx
{project.highlights.map((highlight, index) => (
  <li key={index}>{highlight}</li>
))}
```

**What it does:** Transforms each array item into JSX.

**Parameters:**
- Callback function that returns JSX
- `highlight` is each string in the highlights array
- `index` is the position (0, 1, 2, ...)

**Returns:**
- Array of JSX elements (`<li>` tags in this case)

---

### Array.join()

```jsx
{project.tools.join(", ")}
```

**What it does:** Converts array to a string with separator.

**Example:**
```jsx
["React", "Vue", "TypeScript"].join(", ")
// Returns: "React, Vue, TypeScript"

["Figma", "Sketch"].join(" • ")
// Returns: "Figma • Sketch"
```

---

## Testing the Component

After building this component, you won't see it yet because we need to add the route in `main.jsx` (next guide). But you can verify:

1. **No errors:** File should save without errors
2. **Imports resolved:** All import paths should be recognized
3. **Syntax correct:** No red underlines in VSCode

---

## Visual Layout

Here's what the page structure looks like:

```
┌────────────────────────────────────────────┐
│ Home > Portfolio > Project Name            │ ← Breadcrumb
├────────────────────────────────────────────┤
│ ← Go Back                                  │ ← Navigation
├────────────────────────────────────────────┤
│ Project Title (h1)                         │
│ Blurb description                          │ ← Header
├───────────────────┬────────────────────────┤
│                   │  Overview              │
│   Project Image   │  Detailed description  │
│                   │                        │
│                   │  Highlights            │
│                   │  • Achievement 1       │
│                   │  • Achievement 2       │
│                   │                        │
│                   │  Project Details       │
│                   │  Role: ...             │
│                   │  Tools: ...            │
│                   │  Timeline: ...         │
│                   │  Client: ...           │
└───────────────────┴────────────────────────┘
     Left Column          Right Column
```

**On mobile (smaller screens):**
```
┌──────────────────────┐
│ Breadcrumb           │
├──────────────────────┤
│ Go Back              │
├──────────────────────┤
│ Title                │
│ Blurb                │
├──────────────────────┤
│ Project Image        │ ← Stacks vertically
├──────────────────────┤
│ Overview             │
│ Highlights           │
│ Project Details      │
└──────────────────────┘
```

---

## What You've Learned

✅ **Dynamic Routing:**
- How route parameters work (`:slug`)
- One component handling multiple URLs
- URL-driven content display

✅ **React Router Hooks:**
- `useParams()` to access URL parameters
- `useNavigate()` for programmatic navigation
- When to use each hook

✅ **Data Manipulation:**
- `Array.find()` to locate specific items
- `Array.map()` to render lists
- `Array.join()` to format arrays as strings

✅ **Conditional Rendering:**
- OR operator (`||`) for fallbacks
- AND operator (`&&`) for conditional display
- Multiple conditions for complex logic
- Handling missing or incomplete data

✅ **Error Handling:**
- 404 pages for invalid routes
- Graceful degradation (missing data)
- User-friendly error messages
- Recovery options (Go Back button)

✅ **Component Composition:**
- Reusing components (Breadcrumb, Button, SEO)
- Building complex layouts from simple parts
- Consistent patterns across pages

✅ **SEO & Accessibility:**
- Dynamic meta tags based on content
- Semantic HTML (`<header>`, `<nav>`)
- Alt text for images
- Breadcrumb navigation

---

## Common Questions

### "What's the difference between slug and id?"

**Answer:**
- **In our code**: We're using `id` in the data and `slug` in the URL parameter
- **slug** is a common web term for URL-friendly identifiers
- **id** can be anything (numbers, UUIDs, slugs)
- We could rename `:slug` to `:id` if we wanted - it's just a parameter name!

**Real-world example:**
```javascript
// Using numeric IDs
{ id: 123, title: "My Project" }
// URL: /portfolio/123

// Using slugs (URL-friendly strings)
{ id: "my-awesome-project", title: "My Awesome Project" }
// URL: /portfolio/my-awesome-project
```

Both work! We're using simple IDs like "p1", "p2" for simplicity.

---

### "Why check both project.highlights and project.highlights.length?"

**Answer:**
**Safety!** If we only checked `project.highlights.length`:

```jsx
// ❌ Could cause an error
{project.highlights.length > 0 && (...)}
// If highlights is undefined, this tries to access undefined.length → ERROR!

// ✅ Safe approach
{project.highlights && project.highlights.length > 0 && (...)}
// First check ensures highlights exists before checking .length
```

JavaScript's `&&` operator **short-circuits**: if the first condition is false, it doesn't evaluate the second. This prevents errors!

---

### "What happens if I visit a project that doesn't have detailed data (like p5)?"

**Answer:**
The page still works! It shows:
- ✅ Title and blurb (all projects have these)
- ✅ Image (all projects have this)
- ✅ "No overview available" message (fallback text)
- ❌ No highlights section (hidden by conditional rendering)
- ❌ No project details section (hidden by conditional rendering)

This is **graceful degradation** - the page adapts to available data!

---

### "Can I add more fields to the project data?"

**Answer:**
Absolutely! Just:
1. Add the field to the data (e.g., `github: "https://github.com/..."`)
2. Add conditional rendering in the component:
   ```jsx
   {project.github && (
     <div>
       <span className="font-medium">GitHub:</span>
       <a href={project.github}>View Code</a>
     </div>
   )}
   ```

The pattern is the same for any field!

---

## Next Steps

✨ **Project detail page component is complete!** ✨

In the next guide, we'll **add the dynamic route** in `main.jsx` to connect URLs to this component. Once that's done, you'll be able to:
- Click any project card
- See the full project details
- Navigate with breadcrumbs
- Use the "Go Back" button
- Test error handling with invalid URLs

---

## Troubleshooting

### Issue: TypeError: Cannot read property 'title' of undefined

**Problem:** Trying to access `project.title` when project doesn't exist

**Solution:**
- Check that the `if (!project)` block comes BEFORE you use `project`
- The early return prevents this error
- Make sure you didn't accidentally delete the error handling

---

### Issue: useParams is not a function

**Problem:** Import error or typo

**Solution:**
- Check import: `import { useParams } from "react-router-dom"`
- Make sure it's destructured with curly braces `{ }`
- Verify React Router is installed (should be from Class 2)

---

### Issue: Highlights not showing even though data exists

**Problem:** Conditional rendering logic issue

**Solution:**
- Check the condition: `project.highlights && project.highlights.length > 0`
- Verify the data structure in projects.js (should be an array)
- Check for typos: `highlights` (plural) not `highlight`
- Console log to debug: `console.log(project.highlights)`

---

### Issue: Tools showing as [object Object] instead of text

**Problem:** Forgot to use `.join()`

**Solution:**
```jsx
// ❌ Wrong (displays array as object)
<span>Tools: {project.tools}</span>

// ✅ Correct (joins array into string)
<span>Tools: {project.tools.join(", ")}</span>
```

---

### Issue: Go Back button doesn't work

**Problem:** Arrow function syntax or navigate not defined

**Solution:**
- Check arrow function: `onClick={() => navigate(-1)}`
- Must have arrow function! Not just `onClick={navigate(-1)}`
  - `onClick={() => navigate(-1)}` creates a function (correct)
  - `onClick={navigate(-1)}` calls the function immediately (wrong)
- Verify `const navigate = useNavigate();` is defined

---

**Excellent work!** You've built a sophisticated dynamic page component. Move on to the next guide to connect it with routing! 🎉
