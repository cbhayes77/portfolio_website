# Class 11 Planning: Error Handling & Accessibility

**Last Updated:** February 1, 2026

---

## Overview

Class 11 focuses on **production readiness** by adding error handling and ensuring the portfolio is accessible to all users. These are critical professional skills that separate student projects from production-quality applications. Students will learn defensive programming techniques and accessibility best practices.

### What Students Will Build

1. **`components/ui/ErrorBoundary.jsx`** - React error boundary component that:
   - Catches JavaScript errors anywhere in the component tree
   - Displays a fallback UI instead of crashing the entire app
   - Provides helpful error information in development
   - Offers recovery options (refresh, try again)

2. **Update `App.jsx`** - Wrap application with ErrorBoundary for global error handling

3. **Accessibility Review & Improvements** - Audit and enhance:
   - ARIA labels and attributes
   - Semantic HTML structure
   - Keyboard navigation and focus management
   - Screen reader support
   - Color contrast and visual hierarchy
   - Focus indicators on interactive elements

### Key Learning Outcomes

By the end of this class, students will:

- Understand **error boundaries** and their role in React applications
- Learn **class components** (vs functional components)
- Implement **defensive programming** patterns
- Conduct **accessibility audits** using browser tools
- Apply **WCAG 2.1 Level AA** guidelines
- Test with **keyboard navigation** and screen readers
- Understand **semantic HTML** best practices
- Add **ARIA attributes** appropriately
- Create **accessible forms and interactive elements**
- Prepare applications for **production deployment**

---

## Pedagogical Approach

### Why Error Handling and Accessibility?

These topics are often overlooked in tutorials but are **essential for professional work**:

1. **Error Handling**:
   - Real applications need graceful failure
   - Better user experience (vs blank screen)
   - Easier debugging in production
   - Professional best practice

2. **Accessibility**:
   - Legal requirement in many contexts (ADA, Section 508)
   - Ethical responsibility (inclusive design)
   - Better UX for everyone (not just users with disabilities)
   - SEO benefits (semantic HTML)
   - Professional skill employers expect

### Teaching Sequence

This class follows a **build + audit + improve** approach:

1. **Build ErrorBoundary Component** (20-25 min)
   - Introduce class components (vs functional)
   - Implement error catching logic
   - Create fallback UI
   - Test error scenarios

2. **Integrate ErrorBoundary** (5 min)
   - Update App.jsx to wrap with ErrorBoundary
   - Verify error handling works

3. **Accessibility Theory** (10 min)
   - What is accessibility and why it matters
   - WCAG guidelines overview
   - Common accessibility issues
   - Tools for testing

4. **Accessibility Audit** (15-20 min)
   - Use browser DevTools to audit site
   - Test keyboard navigation
   - Review semantic HTML
   - Check ARIA attributes
   - Test color contrast

5. **Accessibility Improvements** (15-20 min)
   - Add missing ARIA labels
   - Improve focus indicators
   - Enhance semantic structure
   - Add sr-only helper text
   - Verify fixes

### Why This Order?

1. **Error handling first**: Protects the work we're about to audit
2. **Theory before practice**: Context for why we're making changes
3. **Audit before fixing**: Identify specific issues to address
4. **Targeted improvements**: Fix real problems, not hypothetical ones

---

## Component Breakdown

### 1. ErrorBoundary Component

**File:** `src/components/ui/ErrorBoundary.jsx`

**Purpose:** Catch JavaScript errors in child components and display a fallback UI instead of crashing the app.

**Key Concepts:**

#### Class Components

- **Why class?** Error boundaries must be class components (React limitation)
- **Constructor**: Initialize state
- **Lifecycle methods**: `getDerivedStateFromError`, `componentDidCatch`
- **render()**: Return UI based on state

#### Error Boundary Lifecycle

```
Error occurs in child component
        ↓
getDerivedStateFromError(error) called
        ↓
State updated: { hasError: true, error }
        ↓
componentDidCatch(error, errorInfo) called (logging)
        ↓
render() called with hasError: true
        ↓
Fallback UI displayed
```

**Structure:**

```jsx
class ErrorBoundary extends Component {
  constructor(props) {
    // Initialize state: hasError, error
  }

  static getDerivedStateFromError(error) {
    // Update state when error occurs
  }

  componentDidCatch(error, errorInfo) {
    // Log error for debugging
  }

  render() {
    if (this.state.hasError) {
      // Return fallback UI
    }
    return this.props.children; // Normal rendering
  }
}
```

