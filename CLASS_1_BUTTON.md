================================================================================
CLASS 1: BUTTON.JSX STEP-BY-STEP GUIDE - POLYMORPHIC BUTTON WITH VARIANTS
================================================================================

## OVERVIEW FOR INSTRUCTOR

Button.jsx is the most complex component in Class 1. It introduces:

- forwardRef (advanced React concept)
- Multiple variants (primary, secondary, link)
- Multiple sizes (sm, md, lg)
- Icons (left, right, icon-only)
- Polymorphic rendering (button vs anchor)
- Complex style composition

BUILD APPROACH: We'll build this in stages:

1. Basic button structure
2. Add variants
3. Add sizes
4. Add polymorphic "as" prop
5. Add icons
6. Add forwardRef (advanced)

Students should create: src/components/ui/Button.jsx

TIME ESTIMATE: This will take 30-45 minutes to build properly.

================================================================================
STAGE 1: BASIC BUTTON STRUCTURE
================================================================================

## STEP 1.1: CREATE BASIC COMPONENT

INSTRUCTOR SAYS:
"Button is more complex than our other components. Let's start simple and
build up the features."

## STUDENTS TYPE:

export default function Button() {
return (
<button>Button</button>
);
}

## CURRENT CODE:

export default function Button() {
return (
<button>Button</button>
);
}

================================================================================
STEP 1.2: ADD BASIC PROPS
================================================================================

INSTRUCTOR SAYS:
"Let's add the essential props: children (button text), className, and
variant (for different button styles)."

## STUDENTS MODIFY:

export default function Button({ variant = "primary", className = "", children }) {
return (
<button>Button</button>
);
}

## EXPLAIN:

- variant = "primary" - Default button style (we'll have primary, secondary, link)
- className = "" - Custom classes
- children - Button text/content

## CURRENT CODE:

export default function Button({ variant = "primary", className = "", children }) {
return (
<button>Button</button>
);
}

================================================================================
STEP 1.3: CREATE BASE STYLES STRING
================================================================================

INSTRUCTOR SAYS:
"Buttons have many styles in common. Let's create a string with all the base
styles that every button needs."

## STUDENTS ADD BEFORE RETURN:

export default function Button({ variant = "primary", className = "", children }) {
const baseStyles = "inline-flex items-center justify-center font-medium transition rounded-lg";

return (
<button>Button</button>
);
}

## EXPLAIN:

- inline-flex - Flexbox for layout
- items-center justify-center - Center content vertically and horizontally
- font-medium - Medium font weight
- transition - Smooth hover effects
- rounded-lg - Rounded corners

## CURRENT CODE:

export default function Button({ variant = "primary", className = "", children }) {
const baseStyles = "inline-flex items-center justify-center font-medium transition rounded-lg";

return (
<button>Button</button>
);
}

================================================================================
STEP 1.4: CREATE VARIANTS OBJECT
================================================================================

INSTRUCTOR SAYS:
"Now let's define our button variants. Each variant has different colors and
styles."

## STUDENTS ADD:

const baseStyles = "inline-flex items-center justify-center font-medium transition rounded-lg";

const variants = {
primary: "bg-white text-black hover:opacity-90 active:opacity-80",
secondary: "ring-1 ring-white/30 text-white hover:bg-white/10 active:bg-white/20",
link: "text-white underline underline-offset-4 hover:opacity-80 active:opacity-60",
};

## EXPLAIN:

- variants is an object with three button styles
- primary: White background, black text (most important actions)
- secondary: Outlined style, transparent background (secondary actions)
- link: Looks like a link, underlined (less prominent actions)
- Each has hover and active states

ASK STUDENTS:
"How do we access the primary variant styles?"
(Answer: variants["primary"] or variants.primary)

## CURRENT CODE:

export default function Button({ variant = "primary", className = "", children }) {
const baseStyles = "inline-flex items-center justify-center font-medium transition rounded-lg";

const variants = {
primary: "bg-white text-black hover:opacity-90 active:opacity-80",
secondary: "ring-1 ring-white/30 text-white hover:bg-white/10 active:bg-white/20",
link: "text-white underline underline-offset-4 hover:opacity-80 active:opacity-60",
};

return (
<button>Button</button>
);
}

================================================================================
STEP 1.5: COMBINE STYLES
================================================================================

INSTRUCTOR SAYS:
"Now we need to combine our base styles, the variant styles, and any custom
className into one string."

## STUDENTS ADD:

const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

## EXPLAIN:

- Template literal combines all three strings
- variants[variant] looks up the right variant (e.g., variants["primary"])
- Result is one long string of all classes

SHOW EXAMPLE:
If variant="primary" and className="mt-4":
buttonClasses = "inline-flex items-center... bg-white text-black... mt-4"

## CURRENT CODE:

export default function Button({ variant = "primary", className = "", children }) {
const baseStyles = "inline-flex items-center justify-center font-medium transition rounded-lg";

const variants = {
primary: "bg-white text-black hover:opacity-90 active:opacity-80",
secondary: "ring-1 ring-white/30 text-white hover:bg-white/10 active:bg-white/20",
link: "text-white underline underline-offset-4 hover:opacity-80 active:opacity-60",
};

const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

return (
<button>Button</button>
);
}

================================================================================
STEP 1.6: RENDER THE BUTTON
================================================================================

INSTRUCTOR SAYS:
"Let's render a simple button element with our combined classes."

## STUDENTS ADD TO RETURN:

return (
<button className={buttonClasses}>
{children}
</button>
);

## EXPLAIN:

- <button> - Standard HTML button element
- className={buttonClasses} - All our combined styles
- {children} - Button text (e.g., "Click me")

## CURRENT CODE (STAGE 1 COMPLETE):

export default function Button({ variant = "primary", className = "", children }) {
const baseStyles = "inline-flex items-center justify-center font-medium transition rounded-lg";

const variants = {
primary: "bg-white text-black hover:opacity-90 active:opacity-80",
secondary: "ring-1 ring-white/30 text-white hover:bg-white/10 active:bg-white/20",
link: "text-white underline underline-offset-4 hover:opacity-80 active:opacity-60",
};

const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

return (
<button className={buttonClasses}>
{children}
</button>
);
}

================================================================================
STEP 1.7: TEST STAGE 1
================================================================================

INSTRUCTOR SAYS:
"Let's test our basic button with different variants."

## TEST IN pages/Home.jsx:

import Button from "../components/ui/Button.jsx";

// Inside your component:

<div className="flex gap-4">
  <Button variant="primary">Primary Button</Button>
  <Button variant="secondary">Secondary Button</Button>
  <Button variant="link">Link Button</Button>
</div>

## DEMONSTRATE:

1. Save files
2. Check browser
3. Show three different button styles
4. Hover over each to show interactive states
5. Inspect elements to show combined classes

================================================================================
STAGE 2: ADD SIZES
================================================================================

# STEP 2.1: ADD SIZE PROP

INSTRUCTOR SAYS:
"Now let's add different sizes: small, medium, and large."

## STUDENTS MODIFY PROPS:

export default function Button({
variant = "primary",
size = "md",
className = "",
children
}) {

## EXPLAIN:

- size = "md" - Default to medium size
- We'll support "sm", "md", "lg"

================================================================================
STEP 2.2: CREATE SIZES OBJECT
================================================================================

INSTRUCTOR SAYS:
"Let's create a sizes object similar to variants."

## STUDENTS ADD AFTER VARIANTS:

const sizes = {
sm: "px-4 py-2 text-sm",
md: "px-6 py-3",
lg: "px-8 py-4 text-lg",
};

## EXPLAIN:

- sm: Smaller padding, smaller text
- md: Medium padding (default)
- lg: Larger padding, larger text
- px is horizontal padding, py is vertical

## CURRENT CODE SHOULD INCLUDE:

const variants = { ... };

const sizes = {
sm: "px-4 py-2 text-sm",
md: "px-6 py-3",
lg: "px-8 py-4 text-lg",
};

================================================================================
STEP 2.3: ADD SIZE TO BUTTON CLASSES
================================================================================

INSTRUCTOR SAYS:
"Now add the size classes to our buttonClasses string."

## STUDENTS MODIFY BUTTONCLASSES:

const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

## EXPLAIN:

- sizes[size] looks up the right size classes
- Now we have: base + variant + size + custom

## TEST:

<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>

================================================================================
STAGE 3: ADD POLYMORPHIC "AS" PROP
================================================================================

# STEP 3.1: ADD AS PROP AND PROPS REST

INSTRUCTOR SAYS:
"Sometimes we want our Button to be a link (<a>) instead of a <button>.
Let's add the 'as' prop pattern we learned with Section."

## STUDENTS MODIFY PROPS:

export default function Button({
variant = "primary",
size = "md",
className = "",
as = "button",
children,
...props
}) {

## EXPLAIN:

- as = "button" - Default to button element
- ...props - Collect all other props (href, onClick, etc.)

================================================================================
STEP 3.2: CREATE COMPONENT VARIABLE
====================================

INSTRUCTOR SAYS:
"Just like Section, we'll create a Component variable."

## STUDENTS ADD BEFORE BUTTONCLASSES:

const Component = as;

## CURRENT CODE SHOULD INCLUDE:

const Component = as;

const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

================================================================================
STEP 3.3: UPDATE RETURN TO USE COMPONENT
=========================================

INSTRUCTOR SAYS:
"Replace <button> with <Component> and spread props."

## STUDENTS MODIFY RETURN:

return (
<Component className={buttonClasses} {...props}>
{children}
</Component>
);

## EXPLAIN:

- <Component> renders as whatever 'as' prop specifies
- {...props} spreads extra props like href, onClick, target

## TEST:

<Button as="a" href="/portfolio" variant="primary">
  View Portfolio
</Button>

This renders an <a> tag styled as a button!

================================================================================
STAGE 4: ADD ACCESSIBILITY AND MIN-HEIGHT
================================================================================

# STEP 4.1: ADD ACCESSIBILITY STYLES

INSTRUCTOR SAYS:
"Let's add focus styles for keyboard users and a minimum height for touch
targets."

## STUDENTS UPDATE BASESTYLES:

const baseStyles =
"inline-flex items-center justify-center font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg min-h-[44px]";

## EXPLAIN:

- focus-visible:outline-none - Remove default outline
- focus-visible:ring-2 - Add custom focus ring for keyboard users
- min-h-[44px] - Minimum 44px height (accessibility touch target size)

================================================================================
STAGE 5: ADD DISABLED STATE
================================================================================

# STEP 5.1: ADD DISABLED PROP

## STUDENTS MODIFY PROPS:

export default function Button({
variant = "primary",
size = "md",
disabled = false,
className = "",
as = "button",
children,
...props
}) {

================================================================================
STEP 5.2: UPDATE BASESTYLES WITH DISABLED CLASSES
==================================================

## STUDENTS UPDATE BASESTYLES:

const baseStyles =
"inline-flex items-center justify-center font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg disabled:cursor-not-allowed disabled:opacity-50 min-h-[44px]";

## EXPLAIN:

- disabled:cursor-not-allowed - Shows "not allowed" cursor
- disabled:opacity-50 - Dims the button when disabled

================================================================================
STEP 5.3: PASS DISABLED TO COMPONENT
=====================================

## STUDENTS UPDATE RETURN:

return (
<Component className={buttonClasses} disabled={disabled} {...props}>
{children}
</Component>
);

## TEST:

<Button variant="primary" disabled>
  Disabled Button
</Button>

================================================================================
STAGE 6: ADD ICONS (ADVANCED)
================================================================================

# STEP 6.1: ADD ICON PROPS

INSTRUCTOR SAYS:
"Let's add support for icons before or after the button text, or icon-only
buttons."

## STUDENTS MODIFY PROPS:

export default function Button({
variant = "primary",
size = "md",
leftIcon,
rightIcon,
iconOnly,
disabled = false,
className = "",
as = "button",
children,
...props
}) {

================================================================================
STEP 6.2: UPDATE SIZES FOR ICONS
=================================

INSTRUCTOR SAYS:
"Sizes need to know about icons. Let's update the sizes object."

## STUDENTS REPLACE SIZES WITH:

const sizes = {
sm: {
button: iconOnly ? "p-2" : "px-4 py-2 text-sm",
icon: "w-4 h-4",
gap: "gap-2",
},
md: {
button: iconOnly ? "p-3" : "px-6 py-3",
icon: "w-5 h-5",
gap: "gap-2",
},
lg: {
button: iconOnly ? "p-4" : "px-8 py-4 text-lg",
icon: "w-6 h-6",
gap: "gap-3",
},
};

## EXPLAIN:

- Each size now has: button padding, icon size, gap between icon and text
- iconOnly ? "p-2" : "px-4 py-2" - Different padding for icon-only buttons

================================================================================
STEP 6.3: UPDATE BUTTONCLASSES
===============================

## STUDENTS REPLACE BUTTONCLASSES WITH:

const buttonClasses = [
baseStyles,
variants[variant],
sizes[size].button,
iconOnly ? "" : sizes[size].gap,
className,
]
.filter(Boolean)
.join(" ");

## EXPLAIN:

- Now using array + filter + join instead of template literal
- sizes[size].button gets the right padding
- sizes[size].gap adds gap between icon and text (only if not icon-only)
- .filter(Boolean) removes empty strings
- .join(" ") combines with spaces

================================================================================
STEP 6.4: CREATE ICON CLASSES
==============================

## STUDENTS ADD:

const iconClasses = sizes[size].icon;

## EXPLAIN:

- Gets the icon size for this button size
- e.g., "w-5 h-5" for medium buttons

================================================================================
STEP 6.5: CREATE RENDERICON FUNCTION
=====================================

INSTRUCTOR SAYS:
"We need a helper function to render icons properly."

## STUDENTS ADD BEFORE RETURN:

const renderIcon = (icon) => {
if (!icon) return null;

return <span aria-hidden="true">{icon}</span>;
};

## EXPLAIN:

- If no icon, return nothing
- Wrap icon in <span> with aria-hidden (decorative)
- The icon itself will be a React component from react-icons

================================================================================
STEP 6.6: UPDATE RETURN WITH ICONS
===================================

## STUDENTS REPLACE RETURN WITH:

return (
<Component className={buttonClasses} disabled={disabled} {...props}>
{leftIcon && renderIcon(leftIcon)}
{!iconOnly && children}
{rightIcon && renderIcon(rightIcon)}
{iconOnly && renderIcon(iconOnly)}
</Component>
);

## EXPLAIN:

- {leftIcon && renderIcon(leftIcon)} - Render left icon if provided
- {!iconOnly && children} - Render text unless it's icon-only
- {rightIcon && renderIcon(rightIcon)} - Render right icon if provided
- {iconOnly && renderIcon(iconOnly)} - Render single icon for icon-only

## TEST WITH ICONS:

First, install react-icons:
npm install react-icons

Then test:
import { FaGithub } from "react-icons/fa";

<Button variant="primary" leftIcon={<FaGithub />}>
GitHub
</Button>

================================================================================
STAGE 7: ADD FORWARDREF (ADVANCED - OPTIONAL)
================================================================================

INSTRUCTOR SAYS:
"This is advanced, but important for library-quality components. forwardRef
allows parent components to access the button's DOM element."

# STEP 7.1: IMPORT FORWARDREF

## STUDENTS ADD AT TOP:

import { forwardRef } from "react";

================================================================================
STEP 7.2: WRAP COMPONENT IN FORWARDREF
=======================================

## STUDENTS REPLACE ENTIRE COMPONENT WITH:

import { forwardRef } from "react";

const Button = forwardRef(
(
{
variant = "primary",
size = "md",
children,
leftIcon,
rightIcon,
iconOnly,
disabled = false,
className = "",
as = "button",
...props
},
ref
) => {
// All the code we wrote before goes here
const baseStyles = "...";
const variants = { ... };
const sizes = { ... };

    // ... rest of code ...

    const Component = as;

    return (
      <Component ref={ref} className={buttonClasses} disabled={disabled} {...props}>
        {leftIcon && renderIcon(leftIcon)}
        {!iconOnly && children}
        {rightIcon && renderIcon(rightIcon)}
        {iconOnly && renderIcon(iconOnly)}
      </Component>
    );

}
);

Button.displayName = "Button";

export default Button;

## EXPLAIN:

- forwardRef wraps the entire component
- Second parameter 'ref' is the forwarded ref
- Add ref={ref} to the Component
- displayName helps with debugging

## WHY FORWARDREF?

- Lets parent components access the DOM element
- Useful for focus management, animations, measurements
- Professional library pattern

================================================================================
FINAL COMPLETE CODE
================================================================================

import { forwardRef } from "react";

const Button = forwardRef(
(
{
variant = "primary",
size = "md",
children,
leftIcon,
rightIcon,
iconOnly,
disabled = false,
className = "",
as = "button",
...props
},
ref
) => {
const baseStyles =
"inline-flex items-center justify-center font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg disabled:cursor-not-allowed disabled:opacity-50 min-h-[44px]";

    const variants = {
      primary: "bg-white text-black hover:opacity-90 active:opacity-80",
      secondary: "ring-1 ring-white/30 text-white hover:bg-white/10 active:bg-white/20",
      link: "text-white underline underline-offset-4 hover:opacity-80 active:opacity-60 rounded-none",
    };

    const sizes = {
      sm: {
        button: iconOnly ? "p-2" : "px-4 py-2 text-sm",
        icon: "w-4 h-4",
        gap: "gap-2",
      },
      md: {
        button: iconOnly ? "p-3" : "px-6 py-3",
        icon: "w-5 h-5",
        gap: "gap-2",
      },
      lg: {
        button: iconOnly ? "p-4" : "px-8 py-4 text-lg",
        icon: "w-6 h-6",
        gap: "gap-3",
      },
    };

    const disabledStyles = disabled ? "hover:opacity-50 active:opacity-50 hover:bg-opacity-100" : "";

    const buttonClasses = [
      baseStyles,
      variants[variant],
      sizes[size].button,
      iconOnly ? "" : sizes[size].gap,
      disabledStyles,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const iconClasses = sizes[size].icon;

    const renderIcon = (icon) => {
      if (!icon) return null;

      if (typeof icon === "string") {
        return <span className={iconClasses}>{icon}</span>;
      }

      return <span aria-hidden="true">{icon}</span>;
    };

    const Component = as;

    return (
      <Component ref={ref} className={buttonClasses} disabled={disabled} {...props}>
        {leftIcon && renderIcon(leftIcon)}
        {!iconOnly && children}
        {rightIcon && renderIcon(rightIcon)}
        {iconOnly && renderIcon(iconOnly)}
      </Component>
    );

}
);

Button.displayName = "Button";

export default Button;

================================================================================
COMPREHENSIVE TESTING
================================================================================

INSTRUCTOR SAYS:
"Let's test all the features we built!"

## TEST FILE (pages/Home.jsx or create ButtonTest.jsx):

import Button from "../components/ui/Button.jsx";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function ButtonTest() {
return (
<div className="p-8 space-y-8">
{/_ Variants _/}
<div className="flex gap-4">
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="link">Link</Button>
</div>

      {/* Sizes */}
      <div className="flex items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* As link */}
      <div className="flex gap-4">
        <Button as="a" href="/portfolio">Portfolio Link</Button>
      </div>

      {/* With icons */}
      <div className="flex gap-4">
        <Button leftIcon={<FaGithub />}>GitHub</Button>
        <Button rightIcon={<FaArrowRight />}>Continue</Button>
        <Button iconOnly={<FaLinkedin />} aria-label="LinkedIn" />
      </div>

      {/* Disabled */}
      <div className="flex gap-4">
        <Button disabled>Disabled</Button>
      </div>
    </div>

);
}

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created a fully-featured Button component
✓ Multiple variants (primary, secondary, link)
✓ Multiple sizes (sm, md, lg)
✓ Polymorphic (can be button or link)
✓ Icon support (left, right, icon-only)
✓ Disabled state
✓ Accessibility features (focus rings, min height)
✓ forwardRef support
✓ Flexible styling with className

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Complex prop handling
- Object-based style systems
- Conditional rendering
- Array methods (filter, join)
- forwardRef (advanced React)
- Icon integration
- Polymorphic components
- Accessibility best practices
- Touch target sizes
- Keyboard focus indicators

================================================================================
REAL-WORLD USAGE
================================================================================

Primary action:
<Button variant="primary" size="lg">Get Started</Button>

Secondary action:
<Button variant="secondary">Learn More</Button>

Link button:
<Button as="a" href="/contact" variant="primary">
Contact Us
</Button>

With icon:
<Button leftIcon={<FaGithub />} as="a" href="https://github.com">
GitHub Profile
</Button>

Icon only:
<Button iconOnly={<FaGithub />} aria-label="GitHub" />

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why use forwardRef?"
A: It allows parent components to access the button's DOM element, which is
useful for focus management, animations, and measuring.

Q: "What's the difference between leftIcon and iconOnly?"
A: leftIcon shows an icon before text. iconOnly shows just an icon with no
text (need aria-label for accessibility).

Q: "Why use array.filter().join() instead of template literals?"
A: It cleanly removes empty/falsy values. Template literals would include
extra spaces.

Q: "Can we add more variants?"
A: Yes! Just add to the variants object. E.g., danger: "bg-red-500..."

Q: "What if we use as="a" without href?"
A: It will render an <a> tag, but it won't be clickable. Always include href
when using as="a".

================================================================================
TROUBLESHOOTING
================================================================================

ICONS NOT SHOWING:

- Make sure react-icons is installed: npm install react-icons
- Check import path: import { FaGithub } from "react-icons/fa"
- Verify icon is passed as JSX: leftIcon={<FaGithub />}

STYLES NOT APPLYING:

- Check index.css is imported in main.jsx
- Inspect element to see actual classes
- Verify Tailwind is configured

TYPESCRIPT ERRORS (if using TS):

- forwardRef needs generic types
- This is advanced, stick with JavaScript for now

================================================================================
EXTENSION IDEAS (FUTURE)
================================================================================

Students could add:

- Loading state (spinner icon)
- Different color schemes
- Gradient backgrounds
- Animation variants
- Full-width option
- Icon position animations

================================================================================
END OF BUTTON.JSX GUIDE
================================================================================
