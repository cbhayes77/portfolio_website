================================================================================
CLASS 4: PROJECTS.JS STEP-BY-STEP GUIDE - PROJECT DATA FILE
================================================================================

OVERVIEW FOR INSTRUCTOR
-----------------------
This guide walks students through creating the projects data file. This builds
on the data file pattern learned in Class 3 (techstack.js), but introduces
more complex data structures with multiple properties per project.

Students should create a new file: src/data/projects.js

NOTE: The data folder should already exist from Class 3 (src/data/)

CONCEPTS TAUGHT:
- Complex data structures
- Multiple properties per object
- Placeholder content strategy
- Data for different use cases (card vs detail page)
- Relationship between data and components

WHAT WE'RE BUILDING IN CLASS 4:
- Projects array with 3-4 sample projects
- Each project has: id, title, blurb, image, href
- Placeholder images from Unsplash/Picsum
- Realistic placeholder descriptions

WHAT WE'LL ADD LATER:
- Class 8: Detailed fields (overview, highlights, role, tools, timeline, client)
- Class 8: This data will power both cards AND detail pages

HOMEWORK:
Students should gather:
- Screenshots or images of 3-4 projects
- Project titles
- Brief descriptions (1-2 sentences)
- Links or slugs for project URLs

================================================================================
STEP 1: CREATE THE PROJECTS.JS FILE
================================================================================

INSTRUCTOR SAYS:
"We're going to create our second data file. Remember how we made techstack.js
in Class 3? This follows the same pattern, but for projects instead of tech."

STUDENTS CREATE FILE:
---------------------
src/data/projects.js

STUDENTS TYPE:
--------------
export const projects = [
  
];


EXPLAIN:
--------
- export const - Named export (same as techstack.js)
- projects - Array name (lowercase, plural)
- Will hold all project objects
- Each object represents one portfolio project

ASK STUDENTS:
"Why do we use 'const' if we're going to add items to the array?"
(Answer: const means the variable can't be reassigned, but array contents
         can still be modified. We can push/pop items, just can't do 
         projects = [something else])

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export const projects = [
  
];


================================================================================
STEP 2: UNDERSTAND PROJECT DATA STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"Before we add data, let's understand what each project needs. This is more
complex than our tech stack data."

INSTRUCTOR EXPLAINS ON BOARD/SCREEN:
------------------------------------
Each project object needs:
- id: Unique identifier (no spaces, lowercase)
- title: Project name
- blurb: Short description (1-2 sentences for card)
- image: URL to project screenshot/image
- href: Link to project detail page

EXAMPLE STRUCTURE:
{
  id: "ecommerce_platform",
  title: "E-Commerce Platform",
  blurb: "A modern online shopping experience with cart and checkout.",
  image: "https://picsum.photos/300?random=1",
  href: "/portfolio/ecommerce_platform"
}

EXPLAIN:
--------
- id: Used for React keys and URL slugs
- title: What users see
- blurb: Brief description (displays on cards)
- image: Screenshot or mockup
- href: Where clicking the card takes you

ASK STUDENTS:
"Why is blurb separate from a full description?"
(Answer: Cards show brief text, detail pages show full description. Different
         contexts need different content lengths.)

DEMONSTRATE:
------------
Show how a project card would use this data:
- Image in the card
- Title as heading
- Blurb as description
- href as the link destination

================================================================================
STEP 3: DISCUSS PLACEHOLDER IMAGES
================================================================================

INSTRUCTOR SAYS:
"For now, we'll use placeholder images. Later you'll replace these with actual
project screenshots."

PLACEHOLDER IMAGE OPTIONS:

1. **Picsum (Recommended):**
   https://picsum.photos/300?random=1
   - Free placeholder images
   - ?random=1, ?random=2, etc. for different images
   - 300px width (good for project cards)

2. **Unsplash:**
   https://source.unsplash.com/300x200/?website
   - Real photos
   - Can specify topics: ?website, ?app, ?design

EXPLAIN:
--------
- We use 300px width for card thumbnails
- ?random=NUMBER ensures different images
- Later: Students will replace with real screenshots
- For now: Focus on structure, not content

COMMON MISTAKE:
Students might use the same image URL for all projects (no ?random=X).
Fix: Make sure each project has a unique random number.

================================================================================
STEP 4: ADD FIRST PROJECT
================================================================================