**Features:**

- **Graceful degradation**: Shows user-friendly error message
- **Recovery options**: Refresh page or try again buttons
- **Development details**: Error stack trace in dev mode only
- **Production safety**: Clean error UI without technical details

---

### 2. App.jsx Integration

**File:** `src/App.jsx` (updated)

**Changes:**

1. Import ErrorBoundary
2. Wrap entire app structure with `<ErrorBoundary>`
3. All errors in Navbar, pages, Footer caught by boundary

**Structure:**

```jsx
<ErrorBoundary>
  <Navbar />
  <main>
    <Outlet /> {/* All page errors caught */}
  </main>
  <Footer />
</ErrorBoundary>
```

**Why at App level?**

- Catches errors from **any component** in the app
- Single error boundary for entire application
- Could have multiple boundaries for different sections (advanced)

---

### 3. Accessibility Review Areas

#### A. Semantic HTML

**What to check:**

- Proper heading hierarchy (h1 → h2 → h3, no skipping)
- Semantic elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`)
- Lists for related items (`<ul>`, `<ol>`, `<li>`)
- Buttons vs links (buttons for actions, links for navigation)
- Form labels (`<label>` associated with inputs)

**Common issues:**

- `<div>` used instead of semantic elements
- Skipping heading levels (h1 → h3)
- Buttons styled as links or vice versa
- Missing labels on form inputs

#### B. ARIA Attributes

**When to use:**

- `aria-label`: Provide text for elements without visible text
- `aria-labelledby`: Reference another element as label
- `aria-describedby`: Additional description for element
- `aria-hidden`: Hide decorative elements from screen readers
- `aria-expanded`: Indicate collapsed/expanded state
- `aria-controls`: Link control to element it controls
- `role`: Override default element role (use sparingly)

**Common issues:**

- Missing labels on icon buttons
- Decorative images not hidden (`aria-hidden="true"`)
- Missing `aria-expanded` on collapsible elements
- Overuse of ARIA (semantic HTML is better)

#### C. Keyboard Navigation

**What to test:**

- All interactive elements reachable via Tab
- Tab order is logical (follows visual order)
- Shift+Tab works (backwards navigation)
- Enter/Space activates buttons
- ESC closes modals/menus
- Arrow keys work in lists/menus (advanced)
- No keyboard traps (can always escape)

**Common issues:**

- `onClick` on `<div>` (not keyboard accessible)
- Missing `tabindex` on custom controls
- Hidden elements still focusable
- Illogical tab order

#### D. Visual Indicators

**What to check:**

- Visible focus outline on all interactive elements
- Focus outline has sufficient contrast (3:1 minimum)
- Focus outline not removed globally (`outline: none` without replacement)
- Hover and focus states both present
- Active states clearly visible

**Common issues:**

- `*:focus { outline: none; }` without replacement
- Focus same as default (invisible)
- Focus outline low contrast
- Inconsistent focus styles

#### E. Color Contrast

**Standards (WCAG 2.1 Level AA):**

- **Normal text**: 4.5:1 contrast ratio
- **Large text** (18pt+): 3:1 contrast ratio
- **UI components**: 3:1 contrast ratio

**Common issues:**

- Low contrast text (gray on gray)
- Insufficient button contrast
- Link color too similar to body text

#### F. Screen Reader Support

**What to check:**

- Images have descriptive alt text (or empty alt if decorative)
- Icon buttons have `aria-label`
- Page title is descriptive
- Landmark regions defined (`<nav>`, `<main>`, etc.)
- Skip links present
- Form errors announced

**Common issues:**

- Missing alt text on images
- Icon buttons without labels
- Generic page titles ("Home")
- No skip link

---

## Accessibility Audit Process

### Tools Needed

1. **Browser DevTools**:
   - Chrome: Lighthouse (Accessibility audit)
   - Firefox: Accessibility Inspector
   - Edge: Lighthouse

2. **Keyboard Only**:
   - Unplug/disable mouse
   - Navigate with Tab, Shift+Tab, Enter, ESC

3. **Screen Reader** (optional but recommended):
   - Mac: VoiceOver (built-in, Cmd+F5)
   - Windows: NVDA (free download)
   - Chrome: ChromeVox extension

4. **Color Contrast Checker**:
   - WebAIM Contrast Checker
   - Browser DevTools (inspect element)

### Audit Checklist

**Page Structure:**

- [ ] One `<h1>` per page
- [ ] Heading levels don't skip (h1 → h2 → h3)
- [ ] Semantic elements used (`<nav>`, `<main>`, `<article>`)
- [ ] Skip link present and functional

**Interactive Elements:**

- [ ] All buttons/links reachable via keyboard
- [ ] Tab order is logical
- [ ] Focus indicators visible
- [ ] Focus contrast meets 3:1 ratio
- [ ] Buttons are `<button>`, links are `<a>`

**Images & Icons:**

- [ ] All images have alt text
- [ ] Decorative images have empty alt (`alt=""`) or `aria-hidden="true"`
- [ ] Icon buttons have `aria-label`
- [ ] SVGs have appropriate ARIA

**Forms:**

- [ ] All inputs have associated labels
- [ ] Required fields indicated
- [ ] Error messages clear and associated

**Color & Contrast:**

- [ ] Text meets 4.5:1 contrast (normal) or 3:1 (large)
- [ ] UI components meet 3:1 contrast
- [ ] Information not conveyed by color alone

**Dynamic Content:**

- [ ] Modals have `role="dialog"` and `aria-modal="true"`
- [ ] Expandable sections have `aria-expanded`
- [ ] Loading states announced

---

## Common Accessibility Improvements

### 1. Add Skip Link

**What:** Link at top of page to skip navigation
**Why:** Keyboard users can jump to main content
**Where:** Top of `<body>`, before everything else

```jsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

