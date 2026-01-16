================================================================================
CLASS 2: FOOTER.JSX STEP-BY-STEP GUIDE - BASIC FOOTER
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide walks students through building Footer.jsx to match the final
codebase. We'll build a simple footer with brand, navigation, and copyright.

Students should create a new file: src/components/layout/Footer.jsx

CONCEPTS TAUGHT:

- Footer layout patterns
- Data-driven navigation (links array - same pattern as Navbar)
- NavLink for active state detection
- Current year with JavaScript Date
- Responsive layout with flexbox
- Semantic HTML (footer, nav elements)

WHAT WE'RE BUILDING:

- Brand/logo section
- Navigation links (matches navbar)
- Copyright with dynamic year
- Responsive two-section layout

FINAL CODE MATCHES:
This builds to match your exact Footer.jsx in the repository.

================================================================================
STEP 1: CREATE THE BASIC COMPONENT STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"Let's create our footer component. It will mirror our navbar structure but
in a footer format."

## STUDENTS TYPE:

export default function Footer() {
return (

);
}

## EXPLAIN:

- export default - Makes this component available to import
- function Footer() - Function component named Footer
- This is a layout component (lives in components/layout/)

## CURRENT CODE SHOULD LOOK LIKE:

export default function Footer() {
return (

);
}

================================================================================
STEP 2: IMPORT CONTAINER AND NAVLINK
================================================================================

INSTRUCTOR SAYS:
"We need Container for layout and NavLink for active link highlighting, just
like we used in the Navbar."

## STUDENTS ADD AT THE TOP:

import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

## EXPLAIN:

- Container - Our reusable layout wrapper
- NavLink - React Router component for navigation with active states
- Same imports pattern as Navbar (consistent!)

## CURRENT CODE SHOULD LOOK LIKE:

import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
return (

);
}

================================================================================
STEP 3: CREATE LINKS ARRAY
================================================================================

INSTRUCTOR SAYS:
"Let's create a links array - the same navigation structure we use in the
navbar. This keeps our navigation consistent across the site."

## STUDENTS ADD BEFORE THE RETURN:

export default function Footer() {
const links = [
{ to: "/about", label: "About Me" },
{ to: "/portfolio", label: "Portfolio" },
{ to: "/resume", label: "Resume" },
];

return (

);
}

## EXPLAIN:

- links array holds all navigation items
- Each link has `to` (path) and `label` (text)
- Same structure as Navbar (consistency!)
- Easy to add/remove/change links in one place

ASK STUDENTS:
"Why use an array instead of hardcoding each link?"
(Answer: Easier to maintain - change links in one place, keeps navbar and
footer synchronized)

## CURRENT CODE SHOULD LOOK LIKE:

import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
const links = [
{ to: "/about", label: "About Me" },
{ to: "/portfolio", label: "Portfolio" },
{ to: "/resume", label: "Resume" },
];

return (

);
}

================================================================================
STEP 4: CREATE FOOTER WRAPPER
================================================================================

INSTRUCTOR SAYS:
"Let's create the footer wrapper with semantic HTML and styling."

## STUDENTS ADD TO THE RETURN:

return (

  <footer className="border-t border-white/10 bg-black/70 backdrop-blur py-8 text-white/80">

  </footer>
);

## EXPLAIN:

- <footer> - Semantic HTML5 element
- border-t - Border only on top
- border-white/10 - Subtle 10% white border
- bg-black/70 - Semi-transparent black (70% opacity)
- backdrop-blur - Blur effect (glassmorphism)
- py-8 - Padding top and bottom (2rem)
- text-white/80 - Default text color at 80% opacity

## CURRENT CODE SHOULD LOOK LIKE:

import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
const links = [
{ to: "/about", label: "About Me" },
{ to: "/portfolio", label: "Portfolio" },
{ to: "/resume", label: "Resume" },
];

return (
<footer className="border-t border-white/10 bg-black/70 backdrop-blur py-8 text-white/80">

    </footer>

);
}

================================================================================
STEP 5: ADD CONTAINER
================================================================================

