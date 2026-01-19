================================================================================
CLASS 6 PLANNING DOCUMENT
================================================================================

Date Created: January 16, 2026
Status: Planning Phase

================================================================================
OVERVIEW
================================================================================

CLASS 6 THEME: About Page - Tell Your Story

In Class 6, students will build a comprehensive About page that tells their
professional story. This page includes bio sections, values cards, experience
timeline, education grid, personal interests, and a final CTA. Unlike the
homepage sections, this is a complete single page built all at once.

This demonstrates how to build content-rich pages with complex layouts,
semantic HTML, and data-driven rendering.

================================================================================
WHAT STUDENTS HAVE ALREADY BUILT (PREREQUISITES)
================================================================================

BY END OF CLASS 5, STUDENTS HAVE:

**UI Components:**
- Button.jsx (Class 1)
- Section.jsx (Class 1)
- Container.jsx (Class 1)
- SEO.jsx (Class 2)
- ProjectCard.jsx (Class 4)
- TestimonialCard.jsx (Class 5)

**Layout Components:**
- Navbar.jsx (Class 2)
- Footer.jsx (Class 2)

**Section Components:**
- TechStack.jsx (Class 3)
- Projects.jsx (Class 4)
- Testimonials.jsx (Class 5)
- FinalCTA.jsx (Class 5)

**Data Files:**
- techstack.js (Class 3)
- projects.js (Class 4)
- testimonials.js (Class 5)

**Pages:**
- Home.jsx - Complete homepage (Classes 1-5)

**App Structure:**
- App.jsx with routing (Class 2)
- main.jsx (Class 1)

================================================================================
WHAT WE'LL BUILD IN CLASS 6
================================================================================

**NEW COMPONENTS TO BUILD:**

1. **about.js** (Data File)
   - Location: src/data/about.js
   - Type: Data file (JavaScript object export)
   - Complexity: Moderate (nested object with multiple sections)
   - Time Estimate: 15-20 minutes

2. **About.jsx** (Page Component)
   - Location: src/pages/About.jsx
   - Type: Complete page component
   - Complexity: Complex (multiple sections, varied layouts)
   - Time Estimate: 45-60 minutes

**TOTAL CLASS TIME ESTIMATE:** 60-80 minutes

**NOTE:** Unlike previous classes where we built data → card → section → page,
this class builds ONE complete page from a single data file. This shows
students how to structure a content-rich page.

================================================================================
DETAILED COMPONENT BREAKDOWN
================================================================================

## 1. ABOUT.JS DATA FILE

**Purpose:**
Store all content for the About page in a structured, maintainable format

**Data Structure:**
```javascript
export const aboutData = {
  bio: { intro, background, current, personal },
  values: [ { id, title, description, icon }, ... ],
  experience: [ { id, company, role, duration, description, achievements }, ... ],
  education: [ { id, degree, institution, year, details }, ... ],
  interests: [ { id, name, description, icon, image }, ... ],
  cta: { heading, description, primaryAction, secondaryAction }
};
```

**Key Teaching Points:**
- Named export of a single object (export const aboutData)
- Nested object structure (bio contains multiple properties)
- Arrays of objects for repeating sections
- How to organize complex data logically
- Customization points for students

**Student Customization:**
- Replace all bio text with their own story
- Update values to reflect their principles
- Add their actual experience and education
- Replace interests with their hobbies
- Customize CTA messaging

**Codebase Match:**
Exact structure from actual about.js file

---

## 2. ABOUT.JSX PAGE COMPONENT

**Purpose:**
Display a comprehensive About page with multiple sections telling the
student's professional and personal story

**Sections Included:**
1. Hero/Intro - Bio paragraphs
2. Values - 4 value cards in a 2x2 grid
3. Experience Timeline - Professional history with achievements
4. Education - 3 education cards in responsive grid
5. Interests - 5 interest cards with images
6. CTA - Final call-to-action with two buttons

**Key Teaching Points:**
- Building complete pages (not just sections)
- Importing and using nested data structures
- Multiple layout patterns on one page
- Timeline components with semantic HTML (<ol>, <li>)
- Image handling with lazy loading
- Accessibility for timelines and lists
- Combining multiple Tailwind patterns
- Using role="list" and role="listitem" for accessibility

**Complexity Level:** Complex
- Multiple distinct sections with different layouts
- Timeline pattern (new)
- Nested data mapping (experience with achievements)
- Image grids with overlays
- More advanced Tailwind (gradients, transforms, transitions)

**Visual Layouts:**

