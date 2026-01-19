================================================================================
CLASS 1: HOME.JSX STEP-BY-STEP GUIDE - HERO SECTION
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide walks students through building the Home page. For Class 1, we'll
create a SIMPLIFIED version with just the hero section. In later classes,
we'll add TechStack, Projects, Testimonials, and FinalCTA sections.

Students should create a new file: src/pages/Home.jsx

NOTE: Make sure the pages folder exists first (src/pages/)

WHAT WE'RE BUILDING IN CLASS 1:

- Basic Home page structure
- Hero section with heading and description
- Testing that the page renders

WHAT WE'LL ADD LATER:

- Buttons (later in Class 1 after we build Button component)
- Social links
- Profile image
- Other sections (Classes 2-3)

================================================================================
STEP 1: CREATE THE BASIC COMPONENT STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"Let's create our first page component. Every page is just a React component
that returns JSX. We'll start simple."

## STUDENTS TYPE:

export default function Home() {
return (
<div></div>
);
}

## EXPLAIN:

- export default - Makes this component available for import
- function Home() - Function component named Home
- Naming convention: Page components are capitalized

## CURRENT CODE SHOULD LOOK LIKE:

export default function Home() {
return (
<div></div>
);
}

================================================================================
STEP 2: IMPORT SECTION AND CONTAINER
================================================================================

INSTRUCTOR SAYS:
"Before we build the return, let's import the components we'll need."

## STUDENTS ADD AT THE TOP:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

## EXPLAIN:

- ../ means "go up one folder level" (from pages to src)
- components/ui/ is where we put our UI components
- We need Section for spacing and Container for width/padding

ASK STUDENTS:
"What does ../ mean in the import path?"
(Answer: Go up one folder level)

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function Home() {
return (
<div></div>
);
}

================================================================================
STEP 3: ADD A WRAPPER DIV
================================================================================

INSTRUCTOR SAYS:
"We'll need a wrapper to hold multiple sections. Let's use a simple div for
now."

## STUDENTS ADD TO THE RETURN:

export default function Home() {
return (
<div>

    </div>

);
}

## EXPLAIN:

- Simple wrapper div
- Later we'll add multiple sections inside this
- For now, we'll just have one hero section

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function Home() {
return (
<div>

    </div>

);
}

================================================================================
STEP 4: ADD THE HERO SECTION
================================================================================

INSTRUCTOR SAYS:
"Now let's add our first Section. This will be the hero - the first thing
visitors see."

## STUDENTS ADD INSIDE THE DIV:

<div>
  <Section>

  </Section>
</div>

## EXPLAIN:

- Section component provides vertical padding
- This will be our hero/intro section
- We'll add content inside next

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function Home() {
return (
<div>
<Section>

      </Section>
    </div>

);
}

================================================================================
STEP 5: ADD CONTAINER INSIDE SECTION
================================================================================

INSTRUCTOR SAYS:
"Remember the pattern: Section controls vertical spacing, Container controls
horizontal width and padding. Let's add Container inside Section."

## STUDENTS ADD:

<Section>
  <Container>

  </Container>
</Section>

## EXPLAIN:

- Section + Container pattern we discussed earlier
- Section: vertical padding
- Container: max-width and horizontal padding
- Together: perfectly contained content

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function Home() {
return (
<div>
<Section>
<Container>

        </Container>
      </Section>
    </div>

);
}

================================================================================
STEP 6: ADD MAIN HEADING
================================================================================

INSTRUCTOR SAYS:
"Let's add our main heading. This is the first thing visitors will read."

## STUDENTS ADD INSIDE CONTAINER:

<Container>
  <h1 className="heading-hero">
    Hi, my name is [Your Name]. I create things for the web
  </h1>
</Container>

## EXPLAIN:

- <h1> - Main heading (only one per page for SEO)
- className="heading-hero" - Custom class from our index.css
- Students should replace [Your Name] with placeholder or their name

