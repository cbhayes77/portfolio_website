================================================================================
CLASS 5: TESTIMONIALS.JS STEP-BY-STEP GUIDE - DATA FILE
================================================================================

OVERVIEW FOR INSTRUCTOR
-----------------------
This guide teaches students how to create the testimonials data file, which
stores testimonial quotes, authors, and roles in a reusable format. This is
the foundation for the Testimonials section.

Students should create a new file: src/data/testimonials.js

NOTE: The data/ folder should already exist from Class 3 (techstack.js) and
Class 4 (projects.js).

CONCEPTS TAUGHT:
- Creating data files with named exports
- Array of objects data structure
- Unique IDs for React keys
- Organizing testimonial data (quote, author, role)
- How data flows from files to components

WHAT WE'RE BUILDING IN CLASS 5:
- A testimonials data file with 8 testimonials
- Proper data structure for testimonial cards
- Reusable data that can be used on multiple pages

================================================================================
STEP 1: CREATE THE TESTIMONIALS.JS FILE AND START THE ARRAY
================================================================================

INSTRUCTOR SAYS:
"Just like we did with techstack.js and projects.js, we're creating a data
file to store our testimonials. This keeps our data separate from our
components, making it easy to update quotes without touching any React code.
We'll use a named export so we can import it with curly braces later."

STUDENTS CREATE FILE:
----------------------
Create: src/data/testimonials.js

STUDENTS TYPE:
--------------
export const testimonials = [

];

EXPLAIN:
--------
- export const testimonials - Named export (import with { testimonials })
- = [ ]; - Creates an empty array that will hold testimonial objects
- We'll add testimonial objects inside this array

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export const testimonials = [

];

================================================================================
STEP 2: ADD THE FIRST TESTIMONIAL OBJECT
================================================================================

INSTRUCTOR SAYS:
"Each testimonial is an object with four properties: id, quote, author, and
role. The id must be unique - React uses it as a key when rendering lists.
The quote is what the person said, the author is their name, and the role is
their job title. Let's add our first testimonial!"

STUDENTS ADD:
-------------
Inside the array:

  {
    id: "alex",
    quote: "This tool saves me hours each week. The summaries are spot-on.",
    author: "Alex Rivera",
    role: "Product Manager",
  },

EXPLAIN:
--------
- id: "alex" - Unique identifier (use lowercase, simple strings)
- quote: - The testimonial text (use realistic quotes)
- author: - Person's full name
- role: - Their job title or position
- Comma after the closing } - Required between array items in JavaScript

ASK STUDENTS:
"Why do we need an id for each testimonial?"
(Answer: React needs unique keys to efficiently update lists. The id helps
React track which testimonials are which.)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export const testimonials = [
  {
    id: "alex",
    quote: "This tool saves me hours each week. The summaries are spot-on.",
    author: "Alex Rivera",
    role: "Product Manager",
  },
];

================================================================================
STEP 3: ADD MORE TESTIMONIALS
================================================================================

INSTRUCTOR SAYS:
"Let's add more testimonials to give us a good variety. We want at least 6-8
testimonials so we can show a few on the homepage and have more available for
other pages. I'll give you several to add - you can customize these later
with real testimonials from people you've worked with!"

STUDENTS ADD:
-------------
After the first testimonial (inside the array):

  {
    id: "morgan",
    quote: "It's like having a research assistant on demand. Love the simplicity.",
    author: "Morgan Lee",
    role: "Content Strategist",
  },
  {
    id: "taylor",
    quote: "Our team ships faster now. The insights surface what matters.",
    author: "Taylor Kim",
    role: "Engineering Lead",
  },
  {
    id: "jordan",
    quote: "The quality of work exceeded our expectations. Highly professional and responsive.",
    author: "Jordan Smith",
    role: "CEO",
  },
  {
    id: "casey",
    quote: "Working with them was seamless. They understood our vision perfectly.",
    author: "Casey Johnson",
    role: "Design Director",
  },
  {
    id: "riley",
    quote: "Delivered on time and within budget. Would definitely work with them again.",
    author: "Riley Davis",
    role: "Project Manager",
  },
  {
    id: "avery",
    quote: "Incredible attention to detail and great communication throughout the project.",
    author: "Avery Brown",
    role: "Marketing Lead",
  },
  {
    id: "quinn",
    quote: "They brought fresh ideas that transformed our digital presence.",
    author: "Quinn Wilson",
    role: "Brand Manager",
  },

EXPLAIN:
--------
- Each object follows the same structure (id, quote, author, role)
- IDs are all unique (alex, morgan, taylor, etc.)
- Quotes vary in length - that's natural and okay
- Different roles show diverse experience
- Last item in array doesn't need a comma (but it's okay if it has one)

