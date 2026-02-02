# Class 10: Integrating the Mobile Menu into the Navbar

**File:** `src/components/layout/Navbar.jsx` (updated)
**Type:** Layout Component Update
**Purpose:** Add state management and mobile menu toggle to the existing Navbar

---

## What We're Doing

You already have a working Navbar with desktop navigation. Now we're going to:

1. Import `useState` and `MobileMenu`
2. Add state to track if the menu is open
3. Add a mobile menu button (visible only on mobile)
4. Render the `MobileMenu` component
5. Pass the necessary props to control the menu

This will complete your responsive navigation system!

---

## Step 1: Update the Imports

First, we need to import the new pieces we'll use.

**At the top of `Navbar.jsx`, update the imports:**

```jsx
import { useState } from "react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu.jsx";
```

**What's new:**

1. **`useState`**: React hook for state management
   - We'll use this to track if the mobile menu is open or closed

2. **`MobileMenu`**: The component we just built
   - We'll render it at the bottom of the Navbar

**Existing imports** (keep these):

- `Container`, `Button`, `NavLink`: Already being used

---

## Step 2: Add State Management

Inside the `Navbar` component function, we need to add state.

**Find the `links` array and add state right after it:**

```jsx
const links = [
  { to: "/about", label: "About Me" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/resume", label: "Resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // ... rest of component
  );
}
```

**Understanding the state:**

```jsx
const [open, setOpen] = useState(false);
```

**Breaking it down:**

- **`useState(false)`**: Create state with initial value `false` (menu closed)
- **`open`**: Current state value (true = menu open, false = menu closed)
- **`setOpen`**: Function to update the state
- **`const [open, setOpen]`**: Array destructuring to get both values

**How it works:**

```jsx
// Initial state
open === false; // Menu is closed

// Open the menu
setOpen(true); // Now open === true

// Close the menu
setOpen(false); // Now open === false
```

**Why this pattern?**

- State changes trigger re-renders
- When `open` changes, component re-renders with new value
- MobileMenu receives updated `open` prop and shows/hides accordingly

---

## Step 3: Add the Mobile Menu Button

Now we need a button to open the menu on mobile devices.

**In the existing Navbar JSX, find the "Right: CTA / mobile button" section and update it:**

```jsx
{
  /* Right: CTA / mobile button (flex-1) */
}
<div className="flex-1 flex justify-end">
  {/* Desktop CTA */}
  <Button as="a" href="/contact" variant="primary" size="sm" className="hidden md:inline-flex">
    Contact Me
  </Button>

  {/* Mobile menu button */}
  <Button
    variant="secondary"
    size="sm"
    className="md:hidden ml-2"
    aria-label="Open menu"
    aria-expanded={open ? "true" : "false"}
    aria-controls="mobile-menu"
    onClick={() => setOpen(true)}
  >
    ☰
  </Button>
</div>;
```

**What's new:**

### The Mobile Menu Button

```jsx
<Button
  variant="secondary"
  size="sm"
  className="md:hidden ml-2"
  aria-label="Open menu"
  aria-expanded={open ? "true" : "false"}
  aria-controls="mobile-menu"
  onClick={() => setOpen(true)}
>
  ☰
</Button>
```

**Props breakdown:**

1. **`variant="secondary"`**:
   - Outline button style
   - Less prominent than Contact button
   - Fits better for utility button

2. **`size="sm"`**:
   - Small size (matches Contact button)
   - Consistent sizing

3. **`className="md:hidden ml-2"`**:
   - `md:hidden`: **Hidden on desktop** (≥768px) - only shows on mobile
   - `ml-2`: Small left margin (0.5rem) for spacing
   - Opposite of Contact button (`hidden md:inline-flex`)

4. **`aria-label="Open menu"`**:
   - Accessible label for screen readers
   - Icon (☰) doesn't have text, so this is important

5. **`aria-expanded={open ? "true" : "false"}`**:
   - Tells screen readers if menu is open or closed
   - Dynamic value based on state
   - **Ternary operator**: If `open` is true, use "true", else "false"