**Bio Section:**
```
+----------------------------------------+
|         About Me (h1)                  |
|                                        |
|  Intro paragraph (larger text)        |
|  Background paragraph                 |
|  Current paragraph                    |
+----------------------------------------+
```

**Values Section (2x2 Grid):**
```
+------------------------------------------+
|     What Drives My Work (h2)            |
+------------------------------------------+
|  [Icon]            |  [Icon]            |
|  Title             |  Title             |
|  Description       |  Description       |
|                    |                    |
+--------------------+--------------------+
|  [Icon]            |  [Icon]            |
|  Title             |  Title             |
|  Description       |  Description       |
+--------------------+--------------------+
```

**Experience Timeline:**
```
+------------------------------------------+
|     Professional Journey (h2)           |
+------------------------------------------+
|  ● Role                                  |
|  | Company • Duration                    |
|  | Description                           |
|  | • Achievement 1                       |
|  | • Achievement 2                       |
|  |                                       |
|  ● Role                                  |
|  | Company • Duration                    |
|    ...                                   |
+------------------------------------------+
```

**Education Grid (3 columns):**
```
+------------------------------------------+
|  Education & Certifications (h2)        |
+------------------------------------------+
| [Card]      [Card]      [Card]          |
| Degree      Degree      Degree          |
| School      School      School          |
| Year        Year        Year            |
| Details     Details     Details         |
+------------------------------------------+
```

**Interests Grid (3 columns with images):**
```
+------------------------------------------+
|       Beyond the Code (h2)              |
|       Personal intro text               |
+------------------------------------------+
| [Image]     [Image]     [Image]         |
| [Icon]      [Icon]      [Icon]          |
| Name        Name        Name            |
| Desc        Desc        Desc            |
+------------------------------------------+
| [Image]     [Image]                     |
| [Icon]      [Icon]                      |
| Name        Name                        |
| Desc        Desc                        |
+------------------------------------------+
```

**Final CTA:**
```
+------------------------------------------+
|      Let's Work Together (h2)           |
|                                          |
|      Description text                   |
|                                          |
|  [Get in Touch]  [View My Work]         |
+------------------------------------------+
```

**Codebase Match:**
Complete About.jsx with all sections matching the actual file

================================================================================
TEACHING SEQUENCE (RECOMMENDED ORDER)
================================================================================

**BUILD ORDER:**

1. **CLASS_6_ABOUT_DATA.md**
   - Start with data structure
   - Students understand content first
   - 15-20 minutes

2. **CLASS_6_ABOUT.md**
   - Build complete About page in stages
   - Stage 1: Setup and Bio Section
   - Stage 2: Values Section
   - Stage 3: Experience Timeline
   - Stage 4: Education Section
   - Stage 5: Interests Section
   - Stage 6: Final CTA Section
   - 45-60 minutes

**TOTAL:** 60-80 minutes (good for one class session)

================================================================================
KEY CONCEPTS TAUGHT IN CLASS 6
================================================================================

**NEW CONCEPTS:**
- Timeline components with semantic HTML
- Nested data structures (object with arrays)
- Multiple layout patterns on one page
- Image grids with overlays and gradients
- Lazy loading images (loading="lazy")
- Screen reader only text (sr-only class)
- Ordered lists for timelines (<ol>)
- Accessibility for complex lists (role="list", role="listitem")
- Transform hover effects (scale, transitions)
- Focus states for accessibility (focus-within)

**REINFORCED CONCEPTS:**
- Data-driven rendering with .map()
- Responsive grids (1 column → 2 columns → 3 columns)
- SEO with SEO component
- Section + Container pattern
- Button component usage
- Card styling patterns

**LAYOUT PATTERNS:**
- Single column centered content (max-w-4xl)
- 2-column grid (md:grid-cols-2)
- 3-column grid (lg:grid-cols-3)
- Timeline/vertical flow
- Image cards with overlays

**ACCESSIBILITY PATTERNS:**
- Semantic HTML for timelines
- ARIA labels and descriptions
- Focus states
- Screen reader considerations
- Time elements for dates

================================================================================
STUDENT LEARNING OUTCOMES
================================================================================

By the end of Class 6, students will be able to:

✓ Structure complex nested data in JavaScript
✓ Build complete pages (not just sections)
✓ Implement timeline components with proper semantics
✓ Create image grids with overlays
✓ Use multiple layout patterns on one page
✓ Handle nested data mapping (experience with achievements)
✓ Apply accessibility best practices to complex layouts
✓ Use lazy loading for performance
✓ Create hover and focus effects
✓ Build narrative-driven content pages

