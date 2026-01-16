================================================================================
CLASS 2: UPDATE HOME.JSX - ADD BASIC HERO SECTION WITH BUTTONS
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide walks students through creating a SIMPLE, CLEAN hero section for
the Home page. This is intentionally basic - we'll enhance it significantly
in later classes with images, social links, and section components.

Students will edit: src/pages/Home.jsx

NOTE: This assumes students have already:

- Created basic Home.jsx in Class 1
- Built Button.jsx in Class 1
- Just created SEO.jsx in this class

CONCEPTS REINFORCED:

- Using the Button component
- Call-to-action (CTA) design
- Basic layout and spacing
- Component composition with SEO

WHAT WE'RE ADDING (CLASS 2 - SIMPLE VERSION):

- SEO component for meta tags
- Two CTA buttons (Check Out My Work, View Resume)
- Clean, centered hero section
- Proper semantic HTML

⚠️ EVOLUTION NOTE:
This version creates a simple, centered hero section that works and looks good.
In later classes, we'll significantly enhance it:

- Class 5/6: Add TechStack section component
- Class 6/7: Add Projects and Testimonials sections
- Class 8/9: Add profile image with grid layout
- Class 9/10: Add social media links with react-icons
- Class 10/11: Add gradient backgrounds and advanced styling
- Class 11/12: Add FinalCTA section

Students will learn progressive enhancement - start simple, add complexity.

================================================================================
STEP 1: REVIEW CURRENT HOME.JSX
================================================================================

INSTRUCTOR SAYS:
"Let's open our Home page and review what we built in Class 1. Then we'll
enhance it with buttons and SEO."

STUDENTS OPEN: src/pages/Home.jsx

## CURRENT CODE SHOULD LOOK LIKE (FROM CLASS 1):

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function Home() {
return (
<Section>
<Container>
<h1 className="heading-hero">
Hi, my name is [Your Name]. I create things for the web
</h1>

        <h2 className="mt-4 body-large">
          I'm a UX Designer and Frontend Developer passionate about creating
          beautiful, accessible, and user-friendly web experiences.
        </h2>

        {/* Buttons will go here after we build Button component */}
      </Container>
    </Section>

);
}

## EXPLAIN:

- Basic hero section with heading and subheading
- Comment where buttons will go
- We built this in Class 1, now we'll enhance it

================================================================================
STEP 2: IMPORT SEO COMPONENT
================================================================================

INSTRUCTOR SAYS:
"First, let's import the SEO component we just built so this page has proper
meta tags for search engines and social media."

## STUDENTS ADD TO IMPORTS:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

## EXPLAIN:

- SEO component from components/ui/
- We just built this in the previous lesson
- Will add dynamic meta tags to this page
- Improves SEO and social sharing

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Home() {
return (
<Section>
{/_ ...rest of code... _/}
</Section>
);
}

================================================================================
STEP 3: IMPORT BUTTON COMPONENT
================================================================================

INSTRUCTOR SAYS:
"Now let's import the Button component we built in Class 1. We'll use it to
create call-to-action buttons."

## STUDENTS ADD TO IMPORTS:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";

## EXPLAIN:

- Button component from components/ui/
- We built this in Class 1
- Supports variants (primary, secondary), sizes, and can render as links

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";

export default function Home() {
return (
<Section>
{/_ ...rest of code... _/}
</Section>
);
}

================================================================================
STEP 4: WRAP CONTENT IN A DIV
================================================================================

INSTRUCTOR SAYS:
"We need to add SEO at the top of our page. React components can only return
one root element, so we need to wrap everything in a div."

## STUDENTS UPDATE THE RETURN STATEMENT:

Find:
return (
<Section>
<Container>
{/_ content _/}
</Container>
</Section>
);

Replace with:
return (
<div>
<Section>
<Container>
{/_ content _/}
</Container>
</Section>
</div>
);

## EXPLAIN:

- Wrapping in <div> gives us a single root element
- This allows us to add the SEO component as a sibling
- The div has no styling, it's just a wrapper

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";

export default function Home() {
return (
<div>
<Section>
<Container>
<h1 className="heading-hero">
Hi, my name is [Your Name]. I create things for the web
</h1>

          <h2 className="mt-4 body-large">
            I'm a UX Designer and Frontend Developer passionate about creating
            beautiful, accessible, and user-friendly web experiences.
          </h2>

          {/* Buttons will go here */}
        </Container>
      </Section>
    </div>

);
}

================================================================================
STEP 5: ADD SEO COMPONENT
================================================================================

INSTRUCTOR SAYS:
"Now let's add the SEO component at the very top, before the Section. This
will set the page title and meta tags."

