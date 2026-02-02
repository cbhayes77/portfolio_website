================================================================================
CLASS 6: ABOUT.JSX STEP-BY-STEP GUIDE - COMPLETE PAGE COMPONENT
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide teaches students how to build a complete About page with multiple
sections, each using different layout patterns. This is the first time students
build a complete content-rich page in one component, demonstrating how to
organize complex pages with varied layouts.

Students should create a new file: src/pages/About.jsx

NOTE: Students must have already completed:

- Container.jsx (Class 1)
- Section.jsx (Class 1)
- Button.jsx (Class 1)
- SEO.jsx (Class 2)
- about.js data file (Class 6 - previous guide)
- App.jsx already has /about route configured (Class 2)

CONCEPTS TAUGHT:

- Building complete page components (not just sections)
- Working with nested data structures
- Timeline components with semantic HTML
- Multiple responsive grid layouts
- Image cards with overlays and gradients
- Lazy loading images (loading="lazy")
- Conditional rendering (checking if data exists)
- Nested array mapping (achievements within experience)
- Accessibility best practices (sr-only, aria-label, role attributes)

WHAT WE'RE BUILDING IN CLASS 6:

- Complete About page with 6 distinct sections
- Bio section (centered text layout)
- Values section (2x2 grid of cards)
- Experience timeline (vertical timeline with achievements)
- Education section (3-column grid)
- Interests section (image cards with 3-column grid)
- CTA section (centered call-to-action with buttons)

This is a COMPLEX guide due to the variety of patterns. We'll use STAGES to
organize the six major sections.

================================================================================
STAGE 1: SETUP AND BIO SECTION
================================================================================

## STEP 1.1: CREATE THE ABOUT.JSX FILE WITH IMPORTS

INSTRUCTOR SAYS:
"We're building a complete About page! Unlike the homepage where we created
separate section components, this page is unique to you - your story, your
experience. So we'll build it as one page component with multiple inline
sections. Let's start by creating the file and importing everything we need."

## STUDENTS CREATE FILE:

Create: src/pages/About.jsx

## STUDENTS TYPE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";
import { aboutData } from "../data/about.js";

export default function About() {
return (
<div>
{/_ About page sections will go here _/}
</div>
);
}

## EXPLAIN:

- Import Section, Container, SEO, Button - All UI components we've already built
- Import { aboutData } - Named import from our data file
- Path: ../data/ (up one level from pages, then into data)
- Using <div> wrapper (will change to <> fragment soon)
- This will be a longer file than usual - one page with multiple sections!

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";
import { aboutData } from "../data/about.js";

export default function About() {
return (
<div>
{/_ About page sections will go here _/}
</div>
);
}

================================================================================

## STEP 1.2: ADD SEO COMPONENT AND CHANGE TO FRAGMENT

INSTRUCTOR SAYS:
"First, let's add the SEO component for this page, and change our wrapper from
a div to a React Fragment. Fragments let us return multiple elements without
adding an extra div to the DOM."

## STUDENTS MODIFY:

Update the return statement:

return (
<>
<SEO
        title="About"
        description="Learn more about my background, skills, and experience as a UX Designer and Frontend Developer."
        url="/about"
      />

      {/* Bio section will go here */}
    </>

);

## EXPLAIN:

- <> and </> - React Fragment (returns multiple elements without wrapper div)
- <SEO> - Sets page title, meta description, and canonical URL
- title="About" - Browser tab will show "About | Your Site"
- description - What search engines will show
- url="/about" - Canonical URL for SEO
- Students should customize the description to match their background!

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";
import { aboutData } from "../data/about.js";

export default function About() {
return (
<>
<SEO
        title="About"
        description="Learn more about my background, skills, and experience as a UX Designer and Frontend Developer."
        url="/about"
      />

      {/* Bio section will go here */}
    </>

);
}

================================================================================

## STEP 1.3: ADD BIO/HERO SECTION WITH CENTERED TEXT LAYOUT

INSTRUCTOR SAYS:
"Let's add the first section - your bio! This is a simple, centered text layout
with your heading and three paragraphs from the data file. We'll display intro,
background, and current paragraphs. Notice how we use max-w-4xl to keep the
text readable - long lines are hard to read!"

## STUDENTS ADD:

After the SEO component, replace the comment:

      {/* Hero/Intro Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-page">About Me</h1>
            <div className="mt-6 space-y-4 body-default">
              <p className="text-lg leading-relaxed">{aboutData.bio.intro}</p>
              <p>{aboutData.bio.background}</p>
              <p>{aboutData.bio.current}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values section will go here */}

## EXPLAIN:

- {/_ Hero/Intro Section _/} - Comment to organize our code (helps navigation)
- <Section> and <Container> - Our standard page section pattern
- max-w-4xl mx-auto - Max width of 4xl (56rem/896px), centered
- <h1 className="heading-page"> - Page-level heading (custom class from index.css)
- mt-6 - Margin-top for spacing below heading
- space-y-4 - Vertical spacing between child elements (4 units)
- body-default - Custom class for body text styling
- text-lg leading-relaxed - First paragraph is larger with relaxed line-height
- {aboutData.bio.intro} - Access intro property from bio object
- Nested data access: aboutData → bio → intro