**COMPLETED PROJECT STATE:**
Students will have a complete About page with:
- Personal bio and introduction
- Core values and principles
- Professional experience timeline
- Education and certifications
- Personal interests with images
- Call-to-action encouraging contact

This is their professional story, ready to share!

================================================================================
COMPARISONS TO PREVIOUS CLASSES
================================================================================

**DIFFERENT FROM HOME PAGE:**
- Home: Multiple separate section components
- About: One page component with inline sections

**WHY THIS APPROACH:**
- About page is unique (won't reuse sections elsewhere)
- Content is tightly coupled (all about one person)
- Simpler to maintain as one file
- Shows different organizational approach

**PATTERN RECOGNITION:**
- Still uses Section + Container
- Still maps over data arrays
- Still uses responsive grids
- Different approach, same principles

**PEDAGOGICAL VALUE:**
- Shows there's more than one way to structure pages
- Reinforces that components should match use case
- Reusable sections: separate components
- One-off pages: single page component

================================================================================
CUSTOMIZATION OPPORTUNITIES FOR STUDENTS
================================================================================

**Easy Customizations:**

1. **Bio Content:**
   - Replace all text with personal story
   - Add or remove paragraphs
   - Change tone/voice

2. **Values:**
   - Change the 4 values to their principles
   - Update icons (use emojis or could add icon library)
   - Modify descriptions

3. **Experience:**
   - Add their actual work history
   - Include internships, volunteer work
   - Add or remove achievements
   - Change date formats

4. **Education:**
   - Add their degrees and certifications
   - Include relevant coursework
   - Add bootcamps or online courses

5. **Interests:**
   - Replace with their hobbies
   - Change images (use Unsplash or own photos)
   - Add more or fewer interests

6. **CTA:**
   - Change messaging
   - Update button text
   - Modify links

**Advanced Customizations (future):**
- Add skills section with progress bars
- Add awards/recognition section
- Add downloadable resume link
- Add contact form inline
- Add photo gallery
- Add testimonials specific to About page

================================================================================
COMMON STUDENT QUESTIONS (ANTICIPATED)
================================================================================

**Q: "Why is the About page one component instead of separate sections?"**
A: The About page is unique to you. Unlike Projects or Testimonials (which
   might appear on multiple pages), your bio and timeline are specific to
   this page. It's simpler to keep it all together. If you wanted to reuse
   a section (like your bio), you could extract it into a separate component.

**Q: "Can I add my own photo instead of using a profile image?"**
A: Absolutely! You can add an image to the bio section. We'll show you how
   to handle images in a later class.

**Q: "What if I don't have much professional experience yet?"**
A: That's completely fine! Include:
   - School projects that showcase your skills
   - Volunteer work or community involvement
   - Personal projects or freelance work
   - Part-time jobs (showing responsibility and work ethic)
   - Focus on what you learned and accomplished

**Q: "The timeline looks different from the cards. Can I make it all cards?"**
A: Yes! You could style the experience items as cards instead of a timeline.
   The timeline is a nice visual pattern for chronological data, but there's
   no requirement to use it.

**Q: "Can I change the order of sections?"**
A: Yes! The sections are independent. You could move education before
   experience, or put interests at the top. Experiment with what tells
   your story best.

**Q: "What if I don't have interests photos?"**
A: We're using Unsplash URLs for placeholders. You can:
   - Keep using Unsplash (free stock photos)
   - Add your own photos later
   - Remove the image part and just have icon cards

================================================================================
DEPENDENCIES AND FILE LOCATIONS
================================================================================

**NEW FILES TO CREATE:**

```
src/
  data/
    about.js                ← NEW (Class 6)
  pages/
    About.jsx               ← NEW (Class 6)
```

**FILES TO UPDATE:**
None! This is a standalone page.

**DEPENDENCIES (already exist):**
- Button.jsx (Class 1)
- Section.jsx (Class 1)
- Container.jsx (Class 1)
- SEO.jsx (Class 2)
- App.jsx already has /about route (Class 2)

**ROUTE:**
Already configured in App.jsx:
```jsx
<Route path="/about" element={<About />} />
```

Students just need to build the page!

================================================================================
TESTING STRATEGY
================================================================================

**TESTING CHECKPOINTS:**

1. **After about.js:**
   - Data structure is correct
   - Can import in another file
   - No syntax errors

2. **After Bio Section:**
   - Page loads at /about
   - SEO component works
   - Bio text displays
   - Responsive layout works

3. **After Values Section:**
   - 4 cards display in 2x2 grid
   - Icons show correctly
   - Responsive (1 column mobile, 2 columns tablet+)
   - Hover effects work

4. **After Experience Timeline:**
   - Timeline displays vertically
   - Dots appear on timeline
   - Achievements list properly
   - Semantic HTML is correct

5. **After Education Section:**
   - 3 cards in responsive grid
   - All data displays
   - Responsive breakpoints work

6. **After Interests Section:**
   - Images load
   - Icons overlay on images
   - Grid responsive (1→2→3 columns)
   - Hover scale effect works

7. **After CTA Section:**
   - Buttons display and link correctly
   - Centered layout works
   - Card styling applied

**VISUAL TESTING:**
- Mobile view (320px-640px)
- Tablet view (768px-1024px)
- Desktop view (1280px+)
- Check all hover states
- Check focus states (Tab through page)
- Test with screen reader (optional but encouraged)

================================================================================
POTENTIAL ISSUES AND SOLUTIONS
================================================================================

**ISSUE: Images don't load**
SOLUTION: Using Unsplash URLs requires internet. If offline, images won't
show. Could use placeholder background colors instead, or local images.

**ISSUE: Timeline dots don't align**
SOLUTION: Check absolute positioning and left offset values. The dot needs
specific positioning relative to the timeline border.

**ISSUE: Grid doesn't respond properly**
SOLUTION: Verify Tailwind breakpoints: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

**ISSUE: Long text breaks layout**
SOLUTION: This is expected with real content. Could add line-clamp or
adjust card heights as needed.

**ISSUE: Achievements list has inconsistent bullet points**
SOLUTION: Check that list-disc and pl-5 classes are applied to the <ul>.

================================================================================
ALIGNMENT WITH INSTRUCTIONAL RULES
================================================================================

**FOLLOWING THE RULES:**

✓ **Progressive Enhancement:**
  - Build page section by section (6 stages)
  - Start with simple bio, add complexity gradually
  - Each section builds on previous knowledge

✓ **No Wasteful Patterns:**
  - Teaches semantic HTML for timelines from the start
  - Uses proper accessibility patterns immediately
  - No refactoring or rebuilding needed

✓ **Codebase Alignment:**
  - Final code matches actual About.jsx exactly
  - Data structure matches about.js
  - All Tailwind classes are correct
  - Imports are accurate

✓ **Pedagogical Sound:**
  - New concepts (timeline, nested data) introduced with context
  - Reinforces previous learning (mapping, grids, responsive design)
  - Shows alternative page structure approach
  - Builds complete, functional page

✓ **One Concept Per Stage:**
  - Each stage focuses on one section
  - Builds understanding incrementally
  - Can test after each stage

================================================================================
GUIDE CREATION CHECKLIST
================================================================================

Before creating each guide, verify:

□ Read INSTRUCTIONAL_GUIDE_CREATION_RULES.md completely
□ Output verification statement with line count
□ Read actual About.jsx and about.js files from codebase
□ Understand all data structures and sections
□ Plan stage-by-stage progression
□ Identify new concepts (timeline, nested mapping)
□ Plan ASK STUDENTS questions
□ Plan DEMONSTRATE moments
□ Prepare troubleshooting scenarios
□ Prepare testing checkpoints

For each guide created:

□ Follow exact header format
□ Use STAGE numbering for complex guide
□ Include INSTRUCTOR SAYS for each stage
□ Include STUDENTS TYPE/ADD/MODIFY
□ Include EXPLAIN bullets
□ Include CURRENT CODE SHOULD LOOK LIKE after each stage
□ Add ASK STUDENTS questions
□ Include testing sections
□ Include all required ending sections
□ Verify final code matches codebase exactly

================================================================================
NEXT STEPS
================================================================================

**READY TO CREATE GUIDES:**

Once instructor approves this plan, create guides in this order:

1. CLASS_6_ABOUT_DATA.md
2. CLASS_6_ABOUT.md

**ESTIMATED CREATION TIME:**
- Data guide: 30-45 minutes
- About page guide: 60-90 minutes (it's complex!)
- Total: 90-135 minutes for guide creation

**AFTER CLASS 6:**
Students will have:
- Complete Homepage (Classes 1-5)
- Complete About Page (Class 6)
- Ready to build Portfolio page (Class 7)

The site is really coming together!

================================================================================
END OF CLASS 6 PLANNING DOCUMENT
================================================================================
