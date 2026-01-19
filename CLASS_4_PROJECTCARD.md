================================================================================
CLASS 4: PROJECTCARD.JSX STEP-BY-STEP GUIDE - PROJECT CARD COMPONENT
================================================================================

OVERVIEW FOR INSTRUCTOR
-----------------------
This guide walks students through building the ProjectCard component - a
reusable card that displays project information. This introduces card design
patterns, props usage, and hover effects.

Students should create a new file: src/components/ui/ProjectCard.jsx

NOTE: The ui folder should already exist from Class 1

CONCEPTS TAUGHT:
- Card component patterns
- Props destructuring ({ image, title, blurb, href })
- Article semantic HTML
- Image handling with alt text
- Aspect ratio containers
- Hover effects and transitions
- Tailwind utility classes for cards
- Focus states for accessibility

PREREQUISITES:
Students should have already built:
- Container.jsx (Class 1)
- Section.jsx (Class 1)
- Understanding of props (from previous classes)

WHAT WE'RE BUILDING:
- Reusable project card component
- Image with aspect ratio
- Project title and description
- "View Details" link
- Hover and focus effects
- Fixed height card (440px)

TIME ESTIMATE: 35-40 minutes

================================================================================
STEP 1: CREATE THE COMPONENT FILE
================================================================================

INSTRUCTOR SAYS:
"Let's build our first card component. Cards are everywhere in modern web
design - they're containers that group related information and make it
interactive."

STUDENTS CREATE FILE:
---------------------
src/components/ui/ProjectCard.jsx

STUDENTS TYPE:
--------------
export default function ProjectCard() {
  return (
    <div></div>
  );
}


EXPLAIN:
--------
- This is a UI component (small, reusable)
- Lives in components/ui/ folder
- Will be used by the Projects section component
- Takes props to display different projects

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function ProjectCard() {
  return (
    <div></div>
  );
}


================================================================================
STEP 2: ADD PROPS
================================================================================

INSTRUCTOR SAYS:
"Our card needs data to display. We'll add props for the image, title,
description, and link."

STUDENTS MODIFY THE FUNCTION:
------------------------------
export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <div></div>
  );
}


EXPLAIN:
--------
- { image, title, blurb, href } - Destructuring props
- image - Project screenshot URL
- title - Project name
- blurb - Short description
- href - Link to project detail page
- These come from our projects.js data!

ASK STUDENTS:
"Where will these prop values come from?"
(Answer: From the projects.js data file we just created)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <div></div>
  );
}


================================================================================
STEP 3: CHANGE DIV TO ARTICLE
================================================================================

INSTRUCTOR SAYS:
"Instead of a generic div, let's use semantic HTML. Each card represents a
self-contained piece of content, so we'll use <article>."

STUDENTS MODIFY THE RETURN:
----------------------------
export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <article></article>
  );
}


EXPLAIN:
--------
- <article> - Semantic HTML for self-contained content
- Better for SEO and accessibility
- Screen readers understand this is an article
- Each project card is an independent piece of content

ASK STUDENTS:
"Why use <article> instead of <div>?"
(Answer: Semantic meaning - helps search engines and screen readers understand
         the content structure)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <article></article>
  );
}


================================================================================
STEP 4: ADD CARD STYLING CLASSES
================================================================================

INSTRUCTOR SAYS:
"Let's add Tailwind classes to make this look like a card with hover effects."

STUDENTS ADD CLASSES TO ARTICLE:
---------------------------------
<article className="group card-project h-[440px] card-interactive hover:shadow-lg hover:shadow-black/20">
  
</article>


EXPLAIN:
--------
- group - Allows hover effects on children
- card-project - Custom card class from index.css
- h-[440px] - Fixed height (440 pixels)
- card-interactive - Custom class for interactive cards
- hover:shadow-lg - Large shadow on hover
- hover:shadow-black/20 - Shadow color with opacity