ASK STUDENTS:
"Why do we make the intro paragraph larger with text-lg?"
(Answer: Creates visual hierarchy - the intro is most important, so we make it
more prominent to draw the reader's eye first.)

## CURRENT CODE SHOULD LOOK LIKE:

import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";
import { aboutData } from "../data/about.js";

export default function About() {
return (
<>
<SEO
        title="About"
        description="Learn more about my background, skills, and experience as a UX Designer and Frontend Developer."
        url="/about"
      />

      {/* Hero/Intro Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-page">About Me</h1>
            <div className="mt-6 space-y-4 body-default">
              <p className="text-lg leading-relaxed">{aboutData.bio.intro}</p>
              <p>{aboutData.bio.background}</p>
              <p>{aboutData.bio.current}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values section will go here */}
    </>

);
}

================================================================================

## STEP 1.4: TEST THE BIO SECTION

INSTRUCTOR SAYS:
"Let's save and test what we have so far! Navigate to /about in your browser."

## MAKE SURE DEV SERVER IS RUNNING:

If not running, in terminal:

npm run dev

## WHAT STUDENTS SHOULD SEE:

Navigate to: http://localhost:5173/about

- Page loads with "About" in browser tab title
- "About Me" heading at the top
- Three paragraphs of bio text (intro, background, current)
- Text is centered on the page with good max-width
- Proper spacing between paragraphs
- Intro paragraph is slightly larger

## DEMONSTRATE:

1. Check browser tab - should say "About | Your Site Name"
2. Inspect the h1 in DevTools - should have heading-page class
3. Resize browser - text should stay centered and readable
4. Check that three paragraphs display

COMMON MISTAKE:
If the page shows [object Object] instead of text, you might have written
{aboutData.bio} instead of {aboutData.bio.intro}. Make sure to access the
specific properties!

================================================================================
STAGE 2: VALUES SECTION WITH 2x2 GRID
================================================================================

## STEP 2.1: ADD VALUES SECTION STRUCTURE

INSTRUCTOR SAYS:
"Now let's add your core values! This section shows what drives your work.
We'll display 4 value cards in a grid that's 1 column on mobile, 2 columns on
tablet and up. Let's start with the section structure and heading."

## STUDENTS ADD:

After the bio section (before the closing </>):

      {/* Values Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-section text-center mb-12">What Drives My Work</h2>
            {/* Values grid will go here */}
          </div>
        </Container>
      </Section>

      {/* Experience section will go here */}

## EXPLAIN:

- max-w-6xl - Wider than bio section (6xl = 72rem/1152px) for grid layout
- heading-section - Custom class for section headings
- text-center - Centers the heading
- mb-12 - Margin-bottom for space before grid

## CURRENT CODE SHOULD LOOK LIKE:

(Previous code continues, then:)

      {/* Values Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-section text-center mb-12">What Drives My Work</h2>
            {/* Values grid will go here */}
          </div>
        </Container>
      </Section>

      {/* Experience section will go here */}
    </>

);
}

================================================================================

## STEP 2.2: ADD VALUES GRID WITH CARD MAPPING

INSTRUCTOR SAYS:
"Now let's map over the values array and create a card for each value. Each
card will show an icon, title, and description. We're using <article> for
semantic HTML - each value is a self-contained piece of content. Notice the
hover effect - cards scale up slightly when you hover over them!"

## STUDENTS ADD:

Replace the {/_ Values grid will go here _/} comment:

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {aboutData.values.map((value) => (
                <article
                  key={value.id}
                  className="card-base rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                  role="listitem"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {value.icon}
                  </div>
                  <h3 className="subheading-primary mb-2">{value.title}</h3>
                  <p className="body-default text-white/70">{value.description}</p>
                </article>
              ))}
            </div>

## EXPLAIN:

- grid grid-cols-1 md:grid-cols-2 - 1 column mobile, 2 columns tablet+
- gap-6 - Spacing between grid items
- role="list" - Tells screen readers this is a list (even though styled as grid)
- aboutData.values.map((value) => ...) - Loop through values array
- <article key={value.id}> - Semantic HTML for self-contained content
- role="listitem" - Pairs with role="list" for accessibility
- card-base - Custom class from index.css
- rounded-2xl - Extra rounded corners
- p-6 - Padding inside card
- hover:scale-[1.02] - Scale to 102% on hover (subtle grow effect)
- transition-transform duration-200 - Smooth 200ms transition
- focus-within - Styles when anything inside has focus (keyboard navigation)
- ring-2 ring-white/60 - Focus ring for accessibility
- text-4xl - Large icon size
- aria-hidden="true" - Hides decorative icon from screen readers
- subheading-primary - Custom class for subheadings
- text-white/70 - White text at 70% opacity