INSTRUCTOR SAYS:
"Add the Container to constrain width and add horizontal padding."

## STUDENTS ADD:

<footer className="border-t border-white/10 bg-black/70 backdrop-blur py-8 text-white/80">
  <Container>

  </Container>
</footer>

## EXPLAIN:

- Container provides max-width and responsive padding
- Footer content aligns with navbar and page content
- Keeps everything consistently aligned

## CURRENT CODE SHOULD LOOK LIKE:

import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
const links = [
{ to: "/about", label: "About Me" },
{ to: "/portfolio", label: "Portfolio" },
{ to: "/resume", label: "Resume" },
];

return (
<footer className="border-t border-white/10 bg-black/70 backdrop-blur py-8 text-white/80">
<Container>

      </Container>
    </footer>

);
}

================================================================================
STEP 6: CREATE MAIN LAYOUT DIV
================================================================================

INSTRUCTOR SAYS:
"Create a flex container that will hold the brand and navigation. On mobile
it stacks vertically, on desktop it's horizontal."

## STUDENTS ADD INSIDE CONTAINER:

<Container>
  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">

  </div>
</Container>

## EXPLAIN:

- flex - Flexbox layout
- flex-col - Stack vertically (mobile first)
- md:flex-row - Horizontal on medium screens and up
- md:items-center - Center items vertically on desktop
- gap-6 - 1.5rem spacing on mobile
- md:gap-0 - No gap on desktop (we'll use flex-1 for spacing)

## RESPONSIVE BEHAVIOR:

Mobile (< 768px): Desktop (≥ 768px):
┌──────────────┐ ┌──────────────────────────────┐
│ Brand │ │ Brand Navigation │
│ │ └──────────────────────────────┘
│ Navigation │
└──────────────┘

## CURRENT CODE SHOULD LOOK LIKE:

import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
const links = [
{ to: "/about", label: "About Me" },
{ to: "/portfolio", label: "Portfolio" },
{ to: "/resume", label: "Resume" },
];

return (
<footer className="border-t border-white/10 bg-black/70 backdrop-blur py-8 text-white/80">
<Container>
<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">

        </div>
      </Container>
    </footer>

);
}

================================================================================
STEP 7: ADD BRAND/LOGO SECTION
================================================================================

INSTRUCTOR SAYS:
"Add the brand section on the left. We'll use flex-1 to make it take up
available space and push navigation to the center."

## STUDENTS ADD INSIDE THE FLEX DIV:

<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
  <div className="flex-1 text-center md:text-left">
    <a href="/" className="text-white font-semibold text-lg">
      Joe Anonymous
    </a>
  </div>

</div>

## EXPLAIN:

- flex-1 - Takes available space, pushes nav to center
- text-center - Centered on mobile
- md:text-left - Left-aligned on desktop
- <a href="/"> - Link to homepage (not NavLink, always goes home)
- text-white font-semibold text-lg - Brand styling
- "Joe Anonymous" - Students will replace with their name

NOTE FOR STUDENTS:
"Replace 'Joe Anonymous' with your own name!"

## CURRENT CODE SHOULD LOOK LIKE:

import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
const links = [
{ to: "/about", label: "About Me" },
{ to: "/portfolio", label: "Portfolio" },
{ to: "/resume", label: "Resume" },
];

return (
<footer className="border-t border-white/10 bg-black/70 backdrop-blur py-8 text-white/80">
<Container>
<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
<div className="flex-1 text-center md:text-left">
<a href="/" className="text-white font-semibold text-lg">
Joe Anonymous
</a>
</div>

        </div>
      </Container>
    </footer>

);
}

================================================================================
STEP 8: ADD NAVIGATION WRAPPER
================================================================================

INSTRUCTOR SAYS:
"Now let's add the navigation section. We'll use flex-none so it doesn't grow
or shrink - it stays at its natural size."

## STUDENTS ADD AFTER THE BRAND DIV:

<div className="flex-1 text-center md:text-left">
  <a href="/" className="text-white font-semibold text-lg">
    Joe Anonymous
  </a>
</div>

