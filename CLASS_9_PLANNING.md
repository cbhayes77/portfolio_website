# Class 9 Planning: About Page - Part 1

**Last Updated:** January 28, 2026

---

## Overview

Class 9 begins the construction of the About page, one of the most important pages in a portfolio. This is where students tell their professional story, showcase their values, and build credibility through their experience. Unlike previous classes where we built small components, Class 9 focuses on creating a **content-rich, multi-section page** with complex data structures.

### What Students Will Build

1. **`data/about.js`** - Complete data structure with all About page content (bio, values, experience, education, interests, CTA)
2. **`pages/About.jsx` (Part 1)** - First three sections of the About page:
   - Hero/Intro section with biographical paragraphs
   - Values grid showcasing 4 core values
   - Professional experience timeline

### Key Learning Outcomes

By the end of this class, students will:

- Create **complex, nested data structures** for rich content
- Build **timeline layouts** with semantic HTML
- Use **semantic elements** (`<article>`, `<header>`, `<time>`, `<ol>`)
- Implement **visual hierarchy** for biographical content
- Understand **content strategy** for professional storytelling
- Practice **incremental page building** (building in stages)

---

## Pedagogical Approach

### Why Split the About Page Across Two Classes?

The About page is **the most complex single page** in the portfolio. Splitting it provides:

1. **Manageable chunks**: Students can focus on understanding each section deeply
2. **Practice breaks**: Time to write their own content between classes
3. **Incremental progress**: See results after each class
4. **Homework opportunity**: Class 9 ends with working sections, Class 10 completes the page

### Teaching Sequence

This class follows a **data-first, progressive building** approach:

1. **Create Complete Data File** (25-30 min)
   - Start with ALL data (bio, values, experience, education, interests, CTA)
   - Students see the full structure before building UI
   - Provides content for both Class 9 and Class 10
   - Emphasizes planning before implementation

2. **Create About Page File** (5 min)
   - Set up imports and page structure
   - Add SEO component
   - Prepare for section building

3. **Build Hero/Intro Section** (10 min)
   - Simple layout with biographical paragraphs
   - Demonstrates multi-paragraph content rendering
   - Establishes page tone and voice

4. **Build Values Grid** (15 min)
   - 2x2 responsive grid of value cards
   - Icon + title + description pattern
   - Hover effects and animations

5. **Build Experience Timeline** (20 min)
   - Vertical timeline with visual connector
   - Semantic HTML for job entries
   - Conditional rendering for achievements
   - Most complex section in Part 1

### Why This Order?

1. **Data first**: Having all content ready makes UI building logical
2. **Simple to complex**: Hero → Values → Timeline (increasing complexity)
3. **Visual progression**: Students see the page come together section by section

---

## Component Breakdown

### 1. About Data File

**File:** `src/data/about.js`

**Purpose:** Centralize all About page content in one structured data object.

**Data Structure:**

```javascript
export const aboutData = {
  bio: {
    intro: "...",      // Opening paragraph
    background: "...", // Background story
    current: "...",    // Current focus
    personal: "..."    // Personal interests intro
  },
  values: [...],       // Array of 4 value objects
  experience: [...],   // Array of job objects
  education: [...],    // Array of education objects
  interests: [...],    // Array of interest objects
  cta: {...}          // Call-to-action object
};
```

**Key Concepts:**

- Nested object structure
- Multiple data types (strings, arrays, objects)
- Separation of data from presentation
- Content organization and planning

---

### 2. About Page - Part 1

**File:** `src/pages/About.jsx`

**Sections Built in Class 9:**

#### Hero/Intro Section

- **Purpose**: Introduce yourself and set the tone
- **Content**: 3 biographical paragraphs (intro, background, current)
- **Layout**: Centered, max-width container for readability
- **Key features**: Typography hierarchy, spacing

#### Values Grid

- **Purpose**: Showcase core principles and approach
- **Content**: 4 value cards (icon, title, description)
- **Layout**: 2x2 grid (responsive to 1 column on mobile)
- **Key features**: Card hover effects, semantic HTML (`<article>`)

#### Experience Timeline

- **Purpose**: Display professional history chronologically
- **Content**: Job entries with role, company, duration, description, achievements
- **Layout**: Vertical timeline with visual connector line
- **Key features**: Timeline dots, semantic list (`<ol>`), conditional achievements

---

## Data Structure Design

### Bio Object

```javascript
bio: {
  intro: "First paragraph - who you are and what you do",
  background: "Second paragraph - how you got here",
  current: "Third paragraph - what you're doing now",
  personal: "Fourth paragraph - personal interests (used in Class 10)"
}
```

**Teaching points:**

- Each field serves a specific narrative purpose
- String data for paragraph content
- Keeps content separate from layout logic

---

### Values Array

