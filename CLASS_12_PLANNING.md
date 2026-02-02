# Class 12 Planning: Customization Lab & Final Polish

**Last Updated:** February 1, 2026

---

## Overview

Class 12 is the **final class** in the portfolio website course. Unlike previous classes where students built specific components, this class is a **hands-on workshop** where students transform the placeholder portfolio into their own personal brand. Students will replace all sample content with their real information, customize the design, thoroughly test their site, and deploy it to the web.

### What Students Will Do

This is a **lab/workshop session** with four main areas of focus:

1. **Content Replacement** (40-50 min)
   - Update all data files with personal information
   - Add personal resume PDF
   - Add project images and screenshots
   - Write compelling copy for bio, projects, and testimonials

2. **Style Customization** (15-20 min)
   - Customize color scheme
   - Adjust typography and spacing
   - Add personal branding touches
   - Make the portfolio uniquely theirs

3. **Testing & Quality Assurance** (10-15 min)
   - Test all pages and navigation
   - Mobile/responsive testing
   - Cross-browser compatibility
   - Accessibility verification
   - Performance check

4. **Deployment** (15-20 min)
   - Choose deployment platform (Netlify, Vercel, or GitHub Pages)
   - Deploy portfolio to production
   - Set up custom domain (optional)
   - Verify live site works

### Key Learning Outcomes

By the end of this class, students will:

- **Replace all placeholder content** with their own professional information
- **Customize the design** to reflect their personal brand
- **Test thoroughly** across devices and browsers
- **Deploy their portfolio** to a live URL
- **Share their work** with the world (and potential employers!)
- Understand **content strategy** for portfolios
- Learn **deployment workflows** for React apps
- Practice **Git-based deployment** patterns
- Understand **portfolio best practices**

---

## Pedagogical Approach

### Why a Lab/Workshop Format?

Classes 1-11 were **instructor-led** with step-by-step guides. Class 12 is **student-driven** with instructor support because:

1. **Personalization**: Each student's content is unique
2. **Decision-making**: Students choose their own colors, images, content
3. **Real-world practice**: Mimics actual client work or personal projects
4. **Autonomy**: Students work at their own pace on different priorities
5. **Problem-solving**: Encourages students to figure things out independently

### Teaching Strategy

**Instructor's role:**

- Provide structure (checklists, guides, examples)
- Circulate and help students individually
- Answer questions as they arise
- Show quick demos (deployment, troubleshooting)
- Review student portfolios and provide feedback

**Student's role:**

- Work through customization checklist
- Make decisions about content and design
- Ask for help when stuck
- Test thoroughly
- Deploy their portfolio

### Class Structure

**Introduction (5 min):**

- Overview of class objectives
- Explain workshop format
- Show example of customized portfolio
- Outline expectations for end of class

**Workshop Time (70-75 min):**

- Students work through guides at their own pace
- Instructor circulates and provides individual help
- Quick mini-demos as needed (deployment, Git, etc.)

**Wrap-up (10 min):**

- Students share their deployed portfolios
- Quick showcase of 3-4 student sites
- Discussion of next steps (job applications, continued learning)
- Celebrate completion!

---

## Content Replacement Guide

Students should work through these in order, updating each data file with their own information.

### 1. Tech Stack (`data/techstack.js`)

**Time: 5-10 minutes**

**What to update:**

- Replace placeholder technologies with skills they actually have
- Add/remove items as needed
- Use real logos/icons

**Guidance:**

- **Be honest**: Only include technologies you're comfortable discussing
- **Organize logically**: Group related skills (Frontend, Backend, Tools)
- **Prioritize**: Put strongest skills first
- **Stay relevant**: Include technologies employers in your field use

### 2. Projects (`data/projects.js`)

**Time: 20-25 minutes**

**What to update:**

- Replace 3-4 placeholder projects with real projects
- Write compelling titles and descriptions
- Add detailed case study information (overview, highlights, role, tools, timeline)
- Update slugs for URLs
- Add real project images

**Guidance:**

- **Quality over quantity**: 3-4 strong projects better than 6 weak ones
- **Show problem-solving**: Explain challenges and solutions
- **Include details**: Technologies used, your role, timeline
- **Use good images**: Screenshots, mockups, or final designs
- **Proofread**: Check for typos and clarity

### 3. About Page (`data/about.js`)

**Time: 15-20 minutes**

**What to update:**