DEMONSTRATE:
------------
1. Explain "group" allows child elements to respond to parent hover
2. Show custom classes in index.css (card-project, card-interactive)
3. Explain h-[440px] uses arbitrary values in Tailwind

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <article className="group card-project h-[440px] card-interactive hover:shadow-lg hover:shadow-black/20">
      
    </article>
  );
}


================================================================================
STEP 5: ADD IMAGE CONTAINER
================================================================================

INSTRUCTOR SAYS:
"Let's add a container for the project image. We'll use aspect ratio to keep
images consistent."

STUDENTS ADD INSIDE ARTICLE:
-----------------------------
<article className="group card-project h-[440px] card-interactive hover:shadow-lg hover:shadow-black/20">
  <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
    {/* Image will go here */}
  </div>
</article>


EXPLAIN:
--------
- aspect-[4/3] - Maintains 4:3 aspect ratio (landscape)
- w-full - Full width of card
- overflow-hidden - Crops image if too large
- border-b - Border on bottom
- border-white/10 - White border with 10% opacity

ASK STUDENTS:
"Why use aspect-[4/3] instead of setting height?"
(Answer: Aspect ratio keeps proportions consistent even if container width
         changes. Images won't look stretched or squished.)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <article className="group card-project h-[440px] card-interactive hover:shadow-lg hover:shadow-black/20">
      <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
        {/* Image will go here */}
      </div>
    </article>
  );
}


================================================================================
STEP 6: ADD IMAGE ELEMENT
================================================================================

INSTRUCTOR SAYS:
"Now let's add the actual image using the image prop."

STUDENTS REPLACE THE COMMENT:
------------------------------
<div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
  <img
    src={image}
    alt={`Screenshot of ${title} project showing the main interface and features`}
    className="h-full w-full object-cover hover-scale-subtle"
    loading="lazy"
  />
</div>


EXPLAIN:
--------
- src={image} - Uses the image prop (URL from data)
- alt - Descriptive alt text (accessibility!)
- {`Screenshot of ${title}...`} - Template literal combines text + title
- h-full w-full - Fill container
- object-cover - Crop to fit (maintains aspect ratio)
- hover-scale-subtle - Custom hover scale effect from index.css
- loading="lazy" - Lazy load (performance optimization)

DEMONSTRATE:
------------
1. Show how {image} gets value from props
2. Explain alt text importance for screen readers
3. Show template literal syntax with backticks
4. Explain object-cover vs object-contain

ASK STUDENTS:
"Why is alt text important?"
(Answer: Accessibility for screen readers, SEO, shows if image fails to load)

COMMON MISTAKE:
Students forget the $ in ${title}.
Fix: Template literals need ${variable} not just {variable}

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <article className="group card-project h-[440px] card-interactive hover:shadow-lg hover:shadow-black/20">
      <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
        <img
          src={image}
          alt={`Screenshot of ${title} project showing the main interface and features`}
          className="h-full w-full object-cover hover-scale-subtle"
          loading="lazy"
        />
      </div>
    </article>
  );
}


================================================================================
STEP 7: ADD CONTENT CONTAINER
================================================================================

INSTRUCTOR SAYS:
"Below the image, we need a container for the text content - title, blurb,
and link."

STUDENTS ADD AFTER IMAGE DIV:
------------------------------
<div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
  <img
    src={image}
    alt={`Screenshot of ${title} project showing the main interface and features`}
    className="h-full w-full object-cover hover-scale-subtle"
    loading="lazy"
  />
</div>

<div className="flex h-[calc(440px-(440px*0.75))] flex-col p-4">
  {/* Content will go here */}
</div>


EXPLAIN:
--------
- flex - Flexbox layout
- h-[calc(...)] - Calculated height (total height minus image height)
- 440px total, image is 75% (aspect ratio), so content gets 25%
- flex-col - Column direction (stack vertically)
- p-4 - Padding all around (16px)

