# Class 10: Building the Mobile Menu Component

**File:** `src/components/layout/MobileMenu.jsx`
**Type:** Layout Component
**Purpose:** Provide accessible mobile navigation with slide-over panel, focus management, and keyboard controls

---

## Why Build a Mobile Menu?

Your desktop navigation looks great on larger screens, but on mobile devices:

- Horizontal nav links are cramped
- Not enough space for all links
- Touch targets too small
- Poor user experience

**Solution:** A **mobile menu** that:

- Opens as a slide-over panel from the right
- Shows when user taps a menu button
- Closes when user taps backdrop, close button, or presses ESC
- Traps focus inside (keyboard accessibility)
- Locks body scroll (better UX)

This is a **professional mobile navigation pattern** used by modern websites.

---

## What We're Building

A mobile menu component with:

1. **Props-based control**: Parent (Navbar) controls when menu opens/closes
2. **Slide-over panel**: Animates in from the right side
3. **Backdrop overlay**: Dark background that closes menu when clicked
4. **Focus management**: Automatically focuses close button when opening
5. **Focus trap**: Keeps keyboard focus inside menu (can't tab to background)
6. **Keyboard support**: ESC key closes menu
7. **Scroll lock**: Prevents scrolling background when menu is open
8. **Accessibility**: ARIA attributes, semantic HTML, screen reader support

**This is the most advanced component you've built so far!**

---

## Step 1: Create the MobileMenu.jsx File

Navigate to `src/components/layout/` and create a new file called `MobileMenu.jsx`.

---

## Step 2: Set Up Imports

Let's start with the necessary imports.

**Add this code:**

```jsx
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button.jsx";
import { FaTimes } from "react-icons/fa";
```

**What we're importing:**

1. **`useEffect`**: React hook for side effects (keyboard events, scroll locking, focus)
2. **`useRef`**: React hook for DOM references (accessing elements directly)
3. **`NavLink`**: React Router link component with active state
4. **`Button`**: Our reusable button component
5. **`FaTimes`**: Close icon (X) from react-icons

**Why these hooks?**

- **`useEffect`**: Handle things outside of rendering (events, DOM manipulation)
- **`useRef`**: Store references to DOM elements without causing re-renders

---

## Step 3: Create the Component Function and Props

Now let's define the component and its props.

**Add this code:**

```jsx
export default function MobileMenu({ open, onClose, links }) {
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Effects and rendering will go here
}
```

**Understanding the props:**

1. **`open`** (boolean):
   - `true` = Menu is visible
   - `false` = Menu is hidden
   - Controlled by parent (Navbar)

2. **`onClose`** (function):
   - Callback function to close the menu
   - Called when user clicks backdrop, close button, or presses ESC
   - Parent handles the actual state change

3. **`links`** (array):
   - Array of navigation links
   - Same links used in desktop nav
   - Format: `[{ to: "/about", label: "About Me" }, ...]`

**Understanding the refs:**

4. **`panelRef`**:
   - Reference to the menu panel div
   - Used to find all focusable elements inside (for focus trap)

5. **`closeBtnRef`**:
   - Reference to the close button
   - Used to focus it when menu opens (accessibility)

**Why refs instead of state?**

- Don't trigger re-renders
- Provide direct DOM access
- Perfect for focus management

---

## Step 4: Add the useEffect Hook for Side Effects

This is the most complex part. The `useEffect` handles keyboard events, focus management, and scroll locking.

**After the ref declarations, add:**

```jsx
// Close on ESC + lock scroll while open + focus the close button + focus trap
useEffect(() => {
  if (!open) return;

  const onKey = (e) => {
    if (e.key === "Escape") onClose();

    // Simple focus trap - if tab reaches end, wrap to beginning
    if (e.key === "Tab") {
      const focusableElements = panelRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", onKey);

  // Focus close button for accessibility
  closeBtnRef.current?.focus();

  return () => {
    document.body.style.overflow = prevOverflow;
    document.removeEventListener("keydown", onKey);
  };
}, [open, onClose]);
```

**This is a LOT. Let's break it down step by step:**

### Early Return

```jsx
if (!open) return;
```

- If menu is not open, don't run any of the effect
- Prevents setting up listeners when menu is closed
- Effect only runs when `open` is `true`

### ESC Key Handler

```jsx
if (e.key === "Escape") onClose();
```

- When ESC key is pressed, close the menu
- Standard keyboard interaction (users expect ESC to close modals)
- Calls `onClose()` function passed from parent

### Focus Trap Setup

```jsx
const focusableElements = panelRef.current?.querySelectorAll(
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
);
```

**What this does:**

- Finds all **focusable elements** inside the menu panel
- **Focusable elements**: buttons, links, inputs, selects, textareas, elements with tabindex
- `[tabindex]:not([tabindex="-1"])`: Elements with tabindex except -1 (explicitly non-focusable)
- `?.`: Optional chaining (if panelRef.current is null, don't error)

**Why we need this:**

- To create a list of elements the user can tab through
- To know the first and last focusable element
- To cycle focus when reaching the end

### Get First and Last Elements

```jsx
const firstElement = focusableElements?.[0];
const lastElement = focusableElements?.[focusableElements.length - 1];
```

- **First element**: Close button (focused first)
- **Last element**: Contact CTA button (focused last)
- Used to cycle focus (wrap around)

### Focus Trap Logic

```jsx
if (e.shiftKey && document.activeElement === firstElement) {
  e.preventDefault();
  lastElement?.focus();
}
```

**Scenario 1: Shift+Tab on first element**

- User is on close button (first element)
- User presses Shift+Tab (backwards tab)
- **Normal behavior**: Would leave menu and focus background
- **Our behavior**: Prevent default, focus last element instead
- **Result**: Focus wraps to bottom of menu

```jsx
else if (!e.shiftKey && document.activeElement === lastElement) {
  e.preventDefault();
  firstElement?.focus();
}
```

**Scenario 2: Tab on last element**

- User is on Contact button (last element)
- User presses Tab (forward tab)
- **Normal behavior**: Would leave menu and focus background
- **Our behavior**: Prevent default, focus first element instead
- **Result**: Focus wraps to top of menu

**Visual flow:**

```
Close Button (first) ←────┐
↓ Tab                     │
About Link                │
↓ Tab                     │ Shift+Tab wraps
Portfolio Link            │
↓ Tab                     │
Resume Link               │
↓ Tab                     │
Contact Button (last) ────┘
  Tab wraps back to top
```

**Why this matters:**

- **Keyboard users** can't accidentally leave the menu
- **Screen reader users** stay in navigation context
- **Meets accessibility standards** (WCAG 2.1)

### Scroll Lock

```jsx
const prevOverflow = document.body.style.overflow;
document.body.style.overflow = "hidden";
```

- **Save current overflow value**: So we can restore it later
- **Set overflow to hidden**: Prevents scrolling the background page
- **Why**: When menu is open, you shouldn't be able to scroll content behind it

### Event Listener

```jsx
document.addEventListener("keydown", onKey);
```

- **Listen for keyboard events** on the entire document
- When any key is pressed, run the `onKey` function
- Handles ESC and Tab keys

### Auto-Focus Close Button

```jsx
closeBtnRef.current?.focus();
```

- When menu opens, immediately **focus the close button**
- **Why**:
  - Screen reader users know menu opened
  - Keyboard users know where they are
  - Can immediately close with Enter/Space
  - Accessibility best practice

### Cleanup Function

```jsx
return () => {
  document.body.style.overflow = prevOverflow;
  document.removeEventListener("keydown", onKey);
};
```

**This runs when:**

- Menu closes (effect re-runs)
- Component unmounts (cleanup)

**What it does:**

- **Restore scroll**: Set overflow back to previous value
- **Remove listener**: Stop listening to keyboard events
- **Prevent memory leaks**: Clean up after ourselves

**Why cleanup is important:**

- Without it, scroll stays locked after menu closes
- Event listeners pile up (memory leak)
- Page becomes broken

### Dependencies Array

```jsx
}, [open, onClose]);
```

**Effect re-runs when:**

- `open` changes (menu opens or closes)
- `onClose` changes (parent updates the function)

**Why include these?**

- `open`: Effect should only run when menu is open
- `onClose`: If parent changes close handler, we need the new one
- Missing dependencies = stale closures and bugs

---

## Step 5: Add Conditional Rendering

If the menu isn't open, we don't want to render anything.

**After the useEffect, before the return, add:**

```jsx
if (!open) return null;
```

**What this does:**

- If `open` is `false`, return `null` (render nothing)
- Menu component doesn't exist in DOM when closed
- Better performance (less DOM nodes)
- Clean approach

---

## Step 6: Build the Backdrop and Panel Structure

Now let's build the actual UI.

**Add the return statement:**

```jsx
return (
  <div className="fixed inset-0 z-50 md:hidden">
    {/* Backdrop */}
    <div className="absolute inset-0 bg-black/60" aria-hidden="true" onClick={onClose} />

    {/* Slide-over panel */}
    <div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="relative ml-auto h-full w-80 max-w-[80%] bg-black border-l border-white/10 shadow-xl shadow-black/30"
    >
      {/* Panel content will go here */}
    </div>
  </div>
);
```

**Breaking down the wrapper:**

1. **`fixed inset-0 z-50 md:hidden`**:
   - `fixed`: Fixed positioning (doesn't scroll with page)
   - `inset-0`: Cover entire viewport (top-0 right-0 bottom-0 left-0)
   - `z-50`: High z-index (appears above other content)
   - `md:hidden`: **Hidden on desktop** (≥768px) - only shows on mobile

### The Backdrop

2. **Backdrop Layer**:

   ```jsx
   <div className="absolute inset-0 bg-black/60" aria-hidden="true" onClick={onClose} />
   ```

   - `absolute inset-0`: Cover entire fixed container
   - `bg-black/60`: Semi-transparent black (60% opacity)
   - `aria-hidden="true"`: Decorative (not announced by screen readers)
   - `onClick={onClose}`: Clicking backdrop closes menu

**Visual effect:**

```
┌──────────────────────┐
│ [Dark backdrop]  ┌───┤ ← Menu panel
│                  │   │
│                  │   │
│                  │   │
└──────────────────┴───┘
```

### The Panel

3. **Panel Container**:
   ```jsx
   <div
     ref={panelRef}
     id="mobile-menu"
     role="dialog"
     aria-modal="true"
     aria-label="Mobile navigation"
     className="relative ml-auto h-full w-80 max-w-[80%] bg-black border-l border-white/10 shadow-xl shadow-black/30"
   >
   ```

**Attributes:**

- `ref={panelRef}`: Reference for focus trap
- `id="mobile-menu"`: ID for ARIA reference (menu button uses aria-controls)
- `role="dialog"`: Semantic role (modal dialog)
- `aria-modal="true"`: Tells screen readers this is a modal
- `aria-label="Mobile navigation"`: Describes the dialog

**Styling:**

- `relative`: Positioning context for children
- `ml-auto`: **Push to right side** (margin-left: auto)
- `h-full`: Full viewport height
- `w-80`: 320px wide (20rem)
- `max-w-[80%]`: **Never wider than 80% of viewport** (prevents too wide on small phones)
- `bg-black`: Black background
- `border-l border-white/10`: Left border (10% white) separates from backdrop
- `shadow-xl shadow-black/30`: Large shadow with black/30% color

**Why `ml-auto`?**

- Pushes panel to the right edge
- Common pattern (mobile menus slide from right)
- Could use `mr-auto` for left-side menu

**Why `max-w-[80%]`?**

- On very small screens (< 400px), 320px might be too wide
- 80% ensures there's always backdrop visible
- Better UX (can still see page behind)

---

## Step 7: Build the Panel Header

The header has the logo/brand and close button.

**Inside the panel div, add:**

```jsx
<div className="flex items-center justify-between p-4 border-b border-white/10">
  <a href="/" className="flex items-center gap-2" onClick={onClose}>
    <span className="inline-block h-6 w-6 rounded bg-white/80" aria-hidden />
    <span className="text-white font-semibold">Joe Anonymous</span>
  </a>
  <Button
    ref={closeBtnRef}
    onClick={onClose}
    variant="secondary"
    size="sm"
    aria-label="Close menu"
    iconOnly={<FaTimes className="w-4 h-4" />}
  />
</div>
```

**Breaking it down:**

1. **Header Container**:
   - `flex items-center justify-between`: Logo left, button right
   - `p-4`: Padding (1rem)
   - `border-b border-white/10`: Bottom border separates from nav

2. **Brand Link**:

   ```jsx
   <a href="/" className="flex items-center gap-2" onClick={onClose}>
   ```

   - Links to home
   - `onClick={onClose}`: Closes menu when clicked
   - Flex layout for logo + text

3. **Logo Placeholder**:
   - `inline-block h-6 w-6 rounded bg-white/80`: Simple square placeholder
   - `aria-hidden`: Decorative (brand name is next to it)
   - **Later**: Replace with actual logo

4. **Close Button**:

   ```jsx
   <Button
     ref={closeBtnRef}
     onClick={onClose}
     variant="secondary"
     size="sm"
     aria-label="Close menu"
     iconOnly={<FaTimes className="w-4 h-4" />}
   />
   ```

   - `ref={closeBtnRef}`: Reference for auto-focus
   - `onClick={onClose}`: Closes menu
   - `variant="secondary"`: Outline style
   - `size="sm"`: Small button
   - `aria-label="Close menu"`: Accessible label (icon doesn't have text)
   - `iconOnly={<FaTimes />}`: Shows X icon from react-icons

---

## Step 8: Build the Navigation Links

Now add the navigation links.

**After the header div, add:**

```jsx
<nav className="p-4">
  <ul className="space-y-2" role="list">
    {links.map((l) => (
      <li key={l.to}>
        <NavLink
          to={l.to}
          onClick={onClose}
          className={({ isActive }) =>
            [
              "block rounded px-3 py-2 text-sm transition",
              isActive ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white",
            ].join(" ")
          }
        >
          {l.label}
        </NavLink>
      </li>
    ))}
  </ul>

  {/* Contact CTA */}
  <Button as="a" href="/contact" onClick={onClose} variant="primary" className="mt-4 w-full justify-center">
    Contact Me
  </Button>
</nav>
```

**Breaking it down:**

1. **Nav Container**:
   - `<nav>`: Semantic navigation element
   - `p-4`: Padding (1rem)

2. **Links List**:
   - `<ul className="space-y-2" role="list">`: Vertical spacing, semantic list
   - `space-y-2`: 0.5rem gap between links

3. **Mapping Links**:

   ```jsx
   {links.map((l) => (
     <li key={l.to}>
       <NavLink to={l.to} onClick={onClose} className={...}>
         {l.label}
       </NavLink>
     </li>
   ))}
   ```

   - Loop over `links` prop (passed from Navbar)
   - Each link gets a `<li>` wrapper
   - `key={l.to}`: Unique key for React

4. **NavLink Styling**:

   ```jsx
   className={({ isActive }) =>
     [
       "block rounded px-3 py-2 text-sm transition",
       isActive ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white",
     ].join(" ")
   }
   ```

   - **Function className**: Receives `{ isActive }` from React Router
   - **Array of classes**: Easier to read and manage
   - **Base classes**: `block rounded px-3 py-2 text-sm transition`
   - **Active state**: `bg-white/10 text-white` (highlighted)
   - **Inactive state**: `text-white/80 hover:bg-white/10 hover:text-white`
   - `.join(" ")`: Combines array into single string

   **Why array.join()?**
   - Cleaner than long template strings
   - Easy to see base vs conditional classes
   - Common pattern in modern React

5. **onClick={onClose}**:
   - When link is clicked, close the menu
   - User navigates AND menu closes (good UX)

6. **Contact CTA Button**:

   ```jsx
   <Button as="a" href="/contact" onClick={onClose} variant="primary" className="mt-4 w-full justify-center">
     Contact Me
   </Button>
   ```

   - Prominent call-to-action
   - `mt-4`: Top margin (1rem) separates from links
   - `w-full`: Full width button
   - `justify-center`: Center button text
   - `variant="primary"`: Filled button style (stands out)
   - Also closes menu on click

---

## Step 9: Save and Test (Preliminary)

Save the `MobileMenu.jsx` file. It won't be visible yet (we haven't connected it to the Navbar), but there should be no errors.

**Your complete component should look like this:**

```jsx
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button.jsx";
import { FaTimes } from "react-icons/fa";

export default function MobileMenu({ open, onClose, links }) {
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Close on ESC + lock scroll while open + focus the close button + focus trap
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();

      // Simple focus trap - if tab reaches end, wrap to beginning
      if (e.key === "Tab") {
        const focusableElements = panelRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements?.[0];
        const lastElement = focusableElements?.[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    // Focus close button for accessibility
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" onClick={onClose} />

      {/* Slide-over panel */}
      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="relative ml-auto h-full w-80 max-w-[80%] bg-black border-l border-white/10 shadow-xl shadow-black/30"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <a href="/" className="flex items-center gap-2" onClick={onClose}>
            <span className="inline-block h-6 w-6 rounded bg-white/80" aria-hidden />
            <span className="text-white font-semibold">Joe Anonymous</span>
          </a>
          <Button
            ref={closeBtnRef}
            onClick={onClose}
            variant="secondary"
            size="sm"
            aria-label="Close menu"
            iconOnly={<FaTimes className="w-4 h-4" />}
          />
        </div>

        <nav className="p-4">
          <ul className="space-y-2" role="list">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [
                      "block rounded px-3 py-2 text-sm transition",
                      isActive ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white",
                    ].join(" ")
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Contact CTA */}
          <Button as="a" href="/contact" onClick={onClose} variant="primary" className="mt-4 w-full justify-center">
            Contact Me
          </Button>
        </nav>
      </div>
    </div>
  );
}
```

---

## Common Questions

### Q: What's the difference between `useEffect` and `useState`?

**A:**

**`useState`**: Manages component **state** (data that changes over time)

```jsx
const [count, setCount] = useState(0);
// Causes re-render when state changes
```

**`useEffect`**: Handles **side effects** (things outside of rendering)

```jsx
useEffect(() => {
  // Add event listener (side effect)
  // Cleanup (remove listener)
}, [dependencies]);
```

**Side effects include:**

- Event listeners
- DOM manipulation
- API calls
- Subscriptions
- Timers

**Key difference:**

- **State**: What to render
- **Effects**: What to do (besides rendering)

---

### Q: Why use `useRef` instead of `useState` for DOM elements?

**A:**

**With `useState` (❌ wrong):**

```jsx
const [button, setButton] = useState(null);
// Causes re-render every time button changes
// Unnecessarily expensive
```

**With `useRef` (✅ correct):**

```jsx
const buttonRef = useRef(null);
// No re-renders
// Persists across renders
// Direct DOM access
```

**Rules:**

- DOM references → `useRef`
- Data for rendering → `useState`

---

### Q: Why is the focus trap so complex?

**A:** We need to handle **4 scenarios**:

1. **Tab on last element** → Wrap to first
2. **Shift+Tab on first element** → Wrap to last
3. **Tab in middle** → Continue normally
4. **Shift+Tab in middle** → Continue normally

**Without this:**

- User tabs out of menu
- Focus goes to background (confusing!)
- Can't get back to menu (broken UX)

**With this:**

- Focus stays in menu
- Wraps around (cycles through items)
- Professional behavior

---

### Q: What happens if I forget the cleanup function?

**A:** **Bad things!**

**Without cleanup:**

```jsx
useEffect(() => {
  document.addEventListener("keydown", onKey);
  // No cleanup!
}, [open]);
```

**Problems:**

1. **Event listeners pile up** (memory leak)
2. **Scroll stays locked** (can't scroll page after closing menu)
3. **Multiple handlers** (ESC key triggers multiple times)

**With cleanup:**

```jsx
return () => {
  document.removeEventListener("keydown", onKey);
  document.body.style.overflow = prevOverflow;
};
```

**Benefits:**

- Clean slate each time
- No memory leaks
- Everything works correctly

---

### Q: Why `[open, onClose]` in the dependency array?

**A:** **Effect uses these values**, so they must be dependencies.

**Missing dependency:**

```jsx
useEffect(() => {
  if (!open) return; // Uses 'open'
  // ... uses 'onClose'
}, []); // ❌ Missing dependencies!
```

**Problem:**

- Effect uses **stale values**
- `onClose` might be outdated
- Bugs and unexpected behavior

**Correct:**

```jsx
}, [open, onClose]); // ✅ Includes all used values
```

**Rule:** Include **all values from outside** that the effect uses.

---

## Key Takeaways

1. **Props Control Behavior**: `open`, `onClose`, `links` let parent control the menu

2. **useEffect for Side Effects**: Keyboard events, scroll locking, focus management

3. **useRef for DOM Access**: Direct references without re-renders

4. **Focus Management**: Auto-focus, focus trap, ESC to close

5. **Scroll Locking**: Prevent background scroll when menu open

6. **Cleanup Functions**: Critical for removing listeners and restoring state

7. **Accessibility**: ARIA attributes, semantic HTML, keyboard support

8. **Conditional Rendering**: Return null when closed (better performance)

**This is advanced React!** Don't worry if it feels complex—these patterns become familiar with practice.

---

## What's Next?

You've built the MobileMenu component! In the next section, we'll:

- Update the Navbar to use this component
- Add state management with `useState`
- Add a mobile menu button
- Connect everything together

**Before moving on:**

- Review the code and make sure you understand each part
- Read through the comments in the component
- Try to explain to yourself (or a classmate) how the focus trap works

**Congratulations!** You've built a professional, accessible mobile navigation component! 🎉
