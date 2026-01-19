# Class 7 Planning: Portfolio List Page

**Last Updated:** January 16, 2026

---

## Overview

Class 7 introduces students to the Portfolio List Page, where they'll create a dedicated page that displays all their projects in a grid layout. This class focuses on **page layout patterns**, **component reuse**, and **breadcrumb navigation** - essential patterns for building multi-page applications.

### What Students Will Build

1. **`components/ui/Breadcrumb.jsx`** - A reusable breadcrumb navigation component for page hierarchy
2. **`pages/Portfolio.jsx`** - A full portfolio page that reuses the Projects section component
3. **Route update in `main.jsx`** - Add the `/portfolio` route to the application

### Key Learning Outcomes

By the end of this class, students will:

- Understand how to **reuse section components as full pages**
- Build a **breadcrumb navigation component** for improved UX
- Recognize **page layout patterns** (wrapper pages vs. full pages)
- Practice **component composition** and props customization
- Understand the difference between **section components** and **page components**

---

## Pedagogical Approach

### Teaching Sequence

This class follows a bottom-up approach, building from smallest to largest component:

1. **Breadcrumb Component** (15-20 min)
   - Start with the smallest new component
   - Introduces navigation UI patterns
   - Teaches array mapping for navigation items
   - Demonstrates accessibility features (aria-label, aria-current)
   - Uses react-router-dom Link for client-side navigation

2. **Portfolio Page** (10-15 min)
   - Shows how to reuse existing components
   - Demonstrates component props customization
   - Introduces the concept of "wrapper pages"
   - Reinforces SEO component usage

3. **Route Setup** (5-10 min)
   - Updates main.jsx to add the portfolio route
   - Reinforces React Router concepts from Class 2
   - Shows how pages connect to routes

### Why This Order?

1. **Breadcrumb First**: Students build a new, focused component before tackling the page
2. **Portfolio Page Second**: Students see how simple a page can be when reusing components
3. **Route Last**: Students complete the connection by adding the route

This progression reinforces the value of component reuse and modular design.

---

## Component Breakdown

### 1. Breadcrumb Component

**File:** `src/components/ui/Breadcrumb.jsx`

**Purpose:** Provides visual navigation hierarchy showing the user's current location in the site.

**Props:**
- `items` (array): Array of breadcrumb items, each with `label` and optional `href`

**Key Concepts:**
- Array mapping to render navigation items
- Conditional rendering (Link vs. span for current page)
- React Icons integration (FaChevronRight)
- Accessibility (aria-label, aria-current)
- Styling with Tailwind (hover states, focus states)

**Dependencies:**
- `react-router-dom` (Link)
- `react-icons/fa` (FaChevronRight)

---

### 2. Portfolio Page

**File:** `src/pages/Portfolio.jsx`

**Purpose:** Displays all projects in a grid layout on a dedicated page.

**Key Concepts:**
- Component reuse (Projects section component)
- Props customization for different contexts
- SEO component integration
- Fragment wrapper pattern (`<>...</>`)

**Props Passed to Projects Component:**
- `title="Portfolio"` - Page heading
- `description="Click any card to view details."` - Subheading
- `headingLevel="h1"` - Semantic heading for the page
- `headingId="portfolio-heading"` - Accessibility ID
- `showViewMore={false}` - Hide "View More" button (showing all projects)

**Dependencies:**
- `Projects` section component (already built)
- `SEO` component (already built)

---

### 3. Route Update

**File:** `src/main.jsx`

**Purpose:** Add the Portfolio page to the application's routing configuration.

**Key Concepts:**
- React Router configuration
- Route paths and element mapping
- Nested routes under App layout

**Route Added:**
```jsx
{ path: "portfolio", element: <Portfolio /> }
```

---

## Teaching Strategy

### Breadcrumb Component

**Introduction (2-3 min):**
- Explain breadcrumb navigation and its purpose
- Show real-world examples (e-commerce sites, documentation)
- Discuss when breadcrumbs improve UX (deep navigation hierarchies)

**Build Process (15 min):**
- **STAGE 1:** Component structure and props
- **STAGE 2:** Array mapping and item rendering
- **STAGE 3:** Conditional rendering (Link vs. span)
- **STAGE 4:** Styling and accessibility
- **STAGE 5:** Icon integration