- Write personal bio (intro, background, current, personal)
- Define 4 core values/principles
- List work experience (jobs, freelance, internships)
- Add education and certifications
- Include personal interests
- Customize call-to-action

**Guidance:**

- **Be authentic**: Write in your own voice
- **Tell a story**: Connect your background to current goals
- **Be specific**: Concrete examples better than vague statements
- **Proofread carefully**: This is your professional introduction
- **Balance professional/personal**: Show you're human, not just a resume

### 4. Testimonials (`data/testimonials.js`)

**Time: 5-10 minutes**

**What to update:**

- Replace with real testimonials (if available)
- OR remove the testimonials section entirely
- Update names, roles, companies

**Guidance:**

- **Real testimonials only**: Don't fake these
- **Ask permission**: Ensure people are okay being quoted
- **Recent is better**: Testimonials from last 1-2 years
- **If you don't have testimonials**: Remove section or add later
- **Alternative**: Consider recommendations from LinkedIn

### 5. Resume

**Time: 5 minutes**

**What to update:**

- Add your actual resume PDF to `public/` folder
- Name it clearly (e.g., `your_name_resume.pdf`)
- Update references in Resume.jsx if needed

**Guidance:**

- **Keep it current**: Match your portfolio content
- **Professional formatting**: Clean, readable design
- **PDF format**: Ensures consistent display across devices
- **File size**: Keep under 1MB for fast loading

### 6. Images and Assets

**Time: 5-10 minutes**

**What to update:**

- Add project screenshots/images
- Add interest images (or use Unsplash URLs)
- Update logo/branding elements
- Add favicon (optional)

**Guidance:**

- **Optimize images**: Compress before uploading
- **Consistent style**: Similar editing/filter style across images
- **High quality**: No blurry or pixelated images
- **Appropriate size**: 1920px wide maximum for full-width images
- **File naming**: Use descriptive names (`project-ecommerce-hero.jpg`)

---

## Style Customization Guide

Students can customize the visual design to match their personal brand.

### 1. Color Scheme

**File:** `src/index.css`

**What to customize:**

- Background colors
- Text colors
- Accent colors
- Button colors

**Example customizations:**

```css
/* Change primary color (currently white) */
/* Find and update these patterns: */
bg-white → bg-blue-500
text-white → text-blue-500
border-white → border-blue-500

/* Change background (currently black) */
bg-black → bg-gray-900
bg-black → bg-slate-950

/* Update in index.css custom properties */
:root {
  --color-primary: #3b82f6; /* Blue instead of white */
  --color-background: #0f172a; /* Slate instead of black */
}
```

**Tools:**