<nav className="flex-none" aria-label="Footer navigation">
  <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">

  </ul>
</nav>

## EXPLAIN:

- <nav> - Semantic element for navigation
- flex-none - Doesn't grow/shrink, stays at natural size
- aria-label="Footer navigation" - Accessibility label
- <ul> - Unordered list (semantic for nav links)
- flex flex-col - Stack vertically on mobile
- md:flex-row - Horizontal on desktop
- items-center - Center all items
- gap-4 md:gap-6 - Responsive spacing between links
- text-sm - Small text size

## CURRENT CODE SHOULD LOOK LIKE:

import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
const links = [
{ to: "/about", label: "About Me" },
{ to: "/portfolio", label: "Portfolio" },
{ to: "/resume", label: "Resume" },
];

return (
<footer className="border-t border-white/10 bg-black/70 backdrop-blur py-8 text-white/80">
<Container>
<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
<div className="flex-1 text-center md:text-left">
<a href="/" className="text-white font-semibold text-lg">
Joe Anonymous
</a>
</div>

          <nav className="flex-none" aria-label="Footer navigation">
            <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">

            </ul>
          </nav>
        </div>
      </Container>
    </footer>

);
}

================================================================================
STEP 9: MAP THROUGH LINKS ARRAY
================================================================================

INSTRUCTOR SAYS:
"Now we'll use .map() to create navigation links from our links array. This
is a data-driven approach - the same pattern we'll use throughout the project."

## STUDENTS ADD INSIDE THE <ul>:

<ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
  {links.map((link) => (
    <li key={link.to}>
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          `transition hover:text-white ${isActive ? "text-white" : ""}`
        }
      >
        {link.label}
      </NavLink>
    </li>
  ))}
</ul>

## EXPLAIN:

- {links.map((link) => (...))} - Loop through links array
- key={link.to} - Unique key for React (required for lists)
- <NavLink> - React Router component with active state
- to={link.to} - Path from the link object
- className function - Returns different classes based on isActive
- isActive ? "text-white" : "" - Full white if active, default if not
- transition hover:text-white - Smooth hover effect
- {link.label} - Display text from link object

ASK STUDENTS:
"What does .map() do?"
(Answer: Creates a new array by transforming each item - here we're creating

<li> elements from link objects)

"Why do we need the key prop?"
(Answer: React uses it to track which items changed - it should be unique)

## CURRENT CODE SHOULD LOOK LIKE:

import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
const links = [
{ to: "/about", label: "About Me" },
{ to: "/portfolio", label: "Portfolio" },
{ to: "/resume", label: "Resume" },
];

return (
<footer className="border-t border-white/10 bg-black/70 backdrop-blur py-8 text-white/80">
<Container>
<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
<div className="flex-1 text-center md:text-left">
<a href="/" className="text-white font-semibold text-lg">
Joe Anonymous
</a>
</div>

          <nav className="flex-none" aria-label="Footer navigation">
            <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `transition hover:text-white ${isActive ? "text-white" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>

);
}

================================================================================
STEP 10: ADD COPYRIGHT SECTION
================================================================================

INSTRUCTOR SAYS:
"Finally, let's add the copyright section below the main footer content. We'll
use JavaScript to show the current year automatically."

## STUDENTS ADD AFTER THE FLEX DIV (STILL INSIDE CONTAINER):

<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
  {/* ...brand and navigation... */}
</div>

<div className="mt-6 pt-6 text-center">
  <p className="text-sm text-white/60">
    © {new Date().getFullYear()} Joe Anonymous. All rights reserved.
  </p>
</div>

## EXPLAIN:

- mt-6 - Margin top (spacing from nav section)
- pt-6 - Padding top (creates space with border effect)
- text-center - Center the copyright text
- text-sm - Small text
- text-white/60 - 60% opacity (dimmed)
- {new Date().getFullYear()} - Current year (updates automatically!)
- new Date() - Creates date object with current date
- .getFullYear() - Extracts just the year (2024, 2025, etc.)

ASK STUDENTS:
"What will this show in 2025?"
(Answer: © 2025 Joe Anonymous. All rights reserved.)

"Why use JavaScript instead of typing 2024?"
(Answer: So we never have to update it - it changes automatically each year!)

================================================================================
FINAL CODE FOR FOOTER.JSX (MATCHES YOUR CODEBASE)
================================================================================

import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
const links = [
{ to: "/about", label: "About Me" },
{ to: "/portfolio", label: "Portfolio" },
{ to: "/resume", label: "Resume" },
];

return (
<footer className="border-t border-white/10 bg-black/70 backdrop-blur py-8 text-white/80">
<Container>
{/_ Main footer content - similar to navbar layout but vertical on mobile _/}
<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
{/_ Left: Brand _/}
<div className="flex-1 text-center md:text-left">
<a href="/" className="text-white font-semibold text-lg">
Joe Anonymous
</a>
</div>

          {/* Center: Navigation */}
          <nav className="flex-none" aria-label="Footer navigation">
            <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => `transition hover:text-white ${isActive ? "text-white" : ""}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Copyright line - centered */}
        <div className="mt-6 pt-6 text-center">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Joe Anonymous. All rights reserved.</p>
        </div>
      </Container>
    </footer>

);
}

