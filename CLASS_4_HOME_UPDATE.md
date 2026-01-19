================================================================================
CLASS 4: HOME.JSX UPDATE - ADD PROJECTS SECTION
================================================================================

OVERVIEW FOR INSTRUCTOR
-----------------------
This guide teaches students how to add the Projects section to the Home page,
showing a limited preview of 6 projects with a "View More" button. This is a
simple update that demonstrates how to import and use the Projects section
component we just built.

Students will update the existing file: src/pages/Home.jsx

NOTE: Students must have already completed:
- Home.jsx with Hero section (Class 1)
- TechStack section (Class 3)
- Projects section component (Class 4 - previous guide)

CONCEPTS TAUGHT:
- Importing section components
- Using components with props
- Organizing page sections
- Building a complete homepage

WHAT WE'RE ADDING IN CLASS 4:
- Import the Projects section component
- Add <Projects limit={6} /> below TechStack
- Create a cohesive multi-section homepage

================================================================================
STEP 1: IMPORT THE PROJECTS SECTION
================================================================================

INSTRUCTOR SAYS:
"Now that we've built the Projects section component, let's add it to our
homepage! We'll import it at the top with our other section components, then
add it below the TechStack section. This will show a preview of 6 projects
with a button to see more."

STUDENTS ADD:
-------------
Find the import statements at the top of Home.jsx and add this import after
the TechStack import:

import Projects from "../components/sections/Projects.jsx";

EXPLAIN:
--------
- We import the Projects component from the sections folder
- Path: ../components/sections/ means go up one level (out of pages) then into components/sections
- We'll use this component to show a limited number of projects

CURRENT IMPORTS SHOULD LOOK LIKE:
----------------------------------
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SEO from "../components/ui/SEO.jsx";
import TechStack from "../components/sections/TechStack.jsx";
import Projects from "../components/sections/Projects.jsx";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

================================================================================
STEP 2: ADD THE PROJECTS SECTION TO THE PAGE
================================================================================

INSTRUCTOR SAYS:
"Let's add the Projects section right after TechStack. We'll use limit={6} to
show just the first 6 projects, and the component will automatically show the
'View More' button since there are more projects in our data."

STUDENTS ADD:
-------------
Find the line with <TechStack /> and add the Projects section right after it:

      <TechStack />
      <Projects limit={6} />
    </div>

EXPLAIN:
--------
- <Projects limit={6} /> - Uses the Projects component
- limit={6} - Props tell it to show only the first 6 projects
- Since we're using limit, and we have more than 6 projects in the data, the
  "View More" button will automatically appear
- The component will use all its default values for title, description, etc.
- Later, students can customize by passing different props (like a custom title)

ASK STUDENTS:
"What would happen if we didn't include the limit prop?"
(Answer: It would show ALL projects from the data file, and the "View More" 
button wouldn't show since we're not limiting the display)

CURRENT HOME PAGE STRUCTURE SHOULD LOOK LIKE:
----------------------------------------------
The return statement should now have these sections in order:

    <div>
      <SEO ... />
      <Section>
        {/* Hero section with heading, description, buttons, social links, image */}
      </Section>

      <TechStack />
      <Projects limit={6} />
    </div>

================================================================================
STEP 3: TEST THE UPDATED HOME PAGE
================================================================================

INSTRUCTOR SAYS:
"Let's save and test! Your homepage should now show the hero section, tech
stack, and a grid of your first 6 projects with a 'View More' button at the
bottom."

MAKE SURE DEV SERVER IS RUNNING:
---------------------------------
If not already running:

npm run dev

WHAT STUDENTS SHOULD SEE:
--------------------------
Navigate to http://localhost:5173/ and verify:

1. Hero section at top (with heading, description, buttons, social links, image)
2. TechStack section below hero
3. Projects section below TechStack showing:
   - "My Portfolio" heading
   - Description text
   - Grid of 6 project cards (1 column on mobile, 2 on tablet, 3 on desktop)
   - "View More of My Work" button centered below the grid

DEMONSTRATE:
------------
1. Scroll through the page to see all sections
2. Resize the browser window to see the responsive grid (1→2→3 columns)
3. Hover over project cards to see hover effects
4. Check the "View More" button appears at the bottom

COMMON MISTAKE:
Students might forget the import statement and get "Projects is not defined"
Fix: Add the import at the top of the file

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Imported the Projects section component
✓ Added Projects section to Home page with limit={6}
✓ Built a multi-section homepage (Hero, TechStack, Projects)
✓ Projects display in responsive grid with "View More" button
✓ Homepage now showcases student's work effectively

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Importing and using section components
- Passing props to control component behavior
- Building pages with multiple sections
- Progressive page building (adding sections incrementally)

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Can I change the number of projects shown?"
A: Yes! Change limit={6} to any number. Try limit={3} or limit={9}.

Q: "Can I change the 'My Portfolio' heading?"
A: Yes! Add a title prop: <Projects limit={6} title="Recent Projects" />

Q: "Can I change the button text?"
A: The current component uses "View More of My Work". To customize this, you'd
   need to add a buttonText prop to the Projects component (future enhancement).

Q: "The 'View More' button links to /portfolio, but that page doesn't exist yet."
A: That's okay! We'll build the Portfolio page in a later class. The link won't
   work until then, but it won't cause any errors.

Q: "Can I hide the 'View More' button?"
A: Yes! Add showViewMore={false}: <Projects limit={6} showViewMore={false} />

