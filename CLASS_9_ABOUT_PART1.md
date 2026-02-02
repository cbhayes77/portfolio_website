# Class 9: Building the About Page - Part 1

**File:** `src/pages/About.jsx`
**Type:** Page Component
**Purpose:** Display the first three sections of the About page: bio, values, and professional experience timeline

---

## Why Build the About Page in Two Parts?

The About page is **the most content-rich page** in a portfolio. It tells your professional story, showcases your values, and builds credibility. Instead of building everything at once (which can be overwhelming), we'll split it into two parts:

**Part 1 (Class 9):**

- Hero/Intro section (biographical paragraphs)
- Values grid (4 core values)
- Professional experience timeline

**Part 2 (Class 10):**

- Education & certifications
- Personal interests with images
- Call-to-action section

This approach lets you:

1. Focus on understanding each section deeply
2. See progress after each class
3. Have time to customize your content between classes

---

## What We're Building

By the end of this guide, you'll have an About page with:

1. **Hero/Intro Section** - Your professional story in 3-4 paragraphs
2. **Values Grid** - 4 cards displaying your core principles
3. **Experience Timeline** - Visual timeline of your professional journey

---

## Step 1: Create the About.jsx File

Navigate to `src/pages/` and create a new file called `About.jsx`.

---

## Step 2: Set Up Imports and Component Structure

Let's start with the basic imports and page structure.

**Add this code:**

```jsx
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";
import { aboutData } from "../data/about.js";

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about my background, skills, and experience as a UX Designer and Frontend Developer."
        url="/about"
      />

      {/* Sections will go here */}
    </>
  );
}
```

**What's happening here:**

1. **Import Layout Components**: `Section` and `Container` for consistent spacing
2. **Import SEO Component**: For page metadata (title, description)
3. **Import Data**: Pull in `aboutData` from the data file we created earlier
4. **SEO Component**: Sets page title, description, and URL for search engines
5. **Fragment (`<>`)**: Wraps multiple sections without adding extra DOM elements

**Save and check:** Your page won't display anything yet, but there should be no errors.

---

## Step 3: Build the Hero/Intro Section

The hero section introduces you with biographical paragraphs. It's the first thing visitors read, so it should be clear and engaging.

**After the `<SEO>` component, add:**

```jsx
{
  /* Hero/Intro Section */
}
<Section>
  <Container>
    <div className="max-w-4xl mx-auto">
      <h1 className="heading-page">About Me</h1>
      <div className="mt-6 space-y-4 body-default">
        <p className="text-lg leading-relaxed">{aboutData.bio.intro}</p>
        <p>{aboutData.bio.background}</p>
        <p>{aboutData.bio.current}</p>
      </div>
    </div>
  </Container>
</Section>;
```

**Breaking it down:**

1. **`<Section>` and `<Container>`**:
   - Consistent spacing across all page sections
   - Container centers content with responsive padding

2. **`max-w-4xl mx-auto`**:
   - Limits text width for readability (4xl = 56rem = ~896px)
   - `mx-auto` centers the content block

3. **`heading-page`**:
   - Typography utility for main page headings
   - Already defined in your design system

4. **`space-y-4`**:
   - Adds vertical spacing between paragraphs
   - `space-y-4` = 1rem (16px) gap between children

5. **`text-lg leading-relaxed`**:
   - Makes the intro paragraph slightly larger
   - `leading-relaxed` increases line height for better readability

6. **Dynamic Content**:
   - `{aboutData.bio.intro}` pulls from your data file
   - Each `<p>` tag renders a different paragraph

**Why this structure?**

- **Readability**: Max width prevents lines from being too long
- **Hierarchy**: Larger intro paragraph draws attention
- **Spacing**: Vertical gaps between paragraphs improve reading flow

---

## Step 4: Build the Values Grid

The values section showcases your core principles with icon cards in a 2x2 grid.

**After the Hero section, add:**

```jsx
{
  /* Values Section */
}
<Section>
  <Container>
    <div className="max-w-6xl mx-auto">
      <h2 className="heading-section text-center mb-12">What Drives My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
        {aboutData.values.map((value) => (
          <article
            key={value.id}
            className="card-base rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
            role="listitem"
          >
            <div className="text-4xl mb-4" aria-hidden="true">
              {value.icon}
            </div>
            <h3 className="subheading-primary mb-2">{value.title}</h3>
            <p className="body-default text-white/70">{value.description}</p>
          </article>
        ))}
      </div>
    </div>
  </Container>
</Section>;
```

**Breaking it down:**

### The Container

1. **`max-w-6xl mx-auto`**:
   - Wider max width (6xl = 72rem = ~1152px) than hero section
   - Allows grid to breathe with 2 columns

