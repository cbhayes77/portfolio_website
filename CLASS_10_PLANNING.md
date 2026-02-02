# Class 10 Planning: About Page - Part 2 & Mobile Navigation

**Last Updated:** February 1, 2026

---

## Overview

Class 10 completes the About page and adds mobile navigation to the portfolio. This class brings together several advanced React and CSS concepts while finishing one of the most important pages in the portfolio. Students will work with images, complex layouts, state management, and accessibility patterns.

### What Students Will Build

1. **`pages/About.jsx` (Part 2)** - Final three sections of the About page:
   - Education & Certifications grid
   - Personal Interests with image cards
   - Call-to-Action section with buttons

2. **`components/layout/MobileMenu.jsx`** - Mobile navigation component with:
   - Slide-over panel animation
   - Focus trap and keyboard navigation
   - Backdrop overlay
   - Accessible menu controls

3. **Update `components/layout/Navbar.jsx`** - Add mobile menu integration:
   - Mobile menu toggle button
   - State management with useState
   - Conditional rendering

### Key Learning Outcomes

By the end of this class, students will:

- Complete a **complex, multi-section page** with diverse content types
- Build **image card components** with overlay effects
- Implement **state management** for UI interactions (menu open/close)
- Create **accessible mobile navigation** with focus management
- Use **useEffect** and **useRef** hooks for side effects and DOM references
- Understand **focus trapping** and keyboard accessibility
- Practice **responsive design** patterns (desktop vs mobile)

---

## Pedagogical Approach

### Why This Structure?

Class 10 combines **page completion** with **navigation enhancement**:

1. **About Page Completion**: Finish the remaining sections (education, interests, CTA)
2. **Mobile Navigation**: Add mobile menu for better mobile experience
3. **Integration**: Connect mobile menu to existing Navbar

This structure provides:

- **Closure**: Students finish the About page they started in Class 9
- **New Challenge**: Mobile menu introduces state management and advanced hooks
- **Real-world Skills**: Mobile navigation is essential for modern websites

### Teaching Sequence

This class follows a **completion + enhancement** approach:

1. **Complete About Page Sections** (35-40 min)
   - Education grid (10 min)
   - Interests image cards (15 min)
   - CTA section (10 min)
   - Review complete About page

2. **Build Mobile Menu Component** (25-30 min)
   - Create MobileMenu.jsx with props
   - Implement slide-over panel
   - Add focus management and accessibility
   - Most complex component so far

3. **Integrate Mobile Menu** (10 min)
   - Update Navbar with useState
   - Add mobile menu button
   - Connect open/close handlers

### Why This Order?

1. **Page completion first**: Finish what students started, providing closure
2. **Build confidence**: Completing About page before tackling mobile menu
3. **Progressive complexity**: From static sections to stateful components
4. **Practical flow**: Finish content, then improve navigation

---

## Component Breakdown

### 1. About Page - Part 2

**File:** `src/pages/About.jsx` (continued from Class 9)

**New Sections:**

#### Education & Certifications Grid

- **Layout**: Responsive grid (1/2/3 columns)
- **Content**: Degree, institution, year, details
- **Pattern**: Simple card grid (simpler than values grid)

#### Interests Section with Images

- **Layout**: Responsive grid (1/2/3 columns)
- **Content**: Image, icon overlay, name, description
- **Techniques**: Image cards, gradient overlays, hover effects
- **Challenge**: Working with external images (Unsplash URLs)

#### Call-to-Action Section

- **Layout**: Centered card with buttons
- **Content**: Heading, description, primary/secondary buttons
- **Pattern**: CTA pattern (encourages next action)

**Key Concepts:**

- Image handling and optimization
- Gradient overlays
- Multiple button patterns
- Completing a complex page

---

### 2. Mobile Menu Component

**File:** `src/components/layout/MobileMenu.jsx`

**Purpose:** Provide accessible mobile navigation with slide-over panel.

**Structure:**

```jsx
export default function MobileMenu({ open, onClose, links }) {
  // useRef for panel and close button
  // useEffect for keyboard handling, focus, scroll lock

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      {/* Slide-over panel */}
      {/* Header with logo and close button */}
      {/* Navigation links */}
      {/* Contact CTA */}
    </div>
  );
}
```

**Key Features:**

- **Props**: `open` (boolean), `onClose` (function), `links` (array)
- **useRef**: References to panel and close button for focus management
- **useEffect**: Handles keyboard events, scroll locking, focus trap
- **Conditional Rendering**: Only renders when `open` is true
- **Accessibility**: Focus trap, ESC to close, ARIA attributes

**Advanced Concepts:**

- Focus management (moving focus to close button)
- Focus trap (keeping focus within menu)
- Scroll locking (preventing body scroll when menu open)
- Event listeners (keyboard events)
- Cleanup functions (removing listeners on unmount)

---

### 3. Navbar Update

**File:** `src/components/layout/Navbar.jsx` (updated)

**Changes:**

1. Import `useState` and `MobileMenu`
2. Create state: `const [open, setOpen] = useState(false)`
3. Add mobile menu button (visible only on mobile)
4. Render `<MobileMenu>` component with props
5. Hide desktop nav on mobile, show menu button

