================================================================================
CLASS 3: TECHSTACK.JSX STEP-BY-STEP GUIDE - TECH STACK SECTION
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide walks students through building the TechStack section component.
This is their first data-driven component using .map() to render dynamic
content. It also introduces the react-icons library.

Students should create a new file: src/components/sections/TechStack.jsx

NOTE: Make sure the sections folder exists (src/components/sections/)

CONCEPTS TAUGHT:

- Importing and using data files
- Array.map() method for rendering lists
- Installing and using react-icons library
- Icon mapping with objects
- Grid layouts with Tailwind
- Data-driven components
- Key prop for list items

PREREQUISITES:
Students should have already built:

- Container.jsx (Class 1)
- Section.jsx (Class 1)
- techstack.js data file (Class 3 - previous lesson)

WHAT WE'RE BUILDING:

- Responsive grid of tech icons
- Each icon links to documentation
- Icons styled with brand colors
- Hover effects
- Clean, professional layout

⚠️ SIMPLIFICATION NOTE:
For Class 3, we'll use placeholder icons from react-icons. In a real portfolio,
students would customize the icon set. This version teaches the fundamentals
of data-driven rendering with .map().

TIME ESTIMATE: 40-50 minutes

================================================================================
STEP 1: INSTALL REACT-ICONS LIBRARY
================================================================================

INSTRUCTOR SAYS:
"Before we build the component, we need to install react-icons - a library
that gives us thousands of icons to use. This is how professionals add icons
to React apps."

## IN TERMINAL:

npm install react-icons

## EXPLAIN:

- react-icons is an NPM package
- Provides icon sets from Font Awesome, Material Design, and more
- Icons are React components (not images)
- Easy to resize and recolor
- Commonly used in professional React projects

## DEMONSTRATE:

1. Show terminal running npm install
2. Wait for installation to complete
3. Show package.json updated with react-icons
4. Explain node_modules now has the library

