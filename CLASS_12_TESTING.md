# Class 12: Testing & Quality Assurance Guide

**Workshop Component 3 of 4**
**Estimated Time:** 10-15 minutes

---

## Overview

Before deploying your portfolio to the web, you need to thoroughly test it. This guide walks you through testing functionality, content, responsiveness, accessibility, and performance.

> **💡 Why Test?** First impressions matter. A single broken link or typo can undermine your professional image. Test thoroughly before sharing with potential employers.

---

## Pre-Testing Setup

### 1. Start Your Dev Server

```bash
npm run dev
```

Keep this running throughout testing so you can immediately see changes.

### 2. Open Browser DevTools

**Chrome/Edge/Firefox:**

- Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)

**You'll use:**

- **Console** - Check for JavaScript errors
- **Network** - Monitor loading performance
- **Device toolbar** - Test responsive design
- **Lighthouse** - Run accessibility/performance audits

### 3. Have Your Checklist Ready

Use this guide as your checklist, marking items as you test.

---

## Step 1: Functionality Testing (5 minutes)

### Navigation Testing

**Test main navigation (Navbar):**

- [ ] Click **Home** link → Navigates to home page
- [ ] Click **About** link → Navigates to about page
- [ ] Click **Portfolio** link → Navigates to portfolio page
- [ ] Click **Resume** link → Navigates to resume page
- [ ] Click **Contact** link → Navigates to contact page
- [ ] Click **logo/brand** → Returns to home page
- [ ] Current page is highlighted with visual indicator

**Test mobile menu:**

- [ ] Click hamburger icon (☰) → Menu opens
- [ ] Click X icon → Menu closes
- [ ] Click any link → Menu closes and navigates
- [ ] Click outside menu → Menu closes (optional)
- [ ] All nav links work in mobile menu

**Test footer navigation:**

- [ ] All footer links navigate correctly
- [ ] External links (GitHub, LinkedIn) open in new tab
- [ ] Social icons are clickable and correct

### Page Content Testing

**Home page:**

- [ ] Hero section displays correctly
- [ ] Featured projects load (if applicable)
- [ ] Tech stack icons display
- [ ] Testimonials show (if included)
- [ ] Final CTA section appears
- [ ] All sections are visible

**About page:**

- [ ] Bio text displays
- [ ] Values/principles section shows
- [ ] Experience timeline renders
- [ ] Education section displays
- [ ] Interests section with images loads
- [ ] CTA section appears

**Portfolio page:**

- [ ] All project cards display
- [ ] Project images load
- [ ] Click project card → Navigates to project detail
- [ ] Each project slug URL works
- [ ] Test all project links: `/portfolio/project-slug-1`, `/portfolio/project-slug-2`, etc.

**Individual Project pages:**

- [ ] Hero image displays
- [ ] Project title and description show
- [ ] Case study sections render
- [ ] Technologies list displays
- [ ] Links (GitHub, live site) work
- [ ] Back navigation works

**Resume page:**

- [ ] PDF displays in viewer
- [ ] Download button works
- [ ] View Full Resume button works
- [ ] PDF is correct file
- [ ] PDF content is readable

**Contact page:**

- [ ] Form displays correctly
- [ ] All input fields are editable
- [ ] Email and message fields work
- [ ] Form looks professional
- [ ] (Form submission not required for Class 12)

### Interactive Elements

**Buttons:**

- [ ] All buttons are clickable
- [ ] Hover effects work
- [ ] Focus states visible (tab to button and see outline)
- [ ] Buttons navigate or trigger actions

**Links:**

- [ ] All text links are clickable
- [ ] Hover states work (underline, color change)
- [ ] Focus states visible (keyboard navigation)
- [ ] External links open in new tab (if `target="_blank"`)

**Cards:**

- [ ] Project cards are clickable
- [ ] Hover effects work (lift, border, etc.)
- [ ] Images load correctly
- [ ] Text is readable

### Browser Console Check

**Open Console (F12 → Console tab):**

- [ ] No JavaScript errors (red messages)
- [ ] No 404 errors (missing files)
- [ ] No warnings about accessibility
- [ ] React warnings resolved (if any)

**Common errors to fix:**