**Testing:**
- Students will test breadcrumbs on the Project detail page (Class 8)
- For now, explain the component and its future use

---

### Portfolio Page

**Introduction (2-3 min):**
- Explain the difference between Home page (preview) and Portfolio page (full list)
- Discuss component reuse as a best practice
- Show how props customize component behavior

**Build Process (10 min):**
- **STAGE 1:** Page imports
- **STAGE 2:** Component structure with Fragment
- **STAGE 3:** SEO component setup
- **STAGE 4:** Projects component with custom props

**Key Teaching Points:**
- **Component Reuse:** The same Projects component works in different contexts
- **Props Control Behavior:** `showViewMore={false}` changes component output
- **Semantic HTML:** Using `h1` on a full page vs. `h2` on Home
- **SEO Best Practices:** Each page gets unique metadata

---

### Route Setup

**Introduction (1-2 min):**
- Review React Router from Class 2
- Explain how routes connect URLs to pages

**Build Process (5 min):**
- Import Portfolio component
- Add route to router configuration
- Test navigation from Navbar

**Testing:**
- Click "Portfolio" in navigation
- Verify page displays all projects
- Check browser address bar shows `/portfolio`
- Verify page title updates in browser tab

---

## Connection to Previous Classes

### From Class 2: Navbar & Routing
- Students already have a "Portfolio" link in the Navbar
- This class makes that link functional
- Reinforces React Router concepts

### From Class 4: Projects Section
- Reuses the entire Projects section component
- Students see the value of building reusable components
- Props allow customization for different contexts

### From Class 2: SEO Component
- Every page uses SEO for metadata
- Reinforces the pattern established in Home and other pages

---

## Looking Ahead to Class 8

**Breadcrumb Preparation:**
The Breadcrumb component built in this class will be used extensively in Class 8 for the individual Project detail pages. Students will see:
```jsx
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: project.title }
  ]}
/>
```

This forward-thinking approach helps students understand that components are often built for future reuse.

---

## Common Student Questions

### "Why build a whole page that just uses one component?"

**Answer:** This is a great pattern called a "wrapper page" or "layout page." It:
- Separates page-level concerns (routing, SEO) from section logic
- Allows the Projects section to work in multiple contexts (Home preview, Portfolio full list)
- Keeps components focused and reusable
- Provides a place for page-specific metadata (SEO)

---

### "Why do we need breadcrumbs?"

**Answer:** Breadcrumbs improve user experience by:
- Showing users where they are in the site hierarchy
- Providing quick navigation to parent pages
- Reducing the number of clicks to get back to previous pages
- Improving accessibility for screen reader users
- Being a common, familiar pattern users expect

---

### "Can I customize the breadcrumb styling?"

**Answer:** Absolutely! The component uses Tailwind classes, so you can:
- Change colors, sizes, spacing
- Modify hover and focus states
- Adjust the separator icon
- Add animations or transitions

---

## File Creation Order

1. **`CLASS_7_BREADCRUMB.md`** - Build the Breadcrumb UI component first
2. **`CLASS_7_PORTFOLIO.md`** - Create the Portfolio page using existing components
3. **`CLASS_7_ROUTE_UPDATE.md`** - Connect the page to the application routing

This order ensures students have all necessary components before integrating them.

---

## Testing & Validation

After completing Class 7, students should be able to:

1. **Navigate to Portfolio page** via Navbar link
2. **See all projects** displayed in a grid (not just 3 like Home)
3. **Verify SEO** - Browser tab shows "Portfolio | Your Name"
4. **Confirm no "View More" button** appears
5. **Test breadcrumb component** (will be used in Class 8)

---

## Summary

Class 7 is a shorter, consolidation class that demonstrates the power of component reuse. Students will:
- Build a useful navigation UI component (Breadcrumb)
- Create a full page using existing section components
- Reinforce routing concepts from Class 2
- See how thoughtful component design pays off through reuse

By the end, students will have a functional Portfolio page and understand how to build pages that compose existing components rather than starting from scratch every time.

---

**Next Class Preview:**

In Class 8, students will build individual Project detail pages using dynamic routing (`/portfolio/:slug`), learn the `useParams()` hook, expand their projects data file with detailed fields, and use the Breadcrumb component to show navigation hierarchy.