INSTRUCTOR SAYS:
"Let's add our first project. This will be a placeholder for now, but it shows
the structure you'll use for your real projects."

STUDENTS ADD INSIDE THE ARRAY:
-------------------------------
export const projects = [
  {
    id: "portfolio_website",
    title: "Portfolio Website",
    blurb: "A modern portfolio showcasing design and development skills with responsive layout.",
    image: "https://picsum.photos/300?random=1",
    href: "/portfolio/portfolio_website",
  },
];


EXPLAIN:
--------
- id: "portfolio_website" - Lowercase, underscores instead of spaces
- title: "Portfolio Website" - Proper capitalization for display
- blurb: One sentence, under 100 characters for card layout
- image: Picsum with random=1
- href: /portfolio/ + id (consistent pattern)
- Comma after closing brace (important!)

ASK STUDENTS:
"What would happen if the blurb was 5 sentences long?"
(Answer: It would overflow the card or get cut off. Keep it brief for cards.)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export const projects = [
  {
    id: "portfolio_website",
    title: "Portfolio Website",
    blurb: "A modern portfolio showcasing design and development skills with responsive layout.",
    image: "https://picsum.photos/300?random=1",
    href: "/portfolio/portfolio_website",
  },
];


================================================================================
STEP 5: ADD SECOND PROJECT
================================================================================

INSTRUCTOR SAYS:
"Let's add a second project. Notice the pattern - same structure, different
data."

STUDENTS ADD AFTER FIRST PROJECT:
----------------------------------
{
  id: "portfolio_website",
  title: "Portfolio Website",
  blurb: "A modern portfolio showcasing design and development skills with responsive layout.",
  image: "https://picsum.photos/300?random=1",
  href: "/portfolio/portfolio_website",
},
{
  id: "ecommerce_app",
  title: "E-Commerce App",
  blurb: "Online shopping platform with product catalog, cart, and secure checkout process.",
  image: "https://picsum.photos/300?random=2",
  href: "/portfolio/ecommerce_app",
},


EXPLAIN:
--------
- Different id, title, blurb
- image uses random=2 (different placeholder image)
- href uses the id (keeps URLs consistent)
- Comma between objects

DEMONSTRATE:
------------
1. Point out the consistent structure
2. Show how changing random=2 to random=3 would give different image
3. Explain the id/href relationship

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export const projects = [
  {
    id: "portfolio_website",
    title: "Portfolio Website",
    blurb: "A modern portfolio showcasing design and development skills with responsive layout.",
    image: "https://picsum.photos/300?random=1",
    href: "/portfolio/portfolio_website",
  },
  {
    id: "ecommerce_app",
    title: "E-Commerce App",
    blurb: "Online shopping platform with product catalog, cart, and secure checkout process.",
    image: "https://picsum.photos/300?random=2",
    href: "/portfolio/ecommerce_app",
  },
];


================================================================================
STEP 6: ADD THIRD PROJECT
================================================================================

INSTRUCTOR SAYS:
"Let's add one more project. Three is a good number for learning - enough to
see the pattern, small enough to manage."

STUDENTS ADD AFTER SECOND PROJECT:
-----------------------------------
{
  id: "ecommerce_app",
  title: "E-Commerce App",
  blurb: "Online shopping platform with product catalog, cart, and secure checkout process.",
  image: "https://picsum.photos/300?random=2",
  href: "/portfolio/ecommerce_app",
},
{
  id: "mobile_health_app",
  title: "Mobile Health App",
  blurb: "Wellness tracking application helping users monitor fitness goals and health metrics.",
  image: "https://picsum.photos/300?random=3",
  href: "/portfolio/mobile_health_app",
},


EXPLAIN:
--------
- Third project follows same pattern
- random=3 for third unique image
- Blurb is descriptive but concise
- id follows naming convention (lowercase, underscores)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export const projects = [
  {
    id: "portfolio_website",
    title: "Portfolio Website",
    blurb: "A modern portfolio showcasing design and development skills with responsive layout.",
    image: "https://picsum.photos/300?random=1",
    href: "/portfolio/portfolio_website",
  },
  {
    id: "ecommerce_app",
    title: "E-Commerce App",
    blurb: "Online shopping platform with product catalog, cart, and secure checkout process.",
    image: "https://picsum.photos/300?random=2",
    href: "/portfolio/ecommerce_app",
  },
  {
    id: "mobile_health_app",
    title: "Mobile Health App",
    blurb: "Wellness tracking application helping users monitor fitness goals and health metrics.",
    image: "https://picsum.photos/300?random=3",
    href: "/portfolio/mobile_health_app",
  },
];