DEMONSTRATE:
------------
Show math: 440px total - 330px image (75%) = 110px for content

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <article className="group card-project h-[440px] card-interactive hover:shadow-lg hover:shadow-black/20">
      <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
        <img
          src={image}
          alt={`Screenshot of ${title} project showing the main interface and features`}
          className="h-full w-full object-cover hover-scale-subtle"
          loading="lazy"
        />
      </div>

      <div className="flex h-[calc(440px-(440px*0.75))] flex-col p-4">
        {/* Content will go here */}
      </div>
    </article>
  );
}


================================================================================
STEP 8: ADD PROJECT TITLE
================================================================================

INSTRUCTOR SAYS:
"Let's add the project title using the title prop."

STUDENTS REPLACE THE COMMENT:
------------------------------
<div className="flex h-[calc(440px-(440px*0.75))] flex-col p-4">
  <h4 className="text-base font-semibold">{title}</h4>
</div>


EXPLAIN:
--------
- <h4> - Heading level 4 (appropriate for card titles)
- text-base - Base font size (16px)
- font-semibold - Semi-bold weight (600)
- {title} - Displays the title prop

ASK STUDENTS:
"Why h4 instead of h1 or h2?"
(Answer: h1 is page title, h2 is section heading, h3 might be subsection,
         h4 is appropriate for card titles in the hierarchy)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <article className="group card-project h-[440px] card-interactive hover:shadow-lg hover:shadow-black/20">
      <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
        <img
          src={image}
          alt={`Screenshot of ${title} project showing the main interface and features`}
          className="h-full w-full object-cover hover-scale-subtle"
          loading="lazy"
        />
      </div>

      <div className="flex h-[calc(440px-(440px*0.75))] flex-col p-4">
        <h4 className="text-base font-semibold">{title}</h4>
      </div>
    </article>
  );
}


================================================================================
STEP 9: ADD PROJECT BLURB
================================================================================

INSTRUCTOR SAYS:
"Now let's add the project description below the title."

STUDENTS ADD AFTER H4:
-----------------------
<h4 className="text-base font-semibold">{title}</h4>
<p className="mt-2 text-sm text-white/80 line-clamp-3">{blurb}</p>


EXPLAIN:
--------
- <p> - Paragraph for description
- mt-2 - Margin top (8px)
- text-sm - Small text (14px)
- text-white/80 - White with 80% opacity (slightly muted)
- line-clamp-3 - Limit to 3 lines, truncate with ellipsis
- {blurb} - Displays the blurb prop

DEMONSTRATE:
------------
1. Show how line-clamp-3 prevents overflow
2. If text is too long, it shows "..." at the end
3. Keeps card height consistent

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <article className="group card-project h-[440px] card-interactive hover:shadow-lg hover:shadow-black/20">
      <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
        <img
          src={image}
          alt={`Screenshot of ${title} project showing the main interface and features`}
          className="h-full w-full object-cover hover-scale-subtle"
          loading="lazy"
        />
      </div>

      <div className="flex h-[calc(440px-(440px*0.75))] flex-col p-4">
        <h4 className="text-base font-semibold">{title}</h4>
        <p className="mt-2 text-sm text-white/80 line-clamp-3">{blurb}</p>
      </div>
    </article>
  );
}


================================================================================
STEP 10: ADD LINK CONTAINER
================================================================================

INSTRUCTOR SAYS:
"We want the 'View Details' link to always stay at the bottom of the card,
even if the blurb is short. We'll use flexbox for this."

STUDENTS ADD AFTER THE PARAGRAPH:
----------------------------------
<h4 className="text-base font-semibold">{title}</h4>
<p className="mt-2 text-sm text-white/80 line-clamp-3">{blurb}</p>

<div className="mt-auto pt-3">
  {/* Link will go here */}
</div>


EXPLAIN:
--------
- mt-auto - Margin top auto (pushes to bottom in flex container)
- pt-3 - Padding top (12px) for spacing
- This creates a "sticky footer" effect in the card

DEMONSTRATE:
------------
1. Show how mt-auto works in flexbox
2. Explain parent has flex-col, so auto margin pushes down
3. Link will always be at bottom, regardless of blurb length

