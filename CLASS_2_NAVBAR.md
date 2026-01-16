================================================================================
CLASS 2: BUILD NAVBAR COMPONENT (DESKTOP-ONLY VERSION)
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide walks students through building a simple, desktop-only Navbar.
This version teaches core concepts without overwhelming beginners with mobile
menus, accessibility features, or complex state management.

Students will create: src/components/layout/Navbar.jsx

CONCEPTS TAUGHT:

- Component structure and imports
- React Router NavLink (teaches active states from the start)
- Flexbox layout (three-column pattern)
- Container composition
- Button component reuse

WHAT WE'RE BUILDING (CLASS 2 - DESKTOP VERSION):

- Logo/brand on the left
- Navigation links in the center
- Contact button on the right
- Sticky header
- Active link highlighting

⚠️ EVOLUTION NOTE:
This desktop-only version is fully functional and teaches correct patterns.
In later classes (Class 10/11), we'll enhance it with:

- Mobile menu with slide-over
- Hamburger button
- Skip navigation link
- Advanced accessibility (ARIA attributes)
- useState for menu toggle
- MobileMenu component

We start simple to teach fundamentals, then add complexity progressively.

================================================================================
STEP 1: CREATE THE NAVBAR FILE
================================================================================

INSTRUCTOR SAYS:
"Let's create our Navbar component. This will appear at the top of every page
in our portfolio."

STUDENTS CREATE: src/components/layout/Navbar.jsx

## INITIAL CODE (TYPE OR PASTE):

export default function Navbar() {
return (
<header>
{/_ Navbar content will go here _/}
</header>
);
}

## EXPLAIN:

- export default - Makes this component available to import
- Navbar() - Component name (matches filename)
- <header> - Semantic HTML for page header
- Empty for now, we'll add content step by step

SAVE THE FILE.

================================================================================
STEP 2: IMPORT DEPENDENCIES
================================================================================

INSTRUCTOR SAYS:
"Our Navbar needs three things: Container for layout, Button for the CTA,
and NavLink for navigation with active states."

## STUDENTS ADD AT THE TOP OF THE FILE:

import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { NavLink } from "react-router-dom";

## EXPLAIN:

- Container - Keeps content centered with max-width (built in Class 1)
- Button - Reusable button component (built in Class 1)
- NavLink - React Router component that knows which page is active
- Why NavLink not Link? NavLink can style the active link automatically

ASK STUDENTS:
"What's the difference between Link and NavLink?"
(Answer: NavLink can detect and style the currently active route)

## CURRENT CODE SHOULD LOOK LIKE:

import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { NavLink } from "react-router-dom";

export default function Navbar() {
return (
<header>
{/_ Navbar content will go here _/}
</header>
);
}

================================================================================
STEP 3: ADD STICKY HEADER STYLING
================================================================================

INSTRUCTOR SAYS:
"Let's make the header sticky so it stays at the top when scrolling. We'll
also add a dark background with blur effect."

## STUDENTS UPDATE THE HEADER TAG:

<header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
  {/* Navbar content will go here */}
</header>

## EXPLAIN:

- sticky top-0 - Sticks to top of viewport when scrolling
- z-50 - High z-index so it stays above other content
- bg-black/70 - Black background at 70% opacity
- backdrop-blur - Blurs content behind the navbar (modern effect)

## CURRENT CODE:

import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { NavLink } from "react-router-dom";

export default function Navbar() {
return (
<header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
{/_ Navbar content will go here _/}
</header>
);
}

================================================================================
STEP 4: ADD CONTAINER WITH THREE-COLUMN LAYOUT
================================================================================

INSTRUCTOR SAYS:
"Now let's add the Container and set up a three-column layout: logo left,
nav center, button right."

## STUDENTS REPLACE THE COMMENT:

<header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
  <Container className="flex h-16 items-center">
    {/* Logo will go here */}
    {/* Nav links will go here */}
    {/* Contact button will go here */}
  </Container>
</header>

## EXPLAIN:

- Container - Centers content with max-width
- flex - Enables flexbox layout
- h-16 - Fixed height (64px = 16 \* 4px)
- items-center - Vertically centers children
- Three comments for our three sections

## CURRENT CODE:

import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { NavLink } from "react-router-dom";

export default function Navbar() {
return (
<header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
<Container className="flex h-16 items-center">
{/_ Logo will go here _/}
{/_ Nav links will go here _/}
{/_ Contact button will go here _/}
</Container>
</header>
);
}

================================================================================
STEP 5: ADD LOGO/BRAND (LEFT SECTION)
================================================================================

INSTRUCTOR SAYS:
"Let's add the logo/brand on the left side. We'll use flex-1 to make it
take up available space and push the nav to center."

## STUDENTS REPLACE THE FIRST COMMENT:

    <div className="flex-1 flex justify-start">
      <a href="/" className="flex items-center gap-2">
        <span className="text-white font-semibold">Your Name</span>
      </a>
    </div>

## EXPLAIN:

- flex-1 - Takes up available space (pushes nav to center)
- justify-start - Aligns content to the left
- <a href="/"> - Link to home page
- text-white font-semibold - White, bold text
- "Your Name" - Students should replace with their actual name

INSTRUCTOR SAYS:
"Everyone replace 'Your Name' with your actual name or portfolio brand."

## CURRENT CODE:

export default function Navbar() {
return (
<header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
<Container className="flex h-16 items-center">
<div className="flex-1 flex justify-start">
<a href="/" className="flex items-center gap-2">
<span className="text-white font-semibold">Your Name</span>
</a>
</div>
{/_ Nav links will go here _/}
{/_ Contact button will go here _/}
</Container>
</header>
);
}

================================================================================
STEP 6: ADD NAV STRUCTURE (CENTER SECTION)
================================================================================

INSTRUCTOR SAYS:
"Now let's add the navigation structure in the center. We'll use semantic
HTML with <nav> and <ul>."

## STUDENTS REPLACE THE SECOND COMMENT:

    <nav className="flex justify-center flex-none">
      <ul className="flex items-center gap-6 body-small">
        {/* Nav links will go here */}
      </ul>
    </nav>

## EXPLAIN:

- <nav> - Semantic HTML for navigation
- flex justify-center - Centers the nav items
- flex-none - Doesn't grow or shrink (stays centered)
- <ul> - Unordered list for links (semantic)
- gap-6 - Space between nav items
- body-small - Typography class from our design system

## CURRENT CODE:

export default function Navbar() {
return (
<header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
<Container className="flex h-16 items-center">
<div className="flex-1 flex justify-start">
<a href="/" className="flex items-center gap-2">
<span className="text-white font-semibold">Your Name</span>
</a>
</div>

        <nav className="flex justify-center flex-none">
          <ul className="flex items-center gap-6 body-small">
            {/* Nav links will go here */}
          </ul>
        </nav>

        {/* Contact button will go here */}
      </Container>
    </header>

);
}

================================================================================
STEP 7: ADD NAVIGATION LINKS
================================================================================

INSTRUCTOR SAYS:
"Let's add the navigation links using NavLink. This component will
automatically highlight the active page."

## STUDENTS REPLACE THE NAV LINKS COMMENT:

        <ul className="flex items-center gap-6 body-small">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition hover:text-white ${isActive ? "text-white" : ""}`
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `transition hover:text-white ${isActive ? "text-white" : ""}`
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `transition hover:text-white ${isActive ? "text-white" : ""}`
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>

## EXPLAIN:

- <li> - List item (semantic HTML)
- NavLink to="/about" - Links to the About page
- className with function - Dynamic classes based on active state
- ({ isActive }) => - Receives isActive prop from NavLink
- isActive ? "text-white" : "" - If active, make text white
- transition hover:text-white - Smooth transition on hover

ASK STUDENTS:
"What makes NavLink better than a regular link here?"
(Answer: It knows which page is active and can style it automatically)

## CURRENT CODE:

import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { NavLink } from "react-router-dom";

export default function Navbar() {
return (
<header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
<Container className="flex h-16 items-center">
<div className="flex-1 flex justify-start">
<a href="/" className="flex items-center gap-2">
<span className="text-white font-semibold">Your Name</span>
</a>
</div>

        <nav className="flex justify-center flex-none">
          <ul className="flex items-center gap-6 body-small">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition hover:text-white ${isActive ? "text-white" : ""}`
                }
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `transition hover:text-white ${isActive ? "text-white" : ""}`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `transition hover:text-white ${isActive ? "text-white" : ""}`
                }
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Contact button will go here */}
      </Container>
    </header>

);
}

