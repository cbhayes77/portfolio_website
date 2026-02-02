# Class 11: Accessibility Audit & Improvements

**Focus:** Making your portfolio accessible to all users
**Purpose:** Ensure your site is usable by everyone, including people with disabilities

---

## What is Accessibility?

**Accessibility (a11y)** means making your website usable by **everyone**, including people with:

- **Visual impairments**: Blind users using screen readers, low vision users with magnification
- **Motor impairments**: Users who can't use a mouse, rely on keyboard only
- **Cognitive impairments**: Users who need clear, simple interfaces
- **Hearing impairments**: Users who need captions/transcripts for audio/video
- **Temporary disabilities**: Broken arm, bright sunlight making screen hard to see

**But accessibility helps everyone:**

- Keyboard shortcuts are faster for power users
- Clear labels help all users understand interfaces
- Semantic HTML helps SEO
- Good contrast helps in bright sunlight

---

## Why Accessibility Matters

### 1. It's the Right Thing to Do

**15% of the world's population** has some form of disability. Excluding them is excluding a huge audience.

### 2. It's the Law

**Legal requirements** in many contexts:

- **ADA** (Americans with Disabilities Act) - US federal law
- **Section 508** - US government websites
- **WCAG** (Web Content Accessibility Guidelines) - International standard
- **EU accessibility laws** - European Union

**Lawsuits happen:** Target, Domino's, and others have been sued for inaccessible websites.

### 3. It's Good for Business

- **Larger audience**: Don't exclude potential users/customers
- **Better SEO**: Search engines love semantic HTML
- **Better UX**: Accessible sites are often easier for everyone
- **Professional reputation**: Shows you care about quality

### 4. Employers Expect It

**Accessibility is a core skill** for web developers. Knowing WCAG and testing with assistive technology sets you apart.

---

## WCAG 2.1 Overview

**WCAG** (Web Content Accessibility Guidelines) is the **international standard** for web accessibility.

### The Four Principles (POUR)

1. **Perceivable**: Users can perceive the content
   - Text alternatives for images
   - Captions for videos
   - Sufficient color contrast

2. **Operable**: Users can operate the interface
   - Keyboard accessible
   - Enough time to read/use content
   - No content that causes seizures

3. **Understandable**: Users can understand the content and interface
   - Readable text
   - Predictable navigation
   - Input assistance (labels, error messages)

4. **Robust**: Content works with assistive technologies
   - Valid HTML
   - Compatible with screen readers
   - Works across browsers/devices

### Conformance Levels

- **Level A**: Basic accessibility (minimum)
- **Level AA**: Reasonable accessibility (**target for most sites**)
- **Level AAA**: Highest accessibility (often not feasible for all content)

**For this portfolio, we're targeting Level AA.**

---

## Accessibility Tools

### Browser DevTools

**Chrome Lighthouse:**

1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Check "Accessibility"
4. Click "Generate report"
5. Review issues and suggestions

**Firefox Accessibility Inspector:**

1. Open DevTools (F12)
2. Go to "Accessibility" tab
3. Enable if not active
4. Inspect elements for accessibility info

### Keyboard Testing

**No special tools needed:**