ASK STUDENTS:
"What does mt-auto do in a flex container?"
(Answer: Pushes the element to the opposite end - in this case, the bottom)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <article className="group card-project h-[440px] card-interactive hover:shadow-lg hover:shadow-black/20">
      <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
        <img
          src={image}
          alt={`Screenshot of ${title} project showing the main interface and features`}
          className="h-full w-full object-cover hover-scale-subtle"
          loading="lazy"
        />
      </div>

      <div className="flex h-[calc(440px-(440px*0.75))] flex-col p-4">
        <h4 className="text-base font-semibold">{title}</h4>
        <p className="mt-2 text-sm text-white/80 line-clamp-3">{blurb}</p>
        
        <div className="mt-auto pt-3">
          {/* Link will go here */}
        </div>
      </div>
    </article>
  );
}


================================================================================
STEP 11: ADD "VIEW DETAILS" LINK
================================================================================

INSTRUCTOR SAYS:
"Finally, let's add the link that takes users to the project detail page."

STUDENTS REPLACE THE COMMENT:
------------------------------
<div className="mt-auto pt-3">
  <a
    href={href}
    className="inline-block text-sm text-white/75 underline-offset-4 hover:underline
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
  >
    View Details →
  </a>
</div>


EXPLAIN:
--------
- <a href={href}> - Link using href prop
- inline-block - Allows padding/margin on inline element
- text-sm - Small text (14px)
- text-white/75 - White with 75% opacity
- underline-offset-4 - Space between text and underline
- hover:underline - Show underline on hover
- focus-visible - Focus styles for keyboard navigation
- → - Right arrow character (shows it's a link)

DEMONSTRATE:
------------
1. Show hover effect (underline appears)
2. Show focus state (ring appears when tabbing)
3. Explain accessibility (keyboard users can see focus)

CURRENT CODE SHOULD LOOK LIKE (FINAL):
---------------------------------------
export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <article className="group card-project h-[440px] card-interactive hover:shadow-lg hover:shadow-black/20">
      {/* Image */}
      <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
        <img
          src={image}
          alt={`Screenshot of ${title} project showing the main interface and features`}
          className="h-full w-full object-cover hover-scale-subtle"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex h-[calc(440px-(440px*0.75))] flex-col p-4">
        <h4 className="text-base font-semibold">{title}</h4>
        <p className="mt-2 text-sm text-white/80 line-clamp-3">{blurb}</p>
        
        {/* Footer link pinned to bottom */}
        <div className="mt-auto pt-3">
          <a
            href={href}
            className="inline-block text-sm text-white/75 underline-offset-4 hover:underline
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
          >
            View Details →
          </a>
        </div>
      </div>
    </article>
  );
}


NOTE: Comments added for clarity - students can add these too!

================================================================================
UNDERSTANDING CARD STRUCTURE
================================================================================

INSTRUCTOR EXPLAINS:
"Let's visualize the card structure we just built."

VISUAL LAYOUT:
--------------
┌────────────────────────────┐
│                            │
│      Project Image         │  ← aspect-[4/3], 75% of height
│     (330px height)         │
│                            │
├────────────────────────────┤
│ Title                      │  ← h4
│ Description text that      │  ← p (line-clamp-3)
│ might be truncated...      │
│                            │
│ View Details →             │  ← Link (mt-auto = bottom)
└────────────────────────────┘
    Total: 440px height

