================================================================================
CLASS 1: SECTION.JSX STEP-BY-STEP GUIDE - SPACING COMPONENT
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide walks students through building Section.jsx, a component that
provides consistent vertical spacing between page sections. This introduces
the concept of "polymorphic components" (components that can render as
different HTML elements).

Students should create a new file: src/components/ui/Section.jsx

CONCEPTS TAUGHT:

- Polymorphic components (as prop)
- Rest parameters (...)
- Prop spreading
- Responsive spacing
- Semantic HTML flexibility

================================================================================
STEP 1: CREATE THE COMPONENT STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"Section is similar to Container, but it controls vertical spacing instead of
horizontal. Let's start with the basic structure."

## STUDENTS TYPE:

export default function Section() {
return (
<section></section>
);
}

## EXPLAIN:

- export default - Makes this component available to import
- function Section() - Standard React function component
- We'll add props next

## CURRENT CODE SHOULD LOOK LIKE:

export default function Section() {
return (
<section></section>
);
}

================================================================================
STEP 2: ADD BASIC PROPS - CLASSNAME AND CHILDREN
================================================================================

INSTRUCTOR SAYS:
"Like Container, Section needs className and children props."

## STUDENTS MODIFY THE FUNCTION TO:

export default function Section({ className = "", children }) {
return (
<section></section>
);
}

## EXPLAIN:

- { className = "", children } - Destructuring props
- className = "" - Default to empty string
- children - Content to wrap

## CURRENT CODE SHOULD LOOK LIKE:

export default function Section({ className = "", children }) {
return (
<section></section>
);
}

================================================================================
STEP 3: ADD THE 'AS' PROP FOR POLYMORPHISM
================================================================================

INSTRUCTOR SAYS:
"Here's something new: we want this component to render as different HTML
elements depending on what we need. Sometimes <section>, sometimes <div>,
maybe <article>. We'll use an 'as' prop for this."

## STUDENTS MODIFY THE PROPS TO:

export default function Section({ className = "", as = "section", children }) {
return (
<section></section>
);
}

## EXPLAIN:

- as = "section" - Default to <section> element
- But we can override it: <Section as="div"> would render a <div>
- This is called a "polymorphic component"

ASK STUDENTS:
"What HTML element will this render by default?"
(Answer: <section>)

"How could we make it render a <div> instead?"
(Answer: <Section as="div">)

## CURRENT CODE SHOULD LOOK LIKE:

export default function Section({ className = "", as = "section", children }) {
return (
<section></section>
);
}

================================================================================
STEP 4: ADD REST PARAMETERS
================================================================================

INSTRUCTOR SAYS:
"Sometimes we might want to pass other props like id, aria-label, etc. Let's
use rest parameters to collect any extra props."

## STUDENTS MODIFY THE PROPS TO:

export default function Section({ className = "", as = "section", children, ...props }) {
return (
<section></section>
);
}

## EXPLAIN:

- ...props - "Rest parameters" - collects all other props into an object
- If someone passes <Section id="hero" data-test="section">, those go in props
- We can then spread them onto the element

## SHOW EXAMPLE:

<Section id="about" aria-label="About section">
  Content
</Section>

props would be: { id: "about", "aria-label": "About section" }

## CURRENT CODE SHOULD LOOK LIKE:

export default function Section({ className = "", as = "section", children, ...props }) {
return (
<section></section>
);
}

================================================================================
STEP 5: CREATE THE COMPONENT VARIABLE
================================================================================

INSTRUCTOR SAYS:
"Now comes the clever part. We can't use a string directly as a JSX element,
so we'll assign the 'as' value to a variable with a capital letter."

## STUDENTS ADD BEFORE THE RETURN:

export default function Section({ className = "", as = "section", children, ...props }) {
const Component = as;
return (
<section></section>
);
}

## EXPLAIN:

- const Component = as; - Creates a variable holding the element type
- Capital letter is important! React treats capitals as components/elements
- Now we can use <Component> in JSX

## WHY THIS WORKS:

- as = "section" (lowercase string)
- Component = as (Component now holds "section")
- <Component /> renders as <section> because React knows capitalized names
  are dynamic

ASK STUDENTS:
"What will Component equal if as is 'div'?"
(Answer: Component will equal "div")

## CURRENT CODE SHOULD LOOK LIKE:

export default function Section({ className = "", as = "section", children, ...props }) {
const Component = as;
return (
<section></section>
);
}

================================================================================
STEP 6: RENDER THE COMPONENT WITH BASE CLASSES
================================================================================

INSTRUCTOR SAYS:
"Let's render the Component (which could be section, div, or any element) with
our responsive spacing classes."

## STUDENTS ADD TO THE RETURN:

export default function Section({ className = "", as = "section", children, ...props }) {
const Component = as;
return (
<Component className="py-16 sm:py-20 lg:py-24">

    </Component>

);
}

## EXPLAIN:

- <Component> - Renders as whatever 'as' prop specifies (default: section)
- py-16 - Padding top/bottom 4rem (64px) on mobile
- sm:py-20 - Padding top/bottom 5rem (80px) on small screens and up
- lg:py-24 - Padding top/bottom 6rem (96px) on large screens and up

## DEMONSTRATE SPACING:

Mobile (< 640px): 64px vertical padding
Tablet (≥ 640px): 80px vertical padding
Desktop (≥ 1024px): 96px vertical padding

This creates nice breathing room between sections!

## CURRENT CODE SHOULD LOOK LIKE:

export default function Section({ className = "", as = "section", children, ...props }) {
const Component = as;
return (
<Component className="py-16 sm:py-20 lg:py-24">

    </Component>

);
}

================================================================================
STEP 7: ADD DYNAMIC CLASSNAME
================================================================================

INSTRUCTOR SAYS:
"Just like Container, we want to allow custom classes. Let's add the className
prop to our template literal."

## STUDENTS MODIFY THE CLASSNAME TO:

<Component className={`py-16 sm:py-20 lg:py-24 ${className}`}>

</Component>

## EXPLAIN:

- Backticks `` for template literal
- ${className} inserts the custom className
- Space before ${className} for proper class separation

## CURRENT CODE SHOULD LOOK LIKE:

export default function Section({ className = "", as = "section", children, ...props }) {
const Component = as;
return (
<Component className={`py-16 sm:py-20 lg:py-24 ${className}`}>

    </Component>

);
}

================================================================================
STEP 8: SPREAD REMAINING PROPS
================================================================================

INSTRUCTOR SAYS:
"Now let's spread any extra props onto the Component so they get applied to
the actual HTML element."

## STUDENTS MODIFY THE COMPONENT TAG TO:

<Component className={`py-16 sm:py-20 lg:py-24 ${className}`} {...props}>

</Component>

## EXPLAIN:

- {...props} - Spreads all remaining props onto the element
- If props = { id: "hero", "data-section": "1" }, they get applied
- This makes the component very flexible

## SHOW EXAMPLE:

<Section id="about" data-test="section">
  Content
</Section>

Renders as:

<section class="py-16 sm:py-20 lg:py-24" id="about" data-test="section">
  Content
</section>

## CURRENT CODE SHOULD LOOK LIKE:

export default function Section({ className = "", as = "section", children, ...props }) {
const Component = as;
return (
<Component className={`py-16 sm:py-20 lg:py-24 ${className}`} {...props}>

    </Component>

);
}

================================================================================
STEP 9: RENDER CHILDREN
================================================================================

INSTRUCTOR SAYS:
"Finally, let's render the children inside the Component."

## STUDENTS ADD INSIDE THE COMPONENT:

<Component className={`py-16 sm:py-20 lg:py-24 ${className}`} {...props}>
{children}
</Component>

## EXPLAIN:

- {children} renders whatever content is passed between Section tags
- This is what makes it a wrapper component

## CURRENT CODE SHOULD LOOK LIKE (FINAL):

export default function Section({ className = "", as = "section", children, ...props }) {
const Component = as;
return (
<Component className={`py-16 sm:py-20 lg:py-24 ${className}`} {...props}>
{children}
</Component>
);
}

================================================================================
STEP 10: TEST THE COMPONENT
================================================================================

INSTRUCTOR SAYS:
"Let's test this with different element types to see polymorphism in action."

## TEST IN pages/Home.jsx:

import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";

export default function Home() {
return (
<>
<Section>
<Container>
<h1>First Section (renders as section element)</h1>
</Container>
</Section>

      <Section as="div" className="bg-white/5">
        <Container>
          <h2>Second Section (renders as div with custom class)</h2>
        </Container>
      </Section>

      <Section as="article" id="article-section">
        <Container>
          <h2>Third Section (renders as article with id)</h2>
        </Container>
      </Section>
    </>

);
}

## DEMONSTRATE IN BROWSER:

1. Save all files
2. Open DevTools
3. Inspect each section
4. Show first is <section>
5. Show second is <div> with bg-white/5 class
6. Show third is <article> with id="article-section"
7. Show all have the py-16 sm:py-20 lg:py-24 classes
8. Resize browser to show responsive padding

================================================================================
UNDERSTANDING POLYMORPHIC COMPONENTS
================================================================================

INSTRUCTOR EXPLAINS:
"Polymorphic means 'many forms'. This component can take many forms (HTML
elements) while keeping the same spacing behavior."