COMMON MISTAKE:
Students might forget commas between objects. Each object except the last
needs a comma after the closing }.

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export const testimonials = [
  {
    id: "alex",
    quote: "This tool saves me hours each week. The summaries are spot-on.",
    author: "Alex Rivera",
    role: "Product Manager",
  },
  {
    id: "morgan",
    quote: "It's like having a research assistant on demand. Love the simplicity.",
    author: "Morgan Lee",
    role: "Content Strategist",
  },
  {
    id: "taylor",
    quote: "Our team ships faster now. The insights surface what matters.",
    author: "Taylor Kim",
    role: "Engineering Lead",
  },
  {
    id: "jordan",
    quote: "The quality of work exceeded our expectations. Highly professional and responsive.",
    author: "Jordan Smith",
    role: "CEO",
  },
  {
    id: "casey",
    quote: "Working with them was seamless. They understood our vision perfectly.",
    author: "Casey Johnson",
    role: "Design Director",
  },
  {
    id: "riley",
    quote: "Delivered on time and within budget. Would definitely work with them again.",
    author: "Riley Davis",
    role: "Project Manager",
  },
  {
    id: "avery",
    quote: "Incredible attention to detail and great communication throughout the project.",
    author: "Avery Brown",
    role: "Marketing Lead",
  },
  {
    id: "quinn",
    quote: "They brought fresh ideas that transformed our digital presence.",
    author: "Quinn Wilson",
    role: "Brand Manager",
  },
];

================================================================================
STEP 4: VERIFY THE DATA FILE
================================================================================

INSTRUCTOR SAYS:
"Let's save and make sure there are no syntax errors. Check VS Code for any
red underlines - those indicate problems with the code structure."

WHAT STUDENTS SHOULD CHECK:
----------------------------
□ File saved without errors
□ No red underlines in VS Code
□ Each object has: id, quote, author, role
□ Commas between objects (except optionally after the last one)
□ Closing bracket and semicolon at the end

DEMONSTRATE:
------------
1. Save the file (Cmd+S or Ctrl+S)
2. Look for any red squiggly underlines
3. Check the Problems panel in VS Code (if visible)
4. File should be clean with no errors

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created testimonials.js data file
✓ Used named export pattern (export const)
✓ Created array of 8 testimonial objects
✓ Each testimonial has unique id, quote, author, and role
✓ Data is ready to be imported by components

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Named exports with export const
- Array of objects data structure
- Object properties (id, quote, author, role)
- Unique identifiers for React keys
- Separating data from components
- JavaScript array and object syntax

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Can I use my own testimonials instead of these?"
A: Absolutely! If you have real testimonials from teachers, clients, or
   colleagues, replace these with your own. Just keep the same structure
   (id, quote, author, role).

Q: "What if I don't have 8 testimonials?"
A: That's okay! You can have as few as 3 or as many as you want. Just make
   sure each one has a unique id and follows the structure.

Q: "Can I add more properties like company or photo?"
A: Yes! You can add additional properties like company: "Acme Corp" or
   image: "url". You'd just need to update the TestimonialCard component
   later to display those fields.

Q: "Do the IDs have to be names?"
A: No! IDs can be anything unique: "testimonial-1", "t1", "alex-rivera", etc.
   Using first names is just simple and readable.

Q: "Why use a separate data file instead of putting this in the component?"
A: Separation of concerns! Data changes more frequently than code. With a
   separate file, you (or a client) can update testimonials without touching
   React components.

================================================================================
WHAT'S NEXT
================================================================================

Next, we'll create the TestimonialCard component that will display each of
these testimonials with proper semantic HTML for quotes.

After that, we'll build the Testimonials section component that will map over
this data and display the cards in a responsive grid.

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Unexpected token" or "Missing } " or "Missing ,"
FIX:
- Check that each object has opening and closing curly braces: { }
- Verify commas between objects in the array
- Make sure each property value is in quotes (strings)
- Check for matching brackets: [ ... ]

SYMPTOM: VS Code shows red underlines
FIX:
- Hover over the red underline to see the error message
- Common issues: missing commas, missing quotes, extra commas
- Check that all quotes are properly closed ("quote" not "quote)

ERROR: "Cannot find module 'testimonials.js'" (later when importing)
FIX:
- Verify file is saved in src/data/ folder
- Check filename is exactly: testimonials.js (lowercase, plural)
- When importing, use: import { testimonials } from "../../data/testimonials.js"

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ File is saved in src/data/testimonials.js
□ No syntax errors (no red underlines in VS Code)
□ Array has 8 testimonial objects
□ Each object has id, quote, author, role properties
□ All IDs are unique
□ export const testimonials is at the top
□ Array ends with closing bracket and semicolon: ];

================================================================================
CUSTOMIZATION IDEAS
================================================================================

INSTRUCTOR SAYS:
"Here are ways you can customize this data file later:"

IDEA 1: ADD YOUR OWN TESTIMONIALS
----------------------------------
Replace these with real testimonials:
- Ask classmates for peer feedback
- Request testimonials from teachers or mentors
- Use feedback from volunteer projects
- Get quotes from teammates on group projects

IDEA 2: ADD MORE FIELDS
------------------------
Extend each object with:
{
  id: "alex",
  quote: "...",
  author: "Alex Rivera",
  role: "Product Manager",
  company: "Tech Startup Inc",
  image: "https://example.com/alex.jpg",
  rating: 5
}

IDEA 3: ORGANIZE BY CATEGORY
-----------------------------
Group testimonials by project type or service:
- Design testimonials
- Development testimonials
- Consulting testimonials
- Different clients or projects

================================================================================
END OF TESTIMONIALS.JS GUIDE (CLASS 5 - DATA FILE)
================================================================================
