# Class 12: Deployment Guide

**Workshop Component 4 of 4**
**Estimated Time:** 15-20 minutes

---

## Overview

This guide walks you through deploying your portfolio to the web. You'll choose a deployment platform (Netlify, Vercel, or GitHub Pages), deploy your site, and get a live URL to share with the world.

> **🎉 Final Step!** After this, you'll have a live portfolio website accessible to anyone with the link. Perfect for job applications, LinkedIn, and your resume!

---

## Before You Deploy

### 1. Commit All Changes to Git

**Make sure all your work is saved:**

```bash
# Check status
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Final portfolio ready for deployment"

# Push to GitHub
git push origin main
```

**Verify on GitHub:**

- Go to your repository on GitHub.com
- Confirm latest changes are there
- Check that all files are committed

### 2. Test Production Build Locally

**Build and preview:**

```bash
# Build the project
npm run build

# Preview the built site
npm run preview
```

**Visit preview URL** (usually `http://localhost:4173`)

**Verify:**

- [ ] All pages load
- [ ] No errors in console
- [ ] Images display correctly
- [ ] Navigation works
- [ ] Performance is good

**If build fails:**

- Check for errors in terminal
- Fix any TypeScript/ESLint errors
- Ensure all dependencies are installed
- Try again

---

## Choose Your Deployment Platform

### Quick Comparison

| Feature           | Netlify   | Vercel     | GitHub Pages |
| ----------------- | --------- | ---------- | ------------ |
| **Difficulty**    | Easy      | Easy       | Medium       |
| **Free Tier**     | Generous  | Generous   | Limited      |
| **Auto Deploy**   | ✅ Yes    | ✅ Yes     | ❌ Manual    |
| **Custom Domain** | ✅ Easy   | ✅ Easy    | ✅ Medium    |
| **Build Time**    | Fast      | Fast       | Slower       |
| **Best For**      | Beginners | React apps | Simple sites |

**Recommendation:** **Netlify** or **Vercel** (both excellent, choose either)

---

## Option 1: Deploy to Netlify (Recommended)

**Why Netlify:**

- Extremely beginner-friendly
- Free tier is generous
- Automatic deployments on Git push
- Easy custom domain setup
- Great documentation

### Step-by-Step Deployment

#### 1. Sign Up for Netlify

