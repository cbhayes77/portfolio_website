# Class 7: Building the Breadcrumb Component

**Component:** `src/components/ui/Breadcrumb.jsx`
**Type:** UI Component
**Purpose:** Provide visual navigation hierarchy showing the user's current location in the site

---

## What is a Breadcrumb?

A **breadcrumb** is a navigation element that shows users their current location within a website's hierarchy. It's called "breadcrumb" because it's like leaving a trail of breadcrumbs to find your way back (like in the Hansel and Gretel fairy tale).

### Real-World Examples

You've seen breadcrumbs on many websites:

- **Amazon:** Home > Electronics > Computers > Laptops > MacBook Pro
- **Documentation sites:** Docs > Getting Started > Installation
- **Your portfolio:** Home > Portfolio > Project Name

### Why Use Breadcrumbs?

1. **User Orientation:** Shows users where they are
2. **Quick Navigation:** One-click access to parent pages
3. **Accessibility:** Helps screen reader users understand page hierarchy
4. **SEO Benefits:** Search engines use breadcrumbs to understand site structure

---

## When to Use Breadcrumbs

✅ **Use breadcrumbs when:**

- Your site has 3+ levels of hierarchy
- Users might enter deep pages from search results
- You want to reduce clicks to navigate up

❌ **Don't use breadcrumbs when:**

- Your site only has 1-2 levels (like a simple landing page)
- Navigation is already simple and clear

### Our Use Case

In our portfolio, we'll use breadcrumbs on the **individual Project detail pages** (built in Class 8):

```
Home > Portfolio > Project Name
```

This helps visitors understand they're viewing a specific project within the portfolio section.

---

## Component Overview

### Props

| Prop    | Type  | Description                 | Example   |
| ------- | ----- | --------------------------- | --------- |
| `items` | Array | Array of breadcrumb objects | See below |

### Item Object Structure

Each item in the `items` array has:

- `label` (string, required): Text to display
- `href` (string, optional): Link destination (omit for current page)

**Example:**

```jsx
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Project Name" }, // No href = current page
  ]}
/>
```

---

## Building the Breadcrumb Component

### STAGE 1: Component Setup and Imports

Let's start by creating the file and importing what we need.

**📁 Create file:** `src/components/ui/Breadcrumb.jsx`

```jsx
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumb({ items }) {
  return (

  );
}
```

**What's happening:**

1. **`import { Link } from "react-router-dom"`**
   - React Router's `Link` component for client-side navigation
   - Prevents full page reloads when clicking breadcrumb links

2. **`import { FaChevronRight } from "react-icons/fa"`**
   - A right-pointing chevron icon (>)
   - Used as a separator between breadcrumb items
   - From the Font Awesome icon library

3. **`export default function Breadcrumb({ items })`**
   - Component receives an `items` prop (array of breadcrumb objects)
   - We'll map over this array to render each breadcrumb

---

### STAGE 2: Navigation Structure and Accessibility

Now let's add the semantic HTML structure with proper accessibility attributes.

```jsx
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-white/70"></ol>
    </nav>
  );
}
```

**What's happening:**

1. **`<nav aria-label="Breadcrumb">`**
   - Semantic HTML `<nav>` element for navigation
   - `aria-label="Breadcrumb"` tells screen readers this is breadcrumb navigation
   - `className="mb-6"` adds bottom margin (spacing below breadcrumbs)

2. **`<ol className="flex items-center space-x-2 text-sm text-white/70">`**
   - `<ol>` (ordered list) because breadcrumbs have a sequential order
   - `flex items-center` arranges items horizontally and aligns them vertically
   - `space-x-2` adds horizontal spacing between items
   - `text-sm` makes text smaller
   - `text-white/70` makes text 70% opacity white (muted appearance)

**Why `<ol>` instead of `<ul>`?**
Breadcrumbs represent a hierarchical path with a specific order (Home → Portfolio → Project), so an ordered list is more semantically correct than an unordered list.

---

### STAGE 3: Mapping Through Items

Let's map through the `items` array to render each breadcrumb.

```jsx
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-white/70">
        {items.map((item, index) => (
          <li key={index} className="flex items-center"></li>
        ))}
      </ol>
    </nav>
  );
}
```

**What's happening:**

1. **`items.map((item, index) => (...))`**
   - Loops through each item in the `items` array
   - `item` is the current breadcrumb object (e.g., `{ label: "Home", href: "/" }`)
   - `index` is the position in the array (0, 1, 2...)

2. **`<li key={index} className="flex items-center">`**
   - Each breadcrumb is a list item
   - `key={index}` helps React track items (required when mapping)
   - `flex items-center` allows the separator icon and link to align horizontally