```javascript
values: [
  {
    id: 1,
    title: "User-Centered Design",
    description: "Long description...",
    icon: "👤",
  },
  // ... 3 more values
];
```

**Teaching points:**

- Array of objects (consistent structure)
- Each value has unique `id` (for React keys)
- Emoji icons (simple, accessible)
- 4 values create nice 2x2 grid

---

### Experience Array

```javascript
experience: [
  {
    id: 1,
    company: "Tech Startup Inc.",
    role: "Frontend Developer & UX Designer",
    duration: "2023 - Present",
    description: "Overview paragraph...",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
  // ... more jobs
];
```

**Teaching points:**

- Chronological order (most recent first)
- Optional `achievements` array (some jobs might not have them)
- Structured professional storytelling
- Nested arrays within objects

---

## Teaching Strategy

### Part 1: Creating the Data File

**Introduction (5 min):**

- Explain the About page's importance in portfolios
- Discuss content strategy (storytelling, credibility, personality)
- Show how data structures support content organization

**Build Process (25 min):**

- **Stage 1**: Bio object (all 4 paragraphs)
- **Stage 2**: Values array (4 values)
- **Stage 3**: Experience array (2-3 jobs)
- **Stage 4**: Education array (2-3 entries) - for Class 10
- **Stage 5**: Interests array (4-5 interests) - for Class 10
- **Stage 6**: CTA object - for Class 10

**Key Teaching Points:**

- **Data planning**: Think through content before building UI
- **Nested structures**: Objects within objects, arrays within objects
- **Realistic content**: Use plausible placeholder content
- **Flexibility**: Optional fields handle incomplete data

---

### Part 2: Building the About Page (Part 1)

**Introduction (3 min):**

- Explain we're building 3 of 6 sections today
- Preview the complete page structure
- Discuss semantic HTML importance

**Hero/Intro Section (10 min):**

- **STAGE 1**: Page setup (imports, SEO)
- **STAGE 2**: Hero section structure
- **STAGE 3**: Render bio paragraphs
- Focus on typography and readability

**Values Grid (15 min):**

- **STAGE 1**: Grid container and heading
- **STAGE 2**: Map through values array
- **STAGE 3**: Value card with icon, title, description
- **STAGE 4**: Hover effects and styling
- Emphasize semantic HTML (`<article>`, `role="list"`)

**Experience Timeline (20 min):**

- **STAGE 1**: Timeline container and heading
- **STAGE 2**: Ordered list structure
- **STAGE 3**: Individual job entry
- **STAGE 4**: Timeline visual elements (line, dots)
- **STAGE 5**: Conditional achievements rendering
- Most complex section - take time to explain

---

## Connection to Previous Classes

### From Class 1: Core Components

- Using `Section` and `Container` for consistent layout
- Using `Button` component (in CTA section, Class 10)
- Foundation in component composition

### From Class 2: SEO

- Every page needs SEO component
- Reinforces page metadata pattern

### From Class 4-5: Data-Driven Rendering

- Similar patterns to projects.js and testimonials.js
- Array mapping with `.map()`
- Conditional rendering

### From Class 8: Semantic HTML

- Building on Project page's use of `<article>`, `<header>`
- Expanding semantic vocabulary

---

## Semantic HTML Focus

### Why Semantic HTML Matters

Class 9 heavily emphasizes semantic HTML for:

1. **Accessibility**: Screen readers understand content structure
2. **SEO**: Search engines prioritize semantic markup
3. **Maintainability**: Code is self-documenting
4. **Best practices**: Professional standard

### Key Semantic Elements Used

| Element                | Purpose                 | Used In                             |
| ---------------------- | ----------------------- | ----------------------------------- |
| `<article>`            | Self-contained content  | Value cards, job entries            |
| `<header>`             | Introduction to content | Job entry headers                   |
| `<time>`               | Temporal information    | Job durations, education years      |
| `<ol>`                 | Ordered list            | Experience timeline (chronological) |
| `<h1>`, `<h2>`, `<h3>` | Heading hierarchy       | Page structure                      |

---

## Timeline Layout Pattern

The experience timeline is a common web design pattern students should understand:

### Visual Structure

```
  ┌─── Job 1 ────────────────┐
  │ Timeline Dot             │
  │                          │
  │ Frontend Developer       │
  │ Company • 2023-Present   │
  │ Description...           │
  │ • Achievement 1          │
  │ • Achievement 2          │
  └──────────────────────────┘
  │
  │ Vertical Line
  │
  ┌─── Job 2 ────────────────┐
  │ Timeline Dot             │
  │                          │
  │ UX Designer              │
  │ Company • 2021-2023      │
  │ Description...           │
  └──────────────────────────┘
```

### CSS Approach

- Left border creates vertical line
- Absolute-positioned dots
- Padding left creates space for timeline
- Clean, scannable layout