================================================================================
STEP 7: ADD OPTIONAL FOURTH PROJECT
================================================================================

INSTRUCTOR SAYS:
"Let's add one more project to have four total. This gives us a nice grid
layout on the page."

STUDENTS ADD AFTER THIRD PROJECT:
----------------------------------
{
  id: "mobile_health_app",
  title: "Mobile Health App",
  blurb: "Wellness tracking application helping users monitor fitness goals and health metrics.",
  image: "https://picsum.photos/300?random=3",
  href: "/portfolio/mobile_health_app",
},
{
  id: "task_management_tool",
  title: "Task Management Tool",
  blurb: "Collaborative productivity app for teams to organize projects and track progress.",
  image: "https://picsum.photos/300?random=4",
  href: "/portfolio/task_management_tool",
},


EXPLAIN:
--------
- Four projects creates a 2x2 grid on larger screens
- Still follows the pattern consistently
- Each id is unique and descriptive

CURRENT CODE SHOULD LOOK LIKE (FINAL):
---------------------------------------
export const projects = [
  {
    id: "portfolio_website",
    title: "Portfolio Website",
    blurb: "A modern portfolio showcasing design and development skills with responsive layout.",
    image: "https://picsum.photos/300?random=1",
    href: "/portfolio/portfolio_website",
  },
  {
    id: "ecommerce_app",
    title: "E-Commerce App",
    blurb: "Online shopping platform with product catalog, cart, and secure checkout process.",
    image: "https://picsum.photos/300?random=2",
    href: "/portfolio/ecommerce_app",
  },
  {
    id: "mobile_health_app",
    title: "Mobile Health App",
    blurb: "Wellness tracking application helping users monitor fitness goals and health metrics.",
    image: "https://picsum.photos/300?random=3",
    href: "/portfolio/mobile_health_app",
  },
  {
    id: "task_management_tool",
    title: "Task Management Tool",
    blurb: "Collaborative productivity app for teams to organize projects and track progress.",
    image: "https://picsum.photos/300?random=4",
    href: "/portfolio/task_management_tool",
  },
];


================================================================================
UNDERSTANDING DATA RELATIONSHIPS
================================================================================

INSTRUCTOR EXPLAINS:
"Let's understand how this data will be used across our portfolio site."

DATA FLOW:
----------
projects.js → ProjectCard component → Projects section → Home page
           ↘ Project detail page (Class 8)

CURRENT USAGE (Class 4):
- ProjectCard displays: image, title, blurb
- Projects section maps over array
- Shows 3-4 cards in a grid

FUTURE USAGE (Class 8):
- Project detail page uses id from URL
- Shows full project information
- We'll add more fields then (overview, highlights, role, tools, etc.)

WHY START SIMPLE:
-----------------
- Learn card layout first
- Master .map() with simple data
- Class 8: Add complexity when ready
- Prevents overwhelming beginners

ASK STUDENTS:
"Why not add all the fields now?"
(Answer: Progressive learning. Master cards first, then add detail pages.)

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created projects.js data file
✓ Learned project data structure (id, title, blurb, image, href)
✓ Added 4 sample projects with placeholder content
✓ Used Picsum for placeholder images
✓ Established naming conventions (ids, hrefs)
✓ Understood data flow and usage
✓ Set foundation for project cards and detail pages

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Data file organization (src/data/ folder)
- Complex object structures (5 properties per project)
- Named exports (export const)
- Placeholder content strategy
- Image URLs and placeholders
- ID and URL slug relationship
- Brief vs detailed content (blurb vs full description)
- Data reusability across components

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Can I use my own project titles now?"
A: Yes! Replace "Portfolio Website", etc. with your actual project names.
   Keep blurbs brief though.

Q: "What if I don't have 4 projects yet?"
A: Start with 3. You can add more later. The component works with any number.

Q: "Can I use real images instead of Picsum?"
A: Yes, but you'll need to host them or put them in your assets folder. For
   now, Picsum is easier. We'll replace them for homework.

