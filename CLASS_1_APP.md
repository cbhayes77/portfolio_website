================================================================================
CLASS 1: APP.JSX STEP-BY-STEP GUIDE - LAYOUT SHELL
================================================================================

OVERVIEW FOR INSTRUCTOR
-----------------------
This guide walks students through building App.jsx as the main layout wrapper.
For Class 1, we'll create a SIMPLIFIED version first (without Navbar, Footer, 
and ErrorBoundary). These will be added in Class 2.

Students should create a new file: src/App.jsx

NOTE: This is a progressive build. We start simple and will enhance it in 
later classes.

================================================================================
STEP 1: IMPORT OUTLET FROM REACT ROUTER
================================================================================

INSTRUCTOR SAYS:
"App.jsx is our layout wrapper. It needs to render child routes (our pages). 
React Router provides a component called Outlet for this."

STUDENTS TYPE:
--------------
import { Outlet } from "react-router-dom";


EXPLAIN:
--------
- Outlet is a placeholder component from React Router
- It renders whatever child route matches the current URL
- This is where our Home, About, Portfolio pages will appear

================================================================================
STEP 2: CREATE THE APP COMPONENT - BASIC STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"Let's create our App component. For now, we'll keep it very simple."

STUDENTS ADD:
-------------
export default function App() {
  return (
    <div></div>
  );
}


EXPLAIN:
--------
- export default - Makes this the default export of the file
- function App() - Standard React function component
- We'll fill in the return statement next

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div></div>
  );
}


================================================================================
STEP 3: ADD THE MAIN WRAPPER DIV
================================================================================

INSTRUCTOR SAYS:
"We need a container div that will hold our entire layout. We'll use flexbox 
to create a sticky footer layout."

STUDENTS MODIFY THE RETURN TO:
-------------------------------
export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      
    </div>
  );
}


EXPLAIN:
--------
- min-h-dvh - Minimum height of 100% of the viewport (dvh = dynamic viewport)
- flex - Enables flexbox layout
- flex-col - Stack children vertically (column direction)
- This ensures our footer sticks to the bottom even on short pages

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      
    </div>
  );
}


================================================================================
STEP 4: ADD PLACEHOLDER FOR NAVBAR
================================================================================

INSTRUCTOR SAYS:
"We'll add a Navbar in Class 2. For now, let's put a simple placeholder so we 
know where it will go."

STUDENTS ADD INSIDE THE DIV:
-----------------------------
export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Navbar will go here in Class 2 */}
      
    </div>
  );
}


EXPLAIN:
--------
- Comments in JSX use {/* comment */} syntax
- This reminds us where the Navbar will be added later
- For now, the navigation space will be empty

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Navbar will go here in Class 2 */}
      
    </div>
  );
}


================================================================================
STEP 5: ADD THE MAIN CONTENT AREA WITH OUTLET
================================================================================

INSTRUCTOR SAYS:
"Now let's add the main content area. This is where all our pages will render."

STUDENTS ADD:
-------------
<main id="main-content" className="flex-1">
  <Outlet />
</main>


EXPLAIN:
--------
- <main> - Semantic HTML5 element for main content
- id="main-content" - Unique identifier (useful for skip links, accessibility)
- flex-1 - Takes up all available space (pushes footer to bottom)
- <Outlet /> - This is where child routes (pages) render

ASK STUDENTS:
"What will render inside <Outlet /> when we visit the homepage?"
(Answer: The Home component, because we set it as the index route)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Navbar will go here in Class 2 */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      
    </div>
  );
}


================================================================================
STEP 6: ADD PLACEHOLDER FOR FOOTER
================================================================================

INSTRUCTOR SAYS:
"Finally, let's add a placeholder for the footer, which we'll also build in 
Class 2."

STUDENTS ADD:
-------------
{/* Footer will go here in Class 2 */}


EXPLAIN:
--------
- This marks where our footer will be added
- The footer will contain copyright, social links, etc.
- Because of flex-1 on main, the footer will always be at the bottom