================================================================================
STEP 8: ADD CONTACT BUTTON (RIGHT SECTION)
================================================================================

INSTRUCTOR SAYS:
"Finally, let's add a Contact button on the right side using our Button
component."

## STUDENTS REPLACE THE LAST COMMENT:

    <div className="flex-1 flex justify-end">
      <Button as="a" href="/contact" variant="primary" size="sm">
        Contact Me
      </Button>
    </div>

## EXPLAIN:

- flex-1 - Takes up available space
- justify-end - Aligns content to the right
- Button as="a" - Renders as a link
- href="/contact" - Links to contact page
- variant="primary" - Blue button style
- size="sm" - Small size (appropriate for navbar)

## FINAL CODE (CLASS 2 VERSION):

import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { NavLink } from "react-router-dom";

export default function Navbar() {
return (
<header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
<Container className="flex h-16 items-center">
<div className="flex-1 flex justify-start">
<a href="/" className="flex items-center gap-2">
<span className="text-white font-semibold">Your Name</span>
</a>
</div>

        <nav className="flex justify-center flex-none">
          <ul className="flex items-center gap-6 body-small">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition hover:text-white ${isActive ? "text-white" : ""}`
                }
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `transition hover:text-white ${isActive ? "text-white" : ""}`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `transition hover:text-white ${isActive ? "text-white" : ""}`
                }
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex-1 flex justify-end">
          <Button as="a" href="/contact" variant="primary" size="sm">
            Contact Me
          </Button>
        </div>
      </Container>
    </header>

);
}

================================================================================
STEP 9: TEST THE NAVBAR
================================================================================

INSTRUCTOR SAYS:
"Let's test our Navbar. Make sure your dev server is running."

IF SERVER IS NOT RUNNING:
Students run: npm run dev

STUDENTS SHOULD:

1. Open http://localhost:5173 in browser
2. See the Navbar at the top
3. Click navigation links (About, Portfolio, Resume)
4. Notice the active link turns white
5. Hover over links (should see smooth color transition)
6. Click Contact Me button
7. Scroll down (navbar should stick to top)

COMMON ISSUES TO CHECK:

- If navbar doesn't stick: Check sticky top-0 classes
- If links don't highlight: Check NavLink className function
- If nothing appears: Check imports and file paths

================================================================================
STEP 10: REVIEW THREE-COLUMN LAYOUT PATTERN
================================================================================

INSTRUCTOR DRAWS ON BOARD OR SHOWS DIAGRAM:

┌────────────────────────────────────────────────────────┐
│ [Logo] [Nav Nav Nav] [Contact Button] │
│ flex-1 flex-none flex-1 │
│ justify-start justify-center justify-end │
└────────────────────────────────────────────────────────┘

## EXPLAIN:

- Left section: flex-1 (expands), justify-start (left align)
- Center section: flex-none (fixed width), justify-center
- Right section: flex-1 (expands), justify-end (right align)

This pattern keeps the nav perfectly centered even as content changes!

KEY CONCEPT:
"The two flex-1 sections balance each other out, keeping the middle section
centered. This is a professional layout pattern used in many websites."

================================================================================
FINAL REVIEW
================================================================================

WHAT WE ACCOMPLISHED:

- ✅ Created a professional Navbar component
- ✅ Used NavLink for automatic active state styling
- ✅ Implemented three-column flexbox layout
- ✅ Added sticky header with backdrop blur
- ✅ Reused Container and Button components
- ✅ Used semantic HTML (header, nav, ul, li)

## FINAL CODE (CLASS 2 VERSION):

import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { NavLink } from "react-router-dom";

export default function Navbar() {
return (
<header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
<Container className="flex h-16 items-center">
<div className="flex-1 flex justify-start">
<a href="/" className="flex items-center gap-2">
<span className="text-white font-semibold">Your Name</span>
</a>
</div>

        <nav className="flex justify-center flex-none">
          <ul className="flex items-center gap-6 body-small">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition hover:text-white ${isActive ? "text-white" : ""}`
                }
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `transition hover:text-white ${isActive ? "text-white" : ""}`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `transition hover:text-white ${isActive ? "text-white" : ""}`
                }
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex-1 flex justify-end">
          <Button as="a" href="/contact" variant="primary" size="sm">
            Contact Me
          </Button>
        </div>
      </Container>
    </header>

);
}

