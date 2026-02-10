# Class 11 Planning: Accessibility Audit & Improvements

**Last Updated:** February 9, 2026

---

## Overview

Class 11 focuses on **accessibility** to ensure the portfolio is usable by all users, including those with disabilities. This is a critical professional skill that separates student projects from production-quality applications. Students will learn how to audit their site for accessibility issues and implement improvements following WCAG 2.1 Level AA guidelines.

**Note:** ErrorBoundary was moved to Class 2 to provide error handling and debugging support from the beginning of the course.

### What Students Will Do

1. **Accessibility Audit** - Use browser tools to identify issues:
   - Run Lighthouse accessibility audit
   - Test keyboard navigation
   - Review semantic HTML structure
   - Check ARIA attributes
   - Test color contrast
   - Identify missing labels

2. **Accessibility Improvements** - Fix identified issues:
   - Add missing ARIA labels and attributes
   - Improve focus indicators on interactive elements
   - Enhance semantic HTML structure
   - Add sr-only (screen reader only) helper text
   - Ensure proper heading hierarchy
   - Verify color contrast meets WCAG AA standards

### Key Learning Outcomes

By the end of this class, students will:

- Conduct **accessibility audits** using browser tools
- Apply **WCAG 2.1 Level AA** guidelines
- Test with **keyboard navigation**
- Understand **screen reader** basics
- Use **semantic HTML** appropriately
- Add **ARIA attributes** when needed (and when not to)
- Create **accessible forms and interactive elements**
- Understand **focus management** best practices
- Prepare applications for **inclusive deployment**

---

## Pedagogical Approach

### Why Accessibility Matters

Accessibility is often overlooked in tutorials but is **essential for professional work**:

1. **Legal requirement** in many contexts (ADA, Section 508, AODA)
2. **Ethical responsibility** - inclusive design benefits everyone
3. **Better UX for all users** (not just users with disabilities)
4. **SEO benefits** - semantic HTML improves search rankings
5. **Professional skill** employers expect and value

### Teaching Sequence

This class follows an **audit + learn + improve** approach:

1. **Accessibility Introduction** (10-15 min)
   - What is accessibility and why it matters
   - WCAG guidelines overview
   - Common accessibility barriers
   - Tools for testing accessibility

2. **Accessibility Audit** (20-25 min)
   - Use Lighthouse to audit the site
   - Test keyboard navigation through all pages
   - Review semantic HTML usage
   - Check existing ARIA attributes
   - Test color contrast ratios
   - Identify specific issues to fix

3. **Accessibility Improvements** (25-30 min)
   - Add missing ARIA labels to interactive elements
   - Improve focus indicators (visible focus states)
   - Enhance semantic structure (proper heading hierarchy)
   - Add sr-only helper text where needed
   - Fix any color contrast issues
   - Test and verify all improvements

4. **Final Accessibility Check** (10 min)
   - Re-run Lighthouse audit
   - Verify all issues are resolved
   - Document accessibility features
   - Celebrate achieving high accessibility score!

### Why This Order?

1. **Theory first**: Context for why accessibility matters
2. **Audit before fixing**: Identify real issues in the actual site
3. **Targeted improvements**: Fix specific problems found in audit
4. **Verify fixes**: Confirm improvements actually work

---

## Accessibility Concepts

### What is Web Accessibility?

**Web accessibility** means ensuring websites, tools, and technologies are designed and developed so that people with disabilities can use them.

**People with disabilities can:**

- Perceive, understand, navigate, and interact with the web
- Contribute to the web

**Types of disabilities that affect web use:**

- **Visual**: Blindness, low vision, color blindness
- **Auditory**: Deafness, hard of hearing
- **Motor**: Difficulty using mouse, tremors, paralysis
- **Cognitive**: Learning disabilities, memory issues, attention disorders

### WCAG 2.1 Guidelines

**WCAG** = Web Content Accessibility Guidelines

**Four Principles (POUR):**

1. **Perceivable** - Information must be presentable to users
   - Text alternatives for images
   - Captions for videos
   - Adequate color contrast
   - Content adaptable to different presentations

2. **Operable** - UI components must be operable
   - Keyboard accessible
   - Enough time to read/use content
   - No seizure-inducing content
   - Navigable and findable

3. **Understandable** - Information and UI must be understandable
   - Readable text
   - Predictable behavior
   - Input assistance (error messages, labels)

4. **Robust** - Content must work with assistive technologies
   - Compatible with current and future tools
   - Valid HTML
   - Proper ARIA usage

**Conformance Levels:**

- **Level A**: Basic accessibility (minimum)
- **Level AA**: Removes major barriers (target for this class)
- **Level AAA**: Highest level (ideal but not always achievable)

---

## Component Review (No New Components)

### No New Components in Class 11

Unlike previous classes, **Class 11 doesn't build new components**. Instead, students will:

1. **Audit existing components** for accessibility issues
2. **Update existing components** with accessibility improvements
3. **Learn best practices** for future component development

### Components to Review and Improve

Students will review all components built in Classes 1-10:

**UI Components:**
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

````

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
````

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
