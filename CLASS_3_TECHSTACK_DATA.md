================================================================================
CLASS 3: TECHSTACK.JS STEP-BY-STEP GUIDE - DATA FILE
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide walks students through creating their first data file. This
introduces the concept of separating data from presentation, a fundamental
pattern in React development.

Students should create a new file: src/data/techstack.js

NOTE: Make sure the data folder exists first (src/data/)

CONCEPTS TAUGHT:

- Separating data from components
- JavaScript array of objects
- Named exports vs default exports
- Data structure design
- Why keep data separate from UI

WHAT WE'RE BUILDING IN CLASS 3:

- Tech stack data array with placeholder entries
- Each entry has: id, label, href, iconId, color
- 5-6 sample tech items (students will customize later)

WHAT STUDENTS WILL DO FOR HOMEWORK:

- Research their own tech stack
- Find documentation URLs
- Choose appropriate icons
- Customize colors

================================================================================
STEP 1: CREATE THE DATA FOLDER
================================================================================

INSTRUCTOR SAYS:
"Before we build components that use data, we need a place to store that data.
We'll create a 'data' folder to hold all our content."

## STUDENTS CREATE FOLDER:

In VS Code:

1. Right-click on src folder
2. Select "New Folder"
3. Name it: data

Or in terminal:
mkdir src/data

## EXPLAIN:

- data/ folder keeps content separate from components
- Makes it easy to update content without touching code
- Professional pattern used in real applications

## DEMONSTRATE:

1. Show the src folder
2. Create data folder
3. Verify it appears in file tree

================================================================================
STEP 2: CREATE THE TECHSTACK.JS FILE
================================================================================

INSTRUCTOR SAYS:
"Now let's create our tech stack data file. This will hold information about
all the technologies you know."

## STUDENTS CREATE FILE:

src/data/techstack.js

## STUDENTS TYPE:

export const techstack = [

];

## EXPLAIN:

- export const - Named export (not default)
- techstack - Array name (lowercase, descriptive)
- Square brackets [] - This will hold our tech items
- We export it so components can import and use this data

ASK STUDENTS:
"What's the difference between 'export default' and 'export const'?"
(Answer: default = one thing per file, const = multiple things can be exported)

## CURRENT CODE SHOULD LOOK LIKE:

export const techstack = [

];

================================================================================
STEP 3: UNDERSTAND THE DATA STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"Before we add data, let's understand what each tech item needs. Every
technology will be an object with specific properties."

## INSTRUCTOR EXPLAINS ON BOARD/SCREEN:

Each tech object will have:

- id: Unique identifier (no spaces, lowercase)
- label: Display name (what users see)
- href: Link to documentation
- iconId: Which icon to show (we'll use this later)
- color: Brand color for the icon

EXAMPLE STRUCTURE:
{
id: "react",
label: "React",
href: "https://react.dev/",
iconId: "react",
color: "#61DAFB"
}

## EXPLAIN:

- id: Used by React for the 'key' prop (we'll learn about this)
- label: What appears on screen
- href: Makes the icon clickable to learn more
- iconId: Matches icon name from icon library
- color: Official brand color (hex code)

ASK STUDENTS:
"Why do we need both 'id' and 'label'?"
(Answer: id is for code/keys, label is for humans reading)

================================================================================
STEP 4: ADD FIRST TECH ITEM (HTML5)
================================================================================

INSTRUCTOR SAYS:
"Let's add our first technology - HTML5. This is the foundation of web
development!"

## STUDENTS ADD INSIDE THE ARRAY:

export const techstack = [
{
id: "html5",
label: "HTML5",
href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
iconId: "html5",
color: "#E34F26",
},
];

## EXPLAIN:

- Curly braces {} for object
- Each property has a key and value
- Strings in quotes
- Comma after each property
- Comma after object (important for adding more later!)
- Orange color (#E34F26) is HTML5's official brand color

## DEMONSTRATE:

1. Point out the structure
2. Show the comma after the object
3. Explain why we use official MDN documentation URL

## CURRENT CODE SHOULD LOOK LIKE:

export const techstack = [
{
id: "html5",
label: "HTML5",
href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
iconId: "html5",
color: "#E34F26",
},
];

================================================================================
STEP 5: ADD CSS3
================================================================================

INSTRUCTOR SAYS:
"Great! Let's add CSS3. Notice the pattern - same structure, different data."

## STUDENTS ADD AFTER HTML5:

{
id: "html5",
label: "HTML5",
href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
iconId: "html5",
color: "#E34F26",
},
{
id: "css3",
label: "CSS3",
href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
iconId: "css3",
color: "#1572B6",
},

## EXPLAIN:

- Same structure as HTML5
- Blue color (#1572B6) is CSS3's official brand color
- Also links to MDN documentation
- Notice the comma between objects

COMMON MISTAKE:
Students often forget the comma between objects.
Fix: Each object needs a comma after it (except the last one, but we keep it
for easier adding later)

## CURRENT CODE SHOULD LOOK LIKE:

export const techstack = [
{
id: "html5",
label: "HTML5",
href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
iconId: "html5",
color: "#E34F26",
},
{
id: "css3",
label: "CSS3",
href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
iconId: "css3",
color: "#1572B6",
},
];

================================================================================
STEP 6: ADD JAVASCRIPT
================================================================================

INSTRUCTOR SAYS:
"Let's add JavaScript - the language we're using to build this site!"

## STUDENTS ADD AFTER CSS3:

{
id: "css3",
label: "CSS3",
href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
iconId: "css3",
color: "#1572B6",
},
{
id: "javascript",
label: "JavaScript",
href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
iconId: "javascript",
color: "#F7DF1E",
},

## EXPLAIN:

- Yellow color (#F7DF1E) is JavaScript's official color
- Notice the pattern repeating
- Each tech follows the same structure

## CURRENT CODE SHOULD LOOK LIKE:

export const techstack = [
{
id: "html5",
label: "HTML5",
href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
iconId: "html5",
color: "#E34F26",
},
{
id: "css3",
label: "CSS3",
href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
iconId: "css3",
color: "#1572B6",
},
{
id: "javascript",
label: "JavaScript",
href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
iconId: "javascript",
color: "#F7DF1E",
},
];

================================================================================
STEP 7: ADD REACT
================================================================================

INSTRUCTOR SAYS:
"Since we're building this portfolio with React, let's add it to our stack!"

## STUDENTS ADD AFTER JAVASCRIPT:

{
id: "javascript",
label: "JavaScript",
href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
iconId: "javascript",
color: "#F7DF1E",
},
{
id: "react",
label: "React",
href: "https://react.dev/",
iconId: "react",
color: "#61DAFB",
},

## EXPLAIN:

- React uses its official documentation (react.dev)
- Light blue color (#61DAFB) is React's brand color
- This is the framework we're using for this portfolio

## CURRENT CODE SHOULD LOOK LIKE:

export const techstack = [
{
id: "html5",
label: "HTML5",
href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
iconId: "html5",
color: "#E34F26",
},
{
id: "css3",
label: "CSS3",
href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
iconId: "css3",
color: "#1572B6",
},
{
id: "javascript",
label: "JavaScript",
href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
iconId: "javascript",
color: "#F7DF1E",
},
{
id: "react",
label: "React",
href: "https://react.dev/",
iconId: "react",
color: "#61DAFB",
},
];

================================================================================
STEP 8: ADD TAILWIND CSS
================================================================================

INSTRUCTOR SAYS:
"Let's add Tailwind CSS - the styling framework we're using for this site."

## STUDENTS ADD AFTER REACT:

{
id: "react",
label: "React",
href: "https://react.dev/",
iconId: "react",
color: "#61DAFB",
},
{
id: "tailwind",
label: "Tailwind CSS",
href: "https://tailwindcss.com/",
iconId: "tailwind",
color: "#06B6D4",
},

## EXPLAIN:

- Tailwind CSS is our styling approach
- Cyan color (#06B6D4) is Tailwind's brand color
- Links to official Tailwind documentation

## CURRENT CODE SHOULD LOOK LIKE:

export const techstack = [
{
id: "html5",
label: "HTML5",
href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
iconId: "html5",
color: "#E34F26",
},
{
id: "css3",
label: "CSS3",
href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
iconId: "css3",
color: "#1572B6",
},
{
id: "javascript",
label: "JavaScript",
href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
iconId: "javascript",
color: "#F7DF1E",
},
{
id: "react",
label: "React",
href: "https://react.dev/",
iconId: "react",
color: "#61DAFB",
},
{
id: "tailwind",
label: "Tailwind CSS",
href: "https://tailwindcss.com/",
iconId: "tailwind",
color: "#06B6D4",
},
];

================================================================================
STEP 9: ADD ONE MORE (FIGMA OR GITHUB)
================================================================================

INSTRUCTOR SAYS:
"Let's add one more tool. I'll show Figma, but you can choose a tool you
actually use. This is just placeholder data for now."

## STUDENTS ADD AFTER TAILWIND:

{
id: "tailwind",
label: "Tailwind CSS",
href: "https://tailwindcss.com/",
iconId: "tailwind",
color: "#06B6D4",
},
{
id: "figma",
label: "Figma",
href: "https://www.figma.com/",
iconId: "figma",
color: "#F24E1E",
},

## EXPLAIN:

- Figma is a design tool (if you use it)
- Red/orange color (#F24E1E) is Figma's brand
- You'll customize this list for homework

ALTERNATIVE:
If students prefer GitHub:
{
id: "github",
label: "GitHub",
href: "https://github.com/",
iconId: "github",
color: "#ffffff",
}

## CURRENT CODE SHOULD LOOK LIKE (FINAL):

export const techstack = [
{
id: "html5",
label: "HTML5",
href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
iconId: "html5",
color: "#E34F26",
},
{
id: "css3",
label: "CSS3",
href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
iconId: "css3",
color: "#1572B6",
},
{
id: "javascript",
label: "JavaScript",
href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
iconId: "javascript",
color: "#F7DF1E",
},
{
id: "react",
label: "React",
href: "https://react.dev/",
iconId: "react",
color: "#61DAFB",
},
{
id: "tailwind",
label: "Tailwind CSS",
href: "https://tailwindcss.com/",
iconId: "tailwind",
color: "#06B6D4",
},
{
id: "figma",
label: "Figma",
href: "https://www.figma.com/",
iconId: "figma",
color: "#F24E1E",
},
];

================================================================================
UNDERSTANDING DATA FILES
================================================================================

INSTRUCTOR EXPLAINS:
"Let's talk about why we created a separate data file instead of putting this
in our component."

BENEFITS OF SEPARATE DATA FILES:

1. **Separation of Concerns**

   - Data changes don't require touching component code
   - Easier to maintain

2. **Reusability**

   - Multiple components can import the same data
   - Example: Could show tech stack on About page too

3. **Easy Updates**

   - Add/remove/edit entries in one place
   - No need to understand React to update content

4. **Professional Pattern**
   - This is how real applications work
   - Makes collaboration easier (designer edits data, developer edits code)

## VISUAL CONCEPT:

Component (TechStack.jsx) → Imports data from → Data file (techstack.js)
"How to display" "What to display"

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created our first data file (techstack.js)
✓ Learned array of objects structure
✓ Understood data properties (id, label, href, iconId, color)
✓ Added 6 sample technologies
✓ Learned why data should be separate from components
✓ Used named export (export const)
✓ Created foundation for tech stack display

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Data file organization (src/data/ folder)
- Array of objects structure
- Object properties and values
- Named exports vs default exports
- Separation of data from presentation
- Why use external documentation URLs
- Brand colors and hex codes
- Importance of trailing commas

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why not just put this array in the component?"
A: Separation of concerns. Data changes shouldn't require touching component
code. Also makes it reusable across multiple components if needed.

Q: "What if I don't know the brand colors?"
A: Search "[technology name] brand color" or use a color picker on their
official website. Most tech companies publish brand guidelines.

Q: "Can I add more technologies now?"
A: Yes! Just follow the same pattern. We'll do this for homework. For now,
5-6 is enough to learn with.

Q: "Why use iconId if it's the same as id?"
A: Sometimes they differ. For example, id might be "react-native" but iconId
might just be "react" if they share an icon. Keeps it flexible.

Q: "What's the trailing comma for?"
A: Makes it easier to add items later (just paste a new object). Also prevents
errors if you forget to add comma. It's a best practice.

================================================================================
WHAT'S NEXT
================================================================================

Next, we'll build the TechStack.jsx component that:

- Imports this data
- Maps over the array to create tech icons
- Displays them in a responsive grid
- Makes each icon clickable to its documentation

This is where you'll see the power of separating data from components!

================================================================================
HOMEWORK ASSIGNMENT
================================================================================

**For next class, students should:**

1. **Research your actual tech stack**

   - What languages do you know? (HTML, CSS, JS, Python, etc.)
   - What frameworks? (React, Vue, Angular, etc.)
   - What tools? (Figma, Photoshop, VS Code, Git, etc.)

2. **Find documentation URLs**

   - Look up official documentation for each technology
   - Prefer official sites (react.dev, not tutorials)

3. **Find brand colors**

   - Search "[tech name] brand color"
   - Look for hex codes (#XXXXXX)
   - Check official brand guidelines if available

4. **Make a list (on paper or in notes)**
   - Technology name
   - Documentation URL
   - Hex color code
   - We'll add them to techstack.js next class

**TIP:** Aim for 8-15 technologies. Include:

- Core languages (HTML, CSS, JavaScript)
- Frameworks you've used
- Design tools
- Development tools (Git, GitHub, VS Code)
- Any other relevant tech

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Unexpected token"

- Check for missing commas between objects
- Check for missing quotes around strings
- Check that curly braces {} are balanced

FILE NOT SHOWING UP:

- Verify you created it in src/data/ (not src/)
- Check filename is exactly: techstack.js
- Refresh VS Code file explorer if needed

SYNTAX HIGHLIGHTING LOOKS WRONG:

- Make sure file extension is .js (not .txt)
- VS Code should show JavaScript icon next to filename

CAN'T REMEMBER THE STRUCTURE:

- Look at HTML5 example (first object)
- Copy and paste, then change the values
- Each object needs all 5 properties

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ File exists at src/data/techstack.js
□ No syntax errors (no red underlines in VS Code)
□ File starts with: export const techstack = [
□ File ends with: ];
□ At least 5-6 tech objects in the array
□ Each object has all 5 properties (id, label, href, iconId, color)
□ Each object has a comma after it
□ All strings are in quotes
□ Colors start with # (hex codes)

================================================================================
CUSTOMIZATION IDEAS FOR STUDENTS
================================================================================

**Now (during class):**

- Add technologies you actually use
- Replace placeholder data with your stack
- Research accurate brand colors

**Later (advanced):**

- Add categories (frontend, backend, tools, design)
- Add experience level (beginner, intermediate, expert)
- Add year started using each tech
- Sort by proficiency

These would require updating both data structure and component display logic.

================================================================================
END OF TECHSTACK.JS GUIDE (CLASS 3 - DATA FILE)
================================================================================