**Key Concepts:**

- State management with useState
- Conditional rendering based on screen size
- Passing props to child components
- Event handlers (onClick)

---

## Detailed Component Flow

### About Page Sections

```
About.jsx (Part 2 additions)
│
├── Education Section
│   ├── Section + Container wrapper
│   ├── Heading
│   └── Grid (1/2/3 columns)
│       └── Map over aboutData.education
│           └── Article cards
│               ├── Degree
│               ├── Institution
│               ├── Year (time element)
│               └── Details
│
├── Interests Section
│   ├── Section + Container wrapper
│   ├── Heading + intro paragraph
│   └── Grid (1/2/3 columns)
│       └── Map over aboutData.interests
│           └── Article cards
│               ├── Image container
│               │   ├── Image (external URL)
│               │   ├── Gradient overlay
│               │   └── Icon overlay
│               └── Content
│                   ├── Name
│                   └── Description
│
└── CTA Section
    ├── Section + Container wrapper
    └── Centered card
        ├── Heading
        ├── Description
        └── Button group
            ├── Primary button (Contact)
            └── Secondary button (Portfolio)
```

### Mobile Menu Component Flow

```
MobileMenu.jsx
│
├── Props
│   ├── open (boolean)
│   ├── onClose (function)
│   └── links (array)
│
├── Refs
│   ├── panelRef (for focus trap)
│   └── closeBtnRef (for initial focus)
│
├── useEffect (when open changes)
│   ├── ESC key listener
│   ├── Tab key focus trap
│   ├── Body scroll lock
│   ├── Focus close button
│   └── Cleanup on unmount
│
└── Render (if open)
    ├── Fixed backdrop
    │   └── Click to close
    └── Slide-over panel
        ├── Header
        │   ├── Logo/brand link
        │   └── Close button (ref)
        ├── Navigation
        │   └── Map over links
        │       └── NavLink items
        └── Contact CTA button
```

### Navbar Update Flow

```
Navbar.jsx (updated)
│
├── State
│   └── [open, setOpen] = useState(false)
│
├── Desktop (md: and up)
│   ├── Logo
│   ├── Nav links
│   └── Contact button
│
├── Mobile (< md)
│   ├── Logo
│   ├── Menu button → setOpen(true)
│   └── (Nav links hidden)
│
└── MobileMenu component
    ├── open={open}
    ├── onClose={() => setOpen(false)}
    └── links={links}
```

---

## Technical Concepts

### 1. State Management with useState

```jsx
const [open, setOpen] = useState(false);
```

**Purpose:** Track whether mobile menu is open or closed

**Usage:**

- `open`: Current state (true/false)
- `setOpen`: Function to update state
- `useState(false)`: Initial state is false (closed)

**In practice:**

- Button click: `onClick={() => setOpen(true)}`
- Close menu: `onClose={() => setOpen(false)}`
- Conditional rendering: `{open && <MobileMenu />}`

---

### 2. useRef Hook

```jsx
const panelRef = useRef(null);
const closeBtnRef = useRef(null);
```

**Purpose:** Hold references to DOM elements

**Why refs?**

- Direct DOM access (for focus management)
- Persist across re-renders (unlike variables)
- Don't trigger re-renders (unlike state)

**Usage:**

```jsx
<div ref={panelRef}>...</div>
<Button ref={closeBtnRef}>Close</Button>

// Later in code:
closeBtnRef.current?.focus(); // Move focus to close button
panelRef.current?.querySelectorAll(...); // Find focusable elements
```

---

### 3. useEffect for Side Effects

```jsx
useEffect(() => {
  if (!open) return;

  // Setup (runs when menu opens)
  document.addEventListener("keydown", onKey);
  document.body.style.overflow = "hidden";

  return () => {
    // Cleanup (runs when menu closes or component unmounts)
    document.removeEventListener("keydown", onKey);
    document.body.style.overflow = prevOverflow;
  };
}, [open, onClose]); // Dependencies
```

**Purpose:** Handle side effects outside of rendering

**Side effects include:**

- Event listeners (keyboard, clicks)
- DOM manipulation (scroll locking)
- Focus management
- API calls (not used here)

**Cleanup function:**

- Runs before re-running effect
- Runs when component unmounts
- Prevents memory leaks

---

### 4. Focus Management & Accessibility

**Focus Trap:**

- Keeps keyboard focus inside modal/menu
- Prevents tabbing to background content
- Cycles focus when reaching last element

**Implementation:**

```jsx
if (e.key === "Tab") {
  const focusableElements = panelRef.current?.querySelectorAll(...);
  const firstElement = focusableElements?.[0];
  const lastElement = focusableElements?.[focusableElements.length - 1];

  // If shift+tab on first element, go to last
  if (e.shiftKey && document.activeElement === firstElement) {
    e.preventDefault();
    lastElement?.focus();
  }
  // If tab on last element, go to first
  else if (!e.shiftKey && document.activeElement === lastElement) {
    e.preventDefault();
    firstElement?.focus();
  }
}
```

**Why it matters:**