Q: "Why does href start with /portfolio/?"
A: That's the URL pattern for project detail pages. We'll create those in
   Class 8 using dynamic routing.

Q: "What makes a good blurb?"
A: 1-2 sentences, under 100 characters. Describes what the project is or does.
   Think of it like a tweet - brief and informative.

Q: "Do all projects need to have the same number of properties?"
A: For now, yes - all 5 properties. In Class 8 we'll add more, but they're
   optional. The 5 we have now are required for cards.

================================================================================
WHAT'S NEXT
================================================================================

Next, we'll build:
1. ProjectCard.jsx - Component that displays one project
2. Projects.jsx - Section that maps over projects and displays cards
3. Update Home.jsx - Add Projects section to homepage

You'll see how this data comes to life as visual cards!

In Class 8, we'll:
- Add detailed project fields (overview, highlights, role, tools, etc.)
- Create Project detail pages
- Use dynamic routing with these IDs

================================================================================
HOMEWORK ASSIGNMENT
================================================================================

**For next class, students should gather:**

1. **Project Information**
   - Titles of 3-4 real projects you've worked on
   - Brief descriptions (1-2 sentences each)
   - What the project was/does

2. **Project Images**
   - Screenshots of final projects
   - Mockups or designs
   - Hero images or key screens
   - Save as JPG or PNG files

3. **Project URLs/Slugs**
   - Decide on URL-friendly names
   - Use lowercase and underscores/hyphens
   - Example: "my-portfolio-site" or "ecommerce_project"

4. **Make a List (on paper or in notes):**
   For each project:
   - Project title
   - 1-2 sentence description
   - Image filename or URL
   - Slug for URL

**TIP:** Choose your best 3-4 projects. Quality over quantity!

**OPTIONAL:** 
If you have live project links, save them too. We'll add those in Class 8.

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Unexpected token" or "Unexpected string"
FIX:
- Check for missing commas between objects
- Check that all strings are in quotes
- Verify curly braces {} are balanced
- Make sure each property has a colon

SYNTAX HIGHLIGHTING LOOKS WRONG:
FIX:
- Ensure file extension is .js (not .txt)
- VS Code should show JavaScript icon
- Check that quotes match (all single or all double)

CAN'T REMEMBER THE STRUCTURE:
FIX:
- Look at the first project object
- Copy and paste, then change values
- Each object needs all 5 properties

IMAGES NOT LOADING LATER:
FIX:
- Picsum URLs need internet connection
- Check random number is different for each project
- If using your own images, verify file paths

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ File exists at src/data/projects.js
□ No syntax errors (no red underlines in VS Code)
□ File starts with: export const projects = [
□ File ends with: ];
□ At least 3-4 project objects in array
□ Each object has all 5 properties (id, title, blurb, image, href)
□ Each object has comma after it
□ All strings are in quotes
□ Each id is unique
□ Image URLs use different random numbers
□ hrefs follow pattern: /portfolio/{id}

================================================================================
CUSTOMIZATION IDEAS FOR STUDENTS
================================================================================

**Now (during class):**
- Change project titles to your real projects
- Write your own blurbs (keep them brief!)
- Choose different placeholder images (change random numbers)

**For Homework:**
- Replace placeholder content with real project info
- Add your actual project screenshots
- Write compelling blurbs that showcase the projects

**Later (Class 8):**
- Add detailed fields (overview, highlights, role, tools, timeline, client)
- Add links to live projects or GitHub repos
- Add tags/categories for filtering

These will require updating the data structure and components.

================================================================================
PREVIEW: HOW THIS DATA WILL BE USED
================================================================================

INSTRUCTOR SHOWS:
"Let me show you how this data will look when rendered..."

PREVIEW CODE (DON'T TYPE YET):
------------------------------
{projects.map((project) => (
  <ProjectCard
    key={project.id}
    image={project.image}
    title={project.title}
    blurb={project.blurb}
    href={project.href}
  />
))}

THIS MEANS:
- Loop through each project in the array
- Create a ProjectCard for each one
- Pass the data as props
- Automatically creates 4 cards from our 4 projects!

We'll build this in the next lessons.

================================================================================
END OF PROJECTS.JS GUIDE (CLASS 4 - PROJECT DATA FILE)
================================================================================