================================================================================
EVOLUTION TO FINAL CODE (FOR INSTRUCTOR REFERENCE)
================================================================================

This Class 2 version is desktop-only and intentionally simplified. Here's how
it evolves to the final, production-ready version:

## CLASS 2 VERSION (Current):

- Desktop-only navigation
- Three-column flexbox layout
- NavLink with active states
- Sticky header with blur
- Contact button CTA

## CLASS 10/11 UPGRADE - ADD MOBILE MENU & ACCESSIBILITY:

We'll add comprehensive mobile and accessibility features:

1. IMPORT ADDITIONS:

---

import { useState } from "react";
import MobileMenu from "./MobileMenu.jsx";

2. EXTRACT LINKS TO CONSTANT:

---

const links = [
{ to: "/about", label: "About Me" },
{ to: "/portfolio", label: "Portfolio" },
{ to: "/resume", label: "Resume" },
];

3. ADD STATE FOR MOBILE MENU:

---

const [open, setOpen] = useState(false);

4. ADD SKIP NAVIGATION LINK (before header):

---

<a
href="#main-content"
className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60]
bg-white text-black px-4 py-2 rounded-md font-medium
focus:outline-none focus:ring-2 focus:ring-white/40"

> Skip to main content
> </a>

5. HIDE DESKTOP NAV ON MOBILE:

---

<ul className="hidden md:flex items-center gap-6 body-small">

6. UPDATE NAV TO USE LINKS ARRAY:

---

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

7. HIDE CONTACT BUTTON ON MOBILE, ADD HAMBURGER:

---

<div className="flex-1 flex justify-end">
  {/* Desktop CTA */}
  <Button
    as="a"
    href="/contact"
    variant="primary"
    size="sm"
    className="hidden md:inline-flex"
  >
    Contact Me
  </Button>

{/_ Mobile menu button _/}
<Button
variant="secondary"
size="sm"
className="md:hidden ml-2"
aria-label="Open menu"
aria-expanded={open ? "true" : "false"}
aria-controls="mobile-menu"
onClick={() => setOpen(true)}

>

    ☰

  </Button>
</div>

8. ADD MOBILE MENU COMPONENT (after Container):

---

<MobileMenu open={open} onClose={() => setOpen(false)} links={links} />

9. WRAP EVERYTHING IN FRAGMENT:

---

return (
<>
{/_ Skip link _/}
<header>
{/_ navbar content _/}
</header>
</>
);

10. ADD ARIA LABEL TO LOGO:

---

<a href="/" aria-label="Home — Your Name" className="flex items-center gap-2">

## FINAL COMPLETE CODE (Matches actual codebase):

import { useState } from "react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu.jsx";

const links = [
{ to: "/about", label: "About Me" },
{ to: "/portfolio", label: "Portfolio" },
{ to: "/resume", label: "Resume" },
];