1. **Unplug your mouse** (or just don't use it)
2. Use **Tab** to navigate forward
3. Use **Shift+Tab** to navigate backward
4. Use **Enter** to activate links/buttons
5. Use **Space** to toggle checkboxes/buttons
6. Use **ESC** to close modals/menus

### Screen Readers

**Mac - VoiceOver (built-in):**

- **Enable**: Cmd+F5
- **Navigate**: VO+Right/Left Arrow (VO = Ctrl+Option)
- **Click**: VO+Space
- **Headings**: VO+H
- **Links**: VO+L

**Windows - NVDA (free download):**

- Download from nvaccess.org
- **Navigate**: Up/Down Arrow
- **Click**: Enter
- **Headings**: H
- **Links**: K

**Chrome - ChromeVox (extension):**

- Install from Chrome Web Store
- Similar to VoiceOver
- Works on all platforms

### Color Contrast Checkers

**WebAIM Contrast Checker:**

- Visit contrast.webaim.org
- Enter foreground and background colors
- Check if contrast meets WCAG AA/AAA

**Browser DevTools:**

- Inspect element
- Check "Contrast" in Styles panel
- See if it passes AA/AAA

---

## Running an Accessibility Audit

Let's audit your portfolio with Lighthouse.

### Step 1: Open Lighthouse

1. **Start your dev server**: `npm run dev`
2. **Open your portfolio** in Chrome
3. **Open DevTools**: Press F12 (or Cmd+Option+I on Mac)
4. **Go to Lighthouse tab**
5. **Configure**:
   - Device: Desktop (or Mobile)
   - Categories: Check "Accessibility" only
   - Click "Analyze page load"

### Step 2: Review the Report

Lighthouse will give you a **score** (0-100) and list **issues**.

**Common issues you might see:**

- ❌ Buttons do not have an accessible name
- ❌ Links do not have a discernible name
- ❌ Images do not have alt attributes
- ❌ Heading elements are not in a sequentially-descending order
- ❌ Background and foreground colors do not have sufficient contrast ratio

**For each issue**, Lighthouse shows:

- What failed
- Which elements failed
- How to fix it

### Step 3: Prioritize Issues

**Focus on:**

1. **High impact**: Issues affecting many users
2. **Easy fixes**: Low-hanging fruit
3. **Critical paths**: Home, About, Portfolio pages

**Don't worry about:**

- Third-party widget issues (can't control)
- Minor issues on rarely-visited pages

---

## Common Accessibility Issues & Fixes

Let's go through the most common issues and how to fix them.

### 1. Missing Alternative Text for Images

**Issue:** Images without `alt` attributes

**Why it matters:** Screen readers can't describe images without alt text

**Check your code:**

```jsx
{
  /* ❌ Bad: No alt text */
}
<img src="/project.jpg" />;

{
  /* ✅ Good: Descriptive alt text */
}
<img src="/project.jpg" alt="E-commerce website redesign showing shopping cart" />;

{
  /* ✅ Good: Decorative image (empty alt) */
}
<img src="/decoration.svg" alt="" />;
```

**Rules:**

- **Informative images**: Describe what's in the image
- **Functional images** (links/buttons): Describe the function
- **Decorative images**: Use empty alt (`alt=""`) or `aria-hidden="true"`
- **Complex images**: Provide longer description

**Fix in your portfolio:**

Check interest images in About.jsx:

```jsx
<img
  src={interest.image}
  alt="" {/* Empty because content is described in text below */}
  loading="lazy"
/>
```

This is **correct** because the interest name and description provide the same information.

---

### 2. Insufficient Color Contrast

**Issue:** Text that's hard to read against background

**Standard (WCAG AA):**

- **Normal text** (< 18pt): 4.5:1 minimum
- **Large text** (≥ 18pt): 3:1 minimum
- **UI components**: 3:1 minimum

**Check your code:**

Look for low-opacity text:

```jsx
{
  /* ⚠️ Might be low contrast */
}
<p className="text-white/60">Description</p>;

{
  /* Better */
}
<p className="text-white/70">Description</p>;
```

**Test with Lighthouse** or manually with contrast checker.

**Fix if needed:**

In your CSS/Tailwind, adjust opacity or colors:

```jsx
{/* If contrast is too low, increase opacity */}
className="text-white/70" {/* instead of /60 */}
className="text-white/80" {/* instead of /60 */}
className="text-gray-300" {/* instead of text-white/60 */}
```

---

### 3. Missing Form Labels

**Issue:** Form inputs without associated labels

**Why it matters:** Screen readers can't identify what input is for

**Check your Contact.jsx:**

```jsx
{/* ❌ Bad: No label */}
<input type="text" placeholder="Name" />

{/* ✅ Good: Proper label */}
<label htmlFor="name">Name</label>
<input type="text" id="name" name="name" />

{/* ✅ Also good: Implicit label */}
<label>
  Name
  <input type="text" name="name" />
</label>
```

**Your Contact form should already have labels.** Verify:

```jsx
<label htmlFor="name" className="block body-small mb-1">
  Name
</label>
<input
  type="text"
  id="name"
  name="name"
  // ...
/>
```

**If using placeholder as label (❌ don't):**

- Placeholders disappear when typing
- Screen readers might not announce them
- Low contrast (gray text)

---

### 4. Non-descriptive Link Text

**Issue:** Links that don't describe their destination

**Why it matters:** Screen reader users navigate by links, need context

**Check your code:**

```jsx
{/* ❌ Bad: Vague link text */}
<a href="/about">Click here</a>
<a href="/contact">Read more</a>

{/* ✅ Good: Descriptive text */}
<a href="/about">About Me</a>
<a href="/contact">Contact Me</a>

{/* ✅ Good: Adding context with sr-only */}
<a href="/contact">
  Read more <span className="sr-only">about my services</span>
</a>
```

**Your portfolio should already have descriptive links.** Verify in:

- Navigation (About Me, Portfolio, Resume)
- Project cards ("View Project" is okay if context is clear)
- Footer links

---

### 5. Missing ARIA Labels on Icon Buttons

**Issue:** Buttons with only icons (no text)

**Why it matters:** Screen readers can't announce button purpose

**Check your code:**

Your mobile menu button should have `aria-label`:

```jsx
{
  /* ✅ Good: In Navbar.jsx */
}
<Button
  aria-label="Open menu"
  aria-expanded={open ? "true" : "false"}
  aria-controls="mobile-menu"
  onClick={() => setOpen(true)}
>
  ☰
</Button>;
```

**Also check:**

- Social media icons in Footer
- Close button in MobileMenu (should have `aria-label="Close menu"`)

```jsx
{
  /* ✅ Good: In MobileMenu.jsx */
}
<Button
  ref={closeBtnRef}
  onClick={onClose}
  variant="secondary"
  size="sm"
  aria-label="Close menu"
  iconOnly={<FaTimes className="w-4 h-4" />}
/>;
```

---

### 6. Heading Hierarchy

**Issue:** Skipping heading levels (h1 → h3)

**Why it matters:** Screen readers use headings for navigation

**Correct hierarchy:**

```
h1: Page title (one per page)
  h2: Major sections
    h3: Subsections
      h4: Sub-subsections
```

**Check each page:**

**Home.jsx:**

```jsx
<h1>Joe Anonymous</h1> {/* Main heading */}
<h2>Featured Projects</h2> {/* Section */}
<h3>Project Title</h3> {/* Card (if used) */}
```

**About.jsx:**

```jsx
<h1>About Me</h1> {/* Page title */}
<h2>What Drives My Work</h2> {/* Section */}
<h3>User-Centered Design</h3> {/* Value card */}
<h2>Professional Journey</h2> {/* Section */}
<h3>Frontend Developer</h3> {/* Job title */}
```

**❌ Don't skip:**

```jsx
<h1>About Me</h1>
<h3>Professional Journey</h3> {/* ❌ Skipped h2 */}
```

**Your portfolio likely already has correct hierarchy.** Verify with:

- Browser DevTools → Elements → Search for `<h`
- Screen reader heading navigation (VO+H or H key in NVDA)

---

### 7. Keyboard Navigation

**Issue:** Interactive elements not reachable via keyboard

**Why it matters:** Some users can't use a mouse

**Test:**

1. Press **Tab** repeatedly
2. Focus should move to:
   - Skip link (appears on focus)
   - Logo/brand link
   - Nav links (About, Portfolio, Resume)
   - Contact button
   - Project cards/links
   - Footer links
3. Press **Enter** on focused link → should navigate
4. Press **Space** on focused button → should activate

**Common keyboard issues:**

```jsx
{
  /* ❌ Bad: div with onClick (not keyboard accessible) */
}
<div onClick={handleClick}>Click me</div>;

{
  /* ✅ Good: button */
}
<button onClick={handleClick}>Click me</button>;

{
  /* ✅ Good: div made keyboard accessible */
}
<div onClick={handleClick} onKeyDown={handleKeyDown} tabIndex="0" role="button">
  Click me
</div>;
```

**Your portfolio uses semantic elements** (`<button>`, `<a>`, `<NavLink>`), so keyboard navigation should work. **Test to verify.**

---

### 8. Focus Indicators

**Issue:** No visible outline when element is focused

**Why it matters:** Keyboard users need to see where they are

**Check your CSS:**

```css
/* ❌ Bad: Removes focus outline globally */
*:focus {
  outline: none;
}

/* ✅ Good: Custom focus styles */
*:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}
```

**Your portfolio likely already has focus styles.** Test by:

1. Press Tab to focus elements
2. Verify visible outline/ring appears
3. Check contrast (outline should be clearly visible)

**If focus styles are missing**, add to `index.css`:

```css
/* Global focus styles */
*:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}

/* Or use Tailwind's focus utilities in components */
```

---

## Keyboard Navigation Testing

### Complete Keyboard Test

**Starting from top of Home page:**

1. **Press Tab** → Skip link appears and focuses
2. **Press Enter** → Jumps to main content
3. **Press Tab** → Logo focuses
4. **Press Tab** → "About Me" nav link focuses
5. **Press Tab** → "Portfolio" nav link focuses
6. **Press Tab** → "Resume" nav link focuses
7. **Press Tab** → "Contact Me" button focuses
8. **Continue Tab** → Project cards focus
9. **Continue Tab** → Footer links focus
10. **Press Shift+Tab** → Go backward through focus order

**On mobile** (<768px):

1. Tab to menu button (☰)
2. Press Enter → Menu opens
3. Tab through menu items
4. Press ESC → Menu closes

**Requirements:**

- ✅ All interactive elements reachable
- ✅ Tab order is logical (top to bottom, left to right)
- ✅ Focus is always visible
- ✅ Enter/Space activates elements
- ✅ No keyboard traps (can always navigate away)

---

## Screen Reader Testing

### Basic VoiceOver Test (Mac)

1. **Enable VoiceOver**: Press Cmd+F5
2. **Navigate**: Press VO+Right Arrow (VO = Ctrl+Option)
3. **Listen to each element**:
   - Page title
   - Headings
   - Links (should announce link and destination)
   - Buttons (should announce button and purpose)
   - Images (should announce alt text or be hidden)

**What to check:**

- Are headings announced as headings?
- Are links descriptive?
- Are buttons labeled?
- Are images described or hidden?
- Is navigation structure clear?

### Quick Test Scenarios

**Navigate by headings:**

1. Press VO+H repeatedly
2. VoiceOver should announce each heading and its level
3. Verify heading hierarchy makes sense

**Navigate by links:**

1. Press VO+L repeatedly
2. VoiceOver should announce each link
3. Verify link text is descriptive

**Test forms (Contact page):**

1. Navigate to form fields
2. Verify labels are announced
3. Verify required fields are indicated
4. Verify error messages are announced

**Disable VoiceOver:** Press Cmd+F5 again

---

## Accessibility Improvements Checklist

Work through this checklist to ensure your portfolio is accessible:

### Semantic HTML

- [ ] One `<h1>` per page (page title)
- [ ] Heading hierarchy doesn't skip levels
- [ ] Use `<nav>` for navigation
- [ ] Use `<main>` for main content
- [ ] Use `<article>` for independent content
- [ ] Use `<button>` for actions, `<a>` for links

### Images

- [ ] All images have alt attributes
- [ ] Informative images have descriptive alt
- [ ] Decorative images have empty alt or aria-hidden
- [ ] Icons that convey meaning have labels

### Interactive Elements

- [ ] All interactive elements keyboard accessible
- [ ] Tab order is logical
- [ ] Focus indicators visible
- [ ] Focus contrast meets 3:1 ratio
- [ ] No keyboard traps

### Forms (Contact Page)

- [ ] All inputs have associated labels
- [ ] Required fields indicated
- [ ] Error messages clear and associated with fields
- [ ] Success messages announced

### ARIA

- [ ] Icon buttons have aria-label
- [ ] Skip link present
- [ ] Modal has role="dialog" and aria-modal="true"
- [ ] Expandable sections have aria-expanded
- [ ] ARIA used to enhance, not replace semantic HTML

### Color & Contrast

- [ ] Text contrast meets 4.5:1 (normal) or 3:1 (large)
- [ ] UI components meet 3:1 contrast
- [ ] Information not conveyed by color alone
- [ ] Focus indicators meet 3:1 contrast

### Content

- [ ] Link text is descriptive
- [ ] Button text describes action
- [ ] Error messages are clear
- [ ] Language of page declared (`<html lang="en">`)

---

## Testing with Real Users

**Best practice:** Test with real screen reader users if possible.

**Can't find users?** Consider:

- Hiring accessibility testers (Fable, AccessibilityOz)
- Joining a11y communities and asking for feedback
- Using automated tools as first pass

**Remember:** Automated tools catch ~30-40% of issues. Manual testing is essential.

---

## Common Fixes to Make

Based on typical issues, here are fixes you might need:

### Fix 1: Improve Focus Indicators

If focus styles are too subtle, enhance them:

```css
/* In index.css or component styles */
*:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.8);
  outline-offset: 2px;
}
```

### Fix 2: Add Screen Reader Text

Add context for screen reader users:

```jsx
{/* Add "current page" context to active nav link */}
<NavLink to="/about" className={...}>
  {isActive && <span className="sr-only">Current page: </span>}
  About Me
</NavLink>
```

### Fix 3: Improve Button Labels

Make button purposes clearer:

```jsx
{
  /* Instead of just "Learn More" */
}
<Button as="a" href={`/portfolio/${project.slug}`}>
  Learn More <span className="sr-only">about {project.title}</span>
</Button>;
```

### Fix 4: Add Landmark Roles

Ensure major sections have landmark roles:

```jsx
{
  /* Already in your Navbar.jsx */
}
<nav>...</nav>;

{
  /* Already in your App.jsx */
}
<main id="main-content">...</main>;

{
  /* Already in your Footer.jsx */
}
<footer>...</footer>;
```

**Verify these exist** in your components.

---

## Resources for Learning More

**Guidelines:**

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/) - Excellent articles and guides

**Tools:**

- [axe DevTools](https://www.deque.com/axe/devtools/) - Browser extension
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Built into Chrome

**Testing:**

- [VoiceOver Guide](https://webaim.org/articles/voiceover/)
- [NVDA Guide](https://webaim.org/articles/nvda/)
- [Keyboard Testing](https://webaim.org/articles/keyboard/)

**Communities:**

- [A11y Project](https://www.a11yproject.com/)
- [WebAIM Email List](https://webaim.org/discussion/)
- Twitter #a11y hashtag

---

## Key Takeaways

1. **Accessibility is for everyone**: Benefits all users, not just those with disabilities

2. **WCAG 2.1 Level AA**: Industry standard target

3. **Four principles**: Perceivable, Operable, Understandable, Robust (POUR)

4. **Semantic HTML first**: Better than ARIA

5. **Test with keyboard**: Unplug mouse, navigate with Tab

6. **Test with screen reader**: VoiceOver (Mac) or NVDA (Windows)

7. **Automated tools**: Lighthouse, axe, WAVE for quick audits

8. **Manual testing**: Essential, automated tools miss many issues

9. **Continuous process**: Not one-time, ongoing improvement

10. **Professional skill**: Employers expect accessibility knowledge

**Congratulations!** You've learned professional accessibility practices. Your portfolio is now usable by everyone! 🎉

---

## What's Next?

In **Class 12**, you'll:

- Replace placeholder content with your own information
- Customize styling to match your personal brand
- Prepare for deployment
- Learn deployment options (Netlify, Vercel, GitHub Pages)

**Before Class 12:**

- Run Lighthouse audit and fix any issues
- Test keyboard navigation on all pages
- Gather your personal content (bio, projects, resume, images)
- Think about your color scheme preferences