ASK STUDENTS:
"Why use a library instead of image files for icons?"
(Answer: Vector icons scale perfectly, easy to style with CSS, lightweight,
don't require separate image files)

================================================================================
STEP 2: CREATE THE COMPONENT FILE
================================================================================

INSTRUCTOR SAYS:
"Now let's create our TechStack component in the sections folder."

## STUDENTS CREATE FILE:

src/components/sections/TechStack.jsx

## STUDENTS TYPE:

export default function TechStack() {
return (
<div></div>
);
}

## EXPLAIN:

- This is a section component (lives in sections/ folder)
- Section components are bigger than UI components
- They compose multiple UI components together
- Each section represents a part of a page

## CURRENT CODE SHOULD LOOK LIKE:

export default function TechStack() {
return (
<div></div>
);
}

================================================================================
STEP 3: IMPORT SECTION AND CONTAINER
================================================================================

INSTRUCTOR SAYS:
"Every section component uses our Section and Container pattern. Let's import
them."

## STUDENTS ADD AT THE TOP:

import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";

## EXPLAIN:

- Section provides vertical spacing
- Container provides max-width and horizontal padding
- Same pattern we've used before
- ../ goes up one folder level to components/

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";

export default function TechStack() {
return (
<div></div>
);
}

================================================================================
STEP 4: IMPORT THE TECHSTACK DATA
================================================================================

INSTRUCTOR SAYS:
"Now let's import the data we created in the last lesson. This is where our
tech stack information lives."

## STUDENTS ADD AFTER CONTAINER IMPORT:

import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { techstack } from "../../data/techstack.js";

## EXPLAIN:

- { techstack } - Named import (curly braces because it's not default export)
- ../../ - Go up TWO levels (sections → components → src) then into data/
- We now have access to our tech array

ASK STUDENTS:
"Why do we use { } curly braces for this import?"
(Answer: It's a named export, not a default export)

## DEMONSTRATE:

1. Show the folder structure
2. Trace the import path: TechStack.jsx → components → src → data → techstack.js
3. Show how ../../ navigates the folders

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { techstack } from "../../data/techstack.js";

export default function TechStack() {
return (
<div></div>
);
}

================================================================================
STEP 5: IMPORT ICONS FROM REACT-ICONS
================================================================================

INSTRUCTOR SAYS:
"We need to import the icons we'll use. React-icons has different icon sets.
We'll use Font Awesome (Fa) and Simple Icons (Si) for tech logos."

## STUDENTS ADD AFTER DATA IMPORT:

import { techstack } from "../../data/techstack.js";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

## EXPLAIN:

- FaHtml5, FaCss3Alt - Font Awesome icons
- SiTailwindcss - Simple Icons (better for tech logos)
- Each icon is a React component
- We import only the icons we need

## DEMONSTRATE:

Show react-icons website (react-icons.github.io/react-icons) where students
can search for icons later.

COMMON MISTAKE:
Students might try to import all icons. Explain we only import what we need
to keep bundle size small.

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { techstack } from "../../data/techstack.js";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function TechStack() {
return (
<div></div>
);
}

================================================================================
STEP 6: ADD SECTION AND CONTAINER STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"Let's build the outer structure using our Section + Container pattern."

## STUDENTS MODIFY THE RETURN:

export default function TechStack() {
return (
<Section>
<Container>
{/_ Content will go here _/}
</Container>
</Section>
);
}

## EXPLAIN:

- Section wraps everything (vertical padding)
- Container inside Section (max-width, horizontal padding)
- Standard pattern for all section components

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { techstack } from "../../data/techstack.js";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function TechStack() {
return (
<Section>
<Container>
{/_ Content will go here _/}
</Container>
</Section>
);
}

================================================================================
STEP 7: ADD HEADING
================================================================================

INSTRUCTOR SAYS:
"Let's add a heading for this section so visitors know what they're looking at."

## STUDENTS REPLACE THE COMMENT:

<Container>
  <h2 className="heading-section">My Tech Stack</h2>
</Container>

## EXPLAIN:

- <h2> - Proper heading hierarchy (h1 is page title)
- heading-section - Custom class from index.css
- Centers and styles the heading
- "My Tech Stack" - Students can customize this text

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { techstack } from "../../data/techstack.js";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function TechStack() {
return (
<Section>
<Container>
<h2 className="heading-section">My Tech Stack</h2>
</Container>
</Section>
);
}

================================================================================
STEP 8: CREATE ICON MAPPING OBJECT
================================================================================

INSTRUCTOR SAYS:
"Before we display the tech stack, we need to map iconId strings to actual
icon components. We'll create an object that connects them."

## STUDENTS ADD BEFORE THE RETURN:

export default function TechStack() {
const iconMap = {
html5: FaHtml5,
css3: FaCss3Alt,
javascript: FaJs,
react: FaReact,
tailwind: SiTailwindcss,
figma: FaFigma,
};

return (
// ...existing code...
);
}

## EXPLAIN:

- iconMap is an object
- Keys (left side) match iconId from our data
- Values (right side) are the imported icon components
- This lets us look up icons dynamically
- Example: iconMap["html5"] returns FaHtml5 component

ASK STUDENTS:
"Why not just put the icon component directly in the data?"
(Answer: Data files should be pure data, not code. Also, icons can't be
serialized to JSON if needed later)

## DEMONSTRATE:

Show how iconMap works:

1. Data has iconId: "html5"
2. iconMap["html5"] gives us FaHtml5
3. We can then render that component

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { techstack } from "../../data/techstack.js";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function TechStack() {
const iconMap = {
html5: FaHtml5,
css3: FaCss3Alt,
javascript: FaJs,
react: FaReact,
tailwind: SiTailwindcss,
figma: FaFigma,
};

return (
<Section>
<Container>
<h2 className="heading-section">My Tech Stack</h2>
</Container>
</Section>
);
}

================================================================================
STEP 9: ADD GRID CONTAINER FOR TECH ITEMS
================================================================================

INSTRUCTOR SAYS:
"Now let's create a grid to hold our tech icons. This will be responsive -
different number of columns on different screen sizes."

## STUDENTS ADD AFTER THE HEADING:

<h2 className="heading-section">My Tech Stack</h2>

<div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
  {/* Tech items will go here */}
</div>

## EXPLAIN:

- mt-8 - Margin top (spacing from heading)
- grid - CSS Grid layout
- grid-cols-3 - 3 columns on mobile
- sm:grid-cols-4 - 4 columns on small screens
- md:grid-cols-5 - 5 columns on medium+ screens
- gap-6 - Space between grid items
- Responsive: adjusts based on screen size

## DEMONSTRATE:

1. Show how grid classes work in DevTools
2. Resize browser to show columns changing
3. Explain gap creates space between items

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { techstack } from "../../data/techstack.js";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function TechStack() {
const iconMap = {
html5: FaHtml5,
css3: FaCss3Alt,
javascript: FaJs,
react: FaReact,
tailwind: SiTailwindcss,
figma: FaFigma,
};

return (
<Section>
<Container>
<h2 className="heading-section">My Tech Stack</h2>

        <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {/* Tech items will go here */}
        </div>
      </Container>
    </Section>

);
}

================================================================================
STEP 10: INTRODUCE .map() METHOD
================================================================================

INSTRUCTOR SAYS:
"Now for the most important part - we'll use .map() to turn our data array
into React elements. This is a fundamental React pattern."

## INSTRUCTOR EXPLAINS (BEFORE CODING):

.map() transforms an array:

- Takes an array of data
- Runs a function for each item
- Returns a new array of React elements

Example concept:
[data, data, data] → .map() → [<Component>, <Component>, <Component>]

WRITE ON BOARD:
techstack.map((tech) => {
return <div>{tech.label}</div>
})

This means: "For each tech, return JSX showing it"

ASK STUDENTS:
"What do you think .map() does?"
(Answer: Loops through array and transforms each item)

================================================================================
STEP 11: USE .map() TO RENDER TECH ITEMS
================================================================================

INSTRUCTOR SAYS:
"Let's use .map() to create a div for each technology in our data."

## STUDENTS REPLACE THE COMMENT:

<div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
  {techstack.map((tech) => {
    return (
      <div key={tech.id}>
        <p>{tech.label}</p>
      </div>
    );
  })}
</div>

## EXPLAIN:

- techstack.map() - Loop through our data array
- (tech) - Each item in the loop (one technology object)
- key={tech.id} - Required by React for list items (uses unique id)
- {tech.label} - Display the technology name
- { } - Curly braces to run JavaScript in JSX

## DEMONSTRATE:

1. Save file
2. We'll see an error (TechStack not added to page yet)
3. Show how each object becomes a div

COMMON MISTAKE:
Students forget the key prop. React will show a warning.
Fix: Always add key={item.id} when mapping arrays.

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { techstack } from "../../data/techstack.js";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function TechStack() {
const iconMap = {
html5: FaHtml5,
css3: FaCss3Alt,
javascript: FaJs,
react: FaReact,
tailwind: SiTailwindcss,
figma: FaFigma,
};

return (
<Section>
<Container>
<h2 className="heading-section">My Tech Stack</h2>

        <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {techstack.map((tech) => {
            return (
              <div key={tech.id}>
                <p>{tech.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>

);
}

================================================================================
STEP 12: GET THE ICON COMPONENT FOR EACH TECH
================================================================================

INSTRUCTOR SAYS:
"Now let's add the logic to get the right icon for each technology using our
iconMap."

## STUDENTS ADD INSIDE THE MAP:

{techstack.map((tech) => {
const IconComponent = iconMap[tech.iconId];

return (
<div key={tech.id}>
<p>{tech.label}</p>
</div>
);
})}

## EXPLAIN:

- const IconComponent = Look up the icon
- iconMap[tech.iconId] - Use iconId to find icon component
- Example: tech.iconId is "html5", so we get FaHtml5
- Capitalized (IconComponent) because it's a React component

ASK STUDENTS:
"Why do we capitalize IconComponent?"
(Answer: React components must be capitalized to distinguish from HTML tags)

## CURRENT CODE SHOULD LOOK LIKE:

{techstack.map((tech) => {
const IconComponent = iconMap[tech.iconId];

return (
<div key={tech.id}>
<p>{tech.label}</p>
</div>
);
})}

================================================================================
STEP 13: RENDER THE ICON COMPONENT
================================================================================

INSTRUCTOR SAYS:
"Now let's render the icon above the label. We'll make it big and colorful!"

## STUDENTS MODIFY THE RETURN:

return (

  <div key={tech.id}>
    {IconComponent && (
      <IconComponent
        className="h-12 w-12"
        style={{ color: tech.color }}
      />
    )}
    <p>{tech.label}</p>
  </div>
);

## EXPLAIN:

- {IconComponent && - Only render if icon exists
- <IconComponent /> - Render the icon component
- className="h-12 w-12" - Make icon 48px × 48px
- style={{ color: tech.color }} - Apply brand color from data
- Double curly braces: outer { } for JSX, inner { } for object

## DEMONSTRATE:

1. Show how style prop works
2. Explain the && conditional (safety check)
3. Show how each icon gets its brand color

COMMON MISTAKE:
Students forget double curly braces for style.
Fix: style={{ property: value }}

## CURRENT CODE SHOULD LOOK LIKE:

{techstack.map((tech) => {
const IconComponent = iconMap[tech.iconId];

return (
<div key={tech.id}>
{IconComponent && (
<IconComponent
className="h-12 w-12"
style={{ color: tech.color }}
/>
)}
<p>{tech.label}</p>
</div>
);
})}

================================================================================
STEP 14: MAKE EACH ITEM A LINK
================================================================================

INSTRUCTOR SAYS:
"Let's make each tech item clickable so visitors can learn more about each
technology."

## STUDENTS WRAP THE CONTENT IN AN <a> TAG:

return (

  <div key={tech.id}>
    <a
      href={tech.href}
      target="_blank"
      rel="noreferrer"
    >
      {IconComponent && (
        <IconComponent
          className="h-12 w-12"
          style={{ color: tech.color }}
        />
      )}
      <p>{tech.label}</p>
    </a>
  </div>
);

## EXPLAIN:

- <a href={tech.href}> - Link to documentation URL from data
- target="\_blank" - Opens in new tab
- rel="noreferrer" - Security best practice for external links
- Now clicking icon/label opens documentation

ASK STUDENTS:
"Why use target='\_blank'?"
(Answer: Opens in new tab so users don't lose their place on our site)

## CURRENT CODE SHOULD LOOK LIKE:

{techstack.map((tech) => {
const IconComponent = iconMap[tech.iconId];

return (
<div key={tech.id}>
<a
        href={tech.href}
        target="_blank"
        rel="noreferrer"
      >
{IconComponent && (
<IconComponent
className="h-12 w-12"
style={{ color: tech.color }}
/>
)}
<p>{tech.label}</p>
</a>
</div>
);
})}

================================================================================
STEP 15: ADD STYLING AND CENTER ITEMS
================================================================================

INSTRUCTOR SAYS:
"Let's add some styling to center everything and make it look professional."

## STUDENTS ADD CLASSES:

return (

  <div key={tech.id} className="text-center">
    <a
      href={tech.href}
      target="_blank"
      rel="noreferrer"
      className="block hover:opacity-80 transition-opacity"
    >
      <div className="flex items-center justify-center">
        {IconComponent && (
          <IconComponent
            className="h-12 w-12"
            style={{ color: tech.color }}
          />
        )}
      </div>
      <p className="mt-2 text-sm">{tech.label}</p>
    </a>
  </div>
);

## EXPLAIN:

- text-center - Center align text
- block - Make link block-level
- hover:opacity-80 - Reduce opacity on hover
- transition-opacity - Smooth animation
- flex items-center justify-center - Center the icon
- mt-2 - Space between icon and label
- text-sm - Smaller text for label

## DEMONSTRATE:

1. Show hover effect
2. Explain flexbox centering
3. Show how spacing works

## CURRENT CODE SHOULD LOOK LIKE (COMPLETE .map()):

<div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
  {techstack.map((tech) => {
    const IconComponent = iconMap[tech.iconId];

    return (
      <div key={tech.id} className="text-center">
        <a
          href={tech.href}
          target="_blank"
          rel="noreferrer"
          className="block hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center justify-center">
            {IconComponent && (
              <IconComponent
                className="h-12 w-12"
                style={{ color: tech.color }}
              />
            )}
          </div>
          <p className="mt-2 text-sm">{tech.label}</p>
        </a>
      </div>
    );

})}

</div>

================================================================================
STEP 16: TEST THE COMPONENT
================================================================================

INSTRUCTOR SAYS:
"Our component is ready! But it's not on any page yet. Let's add it to the
Home page so we can see it."

NOTE FOR INSTRUCTOR:
This step assumes students will add it to Home.jsx in the next lesson.
For now, just show them the complete component.

## DEMONSTRATE:

1. Show the complete TechStack.jsx file
2. Explain we'll add it to Home.jsx next
3. Preview what it will look like

## WHAT STUDENTS WILL SEE (NEXT LESSON):

- Grid of tech icons
- Responsive layout (3/4/5 columns)
- Brand colors for each icon
- Hover effects
- Clickable links to documentation

================================================================================
COMPLETE FINAL CODE
================================================================================

## FINAL CODE SHOULD LOOK LIKE:

import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { techstack } from "../../data/techstack.js";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function TechStack() {
const iconMap = {
html5: FaHtml5,
css3: FaCss3Alt,
javascript: FaJs,
react: FaReact,
tailwind: SiTailwindcss,
figma: FaFigma,
};

return (
<Section>
<Container>
<h2 className="heading-section">My Tech Stack</h2>

        <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {techstack.map((tech) => {
            const IconComponent = iconMap[tech.iconId];

            return (
              <div key={tech.id} className="text-center">
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center justify-center">
                    {IconComponent && (
                      <IconComponent
                        className="h-12 w-12"
                        style={{ color: tech.color }}
                      />
                    )}
                  </div>
                  <p className="mt-2 text-sm">{tech.label}</p>
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>

);
}

================================================================================
UNDERSTANDING .map() AND DATA-DRIVEN COMPONENTS
================================================================================

INSTRUCTOR EXPLAINS:
"Let's review what we just built and why it's powerful."

## BEFORE (HARDCODED - BAD):

<div>HTML</div>
<div>CSS</div>
<div>JavaScript</div>
// Have to copy/paste for each item!

## AFTER (DATA-DRIVEN - GOOD):

{techstack.map((tech) => <div>{tech.label}</div>)}
// Automatically creates divs from data!

## BENEFITS:

1. Add tech: Just add to techstack.js array
2. Remove tech: Just delete from array
3. Reorder: Just reorder array
4. No code changes needed!

## VISUAL FLOW:

Data (techstack.js) → .map() → React Elements → Browser Display
[{...}, {...}] → Loop → [<div>, <div>] → Rendered page

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Installed react-icons library
✓ Created first data-driven component
✓ Learned .map() method for rendering lists
✓ Used icon mapping pattern
✓ Built responsive grid layout
✓ Added hover effects and transitions
✓ Made items clickable with external links
✓ Used brand colors from data
✓ Understood key prop requirement

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Installing NPM packages (npm install)
- Importing from libraries (react-icons)
- Array.map() method for lists
- Key prop for React lists
- Icon mapping with objects
- Data-driven rendering
- CSS Grid with Tailwind
- Responsive columns (grid-cols-\*)
- Hover states and transitions
- External links (target="\_blank", rel="noreferrer")
- Inline styles in React (style={{ }})
- Conditional rendering (&&)

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why not just hardcode each tech item?"
A: Data-driven approach is more maintainable. To add tech, just update data
file. To hardcode, you'd duplicate code 6+ times.

Q: "What does the key prop do?"
A: React uses keys to track which items change. Without it, React can't
efficiently update the list. Always use unique IDs.

Q: "Can I use different icons?"
A: Yes! Browse react-icons.github.io/react-icons, find your icon, import it,
and add to iconMap.

Q: "Why IconComponent instead of just using the icon directly?"
A: We're dynamically selecting which icon to use based on data. IconComponent
holds the right icon for each tech item.

Q: "What if iconId doesn't match anything in iconMap?"
A: The && conditional prevents errors. Icon won't render, but label still shows.
This prevents crashes.

Q: "Why double curly braces for style?"
A: Outer { } means "JavaScript in JSX", inner { } is the style object.
style={{ color: "red" }} is actually style={objectWithColorProperty}.

================================================================================
WHAT'S NEXT
================================================================================

In the next lesson, we'll:

1. Add TechStack component to Home.jsx
2. See it render on the homepage
3. Test responsiveness
4. Customize with your own tech stack

You'll also complete homework adding your real technologies!

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Cannot find module 'react-icons'"
FIX:

- Run npm install react-icons in terminal
- Wait for installation to complete
- Restart dev server (npm run dev)

ERROR: "Each child in a list should have a unique key prop"
FIX:

- Add key={tech.id} to the outermost element in .map()
- Ensure each tech object has a unique id

NO ICONS SHOWING:
FIX:

- Check iconMap includes all iconIds from your data
- Verify icon imports at top of file
- Check console for errors

ICONS ARE ALL THE SAME COLOR:
FIX:

- Check style={{ color: tech.color }} is present
- Verify colors in techstack.js are hex codes (#XXXXXX)
- Make sure you're using tech.color (from the loop variable)

GRID NOT RESPONSIVE:
FIX:

- Check classes: grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5
- Resize browser to test breakpoints
- Inspect element to verify classes applied

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ react-icons installed (check package.json)
□ TechStack.jsx file exists in src/components/sections/
□ No syntax errors in VS Code
□ All imports are present and correct
□ iconMap includes all icons you're using
□ .map() includes key prop
□ Icons have brand colors from data
□ Links have target="\_blank" and rel="noreferrer"
□ Grid classes are responsive
□ Code matches final example above

================================================================================
CUSTOMIZATION IDEAS FOR STUDENTS
================================================================================

**Now:**

- Change heading text
- Adjust grid columns (try grid-cols-2 for bigger icons)
- Change icon sizes (h-16 w-16 for bigger)

**For Homework:**

- Add your real tech stack to techstack.js
- Find and import matching icons
- Update iconMap with your icons
- Adjust colors if needed

**Advanced (Later):**

- Add categories (Frontend, Backend, Tools)
- Show proficiency level (beginner/expert)
- Add tooltips on hover
- Animate icons on scroll
- Filter by category

================================================================================
END OF TECHSTACK.JSX GUIDE (CLASS 3 - SECTION COMPONENT)
================================================================================
