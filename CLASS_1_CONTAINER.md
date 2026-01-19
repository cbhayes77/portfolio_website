================================================================================
CLASS 1: CONTAINER.JSX STEP-BY-STEP GUIDE - LAYOUT WRAPPER
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide walks students through building Container.jsx, a reusable layout
component that provides consistent max-width and padding across all pages.

Students should create a new file: src/components/ui/Container.jsx

NOTE: Make sure students create the folder structure first:

- src/components/ui/

CONCEPTS TAUGHT:

- Props (children and className)
- Default parameters
- Template literals
- Responsive design with Tailwind
- Component reusability

================================================================================
STEP 1: CREATE THE COMPONENT STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"Container is a simple wrapper component. It centers content and adds
consistent padding. Let's start with the basic function."

## STUDENTS TYPE:

export default function Container() {
return (
<div></div>
);
}

## EXPLAIN:

- export default - Makes this component available to other files
- function Container() - Standard React function component
- We'll add parameters (props) next

## CURRENT CODE SHOULD LOOK LIKE:

export default function Container() {
return (
<div></div>
);
}

================================================================================
STEP 2: ADD PROPS - CHILDREN AND CLASSNAME
================================================================================

INSTRUCTOR SAYS:
"This component needs to accept two things: the content to wrap (children),
and optional styling (className)."

## STUDENTS MODIFY THE FUNCTION TO:

export default function Container({ className = "", children }) {
return (
<div></div>
);
}

## EXPLAIN:

- { className = "", children } - Destructuring props
- children - Whatever we put between <Container></Container> tags
- className = "" - Default empty string if no className is passed
- This is called "default parameters" in JavaScript

ASK STUDENTS:
"What happens if we don't pass a className prop?"
(Answer: It defaults to an empty string)

## CURRENT CODE SHOULD LOOK LIKE:

export default function Container({ className = "", children }) {
return (
<div></div>
);
}

================================================================================
STEP 3: ADD THE WRAPPER DIV
================================================================================

INSTRUCTOR SAYS:
"Now let's add the div that will wrap our content. This is where we apply our
layout styles."

## STUDENTS ADD TO THE RETURN:

export default function Container({ className = "", children }) {
return (
<div>

    </div>

);
}

## EXPLAIN:

- Simple div wrapper
- We'll add classes next to control the layout

## CURRENT CODE SHOULD LOOK LIKE:

export default function Container({ className = "", children }) {
return (
<div>

    </div>

);
}

================================================================================
STEP 4: ADD BASE CLASSES - MAX-WIDTH AND CENTERING
================================================================================

INSTRUCTOR SAYS:
"Let's add our layout classes. We want to center the container and limit its
maximum width."

## STUDENTS MODIFY THE DIV TO:

<div className="mx-auto w-full max-w-screen-xl">

</div>

## EXPLAIN:

- mx-auto - Margin left and right auto (centers the container)
- w-full - Width 100% (fills available space)
- max-w-screen-xl - Maximum width of 1280px (keeps content readable)

## DEMONSTRATE:

Draw on board or explain:
┌─────────────────────────────────────┐ ← Browser window (any width)
│ ┌─────────────────────────────┐ │
│ │ Container (max 1280px) │ │ ← Centered, never exceeds max-w
│ │ Content goes here │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────────┘

## CURRENT CODE SHOULD LOOK LIKE:

export default function Container({ className = "", children }) {
return (
<div className="mx-auto w-full max-w-screen-xl">

    </div>

);
}

================================================================================
STEP 5: ADD RESPONSIVE PADDING
================================================================================

INSTRUCTOR SAYS:
"Now let's add padding that adjusts based on screen size. Mobile gets less
padding, desktop gets more."

## STUDENTS MODIFY THE CLASSNAME TO:

<div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">

</div>

## EXPLAIN:

- px-4 - Padding left/right 1rem (16px) on mobile
- sm:px-6 - Padding left/right 1.5rem (24px) on small screens and up
- lg:px-8 - Padding left/right 2rem (32px) on large screens and up

ASK STUDENTS:
"What padding will show on a phone? A tablet? A desktop?"
(Answer: 16px / 24px / 32px respectively)

## DEMONSTRATE BREAKPOINTS:

Mobile (< 640px): px-4 (16px padding)
Tablet (≥ 640px): px-6 (24px padding)
Desktop (≥ 1024px): px-8 (32px padding)

## CURRENT CODE SHOULD LOOK LIKE:

export default function Container({ className = "", children }) {
return (
<div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">

    </div>

);
}

================================================================================
STEP 6: ADD DYNAMIC CLASSNAME WITH TEMPLATE LITERAL
================================================================================

INSTRUCTOR SAYS:
"We want to allow custom classes to be added when using this component. We'll
use a template literal to combine our base classes with any custom ones."

## STUDENTS MODIFY THE CLASSNAME TO:

<div className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}>

</div>

## EXPLAIN:

- Curly braces {} - Tells JSX "this is JavaScript, not a string"
- Backticks `` - Template literal (allows string interpolation)
- ${className} - Inserts the className prop value
- Space before ${className} - Ensures proper spacing between classes

## SHOW EXAMPLE:

If someone uses: <Container className="bg-red-500">
The div gets: "mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-red-500"

## CURRENT CODE SHOULD LOOK LIKE:

export default function Container({ className = "", children }) {
return (
<div className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}>

    </div>

);
}

================================================================================
STEP 7: RENDER CHILDREN
================================================================================

INSTRUCTOR SAYS:
"Finally, let's render the children. This is the content that will be wrapped
by our container."

## STUDENTS ADD INSIDE THE DIV:

<div className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}>
  {children}
</div>

## EXPLAIN:

- {children} - Renders whatever is passed between Container tags
- This is what makes it a "wrapper" component

## SHOW EXAMPLE:

<Container>
  <h1>Hello World</h1>
  <p>This is the children</p>
</Container>

The {children} would render the h1 and p elements.

## CURRENT CODE SHOULD LOOK LIKE (FINAL):

export default function Container({ className = "", children }) {
return (
<div className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}>
{children}
</div>
);
}

================================================================================
STEP 8: TEST THE COMPONENT
================================================================================

INSTRUCTOR SAYS:
"Let's test this component by using it somewhere. We can add it to our Home
page temporarily."

## TEMPORARY TEST IN pages/Home.jsx:

import Container from "../components/ui/Container.jsx";

export default function Home() {
return (
<Container>
<h1>Home Page</h1>
<p>Testing the Container component!</p>
</Container>
);
}

## DEMONSTRATE IN BROWSER:

1. Save all files
2. Open browser DevTools
3. Inspect the Container div
4. Show the Tailwind classes applied
5. Resize browser window to show responsive padding
6. Use DevTools to highlight padding (box model)

================================================================================
UNDERSTANDING THE COMPONENT
================================================================================

INSTRUCTOR EXPLAINS:
"This is a 'layout component' or 'wrapper component'. It doesn't have any
visual styling (like colors or borders), it just controls spacing and width."

## KEY POINTS:

1. Reusable - Use it on every page for consistency
2. Responsive - Automatically adjusts padding for different screens
3. Flexible - Can add custom classes via className prop
4. Simple - Does one thing well (contains and centers content)

## COMPARE:

WITHOUT Container:

- Content touches edges on mobile
- Inconsistent max-width across pages
- Have to repeat padding classes everywhere

WITH Container:

- Consistent spacing everywhere
- One place to update if we change padding
- Clean, readable code

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created a reusable Container component
✓ Learned about props (children and className)
✓ Used default parameters
✓ Applied responsive Tailwind classes
✓ Used template literals for dynamic classes
✓ Tested the component

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Props destructuring
- Default parameters
- Children prop
- Template literals (backticks)
- String interpolation with ${}
- Responsive design with Tailwind breakpoints
- Component composition
- Layout components vs content components

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why do we need both w-full and max-w-screen-xl?"
A: w-full makes it fill available space up to max-w-screen-xl. On small
screens, it's 100%. On large screens, it stops at 1280px.

Q: "What if we don't pass any children?"
A: The component still works, it just renders an empty div. Not useful, but
won't cause an error.

Q: "Can we pass multiple children?"
A: Yes! children can be one element, multiple elements, text, or any valid JSX.

Q: "What happens if className is not passed?"
A: It defaults to empty string (""), so the template literal just has a space
at the end. Harmless.

Q: "Why use template literals instead of concatenation?"
A: Template literals are cleaner and more readable than using + for string
concatenation.

================================================================================
REAL-WORLD USAGE EXAMPLES
================================================================================

Basic usage:
<Container>

  <h1>Page Title</h1>
</Container>

With custom className:
<Container className="mt-8">

  <p>Content with top margin</p>
</Container>

Nested components:
<Container>

  <Section>
    <h2>Section Title</h2>
  </Section>
</Container>

================================================================================
WHAT'S NEXT
================================================================================

Next, we'll create:

- Section.jsx - For consistent vertical spacing between page sections
- Button.jsx - A more complex component with variants

We'll use Container in almost every page we build!

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "className is not defined"

- Make sure you destructured it in the props: { className = "", children }
- Check spelling (camelCase: className not classname)

ERROR: "children is not defined"

- Make sure you included children in the destructuring
- Remember: children is a special prop in React

STYLES NOT APPLYING:

- Check that index.css is imported in main.jsx
- Make sure Tailwind is configured properly
- Inspect element in browser to see actual classes

CONTAINER TOO WIDE/NARROW:

- Check max-w-screen-xl is present
- Verify w-full is there
- Make sure no conflicting classes in className prop

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ Container.jsx file exists in src/components/ui/
□ No errors in code editor
□ Component exports correctly
□ Can import Container in another file
□ Classes are applied to the div (check in DevTools)
□ Padding changes when resizing browser
□ Content is centered on wide screens
□ Custom className prop works

================================================================================
BONUS: SHOW BEFORE/AFTER
================================================================================

WITHOUT Container (raw content):

<div>
  <h1>Title</h1>
  <p>Content touches the edges on mobile and spreads too wide on desktop!</p>
</div>

WITH Container:
<Container>

  <h1>Title</h1>
  <p>Content is nicely contained and responsive!</p>
</Container>

================================================================================
END OF CONTAINER.JSX GUIDE
================================================================================