---

## Content Strategy Guidance

### Writing the Bio

Students should write 3 paragraphs:

**Paragraph 1 (Intro):**

- Who you are
- What you do
- Your approach or philosophy

**Paragraph 2 (Background):**

- How you got into UX/development
- Key formative experiences
- Journey to current role

**Paragraph 3 (Current):**

- What you're working on now
- Current interests and focus
- Future direction

**Tips:**

- Write in first person ("I'm a...")
- Be authentic but professional
- Show personality
- Keep paragraphs 3-4 sentences each

---

### Choosing Values

Students should select 4 core values that guide their work:

**Good examples:**

- User-Centered Design
- Clean, Maintainable Code
- Accessibility First
- Continuous Learning
- Attention to Detail
- Collaborative Teamwork

**For each value:**

- Title (2-4 words)
- Description (2-3 sentences explaining why it matters)
- Icon (emoji that represents it)

---

### Documenting Experience

For each job, students need:

**Required:**

- Role title
- Company name
- Duration (Year - Year or Year - Present)
- Description (1-2 sentences about the role)

**Optional:**

- Achievements (3-5 bullet points with metrics if possible)

**Tips:**

- Most recent jobs first
- Use action verbs (Led, Designed, Developed, etc.)
- Include numbers when possible (45% increase, 10+ projects, etc.)
- Be specific about your contributions

---

## Common Student Questions

### "How much content should I write?"

**Answer:**

- **Bio paragraphs**: 3-4 sentences each (not too long, not too short)
- **Values**: 2-3 sentences per value
- **Experience**: 1-2 sentence description + 3-5 achievements
- **Quality over quantity**: Better to have well-written, concise content

---

### "What if I don't have much professional experience?"

**Answer:**

- **Include coursework projects**: Treat significant class projects as experience
- **Freelance/volunteer work**: Counts as legitimate experience
- **Personal projects**: Show initiative and self-directed learning
- **Focus on learning**: Emphasize skills gained and growth
- **Be honest**: It's okay to be early career - show enthusiasm and potential

---

### "Should I use 'I' or write in third person?"

**Answer:**

- **Use first person ("I")** for bio sections - more personal and authentic
- Portfolio About pages are typically first-person
- Third person feels distant and formal
- Exception: Very formal corporate contexts might prefer third person

---

### "What if I don't have 4 values?"

**Answer:**

- Most professionals can identify 3-4 core principles
- Think about what's important in your work process
- Consider: User focus, code quality, accessibility, learning, collaboration, detail
- Values can be specific to your approach (e.g., "Mobile-First Design")
- Grid works fine with 3 values (will adjust layout)

---

### "Can I add more sections?"

**Answer:**
Absolutely! Common additions:

- Skills/Tools section
- Awards/Recognition
- Publications/Speaking
- Volunteer work
- Side projects

For this class, stick to the planned structure - but encourage customization later!

---

## Testing & Validation

After completing Class 9, students should have:

1. **Complete data file** with all About page content
2. **Working About page** with 3 sections:
   - Hero/Intro with 3 paragraphs
   - Values grid with 4 cards
   - Experience timeline with job entries

**Verification checklist:**

- ✅ `/about` URL loads the page
- ✅ SEO meta tags show "About" title
- ✅ Bio paragraphs display correctly
- ✅ Values grid shows 2x2 on desktop, stacks on mobile
- ✅ Timeline shows vertical line and dots
- ✅ Job achievements display as bullet lists
- ✅ Hover effects work on value cards
- ✅ Semantic HTML validates (check with WAVE or similar)

---

## File Creation Order

1. **`CLASS_9_ABOUT_DATA.md`** - Create the complete data structure first
2. **`CLASS_9_ABOUT_PART1.md`** - Build the first three sections of the About page

This order ensures students have all content ready before building UI, reinforcing the data-first approach.

---

## Looking Ahead to Class 10

**What's left to build:**

- Education & Certifications section (grid of education cards)
- Interests section (image cards with overlays)
- CTA section (final call-to-action with buttons)
- Mobile menu component
- Mobile menu integration in navbar

Students will complete the About page and add mobile navigation!

---

## Summary

Class 9 is a substantial lesson that combines:

- **Complex data structures** (nested objects and arrays)
- **Semantic HTML** (article, header, time, ol)
- **Timeline layouts** (visual design pattern)
- **Content strategy** (professional storytelling)
- **Progressive enhancement** (building in stages)

By the end, students will have a strong foundation in creating content-rich pages and will understand how to structure biographical/professional content effectively.

The About page showcases everything they've learned so far while introducing new concepts in semantic markup and timeline design.

---

**Next Class Preview:**

In Class 10, students will complete the About page with education, interests, and CTA sections, then build the mobile menu component to make the navigation fully responsive across all devices.