export default function Navbar() {
const [open, setOpen] = useState(false);

return (
<>
{/_ Skip Navigation Link _/}
<a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60]
                   bg-white text-black px-4 py-2 rounded-md font-medium
                   focus:outline-none focus:ring-2 focus:ring-white/40"
      >
Skip to main content
</a>

      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
        <Container className="flex h-16 items-center">
          {/* Left: brand */}
          <div className="flex-1 flex justify-start">
            <a href="/" aria-label="Home — Your Name" className="flex items-center gap-2">
              <span className="text-white font-semibold">Your Name</span>
            </a>
          </div>

          {/* Center: nav */}
          <nav className="flex justify-center flex-none">
            <ul className="hidden md:flex items-center gap-6 body-small">
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

          {/* Right: CTA / mobile button */}
          <div className="flex-1 flex justify-end">
            {/* Desktop CTA */}
            <Button
              as="a"
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden md:inline-flex"
            >
              Contact Me
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="secondary"
              size="sm"
              className="md:hidden ml-2"
              aria-label="Open menu"
              aria-expanded={open ? "true" : "false"}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              ☰
            </Button>
          </div>
        </Container>

        {/* Mobile slide-over */}
        <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
      </header>
    </>

);
}

## TEACHING PROGRESSION:

- Class 2: Desktop-only navbar → Teaches core layout patterns
- Class 10/11: Add mobile menu → Teaches responsive design
- Class 10/11: Add accessibility → Teaches WCAG compliance
- Class 10/11: Add state management → Teaches useState hook
- Class 10/11: Extract MobileMenu → Teaches component composition

WHY WE WAIT:

- Students need to understand flexbox and NavLink first
- Mobile menus require useState (not taught until later)
- Accessibility concepts build on semantic HTML knowledge
- Component extraction makes sense after seeing the pattern
- Prevents overwhelming beginners with too many concepts

Each upgrade teaches specific new concepts without invalidating earlier work.
The desktop version is correct and functional - we're adding features, not
fixing mistakes.

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why use NavLink instead of regular Link?"
A: "NavLink gives us the isActive prop for free. We could track the active
page ourselves with useState and useLocation, but NavLink does it
automatically. It's built for navigation menus."

Q: "Can I add more navigation links?"
A: "Absolutely! Just copy one of the <li> blocks and change the to and text.
In later classes, we'll learn how to make this more efficient with .map()."

Q: "Why does the navbar have a blur effect?"
A: "backdrop-blur creates a frosted glass effect, which is a modern design
trend. It looks professional and helps the navbar stand out while still
showing content behind it slightly."

Q: "What if I don't want sticky navigation?"
A: "Just remove 'sticky top-0' from the header. But sticky navigation is
considered good UX - users can access navigation without scrolling back up."

Q: "Why three sections with flex-1, flex-none, flex-1?"
A: "This pattern keeps the center section perfectly centered. The two flex-1
sections balance each other, acting as equal-width spacers on both sides."

================================================================================
HOMEWORK/PRACTICE
================================================================================

SUGGESTED PRACTICE:

1. Change your name in the logo
2. Try adding a fourth navigation link
3. Remove sticky top-0 and see the difference when scrolling
4. Change the Contact button to say "Hire Me" or "Let's Talk"
5. Try different Button variants (secondary, outline)
6. Add a logo image instead of text (we'll learn this later)

CHALLENGE:
Try adding a subtle border to the bottom of the navbar:
className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10"

NEXT CLASS PREVIEW:
"Next class, we'll build the Footer component. It will use a similar pattern
but with different content - copyright, social links, and site links. Get
ready to practice component composition again!"

================================================================================
TROUBLESHOOTING
================================================================================

ISSUE: Navbar doesn't stick when scrolling
CHECK:

- Is sticky top-0 in the className?
- Is there enough content to scroll? (Add temporary content to test)

ISSUE: Active link doesn't turn white
CHECK:

- Using NavLink not Link?
- className is a function: ({ isActive }) =>
- Check the isActive ternary operator syntax

ISSUE: Links don't navigate
CHECK:

- Using 'to' not 'href' on NavLink
- Routes defined in main.jsx?
- Dev server running?

ISSUE: Button doesn't appear
CHECK:

- Button component imported correctly?
- Button.jsx exists in components/ui/?
- Check browser console for errors

ISSUE: Layout looks wrong
CHECK:

- All three sections present? (logo, nav, button)
- flex on Container?
- flex-1, flex-none, flex-1 on the three sections?

================================================================================
