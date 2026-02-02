# Class 12: Style Customization Guide

**Workshop Component 2 of 4**
**Estimated Time:** 15-20 minutes

---

## Overview

This guide helps you customize the visual design of your portfolio to match your personal brand. You'll update colors, fonts, spacing, and add personal branding elements.

> **💡 Design Tip:** Keep it simple. A clean, professional design beats an over-designed portfolio every time.

---

## Step 1: Choose Your Color Scheme (5-10 minutes)

### What You're Doing

The portfolio currently uses a black background with white text and accents. You can customize these colors to match your personal brand.

### Current Color Scheme

```
Background: Black (#000000)
Primary text: White (#FFFFFF)
Accent: White with opacity variations
Gray tones: Various shades for cards, borders
```

### Option A: Subtle Changes (Easiest)

Keep the dark theme but adjust the colors slightly.

**File:** `src/index.css`

1. **Find the CSS custom properties** (around line 15-25):

   ```css
   :root {
     /* Add your custom colors here */
   }
   ```

2. **Add custom color variables:**

   ```css
   :root {
     --color-background: #0a0a0a; /* Slightly off-black */
     --color-primary: #3b82f6; /* Blue accent */
     --color-text: #f5f5f5; /* Slightly off-white */
     --color-gray: #1a1a1a; /* Dark gray */
   }
   ```

3. **Use throughout your CSS:**
   ```css
   body {
     background-color: var(--color-background);
     color: var(--color-text);
   }
   ```

### Option B: Complete Color Overhaul

Change the entire color scheme.

**Popular schemes:**

**1. Blue Accent on Dark:**

```css
:root {
  --color-bg: #0f172a; /* Dark blue-gray */
  --color-primary: #3b82f6; /* Bright blue */
  --color-text: #f1f5f9; /* Light gray */
  --color-card: #1e293b; /* Lighter blue-gray */
}
```

**2. Green/Teal Accent:**

```css
:root {
  --color-bg: #0a0f0a; /* Very dark green-black */
  --color-primary: #10b981; /* Emerald green */
  --color-text: #f0fdf4; /* Light green-white */
  --color-card: #14181c; /* Dark gray-green */
}
```

**3. Purple/Pink Accent:**

```css
:root {
  --color-bg: #18181b; /* Dark gray */
  --color-primary: #a855f7; /* Purple */
  --color-text: #faf5ff; /* Light purple-white */
  --color-card: #27272a; /* Medium gray */
}
```

**4. Warm/Orange Accent:**

```css
:root {
  --color-bg: #1a1410; /* Dark brown-black */
  --color-primary: #f97316; /* Orange */
  --color-text: #fff7ed; /* Warm white */
  --color-card: #292524; /* Warm gray */
}
```

### Using Tailwind Colors

The portfolio uses Tailwind CSS, so you can use Tailwind's color classes directly.

**Example: Change from white to blue:**

Find instances of:

- `bg-white` → `bg-blue-500`
- `text-white` → `text-blue-500`
- `border-white` → `border-blue-500`
- `hover:bg-white` → `hover:bg-blue-600`

**Common locations to update:**

1. **Buttons** (`src/components/ui/Button.jsx`):

   ```jsx
   <button className="bg-blue-600 hover:bg-blue-700 text-white">
   ```

2. **Links and accents** (various components):

   ```jsx
   <a className="text-blue-400 hover:text-blue-300">
   ```

3. **Cards** (`src/components/ui/ProjectCard.jsx`, etc.):
   ```jsx
   <div className="bg-gray-900 border-gray-800">
   ```

### Color Tools and Resources

**Color scheme generators:**