6. **`aria-controls="mobile-menu"`**:
   - Links button to the menu it controls
   - References the `id="mobile-menu"` on the MobileMenu component
   - Helps screen readers understand relationship

7. **`onClick={() => setOpen(true)}`**:
   - When clicked, set state to `true`
   - Opens the menu
   - **Arrow function**: `() => setOpen(true)` calls function when clicked

8. **`☰` (Hamburger icon)**:
   - Unicode character for hamburger menu
   - Universal symbol for mobile menus
   - Could replace with icon library (FontAwesome, etc.)

**Responsive behavior:**

```
Desktop (≥768px):
- Contact button: visible
- Menu button: hidden

Mobile (<768px):
- Contact button: hidden
- Menu button: visible
```

---

## Step 4: Render the MobileMenu Component

Finally, we need to render the MobileMenu component and pass it the necessary props.

**At the bottom of the Navbar, right before the closing `</header>` tag, add:**

```jsx
</Container>

{/* Mobile slide-over */}
<MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
</header>
```

**Complete "Right section" through end of Navbar:**

```jsx
{/* Right: CTA / mobile button (flex-1) */}
<div className="flex-1 flex justify-end">
  {/* Desktop CTA */}
  <Button as="a" href="/contact" variant="primary" size="sm" className="hidden md:inline-flex">
    Contact Me
  </Button>

  {/* Mobile menu button */}
  <Button
    variant="secondary"
    size="sm"
    className="md:hidden ml-2"
    aria-label="Open menu"
    aria-expanded={open ? "true" : "false"}
    aria-controls="mobile-menu"
    onClick={() => setOpen(true)}
  >
    ☰
  </Button>
</div>
</Container>

{/* Mobile slide-over */}
<MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
</header>
```

**Understanding the MobileMenu props:**

```jsx
<MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
```

1. **`open={open}`**:
   - Pass current state to MobileMenu
   - When state changes, MobileMenu receives new value
   - MobileMenu shows/hides based on this prop

2. **`onClose={() => setOpen(false)}`**:
   - Pass a function to close the menu
   - MobileMenu calls this when user wants to close
   - Sets state to `false` (closing the menu)
   - **Why arrow function?** We need to pass a function reference, not call it immediately

3. **`links={links}`**:
   - Pass the links array to MobileMenu
   - Same links used in desktop nav
   - MobileMenu uses this to render navigation items

**Data flow:**

```
User clicks menu button
  ↓
onClick={() => setOpen(true)} runs
  ↓
State changes: open = true
  ↓
Component re-renders
  ↓
<MobileMenu open={true} ... /> receives new prop
  ↓
MobileMenu shows (slides in)

User clicks backdrop/close button
  ↓
onClose={() => setOpen(false)} runs
  ↓
State changes: open = false
  ↓
Component re-renders
  ↓
<MobileMenu open={false} ... /> receives new prop
  ↓
MobileMenu hides (returns null)
```

---

## Step 5: Save and Test!

Save the `Navbar.jsx` file and test your mobile menu!

**Testing checklist:**

### Responsive Behavior

- [ ] Resize browser to mobile size (<768px)
- [ ] Menu button (☰) should be visible
- [ ] Contact button should be hidden
- [ ] Desktop nav links should be hidden

### Opening the Menu

- [ ] Click the menu button
- [ ] Panel should slide in from right
- [ ] Backdrop should appear behind it
- [ ] Body scroll should be locked

### Closing the Menu

- [ ] Click the close button (X) → menu closes
- [ ] Click the backdrop → menu closes
- [ ] Press ESC key → menu closes
- [ ] Click a nav link → menu closes

### Navigation

- [ ] All nav links should work
- [ ] Active page should be highlighted
- [ ] Contact CTA button should work

### Keyboard Accessibility

- [ ] Open menu with mouse/touch
- [ ] Press Tab → focus should move to links
- [ ] Press Tab multiple times → focus cycles through menu
- [ ] Tab past last item → wraps to first item
- [ ] Shift+Tab → backwards navigation works
- [ ] Press ESC → closes menu

