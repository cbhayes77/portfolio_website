# Class 12: Content Replacement Guide

**Workshop Component 1 of 4**
**Estimated Time:** 40-50 minutes

---

## Overview

This guide walks you through replacing all placeholder content with your own professional information. Work through each section in order, updating data files with your real details.

> **💡 Remember:** This is YOUR portfolio. Be authentic, professional, and let your personality show through.

---

## Step 1: Update Tech Stack (5-10 minutes)

**File:** `src/data/techstack.js`

### What You're Doing

Replace the placeholder technologies with skills you actually have and can confidently discuss in an interview.

### Instructions

1. **Open** `src/data/techstack.js` in your editor

2. **Review the structure:**

   ```javascript
   export const techStack = [
     {
       name: "Technology Name",
       logo: "URL to logo",
       category: "Frontend", // or Backend, Tools, etc.
     },
   ];
   ```

3. **Update each technology:**
   - Replace names with technologies you know
   - Update logos (use URLs from [Simple Icons](https://simpleicons.org/) or CDNs)
   - Adjust categories as needed (Frontend, Backend, Tools, Databases, etc.)

4. **Add or remove items:**
   - Include your strongest 12-20 skills
   - Remove technologies you don't know well
   - Add technologies not in the placeholder list

### Best Practices

- **Be honest:** Only include skills you're comfortable discussing
- **Prioritize:** Put strongest/most relevant skills first
- **Stay current:** Include modern, in-demand technologies
- **Organize logically:** Group related technologies together
- **Use good logos:** Find high-quality SVG logos from reputable sources

### Example

```javascript
export const techStack = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Backend",
  },
  // ... your other technologies
];
```

### Resources

- [Simple Icons](https://simpleicons.org/) - Brand SVG icons
- [DevIcon](https://devicon.dev/) - Programming languages and tools icons
- [cdnjs](https://cdnjs.com/) - CDN for popular libraries

---

## Step 2: Update Projects (20-25 minutes)

**File:** `src/data/projects.js`

### What You're Doing

Replace placeholder projects with 3-4 of your best real projects. Each project needs a strong description, detailed case study, and good images.

### Instructions

1. **Open** `src/data/projects.js` in your editor

2. **Review the structure:**

   ```javascript
   export const projects = [
     {
       id: 1,
       slug: "project-slug", // URL-friendly
       title: "Project Name",
       shortDescription: "Brief description (1-2 sentences)",
       category: "Web Development",
       technologies: ["React", "Node.js"],
       image: "/path/to/image.jpg",
       link: "https://project-url.com",
       github: "https://github.com/you/project",
       featured: true,
       caseStudy: {
         overview: "Longer description...",
         challenge: "What problem...",
         solution: "How you solved it...",
         highlights: ["Key feature 1", "Key feature 2"],
         role: "Your role...",
         tools: ["Tools used"],
         timeline: "How long it took",
       },
     },
   ];
   ```

3. **For each project, update:**

   **Basic Info:**
   - `slug` - URL-friendly version (e.g., "ecommerce-site")
   - `title` - Clear, descriptive name
   - `shortDescription` - 1-2 sentence summary
   - `category` - Type of project
   - `technologies` - Array of technologies used

   **Links and Images:**
   - `image` - Path to project screenshot (add to `public/`)
   - `link` - Live project URL (if available)
   - `github` - GitHub repository URL
   - `featured` - `true` for top 2-3 projects

   **Case Study:**
   - `overview` - 2-3 paragraphs explaining the project
   - `challenge` - What problem did it solve?
   - `solution` - How did you approach it?
   - `highlights` - Array of 3-5 key features/accomplishments
   - `role` - What was your specific contribution?
   - `tools` - Technologies, frameworks, libraries used
   - `timeline` - Development duration

### Writing Great Project Descriptions

**Do:**

- ✅ Be specific about what you built
- ✅ Explain the problem and solution
- ✅ Highlight your contributions
- ✅ Include measurable outcomes (users, performance, etc.)
- ✅ Use active voice ("I built...", "I implemented...")

**Don't:**

- ❌ Use vague language ("Made a website")
- ❌ Exaggerate your role
- ❌ Leave out important details
- ❌ Use jargon without explanation

### Example Project Entry

```javascript
{
  id: 1,
  slug: "task-manager-app",
  title: "TaskFlow - Collaborative Task Manager",
  shortDescription: "A real-time task management app with team collaboration features, built with React and Firebase.",
  category: "Web Application",
  technologies: ["React", "Firebase", "Tailwind CSS", "React Router"],
  image: "/projects/taskflow-hero.jpg",
  link: "https://taskflow-demo.netlify.app",
  github: "https://github.com/yourusername/taskflow",
  featured: true,
  caseStudy: {
    overview: "TaskFlow is a collaborative task management application designed for small teams. Built during my web development course, it features real-time updates, user authentication, and an intuitive drag-and-drop interface for organizing tasks.",
    challenge: "The main challenge was implementing real-time synchronization across multiple users while maintaining good performance and a responsive UI.",
    solution: "I used Firebase Realtime Database for live data syncing and implemented optimistic UI updates to ensure the app feels fast even with network latency. I also used React Context for state management to avoid prop drilling.",
    highlights: [
      "Real-time collaboration with multiple users",
      "Drag-and-drop task organization",
      "User authentication with Google and email",
      "Responsive design works on mobile and desktop",
      "Dark mode support"
    ],
    role: "Solo developer responsible for all aspects including UI/UX design, frontend development, and Firebase backend configuration.",
    tools: ["React", "Firebase Auth", "Firestore", "Tailwind CSS", "React Beautiful DnD", "Vite"],
    timeline: "3 weeks (October 2025)"
  }
}
```

### Adding Project Images

1. **Prepare images:**
   - Screenshot of your project
   - Crop/edit to show best view
   - Optimize file size (use [TinyPNG](https://tinypng.com/))
   - Recommended size: 1200x800px

2. **Add to project:**
   - Save image in `public/projects/` folder
   - Name descriptively: `project-name-hero.jpg`
   - Update `image` path in data file

### How Many Projects?

- **Minimum:** 3 solid projects
- **Sweet spot:** 4-5 excellent projects
- **Maximum:** 6-7 (quality over quantity!)

Choose your best work that demonstrates different skills.

---

## Step 3: Update About Page (15-20 minutes)

**File:** `src/data/about.js`

### What You're Doing

Write your professional biography, list your experience, education, values, and interests.

### Instructions

1. **Open** `src/data/about.js` in your editor

2. **Update your bio:**

   ```javascript
   export const bio = {
     intro: "Opening paragraph - who are you?",
     background: "Your journey into tech",
     current: "What you're doing now",
     personal: "Personal touch/interests",
   };
   ```

   **Writing tips:**
   - Be conversational but professional
   - Tell your story (how you got into tech)
   - Show personality (you're human, not just a resume)
   - Keep it concise (2-4 short paragraphs total)

3. **Define your values:**

   ```javascript
   export const values = [
     {
       title: "Value Name",
       description: "What this means to you",
       icon: "IconName", // Optional
     },
   ];
   ```

   **Common values:** Continuous Learning, User-Focused, Collaboration, Clean Code, Problem Solving, Innovation

4. **List your experience:**

   ```javascript
   export const experience = [
     {
       year: "2023 - Present",
       role: "Job Title",
       company: "Company Name",
       description: "What you did/learned",
     },
   ];
   ```

   **Include:**
   - Jobs (full-time, part-time, internships)
   - Freelance work
   - Volunteer positions (if tech-related)
   - **Start with most recent**

5. **Add your education:**

   ```javascript
   export const education = [
     {
       year: "2024",
       degree: "Certificate in Web Development",
       school: "Coding Bootcamp Name",
       description: "What you learned",
     },
   ];
   ```

6. **List your interests:**

   ```javascript
   export const interests = [
     {
       title: "Interest Name",
       description: "Why you enjoy it",
       image: "URL or path to image",
     },
   ];
   ```

   **Tips:**
   - Choose 3-4 interests
   - Mix professional and personal
   - Show you're well-rounded
   - Use Unsplash for free images

7. **Customize your CTA:**
   ```javascript
   export const cta = {
     title: "Let's Work Together",
     description: "Your pitch to potential employers/clients",
     buttonText: "Get In Touch",
     buttonLink: "/contact",
   };
   ```

### Bio Writing Examples

**Good bio:**

```javascript
export const bio = {
  intro:
    "I'm a full-stack developer who loves building web applications that make people's lives easier. With a background in graphic design, I bring a unique perspective to both the visual and technical sides of development.",
  background:
    "After years in the design industry, I discovered my passion for coding through a client project that required custom web development. That spark led me to enroll in a coding bootcamp, where I fell in love with React and modern web technologies.",
  current:
    "Currently, I'm focused on building accessible, performant web applications using React, Node.js, and modern CSS. I'm actively seeking a junior developer role where I can contribute to meaningful projects and continue growing my skills.",
  personal:
    "When I'm not coding, you'll find me hiking local trails, experimenting with new coffee brewing methods, or contributing to open-source projects.",
};
```

**Less effective bio:**

```javascript
export const bio = {
  intro: "I am a developer.",
  background: "I learned to code.",
  current: "I build websites.",
  personal: "I like computers.",
};
```

### Best Practices

- **Be authentic:** Write in your own voice
- **Tell a story:** Connect your past to your future
- **Be specific:** Concrete examples > vague statements
- **Proofread:** Check spelling, grammar, punctuation
- **Balance:** Professional + personal = relatable
- **Update regularly:** Keep experience current

---

## Step 4: Update or Remove Testimonials (5-10 minutes)

**File:** `src/data/testimonials.js`

### What You're Doing

Add real testimonials OR remove the testimonials section entirely.

### Option A: Add Real Testimonials

**If you have testimonials:**

1. **Open** `src/data/testimonials.js`

2. **Update each testimonial:**

   ```javascript
   export const testimonials = [
     {
       id: 1,
       name: "Real Person's Name",
       role: "Their Job Title",
       company: "Company Name",
       content: "Their actual quote about working with you",
       image: "/path/to/photo.jpg", // Optional
     },
   ];
   ```

3. **Best practices:**
   - ✅ Get permission to use their quote
   - ✅ Use real, recent testimonials (last 1-2 years)
   - ✅ Include their full name and company
   - ✅ 2-4 sentences per testimonial
   - ✅ Showcase different skills/projects

**Where to get testimonials:**

- Former colleagues
- Bootcamp instructors
- Freelance clients
- LinkedIn recommendations
- Open source collaborators

### Option B: Remove Testimonials Section

**If you don't have testimonials yet:**

This is completely fine! Many portfolios don't include testimonials, especially for junior developers.

1. **Delete or comment out the testimonials import in Home.jsx:**

   ```javascript
   // import { Testimonials } from '../components/sections/Testimonials';
   ```

2. **Remove the Testimonials component:**

   ```javascript
   {
     /* <Testimonials /> */
   }
   ```

3. **You can add testimonials later** as you gain more experience and collect recommendations.

### Getting Testimonials in the Future

- Ask for LinkedIn recommendations
- Request feedback after successful projects
- Follow up with bootcamp instructors
- Reach out to colleagues from group projects

---

## Step 5: Add Your Resume (5 minutes)

**File:** Resume PDF in `public/` folder

### What You're Doing

Add your current resume PDF to the portfolio.

### Instructions

1. **Prepare your resume:**
   - Make sure it's current and matches your portfolio content
   - Export as PDF (not Word doc)
   - Use a professional, clean design
   - Keep file size under 1MB

2. **Name your file clearly:**
   - Good: `sarah_johnson_resume.pdf`
   - Good: `resume_2024.pdf`
   - Avoid: `resume.pdf`, `my resume final FINAL v2.pdf`

3. **Add to public folder:**
   - Drag your PDF into `public/` folder
   - Or use terminal: `cp ~/Downloads/your_resume.pdf public/`

4. **Update Resume.jsx (if file name is different):**

   Open `src/pages/Resume.jsx` and find:

   ```javascript
   const resumeUrl = "/chris_hayes_resume.pdf";
   ```

   Update to your filename:

   ```javascript
   const resumeUrl = "/sarah_johnson_resume.pdf";
   ```

5. **Test it:**
   - Run your dev server: `npm run dev`
   - Navigate to Resume page
   - Click download/view buttons
   - Verify PDF opens correctly

### Resume Tips

**Your resume should:**

- Match your portfolio content (same projects, experience)
- Highlight technical skills prominently
- Include your portfolio URL
- Be easy to read (good typography, clear sections)
- Be one page (two max for experienced developers)

---

## Step 6: Add Project Images and Assets (5-10 minutes)

**Folder:** `public/` and `public/projects/`

### What You're Doing

Add screenshots and images for your projects and interests.

### Instructions

1. **Create projects folder:**

   ```bash
   mkdir public/projects
   ```

2. **Gather project images:**
   - Screenshot your projects
   - Crop to best view (hero section, main feature)
   - Show the project in action

3. **Optimize images:**
   - Use [TinyPNG](https://tinypng.com/) to compress
   - Resize to reasonable dimensions (1200-1920px wide)
   - Keep file size under 500KB each
   - Convert to JPG or WebP format

4. **Name descriptively:**

   ```
   taskflow-hero.jpg
   ecommerce-dashboard.jpg
   weather-app-mobile.jpg
   ```

5. **Add to public/projects/:**
   - Drag files into folder
   - Or use terminal: `cp ~/Desktop/screenshots/* public/projects/`

6. **Update project data:**
   In `data/projects.js`, update image paths:
   ```javascript
   image: "/projects/taskflow-hero.jpg";
   ```

### Interest Images

For the About page interests section:

**Option 1: Use your own photos**

- Add to `public/interests/` folder
- Reference in `data/about.js`

**Option 2: Use Unsplash (free stock photos)**

```javascript
{
  title: "Photography",
  description: "Capturing moments...",
  image: "https://images.unsplash.com/photo-1XXXXXXXXX"
}
```

Find images at [Unsplash](https://unsplash.com/)

### Image Best Practices

- **Optimize:** Compress to reduce file size
- **Consistent style:** Similar editing/filters across images
- **High quality:** No blurry or pixelated images
- **Appropriate:** Professional and relevant
- **Alt text:** Descriptive or decorative (handled in components)

---

## Step 7: Final Content Review (5 minutes)

Before moving to styling and deployment, do a final check.

### Review Checklist

**Placeholder content:**

- [ ] No "Joe Anonymous" anywhere
- [ ] No "Lorem ipsum" text
- [ ] No placeholder email addresses
- [ ] No fake company names

**Personal info:**

- [ ] Your real name throughout
- [ ] Your actual skills and experience
- [ ] Your real projects
- [ ] Your real education/certifications

**Proofreading:**

- [ ] No typos or spelling errors
- [ ] Grammar is correct
- [ ] Consistent tone and voice
- [ ] Professional language throughout
- [ ] Dates are accurate

**Links and images:**

- [ ] All images load (no broken links)
- [ ] All project links work
- [ ] Resume PDF is correct
- [ ] GitHub links are correct

**Accuracy:**

- [ ] Technologies listed match projects
- [ ] Timeline dates are correct
- [ ] Job titles and companies are accurate
- [ ] Everything you can defend in an interview

---

## Common Questions

### "I don't have 3-4 projects. What do I do?"

**Options:**

1. Include course projects (this portfolio counts!)
2. Include personal projects (even small ones)
3. Include group projects (note your role)
4. Build 1-2 more simple projects this week
5. Include well-documented GitHub repos

**Quality matters more than quantity.** 2-3 excellent projects beat 6 mediocre ones.

### "Can I include projects from tutorials?"

**Yes, IF you:**

- Significantly customized or extended them
- Clearly state they were tutorial-based
- Show what YOU added or changed
- Learned meaningful skills from them

**Don't:**

- Claim tutorial projects as 100% your own work
- Include unchanged tutorial projects
- Pretend you designed something you didn't

### "How technical should my project descriptions be?"

**Balance is key:**

- Non-technical readers (recruiters) should understand the _what_ and _why_
- Technical readers (developers) should see the _how_ and appreciate the skills

Use clear language first, then include technical details.

### "What if I don't have professional experience?"

**Include:**

- Internships
- Freelance work
- Volunteer projects
- Open source contributions
- Course projects
- Teaching assistantships
- Relevant non-tech jobs (shows work ethic)

**Focus on:**

- What you learned
- Skills you developed
- Problems you solved

---

## Next Steps

✅ **Content replacement complete!**

**Now you can:**

1. Move to [CLASS_12_STYLE_CUSTOMIZATION.md](./CLASS_12_STYLE_CUSTOMIZATION.md) to customize your design
2. Test your content in the browser (`npm run dev`)
3. Ask instructor for content review/feedback

**Remember:** You can always come back and refine your content later. Get it "good enough" for now, then iterate based on feedback.

---

**Great job!** Your portfolio now has real, professional content. This is a huge milestone! 🎉
