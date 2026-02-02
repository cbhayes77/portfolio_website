================================================================================
CLASS 4: PROJECTS.JSX STEP-BY-STEP GUIDE - PORTFOLIO SHOWCASE SECTION
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide teaches students how to create the Projects section component, which
displays a grid of project cards with optional limit functionality and a
"View More" button. This component demonstrates dynamic heading levels,
conditional rendering, array mapping, and flexible props.

Students should create a new file: src/components/sections/Projects.jsx

NOTE: Students must have already completed:

- Container.jsx (Class 1)
- Section.jsx (Class 1)
- Button.jsx (Class 1)
- ProjectCard.jsx (Class 4)
- projects.js data file (Class 4)

CONCEPTS TAUGHT:

- Section component composition
- Array mapping with .map()
- Conditional logic with .slice()
- Dynamic heading components (h2, h3, etc.)
- Props with default values
- Conditional rendering (showing/hiding "View More" button)
- Semantic HTML lists with role="list"
- Accessible headings with aria-labelledby

WHAT WE'RE BUILDING IN CLASS 4:

- Projects section component that displays project cards
- Flexible props to control title, description, limit, and more
- Grid layout that's responsive (1 column → 2 columns → 3 columns)
- Optional "View More" button for limited displays
- Semantic list structure for accessibility

================================================================================
STEP 1: CREATE THE PROJECTS.JSX FILE AND COMPONENT STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"Now we'll build the Projects section component. This is a reusable section
that can show all projects or just a limited number - perfect for the homepage
(showing 6) and the portfolio page (showing all). Let's start by creating the
file and setting up the component structure with all our imports."

## STUDENTS CREATE FILE:

Create: src/components/sections/Projects.jsx

## STUDENTS TYPE:

// src/components/sections/Projects.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import Button from "../ui/Button.jsx";
import { projects } from "../../data/projects.js";

export default function Projects() {
return (
<Section>
<Container>
{/_ Projects will go here _/}
</Container>
</Section>
);
}

## EXPLAIN:

- We import Container, Section, and Button (our UI components)
- We import ProjectCard (the component we just built)
- We import { projects } from our data file (using named import with curly braces)
- Notice the import path: ../../data/ means go up two levels (out of sections, out of components) then into data
- We use the standard Section + Container pattern for page sections

## CURRENT CODE SHOULD LOOK LIKE:

// src/components/sections/Projects.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import Button from "../ui/Button.jsx";
import { projects } from "../../data/projects.js";

export default function Projects() {
return (
<Section>
<Container>
{/_ Projects will go here _/}
</Container>
</Section>
);
}

================================================================================
STEP 2: ADD PROPS WITH DEFAULT VALUES
================================================================================

INSTRUCTOR SAYS:
"This component needs to be flexible. Sometimes we want to show all projects
(like on the Portfolio page), and sometimes just a few (like on the homepage).
Let's add props with sensible defaults so the component works great out of the
box but can be customized when needed."

## STUDENTS MODIFY:

Replace the function signature:

export default function Projects({
limit,
showViewMore = true,
title = "My Portfolio",
description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada",
headingLevel = "h2",
headingId = "projects-heading",
}) {

## EXPLAIN:

- limit - No default (undefined), so by default shows ALL projects
- showViewMore = true - Show "View More" button by default
- title = "My Portfolio" - Default section heading
- description - Default description text (students can customize later)
- headingLevel = "h2" - Default to h2 (but can be h1, h3, etc. for semantic HTML)
- headingId = "projects-heading" - ID for accessibility (used with aria-labelledby)

ASK STUDENTS:
"Why would we want to change the headingLevel?"
(Answer: For semantic HTML structure - if this is the first heading on a page,
use h1; if it's a subsection, use h2 or h3)

## CURRENT CODE SHOULD LOOK LIKE:

// src/components/sections/Projects.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import Button from "../ui/Button.jsx";
import { projects } from "../../data/projects.js";

export default function Projects({
limit,
showViewMore = true,
title = "My Portfolio",
description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada",
headingLevel = "h2",
headingId = "projects-heading",
}) {
return (
<Section>
<Container>
{/_ Projects will go here _/}
</Container>
</Section>
);
}

================================================================================
STEP 3: ADD LOGIC TO HANDLE LIMITING PROJECTS
================================================================================

INSTRUCTOR SAYS:
"Before we display projects, we need to figure out which ones to show. If a
limit is provided, we'll use .slice() to get just that many projects. If no
limit is provided, we'll show them all. We'll also create a dynamic heading
component - this is a cool React pattern!"

## STUDENTS ADD:

Inside the function, before the return statement:

// Apply limit if specified, otherwise show all projects
const displayedProjects = limit ? projects.slice(0, limit) : projects;
const HeadingComponent = headingLevel;

## EXPLAIN:

- displayedProjects - Uses ternary operator (condition ? ifTrue : ifFalse)
- If limit exists (like 6), use projects.slice(0, limit) to get first 6 projects
- If limit is undefined, use all projects
- .slice(0, limit) - Creates a new array with items from index 0 to limit (not including limit)
- HeadingComponent = headingLevel - Stores the heading level (like "h2") in a variable
- This lets us render <HeadingComponent> which becomes <h2>, <h3>, etc. dynamically

## CURRENT CODE SHOULD LOOK LIKE:

// src/components/sections/Projects.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import Button from "../ui/Button.jsx";
import { projects } from "../../data/projects.js";

export default function Projects({
limit,
showViewMore = true,
title = "My Portfolio",
description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada",
headingLevel = "h2",
headingId = "projects-heading",
}) {
// Apply limit if specified, otherwise show all projects
const displayedProjects = limit ? projects.slice(0, limit) : projects;
const HeadingComponent = headingLevel;

return (
<Section>
<Container>
{/_ Projects will go here _/}
</Container>
</Section>
);
}

================================================================================
STEP 4: ADD THE SECTION ACCESSIBILITY AND HEADER
================================================================================

INSTRUCTOR SAYS:
"Let's add the section header with our dynamic heading and description. We'll
also add aria-labelledby to the Section for accessibility - this tells screen
readers which heading describes this section."

## STUDENTS MODIFY:

Update the return statement:

return (
<Section aria-labelledby={headingId}>
<Container>
{/_ Header _/}
<header className="text-center">
<HeadingComponent id={headingId} className="heading-section">
{title}
</HeadingComponent>
<p className="mt-2 text-white/80">{description}</p>
</header>

        {/* Grid layout will go here */}
      </Container>
    </Section>

);

## EXPLAIN:

- <Section aria-labelledby={headingId}> - Connects section to its heading for screen readers
- <header> - Semantic HTML element for the section's header
- className="text-center" - Centers the heading and description
- <HeadingComponent> - Renders as h2, h3, etc. based on headingLevel prop
- id={headingId} - Matches the aria-labelledby attribute
- className="heading-section" - Custom class from index.css for section headings
- {title} - Displays the title prop
- <p className="mt-2 text-white/80"> - Description with margin-top and slightly transparent white text

## CURRENT CODE SHOULD LOOK LIKE:

// src/components/sections/Projects.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import Button from "../ui/Button.jsx";
import { projects } from "../../data/projects.js";

export default function Projects({
limit,
showViewMore = true,
title = "My Portfolio",
description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada",
headingLevel = "h2",
headingId = "projects-heading",
}) {
// Apply limit if specified, otherwise show all projects
const displayedProjects = limit ? projects.slice(0, limit) : projects;
const HeadingComponent = headingLevel;

return (
<Section aria-labelledby={headingId}>
<Container>
{/_ Header _/}
<header className="text-center">
<HeadingComponent id={headingId} className="heading-section">
{title}
</HeadingComponent>
<p className="mt-2 text-white/80">{description}</p>
</header>

        {/* Grid layout will go here */}
      </Container>
    </Section>

);
}

================================================================================
STEP 5: ADD THE PROJECTS GRID WITH MAPPING
================================================================================

INSTRUCTOR SAYS:
"Now for the exciting part - let's display our projects! We'll use a semantic

<ul> list with role='list' for accessibility, and .map() to create a ProjectCard
for each project. The grid will be responsive: 1 column on mobile, 2 on tablets,
3 on desktops."

## STUDENTS ADD:

After the header, replace the comment with:

        {/* Grid layout */}
        <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {displayedProjects.map((p) => (
            <li key={p.id}>
              <ProjectCard image={p.image} title={p.title} blurb={p.blurb} href={p.href} />
            </li>
          ))}
        </ul>

## EXPLAIN:

- <ul> - Semantic unordered list (screen readers announce "list of X items")
- role="list" - Ensures screen readers recognize it as a list even with grid styling
- className breakdown:
  - mt-8 - Margin-top (spacing after header)
  - grid - CSS Grid layout
  - gap-6 sm:gap-8 - Spacing between grid items (6 on mobile, 8 on larger screens)
  - grid-cols-1 - 1 column by default (mobile)
  - sm:grid-cols-2 - 2 columns on small screens and up (tablets)
  - lg:grid-cols-3 - 3 columns on large screens (desktops)
- displayedProjects.map((p) => ...) - Loop through projects array
- Each project is called "p" (short variable name for mapping)
- <li key={p.id}> - List item with unique key (required by React for lists)
- <ProjectCard> - Renders our ProjectCard component with props from data
- We pass: image, title, blurb, and href from each project object

ASK STUDENTS:
"Why do we need a key prop on the <li>?"
(Answer: React uses keys to track which items change, are added, or removed.
Without keys, React can't efficiently update the list)

## CURRENT CODE SHOULD LOOK LIKE:

// src/components/sections/Projects.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import Button from "../ui/Button.jsx";
import { projects } from "../../data/projects.js";

export default function Projects({
limit,
showViewMore = true,
title = "My Portfolio",
description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada",
headingLevel = "h2",
headingId = "projects-heading",
}) {
// Apply limit if specified, otherwise show all projects
const displayedProjects = limit ? projects.slice(0, limit) : projects;
const HeadingComponent = headingLevel;

return (
<Section aria-labelledby={headingId}>
<Container>
{/_ Header _/}
<header className="text-center">
<HeadingComponent id={headingId} className="heading-section">
{title}
</HeadingComponent>
<p className="mt-2 text-white/80">{description}</p>
</header>

        {/* Grid layout */}
        <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {displayedProjects.map((p) => (
            <li key={p.id}>
              <ProjectCard image={p.image} title={p.title} blurb={p.blurb} href={p.href} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>

);
}

================================================================================
STEP 6: ADD CONDITIONAL "VIEW MORE" BUTTON
================================================================================

INSTRUCTOR SAYS:
"Finally, let's add a 'View More' button that only shows when we're displaying
a limited number of projects AND there are more projects to see. This uses
conditional rendering with && - a common React pattern."

## STUDENTS ADD:

After the </ul>, before the </Container>:

        {/* Bottom CTA - only show if there are more projects and showViewMore is true */}
        {showViewMore && limit && projects.length > limit && (
          <div className="mt-10 flex justify-center">
            <Button as="a" href="/portfolio" variant="secondary">
              View More of My Work
            </Button>
          </div>
        )}

## EXPLAIN:

- This is conditional rendering: {condition && (<JSX>)}
- If condition is true, show the JSX. If false, show nothing.
- Three conditions must ALL be true:
  1. showViewMore is true (prop)
  2. limit exists (meaning we're limiting the display)
  3. projects.length > limit (there are more projects than we're showing)
- <div className="mt-10 flex justify-center"> - Container with top margin and centered content
- <Button as="a" href="/portfolio"> - Button rendered as a link
- variant="secondary" - Uses secondary button style

ASK STUDENTS:
"What happens if we're on the portfolio page showing all projects?"
(Answer: The button won't show because limit would be undefined, so the
condition limit && ... would be false)

## CURRENT CODE SHOULD LOOK LIKE:

// src/components/sections/Projects.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import Button from "../ui/Button.jsx";
import { projects } from "../../data/projects.js";

export default function Projects({
limit,
showViewMore = true,
title = "My Portfolio",
description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada",
headingLevel = "h2",
headingId = "projects-heading",
}) {
// Apply limit if specified, otherwise show all projects
const displayedProjects = limit ? projects.slice(0, limit) : projects;
const HeadingComponent = headingLevel;

return (
<Section aria-labelledby={headingId}>
<Container>
{/_ Header _/}
<header className="text-center">
<HeadingComponent id={headingId} className="heading-section">
{title}
</HeadingComponent>
<p className="mt-2 text-white/80">{description}</p>
</header>

        {/* Grid layout */}
        <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {displayedProjects.map((p) => (
            <li key={p.id}>
              <ProjectCard image={p.image} title={p.title} blurb={p.blurb} href={p.href} />
            </li>
          ))}
        </ul>

        {/* Bottom CTA - only show if there are more projects and showViewMore is true */}
        {showViewMore && limit && projects.length > limit && (
          <div className="mt-10 flex justify-center">
            <Button as="a" href="/portfolio" variant="secondary">
              View More of My Work
            </Button>
          </div>
        )}
      </Container>
    </Section>

);
}

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created a flexible, reusable Projects section component
✓ Implemented props with sensible defaults for easy customization
✓ Used array .slice() to limit displayed projects
✓ Created a dynamic heading component (h2, h3, etc.)
✓ Built a responsive grid layout (1→2→3 columns)
✓ Used .map() to render multiple ProjectCard components from data
✓ Implemented conditional rendering for "View More" button
✓ Added semantic HTML with <header> and <ul role="list">
✓ Ensured accessibility with aria-labelledby and heading IDs

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Component props with default values
- Ternary operator for conditional logic (condition ? true : false)
- Array .slice() for limiting results
- Array .map() for rendering lists
- Dynamic component rendering (HeadingComponent)
- Conditional rendering with && operator
- Responsive grid layouts with Tailwind
- Semantic HTML lists (<ul>, <li>)
- Accessibility attributes (aria-labelledby, role="list")
- Component composition (Section + Container + ProjectCard + Button)

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why use displayedProjects instead of just mapping over projects?"
A: It separates the logic (what to show) from the presentation (how to show it).
Makes the code more readable and easier to modify later.

Q: "Can I change the grid to show 4 columns on large screens?"
A: Absolutely! Change lg:grid-cols-3 to lg:grid-cols-4. You can customize the
grid however you want.

Q: "What if I want the button to say something else?"
A: You'd need to add a buttonText prop with a default value, then use
{buttonText} inside the Button. That's a great enhancement!

Q: "Why is the description text so long?"
A: It's just a placeholder (Lorem ipsum). Students should replace it with
their own description later when they personalize the site.

Q: "What happens if there are no projects in the data file?"
A: The map would return an empty array, so nothing would render. You could add
a conditional to show a message like "No projects yet" if the array is empty.

================================================================================
WHAT'S NEXT
================================================================================

In the next guide (CLASS_4_HOME_UPDATE.md), we'll add this Projects section to
the Home page, showing a limited view of 6 projects with the "View More" button.

Later, when we build the Portfolio page, we'll use this same component but
without a limit to show all projects.

This demonstrates the power of reusable components - one component, multiple uses!

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Cannot read property 'map' of undefined"
FIX:

- Check that projects.js is exporting correctly (export const projects = [...])
- Verify the import path: import { projects } from "../../data/projects.js";
- Make sure projects.js has at least one project in the array

ERROR: "Warning: Each child in a list should have a unique key prop"
FIX:

- Ensure each <li> has key={p.id}
- Make sure each project in your data has a unique id property

SYMPTOM: Grid shows all in one column even on desktop
FIX:

- Check Tailwind classes are correct: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
- Verify your browser window is wide enough to trigger lg: breakpoint
- Check that index.css is being imported in main.jsx

SYMPTOM: "View More" button always shows (or never shows)
FIX:

- Check the conditions: showViewMore && limit && projects.length > limit
- Verify you're passing a limit prop when using the component
- If testing on homepage, make sure limit={6} is passed to <Projects>

SYMPTOM: Projects display but images don't load
FIX:

- Check image URLs in projects.js data file
- Verify internet connection (if using external URLs like Unsplash)
- Check browser console for image loading errors

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ File saved without errors in VS Code
□ No errors in terminal or browser console
□ Component renders section with heading and description
□ Projects display in a grid layout
□ Grid is responsive (test by resizing browser window)
□ Each project card displays correctly
□ "View More" button shows when limit is used
□ Clicking "View More" doesn't cause errors (even if /portfolio doesn't exist yet)
□ No React warnings about missing keys

================================================================================
END OF PROJECTS.JSX GUIDE (CLASS 4 - FULL VERSION)
================================================================================