```
❌ GET http://localhost:5173/image.jpg 404 (Not Found)
Fix: Image path is wrong, fix in data file

❌ Warning: Each child should have a unique "key" prop
Fix: Add key prop to mapped items

❌ Failed to load resource: net::ERR_FILE_NOT_FOUND
Fix: File is missing or path is incorrect
```

---

## Step 2: Content Review (3-5 minutes)

### Placeholder Content Check

**Search your entire site for placeholder text:**

- [ ] No "Joe Anonymous" anywhere
- [ ] No "Lorem ipsum" or dummy text
- [ ] No "example@email.com" or fake emails
- [ ] No placeholder company names
- [ ] No "Your Name Here" text
- [ ] No "TODO" comments visible to users

**How to check:**

- Visit each page
- Read through all text
- Use browser Find (Cmd+F) to search for "Joe" or "Lorem"

### Proofreading

**Check all text for:**

- [ ] Spelling errors (use browser spellcheck)
- [ ] Grammar mistakes
- [ ] Punctuation errors
- [ ] Consistent capitalization
- [ ] Professional tone throughout

**Pay special attention to:**

- Your bio (About page)
- Project descriptions
- Headings and titles
- Button text
- Navigation labels

**Pro tip:** Read text aloud to catch awkward phrasing.

### Data Accuracy

**Verify all information is correct:**

- [ ] Your name is spelled correctly everywhere
- [ ] Email address is correct
- [ ] Phone number is correct (if included)
- [ ] Job titles and companies are accurate
- [ ] Dates and timelines are correct
- [ ] Technology names are correct (React, not react)
- [ ] Links go to correct destinations

### Image Audit

**Check all images:**

- [ ] All images load (no broken image icons)
- [ ] Images are relevant and professional
- [ ] Image quality is good (not blurry or pixelated)
- [ ] Images are optimized (not excessively large files)
- [ ] Alt text is present (or decorative images handled correctly)

**How to check for broken images:**

- Look for broken image icon (🖼️ with X)
- Check Console for 404 errors
- Verify all image paths in data files

---

## Step 3: Responsive Design Testing (5 minutes)

### Enable Device Toolbar

**Chrome/Edge:**

- Press `Cmd+Shift+M` (Mac) or `Ctrl+Shift+M` (Windows)
- Or click device icon in DevTools

**Firefox:**

- Press `Cmd+Option+M` (Mac) or `Ctrl+Shift+M` (Windows)

### Test Mobile View (< 768px)

**Select device:** iPhone 12 Pro (or similar)

- [ ] Mobile menu appears (not regular nav)
- [ ] Mobile menu opens and closes correctly
- [ ] All content is visible (no horizontal scroll)
- [ ] Text is readable (not too small)
- [ ] Images scale appropriately
- [ ] Buttons are easily tappable (44px minimum)
- [ ] Cards stack vertically (1 column)
- [ ] Spacing looks balanced

**Test pages:**

- [ ] Home
- [ ] About
- [ ] Portfolio
- [ ] Individual project
- [ ] Resume
- [ ] Contact

**Common mobile issues:**

```
❌ Horizontal scroll appears
Fix: Element is too wide, use max-w-full or reduce size

❌ Text is too small to read
Fix: Increase font-size for mobile (text-base → text-lg)

❌ Buttons too small to tap
Fix: Increase padding (p-2 → p-4)

❌ Images overflow container
Fix: Add className="w-full h-auto"
```

### Test Tablet View (768-1024px)

**Select device:** iPad (or set width to 768px)

- [ ] Layout adapts appropriately
- [ ] Grid columns reduce (3 → 2 columns)
- [ ] Navigation works (may be mobile or desktop)
- [ ] Images scale well
- [ ] Text is readable
- [ ] Touch targets are large enough

### Test Desktop View (> 1024px)

**Set width:** 1920px (large desktop)

- [ ] Regular navigation appears
- [ ] Content is centered (not stretched edge-to-edge)
- [ ] Grid shows multiple columns (3-4)
- [ ] Images look good at large size
- [ ] No awkward empty space
- [ ] Text line length is readable (not too wide)

### Test on Real Devices

**If possible, test on actual devices:**

**Mobile phone:**

- [ ] Pull out your phone
- [ ] Visit `http://YOUR-LOCAL-IP:5173` on phone (same WiFi)
- [ ] Test navigation, scrolling, tapping
- [ ] Check performance and loading speed

**Tablet (if available):**

