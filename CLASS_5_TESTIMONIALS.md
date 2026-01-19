================================================================================
CLASS 5: TESTIMONIALS.JSX STEP-BY-STEP GUIDE - SECTION COMPONENT
================================================================================

OVERVIEW FOR INSTRUCTOR
-----------------------
This guide teaches students how to create the Testimonials section component,
which displays a grid of testimonial cards. This reinforces the pattern from
Projects.jsx (data → card → section) but in a slightly simpler form, helping
students recognize and internalize this common React pattern.

Students should create a new file: src/components/sections/Testimonials.jsx

NOTE: Students must have already completed:
- Container.jsx (Class 1)
- Section.jsx (Class 1)
- testimonials.js data file (Class 5 - previous guide)
- TestimonialCard.jsx (Class 5 - previous guide)

CONCEPTS TAUGHT:
- Section component composition (reinforcing Projects pattern)
- Array mapping with .map()
- Conditional logic with .slice() for limiting
- Dynamic heading components
- Responsive grid layouts
- Semantic HTML lists
- Accessibility with aria-labelledby

WHAT WE'RE BUILDING IN CLASS 5:
- Testimonials section that displays testimonial cards
- Optional limit prop to show subset of testimonials
- Responsive grid (1→2→3 columns, same as Projects)
- Semantic list structure for accessibility

NOTE: This is similar to Projects.jsx but simpler (no "View More" button,
fewer props). This reinforcement helps students recognize the pattern!

================================================================================
STEP 1: CREATE THE TESTIMONIALS.JSX FILE AND ADD IMPORTS
================================================================================

INSTRUCTOR SAYS:
"This section component will be very similar to Projects.jsx - that's
intentional! You'll recognize the pattern: import the data, import the card
component, map over the data, and display cards in a grid. This is a common
React pattern you'll use over and over."

STUDENTS CREATE FILE:
----------------------
Create: src/components/sections/Testimonials.jsx

STUDENTS TYPE:
--------------
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function Testimonials() {
  return (
    <Section>
      <Container>
        {/* Testimonials will go here */}
      </Container>
    </Section>
  );
}

EXPLAIN:
--------
- Import Container and Section - Our standard section pattern
- Import TestimonialCard - The component we just built
- Import { testimonials } - Named import from our data file
- Path ../../data/ - Go up two levels (out of sections, out of components), then into data
- Section + Container pattern - We use this for all page sections

ASK STUDENTS:
"Do you recognize this pattern from Projects.jsx?"
(Answer: Yes! Same imports structure, same Section + Container pattern.
This is a common React pattern for building page sections.)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function Testimonials() {
  return (
    <Section>
      <Container>
        {/* Testimonials will go here */}
      </Container>
    </Section>
  );
}

================================================================================
STEP 2: ADD PROPS FOR HEADING LEVEL AND LIMIT
================================================================================

INSTRUCTOR SAYS:
"Let's add two props: headingLevel so we can use h2, h3, etc. for proper
semantic HTML, and limit so we can show just a few testimonials on the
homepage (and all of them on other pages). We'll give them sensible defaults."

STUDENTS MODIFY:
----------------
Update the function signature:

