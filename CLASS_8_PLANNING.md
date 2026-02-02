# Class 8 Planning: Dynamic Project Pages

**Last Updated:** January 17, 2026

---

## Overview

Class 8 introduces students to **dynamic routing** and **route parameters**, where they'll build individual project detail pages that display different content based on the URL. This is a pivotal class that transforms the portfolio from a static site into a truly dynamic application.

### What Students Will Build

1. **Update `data/projects.js`** - Add detailed fields to the first 4 projects (overview, highlights, role, tools, timeline, client)
2. **`pages/Project.jsx`** - Individual project detail page using dynamic routing
3. **Update `main.jsx`** - Add the dynamic route `/portfolio/:slug`

### Key Learning Outcomes

By the end of this class, students will:

- Understand **dynamic routing** and **route parameters**
- Use the **`useParams()` hook** to access URL parameters
- Use the **`useNavigate()` hook** for programmatic navigation
- Build **conditional rendering** for missing data
- Implement **404 error handling** for invalid routes
- Create **detailed data structures** for complex content
- Use the **Breadcrumb component** built in Class 7
- Understand **data relationships** between list and detail views

---

## Pedagogical Approach

### Teaching Sequence

This class follows a data-first approach:

1. **Expand Projects Data** (20-25 min)
   - Start with data because it's concrete and visible
   - Students understand what information a project needs
   - Shows the structure before building the UI
   - Only expand 4 projects (p1-p4) to save time, keep others as simple placeholders

2. **Build Project Detail Page** (25-30 min)
   - Build the component that consumes the data
   - Introduce React Router hooks (`useParams`, `useNavigate`)
   - Implement error handling (404 page)
   - Use Breadcrumb component from Class 7

3. **Add Dynamic Route** (5-10 min)
   - Connect the URL pattern to the component
   - Test the complete flow

### Why This Order?

1. **Data First**: Students see what a "complete" project looks like before building the UI
2. **Component Second**: Building the UI makes sense when you know what data you're displaying
3. **Route Last**: The route connects everything together

This progression helps students understand the relationship between data, UI, and routing.

---

## Component Breakdown

### 1. Projects Data Update

**File:** `src/data/projects.js`

**What Changes:**

- Expand first 4 projects with detailed information
- Keep remaining projects (p5-p10) as simple placeholders
- Add new fields: `overview`, `highlights`, `role`, `tools`, `timeline`, `client`

**New Fields:**

| Field        | Type   | Description                  | Example                                      |
| ------------ | ------ | ---------------------------- | -------------------------------------------- |
| `overview`   | string | Detailed project description | "This project addressed the challenge of..." |
| `highlights` | array  | Key achievements/results     | ["Increased engagement by 45%", ...]         |
| `role`       | string | Student's role in project    | "UX Designer & Frontend Developer"           |
| `tools`      | array  | Technologies/tools used      | ["Figma", "React", "TypeScript"]             |
| `timeline`   | string | Project duration             | "3 months"                                   |
| `client`     | string | Client or organization       | "Tech Startup"                               |

**Key Teaching Points:**

- Not all projects need all fields (some are optional)
- Arrays allow for lists of items (highlights, tools)
- Strings work for most text content
- Real-world data is often incomplete (handle gracefully)

---

### 2. Project Detail Page

**File:** `src/pages/Project.jsx`

**Purpose:** Display full details for a single project based on URL parameter.

**Key Features:**

1. **Dynamic data loading** using `useParams()`
2. **404 handling** for invalid project IDs
3. **Breadcrumb navigation** showing hierarchy
4. **"Go Back" button** using `useNavigate()`
5. **Conditional rendering** for optional fields
6. **SEO metadata** for each project

**React Hooks Used:**

| Hook            | Purpose                 | Example                        |
| --------------- | ----------------------- | ------------------------------ |
| `useParams()`   | Get URL parameter       | `const { slug } = useParams()` |
| `useNavigate()` | Programmatic navigation | `navigate(-1)` (go back)       |

**Layout Structure:**

```
┌─────────────────────────────────────┐
│ Breadcrumb: Home > Portfolio > P1  │
├─────────────────────────────────────┤
│ Go Back button                      │
├─────────────────────────────────────┤
│ Project Title (h1)                  │
│ Blurb                               │
├─────────────────────────────────────┤
│ [Image]      │  Overview            │
│              │  Highlights (list)   │
│              │  Project Details     │
│              │  - Role              │
│              │  - Tools             │
│              │  - Timeline          │
│              │  - Client            │
└─────────────────────────────────────┘
```

**Key Concepts:**

- **Array.find()**: Locate specific project by ID
- **Conditional rendering**: Show/hide sections based on data
- **Early return**: Handle 404 before main render
- **Template literals**: Dynamic SEO and content