ASK STUDENTS:
"How many <h1> tags should a page have?"
(Answer: Only one - it's the main heading for SEO)

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function Home() {
return (
<div>
<Section>
<Container>
<h1 className="heading-hero">
Hi, my name is [Your Name]. I create things for the web
</h1>
</Container>
</Section>
</div>
);
}

================================================================================
STEP 7: ADD SUBHEADING/DESCRIPTION
================================================================================

INSTRUCTOR SAYS:
"Let's add a description below the heading. This elaborates on who you are
and what you do."

## STUDENTS ADD AFTER THE H1:

<h1 className="heading-hero">
  Hi, my name is [Your Name]. I create things for the web
</h1>

<h2 className="mt-4 body-large">
  I'm a UX Designer and Frontend Developer passionate about creating
  beautiful, accessible, and user-friendly web experiences.
</h2>

## EXPLAIN:

- <h2> - Subheading (proper heading hierarchy)
- mt-4 - Margin top for spacing
- body-large - Custom class for larger body text
- This gives context about what you do

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function Home() {
return (
<div>
<Section>
<Container>
<h1 className="heading-hero">
Hi, my name is [Your Name]. I create things for the web
</h1>

          <h2 className="mt-4 body-large">
            I'm a UX Designer and Frontend Developer passionate about creating
            beautiful, accessible, and user-friendly web experiences.
          </h2>
        </Container>
      </Section>
    </div>

);
}

================================================================================
STEP 8: TEST THE PAGE
================================================================================

INSTRUCTOR SAYS:
"Let's save and test! Make sure your dev server is running and visit the
homepage."

## IN TERMINAL (IF NOT RUNNING):

npm run dev

## WHAT STUDENTS SHOULD SEE:

- Page loads at localhost:5173
- Hero section with vertical padding (from Section)
- Content centered with max-width (from Container)
- Heading and subheading visible
- Responsive padding that changes on resize

## DEMONSTRATE:

1. Show the page in browser
2. Open DevTools and inspect the Section
3. Show the py-16 sm:py-20 lg:py-24 classes
4. Inspect the Container
5. Show max-w-screen-xl and responsive px classes
6. Resize browser to show responsive behavior

================================================================================
STEP 9: ADD PLACEHOLDER FOR FUTURE CONTENT
================================================================================

INSTRUCTOR SAYS:
"Let's add a comment showing where we'll add buttons and other content later
in this class."

## STUDENTS ADD AFTER H2:

<h2 className="mt-4 body-large">
  I'm a UX Designer and Frontend Developer passionate about creating
  beautiful, accessible, and user-friendly web experiences.
</h2>

{/_ Buttons will go here after we build Button component _/}

## EXPLAIN:

- JSX comments: {/_ comment _/}
- Reminds us where to add content later
- Good practice to mark sections you'll expand

## CURRENT CODE SHOULD LOOK LIKE (FINAL FOR NOW):

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function Home() {
return (
<div>
<Section>
<Container>
<h1 className="heading-hero">
Hi, my name is [Your Name]. I create things for the web
</h1>

          <h2 className="mt-4 body-large">
            I'm a UX Designer and Frontend Developer passionate about creating
            beautiful, accessible, and user-friendly web experiences.
          </h2>

          {/* Buttons will go here after we build Button component */}
        </Container>
      </Section>
    </div>

);
}

================================================================================
UNDERSTANDING PAGE STRUCTURE
================================================================================

INSTRUCTOR EXPLAINS:
"Let's visualize what we've built:"

## STRUCTURE:

<div>                           ← Page wrapper
  <Section>                     ← Vertical padding (py-16/20/24)
    <Container>                 ← Max-width, horizontal padding
      <h1>                      ← Main heading
      <h2>                      ← Subheading
      {/* Future content */}
    </Container>
  </Section>
</div>

## VISUAL LAYOUT:

┌──────────────────────────────────────────┐
│ Section padding-top │
│ ┌────────────────────────────────────┐ │
│ │ Container (max-width, centered) │ │
│ │ │ │
│ │ Heading │ │
│ │ Subheading │ │
│ │ │ │
│ └────────────────────────────────────┘ │
│ Section padding-bottom │
└──────────────────────────────────────────┘

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created our first page component (Home)
✓ Used Section and Container together
✓ Added proper heading hierarchy (h1, h2)
✓ Applied custom typography classes
✓ Created a basic hero section
✓ Tested the page in the browser
✓ Set up structure for adding more content

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Page components vs UI components
- Import paths (../ for up one level)
- Section + Container pattern
- Heading hierarchy (h1 → h2 → h3, etc.)
- Custom CSS classes from index.css
- Component composition
- JSX comments syntax

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why not just use one big div with all the classes?"
A: Separation of concerns. Section handles vertical space, Container handles
horizontal. Each component does one thing well.

Q: "Can we use multiple Sections on one page?"
A: Absolutely! Most pages have 3-5+ sections (hero, about, projects, contact,
etc.). We'll add more later.

Q: "Where do heading-hero and body-large come from?"
A: They're defined in index.css (Tailwind custom classes). Check that file
to see the styles.

Q: "Why h2 for the description instead of p?"
A: It's a subheading that describes you, not just body text. It's part of
your intro hierarchy. You could use <p> if you prefer.

================================================================================
WHAT'S NEXT IN CLASS 1
================================================================================

After we build the Button component, we'll come back and add:

1. Call-to-action buttons (Check Out My Work, View Resume)
2. Social media links
3. Optional: Profile image

Then in later classes we'll add:

- TechStack section
- Projects section
- Testimonials section
- Final CTA section

================================================================================
ENHANCEMENT PREVIEW (AFTER BUTTON COMPONENT)
================================================================================

After Button.jsx is built, we'll add this where the comment is:

<div className="mt-8 flex gap-4">
  <Button as="a" href="/portfolio" variant="primary">
    Check Out My Work
  </Button>
  <Button as="a" href="/resume" variant="secondary">
    View My Resume
  </Button>
</div>

This will give visitors clear next steps!

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Cannot find module '../components/ui/Section.jsx'"

- Make sure Section.jsx exists in src/components/ui/
- Check the import path is correct
- Verify folder structure: src/components/ui/Section.jsx

PAGE IS BLANK:

- Check browser console for errors
- Make sure main.jsx imports and renders Home
- Verify dev server is running (npm run dev)

NO STYLING:

- Check index.css is imported in main.jsx
- Verify Tailwind is configured
- Inspect element to see if classes are applied

HEADING LOOKS WRONG:

- Check heading-hero class exists in index.css
- Verify the class name is spelled correctly
- Inspect element to see computed styles

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ Home.jsx file exists in src/pages/
□ No errors in code editor
□ No errors in browser console
□ Page loads successfully at localhost:5173
□ Heading and subheading are visible
□ Content is centered on the page
□ Content has padding on sides (from Container)
□ Content has padding top/bottom (from Section)
□ Text is responsive (readable on mobile and desktop)

================================================================================
CUSTOMIZATION IDEAS FOR STUDENTS
================================================================================

Students can personalize:

- Replace [Your Name] with their actual name
- Write their own description
- Change the text to match their style
- Later: Add their own photo
- Later: Add their own social links
- Later: Customize colors/spacing

================================================================================
END OF HOME.JSX GUIDE (CLASS 1 - BASIC VERSION)
================================================================================