================================================================================
OPTIONAL CUSTOMIZATIONS
================================================================================

INSTRUCTOR SAYS:
"Here are some ways you can customize the Projects section. These are optional
but fun to experiment with!"

OPTION 1: CUSTOM TITLE AND DESCRIPTION
---------------------------------------
<Projects 
  limit={6} 
  title="Featured Projects"
  description="Check out some of my recent work. I love building things that make people's lives easier."
/>

OPTION 2: DIFFERENT LIMIT
--------------------------
<Projects limit={3} />  {/* Shows only 3 projects */}
<Projects limit={9} />  {/* Shows 9 projects in a 3x3 grid */}

OPTION 3: NO "VIEW MORE" BUTTON
--------------------------------
<Projects limit={6} showViewMore={false} />

OPTION 4: CUSTOM HEADING LEVEL (FOR ACCESSIBILITY)
---------------------------------------------------
If Projects is the first major section after hero:
<Projects limit={6} headingLevel="h2" headingId="recent-projects" />

================================================================================
WHAT'S NEXT
================================================================================

Your homepage is really coming together! You now have:
- A hero section introducing you
- A tech stack showcasing your skills
- A projects preview showing your work

In future classes, we'll add:
- Testimonials section (Class 5)
- Contact section / Final CTA (Class 6)
- Portfolio page (showing ALL projects)
- Individual project detail pages
- About page
- Resume page

We're building this progressively so each class adds something new without
breaking what we've already built!

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Projects is not defined"
FIX:
- Add the import: import Projects from "../components/sections/Projects.jsx";
- Check the import path is correct (should start with ../)
- Verify Projects.jsx exists in src/components/sections/

ERROR: "Cannot find module '../../data/projects.js'"
FIX:
- This error comes from Projects.jsx, not Home.jsx
- Verify projects.js exists in src/data/
- Check that projects.js has: export const projects = [...]

SYMPTOM: Projects section shows but no project cards appear
FIX:
- Check browser console for errors
- Verify projects.js has at least 6 projects
- Make sure each project has: id, image, title, blurb, href

SYMPTOM: "View More" button doesn't appear
FIX:
- Make sure you're using limit={6} (or another number less than total projects)
- Check that you have MORE than 6 projects in projects.js
- Verify showViewMore prop isn't set to false

SYMPTOM: Page layout looks broken or sections overlap
FIX:
- Check that all sections are inside the main <div> in the return statement
- Verify each section component has proper opening and closing tags
- Check browser console for any JSX syntax errors

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ File saved without errors in VS Code
□ No errors in terminal or browser console
□ Homepage loads at http://localhost:5173/
□ Hero section displays correctly at top
□ TechStack section displays below hero
□ Projects section displays below TechStack
□ 6 project cards appear in a grid
□ Grid is responsive (test by resizing browser)
□ "View More of My Work" button appears below projects
□ Scrolling the page is smooth with no layout issues
□ All sections have proper spacing between them

================================================================================
COMPLETE HOME.JSX REFERENCE (AFTER THIS UPDATE)
================================================================================

Your Home.jsx should now look like this at the end:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SEO from "../components/ui/SEO.jsx";
import TechStack from "../components/sections/TechStack.jsx";
import Projects from "../components/sections/Projects.jsx";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <SEO
        title="Home"
        description="YOUR NAME HERE - UX Designer & Frontend Developer. Crafting digital experiences that combine beautiful design with seamless functionality."
        url="/"
      />
      <Section
        as="section"
        aria-labelledby="intro-heading"
        className="min-h-[80vh] grid place-items-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]"
      >
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Text Content - 2/3 */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 id="intro-heading" className="heading-hero">
                Hi, my name is Joe Anonymous. I create things for the web
              </h1>

              <h2 className="mt-4 max-w-prose lg:mx-0 mx-auto body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget
                finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere
                malesuada
              </h2>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap lg:justify-start justify-center gap-4">
                <Button as="a" href="/portfolio" aria-label="Check out my work" variant="primary">
                  Check Out My Work
                </Button>
                <Button as="a" href="/resume" aria-label="Download my resume" variant="secondary">
                  View My Resume
                </Button>
              </div>

              {/* Social links with SVG icons */}
              <nav aria-label="Social links" className="mt-6">
                <ul className="flex items-center lg:justify-start justify-center gap-6 text-caption">
                  <li>
                    <Button
                      as="a"
                      href="https://www.linkedin.com/in/placeholder"
                      target="_blank"
                      rel="noreferrer"
                      variant="link"
                      leftIcon={<FaLinkedin className="w-5 h-5" />}
                      aria-label="LinkedIn (opens in a new tab)"
                    >
                      LinkedIn
                    </Button>
                  </li>

                  <li>
                    <Button
                      as="a"
                      href="https://github.com/placeholder"
                      target="_blank"
                      rel="noreferrer"
                      variant="link"
                      leftIcon={<FaGithub className="w-5 h-5" />}
                      aria-label="GitHub (opens in a new tab)"
                    >
                      GitHub
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Circular Image - 1/3 */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="w-64 h-64 lg:w-80 lg:h-80 card-avatar">
                <img
                  src="https://picsum.photos/320?random=100"
                  alt="Joe Anonymous"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <TechStack />
      <Projects limit={6} />
    </div>
  );
}

NOTE: Later we'll add more sections (Testimonials, FinalCTA) at the end!

================================================================================
END OF HOME.JSX UPDATE GUIDE (CLASS 4 - ADD PROJECTS SECTION)
================================================================================