---

### 3. Dynamic Route

**File:** `src/main.jsx`

**What's Added:**

```jsx
{ path: "portfolio/:slug", element: <Project /> }
```

**Route Parameter:**

- `:slug` is a **route parameter** (dynamic part of URL)
- Matches any value: `/portfolio/p1`, `/portfolio/p2`, etc.
- Accessible via `useParams()` in the component

**URL Patterns:**

- `/portfolio/p1` → Shows project with `id: "p1"`
- `/portfolio/p2` → Shows project with `id: "p2"`
- `/portfolio/invalid` → Shows 404 error (project not found)

---

## Teaching Strategy

### Part 1: Expanding Projects Data

**Introduction (3-5 min):**

- Discuss the difference between preview data (cards) and detail data (full page)
- Show real-world examples (blog posts, e-commerce products)
- Explain why we're only updating 4 projects (time-saving, focus on learning)

**Build Process (20 min):**

- Update first project with all fields
- Update remaining 3 projects (students can copy/modify)
- Discuss each field's purpose and content guidelines
- Emphasize that this is placeholder content (they'll customize later)

**Key Teaching Points:**

- **Data structure design**: Planning fields before building UI
- **Array vs. string**: When to use each data type
- **Optional fields**: How some projects might not have all info
- **Realistic content**: Using plausible data even if it's placeholder

---

### Part 2: Building the Project Detail Page

**Introduction (3-5 min):**

- Explain dynamic routing concept
- Show how URL changes but component stays the same
- Preview what students will build

**Build Process (25 min):**

**STAGE 1: Imports and hooks (5 min)**

- Import React Router hooks
- Import UI components (Section, Container, Button, Breadcrumb, SEO)
- Import data (projects array)
- Import icons

**STAGE 2: Get URL parameter and find project (5 min)**

- Use `useParams()` to get slug from URL
- Use `useNavigate()` for navigation
- Use `Array.find()` to locate project
- Explain the relationship between URL and data

**STAGE 3: 404 handling (5 min)**

- Check if project exists
- Early return with error message
- "Go Back" button using navigate(-1)
- Discuss user experience for errors

**STAGE 4: Main content structure (5 min)**

- SEO component with dynamic data
- Breadcrumb with project title
- Go Back button
- Header with title and blurb

**STAGE 5: Project details grid (5 min)**

- Two-column layout (image + details)
- Overview section
- Conditional rendering for highlights
- Conditional rendering for project details

**Testing:**

- Navigate to `/portfolio/p1`, `/portfolio/p2`, etc.
- Test invalid URLs (`/portfolio/invalid`)
- Test "Go Back" button
- Verify breadcrumb links work

---

### Part 3: Adding the Dynamic Route

**Introduction (2 min):**

- Explain route parameters (`:slug`)
- Show how it matches any value
- Connect to useParams() usage in component

**Build Process (5 min):**

- Import Project component
- Add route with `:slug` parameter
- Explain placement (after portfolio list route)

**Testing:**

- Click project cards from home or portfolio page
- Verify detail pages load correctly
- Test direct URL entry
- Check browser back/forward buttons

---

## Connection to Previous Classes

### From Class 4: Projects Data & Cards

- Students built the projects.js file (simple version)
- Now they're expanding it with detailed fields
- ProjectCard links already point to `/portfolio/{id}`

### From Class 7: Breadcrumb Component

- Students built the Breadcrumb component
- Now they see it in action on detail pages
- Reinforces the value of building reusable components

### From Class 2: Routing Basics

- Students set up React Router
- Now they're using advanced features (params, navigate)
- Building on foundational knowledge

---

## Key Concepts Explained

### What is a Route Parameter?

A **route parameter** is a dynamic part of a URL that can match different values.

**Example:**

```jsx
{ path: "portfolio/:slug", element: <Project /> }
```

**Matches:**

- `/portfolio/p1` (slug = "p1")
- `/portfolio/p2` (slug = "p2")
- `/portfolio/my-awesome-project` (slug = "my-awesome-project")

**Doesn't match:**

- `/portfolio` (no slug)
- `/portfolio/p1/edit` (extra segment)

---

### What is useParams()?

`useParams()` is a React Router hook that returns an object containing all route parameters.

**Example:**

```jsx
// URL: /portfolio/p1
const { slug } = useParams();
console.log(slug); // "p1"
```

**Use cases:**

- Loading specific data based on URL
- Dynamic page titles
- Breadcrumb generation
- SEO metadata

---

### What is useNavigate()?

`useNavigate()` is a React Router hook that allows programmatic navigation.

**Example:**

```jsx
const navigate = useNavigate();

// Go back
navigate(-1);

// Go to specific route
navigate("/portfolio");

// Go forward
navigate(1);
```

**Use cases:**

- "Go Back" buttons
- Redirects after form submission
- Navigation after login
- Programmatic route changes

---

### What is Array.find()?

`Array.find()` is a JavaScript method that returns the first element matching a condition.

**Example:**

```jsx
const projects = [
  { id: "p1", title: "Project 1" },
  { id: "p2", title: "Project 2" },
  { id: "p3", title: "Project 3" },
];

const project = projects.find((p) => p.id === "p2");
console.log(project); // { id: "p2", title: "Project 2" }
```

**Use cases:**

- Finding a specific item by ID
- Locating an object with specific properties
- Checking if an item exists

---

## Common Student Questions

### "Why use :slug instead of :id?"

**Answer:**

- "slug" is a common term in web development for URL-friendly identifiers
- Could also use `:id` or `:projectId` - the name doesn't matter functionally
- Slug often implies a human-readable URL (like "my-awesome-project" instead of "12345")
- We're using IDs like "p1", "p2" for simplicity, but in real-world projects, slugs are often more descriptive

---

### "What happens if I visit /portfolio/999?"

**Answer:**

- `projects.find()` returns `undefined` (no project with id "999")
- The `if (!project)` check catches this
- We render a 404 error message with a "Go Back" button
- This is called **defensive programming** - handling edge cases gracefully

---

### "Can I have multiple route parameters?"

**Answer:**
Absolutely! Example:

```jsx
{ path: "portfolio/:category/:slug", element: <Project /> }

// Matches: /portfolio/web/my-project
const { category, slug } = useParams();
// category = "web", slug = "my-project"
```

We're keeping it simple with one parameter for now, but this is a common pattern for complex apps!

---

### "Why only update 4 projects?"

**Answer:**

- **Time management**: Typing 10 detailed project descriptions takes too long for class
- **Learning focus**: The concept is the same regardless of quantity
- **Placeholder strategy**: Keep others simple so structure exists, students can fill in later
- **Real-world parallel**: Often you build features incrementally, not all at once

---

## Data Structure Best Practices

### Optional vs. Required Fields

**Required fields** (every project must have):

- `id` - Unique identifier
- `title` - Project name
- `blurb` - Short description
- `image` - Visual representation
- `href` - Link to detail page

**Optional fields** (nice to have, but not required):

- `overview` - Detailed description
- `highlights` - Key achievements
- `role` - Your involvement
- `tools` - Technologies used
- `timeline` - Project duration
- `client` - Who it was for

**Why make fields optional?**

- Some projects might be personal (no client)
- Some might be ongoing (no timeline)
- Some might be older (you don't remember all tools)
- Flexibility makes data structure more realistic

---

## Testing & Validation

After completing Class 8, students should be able to:

1. **Navigate to project details**
   - Click any project card from Home or Portfolio
   - See full project information

2. **Verify data displays correctly**
   - Title, blurb, overview show
   - Highlights appear as bulleted list
   - Project details section shows role, tools, timeline, client

3. **Test breadcrumb navigation**
   - Click "Home" in breadcrumb → goes to homepage
   - Click "Portfolio" in breadcrumb → goes to portfolio page
   - Current project name appears (not clickable)

4. **Test "Go Back" button**
   - Clicking button returns to previous page
   - Works from both Home and Portfolio entry points

5. **Test error handling**
   - Visit `/portfolio/invalid-id`
   - See "Project not found" message
   - "Go Back" button works

6. **Verify SEO**
   - Browser tab shows project title
   - Check page source for meta tags (right-click → View Page Source)

---

## File Creation Order

1. **`CLASS_8_PROJECTS_DATA_UPDATE.md`** - Expand projects.js with detailed fields
2. **`CLASS_8_PROJECT_PAGE.md`** - Build the Project detail page component
3. **`CLASS_8_DYNAMIC_ROUTE.md`** - Add the dynamic route to main.jsx

This order ensures students have data ready before building the UI, and the UI ready before connecting it to routing.

---

## Summary

Class 8 is a transformative lesson that teaches:

- **Dynamic routing** and how URLs drive content
- **React Router hooks** for advanced navigation
- **Error handling** for better user experience
- **Data relationships** between list and detail views
- **Conditional rendering** based on data availability

By the end, students will have a fully functional project portfolio where each project has its own dedicated page with detailed information.

**This is a major milestone** - the portfolio is now truly dynamic and scalable. Students can easily add more projects just by adding data to the array!

---

## Next Class Preview

In **Class 9**, students will build the About page with:

- Complex data structures (bio, values, experience, education, interests)
- Timeline layouts for experience
- Multi-section page composition
- Semantic HTML for biographical content

The About page will be the most content-rich page in the portfolio, showcasing everything students have learned so far.