CURRENT CODE SHOULD LOOK LIKE (FINAL FOR CLASS 1):
---------------------------------------------------
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Navbar will go here in Class 2 */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      {/* Footer will go here in Class 2 */}
    </div>
  );
}


================================================================================
STEP 7: TEST THE LAYOUT
================================================================================

INSTRUCTOR SAYS:
"Let's save this file and check our browser. We should see our Home page 
content without any navigation or footer yet."

WHAT STUDENTS SHOULD SEE:
--------------------------
- Home page content is visible
- No navbar or footer (that's expected!)
- Content takes up the full height of the page
- No console errors

DEMONSTRATE:
------------
1. Open browser DevTools (F12)
2. Inspect the <main> element
3. Show how flex-1 makes it expand to fill available space
4. Show the <Outlet /> component in React DevTools


================================================================================
UNDERSTANDING THE LAYOUT PATTERN
================================================================================

INSTRUCTOR EXPLAINS:
"This is a common layout pattern called 'Sticky Footer'. Let's understand how 
it works:"

DRAW ON BOARD OR EXPLAIN:
--------------------------
┌─────────────────────────┐
│  Navbar (future)        │ ← Fixed height
├─────────────────────────┤
│                         │
│  <main> (flex-1)        │ ← Expands to fill space
│  <Outlet />             │
│                         │
├─────────────────────────┤
│  Footer (future)        │ ← Fixed height
└─────────────────────────┘

- Parent div: flex flex-col (vertical stack)
- Main: flex-1 (takes all remaining space)
- Result: Footer always at bottom, even on short pages


================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created the main App component
✓ Set up Outlet for rendering child routes
✓ Created a sticky footer layout with flexbox
✓ Used semantic HTML (<main> element)
✓ Added placeholders for future components
✓ Tested that the layout works


================================================================================
KEY CONCEPTS COVERED
================================================================================

- Outlet component (React Router)
- Layout components vs page components
- Flexbox sticky footer pattern
- Semantic HTML (main element)
- Component composition
- JSX comments syntax
- Default exports


================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "What's the difference between App and a page like Home?"
A: App is a LAYOUT component (wrapper). Pages are CONTENT components. App 
   stays the same while pages swap in and out in the <Outlet />.

Q: "Why use <main> instead of <div>?"
A: <main> is semantic HTML. It tells browsers and screen readers "this is the 
   main content." It's better for accessibility and SEO.

Q: "What does flex-1 do exactly?"
A: It tells that element to take up all remaining space in a flex container. 
   This pushes the footer to the bottom.

Q: "Why min-h-dvh instead of min-h-screen?"
A: dvh (dynamic viewport height) accounts for mobile browser UI that appears/
   disappears. It's more reliable on mobile devices.

Q: "Can we have multiple <Outlet /> components?"
A: Technically yes, but typically you have one per layout level. Nested routes 
   can have their own Outlets.


================================================================================
WHAT'S NEXT
================================================================================

Later in Class 1, we'll:
- Create Container and Section components
- Create the Button component
- Create a simple Home page to test everything

In Class 2, we'll:
- Build the Navbar component
- Build the Footer component
- Update App.jsx to use them (replacing the placeholders)
- Add ErrorBoundary for error handling


================================================================================
FUTURE ENHANCEMENT (PREVIEW FOR INSTRUCTOR)
================================================================================

In Class 2, this will become:

import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

In Week 5, we'll add ErrorBoundary wrapper for error handling.


================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Outlet is not defined"
- Make sure you imported Outlet from react-router-dom
- Check spelling: Outlet (capital O)

BLANK PAGE:
- Make sure main.jsx is importing this App component
- Make sure you have a child route (Home) defined in main.jsx
- Check browser console for errors

FOOTER NOT AT BOTTOM:
- Verify parent div has min-h-dvh
- Verify parent div has flex and flex-col
- Verify main has flex-1


================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ App.jsx file exists in src folder
□ No errors in the code editor
□ No errors in browser console
□ Page loads successfully
□ Can see content from Home page
□ Inspecting the page shows proper HTML structure


================================================================================
END OF APP.JSX GUIDE (CLASS 1 VERSION)
================================================================================