- [Coolors](https://coolors.co/) - Color scheme generator
- [Adobe Color](https://color.adobe.com/) - Color wheel and palette creator
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors) - Reference

### 2. Typography

**What to customize:**

- Font families
- Font sizes
- Line heights
- Letter spacing

**Example customizations:**

```css
/* In index.css */

/* Change font family */
body {
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  /* or */
  font-family: "Poppins", sans-serif;
  /* or */
  font-family: "Roboto", sans-serif;
}

/* Adjust heading sizes */
.heading-page {
  font-size: 3.5rem; /* Larger */
  letter-spacing: -0.02em; /* Tighter */
}
```

**Google Fonts:**

1. Go to [fonts.google.com](https://fonts.google.com/)
2. Choose 1-2 fonts (one for headings, one for body)
3. Add to `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
```

4. Update CSS to use the font

### 3. Spacing and Layout

**What to customize:**

- Container max-width
- Section padding
- Card spacing
- Grid gaps

**Example customizations:**

```jsx
{/* Wider containers */}
<Container className="max-w-7xl"> {/* instead of max-w-6xl */}

{/* More/less vertical spacing */}
<Section className="py-24"> {/* instead of default spacing */}

{/* Tighter/wider grid gaps */}
<div className="grid gap-8"> {/* instead of gap-6 */}
```

### 4. Personal Branding

**What to add:**

- Personal logo (replace placeholder in Navbar/Footer)
- Favicon (browser tab icon)
- Custom illustrations or graphics
- Signature color combinations
- Unique component styling

**Logo replacement:**

In `Navbar.jsx` and `MobileMenu.jsx`, replace:

```jsx
<span className="inline-block h-6 w-6 rounded bg-white/80" aria-hidden />
```

With your logo:

```jsx
<img src="/logo.svg" alt="" className="h-6 w-6" />
```

**Favicon:**

1. Create 32x32 and 16x16 PNG icons
2. Add to `public/` folder
3. Update `index.html`:

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
```

---

## Testing & QA Checklist

Before deploying, students should thoroughly test their portfolio.

### Functionality Testing

**Navigation:**

- [ ] All nav links work (Navbar and Footer)
- [ ] Logo/brand links to home
- [ ] Active page is highlighted
- [ ] Mobile menu opens and closes
- [ ] Mobile menu links work

**Pages:**

- [ ] Home page loads and displays correctly
- [ ] About page shows all sections
- [ ] Portfolio page shows all projects
- [ ] Individual project pages load (test each slug)
- [ ] Resume page shows PDF
- [ ] Contact page form displays

**Interactive Elements:**

- [ ] All buttons work
- [ ] All links navigate correctly
- [ ] Hover effects work
- [ ] Project cards link to detail pages
- [ ] Contact form inputs work (even if not submitted)

### Content Review

**Proofread all text:**

- [ ] No placeholder text remains ("Joe Anonymous", "Lorem ipsum")
- [ ] No typos or grammar errors
- [ ] Consistent tone and voice
- [ ] Professional language throughout
- [ ] Dates and timelines are accurate

**Images:**

- [ ] All images load
- [ ] No broken image links
- [ ] Images are appropriate resolution
- [ ] Images are optimized (not too large)
- [ ] Alt text is descriptive or empty for decorative

**Links:**

- [ ] External links open in new tab (if desired)
- [ ] No broken links (404 errors)
- [ ] Resume PDF link works
- [ ] Project image links work

### Responsive Testing

**Desktop (≥1024px):**

- [ ] Layout looks balanced
- [ ] Text is readable
- [ ] Images display well
- [ ] Grid columns work (2-4 columns)

**Tablet (768-1023px):**

- [ ] Layout adapts appropriately
- [ ] Nav switches to mobile menu if needed
- [ ] Grid reduces to 2-3 columns
- [ ] Touch targets are large enough

**Mobile (<768px):**

- [ ] Mobile menu works
- [ ] Content is readable (no horizontal scroll)
- [ ] Images scale appropriately
- [ ] Grid reduces to 1 column
- [ ] Buttons are easily tappable

**Test on actual devices:**

- [ ] iPhone/Android phone
- [ ] iPad/tablet
- [ ] Different screen sizes

### Cross-Browser Testing

Test in multiple browsers:

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)

**Check for:**

- Consistent layout
- Fonts display correctly
- Colors match
- Animations work
- No console errors

### Accessibility Verification

- [ ] Lighthouse accessibility score ≥90
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Images have alt text
- [ ] Headings in correct order
- [ ] Color contrast passes WCAG AA

### Performance Check

- [ ] Lighthouse performance score ≥80
- [ ] Images are compressed
- [ ] No excessive re-renders
- [ ] Fast initial load (< 3 seconds)

---

## Deployment Guide

Students can choose from three popular deployment platforms.

### Option 1: Netlify (Recommended)

**Why Netlify:**

- Free tier is generous
- Dead simple deployment from Git
- Automatic builds on push
- Custom domains easy to set up
- Great for beginners

**Deployment Steps:**

1. **Prepare Git Repository:**

   ```bash
   git add .
   git commit -m "Final portfolio ready for deployment"
   git push origin main
   ```

2. **Sign up for Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub account

3. **Create New Site:**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your portfolio repository
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

4. **Wait for Build:**
   - Netlify builds your site (1-2 minutes)
   - You'll get a random URL: `random-name-123456.netlify.app`

5. **Test Live Site:**
   - Visit the URL
   - Test all pages and navigation
   - Verify everything works

6. **Custom Domain (Optional):**
   - Click "Domain settings"
   - Click "Add custom domain"
   - Follow instructions to connect your domain

**Automatic Deployments:**

- Every push to `main` branch triggers new deployment
- Changes go live automatically
- No manual deployment needed

### Option 2: Vercel

**Why Vercel:**

- Fast global CDN
- Zero-config for Vite projects
- Excellent performance
- Free tier available

**Deployment Steps:**

1. **Prepare Git Repository:**

   ```bash
   git add .
   git commit -m "Final portfolio ready for deployment"
   git push origin main
   ```

2. **Sign up for Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub account

3. **Import Project:**
   - Click "Add New" → "Project"
   - Select your portfolio repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

4. **Wait for Build:**
   - Vercel builds your site (1-2 minutes)
   - You'll get a URL: `your-repo.vercel.app`

5. **Test Live Site:**
   - Visit the URL
   - Test all pages and navigation
   - Verify everything works

6. **Custom Domain (Optional):**
   - Go to project settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 3: GitHub Pages

**Why GitHub Pages:**

- Free hosting on GitHub
- Good for simple sites
- No third-party service needed

**Deployment Steps:**

1. **Install gh-pages Package:**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**

   ```json
   {
     "homepage": "https://your-username.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js:**

   ```js
   export default defineConfig({
     base: "/your-repo-name/", // Add this line
     plugins: [react()],
   });
   ```

4. **Deploy:**

   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to GitHub repository → Settings → Pages
   - Source: `gh-pages` branch
   - Save

6. **Wait for Deployment:**
   - Takes 2-5 minutes
   - Visit `https://your-username.github.io/your-repo-name`

**Note:** GitHub Pages is more manual (must run `npm run deploy` each time).

---

## Deployment Troubleshooting

### Common Issues

**Issue: 404 on all routes except home**

**Solution:** Configure redirects for client-side routing.

**Netlify:** Create `public/_redirects`:

```
/*    /index.html   200
```

**Vercel:** Create `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Issue: Images not loading**

**Solution:** Check image paths.

- Use `/image.jpg` for images in `public/`
- Use relative imports for images in `src/`
- Verify images are committed to Git

**Issue: Environment variables not working**

**Solution:** Prefix with `VITE_`:

```
VITE_API_KEY=your-key
```

Access with `import.meta.env.VITE_API_KEY`

**Issue: Build fails**

**Solution:** Check build logs for errors.

- Fix any TypeScript/ESLint errors
- Ensure all dependencies are in package.json
- Test build locally: `npm run build`

---

## Portfolio Best Practices

### Content Strategy

**Do:**

- ✅ Show your best 3-4 projects (quality over quantity)
- ✅ Explain your role and contributions clearly
- ✅ Use concrete examples and metrics
- ✅ Proofread everything multiple times
- ✅ Keep it current (update regularly)

**Don't:**

- ❌ Include every project you've ever done
- ❌ Use generic descriptions ("Made a website")
- ❌ Leave placeholder content
- ❌ Use fake testimonials
- ❌ Let it get stale (update quarterly)

### Design Principles

**Do:**

- ✅ Keep it simple and clean
- ✅ Use consistent spacing and colors
- ✅ Make it easy to navigate
- ✅ Ensure mobile-friendly
- ✅ Fast loading times

**Don't:**

- ❌ Over-design (simplicity is better)
- ❌ Use too many colors/fonts
- ❌ Make users hunt for information
- ❌ Sacrifice usability for aesthetics
- ❌ Ignore performance

### Professional Tips

1. **Tell a story**: Connect your background to your goals
2. **Show personality**: Let your voice come through
3. **Demonstrate skills**: Portfolio should showcase your abilities
4. **Make it easy to contact**: Prominent contact button/info
5. **Include next steps**: Clear calls-to-action
6. **Keep it updated**: Refresh content every 3-6 months
7. **Get feedback**: Ask peers/mentors to review
8. **Test thoroughly**: No broken links or errors

---

## Post-Deployment Checklist

After deploying, verify everything works in production:

### Production Testing

- [ ] Visit live URL and bookmark it
- [ ] Test all pages load correctly
- [ ] Test all navigation works
- [ ] Test mobile menu works
- [ ] Test project detail pages load
- [ ] Test resume PDF opens
- [ ] Check images load
- [ ] Check no console errors
- [ ] Test on mobile device
- [ ] Test in different browsers

### SEO & Sharing

- [ ] Test Open Graph tags (share on social media, check preview)
- [ ] Test page titles (check browser tabs)
- [ ] Submit to Google Search Console (optional)
- [ ] Create LinkedIn post with link
- [ ] Add to resume
- [ ] Add to email signature

### Monitoring & Maintenance

- [ ] Set up analytics (Google Analytics, Plausible) - optional
- [ ] Set up error monitoring (Sentry) - optional
- [ ] Plan for regular updates (quarterly)
- [ ] Document deployment process for yourself

---

## Sharing Your Portfolio

### Where to Share

**Professional Networks:**

- LinkedIn (post + profile)
- GitHub profile README
- Resume/CV
- Email signature
- Cover letters

**Job Applications:**

- Include in applications
- Reference specific projects
- Send to recruiters

**Community:**

- Dev.to articles
- Twitter/X
- Reddit (r/webdev)
- Discord communities

### How to Present

**In applications:**

```
Portfolio: https://yourname.com
View my [Project Name] case study to see my React skills in action.
```

**On LinkedIn:**

```
Excited to share my new portfolio! Built with React, Tailwind CSS,
and deployed on Netlify. Check it out: https://yourname.com

#WebDev #React #Portfolio
```

**In interviews:**

```
"I'd love to walk you through my portfolio. This project showcases..."
(Share screen and discuss specific projects)
```

---

## Next Steps After Class 12

### Immediate (This Week)

1. **Share your portfolio** on LinkedIn and with friends/family
2. **Get feedback** from peers, mentors, or online communities
3. **Make refinements** based on feedback
4. **Update resume** to include portfolio link

### Short-term (This Month)

1. **Add to job applications** - include portfolio link prominently
2. **Continue learning** - add new projects as you build them
3. **Network** - share portfolio when meeting professionals
4. **Blog** (optional) - write about your projects or learning journey

### Long-term (Ongoing)

1. **Keep it current** - update every 3-6 months
2. **Add projects** - showcase new work as you create it
3. **Refine content** - improve descriptions and case studies
4. **Monitor performance** - check analytics, fix issues
5. **Evolve design** - refresh styling as trends change

---

## Class 12 Workshop Checklist

Students should work through this checklist during class:

### Content (Priority 1 - Must Do)

- [ ] Update `data/techstack.js` with real skills
- [ ] Update `data/projects.js` with real projects
- [ ] Update `data/about.js` with personal bio and experience
- [ ] Add resume PDF to `public/` folder
- [ ] Update or remove `data/testimonials.js`
- [ ] Replace all "Joe Anonymous" with your name

### Styling (Priority 2 - Should Do)

- [ ] Choose and apply color scheme
- [ ] Update fonts if desired
- [ ] Add personal logo or branding
- [ ] Customize spacing/layout if desired

### Testing (Priority 3 - Must Do)

- [ ] Test all pages and links
- [ ] Test on mobile device
- [ ] Run Lighthouse audit
- [ ] Fix any errors or broken links

### Deployment (Priority 4 - Must Do)

- [ ] Choose deployment platform
- [ ] Deploy to production
- [ ] Test live site
- [ ] Share URL with instructor

### Polish (Priority 5 - If Time)

- [ ] Add custom domain
- [ ] Optimize images further
- [ ] Add favicon
- [ ] Set up analytics

---

## Instructor Notes

### How to Run This Class

**Before class:**

- Have example portfolios ready to show
- Test deployment on all three platforms
- Prepare troubleshooting tips
- Have Git cheat sheet ready

**During class:**

- Brief intro (5 min) explaining workshop format
- Students work independently with guides
- Circulate and help individually
- Do quick mini-demos as needed
- Check in with each student on progress

**Common student questions:**

- "How do I write a good project description?"
- "What colors should I use?"
- "My deployment failed, what do I do?"
- "How many projects should I include?"

**Mini-demos to prepare:**

- Quick Netlify deployment walkthrough
- How to find and fix deployment errors
- Color scheme selection tips
- Writing compelling project descriptions

**End of class:**

- Have 3-4 students share their deployed portfolios
- Celebrate completion!
- Collect portfolio URLs
- Provide next steps

### Grading/Assessment (If Applicable)

**Portfolio checklist:**

- [ ] All placeholder content replaced
- [ ] No broken links or errors
- [ ] Mobile-responsive
- [ ] Deployed and accessible
- [ ] Professional content quality

**Bonus points:**

- Custom domain
- Unique styling/branding
- Excellent project case studies
- Accessibility score 100

---

## Key Takeaways

1. **Personalization**: Portfolio reflects your unique skills and personality

2. **Content Quality**: Well-written, proofread content makes huge difference

3. **Testing**: Thorough testing prevents embarrassing bugs in production

4. **Deployment**: Multiple options available, all relatively simple

5. **Maintenance**: Portfolios need regular updates to stay relevant

6. **Professional Tool**: Portfolio is key asset for job search

7. **Continuous Improvement**: Can always refine and enhance

8. **Show Your Work**: Sharing helps you get noticed

**Congratulations on completing the course!** You now have a professional, production-ready portfolio website that showcases your skills. 🎉

This is just the beginning—keep building, keep learning, and keep updating your portfolio as you grow!
