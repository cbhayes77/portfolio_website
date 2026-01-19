================================================================================
CLASS 3: HOME.JSX UPDATE - ADD TECHSTACK SECTION
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide walks students through adding the TechStack component to the Home
page. This is a simple update that demonstrates how to compose section
components on a page.

Students will update existing file: src/pages/Home.jsx

CONCEPTS TAUGHT:

- Importing section components
- Adding sections to pages
- Component composition
- Page structure with multiple sections

PREREQUISITES:
Students should have already:

- Built Home.jsx with hero section (Class 1)
- Built TechStack.jsx component (Class 3 - previous lesson)
- Built techstack.js data file (Class 3)

WHAT WE'RE ADDING:

- Import for TechStack component
- TechStack section below hero section
- Testing the addition

TIME ESTIMATE: 10-15 minutes

================================================================================
STEP 1: OPEN HOME.JSX
================================================================================

INSTRUCTOR SAYS:
"Let's open our Home page and add the TechStack section we just built. This
will make it visible on the homepage."

## STUDENTS OPEN:

src/pages/Home.jsx

## CURRENT CODE SHOULD START WITH:

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

NOTE FOR INSTRUCTOR:
If students added buttons in Class 1 (after building Button component), the
code will have Button imports and button elements. That's fine - we're just
adding TechStack below the hero section.

================================================================================
STEP 2: IMPORT TECHSTACK COMPONENT
================================================================================

INSTRUCTOR SAYS:
"First, let's import the TechStack component we just built. It's in the
sections folder."

## STUDENTS ADD AFTER EXISTING IMPORTS:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import TechStack from "../components/sections/TechStack.jsx";

## EXPLAIN:

- TechStack is a section component
- ../ goes up to src, then into components/sections/
- We import it just like we import UI components

ASK STUDENTS:
"What's the difference between a UI component and a section component?"
(Answer: UI components are small/reusable (Button, Container), section
components are larger page sections that compose UI components)

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import TechStack from "../components/sections/TechStack.jsx";

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
STEP 3: ADD TECHSTACK COMPONENT TO PAGE
================================================================================

INSTRUCTOR SAYS:
"Now let's add the TechStack component below our hero section. It's as simple
as adding <TechStack /> after the closing </Section> tag."

## STUDENTS ADD AFTER HERO SECTION:

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

  <TechStack />
</div>

## EXPLAIN:

- <TechStack /> - Self-closing tag (no children)
- Goes after hero Section but inside wrapper div
- TechStack has its own Section wrapper (from when we built it)
- This pattern lets us stack multiple sections on a page

## DEMONSTRATE:

1. Point out the structure: div wraps multiple sections
2. First section is hero, second is TechStack
3. Each section is independent
4. Easy to add more sections later

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import TechStack from "../components/sections/TechStack.jsx";

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

      <TechStack />
    </div>

);
}

================================================================================
STEP 4: SAVE AND TEST
================================================================================

INSTRUCTOR SAYS:
"Let's save and check the browser. You should now see your tech stack below
the hero section!"

## IN TERMINAL (IF NOT RUNNING):

npm run dev

## WHAT STUDENTS SHOULD SEE:

- Hero section at top (heading, description)
- Tech Stack section below
- Grid of 3 columns on mobile
- Responsive grid (4 columns on tablet, 5 on desktop)
- Colorful tech icons with labels
- Hover effect on icons (opacity changes)
- Clicking icons opens documentation in new tab

## DEMONSTRATE:

1. Save the file
2. Open browser to localhost:5173
3. Scroll down to see TechStack section
4. Show heading "My Tech Stack"
5. Show responsive grid layout
6. Hover over icons to show effect
7. Click an icon to show it opens documentation
8. Resize browser to show responsive columns (3 → 4 → 5)

ASK STUDENTS:
"How many tech items do you see?"
(Answer: Should match the number in techstack.js - probably 6)

================================================================================
STEP 5: INSPECT IN DEVTOOLS (OPTIONAL)
================================================================================

INSTRUCTOR SAYS:
"Let's look at how this works in DevTools to understand the structure better."

## DEMONSTRATE:

1. Open DevTools (F12 or Right-click → Inspect)
2. Find the TechStack section element
3. Show the grid container with class "grid grid-cols-3 sm:grid-cols-4..."
4. Highlight one tech item to show spacing
5. Show how grid gap creates space between items
6. Inspect an icon element
7. Show the inline style with color from data
8. Resize DevTools to trigger responsive breakpoints

## EXPLAIN:

- Grid creates equal-width columns
- Gap adds space between items automatically
- Each icon gets color from techstack.js data
- Responsive classes change column count at breakpoints

================================================================================
UNDERSTANDING PAGE STRUCTURE
================================================================================

INSTRUCTOR EXPLAINS:
"Let's visualize how our Home page is now structured."

## STRUCTURE:

<div>                           ← Page wrapper
  <Section>                     ← Hero section
    <Container>
      <h1>                      ← Heading
      <h2>                      ← Subheading
    </Container>
  </Section>