- [ ] Test on iPad or Android tablet
- [ ] Verify layout adapts correctly
- [ ] Test touch interactions

**Different screen sizes:**

- [ ] Resize browser window from small to large
- [ ] Watch layout adapt smoothly
- [ ] No breaking points or awkward transitions

---

## Step 4: Cross-Browser Testing (2-3 minutes)

### Test in Multiple Browsers

**Required:**

- [ ] **Chrome** (or Edge) - Primary browser
- [ ] **Firefox** - Test rendering differences
- [ ] **Safari** (if on Mac) - WebKit differences

**Test in each browser:**

- [ ] Home page loads correctly
- [ ] Navigation works
- [ ] Styles render consistently
- [ ] Images display
- [ ] No console errors
- [ ] Fonts display correctly

### Common Browser Differences

**Safari-specific issues:**

- Flexbox behaves slightly differently
- Some CSS features need `-webkit-` prefix
- Smooth scrolling may differ
- Form styling differences

**Firefox-specific issues:**

- Scrollbar styling not supported
- Some animations may differ
- Font rendering slightly different

**If you find issues:**

- Note which browser
- Check if it's a critical issue (broken) or minor (slight difference)
- Fix critical issues, minor differences often acceptable

---

## Step 5: Accessibility Verification (3-5 minutes)

### Keyboard Navigation Test

**Close your mouse. Use only keyboard:**

- [ ] Press `Tab` to navigate through page
- [ ] Focus indicator is visible on each element
- [ ] Can reach all interactive elements (links, buttons)
- [ ] Press `Enter` to activate buttons/links
- [ ] Can navigate entire site with keyboard only
- [ ] Logical tab order (top to bottom, left to right)

**Mobile menu:**

- [ ] Can open menu with keyboard
- [ ] Can navigate menu items with Tab
- [ ] Can close menu with Escape key

**If focus isn't visible:**

Add focus styles in `index.css`:

```css
*:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}
```

### Screen Reader Test (Optional)

**If you have time:**

**Mac:** Turn on VoiceOver (Cmd+F5)
**Windows:** Turn on Narrator (Ctrl+Win+Enter)

- [ ] Navigate site with screen reader
- [ ] All content is announced
- [ ] Images have alt text
- [ ] Links are descriptive
- [ ] Headings are in order

### Run Lighthouse Audit

**In Chrome DevTools:**

1. **Open DevTools** (F12)
2. **Go to Lighthouse tab**
3. **Select:**
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
4. **Click "Analyze page load"**
5. **Wait for results** (30-60 seconds)

**Review scores:**

- [ ] **Accessibility: ≥ 90** (aim for 95+)
- [ ] **Performance: ≥ 80** (aim for 90+)
- [ ] **Best Practices: ≥ 90**
- [ ] **SEO: ≥ 90**

**Common accessibility issues:**

```
❌ Images missing alt text
Fix: Add alt attribute to <img> tags

❌ Heading levels skip (h1 → h3)
Fix: Use proper heading hierarchy (h1 → h2 → h3)

❌ Links don't have discernible text
Fix: Ensure link text describes destination

❌ Background/foreground contrast too low
Fix: Increase color contrast (use contrast checker)
```

### Color Contrast Check

**Use WebAIM Contrast Checker:**