1. **Go to** [netlify.com](https://www.netlify.com/)
2. **Click** "Sign up"
3. **Choose** "Sign up with GitHub"
4. **Authorize** Netlify to access your GitHub account

#### 2. Create New Site

1. **Click** "Add new site" button (top right)
2. **Select** "Import an existing project"
3. **Choose** "Deploy with GitHub"
4. **Authorize** Netlify (if prompted)
5. **Select** your portfolio repository from the list

#### 3. Configure Build Settings

**Netlify should auto-detect Vite settings:**

- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

**If settings are empty, enter them manually.**

**Click** "Deploy site"

#### 4. Wait for Deployment

**Netlify will:**

1. Clone your repository
2. Install dependencies (`npm install`)
3. Build your project (`npm run build`)
4. Deploy to CDN

**This takes 1-3 minutes.**

**Watch the deploy log:**

- Scroll through to see progress
- Green checkmark = success!
- Red X = error (see logs for details)

#### 5. Get Your Live URL

**Once deployed:**

- You'll see a random URL: `random-name-123456.netlify.app`
- **Click the URL** to visit your live site!

**Test your live site:**

- [ ] Navigate through all pages
- [ ] Test navigation and links
- [ ] Check images load
- [ ] Test on mobile device
- [ ] Verify everything works

#### 6. (Optional) Customize Your URL

**Change the random subdomain:**

1. **Click** "Site settings"
2. **Click** "Change site name"
3. **Enter** new name: `yourname-portfolio`
4. **Save**

**New URL:** `yourname-portfolio.netlify.app`

#### 7. (Optional) Add Custom Domain

**If you own a domain (e.g., `yourname.com`):**

1. **Click** "Domain settings"
2. **Click** "Add custom domain"
3. **Enter** your domain name
4. **Follow DNS setup instructions**

**Netlify provides:**

- Free SSL certificate (HTTPS)
- Automatic DNS configuration
- Step-by-step guidance

### Enable Automatic Deployments

**Already done!** Netlify watches your GitHub repository.

**Every time you push to `main` branch:**

- Netlify automatically rebuilds your site
- Changes go live in 1-3 minutes
- No manual deployment needed

**Test it:**

```bash
# Make a small change
echo "<!-- Updated -->" >> README.md

# Commit and push
git add README.md
git commit -m "Test auto deploy"
git push origin main

# Watch Netlify dashboard for new deployment
```

### Fix Client-Side Routing

**If you get 404 errors when refreshing pages:**

1. **Create** `public/_redirects` file:

   ```bash
   touch public/_redirects
   ```

2. **Add this line:**

   ```
   /*    /index.html   200
   ```

3. **Commit and push:**

   ```bash
   git add public/_redirects
   git commit -m "Fix client-side routing"
   git push origin main
   ```

4. **Wait for redeploy** (1-2 minutes)

**Now all routes work correctly!**

---

## Option 2: Deploy to Vercel

**Why Vercel:**

- Created by Next.js team (React experts)
- Blazing fast global CDN
- Zero-config for Vite projects
- Great for React applications

### Step-by-Step Deployment

#### 1. Sign Up for Vercel

1. **Go to** [vercel.com](https://vercel.com/)
2. **Click** "Sign Up"
3. **Choose** "Continue with GitHub"
4. **Authorize** Vercel to access your GitHub account

#### 2. Import Project

1. **Click** "Add New..." → "Project"
2. **Find** your portfolio repository in the list
3. **Click** "Import"

#### 3. Configure Project

**Vercel auto-detects Vite:**

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

**Settings should be pre-filled. If not, enter manually.**

**Click** "Deploy"

#### 4. Wait for Deployment

**Vercel will:**

1. Clone your repository
2. Install dependencies
3. Build your project
4. Deploy to edge network

**This takes 1-3 minutes.**

**Watch the build logs** for progress.

#### 5. Get Your Live URL

**Once deployed:**

- You'll see a URL: `your-repo.vercel.app`
- **Click** "Visit" to see your live site!

**Test your live site:**

- [ ] Navigate through all pages
- [ ] Test all functionality
- [ ] Check mobile responsiveness
- [ ] Verify images load

#### 6. (Optional) Add Custom Domain

**If you own a domain:**

1. **Go to** Project Settings → Domains
2. **Click** "Add"
3. **Enter** your domain name
4. **Follow** DNS configuration steps

**Vercel provides:**

- Free SSL certificate
- Automatic HTTPS
- DNS instructions

### Enable Automatic Deployments

**Already enabled!** Vercel watches your Git repository.

**Every push to `main` triggers:**

- Automatic rebuild
- New deployment
- Changes live in 1-3 minutes

### Fix Client-Side Routing

**Create** `vercel.json` in project root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Commit and push:**

```bash
git add vercel.json
git commit -m "Add vercel.json for routing"
git push origin main
```

**Vercel will redeploy automatically.**

---

## Option 3: Deploy to GitHub Pages

**Why GitHub Pages:**

- Free hosting directly from GitHub
- No third-party service needed
- Good for simple sites

**Note:** More manual than Netlify/Vercel. Must run deploy command each time.

### Step-by-Step Deployment

#### 1. Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

#### 2. Update package.json

**Add homepage and scripts:**

```json
{
  "name": "your-portfolio",
  "homepage": "https://your-username.github.io/your-repo-name",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**Replace:**

- `your-username` with your GitHub username
- `your-repo-name` with your repository name

#### 3. Update vite.config.js

**Add base path:**

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/your-repo-name/", // Add this line
  plugins: [react()],
});
```

**Replace `your-repo-name` with your actual repository name.**

#### 4. Commit Changes

```bash
git add package.json vite.config.js package-lock.json
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

#### 5. Deploy

```bash
npm run deploy
```

**This will:**

1. Build your project (`npm run build`)
2. Push to `gh-pages` branch
3. Deploy to GitHub Pages

**Wait 2-5 minutes for deployment.**

#### 6. Enable GitHub Pages

1. **Go to** your repository on GitHub.com
2. **Click** Settings → Pages (left sidebar)
3. **Source:** Select `gh-pages` branch
4. **Click** Save

**Wait a few minutes, then visit:**
`https://your-username.github.io/your-repo-name`

### Update Deployment

**Every time you make changes:**

```bash
# Make changes, then:
git add .
git commit -m "Update content"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

**Not automatic** - must run `npm run deploy` manually each time.

---

## Post-Deployment Checklist

### Verify Live Site

**Visit your live URL and test:**

- [ ] All pages load correctly
- [ ] Navigation works (including direct URLs)
- [ ] Images display
- [ ] Resume PDF opens
- [ ] Links work (internal and external)
- [ ] Mobile menu works
- [ ] No console errors
- [ ] Test on mobile device
- [ ] Test in different browsers

### Update Your Information

**Add portfolio URL to:**

- [ ] **GitHub profile** - Add to bio and pin repository
- [ ] **LinkedIn** - Add to profile and about section
- [ ] **Resume** - Include in contact section
- [ ] **Email signature** - Add link
- [ ] **Business cards** (if applicable)

### Share Your Portfolio

**Post on social media:**

```
Excited to share my new portfolio! 🎉

Built with React, Tailwind CSS, and deployed on Netlify.

Check it out: https://yourname.netlify.app

#WebDev #React #Portfolio #100DaysOfCode
```

**LinkedIn post idea:**

```
I'm thrilled to announce the launch of my new portfolio website!

After weeks of learning React and modern web development,
I've built a fully responsive portfolio showcasing my projects
and skills.

Take a look: https://yourname.netlify.app

Built with:
- React & Vite
- Tailwind CSS
- React Router
- Deployed on Netlify

Feedback welcome! #WebDevelopment #React #CareerDevelopment
```

---

## Common Deployment Issues

### Issue: Build Fails

**Error in terminal:**

```
Failed to compile
```

**Solutions:**

1. Check error message for details
2. Fix TypeScript/ESLint errors locally
3. Test `npm run build` locally first
4. Ensure all dependencies in `package.json`
5. Check Node version compatibility

### Issue: 404 on All Routes Except Home

**Cause:** Client-side routing not configured

**Solutions:**

**Netlify:** Add `public/_redirects`:

```
/*    /index.html   200
```

**Vercel:** Add `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**GitHub Pages:** May need hash router instead:

```javascript
// In main.jsx, replace BrowserRouter with HashRouter
import { HashRouter } from "react-router-dom";
```

### Issue: Images Not Loading

**Cause:** Incorrect image paths

**Solutions:**

1. Ensure images are in `public/` folder
2. Use paths like `/image.jpg` (leading slash)
3. Check image names (case-sensitive)
4. Verify images are committed to Git
5. Check browser Network tab for 404s

### Issue: Resume PDF Won't Open

**Cause:** File path or CORS issue

**Solutions:**

1. Verify PDF is in `public/` folder
2. Check filename matches code
3. Ensure file is committed to Git
4. Test PDF URL directly in browser

### Issue: Site Loads Slowly

**Cause:** Large unoptimized assets

**Solutions:**

1. Compress images (TinyPNG)
2. Reduce image dimensions
3. Limit Google Fonts to 2-3 weights
4. Run Lighthouse audit
5. Check Network tab for large files

### Issue: Environment Variables Not Working

**Cause:** Vite requires `VITE_` prefix

**Solution:**

```bash
# .env.local
VITE_API_KEY=your-key-here
```

```javascript
// In code
const apiKey = import.meta.env.VITE_API_KEY;
```

**Deploy platforms:**

- Netlify: Site settings → Environment variables
- Vercel: Project settings → Environment Variables
- GitHub Pages: Not supported (use public config)

---

## Performance Optimization

### After Deployment

**Run Lighthouse on live site:**

1. **Open** your live URL
2. **Open** DevTools (F12)
3. **Go to** Lighthouse tab
4. **Run audit**

**Target scores:**

- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 90+

### Common Optimizations

**If performance < 90:**

1. **Compress images:**
   - Use [TinyPNG](https://tinypng.com/)
   - Resize to appropriate dimensions
   - Convert to WebP format

2. **Optimize fonts:**
   - Limit to 2-3 font weights
   - Use `font-display: swap`

3. **Enable caching:**
   - Netlify/Vercel do this automatically
   - GitHub Pages may need configuration

4. **Minimize JavaScript:**
   - Already done by Vite build
   - Remove unused dependencies

---

## Custom Domain Setup (Optional)

### Buying a Domain

**Popular registrars:**

- [Namecheap](https://www.namecheap.com/) - $8-15/year
- [Google Domains](https://domains.google/) - $12/year
- [Cloudflare](https://www.cloudflare.com/products/registrar/) - At-cost pricing

**Good domain options:**

- `yourname.com`
- `yournameweb.dev`
- `yourname.dev`
- `yourname.io`

### Connecting to Netlify

1. **In Netlify:** Domain settings → Add custom domain
2. **Enter** your domain name
3. **Choose** Netlify DNS or external DNS
4. **Follow** setup instructions

**Netlify provides:**

- Free SSL certificate
- Automatic DNS configuration
- HTTPS by default

### Connecting to Vercel

1. **In Vercel:** Project settings → Domains
2. **Click** Add
3. **Enter** your domain
4. **Update** DNS records at registrar

**Vercel provides:**

- Free SSL
- Automatic renewal
- Edge network

### Connecting to GitHub Pages

1. **In repo settings:** Pages → Custom domain
2. **Enter** your domain
3. **Add** CNAME record at registrar:
   ```
   CNAME: your-username.github.io
   ```
4. **Enable** "Enforce HTTPS"

---

## Monitoring and Maintenance

### Set Up Analytics (Optional)

**Free options:**

**1. Google Analytics:**

- Most popular, feature-rich
- [analytics.google.com](https://analytics.google.com/)

**2. Plausible:**

- Privacy-friendly, simple
- [plausible.io](https://plausible.io/)

**3. Netlify Analytics:**

- Built-in, server-side
- $9/month

**To add Google Analytics:**

1. **Create** Google Analytics account
2. **Get** tracking ID
3. **Add** to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag() {
       dataLayer.push(arguments);
     }
     gtag("js", new Date());
     gtag("config", "G-XXXXXXXXXX");
   </script>
   ```

### Regular Updates

**Plan to update your portfolio:**

**Quarterly (every 3 months):**

- [ ] Add new projects
- [ ] Update experience/education
- [ ] Refresh tech stack
- [ ] Check for broken links
- [ ] Update resume PDF

**After major milestones:**

- New job/role
- Completed significant project
- New certification
- Technology skill gained

### Backup Your Work

**Your portfolio is backed up in:**

- GitHub repository (code)
- Deployment platform (live site)

**Additional backups:**

- Clone repo to external drive
- Export important content
- Save project images separately

---

## Next Steps After Deployment

### Immediate (This Week)

1. **Share your portfolio** with friends, family, mentors
2. **Post on LinkedIn** with project details
3. **Update resume** with portfolio link
4. **Test on different devices** you have access to
5. **Get feedback** from peers or online communities

### Short-Term (This Month)

1. **Use in job applications** - prominently feature your URL
2. **Network** - share when meeting professionals
3. **Refine based on feedback** - iterate on design/content
4. **Add to business cards/email signature**
5. **Consider blogging** - add blog section (future enhancement)

### Long-Term (Ongoing)

1. **Keep content current** - update every 3-6 months
2. **Add new projects** - showcase latest work
3. **Improve skills** - reflect learning in portfolio
4. **Monitor analytics** - see what pages visitors view
5. **Evolve design** - refresh styling as trends change

---

## Troubleshooting Deployment

### Getting Help

**Check these resources first:**

**Platform documentation:**

- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

**Common error searches:**

- Google: "[platform] [error message]"
- Stack Overflow
- Platform community forums

**Ask for help:**

- Instructor or classmates
- Platform support (Netlify/Vercel have excellent support)
- Web development communities (Reddit, Discord)

### Debug Checklist

**If deployment fails:**

1. [ ] Read error message carefully
2. [ ] Check build logs for details
3. [ ] Test `npm run build` locally
4. [ ] Verify all files committed to Git
5. [ ] Check Node version compatibility
6. [ ] Google the specific error message
7. [ ] Try deploying to different platform

**If site deploys but doesn't work:**

1. [ ] Check browser console for errors
2. [ ] Check Network tab for 404s
3. [ ] Verify image paths are correct
4. [ ] Test routing (refresh on subpages)
5. [ ] Check mobile responsiveness
6. [ ] Clear browser cache and retry

---

## Congratulations! 🎉

**You did it!** Your portfolio is now live on the web!

### What You've Accomplished

✅ Built a complete portfolio website from scratch
✅ Learned React, Tailwind CSS, and modern web dev
✅ Implemented routing, state, and components
✅ Created responsive, accessible design
✅ Deployed to production with CI/CD
✅ Established professional web presence

### Your Portfolio Is Now

- **Accessible** - Anyone can view it at your URL
- **Professional** - Showcases your skills and work
- **Searchable** - Can be found online
- **Shareable** - Easy to include in applications
- **Maintainable** - You can update anytime
- **Deployable** - Auto-updates with Git push

### Share Your Success

**Your portfolio URL:**

```
https://your-portfolio.netlify.app
```

**Share it with:**

- Employers and recruiters
- Professional network
- Social media
- Course instructor
- Friends and family

### Keep Building!

This is just the beginning. Your portfolio will grow with you as you:

- Learn new technologies
- Build more projects
- Gain experience
- Develop your skills

**Keep coding, keep learning, keep building!**

---

## Course Complete! 🏆

You've successfully completed the Portfolio Website course!

**You now have:**

- Production-ready portfolio website
- React development skills
- Modern web development knowledge
- Deployment experience
- Foundation for continued learning

**What's next?**

- Apply to jobs with your new portfolio
- Continue learning React and web development
- Build more projects to showcase
- Network and share your work
- Keep refining and improving

**Thank you for being part of this course. We can't wait to see where your development journey takes you!**

---

**Happy coding! 🚀**