**Note on `key={index}`:**
Usually, using the array index as a key is discouraged because it can cause issues if the array is reordered. However, for breadcrumbs, the order is fixed and unlikely to change, so it's acceptable here.

---

### STAGE 4: Separator Icon

Let's add the separator icon (chevron) between breadcrumb items.

```jsx
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-white/70">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <FaChevronRight className="w-3 h-3 mx-2 text-white/40" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

**What's happening:**

1. **`{index > 0 && <FaChevronRight ... />}`**
   - Conditional rendering: only show chevron if `index > 0`
   - We DON'T want a chevron before the first item
   - Example: ✅ Home > Portfolio > Project (no chevron before "Home")

2. **`<FaChevronRight className="w-3 h-3 mx-2 text-white/40" />`**
   - `w-3 h-3` sets icon width and height (small size)
   - `mx-2` adds horizontal margin on both sides
   - `text-white/40` makes the icon more subtle (40% opacity)

**Conditional Rendering Breakdown:**

```jsx
{
  index > 0 && <FaChevronRight />;
}
```

- JavaScript logical AND (`&&`)
- If `index > 0` is true, render the icon
- If `index > 0` is false (first item), render nothing

---

### STAGE 5: Link or Span (Final Component)

Finally, let's add the breadcrumb text - either as a clickable link or plain text for the current page.

**📁 Complete file:** `src/components/ui/Breadcrumb.jsx`

```jsx
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-white/70">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <FaChevronRight className="w-3 h-3 mx-2 text-white/40" />}
            {item.href ? (
              <Link
                to={item.href}
                className="text-white/70 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black rounded px-1"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

**What's happening:**

1. **`{item.href ? (...) : (...)}`**
   - Ternary operator: if `item.href` exists, render a Link; otherwise, render a span
   - Items with `href` are clickable (parent pages)
   - Items without `href` represent the current page (not clickable)

2. **Link (for parent pages):**

   ```jsx
   <Link
     to={item.href}
     className="text-white/70 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black rounded px-1"
   >
     {item.label}
   </Link>
   ```

   - `to={item.href}` navigates to the parent page
   - `text-white/70` muted text color (70% opacity)
   - `hover:text-white` brightens on hover
   - `transition` smooths color changes
   - `focus:outline-none focus:ring-2 focus:ring-white/40` custom focus ring for accessibility
   - `focus:ring-offset-2 focus:ring-offset-black` adds space around focus ring
   - `rounded px-1` rounds corners and adds small horizontal padding

3. **Span (for current page):**
   ```jsx
   <span className="text-white" aria-current="page">
     {item.label}
   </span>
   ```

   - `text-white` brighter text (100% opacity) to show it's the current page
   - `aria-current="page"` tells screen readers this is the current page
   - Not clickable (no link)

---

## How It Works: Data Flow

Let's trace how the component works with example data:

```jsx
<Breadcrumb
  items={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }, { label: "My Project" }]}
/>
```

**Rendering process:**

1. **First iteration (index = 0):**
   - `index > 0` is false → no chevron
   - `item.href` is "/" → render Link
   - Output: `Home` (clickable)

2. **Second iteration (index = 1):**
   - `index > 0` is true → show chevron (>)
   - `item.href` is "/portfolio" → render Link
   - Output: `> Portfolio` (clickable)

3. **Third iteration (index = 2):**
   - `index > 0` is true → show chevron (>)
   - `item.href` is undefined → render span
   - Output: `> My Project` (not clickable, brighter text)

**Final visual result:**

```
Home > Portfolio > My Project
```

---

## Testing the Component

We'll fully test this component in **Class 8** when we build the Project detail page. For now, you can verify:

1. **No errors:** The component should save without errors
2. **Props structure:** The component accepts an `items` array
3. **Conditional logic:** Links render for items with `href`, spans for items without

---

## Accessibility Features

Our breadcrumb component includes several accessibility best practices:

1. **`<nav aria-label="Breadcrumb">`**
   - Identifies the navigation region for screen readers

2. **`<ol>` (ordered list)**
   - Semantic HTML showing sequential hierarchy

3. **`aria-current="page"`**
   - Tells screen readers which breadcrumb is the current page

4. **Focus states**
   - Custom focus ring for keyboard navigation
   - `focus:ring-2 focus:ring-white/40` visible focus indicator

5. **Color contrast**
   - Links use sufficient contrast against the background
   - Current page is brighter to show emphasis

---

## Styling Breakdown

Let's look at the key Tailwind classes:

### Navigation Container

```jsx
className = "mb-6";
```

- `mb-6` → `margin-bottom: 1.5rem` (24px spacing below breadcrumbs)

### List

```jsx
className = "flex items-center space-x-2 text-sm text-white/70";
```

- `flex` → Flexbox layout (horizontal)
- `items-center` → Vertically center items
- `space-x-2` → 8px horizontal spacing between children
- `text-sm` → `font-size: 0.875rem` (14px)
- `text-white/70` → White text at 70% opacity

### Chevron Icon

```jsx
className = "w-3 h-3 mx-2 text-white/40";
```

- `w-3 h-3` → 12px × 12px icon size
- `mx-2` → 8px horizontal margin on both sides
- `text-white/40` → White at 40% opacity (very subtle)

### Link (Clickable Breadcrumb)

```jsx
className =
  "text-white/70 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black rounded px-1";
```

- `text-white/70` → Default muted text
- `hover:text-white` → Brightens on hover
- `transition` → Smooth color transitions
- `focus:outline-none` → Remove default browser outline
- `focus:ring-2 focus:ring-white/40` → Custom focus ring (2px, 40% opacity)
- `focus:ring-offset-2` → 2px space between element and ring
- `focus:ring-offset-black` → Black space (matches background)
- `rounded` → Slightly rounded corners
- `px-1` → Small horizontal padding (4px)

### Span (Current Page)

```jsx
className = "text-white";
```

- `text-white` → Full opacity (brighter to show it's current)

---

## Common Patterns

### Adding More Levels

Breadcrumbs can have any number of levels:

```jsx
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Web Projects", href: "/portfolio/web" },
    { label: "E-commerce Sites", href: "/portfolio/web/ecommerce" },
    { label: "Online Store Project" },
  ]}
/>
```

### Dynamic Breadcrumbs

In Class 8, we'll create breadcrumbs dynamically based on route data:

```jsx
const project = { title: "My Awesome Project" };

<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: project.title }, // Dynamic project name
  ]}
/>;
```

---

## What You've Learned

✅ **Navigation Patterns:**

- How breadcrumbs improve user experience
- When to use breadcrumbs vs. other navigation

✅ **React Concepts:**

- Array mapping with `.map()`
- Conditional rendering with ternary operators
- Props destructuring (`{ items }`)

✅ **Accessibility:**

- Semantic HTML (`<nav>`, `<ol>`)
- ARIA attributes (`aria-label`, `aria-current`)
- Keyboard focus states

✅ **React Router:**

- Using `Link` for client-side navigation
- Dynamic routing preparation

✅ **Tailwind CSS:**

- Flexbox layouts
- Opacity utilities
- Focus ring customization
- Hover and transition effects

---

## Next Steps

✨ **Breadcrumb component is complete!** ✨

In the next guide, we'll build the **Portfolio page** which reuses the Projects section component. Then in **Class 8**, we'll use this Breadcrumb component on individual Project detail pages.

**Coming up:**

- Portfolio page (wrapper page pattern)
- Route setup in main.jsx
- Seeing breadcrumbs in action (Class 8)

---

## Troubleshooting

### Issue: Icon not showing

**Problem:** Chevron icon doesn't appear

**Solution:**

- Verify `react-icons` is installed: `npm install react-icons`
- Check import statement: `import { FaChevronRight } from "react-icons/fa"`
- Ensure icon classes are correct: `className="w-3 h-3 mx-2 text-white/40"`

---

### Issue: Links not working

**Problem:** Clicking breadcrumb links doesn't navigate

**Solution:**

- Verify React Router is set up correctly (should be from Class 2)
- Check that `react-router-dom` is installed
- Ensure `to={item.href}` prop is present on `<Link>`
- Verify routes exist in `main.jsx`

---

### Issue: Current page still clickable

**Problem:** The current page breadcrumb is a link instead of plain text

**Solution:**

- Check that the current page item doesn't have an `href` property
- Verify ternary operator: `{item.href ? <Link> : <span>}`
- The last item should NOT have `href`

---

### Issue: Breadcrumbs too bright/too dim

**Problem:** Text opacity doesn't look right

**Solution:**

- Adjust opacity values:
  - Links: `text-white/70` (70% opacity)
  - Current page: `text-white` (100% opacity)
  - Chevron: `text-white/40` (40% opacity)
- Try different values like `text-white/60` or `text-white/80`

---

### Issue: Focus ring not visible

**Problem:** Can't see focus ring when tabbing through breadcrumbs

**Solution:**

- Check focus classes: `focus:ring-2 focus:ring-white/40`
- Try increasing ring width: `focus:ring-4`
- Try brighter color: `focus:ring-white/60`
- Ensure `focus:outline-none` is present (removes default outline)

---

**Great work!** You've built a reusable, accessible breadcrumb navigation component. Move on to the next guide to build the Portfolio page! 🎉