### 2. Improve Focus Indicators

**What:** Visible outline when element is focused
**Why:** Shows keyboard users where they are
**Where:** All interactive elements

```css
/* Global focus styles */
*:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}
```

### 3. Add ARIA Labels to Icon Buttons

**What:** Text description for buttons with only icons
**Why:** Screen readers need text to announce
**Where:** Menu button, social icons, etc.

```jsx
<button aria-label="Open menu">☰</button>
```

### 4. Use Semantic HTML

**What:** Replace `<div>` with semantic elements
**Why:** Screen readers understand structure
**Where:** Throughout site

```jsx
{
  /* ❌ Non-semantic */
}
<div className="nav">...</div>;

{
  /* ✅ Semantic */
}
<nav>...</nav>;
```

### 5. Add Screen Reader Only Text

**What:** Text visible to screen readers but not visually
**Why:** Provide context for screen reader users
**Where:** Anywhere context is missing

```jsx
<span className="sr-only">Current page:</span>
<NavLink to="/about">About</NavLink>
```

---

## Testing Scenarios

### Keyboard Navigation Test

1. **Start at top of page** (refresh browser)
2. **Press Tab repeatedly**:
   - Skip link should focus first (appears on focus)
   - Logo/brand link next
   - Nav links in order
   - Contact button
   - Page content (project cards, buttons, etc.)
   - Footer links
3. **Press Shift+Tab**: Go backwards
4. **Press Enter** on focused elements: Should activate
5. **No traps**: Should always be able to navigate away

### Screen Reader Test (Basic)

1. **Enable VoiceOver** (Mac: Cmd+F5) or NVDA (Windows)
2. **Navigate with VO keys**:
   - VO+Right Arrow: Next item
   - VO+Left Arrow: Previous item
   - VO+H: Next heading
   - VO+L: Next link
3. **Listen for**:
   - Descriptive labels
   - Heading hierarchy
   - Image descriptions
   - Button/link purposes
4. **Check navigation**:
   - Can find and use main navigation
   - Can skip to main content
   - Can navigate by landmarks

### Error Boundary Test

1. **Intentionally break a component**:
   - Add bad code to a page component
   - Reference undefined variable
   - Cause a render error
2. **Verify**:
   - Error boundary catches it
   - Fallback UI displays
   - "Try Again" button works
   - "Refresh" button works
   - Dev error details show (in dev mode)

---

## Detailed Improvement Areas

### Current Portfolio Accessibility Status

**Already Good:**

- ✅ Semantic HTML in most places (`<nav>`, `<main>`, `<article>`)
- ✅ Skip link in Navbar
- ✅ ARIA labels on mobile menu
- ✅ Focus states on interactive elements
- ✅ Alt text considerations (decorative icons hidden)
- ✅ Proper heading hierarchy

**Needs Review/Enhancement:**

- ⚠️ Form accessibility (Contact page)
- ⚠️ Focus indicator contrast
- ⚠️ Additional ARIA labels in some places
- ⚠️ Screen reader testing
- ⚠️ Keyboard navigation testing