================================================================================
✅ THIS CODE EXACTLY MATCHES YOUR FOOTER.JSX FILE
================================================================================

## WHAT WE'VE ACCOMPLISHED

✓ Created footer matching your exact codebase
✓ Data-driven navigation with links array
✓ NavLink for active state detection
✓ Responsive layout (mobile-first)
✓ Dynamic copyright year
✓ Semantic HTML (footer, nav elements)
✓ Consistent with Navbar structure
✓ Accessibility features (aria-label)

## KEY CONCEPTS COVERED

- Data-driven components (.map() over arrays)
- NavLink vs regular Link
- Active state styling
- Responsive flexbox layouts
- Mobile-first design
- Dynamic content with JavaScript
- Semantic HTML
- Component consistency (footer mirrors navbar)

## COMMON STUDENT QUESTIONS

Q: "Why use .map() instead of writing each link manually?"
A: Easier to maintain! Change/add/remove links in one place (the array).
Plus, we use the same links array pattern in Navbar for consistency.

Q: "What's flex-1 and flex-none?"
A: flex-1 means "grow to fill space". flex-none means "stay at natural size".
This creates the layout: [flex-1 (brand)] [flex-none (nav)]

Q: "Why NavLink instead of regular <a> tags?"
A: NavLink detects which page you're on and styles the active link. Regular
<a> tags don't know which page is active.

Q: "Could we add social media links here?"
A: Sure! But the final codebase doesn't include them. Social links appear
in the Home page hero section instead.

## TROUBLESHOOTING

ERROR: "Cannot find module 'react-router-dom'"

- Make sure react-router-dom is installed
- Check import spelling: { NavLink } from "react-router-dom"

LINKS NOT HIGHLIGHTING:

- Make sure using NavLink not Link
- Check className is a function: ({ isActive }) => ...
- Verify route paths match exactly

LAYOUT NOT RESPONSIVE:

- Check md:flex-row is present
- Test at different screen sizes
- Use browser DevTools device toolbar

MAP NOT WORKING:

- Check links array is defined before return
- Verify key prop is present on <li>
- Make sure using curly braces: {links.map(...)}

## TESTING CHECKLIST

□ Footer.jsx file exists in src/components/layout/
□ No errors in code editor
□ No errors in browser console
□ Footer appears at bottom of page
□ Brand name displays (Joe Anonymous)
□ Three navigation links appear
□ Links change to white on hover
□ Active link is white
□ Copyright shows current year
□ On mobile: stacked vertically, centered
□ On desktop: horizontal layout
□ Footer is imported and used in App.jsx

## CUSTOMIZATION

Students should personalize:

- Replace "Joe Anonymous" with their name (2 places!)
- Verify copyright shows their name
- Confirm links match their navbar links

================================================================================
END OF FOOTER.JSX GUIDE (CORRECTED - MATCHES YOUR CODEBASE)
================================================================================