ASK STUDENTS:
"Why do we add aria-hidden='true' to the icon?"
(Answer: The icon is decorative - the title and description provide all the
meaning. Screen readers don't need to announce the emoji.)

## CURRENT CODE SHOULD LOOK LIKE:

(Previous sections, then:)

      {/* Values Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-section text-center mb-12">What Drives My Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {aboutData.values.map((value) => (
                <article
                  key={value.id}
                  className="card-base rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                  role="listitem"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {value.icon}
                  </div>
                  <h3 className="subheading-primary mb-2">{value.title}</h3>
                  <p className="body-default text-white/70">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Experience section will go here */}
    </>

);
}

================================================================================
STAGE 3: EXPERIENCE TIMELINE WITH ACHIEVEMENTS
================================================================================

## STEP 3.1: ADD EXPERIENCE SECTION WITH TIMELINE STRUCTURE

INSTRUCTOR SAYS:
"Now for something new - a timeline! We'll display your work history as a
vertical timeline with dots and a connecting line. We use an <ol> (ordered list)
because the experience is chronological - order matters! Let's start with the
section structure."

## STUDENTS ADD:

After the values section:

      {/* Experience Timeline */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mb-12">Professional Journey</h2>
            <ol className="space-y-8" aria-label="Professional experience timeline">
              {/* Timeline items will go here */}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Education section will go here */}

## EXPLAIN:

- <ol> - Ordered list (semantic HTML for ordered content)
- space-y-8 - Vertical spacing between timeline items
- aria-label="Professional experience timeline" - Describes the list for screen readers

## CURRENT CODE SHOULD LOOK LIKE:

(Previous sections, then:)

      {/* Experience Timeline */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mb-12">Professional Journey</h2>
            <ol className="space-y-8" aria-label="Professional experience timeline">
              {/* Timeline items will go here */}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Education section will go here */}
    </>

);
}

================================================================================

## STEP 3.2: ADD TIMELINE MAPPING WITH DOTS AND BORDER

INSTRUCTOR SAYS:
"Let's map over the experience array and create timeline items. Each item has a
dot on the left, a vertical line connecting them, and the job details. The line
is created with a left border, and the dot is positioned absolutely. This is a
complex layout - pay attention to the positioning!"

## STUDENTS ADD:

Replace {/_ Timeline items will go here _/}:

              {aboutData.experience.map((job) => (
                <li key={job.id} className="relative pl-8 border-l-2 border-white/20 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black"
                    aria-hidden="true"
                  ></div>

                  <article>
                    {/* Job details will go here */}
                  </article>
                </li>
              ))}

## EXPLAIN:

- aboutData.experience.map((job) => ...) - Loop through experience array
- <li key={job.id}> - List item for each job
- relative - Positioning context for the absolute dot
- pl-8 - Padding-left for space for the timeline line
- border-l-2 - 2px left border (the timeline line)
- border-white/20 - White at 20% opacity (subtle line)
- pb-8 - Padding-bottom for spacing between items
- last:pb-0 - Remove bottom padding on last item (Tailwind pseudo-class)
- absolute left-[-9px] - Position dot on the left border (negative to center it)
- w-4 h-4 - Dot size
- rounded-full - Makes it a circle
- bg-white - White background
- border-4 border-black - Thick black border around white dot
- aria-hidden="true" - Dot is decorative

## CURRENT CODE SHOULD LOOK LIKE:

(Previous sections, then:)

      {/* Experience Timeline */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mb-12">Professional Journey</h2>
            <ol className="space-y-8" aria-label="Professional experience timeline">
              {aboutData.experience.map((job) => (
                <li key={job.id} className="relative pl-8 border-l-2 border-white/20 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black"
                    aria-hidden="true"
                  ></div>

                  <article>
                    {/* Job details will go here */}
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Education section will go here */}
    </>

);
}

================================================================================

## STEP 3.3: ADD JOB DETAILS (ROLE, COMPANY, DURATION, DESCRIPTION)

INSTRUCTOR SAYS:
"Inside each timeline item, let's add the job details: role, company, duration,
and description. We use semantic HTML - <header> for the heading info, <time>
for dates. Notice the screen reader text for 'at' - visual users see the
bullet (•) but screen readers hear 'at' for clarity."

## STUDENTS ADD:

Replace {/_ Job details will go here _/}:

                    <header className="mb-2">
                      <h3 className="subheading-primary">{job.role}</h3>
                      <p className="body-default text-white/70">
                        <span className="sr-only">at</span> {job.company} <span aria-hidden="true">•</span>{" "}
                        <time>{job.duration}</time>
                      </p>
                    </header>

                    <p className="body-default mb-3">{job.description}</p>

                    {/* Achievements will go here */}

## EXPLAIN:

- <header> - Semantic HTML for the heading section of the article
- <h3 className="subheading-primary"> - Job role as subheading
- <span className="sr-only">at</span> - "Screen reader only" text
- sr-only - Tailwind class that hides visually but keeps for screen readers
- {job.company} - Company name from data
- <span aria-hidden="true">•</span> - Bullet separator (hidden from screen readers)
- <time> - Semantic HTML for time/date information
- {job.duration} - Time period from data

ASK STUDENTS:
"Why do we use <span className='sr-only'>at</span>?"
(Answer: Screen readers need context. Visual users see "Company • 2020-2023"
and understand it. Screen readers need "at Company" to make sense.)

## CURRENT CODE SHOULD LOOK LIKE:

(In the timeline mapping, article now contains:)

                  <article>
                    <header className="mb-2">
                      <h3 className="subheading-primary">{job.role}</h3>
                      <p className="body-default text-white/70">
                        <span className="sr-only">at</span> {job.company} <span aria-hidden="true">•</span>{" "}
                        <time>{job.duration}</time>
                      </p>
                    </header>

                    <p className="body-default mb-3">{job.description}</p>

                    {/* Achievements will go here */}
                  </article>

================================================================================

## STEP 3.4: ADD ACHIEVEMENTS WITH CONDITIONAL RENDERING AND NESTED MAPPING

INSTRUCTOR SAYS:
"Finally, let's add achievements! Not every job has achievements, so we'll use
conditional rendering to only show this section if achievements exist. Then
we'll map over the achievements array to create a bulleted list. This is nested
mapping - mapping within mapping!"

## STUDENTS ADD:

Replace {/_ Achievements will go here _/}:

                    {job.achievements && job.achievements.length > 0 && (
                      <>
                        <h4 className="sr-only">Key Achievements</h4>
                        <ul className="list-disc pl-5 body-default text-white/70 space-y-1">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </>
                    )}

## EXPLAIN:

- {job.achievements && job.achievements.length > 0 && ( ... )} - Conditional rendering
- Checks: Does achievements exist? AND does it have items?
- If both true, render the achievements section
- <> and </> - Fragment (returns multiple elements)
- <h4 className="sr-only">Key Achievements</h4> - Screen reader heading
- <ul> - Unordered list
- list-disc - Shows bullet points
- pl-5 - Padding-left for indentation
- space-y-1 - Small spacing between list items
- job.achievements.map((achievement, idx) => ...) - Nested mapping!
- idx - Index (since achievements are just strings, no id)
- key={idx} - Use index as key (acceptable here since list won't reorder)

## DEMONSTRATE:

"This is conditional rendering! If a job doesn't have achievements, this whole
section is skipped. The && operator works like 'if this then show that'."

## CURRENT CODE FOR COMPLETE EXPERIENCE SECTION:

      {/* Experience Timeline */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mb-12">Professional Journey</h2>
            <ol className="space-y-8" aria-label="Professional experience timeline">
              {aboutData.experience.map((job) => (
                <li key={job.id} className="relative pl-8 border-l-2 border-white/20 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black"
                    aria-hidden="true"
                  ></div>

                  <article>
                    <header className="mb-2">
                      <h3 className="subheading-primary">{job.role}</h3>
                      <p className="body-default text-white/70">
                        <span className="sr-only">at</span> {job.company} <span aria-hidden="true">•</span>{" "}
                        <time>{job.duration}</time>
                      </p>
                    </header>

                    <p className="body-default mb-3">{job.description}</p>

                    {job.achievements && job.achievements.length > 0 && (
                      <>
                        <h4 className="sr-only">Key Achievements</h4>
                        <ul className="list-disc pl-5 body-default text-white/70 space-y-1">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Education section will go here */}

================================================================================
STAGE 4: EDUCATION SECTION WITH 3-COLUMN GRID
================================================================================

## STEP 4.1: ADD EDUCATION SECTION WITH CARD GRID

INSTRUCTOR SAYS:
"The education section is simpler - just cards in a responsive grid! We'll show
degrees and certifications in a 3-column grid on desktop, 2 columns on tablet,
and 1 column on mobile. Each card shows degree, institution, year, and details."

## STUDENTS ADD:

After the experience section:

      {/* Education Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mb-8">Education & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {aboutData.education.map((edu) => (
                <article
                  key={edu.id}
                  className="card-base rounded-xl p-6 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                  role="listitem"
                >
                  <h3 className="font-semibold mb-1">{edu.degree}</h3>
                  <p className="body-small text-white/70 mb-2">{edu.institution}</p>
                  <p className="body-small text-white/60 mb-3">
                    <time>{edu.year}</time>
                  </p>
                  <p className="body-small text-white/70">{edu.details}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Interests section will go here */}

## EXPLAIN:

- grid-cols-1 md:grid-cols-2 lg:grid-cols-3 - Responsive grid:
  - Mobile: 1 column
  - Tablet (md): 2 columns
  - Desktop (lg): 3 columns
- aboutData.education.map((edu) => ...) - Map over education array
- rounded-xl - Rounded corners (slightly less than values cards)
- focus-within:ring-2 - Focus ring for accessibility
- font-semibold - Bold degree title
- body-small - Small body text class
- text-white/60 - Even more subtle for year
- <time>{edu.year}</time> - Semantic HTML for year

## CURRENT CODE SHOULD LOOK LIKE:

(Previous sections, then:)

      {/* Education Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mb-8">Education & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {aboutData.education.map((edu) => (
                <article
                  key={edu.id}
                  className="card-base rounded-xl p-6 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                  role="listitem"
                >
                  <h3 className="font-semibold mb-1">{edu.degree}</h3>
                  <p className="body-small text-white/70 mb-2">{edu.institution}</p>
                  <p className="body-small text-white/60 mb-3">
                    <time>{edu.year}</time>
                  </p>
                  <p className="body-small text-white/70">{edu.details}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Interests section will go here */}
    </>

);
}

================================================================================
STAGE 5: INTERESTS SECTION WITH IMAGE CARDS
================================================================================

## STEP 5.1: ADD INTERESTS SECTION STRUCTURE

INSTRUCTOR SAYS:
"Now for the interests section! This one has images with overlays - it's visually
rich and shows who you are beyond work. We'll start with the section heading
and intro text, then add the image cards."

## STUDENTS ADD:

After the education section:

      {/* Interests Section with Images */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-section mb-4">Beyond the Code</h2>
            <p className="body-default text-white/70 max-w-2xl mx-auto text-center mb-12">{aboutData.bio.personal}</p>

            {/* Interests grid will go here */}
          </div>
        </Container>
      </Section>

      {/* CTA section will go here */}

## EXPLAIN:

- "Beyond the Code" - Engaging heading for interests
- max-w-2xl mx-auto - Narrow, centered intro text
- text-center - Center the intro paragraph
- {aboutData.bio.personal} - Personal bio from data (about hobbies)
- mb-12 - More space before grid

## CURRENT CODE SHOULD LOOK LIKE:

(Previous sections, then:)

      {/* Interests Section with Images */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-section mb-4">Beyond the Code</h2>
            <p className="body-default text-white/70 max-w-2xl mx-auto text-center mb-12">{aboutData.bio.personal}</p>

            {/* Interests grid will go here */}
          </div>
        </Container>
      </Section>

      {/* CTA section will go here */}
    </>

);
}

================================================================================

## STEP 5.2: ADD IMAGE CARDS WITH OVERLAYS AND HOVER EFFECTS

INSTRUCTOR SAYS:
"Let's add the interests grid! Each card has an image with a gradient overlay,
an icon positioned over the image, and text content below. The images lazy-load
for performance, and there's a cool hover effect where the image zooms slightly.
This is one of the most visually rich components we've built!"

## STUDENTS ADD:

Replace {/_ Interests grid will go here _/}:

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {aboutData.interests.map((interest) => (
                <article
                  key={interest.id}
                  className="group card-base rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                  role="listitem"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={interest.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                      aria-hidden="true"
                    ></div>
                    <div
                      className="absolute bottom-4 left-4 text-4xl"
                      aria-hidden="true"
                      role="img"
                      aria-label={interest.name}
                    >
                      {interest.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold mb-2">{interest.name}</h3>
                    <p className="body-small text-white/70">{interest.description}</p>
                  </div>
                </article>
              ))}
            </div>

## EXPLAIN:

- grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 - Responsive 3-column grid
- className="group" - Group class for group-hover effects
- overflow-hidden - Clips the zoomed image on hover
- relative h-48 overflow-hidden - Container for image (fixed height, clips overflow)
- <img src={interest.image} alt="" /> - Image with empty alt (decorative)
- object-cover - Scales image to cover area while maintaining aspect ratio
- group-hover:scale-110 - Zoom image to 110% when hovering over card
- transition-transform duration-300 - Smooth 300ms zoom transition
- loading="lazy" - Lazy load images (performance optimization!)
- absolute inset-0 - Overlay covers entire image
- bg-gradient-to-t from-black/80 via-black/20 to-transparent - Gradient overlay:
  - from-black/80 - Black at 80% opacity at bottom
  - via-black/20 - Black at 20% in middle
  - to-transparent - Transparent at top
- absolute bottom-4 left-4 - Position icon at bottom-left
- role="img" aria-label={interest.name} - Makes icon accessible

ASK STUDENTS:
"What does loading='lazy' do?"
(Answer: The browser only loads images as they come into view, not all at once.
This makes the page load faster!)

## DEMONSTRATE:

1. Hover over a card - image should zoom slightly
2. Notice gradient overlay - darker at bottom, transparent at top
3. Icon positioned over the image
4. Open DevTools Network tab - images load as you scroll (lazy loading)

## CURRENT CODE FOR COMPLETE INTERESTS SECTION:

      {/* Interests Section with Images */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-section mb-4">Beyond the Code</h2>
            <p className="body-default text-white/70 max-w-2xl mx-auto text-center mb-12">{aboutData.bio.personal}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {aboutData.interests.map((interest) => (
                <article
                  key={interest.id}
                  className="group card-base rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                  role="listitem"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={interest.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                      aria-hidden="true"
                    ></div>
                    <div
                      className="absolute bottom-4 left-4 text-4xl"
                      aria-hidden="true"
                      role="img"
                      aria-label={interest.name}
                    >
                      {interest.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold mb-2">{interest.name}</h3>
                    <p className="body-small text-white/70">{interest.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA section will go here */}

================================================================================
STAGE 6: FINAL CTA SECTION
================================================================================

## STEP 6.1: ADD CTA SECTION WITH TWO BUTTONS

INSTRUCTOR SAYS:
"Finally, let's add a call-to-action at the end of the page! This encourages
visitors to take the next step - either contact you or view your work. It's a
centered card with a heading, description, and two buttons pulled from our data."

## STUDENTS ADD:

After the interests section (before the closing </>):

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center card-base rounded-2xl p-12">
            <h2 className="heading-section mb-4">{aboutData.cta.heading}</h2>
            <p className="body-default text-white/70 mb-8">{aboutData.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href={aboutData.cta.primaryAction.href} variant="primary" size="lg">
                {aboutData.cta.primaryAction.text}
              </Button>
              <Button as="a" href={aboutData.cta.secondaryAction.href} variant="secondary" size="lg">
                {aboutData.cta.secondaryAction.text}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

## EXPLAIN:

- max-w-3xl mx-auto text-center - Centered, medium-width card
- card-base rounded-2xl p-12 - Card styling with generous padding
- {aboutData.cta.heading} - Heading from CTA object
- {aboutData.cta.description} - Description from CTA object
- flex flex-col sm:flex-row - Stack buttons vertically on mobile, horizontal on tablet+
- gap-4 - Spacing between buttons
- justify-center - Center buttons
- <Button as="a" href={...}> - Button as link
- {aboutData.cta.primaryAction.href} - Nested object access (cta → primaryAction → href)
- variant="primary" size="lg" - Large primary button
- variant="secondary" size="lg" - Large secondary button
- {aboutData.cta.primaryAction.text} - Button text from data

## CURRENT CODE SHOULD LOOK LIKE:

(Previous sections, then:)

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center card-base rounded-2xl p-12">
            <h2 className="heading-section mb-4">{aboutData.cta.heading}</h2>
            <p className="body-default text-white/70 mb-8">{aboutData.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href={aboutData.cta.primaryAction.href} variant="primary" size="lg">
                {aboutData.cta.primaryAction.text}
              </Button>
              <Button as="a" href={aboutData.cta.secondaryAction.href} variant="secondary" size="lg">
                {aboutData.cta.secondaryAction.text}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>

);
}

================================================================================

## STEP 6.2: TEST THE COMPLETE ABOUT PAGE

INSTRUCTOR SAYS:
"Save your file! Let's test the complete About page and see all six sections
working together. This is your professional story, beautifully presented!"

## WHAT STUDENTS SHOULD SEE:

Navigate to: http://localhost:5173/about

The complete page should have:

1. **Bio Section:**
   - "About Me" heading
   - Three paragraphs (intro, background, current)
   - Centered, readable text

2. **Values Section:**
   - "What Drives My Work" heading
   - 4 cards in 2x2 grid (1 column on mobile)
   - Icons, titles, descriptions
   - Cards grow slightly on hover

3. **Experience Timeline:**
   - "Professional Journey" heading
   - Vertical timeline with dots and line
   - Job roles, companies, dates
   - Achievements in bulleted lists

4. **Education Section:**
   - "Education & Certifications" heading
   - 3 cards in responsive grid (1→2→3 columns)
   - Degrees, institutions, years, details

5. **Interests Section:**
   - "Beyond the Code" heading
   - Intro text about personal interests
   - 5 image cards in 3-column grid
   - Images zoom on hover
   - Icons overlayed on images

6. **CTA Section:**
   - "Let's Work Together" heading
   - Description text
   - Two buttons (primary and secondary)
   - Buttons stack on mobile, side-by-side on desktop

## DEMONSTRATE:

1. Scroll through entire page - smooth section flow
2. Resize browser window - verify all responsive breakpoints
3. Hover over value cards - scale effect
4. Hover over interest cards - image zoom effect
5. Check timeline - dots aligned, line continuous
6. Tab through page - focus rings should appear on cards and buttons
7. Check browser console - no errors
8. Test on mobile width (320px) - all grids should collapse to 1 column

## CELEBRATE:

"You've just built a complete, professional About page! This page tells your
story with multiple layout patterns, semantic HTML, accessibility features,
and beautiful visual effects. This is seriously impressive work!"

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Built a complete About page component with 6 distinct sections
✓ Used Fragment (<>) to return multiple elements without wrapper div
✓ Created centered text layout (bio section)
✓ Built 2x2 responsive grid (values section)
✓ Implemented timeline component with semantic HTML (<ol>, <li>)
✓ Used absolute positioning for timeline dots
✓ Added conditional rendering (achievements only if they exist)
✓ Performed nested array mapping (achievements within experience)
✓ Built 3-column responsive grid (education section)
✓ Created image cards with gradient overlays
✓ Implemented lazy loading for images (loading="lazy")
✓ Added group hover effects (image zoom)
✓ Used screen reader only text (sr-only class)
✓ Applied comprehensive accessibility (aria-label, role attributes)
✓ Created centered CTA with two buttons
✓ Worked with deeply nested data structures

================================================================================
KEY CONCEPTS COVERED
================================================================================

**New Concepts:**

- Timeline components with semantic HTML
- Absolute positioning for timeline dots
- Conditional rendering with && operator
- Nested array mapping (mapping within mapping)
- Image overlays with gradient backgrounds
- Lazy loading images for performance
- Group hover effects (group, group-hover:)
- Screen reader only content (sr-only)
- Multiple layout patterns on one page
- Fragment return (<> </>)

**Reinforced Concepts:**

- Array .map() for rendering lists
- Responsive grids (1→2→3 columns)
- Section + Container pattern
- SEO component usage
- Button component with variants and sizes
- Semantic HTML (<article>, <header>, <time>, <ol>, <ul>)
- Accessibility (aria-label, role, aria-hidden)
- Data-driven rendering
- Custom CSS classes (card-base, heading-section, etc.)

**Layout Patterns:**

- Centered single column (bio)
- 2-column grid (values)
- Vertical timeline (experience)
- 3-column grid (education, interests)
- Image cards with overlays
- Centered CTA card

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why is this one page component instead of separate section components?"
A: The About page is unique to you - your specific story. Unlike Projects or
Testimonials (which might appear on multiple pages), your bio and experience
are specific to this page. It's simpler to keep it all together. If you
wanted to reuse a section (like your bio elsewhere), you could extract it
into a separate component.

Q: "The timeline dots aren't aligned. What's wrong?"
A: Check the left positioning value: left-[-9px]. This should center the dot
on the border. If it's off, adjust the negative value. The dot is 16px wide
(w-4), so -8px or -9px should center it on a 2px border.

Q: "Images aren't loading. Why?"
A: We're using Unsplash URLs which require internet. If you're offline, images
won't load. You can replace with local images or use a placeholder color
instead.

Q: "Can I add my own photo to the bio section?"
A: Yes! You could add an image similar to the homepage hero. Just add it above
or beside the bio text with appropriate styling.

Q: "What if I don't have achievements for some jobs?"
A: That's what the conditional rendering is for! If a job doesn't have
achievements (or has an empty array), that whole section won't render.
You can leave achievements empty or remove the property from that job.

Q: "Can I change the number of columns in the grids?"
A: Absolutely! Change lg:grid-cols-3 to lg:grid-cols-2 for 2 columns, or
lg:grid-cols-4 for 4 columns. Experiment with what looks best!

Q: "Why is the intro paragraph larger than the others?"
A: text-lg on the intro creates visual hierarchy - it's the hook that draws
readers in. The larger size emphasizes its importance.

================================================================================
WHAT'S NEXT
================================================================================

Congratulations! You now have a complete About page. In future classes, we'll build:

**Class 7:** Portfolio page (showing ALL projects in a grid)
**Class 8:** Individual project detail pages
**Class 9:** Resume page
**Class 10:** Contact page with form

Your portfolio site is really taking shape! You have:

- ✅ Complete homepage (Classes 1-5)
- ✅ Complete About page (Class 6)
- 🔄 Portfolio, Project, Resume, Contact pages (coming soon)

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Cannot find module '../data/about.js'"
FIX:

- Verify about.js exists in src/data/
- Check import path: import { aboutData } from "../data/about.js"
- Ensure .js extension is included
- Check that about.js exports: export const aboutData = { ... }

ERROR: "Cannot read property 'bio' of undefined"
FIX:

- aboutData is not being imported correctly
- Check the import statement has curly braces: { aboutData }
- Verify about.js has: export const aboutData (not export default)

SYMPTOM: Page shows [object Object] instead of text
FIX:

- You're trying to display an object instead of a property
- Should be: {aboutData.bio.intro} not {aboutData.bio}
- Each property must be accessed specifically

SYMPTOM: Timeline dots don't align with the line
FIX:

- Check absolute positioning: left-[-9px]
- Adjust the negative value to center the dot
- Dot width is w-4 (16px), border is 2px, so -8px or -9px should work

SYMPTOM: Images don't display
FIX:

- Check internet connection (Unsplash requires network)
- Verify image URLs in about.js are correct
- Open browser DevTools Network tab to see if images are loading
- Try a different Unsplash image if one fails

SYMPTOM: Achievements don't show or cause errors
FIX:

- Check conditional: {job.achievements && job.achievements.length > 0 && ...}
- Verify achievements in about.js is an array: achievements: [ ]
- Make sure nested map has key: key={idx}

SYMPTOM: Grid layout doesn't respond correctly
FIX:

- Check Tailwind classes: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Verify browser window is wide enough for breakpoints (md: 768px, lg: 1024px)
- Inspect element in DevTools to see which breakpoint is active

SYMPTOM: Hover effects don't work
FIX:

- Check className includes hover: prefix (hover:scale-[1.02])
- For group hover, parent needs className="group"
- Child needs group-hover: prefix
- Verify transition classes are present

SYMPTOM: Screen reader content appears visually
FIX:

- Check className is exactly: sr-only (not screen-reader-only)
- Verify Tailwind is loaded and sr-only class is defined

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:

**File & Structure:**
□ File saved as src/pages/About.jsx
□ No errors in VS Code (no red underlines)
□ No errors in terminal
□ No errors in browser console

**SEO & Navigation:**
□ Page loads at /about
□ Browser tab shows "About | Your Site Name"
□ Can navigate to page from Navbar

**Bio Section:**
□ "About Me" heading displays
□ Three paragraphs display (intro, background, current)
□ Intro paragraph is larger than others
□ Text is centered and readable

**Values Section:**
□ "What Drives My Work" heading displays
□ 4 value cards show (or however many you have)
□ Icons display correctly
□ Cards in 2 columns on tablet, 1 on mobile
□ Cards scale up slightly on hover

**Experience Section:**
□ "Professional Journey" heading displays
□ Timeline shows vertical line
□ Dots appear on timeline, aligned with line
□ Each job shows role, company, duration
□ Achievements show in bulleted lists
□ If a job has no achievements, section is skipped

**Education Section:**
□ "Education & Certifications" heading displays
□ Education cards display in grid
□ 1 column mobile, 2 tablet, 3 desktop
□ All fields show: degree, institution, year, details

**Interests Section:**
□ "Beyond the Code" heading displays
□ Personal bio paragraph shows
□ Interest cards display with images
□ Images load (check internet if not)
□ Icons overlay on images
□ Images zoom on hover
□ Grid responsive (1→2→3 columns)

**CTA Section:**
□ "Let's Work Together" heading displays
□ Description text shows
□ Two buttons display
□ Buttons stack on mobile, side-by-side on desktop
□ Buttons are different variants (primary and secondary)

**Responsive Design:**
□ Test at 320px width (mobile)
□ Test at 768px width (tablet)
□ Test at 1280px width (desktop)
□ All grids respond correctly
□ Text remains readable at all sizes
□ No horizontal scrolling

**Accessibility:**
□ Tab through page - focus visible on cards and buttons
□ Heading hierarchy is logical (h1 → h2 → h3)
□ Timeline makes sense without visual styling

================================================================================
COMPLETE REFERENCE CODE
================================================================================

Your final About.jsx should match this structure:

```jsx
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";
import { aboutData } from "../data/about.js";

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about my background, skills, and experience as a UX Designer and Frontend Developer."
        url="/about"
      />

      {/* Hero/Intro Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-page">About Me</h1>
            <div className="mt-6 space-y-4 body-default">
              <p className="text-lg leading-relaxed">{aboutData.bio.intro}</p>
              <p>{aboutData.bio.background}</p>
              <p>{aboutData.bio.current}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-section text-center mb-12">What Drives My Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {aboutData.values.map((value) => (
                <article
                  key={value.id}
                  className="card-base rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                  role="listitem"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {value.icon}
                  </div>
                  <h3 className="subheading-primary mb-2">{value.title}</h3>
                  <p className="body-default text-white/70">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Experience Timeline */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mb-12">Professional Journey</h2>
            <ol className="space-y-8" aria-label="Professional experience timeline">
              {aboutData.experience.map((job) => (
                <li key={job.id} className="relative pl-8 border-l-2 border-white/20 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black"
                    aria-hidden="true"
                  ></div>

                  <article>
                    <header className="mb-2">
                      <h3 className="subheading-primary">{job.role}</h3>
                      <p className="body-default text-white/70">
                        <span className="sr-only">at</span> {job.company} <span aria-hidden="true">•</span>{" "}
                        <time>{job.duration}</time>
                      </p>
                    </header>

                    <p className="body-default mb-3">{job.description}</p>

                    {job.achievements && job.achievements.length > 0 && (
                      <>
                        <h4 className="sr-only">Key Achievements</h4>
                        <ul className="list-disc pl-5 body-default text-white/70 space-y-1">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Education Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mb-8">Education & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {aboutData.education.map((edu) => (
                <article
                  key={edu.id}
                  className="card-base rounded-xl p-6 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                  role="listitem"
                >
                  <h3 className="font-semibold mb-1">{edu.degree}</h3>
                  <p className="body-small text-white/70 mb-2">{edu.institution}</p>
                  <p className="body-small text-white/60 mb-3">
                    <time>{edu.year}</time>
                  </p>
                  <p className="body-small text-white/70">{edu.details}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Interests Section with Images */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-section mb-4">Beyond the Code</h2>
            <p className="body-default text-white/70 max-w-2xl mx-auto text-center mb-12">{aboutData.bio.personal}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {aboutData.interests.map((interest) => (
                <article
                  key={interest.id}
                  className="group card-base rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                  role="listitem"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={interest.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                      aria-hidden="true"
                    ></div>
                    <div
                      className="absolute bottom-4 left-4 text-4xl"
                      aria-hidden="true"
                      role="img"
                      aria-label={interest.name}
                    >
                      {interest.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold mb-2">{interest.name}</h3>
                    <p className="body-small text-white/70">{interest.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center card-base rounded-2xl p-12">
            <h2 className="heading-section mb-4">{aboutData.cta.heading}</h2>
            <p className="body-default text-white/70 mb-8">{aboutData.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href={aboutData.cta.primaryAction.href} variant="primary" size="lg">
                {aboutData.cta.primaryAction.text}
              </Button>
              <Button as="a" href={aboutData.cta.secondaryAction.href} variant="secondary" size="lg">
                {aboutData.cta.secondaryAction.text}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
```

================================================================================
END OF ABOUT.JSX GUIDE (CLASS 6 - COMPLETE PAGE COMPONENT)
================================================================================