---

## Key Concepts Explained

### Error Boundaries vs Try-Catch

**Try-Catch (synchronous errors):**

```jsx
try {
  doSomething();
} catch (error) {
  handleError(error);
}
```

**Error Boundaries (React component errors):**

```jsx
<ErrorBoundary>
  <ComponentThatMightError />
</ErrorBoundary>
```

**Why not just try-catch?**

- Try-catch doesn't work in JSX/render phase
- Error boundaries catch errors during rendering
- Error boundaries catch errors in lifecycle methods
- Error boundaries provide UI fallback

### Class Components vs Functional Components

**Functional (most of our components):**

```jsx
function Component() {
  const [state, setState] = useState();
  return <div>...</div>;
}
```

**Class (ErrorBoundary only):**

```jsx
class Component extends Component {
  constructor(props) {}
  componentDidMount() {}
  render() {
    return <div>...</div>;
  }
}
```

**Why class for ErrorBoundary?**

- React doesn't support error boundaries in functional components (yet)
- Need lifecycle methods `getDerivedStateFromError` and `componentDidCatch`
- Only use case for classes in modern React (otherwise use functions + hooks)

---

## Estimated Time Breakdown

- **ErrorBoundary Component**: 20-25 minutes
  - Explain class components: 5 min
  - Build component structure: 10 min
  - Test error scenarios: 5-10 min

- **App.jsx Integration**: 5 minutes
  - Import and wrap: 2 min
  - Test: 3 min

- **Accessibility Theory**: 10 minutes
  - WCAG overview: 3 min
  - Common issues: 3 min
  - Tools introduction: 4 min

- **Accessibility Audit**: 15-20 minutes
  - Lighthouse audit: 5 min
  - Keyboard navigation test: 5 min
  - Screen reader demo: 5-10 min

- **Accessibility Improvements**: 15-20 minutes
  - Add missing ARIA labels: 5 min
  - Improve focus styles: 5 min
  - Fix identified issues: 5-10 min

**Total: 65-80 minutes** (1 class session with buffer for discussion)

---

## Homework & Next Steps

**For Students:**

- Run Lighthouse audit on their customized portfolio
- Test keyboard navigation on all pages
- Fix any accessibility issues found
- Begin preparing their own content (for Class 12)
- Test site on mobile devices

**Preparation for Class 12:**

- Gather personal content (bio, projects, resume, images)
- Think about color scheme preferences
- Research deployment options (Netlify, Vercel, GitHub Pages)

---

## Key Takeaways

1. **Error Boundaries**: Catch errors gracefully, provide fallback UI

2. **Class Components**: Still needed for error boundaries (only use case)

3. **Accessibility**: Not optional—ethical, legal, and practical requirement

4. **WCAG Guidelines**: Industry standard (Level AA is typical target)

5. **Keyboard Navigation**: Must work for all interactive elements

6. **Screen Readers**: Test with actual assistive technology

7. **Semantic HTML**: Better than ARIA (use ARIA to enhance, not replace)

8. **Testing**: Use browser tools, keyboard, and screen readers

9. **Professional Practice**: Production apps need error handling and accessibility

10. **Continuous Improvement**: Accessibility is ongoing, not one-time

---

## Resources for Students

**Accessibility:**

- [WebAIM](https://webaim.org/) - Accessibility resources and guides
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project](https://www.a11yproject.com/) - Accessibility checklist
- [Chrome Lighthouse](https://developer.chrome.com/docs/lighthouse/) - Audit tool

**Error Handling:**

- [React Error Boundaries Docs](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Error Boundary Best Practices](https://kentcdodds.com/blog/use-react-error-boundary)

**Testing:**

- [VoiceOver Guide](https://webaim.org/articles/voiceover/)
- [NVDA Guide](https://webaim.org/articles/nvda/)
- [Keyboard Testing](https://webaim.org/articles/keyboard/)

---

## What Makes This Class Important

Class 11 transforms a **student project** into a **production-ready application**:

1. **Resilience**: Apps that handle errors gracefully
2. **Inclusivity**: Sites that work for everyone
3. **Professionalism**: Industry-standard practices
4. **Legal Compliance**: Meeting accessibility requirements
5. **Better UX**: Improves experience for all users, not just those with disabilities

After this class, students have a portfolio they can be proud to deploy and share with employers.