## WHY THIS IS USEFUL:

1. Semantic HTML - Use <section> for sections, <article> for articles
2. Flexibility - Same spacing, different element as needed
3. Accessibility - Proper HTML structure helps screen readers
4. Reusability - One component, many uses

## COMMON USAGE PATTERNS:

<Section>                    → <section> (default, semantic)
<Section as="div">           → <div> (when section isn't appropriate)
<Section as="article">       → <article> (for blog posts, cards)
<Section as="header">        → <header> (for page headers)
<Section as="footer">        → <footer> (for page footers)

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created a polymorphic Section component
✓ Learned about the 'as' prop pattern
✓ Used rest parameters (...props)
✓ Used prop spreading ({...props})
✓ Applied responsive vertical spacing
✓ Made component flexible for different HTML elements
✓ Maintained semantic HTML flexibility

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Polymorphic components (as prop)
- Rest parameters (...)
- Spread operator ({...props})
- Dynamic component rendering
- Responsive spacing with Tailwind
- Semantic HTML importance
- Component composition with Container

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why use 'as' prop instead of always using <section>?"
A: Different contexts need different HTML elements. A blog post should be

   <article>, a page header should be <header>, etc. This keeps HTML semantic.

Q: "What does ...props do exactly?"
A: It collects all props we didn't explicitly destructure into an object
called 'props'. Think of it as a "catch-all" for other props.

Q: "Why do we need const Component = as?"
A: JSX requires component names to be capitalized. We can't use <as>, but we
can use <Component> where Component is a variable.

Q: "Can we use any HTML element?"
A: Yes! "div", "section", "article", "header", "footer", "main", "aside",
"nav", etc. All work.

Q: "What if someone passes as="notanelement"?"
A: React will try to render a custom element <notanelement>. It won't error,
but it won't be valid HTML. Always use real HTML elements.

================================================================================
PATTERN: SECTION + CONTAINER
================================================================================

INSTRUCTOR SAYS:
"You'll almost always use Section and Container together. Here's the pattern:"

## STANDARD PATTERN:

<Section>
  <Container>
    {/* Your page content here */}
  </Container>
</Section>

## WHY?

- Section: Controls VERTICAL spacing (padding top/bottom)
- Container: Controls HORIZONTAL spacing (max-width, padding left/right)
- Together: Perfectly contained and spaced content!

## VISUAL:

┌─────────────────────────────────────────┐
│ Section (py-16 vertical padding) │ ← Breathing room
│ ┌───────────────────────────────────┐ │
│ │ Container (max-width, px padding) │ │ ← Contained content
│ │ Your content here │ │
│ └───────────────────────────────────┘ │
│ │ ← More breathing room
└─────────────────────────────────────────┘

================================================================================
REAL-WORLD USAGE EXAMPLES
================================================================================

Basic page section:

<Section>
  <Container>
    <h2>About Us</h2>
    <p>Content here</p>
  </Container>
</Section>

Hero section with custom styling:

<Section className="bg-gradient-to-b from-black to-gray-900">
  <Container>
    <h1>Welcome</h1>
  </Container>
</Section>

Article with custom element and id:

<Section as="article" id="blog-post">
  <Container>
    <h1>Blog Post Title</h1>
  </Container>
</Section>

================================================================================
WHAT'S NEXT
================================================================================

Next, we'll create:

- Button.jsx - A more complex polymorphic component with multiple variants
- We'll use this pattern (as prop) again in Button!

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Component is not defined"

- Make sure you added: const Component = as;
- Check it's inside the function, before the return

ERROR: "props is not defined"

- Make sure you have ...props in the destructuring
- Check syntax: { className, as, children, ...props }

SPACING NOT SHOWING:

- Inspect element to verify classes are applied
- Check you imported index.css in main.jsx
- Verify Tailwind is working

WRONG ELEMENT RENDERING:

- Check the 'as' prop value
- Inspect in DevTools to see actual element
- Default is "section" if no 'as' prop passed

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ Section.jsx file exists in src/components/ui/
□ No errors in code editor
□ Component exports correctly
□ Default renders as <section> element
□ as="div" renders as <div> element
□ Custom className works
□ Extra props (id, data-\*, etc.) are applied
□ Vertical padding is visible
□ Padding changes on different screen sizes

================================================================================
ADVANCED NOTE (FOR REFERENCE)
================================================================================

The pattern we're using:
const Component = as;
return <Component {...props} />

This is the foundation of many UI libraries like:

- Radix UI
- Headless UI
- Chakra UI
- Reach UI

You're learning industry-standard patterns!

================================================================================
END OF SECTION.JSX GUIDE
================================================================================