1. Go to [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)
2. Enter your text color (e.g., #ffffff)
3. Enter your background color (e.g., #000000)
4. Check results:
   - ✅ WCAG AA: 4.5:1 (normal text)
   - ✅ WCAG AA: 3:1 (large text)

- [ ] Body text passes AA (4.5:1)
- [ ] Headings pass AA (3:1 for large text)
- [ ] Links pass AA
- [ ] Button text passes AA

---

## Step 6: Performance Check (2-3 minutes)

### Run Production Build

**Test the actual built files (not dev server):**

1. **Build your project:**

   ```bash
   npm run build
   ```

2. **Preview built site:**

   ```bash
   npm run preview
   ```

3. **Open preview URL** (usually `http://localhost:4173`)

### Lighthouse Performance Audit

**Run Lighthouse on production build:**

- [ ] Performance score ≥ 80 (aim for 90+)
- [ ] First Contentful Paint < 1.8s
- [ ] Speed Index < 3.4s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.8s
- [ ] Total Blocking Time < 200ms
- [ ] Cumulative Layout Shift < 0.1

**Common performance issues:**

```
❌ Images not optimized
Fix: Compress images (TinyPNG, ImageOptim)

❌ Too many fonts loaded
Fix: Limit to 2-3 font weights

❌ Large JavaScript bundle
Fix: Code splitting, lazy loading (advanced)

❌ Render-blocking resources
Fix: Preload critical fonts, optimize CSS
```

### Image Optimization

**Check image file sizes:**

- [ ] Hero images < 500KB
- [ ] Project images < 300KB
- [ ] Interest images < 200KB
- [ ] Icons/logos < 50KB

**Optimize images:**

- Use [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/)
- Convert to WebP format (optional, advanced)
- Use appropriate dimensions (don't load 4000px images)

### Check Network Tab

**In DevTools → Network tab:**

1. **Reload page**
2. **Check total size:** < 3MB ideal
3. **Check request count:** < 50 ideal
4. **Check load time:** < 3 seconds ideal

**Look for:**

- Large files (> 1MB)
- Slow-loading resources
- Failed requests (404s)
- Duplicate requests

---

## Testing Checklist Summary

### Critical (Must Fix Before Deploy)

- [ ] No broken links
- [ ] No 404 errors
- [ ] No JavaScript console errors
- [ ] All placeholder content removed
- [ ] All pages load correctly
- [ ] Mobile menu works
- [ ] Navigation works on all pages
- [ ] Images all load
- [ ] Resume PDF works
- [ ] No typos in visible text

### Important (Should Fix Before Deploy)

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Accessibility score ≥ 90
- [ ] Works on mobile (< 768px)
- [ ] Works on tablet (768-1024px)
- [ ] Works on desktop (> 1024px)
- [ ] Works in Chrome, Firefox, Safari
- [ ] Proofreading complete
- [ ] Images optimized

### Nice to Have (Can Fix After Deploy)

- [ ] Performance score ≥ 90
- [ ] All Lighthouse checks pass
- [ ] Custom domain set up
- [ ] SEO fully optimized
- [ ] Analytics installed
- [ ] Perfect 100 accessibility score

---

## Common Issues and Fixes

### Issue: "My images won't load"

**Possible causes:**

1. Wrong file path
2. File not in `public/` folder
3. Typo in filename
4. File extension wrong (.jpg vs .JPG)

**How to fix:**

- Check image path in data file
- Verify file exists in `public/`
- Check Console for 404 error
- Match filename exactly (case-sensitive)

### Issue: "Mobile menu doesn't work"

**Check:**

- JavaScript enabled in browser?
- Any console errors?
- Button clickable (z-index issue)?
- State updating correctly?

**Debug:**

- Add `console.log` in click handler
- Check if menu component imports correctly
- Verify state management

### Issue: "Page doesn't load on refresh"

**Cause:** React Router needs configuration for production

**Will fix:** In deployment setup (Netlify `_redirects` or Vercel `vercel.json`)

### Issue: "Text is too small on mobile"

**Fix:** Increase mobile font sizes

```jsx
{/* Before: */}
<h1 className="text-4xl">

{/* After: */}
<h1 className="text-3xl md:text-4xl">
```

### Issue: "Performance score is low"

**Common fixes:**

1. Compress images
2. Limit Google Fonts to 2-3 weights
3. Remove unused CSS/JS
4. Enable production build optimizations

---

## Getting Help

### If You're Stuck

**Ask yourself:**

1. What exactly is broken?
2. What error message do I see?
3. What did I change recently?
4. Can I undo that change?

**Debug strategies:**

1. Check browser console
2. Check Network tab
3. Undo recent changes
4. Google the error message
5. Ask instructor or classmate

### Documentation Resources

- [React Router Docs](https://reactrouter.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Vite Docs](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [WebAIM Accessibility Resources](https://webaim.org/resources/)

---

## Next Steps

✅ **Testing complete!**

**Now you can:**

1. Fix any issues you found during testing
2. Re-test fixed issues
3. Move to [CLASS_12_DEPLOYMENT.md](./CLASS_12_DEPLOYMENT.md) to deploy your portfolio
4. Celebrate - you're almost done! 🎉

**Remember:** Testing is iterative. You'll likely find more issues after deployment, and that's okay. Fix them, redeploy, and keep improving.

---

**Excellent work!** You've thoroughly tested your portfolio. Time to share it with the world! 🚀