## STUDENTS ADD SEO COMPONENT:

Add right after the opening <div>, before <Section>:

      <SEO
        title="Home"
        description="YOUR NAME - UX Designer & Frontend Developer. Crafting digital experiences that combine beautiful design with seamless functionality."
        url="/"
      />

## EXPLAIN:

- SEO component first (renders meta tags, nothing visual)
- title="Home" - Sets page title
- description - Used by search engines and social media
- url="/" - The home page route

## CURRENT CODE SHOULD LOOK LIKE:

export default function Home() {
return (
<div>
<SEO
        title="Home"
        description="YOUR NAME - UX Designer & Frontend Developer. Crafting digital experiences that combine beautiful design with seamless functionality."
        url="/"
      />

      <Section>
        <Container>
          <h1 className="heading-hero">
            Hi, my name is [Your Name]. I create things for the web
          </h1>

          <h2 className="mt-4 body-large">
            I'm a UX Designer and Frontend Developer passionate about creating
            beautiful, accessible, and user-friendly web experiences.
          </h2>

          {/* Buttons will go here */}
        </Container>
      </Section>
    </div>

);
}

INSTRUCTOR SAYS:
"Make sure students replace 'YOUR NAME' with their actual name or placeholder."

================================================================================
STEP 6: REPLACE COMMENT WITH BUTTON GROUP
================================================================================

INSTRUCTOR SAYS:
"Now let's remove the comment and add two call-to-action buttons. We'll use
the Button component we built in Class 1."

## STUDENTS REPLACE THE COMMENT:

Find this line:
{/_ Buttons will go here _/}

Replace it with:
<div className="mt-8 flex flex-wrap justify-center gap-4">
<Button as="a" href="/portfolio" variant="primary">
Check Out My Work
</Button>
<Button as="a" href="/resume" variant="secondary">
View My Resume
</Button>
</div>

## EXPLAIN LINE BY LINE:

<div className="mt-8 flex flex-wrap justify-center gap-4">
  - mt-8: Margin top (spacing above buttons)
  - flex: Use flexbox for button layout
  - flex-wrap: Buttons wrap on small screens
  - justify-center: Center buttons horizontally
  - gap-4: Space between buttons

<Button as="a" href="/portfolio" variant="primary">
  - as="a": Render as a link (polymorphic component!)
  - href="/portfolio": Link to portfolio page
  - variant="primary": Blue button style
  - Text: "Check Out My Work"

<Button as="a" href="/resume" variant="secondary">
  - variant="secondary": Outlined button style
  - Links to resume page

ASK STUDENTS:
"Why do we use as='a' instead of as='button'?"
(Answer: These navigate to other pages, so they should be links, not buttons.
This is better for accessibility and SEO.)

## CURRENT CODE SHOULD LOOK LIKE:

export default function Home() {
return (
<div>
<SEO
        title="Home"
        description="YOUR NAME - UX Designer & Frontend Developer. Crafting digital experiences that combine beautiful design with seamless functionality."
        url="/"
      />

      <Section>
        <Container>
          <h1 className="heading-hero">
            Hi, my name is [Your Name]. I create things for the web
          </h1>

          <h2 className="mt-4 body-large">
            I'm a UX Designer and Frontend Developer passionate about creating
            beautiful, accessible, and user-friendly web experiences.
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button as="a" href="/portfolio" variant="primary">
              Check Out My Work
            </Button>
            <Button as="a" href="/resume" variant="secondary">
              View My Resume
            </Button>
          </div>
        </Container>
      </Section>
    </div>

);
}

================================================================================
STEP 7: PERSONALIZE THE CONTENT
================================================================================

INSTRUCTOR SAYS:
"Before we test, let's personalize this content. Everyone should replace the
placeholder text with their own information."

## STUDENTS SHOULD UPDATE:

1. Replace "YOUR NAME" in the SEO description with their name
2. Replace "[Your Name]" in the h1 with their actual name
3. Customize the h2 subtitle if desired

## EXAMPLE:

<h1 className="heading-hero">
  Hi, my name is Sarah Chen. I create things for the web
</h1>

<h2 className="mt-4 body-large">
  I'm a UX Designer and Frontend Developer passionate about creating
  beautiful, accessible, and user-friendly web experiences.
</h2>

================================================================================
STEP 8: TEST THE PAGE
================================================================================

INSTRUCTOR SAYS:
"Let's test our enhanced home page. Make sure your dev server is running."

IF SERVER IS NOT RUNNING:
Students run: npm run dev

STUDENTS SHOULD:

1. Open http://localhost:5173 in browser
2. See the updated home page with buttons
3. Hover over buttons (should see hover effects)
4. Click "Check Out My Work" (navigates to /portfolio - probably 404 for now, that's ok)
5. Click "View My Resume" (navigates to /resume - probably 404 for now, that's ok)
6. Check browser tab title (should say "Home - CB Hayes" or similar)
7. Test responsive: resize browser, buttons should stack nicely

## EXPLAIN:

- Portfolio and Resume pages don't exist yet - that's ok!
- We're building progressively
- The buttons work, they just go to pages we haven't built yet
- Notice the buttons look professional and have nice hover effects

================================================================================
STEP 9: REVIEW BUTTON VARIANTS
================================================================================

INSTRUCTOR SAYS:
"Notice we used two different button variants. Let's review what our Button
component can do."

## SHOW STUDENTS IN THE CODE:

variant="primary" → Solid blue button with white text
variant="secondary" → Outlined button with transparent background

## OPTIONAL: DEMONSTRATE OTHER OPTIONS:

"Our Button component also supports:

- Different sizes (sm, md, lg)
- Icons (we'll use this later)
- Rendering as button, a, or Link
- Disabled state

We'll explore these more in future classes."

================================================================================
FINAL REVIEW
================================================================================

WHAT WE ACCOMPLISHED:

- ✅ Added SEO component for better search engine visibility
- ✅ Added two professional CTA buttons
- ✅ Used our reusable Button component
- ✅ Personalized the content
- ✅ Created a clean, centered hero section

## FINAL CODE (CLASS 2 VERSION):

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";

export default function Home() {
return (
<div>
<SEO
        title="Home"
        description="YOUR NAME - UX Designer & Frontend Developer. Crafting digital experiences that combine beautiful design with seamless functionality."
        url="/"
      />

      <Section>
        <Container>
          <h1 className="heading-hero">
            Hi, my name is [Your Name]. I create things for the web
          </h1>

          <h2 className="mt-4 body-large">
            I'm a UX Designer and Frontend Developer passionate about creating
            beautiful, accessible, and user-friendly web experiences.
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button as="a" href="/portfolio" variant="primary">
              Check Out My Work
            </Button>
            <Button as="a" href="/resume" variant="secondary">
              View My Resume
            </Button>
          </div>
        </Container>
      </Section>
    </div>

);
}

================================================================================
EVOLUTION TO FINAL CODE (FOR INSTRUCTOR REFERENCE)
================================================================================

This Class 2 version is intentionally simplified. Here's the complete evolution:

## CLASS 2 VERSION (Current):

- Simple, centered hero section
- Two CTA buttons
- SEO meta tags
- Clean and professional

## CLASS 5/6 UPGRADE - ADD TECH STACK:

We'll add the TechStack section component below the hero:

import TechStack from "../components/sections/TechStack.jsx";

// In return:
<Section>
{/_ hero content _/}
</Section>

      <TechStack />

## CLASS 6/7 UPGRADE - ADD PROJECTS AND TESTIMONIALS:

import Projects from "../components/sections/Projects.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";

// In return:
<TechStack />
<Projects limit={6} />
<Testimonials limit={3} />

## CLASS 8/9 UPGRADE - ADD PROFILE IMAGE AND GRID LAYOUT:

Transform the hero section to use a 2-column grid:

<Section className="min-h-[80vh] grid place-items-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]">
  <Container>
    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
      {/* Text Content - 2/3 */}
      <div className="lg:col-span-2 text-center lg:text-left">
        {/* existing hero text and buttons */}
      </div>

      {/* Circular Image - 1/3 */}
      <div className="lg:col-span-1 flex justify-center lg:justify-end">
        <div className="w-64 h-64 lg:w-80 lg:h-80 card-avatar">
          <img
            src="https://picsum.photos/320?random=100"
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

  </Container>
</Section>

## CLASS 9/10 UPGRADE - ADD SOCIAL MEDIA LINKS:

Install react-icons:
npm install react-icons

Add social links below the CTA buttons:

import { FaLinkedin, FaGithub } from "react-icons/fa";

// After CTAs:

<nav aria-label="Social links" className="mt-6">
  <ul className="flex items-center lg:justify-start justify-center gap-6">
    <li>
      <Button
        as="a"
        href="https://www.linkedin.com/in/yourprofile"
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
        href="https://github.com/yourprofile"
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

## CLASS 11/12 UPGRADE - ADD FINAL CTA:

import FinalCTA from "../components/sections/FinalCTA.jsx";

// At the end:
<Testimonials limit={3} />
<FinalCTA />

## FINAL VERSION (Matches actual codebase):

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SEO from "../components/ui/SEO.jsx";
import TechStack from "../components/sections/TechStack.jsx";
import Projects from "../components/sections/Projects.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
return (
<div>
<SEO
        title="Home"
        description="YOUR NAME - UX Designer & Frontend Developer. Crafting digital experiences that combine beautiful design with seamless functionality."
        url="/"
      />
<Section
        as="section"
        aria-labelledby="intro-heading"
        className="min-h-[80vh] grid place-items-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]"
      >
<Container>
<div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
{/_ Text Content - 2/3 _/}
<div className="lg:col-span-2 text-center lg:text-left">
<h1 id="intro-heading" className="heading-hero">
Hi, my name is [Your Name]. I create things for the web
</h1>

              <h2 className="mt-4 max-w-prose lg:mx-0 mx-auto body-large">
                I'm a UX Designer and Frontend Developer passionate about creating
                beautiful, accessible, and user-friendly web experiences.
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

              {/* Social links */}
              <nav aria-label="Social links" className="mt-6">
                <ul className="flex items-center lg:justify-start justify-center gap-6">
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
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <TechStack />
      <Projects limit={6} />
      <Testimonials limit={3} />
      <FinalCTA />
    </div>

);
}

## TEACHING PROGRESSION SUMMARY:

1. Class 2: Simple centered hero with buttons → Foundation
2. Class 5/6: Add TechStack section → Content expansion
3. Class 6/7: Add Projects and Testimonials → More sections
4. Class 8/9: Add grid layout and profile image → Visual enhancement
5. Class 9/10: Add social links with icons → Professional polish
6. Class 11/12: Add FinalCTA section → Complete homepage

Each step teaches a concept:

- Composition (adding sections)
- Grid layouts (responsive design)
- Third-party packages (react-icons)
- Accessibility (ARIA labels, semantic HTML)
- Progressive enhancement (simple → complex)

This ensures we never teach incorrect patterns - each version is correct for
its stage and builds logically to the next.

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why do the portfolio and resume links give 404 errors?"
A: "Great observation! We haven't built those pages yet. We're building
progressively. The buttons work correctly - the pages just don't exist yet.
We'll build them in future classes."

Q: "Can I change the button text?"
A: "Absolutely! This is your portfolio. Customize the text to match your
personality and brand. Just keep it professional and clear about what the
button does."

Q: "Why do we use as='a' instead of Link from React Router?"
A: "Excellent question! We could use Link, but as='a' works fine here. When
we need more advanced routing features (like preventing default, state
passing), we'll switch to Link. For now, simple links work great."

Q: "Can I add more buttons?"
A: "Sure! Just add another <Button> component inside the flex container. But
remember, too many CTAs can overwhelm users. 2-3 is usually ideal for a
hero section."

Q: "Why does flex-wrap matter?"
A: "On mobile devices, if the screen is too narrow for both buttons side by
side, flex-wrap lets them stack vertically instead of squishing together.
Try resizing your browser to see it in action!"

================================================================================
HOMEWORK/PRACTICE
================================================================================

SUGGESTED PRACTICE:

1. Personalize all placeholder text with your own information
2. Try adding a third button (maybe "Contact Me" linking to /contact)
3. Experiment with button order - which order feels most natural?
4. Try changing variant="primary" to variant="secondary" - see the difference
5. Test on mobile (resize browser) - buttons should wrap nicely

CHALLENGE:
Try adding your own custom subtitle. What makes a good portfolio tagline?
Examples:

- "Building responsive web apps with React and Tailwind CSS"
- "Turning ideas into interactive experiences"
- "Frontend developer with a passion for clean code and design"

NEXT CLASS PREVIEW:
"Next class, we'll start building reusable section components for our portfolio.
We'll create a TechStack section to showcase the technologies you know. This
will teach you about data-driven components and icon libraries!"

================================================================================
TROUBLESHOOTING
================================================================================

ISSUE: Buttons don't appear
CHECK:

- Is Button imported correctly?
- Did you spell variant="primary" correctly?
- Is the Button component file in components/ui/?

ISSUE: Buttons look weird/unstyled
CHECK:

- Is Tailwind CSS working on other elements?
- Did you build Button.jsx in Class 1?
- Check browser console for errors

ISSUE: SEO component causes error
CHECK:

- Is SEO.jsx created in components/ui/?
- Did you follow the SEO lesson correctly?
- Check for typos in the import path

ISSUE: Page is blank
CHECK:

- Browser console for errors
- Dev server is running (npm run dev)
- No syntax errors (missing closing tags, etc.)

================================================================================