KEY LAYOUT FEATURES:
--------------------
1. Fixed height (440px) - All cards same size
2. Image fills 75% (4:3 aspect ratio)
3. Content fills 25% with flex-col layout
4. Link always at bottom (mt-auto)
5. Text truncates if too long (line-clamp-3)

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created reusable ProjectCard component
✓ Learned card design patterns
✓ Used props to accept dynamic data
✓ Implemented semantic HTML (<article>)
✓ Added responsive images with aspect ratio
✓ Created hover effects (shadow, image scale)
✓ Added accessibility features (alt text, focus states)
✓ Used flexbox for layout control
✓ Implemented "sticky footer" pattern (mt-auto)
✓ Added lazy loading for performance

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Card component patterns
- Props destructuring
- Semantic HTML (article, h4, p, a)
- Image aspect ratios (aspect-[4/3])
- Template literals (`${title}`)
- Alt text for accessibility
- Object-fit for images (object-cover)
- Lazy loading (loading="lazy")
- Flexbox layouts (flex-col, mt-auto)
- Calculated heights (calc())
- Line clamping (line-clamp-3)
- Hover effects (group, hover:)
- Focus states (focus-visible:)
- Tailwind utility classes

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why use a fixed height instead of letting it grow?"
A: Consistency. In a grid, we want all cards the same size. Fixed height
   prevents layout shifts and looks more professional.

Q: "What if my blurb is longer than 3 lines?"
A: line-clamp-3 truncates it with "...". Keep blurbs concise (1-2 sentences).
   Full details go on the project detail page.

Q: "Can I change the aspect ratio?"
A: Yes! aspect-[16/9] for widescreen, aspect-square for 1:1, etc. Just adjust
   the calc() formula too.

Q: "What's the arrow character?"
A: → is a Unicode right arrow. You can use > or even an icon instead.

Q: "Why focus-visible instead of focus?"
A: focus-visible only shows outline for keyboard navigation, not mouse clicks.
   Better UX - no outline flash when clicking.

Q: "Can I make the whole card clickable?"
A: Yes, you'd wrap the entire article in an <a> tag. Current approach is more
   flexible (could add other interactive elements later).

================================================================================
WHAT'S NEXT
================================================================================

Next, we'll build:
- Projects.jsx section component
- Will map over projects array
- Create a ProjectCard for each project
- Display cards in responsive grid
- Add to Home page

You'll see how one ProjectCard component creates multiple cards from data!

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "image is not defined"
FIX:
- Check props destructuring: { image, title, blurb, href }
- Verify you're using {image} in JSX (curly braces)

IMAGE NOT SHOWING:
FIX:
- Check src={image} has curly braces
- Verify image URL from data is valid
- Check browser console for 404 errors
- Test with a known good URL

CARD HEIGHT LOOKS WRONG:
FIX:
- Verify h-[440px] is on the <article>
- Check calc() formula for content div
- Make sure no extra padding/margin

TEXT OVERFLOWING:
FIX:
- Check line-clamp-3 is applied to <p>
- Verify parent has overflow handling
- Blurbs should be brief (1-2 sentences)

HOVER EFFECTS NOT WORKING:
FIX:
- Verify "group" class on <article>
- Check custom classes exist in index.css
- Try clearing browser cache

LINK NOT CLICKABLE:
FIX:
- Check href={href} has value
- Verify anchor <a> tag (not <button>)
- Inspect z-index (nothing covering link)

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ File exists at src/components/ui/ProjectCard.jsx
□ No syntax errors in VS Code
□ Component accepts all 4 props (image, title, blurb, href)
□ Uses semantic HTML (<article>, <h4>, <p>, <a>)
□ Image has descriptive alt text
□ Card has fixed height (440px)
□ Link pinned to bottom of card
□ Hover effects present (shadow, image scale)
□ Focus states work (tab to link, see ring)
□ Template literal works in alt text

================================================================================
CUSTOMIZATION IDEAS FOR STUDENTS
================================================================================

**Now:**
- Change card height (e.g., h-[500px])
- Adjust image aspect ratio (aspect-square, aspect-[16/9])
- Modify hover effects
- Change link text ("Learn More", "Read Case Study")

**Later:**
- Add tags/badges (React, TypeScript, etc.)
- Show project date
- Add favorite/bookmark icon
- Animate on scroll
- Add "New" badge for recent projects

**Advanced:**
- Make entire card clickable (wrap in <a>)
- Add multiple images (carousel)
- Show excerpt on hover
- Add loading skeleton

================================================================================
END OF PROJECTCARD.JSX GUIDE (CLASS 4 - PROJECT CARD COMPONENT)
================================================================================