- [Coolors](https://coolors.co/) - Generate palettes
- [Adobe Color](https://color.adobe.com/) - Color wheel tool
- [Tailwind Color Shades](https://www.tailwindshades.com/) - Generate Tailwind-compatible palettes

**Accessibility checker:**

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Ensure text is readable

### Color Best Practices

- **Limit colors:** 2-3 main colors max (background, primary, accent)
- **Consistent use:** Use same color for similar elements
- **Contrast:** Ensure text is readable (WCAG AA: 4.5:1 ratio)
- **Test in dark/light:** Check colors in different lighting
- **Brand alignment:** Match colors to your personal brand

---

## Step 2: Customize Typography (5 minutes)

### What You're Doing

Change fonts to better reflect your personal style.

### Current Fonts

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", ...;
}
```

System fonts are used by default (fast, no download needed).

### Option A: Keep System Fonts

**Already done!** The default system fonts are clean, fast, and professional.

### Option B: Add Google Fonts

Choose 1-2 fonts (one for headings, one for body text).

**Popular combinations:**

1. **Modern/Clean:**
   - Headings: Inter
   - Body: Inter

2. **Professional/Corporate:**
   - Headings: Montserrat
   - Body: Open Sans

3. **Creative/Unique:**
   - Headings: Poppins
   - Body: Nunito

4. **Technical/Code-like:**
   - Headings: Space Grotesk
   - Body: IBM Plex Sans

**How to add Google Fonts:**

1. **Go to** [fonts.google.com](https://fonts.google.com)

2. **Select your fonts:**
   - Click on a font
   - Select weights: 400 (Regular), 600 (Semi-bold), 700 (Bold)
   - Copy the embed code

3. **Add to `index.html`** in the `<head>`:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
   ```

4. **Update `src/index.css`:**

   ```css
   body {
     font-family:
       "Inter",
       -apple-system,
       BlinkMacSystemFont,
       sans-serif;
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
     font-family:
       "Inter",
       -apple-system,
       BlinkMacSystemFont,
       sans-serif;
   }
   ```

### Adjusting Font Sizes

**Make headings bigger/smaller:**

In `src/index.css`, find heading classes:

```css
.heading-page {
  font-size: 4rem; /* Larger: 4.5rem, Smaller: 3.5rem */
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.heading-section {
  font-size: 2.5rem; /* Adjust as needed */
  line-height: 1.2;
}
```

**Adjust body text:**

```css
body {
  font-size: 1rem; /* Base size */
  line-height: 1.6; /* Spacing between lines */
}

.text-large {
  font-size: 1.125rem; /* Slightly larger */
}
```

### Typography Best Practices

- **Limit fonts:** Use 1-2 font families max
- **Hierarchy:** Clear size differences between headings
- **Readability:** Line-height of 1.5-1.7 for body text
- **Weight:** Use different weights for emphasis
- **Performance:** Limit Google Fonts to 3-4 weights total

---

## Step 3: Adjust Spacing and Layout (3-5 minutes)

### What You're Doing

Customize spacing, container width, and component gaps to change the feel of your portfolio.

### Container Width

**Make content wider or narrower:**

Find `Container.jsx` usage in pages:

```jsx
{/* Default: max-w-6xl */}
<Container className="max-w-6xl">

{/* Wider: */}
<Container className="max-w-7xl">

{/* Narrower: */}
<Container className="max-w-5xl">
```

**Tailwind max-width values:**

- `max-w-4xl` - 896px (narrow, reading-focused)
- `max-w-5xl` - 1024px (comfortable)
- `max-w-6xl` - 1152px (default)
- `max-w-7xl` - 1280px (wide, spacious)

### Section Spacing

**Adjust vertical spacing between sections:**

Find `Section` components:

```jsx
{/* Default spacing */}
<Section>

{/* More space: */}
<Section className="py-24">

{/* Less space: */}
<Section className="py-12">
```

**Tailwind padding values:**

- `py-12` - 3rem (compact)
- `py-16` - 4rem (comfortable)
- `py-20` - 5rem (default)
- `py-24` - 6rem (spacious)

### Grid Gaps

**Adjust spacing between cards/items:**

Find grid layouts (in Projects.jsx, TechStack.jsx, etc.):

```jsx
{/* Default: gap-6 */}
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

{/* Tighter: */}
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

{/* Wider: */}
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
```

### Border Radius

**Make elements more or less rounded:**

Find elements with `rounded` classes:

```jsx
{/* Subtle rounded: */}
className="rounded-lg"    {/* 8px */}

{/* More rounded: */}
className="rounded-xl"    {/* 12px */}

{/* Very rounded: */}
className="rounded-2xl"   {/* 16px */}

{/* Sharp corners: */}
className="rounded-none"  {/* 0px */}
```

---

## Step 4: Add Personal Branding (5 minutes)

### What You're Doing

Replace placeholder branding with your own logo, colors, and visual identity.

### Add Your Logo

**Current placeholder** (in Navbar.jsx and MobileMenu.jsx):

```jsx
<span className="inline-block h-6 w-6 rounded bg-white/80" aria-hidden />
```

**Option 1: Use an image logo:**

1. **Add your logo** to `public/`:
   - `public/logo.svg` (preferred, scalable)
   - Or `public/logo.png` (use 2x resolution: 96x96px)

2. **Update Navbar.jsx:**

   ```jsx
   <img src="/logo.svg" alt="" className="h-6 w-6" />
   ```

3. **Update MobileMenu.jsx** the same way

**Option 2: Use initials:**

```jsx
<span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm">
  SJ
</span>
```

**Option 3: Use text logo:**

```jsx
<span className="font-bold text-xl tracking-tight">YourName</span>
```

### Add a Favicon

**What it is:** Small icon in browser tab

**How to add:**

1. **Create favicon images:**
   - 32x32px PNG
   - 16x16px PNG
   - Optional: Use [Favicon Generator](https://realfavicongenerator.net/)

2. **Add to `public/`:**
   - `public/favicon-32x32.png`
   - `public/favicon-16x16.png`

3. **Update `index.html` in `<head>`:**

   ```html
   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
   ```

4. **Test:** Refresh and check browser tab for your icon

### Custom Accent Elements

**Add visual flair to specific sections:**

**Gradient backgrounds:**

```jsx
<div className="bg-gradient-to-r from-blue-600 to-purple-600">{/* content */}</div>
```

**Decorative elements:**

```jsx
<div className="relative">
  {/* Main content */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
</div>
```

**Custom underlines:**

```css
.custom-underline {
  background-image: linear-gradient(120deg, #3b82f6 0%, #8b5cf6 100%);
  background-repeat: no-repeat;
  background-size: 100% 3px;
  background-position: 0 100%;
  padding-bottom: 4px;
}
```

---

## Step 5: Review and Refine (2-3 minutes)

### Quick Visual Check

1. **Run dev server:**

   ```bash
   npm run dev
   ```

2. **Check each page:**
   - Home - Does color scheme work?
   - About - Are fonts readable?
   - Portfolio - Do cards look good?
   - Individual projects - Images and text balanced?
   - Resume - PDF styling consistent?
   - Contact - Form looks clean?

3. **Test responsive:**
   - Resize browser window
   - Check mobile view (< 768px)
   - Check tablet view (768-1024px)
   - Check desktop view (> 1024px)

### Common Issues and Fixes

**Issue: Text is hard to read**

**Fix:** Increase contrast between text and background

```css
/* Bad: */
color: #666 on background: #333

/* Good: */
color: #f5f5f5 on background: #0a0a0a
```

**Issue: Too many colors, looks chaotic**

**Fix:** Limit to 2-3 colors

```css
/* Stick to: */
- Background color (1)
- Primary/accent color (1)
- Text color (1)
- Maybe one gray for borders
```

**Issue: Fonts look messy**

**Fix:** Use consistent font weights

```css
/* Use only: */
- 400 (regular) for body
- 600 (semi-bold) for emphasis
- 700 (bold) for headings
```

**Issue: Spacing feels off**

**Fix:** Use consistent spacing scale

```css
/* Stick to Tailwind scale: */
- 4px (1)
- 8px (2)
- 16px (4)
- 24px (6)
- 32px (8)
```

---

## Design Best Practices

### Do's ✅

- **Keep it simple:** Clean beats clever
- **Be consistent:** Same styles for same elements
- **Ensure readability:** High contrast, good font size
- **Mobile-first:** Design works on small screens
- **Fast loading:** Optimize images, limit fonts

### Don'ts ❌

- **Over-design:** Too many colors, fonts, effects
- **Sacrifice usability:** Style shouldn't hurt function
- **Ignore accessibility:** Text must be readable
- **Copy exactly:** Inspired by, not identical to others
- **Neglect performance:** Don't slow down your site

---

## Inspiration Resources

**Portfolio examples:**

- [Awwwards](https://www.awwwards.com/websites/portfolio/) - Award-winning portfolios
- [Behance](https://www.behance.net/) - Designer portfolios
- [Dribbble](https://dribbble.com/tags/portfolio) - Portfolio designs

**Color inspiration:**

- [Coolors](https://coolors.co/palettes/trending) - Trending palettes
- [Color Hunt](https://colorhunt.co/) - Curated color palettes
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors) - Built-in options

**Font pairing:**

- [Fontpair](https://www.fontpair.co/) - Google Font combinations
- [Typewolf](https://www.typewolf.com/) - Font recommendations
- [Google Fonts](https://fonts.google.com/) - Browse and preview

**Design systems:**

- [Tailwind UI](https://tailwindui.com/) - Component examples
- [Vercel Design](https://vercel.com/design) - Inspiration
- [Linear Design](https://linear.app/) - Clean, modern style

---

## Testing Your Design

### Checklist

**Visual coherence:**

- [ ] Colors look intentional, not random
- [ ] Fonts are consistent across pages
- [ ] Spacing feels balanced
- [ ] Elements are aligned properly

**Readability:**

- [ ] Text is easy to read on all backgrounds
- [ ] Font sizes are appropriate
- [ ] Line height makes text comfortable to read
- [ ] Headings stand out from body text

**Branding:**

- [ ] Logo or initials are visible
- [ ] Color scheme reflects your style
- [ ] Overall feel matches your personality
- [ ] Professional but not generic

**Responsiveness:**

- [ ] Looks good on mobile (< 768px)
- [ ] Looks good on tablet (768-1024px)
- [ ] Looks good on desktop (> 1024px)
- [ ] Touch targets are large enough on mobile

**Performance:**

- [ ] Pages load quickly
- [ ] Images are optimized
- [ ] Fonts load smoothly
- [ ] No layout shift on load

---

## Common Questions

### "How do I know if my colors work well together?"

**Test for:**

1. **Contrast:** Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
2. **Harmony:** Use color wheel tools (complementary, analogous, triadic)
3. **Accessibility:** Ensure WCAG AA compliance (4.5:1 ratio)
4. **Emotion:** Do colors convey the right feeling for your brand?

**Quick rule:** If it looks good in grayscale, your design is solid. Colors should enhance, not carry the design.

### "My portfolio looks like everyone else's. How do I make it unique?"

**Subtlety is key:**

- Unique color combination (not just blue)
- Custom illustrations or icons
- Personal photography
- Distinctive typography choices
- Signature animation or interaction
- Your voice in the copy

**Don't:** Go overboard. Unique doesn't mean complex.

### "Should I use a light theme or dark theme?"

**Dark theme pros:**

- Modern, trendy
- Good for showcasing colorful projects
- Easier on eyes in low light
- Popular in tech/design

**Light theme pros:**

- Better accessibility (usually higher contrast)
- More professional/corporate feel
- Easier to read for some users
- Works better in bright environments

**Best answer:** Choose what fits your brand. Both can work well.

### "Can I use animations?"

**Yes, but sparingly:**

**Good animations:**

- Subtle hover effects
- Smooth page transitions
- Fade-in on scroll
- Loading states

**Avoid:**

- Constant motion
- Flashy, distracting animations
- Auto-playing videos/GIFs
- Animations that slow down site

**Remember:** Respect `prefers-reduced-motion` for accessibility.

---

## Next Steps

✅ **Style customization complete!**

**Now you can:**

1. Move to [CLASS_12_TESTING.md](./CLASS_12_TESTING.md) to test your portfolio thoroughly
2. Get feedback from classmates on your design
3. Make final tweaks before deployment

**Remember:** Design is iterative. You can always refine it later. Aim for "good enough" now, perfect later.

---

**Awesome work!** Your portfolio now has your personal touch. Time to test and deploy! 🎨