### Desktop Behavior

- [ ] Resize to desktop (≥768px)
- [ ] Menu button should be hidden
- [ ] Desktop nav should be visible
- [ ] Contact button should be visible
- [ ] Mobile menu should not appear

---

## Complete Updated Navbar Code

Here's what your complete `Navbar.jsx` should look like now:

```jsx
import { useState } from "react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu.jsx";

const links = [
  { to: "/about", label: "About Me" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/resume", label: "Resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60]
                   bg-white text-black px-4 py-2 rounded-md font-medium
                   focus:outline-none focus:ring-2 focus:ring-white/40"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
        <Container className="flex h-16 items-center">
          {/* Left: brand (flex-1) */}
          <div className="flex-1 flex justify-start">
            <a href="/" aria-label="Home — Joe Anonymous" className="flex items-center gap-2">
              <span className="text-white font-semibold">Joe Anonymous</span>
            </a>
          </div>

          {/* Center: nav (flex-none, stays centered) */}
          <nav className="flex justify-center flex-none text-center">
            <ul className="hidden md:flex items-center gap-6 body-small">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => `transition hover:text-white ${isActive ? "text-white" : ""}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: CTA / mobile button (flex-1) */}
          <div className="flex-1 flex justify-end">
            {/* Desktop CTA */}
            <Button as="a" href="/contact" variant="primary" size="sm" className="hidden md:inline-flex">
              Contact Me
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="secondary"
              size="sm"
              className="md:hidden ml-2"
              aria-label="Open menu"
              aria-expanded={open ? "true" : "false"}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              ☰
            </Button>
          </div>
        </Container>

        {/* Mobile slide-over */}
        <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
      </header>
    </>
  );
}
```

---

## Common Questions

### Q: Why use `useState` instead of just a variable?

**A:**

**With variable (❌ doesn't work):**

```jsx
let open = false;

function toggleMenu() {
  open = !open; // Changes variable
  // Component doesn't re-render!
  // UI doesn't update!
}
```

**With `useState` (✅ works):**

```jsx
const [open, setOpen] = useState(false);

function toggleMenu() {
  setOpen(!open); // Changes state
  // Component re-renders!
  // UI updates!
}
```

**Why?**

- React doesn't watch regular variables
- State changes trigger re-renders
- UI updates automatically when state changes

---

### Q: What's the difference between `onClick={setOpen(true)}` and `onClick={() => setOpen(true)}`?

**A:** **This is crucial!**

**❌ Wrong (calls immediately):**

```jsx
onClick={setOpen(true)}
// Calls setOpen(true) immediately during render
// Infinite loop!
```

**✅ Correct (calls when clicked):**

```jsx
onClick={() => setOpen(true)}
// Passes a function to onClick
// Function runs when button is clicked
```

**Visual:**

```jsx
// What React sees:
onClick={() => setOpen(true)}
         ↑
         This is the function passed to onClick

// When clicked:
() => setOpen(true)  // This function runs
setOpen(true)        // This sets state to true
```

**Rule:** If you need to pass **arguments** to a handler, wrap it in an arrow function.

---

### Q: Why does the menu button have so many ARIA attributes?

**A:** **Accessibility for screen readers.**

```jsx
aria-label="Open menu"          // Describes what button does
aria-expanded={open ? "true" : "false"}  // Is menu open or closed?
aria-controls="mobile-menu"     // What element does it control?
```

**For screen readers:**

```
User focuses button
Screen reader announces: "Open menu, button, collapsed, controls mobile-menu"

User clicks button
Screen reader announces: "Open menu, button, expanded, controls mobile-menu"
```

**Why each attribute:**

- `aria-label`: Button has no text (just ☰), so screen reader needs label
- `aria-expanded`: Tells screen reader if menu is open (important context)
- `aria-controls`: Links button to menu element (helps navigation)

---

### Q: Why pass `links` as a prop instead of importing it in MobileMenu?

**A:** **Flexibility and single source of truth.**

**Current approach (✅ better):**

```jsx
// Navbar.jsx
const links = [...]; // Single source
<MobileMenu links={links} />