2. **`heading-section text-center mb-12`**:
   - Section heading style from design system
   - Centered text
   - Large bottom margin (mb-12 = 3rem) creates breathing room

### The Grid

3. **`grid grid-cols-1 md:grid-cols-2 gap-6`**:
   - **Mobile**: 1 column (stacked cards)
   - **Tablet and up (`md:`)**: 2 columns (2x2 grid)
   - `gap-6` = 1.5rem spacing between cards

4. **`role="list"` and `role="listitem"`**:
   - **Accessibility**: Helps screen readers understand this is a list of items
   - Even though we're using a grid, semantically it's a list of values

### The Card

5. **`<article>` element**:
   - **Semantic HTML**: Each value is an independent piece of content
   - Better for SEO and accessibility

6. **`key={value.id}`**:
   - React requires unique keys when mapping over arrays
   - Helps React track which items changed

7. **Card Styling**:
   - `card-base`: Design system class for card background/shadow
   - `rounded-2xl`: Large border radius for modern look
   - `p-6`: Padding inside the card (1.5rem on all sides)

8. **Hover Effect**:
   - `hover:scale-[1.02]`: Card grows 2% on hover
   - `transition-transform duration-200`: Smooth 200ms animation
   - Provides interactive feedback

9. **Focus State**:
   - `focus-within:ring-2 focus-within:ring-white/60`: Visible focus indicator
   - `focus-within:ring-offset-2 focus-within:ring-offset-black`: Offset ring from card
   - **Accessibility**: Keyboard users can see which card is focused

### The Content

10. **Icon**:
    - `text-4xl mb-4`: Large size with bottom margin
    - `aria-hidden="true"`: Icons are decorative, not informative for screen readers

11. **Title**:
    - `subheading-primary`: Design system class for card titles
    - `mb-2`: Small margin before description

12. **Description**:
    - `body-default`: Standard body text style
    - `text-white/70`: Slightly transparent white (70% opacity) for hierarchy

**Why this structure?**

- **Responsive**: Adapts from mobile (1 column) to desktop (2 columns)
- **Accessible**: Semantic HTML and ARIA roles
- **Interactive**: Hover effects provide feedback
- **Consistent**: Uses design system classes

---

## Step 5: Build the Experience Timeline

The experience section displays your professional journey as a vertical timeline with visual connectors.

**After the Values section, add:**

```jsx
{
  /* Experience Timeline */
}
<Section>
  <Container>
    <div className="max-w-4xl mx-auto">
      <h2 className="heading-section mb-12">Professional Journey</h2>
      <ol className="space-y-8" aria-label="Professional experience timeline">
        {aboutData.experience.map((job) => (
          <li key={job.id} className="relative pl-8 border-l-2 border-white/20 pb-8 last:pb-0">
            {/* Timeline dot */}
            <div
              className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black"
              aria-hidden="true"
            ></div>

            <article>
              <header className="mb-2">
                <h3 className="subheading-primary">{job.role}</h3>
                <p className="body-default text-white/70">
                  <span className="sr-only">at</span> {job.company} <span aria-hidden="true">•</span>{" "}
                  <time>{job.duration}</time>
                </p>
              </header>

              <p className="body-default mb-3">{job.description}</p>

              {job.achievements && job.achievements.length > 0 && (
                <>
                  <h4 className="sr-only">Key Achievements</h4>
                  <ul className="list-disc pl-5 body-default text-white/70 space-y-1">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          </li>
        ))}
      </ol>
    </div>
  </Container>
</Section>;
```

**This is the most complex section in Part 1. Let's break it down carefully:**

### The Timeline Container

1. **`<ol>` instead of `<ul>`**:
   - **Semantic HTML**: Experience is in chronological **order**
   - Screen readers will announce "List, 3 items" and "1 of 3", etc.

2. **`aria-label="Professional experience timeline"`**:
   - Provides context for screen reader users
   - Explains what this list represents

3. **`space-y-8`**:
   - Vertical spacing between timeline items (2rem = 32px)

### Each Timeline Item

4. **`<li>` Styling**:
   - `relative`: Positions timeline dot absolutely relative to this element
   - `pl-8`: Left padding (2rem) to make room for the timeline line and dot
   - `border-l-2 border-white/20`: Vertical line on the left (2px, 20% opacity)
   - `pb-8`: Bottom padding between items
   - `last:pb-0`: Remove bottom padding on last item (prevents extra space)

### The Timeline Dot

5. **Visual Connector**:

   ```jsx
   <div
     className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black"
     aria-hidden="true"
   ></div>
   ```

   - `absolute left-[-9px] top-0`: Positioned on the left border
     - `left-[-9px]`: Negative margin to center on the 2px border
     - Calculation: (16px width - 2px border) / 2 = 7px, then add 2px = -9px
   - `w-4 h-4`: 16px × 16px circle
   - `rounded-full`: Makes it a perfect circle
   - `bg-white`: White fill
   - `border-4 border-black`: 4px black border creates ring effect
   - `aria-hidden="true"`: Decorative element, hidden from screen readers