<TechStack /> ← Tech stack section
(Contains its own Section + Container)

</div>

## VISUAL LAYOUT:

┌────────────────────────────────────┐
│ Hero Section │
│ Heading + Subheading │
├────────────────────────────────────┤
│ Tech Stack Section │
│ Heading: "My Tech Stack" │
│ Grid: [Icon] [Icon] [Icon] ... │
└────────────────────────────────────┘

## FUTURE STRUCTURE (PREVIEW):

Later we'll add more sections:

- Projects section
- Testimonials section
- Contact section

Each one will be a component like <TechStack />!

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Imported TechStack section component
✓ Added TechStack to Home page
✓ Tested the addition in browser
✓ Verified responsive layout works
✓ Confirmed hover effects work
✓ Verified links open documentation
✓ Understood page composition pattern

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Importing section components
- Component composition on pages
- Multiple sections on one page
- Self-closing component tags
- Page structure patterns
- Testing responsive behavior
- Verifying data-driven rendering

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why doesn't TechStack need Container inside it?"
A: It does have Container! We built TechStack with Section and Container
inside it. Section components are self-contained.

Q: "Can I add more sections the same way?"
A: Yes! Import the component, then add <ComponentName /> where you want it.
Later we'll add Projects, Testimonials, etc.

Q: "The icons look different sizes - is that wrong?"
A: Some icons have different proportions. We set h-12 w-12 (48px square) but
the icon's design might not fill the whole square. This is normal.

Q: "Can I change the order of sections?"
A: Yes! Just move the components around in the JSX. Hero could go after
TechStack if you wanted (though that wouldn't make sense for UX).

Q: "Do I need to restart the dev server?"
A: No, Vite hot-reloads automatically. Just save and the browser updates!

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Cannot find module '../components/sections/TechStack.jsx'"
FIX:

- Verify TechStack.jsx exists in src/components/sections/
- Check import path uses correct ../ (up one level)
- Ensure filename is exactly TechStack.jsx (case-sensitive)

TECHSTACK NOT SHOWING ON PAGE:
FIX:

- Check <TechStack /> is inside the return statement
- Verify it's inside the wrapper <div>
- Check browser console for errors
- Make sure dev server is running (npm run dev)

ICONS NOT SHOWING:
FIX:

- This is a TechStack.jsx issue, not Home.jsx
- Go back to TechStack component and verify:
  - react-icons is installed
  - Icons are imported
  - iconMap is complete

GRID NOT RESPONSIVE:
FIX:

- This is a TechStack.jsx issue
- Verify grid classes in TechStack: grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5
- Resize browser to trigger breakpoints

PAGE LOOKS WRONG:
FIX:

- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
- Check browser console for errors
- Verify both Hero section and TechStack are rendering

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ TechStack component is imported
□ <TechStack /> is added to the page
□ No syntax errors in VS Code
□ Dev server running without errors
□ Home page loads in browser
□ Hero section visible at top
□ Tech Stack section visible below hero
□ Grid layout is responsive (resize browser to test)
□ Icons have correct colors
□ Hover effects work on icons
□ Clicking icons opens documentation in new tab
□ All tech items from techstack.js appear

================================================================================
NEXT STEPS
================================================================================

**In future classes, you'll add more sections the same way:**

Class 4: Projects section

- <Projects />

Class 5: Testimonials section

- <Testimonials />

Class 6: Contact/CTA section

- <FinalCTA />

**Each follows the same pattern:**

1. Import the component
2. Add <Component /> where you want it
3. Sections stack vertically

**Your Home.jsx will grow to:**

```
<div>
  <HeroSection />
  <TechStack />
  <Projects />
  <Testimonials />
  <FinalCTA />
</div>
```

Simple and clean!

================================================================================
CUSTOMIZATION IDEAS FOR STUDENTS
================================================================================

**Now:**

- Change TechStack heading text (edit in TechStack.jsx)
- Reorder sections (move TechStack above hero - see what happens!)
- Add comments showing where future sections will go

**For Homework:**

- Update techstack.js with your real tech stack
- Find and add more icons in TechStack.jsx
- Test with more tech items (10-15 technologies)

**Advanced (Later):**

- Add animations (fade in on scroll)
- Add section dividers
- Add different background colors per section
- Create an "About" section between hero and TechStack

================================================================================
FINAL CODE EXAMPLE
================================================================================

## COMPLETE HOME.JSX SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import TechStack from "../components/sections/TechStack.jsx";

export default function Home() {
return (
<div>
{/_ Hero Section _/}
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

      {/* Tech Stack Section */}
      <TechStack />

      {/* Future sections will go here:
          <Projects />
          <Testimonials />
          <FinalCTA />
      */}
    </div>

);
}

NOTE: Comments added for clarity - students can add these too!

================================================================================
END OF HOME.JSX UPDATE GUIDE (CLASS 3 - ADD TECHSTACK)
================================================================================