// Desktop nav uses same links
{links.map(...)}
```

**Alternative (❌ less flexible):**

```jsx
// Both Navbar and MobileMenu import their own links
// If you change links, must change in two places
// Can get out of sync
```

**Benefits of passing as prop:**

- Links defined once in Navbar
- Both desktop nav and mobile menu use same data
- Change links once, updates everywhere
- MobileMenu is reusable (could use different links elsewhere)

---

### Q: What happens if I forget `md:hidden` on the menu button?

**A:** **Button shows on desktop too (broken UX).**

```jsx
{
  /* ❌ Without md:hidden */
}
<Button className="ml-2">☰</Button>;
// Shows on mobile AND desktop
// Desktop has both Contact button and menu button (confusing!)

{
  /* ✅ With md:hidden */
}
<Button className="md:hidden ml-2">☰</Button>;
// Shows ONLY on mobile (<768px)
// Desktop only shows Contact button
```

**Rule:** Mobile menu button should only show on mobile screens.

---

## Styling Tips & Customization

### Change the Hamburger Icon

**Default (Unicode):**

```jsx
<Button>☰</Button>
```

**Using react-icons:**

```jsx
import { FaBars } from "react-icons/fa";

<Button iconOnly={<FaBars />}>
```

**Custom text:**

```jsx
<Button>Menu</Button>
```

---

### Change Mobile Breakpoint

**Default (768px):**

```jsx
className = "md:hidden"; // Hide at ≥768px
```

**Hide at 1024px instead:**

```jsx
className = "lg:hidden"; // Hide at ≥1024px
```

**Show only on very small screens:**

```jsx
className = "sm:hidden"; // Hide at ≥640px
```

---

### Add Animation to Menu Button

```jsx
<Button className="md:hidden ml-2 transition-transform hover:scale-110">☰</Button>
```

Adds subtle scale effect on hover.

---

## Troubleshooting

### Problem: Menu doesn't open when I click the button

**Check:**

1. Is `onClick={() => setOpen(true)}` on the button?
2. Is state declared: `const [open, setOpen] = useState(false)`?
3. Is `open` prop passed to MobileMenu: `<MobileMenu open={open} ... />`?

---

### Problem: Menu opens but won't close

**Check:**

1. Is `onClose={() => setOpen(false)}` passed to MobileMenu?
2. Is `onClick={onClose}` on backdrop, close button, and links?
3. Are there any console errors?

---

### Problem: Menu shows on desktop

**Check:**

1. Is `md:hidden` on the wrapper in MobileMenu?
2. Try inspecting the element and checking computed styles

---

### Problem: Can't scroll after closing menu

**Check:**

1. Is cleanup function in useEffect returning scroll style?
2. Check console for errors in MobileMenu

---

## Key Takeaways

1. **State Management**: `useState` tracks UI state (open/close)

2. **Props Communication**: Parent (Navbar) passes state and handlers to child (MobileMenu)

3. **Responsive Design**: Different UI for mobile (`md:hidden`) vs desktop (`hidden md:flex`)

4. **Event Handlers**: Arrow functions pass functions to onClick (don't call immediately)

5. **Accessibility**: ARIA attributes help screen readers understand dynamic UI

6. **Separation of Concerns**: MobileMenu handles rendering, Navbar handles state

**Congratulations!** You've built a complete, professional responsive navigation system with state management and accessibility! 🎉

---

## What's Next?

You've completed Class 10! Your portfolio now has:

- ✅ Complete About page (6 sections)
- ✅ Mobile navigation menu
- ✅ Responsive Navbar (desktop + mobile)
- ✅ All major pages built

**In Class 11**, you'll focus on:

- Error handling with ErrorBoundary
- Accessibility audits
- Performance optimization
- Final polish and customization

**Before Class 11:**

- Test your entire site on different devices
- Customize all content with your own information
- Replace placeholder images
- Try the mobile menu on an actual phone
- Review all sections we've built

**Great work!** You've learned advanced React concepts including state management, hooks, and accessibility patterns! 🚀