**Visual breakdown:**

```
|  ← Timeline line (border-l-2)
●  ← Timeline dot (absolute positioned)
   Job content starts here (pl-8 creates this space)
```

### The Job Content

6. **`<article>` Element**:
   - Each job is an independent piece of content
   - Semantic HTML for better structure

7. **`<header>` for Job Info**:
   - Groups the title and metadata together
   - Semantic: This is the heading/intro for the job

8. **Job Title**:
   - `<h3 className="subheading-primary">{job.role}</h3>`
   - Most important info, styled as subheading

9. **Company and Duration**:

   ```jsx
   <p className="body-default text-white/70">
     <span className="sr-only">at</span> {job.company} <span aria-hidden="true">•</span> <time>{job.duration}</time>
   </p>
   ```

   - **`<span className="sr-only">at</span>`**:
     - Screen readers will say "Frontend Developer **at** Tech Startup Inc."
     - Visual users see: "Tech Startup Inc. • 2023 - Present"
     - `sr-only` class hides "at" visually but keeps it for screen readers

   - **`<span aria-hidden="true">•</span>`**:
     - Visual separator (bullet point)
     - Hidden from screen readers (they don't need to hear "bullet")

   - **`<time>` element**:
     - Semantic HTML for dates/durations
     - Could add `datetime` attribute for machine-readable dates if needed

10. **Job Description**:
    - `<p className="body-default mb-3">{job.description}</p>`
    - Standard paragraph with bottom margin before achievements

### Conditional Achievements List

11. **Conditional Rendering**:

    ```jsx
    {job.achievements && job.achievements.length > 0 && (
      // ... render achievements
    )}
    ```

    - Only shows achievements if:
      - `job.achievements` exists (not undefined)
      - `job.achievements.length > 0` (array has items)
    - Prevents errors and empty lists

12. **Screen Reader Heading**:
    - `<h4 className="sr-only">Key Achievements</h4>`
    - Provides context for screen readers
    - Visually hidden (`sr-only`) since list bullets make it obvious

13. **Achievements List**:

    ```jsx
    <ul className="list-disc pl-5 body-default text-white/70 space-y-1">
      {job.achievements.map((achievement, idx) => (
        <li key={idx}>{achievement}</li>
      ))}
    </ul>
    ```

    - `list-disc`: Shows bullet points
    - `pl-5`: Indents list (1.25rem)
    - `space-y-1`: Small vertical spacing between items
    - `map` over achievements array
    - `key={idx}`: Uses array index as key (okay here since list won't reorder)

**Why this structure?**

- **Visual Timeline**: The line and dots create a clear chronological flow
- **Semantic HTML**: `<ol>`, `<article>`, `<header>`, `<time>` provide meaning
- **Accessible**: Screen reader text, ARIA labels, decorative elements hidden
- **Flexible**: Conditional rendering handles jobs with/without achievements
- **Hierarchical**: Clear visual and semantic hierarchy of information

---

## Step 6: Save and View Your Progress

1. **Save** the `About.jsx` file
2. Navigate to `/about` in your browser
3. You should see:
   - Your bio paragraphs
   - 4 value cards in a grid
   - Your professional timeline with visual connectors

---

## Understanding the Complete Structure

Here's what we've built:

```
About Page (Part 1)
├── Hero/Intro Section
│   └── 3 biographical paragraphs
├── Values Section
│   └── 2×2 grid of value cards
│       ├── Icon (decorative)
│       ├── Title
│       └── Description
└── Experience Section
    └── Timeline (ordered list)
        ├── Visual line connector
        ├── Timeline dots
        └── Job entries (articles)
            ├── Role & Company
            ├── Duration
            ├── Description
            └── Achievements (conditional list)
```

---

## Common Questions

### Q: Why use `<article>` tags?

**A:** `<article>` is semantic HTML that tells browsers and screen readers: "This is a self-contained piece of content that could make sense on its own." Each value card and job entry is independent content, so `<article>` is appropriate.

**Other options:**

- `<div>`: Generic container, no semantic meaning
- `<section>`: Groups related content but less specific than `<article>`

**Rule of thumb:** If you could reuse this content elsewhere and it would make sense, use `<article>`.

---

### Q: What's the difference between `className="sr-only"` and `aria-hidden="true"`?

**A:**

- **`className="sr-only"`**: Hides content **visually** but **keeps it** for screen readers
  - Example: "at" in "Frontend Developer **at** Company"
  - Visual users don't need it, but it helps screen reader users understand relationships

- **`aria-hidden="true"`**: Hides content **from screen readers** but **keeps it visually**
  - Example: Decorative bullet "•" or timeline dots
  - Sighted users see it, but it doesn't add information for screen reader users

**When to use each:**

- Use `sr-only` for helpful context that's visually obvious but not for screen readers
- Use `aria-hidden="true"` for decorative elements that don't convey information

---

### Q: Why `space-y-*` instead of `margin-bottom` on each item?

**A:** Tailwind's **spacing utilities** (like `space-y-4`) are more maintainable:

**With `space-y-4`:**

```jsx
<div className="space-y-4">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
  {/* Last paragraph automatically has no bottom margin */}
</div>
```

**Without `space-y-4`:**

```jsx
<div>
  <p className="mb-4">Paragraph 1</p>
  <p className="mb-4">Paragraph 2</p>
  <p>Paragraph 3</p> {/* Must remember to remove mb-4 */}
</div>
```

**Benefits:**

- **DRY** (Don't Repeat Yourself): One class instead of many
- **Automatic**: Handles first/last child spacing correctly
- **Easier to change**: Update one class instead of every child

---

### Q: Why use `map()` to render lists?

**A:** React doesn't let you use traditional loops like `for` or `while` inside JSX. The `map()` function transforms each item in an array into a React element.

**Example:**

```javascript
// Array of data
const values = [
  { id: 1, title: "User-Centered Design", icon: "👤" },
  { id: 2, title: "Clean Code", icon: "💻" },
];

// map() creates a <article> for each value
values.map((value) => (
  <article key={value.id}>
    <div>{value.icon}</div>
    <h3>{value.title}</h3>
  </article>
));

// Result:
// <article key={1}><div>👤</div><h3>User-Centered Design</h3></article>
// <article key={2}><div>💻</div><h3>Clean Code</h3></article>
```

**Why `key` is required:**

- React needs to track which items changed, were added, or removed
- Without keys, React might re-render everything inefficiently
- Use unique, stable values (like `id`) when possible

---

### Q: What's the timeline dot calculation `left-[-9px]`?

**A:** This centers the dot on the vertical timeline line.

**The math:**

```
Timeline line: 2px wide (border-l-2)
Dot: 16px wide (w-4), with 4px border on each side

We want the center of the dot aligned with the center of the line.

Timeline line center: 1px from left edge
Dot center: 8px from its left edge

To align centers:
- Dot's left edge should be at: 1px - 8px = -7px
- But the dot also has a 4px border, so: -7px - 2px = -9px

Result: left-[-9px]
```

**Visual:**

```
|     ← Timeline line (2px)
  ●   ← Dot needs to be centered on the line
```

Don't worry too much about this calculation—just know that it visually centers the dot!

---

### Q: Can I customize the timeline colors?

**A:** Absolutely! Here's what controls the colors:

**Timeline line:**

```jsx
className = "border-l-2 border-white/20";
```

- `border-white/20`: White at 20% opacity
- Change to `border-blue-500` for solid blue
- Change to `border-white/40` for more visible white

**Timeline dot:**

```jsx
className = "bg-white border-4 border-black";
```

- `bg-white`: White center
- `border-black`: Black ring
- Try `bg-blue-500 border-white` for blue dots with white rings

**Example customization:**

```jsx
{
  /* Blue timeline with white dots */
}
<li className="border-l-2 border-blue-500">
  <div className="bg-white border-4 border-blue-500"></div>
</li>;
```

---

## What's Next?

In **Class 10**, we'll complete the About page by adding:

1. **Education & Certifications** section (grid layout)
2. **Personal Interests** section (image cards)
3. **Call-to-Action** section (encouraging contact)

**Before Class 10:**

- Review your About page and make sure it looks good
- Customize the content in `about.js` to reflect your actual background
- Test on different screen sizes (mobile, tablet, desktop)
- Try modifying colors, spacing, or layout to make it your own

---

## Key Takeaways

1. **Semantic HTML matters**: Use `<article>`, `<header>`, `<time>`, `<ol>` for better accessibility and SEO

2. **Accessibility is built-in**:
   - `sr-only` for screen reader context
   - `aria-hidden` for decorative elements
   - `aria-label` for descriptive labels

3. **Conditional rendering**: Use `&&` to show content only when data exists

4. **Visual hierarchy**: Typography classes, spacing, and opacity create clear information structure

5. **Responsive design**: Grid layouts adapt from mobile (1 column) to desktop (2 columns)

6. **Separation of concerns**: Data lives in `about.js`, UI structure in `About.jsx`

**Congratulations!** You've built the first three sections of a professional About page with accessible, semantic, and visually appealing layouts. 🎉