export default function Testimonials({ headingLevel = "h2", limit }) {

EXPLAIN:
--------
- headingLevel = "h2" - Default to h2 (but can be changed for semantic HTML)
- limit - No default (undefined), so by default shows ALL testimonials
- These are the same props we used in Projects, but simpler (no title, description, etc.)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function Testimonials({ headingLevel = "h2", limit }) {
  return (
    <Section>
      <Container>
        {/* Testimonials will go here */}
      </Container>
    </Section>
  );
}

================================================================================
STEP 3: ADD LOGIC TO HANDLE LIMITING AND DYNAMIC HEADING
================================================================================

INSTRUCTOR SAYS:
"Before we render anything, let's set up our logic. If a limit is provided,
we'll use .slice() to get just that many testimonials. If not, we'll show all
of them. We'll also create a dynamic heading component that can be h2, h3, etc.
This is exactly the same pattern we used in Projects!"

STUDENTS ADD:
-------------
Inside the function, before the return statement:

  // Apply limit if specified, otherwise show all testimonials
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  const HeadingComponent = headingLevel;

EXPLAIN:
--------
- displayedTestimonials - Uses ternary operator: condition ? ifTrue : ifFalse
- If limit exists (like 3), slice the array to get first 3 testimonials
- If limit is undefined, use all testimonials
- .slice(0, limit) - Creates new array from index 0 to limit (not including limit)
- HeadingComponent = headingLevel - Store heading level for dynamic rendering
- This exact pattern was used in Projects.jsx!

ASK STUDENTS:
"What will displayedTestimonials be if we pass limit={3}?"
(Answer: An array with the first 3 testimonials from the testimonials array.)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function Testimonials({ headingLevel = "h2", limit }) {
  // Apply limit if specified, otherwise show all testimonials
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  const HeadingComponent = headingLevel;

  return (
    <Section>
      <Container>
        {/* Testimonials will go here */}
      </Container>
    </Section>
  );
}

================================================================================
STEP 4: ADD THE SECTION HEADER
================================================================================

INSTRUCTOR SAYS:
"Let's add the section heading and description. We'll use our dynamic
HeadingComponent and aria-labelledby for accessibility. The heading is
'Testimonials' and we'll add a friendly description."

STUDENTS MODIFY:
----------------
Update the return statement:

  return (
    <Section aria-labelledby="testimonials-heading">
      <Container>
        <header className="text-center">
          <HeadingComponent id="testimonials-heading" className="heading-section">
            Testimonials
          </HeadingComponent>
          <p className="mt-2 text-white/80">A few quotes from people I've worked for and a few I've worked with.</p>
        </header>

        {/* Grid will go here */}
      </Container>
    </Section>
  );

EXPLAIN:
--------
- <Section aria-labelledby="testimonials-heading"> - Links section to heading for screen readers
- <header className="text-center"> - Semantic HTML, centers the heading and description
- <HeadingComponent> - Renders as h2, h3, etc. based on headingLevel prop
- id="testimonials-heading" - Matches the aria-labelledby attribute
- className="heading-section" - Custom class from index.css
- <p className="mt-2 text-white/80"> - Description with spacing and transparent white text

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function Testimonials({ headingLevel = "h2", limit }) {
  // Apply limit if specified, otherwise show all testimonials
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  const HeadingComponent = headingLevel;

  return (
    <Section aria-labelledby="testimonials-heading">
      <Container>
        <header className="text-center">
          <HeadingComponent id="testimonials-heading" className="heading-section">
            Testimonials
          </HeadingComponent>
          <p className="mt-2 text-white/80">A few quotes from people I've worked for and a few I've worked with.</p>
        </header>

        {/* Grid will go here */}
      </Container>
    </Section>
  );
}

================================================================================
STEP 5: ADD THE TESTIMONIALS GRID WITH MAPPING
================================================================================

INSTRUCTOR SAYS:
"Now let's display the testimonials! We'll use a semantic <ul> list and map
over our displayedTestimonials array to create a TestimonialCard for each one.
The grid will be responsive: 1 column on mobile, 2 on tablets, 3 on desktops.
This is identical to how we did Projects!"

STUDENTS ADD:
-------------
After the header, replace the comment:

        <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {displayedTestimonials.map((t) => (
            <li key={t.id}>
              <TestimonialCard quote={t.quote} author={t.author} role={t.role} />
            </li>
          ))}
        </ul>

EXPLAIN:
--------
- <ul> - Semantic unordered list
- role="list" - Ensures screen readers recognize it as a list with grid styling
- className breakdown:
  * mt-8 - Margin-top for spacing after header
  * grid - CSS Grid layout
  * gap-6 sm:gap-8 - Spacing between cards (6 on mobile, 8 on larger screens)
  * grid-cols-1 - 1 column on mobile
  * sm:grid-cols-2 - 2 columns on small screens (tablets)
  * lg:grid-cols-3 - 3 columns on large screens (desktops)
- displayedTestimonials.map((t) => ...) - Loop through testimonials
- Each testimonial called "t" (short variable name)
- <li key={t.id}> - List item with unique key (required by React)
- <TestimonialCard> - Pass quote, author, and role as props

ASK STUDENTS:
"Why do we use 't' instead of 'testimonial'?"
(Answer: It's shorter and common in mapping functions. We could use
'testimonial' but 't' is more concise and readable in this context.)

DEMONSTRATE:
------------
"The grid is responsive:
- Mobile (< 640px): 1 column (all testimonials stack vertically)
- Tablet (640px+): 2 columns
- Desktop (1024px+): 3 columns

Try resizing your browser to see it in action!"

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function Testimonials({ headingLevel = "h2", limit }) {
  // Apply limit if specified, otherwise show all testimonials
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  const HeadingComponent = headingLevel;

  return (
    <Section aria-labelledby="testimonials-heading">
      <Container>
        <header className="text-center">
          <HeadingComponent id="testimonials-heading" className="heading-section">
            Testimonials
          </HeadingComponent>
          <p className="mt-2 text-white/80">A few quotes from people I've worked for and a few I've worked with.</p>
        </header>

        <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {displayedTestimonials.map((t) => (
            <li key={t.id}>
              <TestimonialCard quote={t.quote} author={t.author} role={t.role} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created a Testimonials section component
✓ Implemented props for heading level and limit
✓ Used .slice() to limit displayed testimonials
✓ Created dynamic heading component (h2, h3, etc.)
✓ Built responsive grid layout (1→2→3 columns)
✓ Used .map() to render TestimonialCard components from data
✓ Applied semantic HTML with <header> and <ul role="list">
✓ Ensured accessibility with aria-labelledby
✓ Reinforced the Data → Card → Section pattern from Projects

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Component props with default values
- Ternary operator for conditional logic
- Array .slice() for limiting results
- Array .map() for rendering lists
- Dynamic component rendering (HeadingComponent)
- Responsive grid layouts with Tailwind
- Semantic HTML lists (<ul>, <li>)
- Accessibility attributes (aria-labelledby, role="list")
- Component composition (Section + Container + TestimonialCard)
- Pattern recognition (same as Projects.jsx but simpler)

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "This looks almost exactly like Projects.jsx. Why?"
A: Great observation! This is a common React pattern:
   1. Import data from a file
   2. Import a card component
   3. Optionally limit the data
   4. Map over the data to create cards
   5. Display in a responsive grid
   Once you recognize this pattern, you can build sections quickly!

Q: "Why don't we have a 'View More' button like Projects?"
A: We kept this simpler for two reasons:
   1. Testimonials are shorter, so showing all isn't overwhelming
   2. It reinforces the pattern without being identical
   You could add a "View More" button if you want - use Projects as reference!

Q: "Can I change the heading from 'Testimonials' to something else?"
A: Right now, it's hardcoded. You could add a title prop like Projects has:
   title = "Testimonials" in the props, then use {title} instead of
   "Testimonials" in the JSX.

Q: "What if testimonials have different lengths and cards look uneven?"
A: That's natural and actually looks good! Real testimonials vary in length.
   If you want uniform height, you could add min-h-40 to the card class,
   but it's not necessary.

================================================================================
WHAT'S NEXT
================================================================================

Next, we'll build the FinalCTA section - a simple call-to-action that
encourages visitors to contact you. It's even simpler than this component
(no props, no data mapping) and will be a quick confidence builder!

After that, we'll add both Testimonials and FinalCTA to the Home page,
completing our main homepage!

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Cannot read property 'map' of undefined"
FIX:
- Check that testimonials.js exports correctly: export const testimonials = [...]
- Verify the import path: import { testimonials } from "../../data/testimonials.js"
- Make sure testimonials.js has at least one testimonial in the array

ERROR: "Warning: Each child in a list should have a unique key prop"
FIX:
- Ensure each <li> has key={t.id}
- Make sure each testimonial in data has a unique id property
- Check for typos: key={t.id} not key={t.ID} or key={testimonial.id}

SYMPTOM: Grid shows all in one column even on desktop
FIX:
- Check Tailwind classes: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
- Verify browser window is wide enough for lg: breakpoint (1024px+)
- Check that index.css is imported in main.jsx
- Inspect element in DevTools to see which breakpoint is active

SYMPTOM: Testimonials don't display or show [object Object]
FIX:
- Check that you're passing props correctly to TestimonialCard
- Verify: quote={t.quote} author={t.author} role={t.role}
- Make sure testimonials.js has these exact property names
- Check browser console for errors

SYMPTOM: Cards have no styling
FIX:
- Verify TestimonialCard has className="card-testimonial"
- Check that index.css has .card-testimonial class defined
- Make sure index.css is imported in main.jsx
- Clear browser cache and hard reload (Cmd+Shift+R or Ctrl+Shift+R)

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ File saved without errors in VS Code
□ No errors in terminal or browser console
□ Section renders with "Testimonials" heading
□ Description text displays below heading
□ Testimonial cards display in a grid
□ Grid is responsive (test by resizing browser window)
□ Each card shows quote, author, and role
□ No React warnings about missing keys
□ Component works with and without limit prop

================================================================================
PATTERN COMPARISON: PROJECTS VS TESTIMONIALS
================================================================================

INSTRUCTOR SAYS:
"Let's compare the two section components you've built:"

SIMILARITIES (The Core Pattern):
---------------------------------
✓ Both import data from a file
✓ Both import a card component
✓ Both use .slice() for limiting
✓ Both use .map() to render cards
✓ Both use the same responsive grid
✓ Both use semantic lists
✓ Both have dynamic heading components
✓ Both use Section + Container pattern

DIFFERENCES:
------------
Projects:
- More props (title, description, showViewMore, headingId)
- Has conditional "View More" button
- More complex (teaches more features)

Testimonials:
- Fewer props (just headingLevel, limit)
- No "View More" button
- Simpler (reinforces pattern)

LESSON:
-------
Once you know this pattern, you can build ANY section that displays a grid
of cards! Projects, testimonials, team members, services, features, etc.

The pattern is:
1. Data file (array of objects)
2. Card component (displays one item)
3. Section component (maps over data, displays cards in grid)
4. Add to page component

This is the foundation of modern React development!

================================================================================
END OF TESTIMONIALS.JSX GUIDE (CLASS 5 - SECTION COMPONENT)
================================================================================
