# Class 7: Building the Portfolio Page

**Component:** `src/pages/Portfolio.jsx`  
**Type:** Page Component  
**Purpose:** Display all projects in a grid layout on a dedicated page

---

## What is a Portfolio Page?

The **Portfolio page** is a dedicated page that shows **all** of your projects in one place. It's different from the Home page's Projects section:

| Home Page | Portfolio Page |
|-----------|----------------|
| Shows **3 projects** (preview) | Shows **ALL projects** (complete list) |
| Has "View More Projects" button | No "View More" button needed |
| Uses `<h2>` heading (section) | Uses `<h1>` heading (main page heading) |
| Part of a larger page | Dedicated full page |

---

## Component Reuse: The Smart Way to Build

Here's the exciting part: **we don't need to rebuild the projects grid from scratch!**

We already have a `Projects` component (built in Class 4) that:
- Displays a grid of project cards
- Has customizable props (title, description, heading level, etc.)
- Can show all projects or just a few
- Can show or hide the "View More" button

We can **reuse** this component with different props to create the Portfolio page!

### This is the "Wrapper Page" Pattern

A **wrapper page** is a page component that primarily composes other components rather than building UI from scratch.

**Benefits:**
- ✅ Less code to write and maintain
- ✅ Consistent UI across different pages
- ✅ Changes to Projects component automatically apply everywhere
- ✅ Follows the DRY principle (Don't Repeat Yourself)

---

## How Props Customize Behavior

Let's compare how we use the `Projects` component in different contexts:

### On Home Page (from Class 4)
```jsx
<Projects
  title="Featured Projects"
  description="A selection of my work and case studies."
  headingLevel="h2"
  headingId="projects-section"
  showViewMore={true}
/>
```
- Shows **first 3 projects**
- Has a **"View More Projects" button**
- Uses `<h2>` (it's a section on a larger page)

### On Portfolio Page (what we'll build)
```jsx
<Projects
  title="Portfolio"
  description="Click any card to view details."
  headingLevel="h1"
  headingId="portfolio-heading"
  showViewMore={false}
/>
```
- Shows **ALL projects**
- **No "View More" button** (already showing everything)
- Uses `<h1>` (it's the main page heading)

**Same component, different behavior!** This is the power of props.

---

## Building the Portfolio Page

### STAGE 1: Create File and Imports

Let's start by creating the file and importing what we need.

**📁 Create file:** `src/pages/Portfolio.jsx`

```jsx
import Projects from "../components/sections/Projects.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Portfolio() {
  return (
    
  );
}
```

**What's happening:**

1. **`import Projects from "../components/sections/Projects.jsx"`**
   - Import the Projects section component we built in Class 4
   - We're reusing this component on a dedicated page

2. **`import SEO from "../components/ui/SEO.jsx"`**
   - Import the SEO component for page metadata
   - Sets the page title, description, and URL for search engines and social sharing

3. **Path explanation:**
   - We're in `pages/` folder
   - We need to go up one level (`../`) to reach `components/`
   - Then navigate to `sections/Projects.jsx` or `ui/SEO.jsx`

---

### STAGE 2: Fragment Wrapper

Add a React Fragment to wrap multiple components at the root level.

```jsx
import Projects from "../components/sections/Projects.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Portfolio() {
  return (
    <>
      
    </>
  );
}
```

**What's happening:**

1. **`<>` and `</>`**
   - This is a **React Fragment** (shorthand syntax)
   - Allows us to return multiple components without adding extra DOM elements
   - Equivalent to `<React.Fragment>...</React.Fragment>`

2. **Why do we need a Fragment?**
   - React components can only return **one root element**
   - We need to return both `<SEO>` and `<Projects>`
   - A Fragment lets us group them without adding a wrapper `<div>`

**Alternative without Fragment:**
```jsx
// ❌ This won't work (two root elements)
return (
  <SEO ... />
  <Projects ... />
);

// ✅ This works but adds unnecessary <div> to DOM
return (
  <div>
    <SEO ... />
    <Projects ... />
  </div>
);

// ✅ Best: Fragment (no extra DOM element)
return (
  <>
    <SEO ... />
    <Projects ... />
  </>
);
```

---

### STAGE 3: Add SEO Component

Let's add the SEO component to set page metadata.

```jsx
import Projects from "../components/sections/Projects.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore my work and projects showcasing my skills as a UX Designer and Frontend Developer."
        url="/portfolio"
      />
      
    </>
  );
}
```

**What's happening:**

1. **`title="Portfolio"`**
   - Sets the browser tab title to "Portfolio | Your Name"
   - The SEO component adds your name automatically
   - This is what appears in search results and bookmarks

2. **`description="Explore my work..."`**
   - Meta description for search engines
   - Shows up in search results below the title
   - Helps users decide whether to click your link
   - Should be concise and compelling (under 160 characters)

3. **`url="/portfolio"`**
   - The canonical URL for this page
   - Helps search engines understand the page's permanent location
   - Used for social media sharing (Open Graph, Twitter Cards)

**Customization:**
Feel free to customize the description to match your personal brand:
- "Browse my portfolio of UX/UI design projects and web development work."
- "See my latest projects in web design, development, and user experience."
- "Discover my portfolio showcasing creative solutions to real-world problems."

---

### STAGE 4: Add Projects Component (Final Component)

Now let's add the Projects component with props configured for a full portfolio page.

**📁 Complete file:** `src/pages/Portfolio.jsx`

```jsx
import Projects from "../components/sections/Projects.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore my work and projects showcasing my skills as a UX Designer and Frontend Developer."
        url="/portfolio"
      />
      <Projects
        title="Portfolio"
        description="Click any card to view details."
        headingLevel="h1"
        headingId="portfolio-heading"
        showViewMore={false}
      />
    </>
  );
}
```

**What's happening:**

1. **`title="Portfolio"`**
   - The main heading text for the page
   - Will be rendered as an `<h1>` (see next prop)

2. **`description="Click any card to view details."`**
   - Subheading text below the main heading
   - Gives users context about what to do (click cards for more info)
   - Short and actionable

3. **`headingLevel="h1"`**
   - Uses `<h1>` tag for the main heading
   - **Important for SEO and accessibility**
   - Each page should have exactly one `<h1>`
   - On the Home page, we used `h2` because it's just a section

4. **`headingId="portfolio-heading"`**
   - Adds an `id` attribute to the heading
   - Useful for accessibility (skip links, screen readers)
   - Provides an anchor for potential deep linking

5. **`showViewMore={false}`**
   - **Key prop!** Hides the "View More Projects" button
   - On the Home page, this was `true` (showed only 3 projects + button)
   - Here it's `false` because we're showing ALL projects already
   - The Projects component checks this prop and conditionally renders the button

---

## How the Projects Component Uses These Props

Let's peek at how the `Projects` component (from Class 4) uses these props:

```jsx
// Inside Projects.jsx (you built this in Class 4)
export default function Projects({
  title = "Projects",
  description = "",
  headingLevel = "h2",
  headingId,
  showViewMore = true,
}) {
  // Create heading based on headingLevel prop
  const Heading = headingLevel; // "h1" or "h2"
  
  // Determine how many projects to show
  const projectsToShow = showViewMore ? projects.slice(0, 3) : projects;
  
  return (
    <Section>
      <Container>
        <Heading id={headingId}>{title}</Heading>
        <p>{description}</p>
        
        {/* Show 3 or ALL projects based on showViewMore */}
        <div className="grid">
          {projectsToShow.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Only show button if showViewMore is true */}
        {showViewMore && (
          <Button href="/portfolio">View More Projects</Button>
        )}
      </Container>
    </Section>
  );
}
```

**See how it works?**
- When `showViewMore={true}` (Home page): Shows 3 projects + button
- When `showViewMore={false}` (Portfolio page): Shows all projects, no button
- Same component, different behavior!

---

## File Structure Context

Here's where our new file fits in the project:

```
src/
├── pages/
│   ├── Home.jsx          (Homepage - shows preview of 3 projects)
│   ├── Portfolio.jsx     ← NEW! (Full portfolio - shows all projects)
│   ├── About.jsx
│   ├── Resume.jsx
│   └── Contact.jsx
├── components/
│   ├── sections/
│   │   └── Projects.jsx  (Reused by both Home and Portfolio!)
│   └── ui/
│       └── SEO.jsx       (Used by all pages)
```

**The pattern:**
- **Page components** (`pages/`) handle routing and page-level concerns
- **Section components** (`components/sections/`) provide reusable content blocks
- **UI components** (`components/ui/`) provide reusable interface elements

---

## Testing the Component

**After creating this file**, you won't see changes yet because we need to add the route in `main.jsx` (next guide).

But you can verify:
1. **No errors:** File should save without errors
2. **Imports resolved:** VSCode should recognize the import paths
3. **Props match:** Props passed to `Projects` should match its expected prop types

---

## Comparison: Home vs. Portfolio

Let's see the visual difference:

### Home Page (Projects Section)
```
┌─────────────────────────────────────┐
│      Featured Projects (h2)         │
│  A selection of my work and case    │
│           studies.                  │
│                                     │
│  [Project 1] [Project 2] [Project 3]│
│                                     │
│     [View More Projects Button]     │
└─────────────────────────────────────┘
```

### Portfolio Page
```
┌─────────────────────────────────────┐
│         Portfolio (h1)              │
│   Click any card to view details.   │
│                                     │
│  [Project 1] [Project 2] [Project 3]│
│  [Project 4] [Project 5] [Project 6]│
│        [... all projects ...]       │
│                                     │
│      (No "View More" button)        │
└─────────────────────────────────────┘
```

---

## SEO Best Practices

Our Portfolio page follows SEO best practices:

1. **One `<h1>` per page**
   - The main "Portfolio" heading is `<h1>`
   - Tells search engines what the page is about
   - Home page uses `<h2>` for the Projects section (not the main page heading)

2. **Unique page title**
   - Browser tab shows "Portfolio | Your Name"
   - Different from Home ("Your Name | UX Designer & Developer")
   - Helps users identify tabs

3. **Meta description**
   - Tells search engines what the page contains
   - Appears in search results
   - Encourages clicks from search

4. **Canonical URL**
   - `/portfolio` is the official URL for this page
   - Prevents duplicate content issues
   - Used in social media sharing

---

## What You've Learned

✅ **Component Reuse:**
- How to reuse section components as full pages
- The "wrapper page" pattern
- How props customize component behavior

✅ **React Concepts:**
- React Fragments (`<>...</>`)
- Why components need a single root element
- Prop customization

✅ **Page Design Patterns:**
- Difference between section components and page components
- When to show all data vs. a preview
- Conditional UI elements (View More button)

✅ **SEO Best Practices:**
- One `<h1>` per page
- Unique page titles and descriptions
- Canonical URLs

✅ **Project Structure:**
- Organization of pages vs. components
- How components can be reused in multiple contexts
- Import paths and file organization

---

## Common Questions

### "Why not just copy/paste the Projects code?"

**Answer:** Component reuse is better because:
- **Less code:** Write once, use many times
- **Consistency:** Both pages automatically match
- **Maintainability:** Fix a bug once, it's fixed everywhere
- **Flexibility:** Props allow customization without duplication

If you copy/pasted the code, you'd have to update both files every time you make a change!

---

### "Can I change the heading to something else?"

**Answer:** Absolutely! Customize the props to match your style:

```jsx
<Projects
  title="My Work"
  description="Browse through my projects and case studies."
  headingLevel="h1"
  headingId="my-work-heading"
  showViewMore={false}
/>
```

Or:
```jsx
<Projects
  title="All Projects"
  description="Explore my complete portfolio of design and development work."
  headingLevel="h1"
  headingId="all-projects"
  showViewMore={false}
/>
```

---

### "Why use a Fragment instead of a div?"

**Answer:**
- **Cleaner DOM:** No unnecessary wrapper elements in the HTML
- **Better performance:** Slightly fewer nodes in the DOM tree
- **Semantic HTML:** Only add elements when they have meaning

Fragments are React's way of grouping elements without adding extra HTML.

---

### "What if I want to show only certain projects on this page?"

**Answer:** Great question! You could modify the `Projects` component to accept a `filter` prop:

```jsx
// Future enhancement (not covered in this class)
<Projects
  title="Web Design Projects"
  filter="web-design"
  showViewMore={false}
/>
```

The Projects component would then filter `projects.filter(p => p.category === filter)`.

For now, we're showing all projects, but this is a common enhancement students add later!

---

## Next Steps

✨ **Portfolio page component is complete!** ✨

In the next guide, we'll **add the route** in `main.jsx` to connect the `/portfolio` URL to this page component. Once that's done, you'll be able to click "Portfolio" in the navbar and see all your projects!

**Coming up:**
- Add Portfolio route in `main.jsx`
- Test navigation from navbar
- See all projects displayed in a grid

---

## Troubleshooting

### Issue: Import errors

**Problem:** Red underlines on import statements

**Solution:**
- Check file paths are correct
- From `pages/Portfolio.jsx`, paths should be:
  - `"../components/sections/Projects.jsx"`
  - `"../components/ui/SEO.jsx"`
- Verify those files exist in your project
- Try saving the file (sometimes VSCode needs a moment to resolve imports)

---

### Issue: Fragment syntax error

**Problem:** Error with `<>` and `</>`

**Solution:**
- Make sure you're using a recent version of React (16.2+)
- If using older React, use `<React.Fragment>` instead:
  ```jsx
  return (
    <React.Fragment>
      <SEO ... />
      <Projects ... />
    </React.Fragment>
  );
  ```

---

### Issue: Props not working

**Problem:** Projects component doesn't respond to props

**Solution:**
- Verify you built the Projects component correctly in Class 4
- Check that Projects component accepts these props:
  - `title`, `description`, `headingLevel`, `headingId`, `showViewMore`
- Look for typos in prop names (case-sensitive!)

---

### Issue: SEO not showing

**Problem:** Browser tab title doesn't change

**Solution:**
- Verify SEO component was built correctly (Class 2)
- Check that `react-helmet-async` is installed
- Make sure App.jsx wraps the app in `<HelmetProvider>`
- Try hard-refreshing the browser (Cmd/Ctrl + Shift + R)

---

**Excellent work!** You've built a clean, reusable Portfolio page. Move on to the next guide to add the route and make it accessible! 🎉