- Keyboard users can't escape menu without closing it
- Screen reader users have clear navigation context
- Meets WCAG accessibility standards

---

### 5. Scroll Locking

```jsx
const prevOverflow = document.body.style.overflow;
document.body.style.overflow = "hidden";

return () => {
  document.body.style.overflow = prevOverflow;
};
```

**Purpose:** Prevent background scrolling when menu is open

**How it works:**

1. Save current overflow value
2. Set body overflow to "hidden"
3. On cleanup, restore previous value

**Why it matters:**

- Better UX (can't scroll background when menu open)
- Mobile-friendly (prevents awkward scroll behavior)
- Professional polish

---

### 6. Conditional Rendering Patterns

**Pattern 1: Early return**

```jsx
if (!open) return null;
```

- If menu not open, render nothing
- Prevents unnecessary DOM elements

**Pattern 2: Ternary**

```jsx
className={isActive ? "bg-white/10 text-white" : "text-white/80"}
```

- If active, use one class set, else use another

**Pattern 3: Logical AND**

```jsx
{
  open && <MobileMenu />;
}
```

- Only render MobileMenu if open is true

---

## Common Challenges & Solutions

### Challenge 1: Understanding useEffect Dependencies

**Question:** Why include `[open, onClose]` in the dependency array?

**Answer:**

- `open`: Effect should re-run when menu opens/closes
- `onClose`: If parent changes the close handler, effect needs to update
- Missing dependencies = stale closures and bugs

**Rule:** Include all values used inside the effect

---

### Challenge 2: Focus Management Complexity

**Question:** Why is focus management so complicated?

**Answer:** Accessibility requires:

1. **Auto-focus close button** when menu opens (so keyboard users know where they are)
2. **Focus trap** to prevent tabbing to background (background is hidden)
3. **ESC to close** as expected keyboard behavior
4. **Focus return** when menu closes (handled by React re-render)

**All of this makes the menu usable for keyboard-only users.**

---

### Challenge 3: Image Loading & Performance

**Question:** Should we worry about image optimization?

**Answer:**

- External URLs (Unsplash) are already optimized
- Using `loading="lazy"` defers offscreen images
- In production, you'd use tools like:
  - Next.js Image component
  - Responsive images (srcset)
  - WebP format

**For now:** Lazy loading is sufficient.

---

## Testing Checklist

After completing Class 10, students should test:

### About Page

- [ ] All sections visible and styled correctly
- [ ] Education cards display properly in grid
- [ ] Interest images load correctly
- [ ] Image overlays and hover effects work
- [ ] CTA buttons link to correct pages
- [ ] Page is responsive (mobile/tablet/desktop)
- [ ] All text is readable and properly spaced

### Mobile Menu

- [ ] Menu button visible on mobile (< 768px)
- [ ] Menu button hidden on desktop (≥ 768px)
- [ ] Clicking menu button opens slide-over
- [ ] Backdrop click closes menu
- [ ] Close button closes menu
- [ ] ESC key closes menu
- [ ] Tab key cycles through menu items (focus trap works)
- [ ] Navigation links work and close menu
- [ ] Contact CTA button works
- [ ] Body scroll locked when menu open
- [ ] Focus moves to close button when menu opens
- [ ] Menu hidden on desktop screens

### Accessibility

- [ ] All images have alt text
- [ ] Focus indicators visible on all interactive elements
- [ ] Screen reader can navigate menu
- [ ] ARIA labels present and accurate
- [ ] Semantic HTML used throughout

---

## Key Takeaways

1. **State Management**: `useState` tracks UI state (open/close)

2. **Side Effects**: `useEffect` handles external interactions (events, DOM, focus)

3. **Refs**: `useRef` provides direct DOM access without re-renders

4. **Accessibility**: Focus management, keyboard navigation, ARIA attributes

5. **Responsive Design**: Different UI for mobile vs desktop (show/hide, adapt)

6. **Image Handling**: External images, overlays, lazy loading

7. **Complex Components**: Breaking down multi-part components with clear responsibilities

---

## What's Next?

After Class 10, students have:

- ✅ Complete About page with all sections
- ✅ Mobile-friendly navigation
- ✅ All major pages built (Home, About, Portfolio, Project, Resume, Contact)

**Class 11** will focus on:

- Error handling (ErrorBoundary)
- Accessibility audits
- Performance optimization
- Final polish and customization

Students should:

- Customize all content with their own information
- Replace placeholder images with their own
- Test thoroughly on different devices
- Begin thinking about deployment

---

## Estimated Time Breakdown

- **Complete About Page**: 35-40 minutes
  - Education section: 10 min
  - Interests section: 15 min
  - CTA section: 10 min
  - Review/test: 5 min

- **Mobile Menu Component**: 25-30 minutes
  - Create component structure: 10 min
  - Add useEffect and focus management: 10 min
  - Test and debug: 5-10 min

- **Navbar Integration**: 10 minutes
  - Add useState: 3 min
  - Add menu button: 3 min
  - Connect MobileMenu: 2 min
  - Test: 2 min

**Total: 70-80 minutes** (1 class session with buffer for questions)
