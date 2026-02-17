================================================================================
CLASS 2: HOME.JSX - COMPLETE HOMEPAGE WITH HERO, SECTIONS, AND SOCIAL LINKS
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide walks students through creating the complete Home page with a
professional hero section, social links with react-icons, and section components.
This is a comprehensive component that demonstrates modern React patterns.

Students will edit: src/pages/Home.jsx

NOTE: This assumes students have already:

- Created Button.jsx in Class 1
- Created Section.jsx and Container.jsx in Class 1
- Created SEO.jsx in this class
- Created TechStack.jsx component
- Created Projects.jsx component
- Created Testimonials.jsx component
- Created FinalCTA.jsx component
- Installed react-icons package (npm install react-icons)

CONCEPTS TAUGHT:

- Advanced grid layouts (2-column responsive)
- React Icons integration
- Social media links with accessibility
- Component composition with section imports
- Background gradients
- Profile image integration
- Semantic HTML with ARIA attributes

WHAT WE'RE BUILDING:

- Hero section with 2-column grid (text + image)
- Two CTA buttons
- Social media links with react-icons
- TechStack section
- Projects section (with limit prop)
- Testimonials section (with limit prop)
- FinalCTA section
- Full SEO meta tags

================================================================================
STEP 1: CREATE HOME.JSX WITH ALL IMPORTS
================================================================================

INSTRUCTOR SAYS:
"We're going to build a complete, professional homepage. This will showcase
everything we've learned and use several section components we've built. Let's
start with all our imports."

## STUDENTS OPEN OR CREATE: src/pages/Home.jsx

## STUDENTS TYPE ALL IMPORTS:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SEO from "../components/ui/SEO.jsx";
import TechStack from "../components/sections/TechStack.jsx";
import Projects from "../components/sections/Projects.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
return (
<div>
{/_ Content will go here _/}
</div>
);
}

## EXPLAIN:

- Section, Container, Button, SEO - Our core UI components
- TechStack, Projects, Testimonials, FinalCTA - Section components we built
- FaLinkedin, FaGithub, FaInstagram - Icons from react-icons/fa (Font Awesome)
- react-icons must be installed: npm install react-icons
- Notice destructuring { } for named imports from react-icons

ASK STUDENTS:
"Why do we import specific icons instead of the whole library?"
(Answer: Tree-shaking! Only the icons we use get bundled, keeping file size small.)

================================================================================
STEP 2: ADD SEO COMPONENT
================================================================================

INSTRUCTOR SAYS:
"First, let's add SEO for the homepage. This sets the title, description, and
canonical URL for search engines and social media."

## STUDENTS ADD INSIDE THE DIV:

export default function Home() {
return (
<div>
<SEO
        title="Home"
        description="YOUR NAME HERE - UX Designer & Frontend Developer. Crafting digital experiences that combine beautiful design with seamless functionality."
        url="/"
      />

      {/* Hero section will go here */}
    </div>

);
}

## EXPLAIN:

- SEO component first (renders meta tags in <head>)
- title="Home" - Browser tab will show "Home | Your Site Name"
- description - What appears in Google search results and social shares
- url="/" - The canonical URL for this page
- Students should customize with their own name and tagline!

================================================================================
STEP 3: BUILD HERO SECTION WITH ADVANCED LAYOUT
================================================================================

INSTRUCTOR SAYS:
"Now let's build our hero section. This uses a grid layout with the text on
the left taking 2/3 of the space, and a profile image on the right taking 1/3.
We'll also add a gradient background and make it minimum 80vh tall."

## STUDENTS ADD THE HERO SECTION:

After the SEO component, add:

      <Section
        as="section"
        aria-labelledby="intro-heading"
        className="min-h-[80vh] grid place-items-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]"
      >
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Text Content - 2/3 */}
            {/* Will add text content here */}

            {/* Circular Image - 1/3 */}
            {/* Will add image here */}
          </div>
        </Container>
      </Section>

## EXPLAIN:

- as="section" - Renders as semantic <section> element
- aria-labelledby="intro-heading" - Links to h1 for accessibility
- min-h-[80vh] - Minimum height of 80% of viewport
- grid place-items-center - Centers content vertically
- bg-gradient-to-b - Gradient background from top to bottom
- from-[#0a0a0b] to-[#1a1a1d] - Dark gradient colors
- grid lg:grid-cols-3 - 3 column grid on large screens
- gap-8 lg:gap-12 - Responsive gap between grid items
- items-center - Vertically center grid items

ASK STUDENTS:
"Why do we use min-h-[80vh] instead of h-[80vh]?"
(Answer: min-h allows content to grow if needed, while h would cut it off.)

================================================================================
STEP 4: ADD TEXT CONTENT (LEFT SIDE - 2/3 WIDTH)
================================================================================

INSTRUCTOR SAYS:
"Let's add the text content on the left side. This will span 2 columns of our
3-column grid. It includes the heading, subheading, CTA buttons, and we'll add
social links next."

## STUDENTS REPLACE {/_ Text Content - 2/3 _/} COMMENT WITH:

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

              {/* Social links will go here */}
            </div>

## EXPLAIN:

- lg:col-span-2 - Spans 2 columns on large screens (2/3 of width)
- text-center lg:text-left - Centered on mobile, left-aligned on desktop
- id="intro-heading" - Matches aria-labelledby on Section
- heading-hero - Custom typography class for main heading
- max-w-prose - Limits line length for readability
- lg:mx-0 mx-auto - Auto margin on mobile (centers), 0 on desktop
- body-large - Custom class for large body text
- mt-8 - Margin-top for spacing above buttons
- flex flex-wrap - Flexible button container that wraps
- lg:justify-start justify-center - Buttons centered mobile, left desktop
- gap-4 - Space between buttons
- aria-label on buttons - Accessible labels for screen readers

INSTRUCTOR NOTE:
"Students should replace 'Joe Anonymous' with their own name and customize
the subheading text to describe themselves!"

================================================================================
STEP 5: ADD SOCIAL LINKS WITH REACT-ICONS
================================================================================

INSTRUCTOR SAYS:
"Below the CTA buttons, let's add social media links. These use react-icons
for the icon graphics and our Button component styled as links."

## STUDENTS REPLACE {/_ Social links will go here _/} WITH:

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

## EXPLAIN:

- <nav aria-label="Social links"> - Semantic navigation with label
- <ul> and <li> - Semantic list structure
- flex items-center - Horizontal layout, vertically centered
- lg:justify-start justify-center - Left on desktop, centered on mobile
- gap-6 - Space between social links
- text-caption - Small text size
- variant="link" - Button styled as a text link
- target="\_blank" - Opens in new tab
- rel="noreferrer" - Security best practice for external links
- leftIcon prop - Passes icon as left icon to Button
- <FaLinkedin className="w-5 h-5" /> - Font Awesome LinkedIn icon, 20px × 20px
- aria-label - Descriptive label including "(opens in a new tab)"

ASK STUDENTS:
"Why do we use rel='noreferrer' with target='\_blank'?"
(Answer: Security! It prevents the new page from accessing window.opener and
protects against certain attacks.)

INSTRUCTOR NOTE:
"Students should replace 'placeholder' with their actual LinkedIn and GitHub
usernames!"

================================================================================
STEP 6: ADD PROFILE IMAGE (RIGHT SIDE - 1/3 WIDTH)
================================================================================

INSTRUCTOR SAYS:
"On the right side, let's add a circular profile image. This spans 1 column
of our 3-column grid."

## STUDENTS REPLACE {/_ Circular Image - 1/3 _/} COMMENT WITH:

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

## EXPLAIN:

- lg:col-span-1 - Spans 1 column on large screens (1/3 of width)
- flex justify-center lg:justify-end - Centered mobile, right-aligned desktop
- w-64 h-64 - 256px × 256px on mobile
- lg:w-80 lg:h-80 - 320px × 320px on large screens
- card-avatar - Custom class that creates circular frame (from index.css)
- src="https://picsum.photos/320?random=100" - Placeholder image from Picsum
- alt="Joe Anonymous" - Descriptive alt text (use your own name!)
- object-cover - Scales image to cover container while maintaining aspect ratio

INSTRUCTOR NOTE:
"Students should eventually replace this with their own profile photo. They can
use any image URL or add an image to the project's public/ or src/assets/ folder."

ASK STUDENTS:
"What does object-cover do differently than object-contain?"
(Answer: object-cover fills the entire container, potentially cropping the image.
object-contain fits the whole image inside, potentially leaving empty space.)

================================================================================
STEP 7: ADD SECTION COMPONENTS
================================================================================

INSTRUCTOR SAYS:
"Below the hero section, we'll add four section components we've already built.
These are complete, reusable components that display different content."

## STUDENTS ADD AFTER THE CLOSING </Section> TAG:

      <TechStack />
      <Projects limit={6} />
      <Testimonials limit={3} />
      <FinalCTA />

## EXPLAIN:

- <TechStack /> - Shows technologies/tools you use (icons in a grid)
- <Projects limit={6} /> - Displays 6 most recent projects
  - limit prop controls how many projects to show
- <Testimonials limit={3} /> - Shows 3 testimonials from clients/colleagues
  - limit prop controls how many to display
- <FinalCTA /> - Final call-to-action section at bottom of page

ASK STUDENTS:
"Why do Projects and Testimonials have a limit prop?"
(Answer: The home page shows a preview - just 6 projects and 3 testimonials.
Full listings will be on dedicated Portfolio and Testimonials pages. This keeps
the homepage focused and not overwhelming!)

INSTRUCTOR NOTE:
"These components were built in previous classes. If students haven't built them
yet, they can comment them out and add them back later."

================================================================================
STEP 8: COMPLETE CODE REVIEW
================================================================================

## FINAL COMPLETE CODE:

```jsx
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SEO from "../components/ui/SEO.jsx";
import TechStack from "../components/sections/TechStack.jsx";
import Projects from "../components/sections/Projects.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";
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
      <Testimonials limit={3} />
      <FinalCTA />
    </div>
  );
}
```

================================================================================
STEP 9: TEST THE COMPLETE HOMEPAGE
================================================================================

INSTRUCTOR SAYS:
"Let's test everything! Save your file and view the homepage in your browser."

## TESTING CHECKLIST:

1. **Page loads** - Navigate to http://localhost:5173
2. **SEO check** - Browser tab shows "Home | Your Site Name"
3. **Hero section** - Gradient background displays
4. **Layout** - Text on left (2/3), image on right (1/3) on desktop
5. **Responsive** - Resize browser:
   - Mobile: Single column, centered text and image
   - Desktop: Two-column grid layout
6. **Buttons hover** - Hover effects work on CTA buttons
7. **Social links** - Icons display, links open in new tabs
8. **Image** - Circular profile photo displays
9. **Sections below** - TechStack, Projects, Testimonials, FinalCTA all render
10. **Accessibility** - Tab through page, focus visible on interactive elements

## DEMONSTRATE TO STUDENTS:

- Open DevTools Inspector to show grid layout
- Resize browser to show responsive breakpoints
- Right-click → Inspect on social icons to see react-icons SVGs
- Check Network tab - react-icons only loads used icons
- View page source - SEO meta tags in <head>

================================================================================
WHAT WE ACCOMPLISHED
================================================================================

✅ Complete homepage with professional hero section
✅ Advanced CSS Grid layout (responsive 3-column grid)
✅ Gradient background with custom colors
✅ React-icons integration for social media links
✅ Semantic HTML (nav, ul, section, aria labels)
✅ Accessibility (ARIA attributes, descriptive labels)
✅ Responsive design (mobile → desktop)
✅ Component composition (importing and using section components)
✅ Props usage (limit props on Projects and Testimonials)
✅ SEO meta tags for search engines

================================================================================
KEY CONCEPTS COVERED
================================================================================

**Layout & Design:**

- CSS Grid with col-span for asymmetric layouts
- Responsive breakpoints (lg:)
- Viewport height units (vh)
- Gradient backgrounds
- Flexbox for button and social link layouts
- Conditional alignment (center on mobile, left/right on desktop)

**React Patterns:**

- Component imports and composition
- Props (limit prop on sections)
- React-icons integration
- Polymorphic components (Button as different elements)
- JSX expressions {value}

**Accessibility:**

- Semantic HTML (nav, ul, li, section)
- ARIA labels (aria-labelledby, aria-label)
- Screen reader considerations
- Focus management
- Descriptive link text

**Best Practices:**

- External links with target="\_blank" and rel="noreferrer"
- Alt text on images
- Descriptive button labels
- Mobile-first responsive design
- Component reusability

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why do we use lg:grid-cols-3 but lg:col-span-2 for text?"
A: "grid-cols-3 creates a 3-column grid. col-span-2 makes that element span
2 of those 3 columns (2/3 width). The image gets 1 column (1/3 width) by default."

Q: "Can I add more social links like Twitter or Instagram?"
A: "Absolutely! Import the icon (FaTwitter, FaInstagram), then add another <li>
with a Button component. Just copy the pattern from LinkedIn/GitHub."

Q: "The gradient looks too subtle, can I change it?"
A: "Yes! Adjust the colors in from-[#0a0a0b] to-[#1a1a1d]. Try lighter or
more colorful values. You can use any hex color!"

Q: "Why is the image a div inside a div?"
A: "The outer div handles positioning (flex, justify-end). The inner div with
card-avatar class creates the circular frame. The img fills that frame. This
separation gives us more control!"

Q: "What if I don't have a profile photo yet?"
A: "The placeholder from Picsum works fine! Or use a professional photo later.
You can also use an illustration or logo temporarily."

Q: "Why is the hero min-h-[80vh] not 100vh?"
A: "80vh leaves room for the navbar at the top while still being visually
impactful. 100vh might be too tall and require unnecessary scrolling."

Q: "Can I reorder the sections at the bottom?"
A: "Sure! Reorder TechStack, Projects, Testimonials, and FinalCTA however you
like. FinalCTA typically stays last since it's the final call-to-action."

================================================================================
CUSTOMIZATION IDEAS
================================================================================

**Personalization:**

- Replace "Joe Anonymous" with your real name
- Update the subheading with your actual description
- Add your LinkedIn and GitHub usernames
- Upload your own profile photo
- Add more social links (Twitter, Instagram, CodePen, etc.)

**Styling Variations:**

- Try different gradient colors
- Adjust grid proportions (try lg:grid-cols-2 with col-span-1 each)
- Change image size (w-72 h-72 instead of w-64 h-64)
- Add animations on scroll
- Customize button text

**Content Options:**

- Add a third CTA button ("Contact Me", "Download Resume")
- Add more bio text
- Include a tagline or motto
- Add badges or certifications

================================================================================
TROUBLESHOOTING
================================================================================

**Issue: Layout doesn't work, everything is stacked**
CHECK:

- Grid classes: grid lg:grid-cols-3
- Col span: lg:col-span-2 and lg:col-span-1
- Browser is wide enough for lg breakpoint (1024px+)

**Issue: React-icons don't display**
CHECK:

- Did you run: npm install react-icons
- Import statement: import { FaLinkedin, FaGithub } from "react-icons/fa"
- Icon usage: leftIcon={<FaLinkedin className="w-5 h-5" />}
- Restart dev server after installing react-icons

**Issue: Image doesn't appear**
CHECK:

- Internet connection (Picsum requires network)
- Image URL is correct
- Alt text is present
- Try a different Picsum URL: https://picsum.photos/320?random=200

**Issue: Gradient doesn't show**
CHECK:

- className includes bg-gradient-to-b
- from- and to- colors are specified
- Colors use correct format: from-[#hexcode]

**Issue: Buttons don't work**
CHECK:

- Button component imported correctly
- href attribute has correct path
- variant prop is spelled correctly
- Button.jsx exists in components/ui/

**Issue: Social links open in same tab**
CHECK:

- target="\_blank" is present
- rel="noreferrer" is included
- No syntax errors in the Button props

**Issue: Mobile layout looks weird**
CHECK:

- Resize browser to < 1024px to test
- text-center should apply on mobile
- justify-center should apply on mobile
- Grid should become single column automatically

**Issue: Section components error**
CHECK:

- TechStack.jsx, Projects.jsx, etc. exist
- Import paths are correct (../components/sections/)
- Components are exported correctly
- If not built yet, comment them out temporarily

================================================================================
HOMEWORK / PRACTICE
================================================================================

**Required:**

1. Replace all placeholder text with your real information
2. Update social media links with your actual profiles
3. Test responsiveness at different screen sizes
4. Verify all buttons and links work

**Optional Enhancements:**

1. Add a third social link (Twitter, Instagram, CodePen, etc.)
2. Upload and use your own profile photo
3. Customize the gradient colors to match your brand
4. Add a resume download button
5. Experiment with different grid proportions

**Challenges:**

1. Add smooth scroll behavior when clicking "Check Out My Work"
2. Implement a typing animation for the heading
3. Add hover animations to the profile image
4. Create a "scroll down" indicator at bottom of hero section
5. Add a video background instead of gradient (advanced!)

**Portfolio Prep:**

- Prepare a professional photo (square format, high resolution)
- Write your actual bio/description
- Gather your social media profile URLs
- Plan what to showcase in Projects and Testimonials sections

================================================================================
NEXT STEPS
================================================================================

**Upcoming Classes:**

- Build the TechStack section component with icon grid
- Create Projects section with project cards
- Design Testimonials section with client quotes
- Implement FinalCTA with contact form or booking link
- Build individual project detail pages
- Create About page with full bio and experience
- Design Resume page with downloadable PDF
- Implement Contact page with form

**What to Prepare:**

- List of technologies/tools you use (for TechStack)
- 3-6 projects to showcase (descriptions, images, links)
- 3-5 testimonials or references
- Professional resume (PDF format)
- Portfolio images and screenshots

================================================================================
END OF HOME.JSX GUIDE (CLASS 2)
================================================================================

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
