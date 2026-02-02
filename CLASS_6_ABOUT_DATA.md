================================================================================
CLASS 6: ABOUT.JS STEP-BY-STEP GUIDE - DATA FILE
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide teaches students how to create the about.js data file, which stores
all content for the About page in a structured format. This is more complex
than previous data files because it uses a nested object structure with
multiple sections, rather than just an array.

Students should create a new file: src/data/about.js

NOTE: The data/ folder should already exist from Classes 3-5.

CONCEPTS TAUGHT:

- Nested object structure (object containing multiple sections)
- Named export of an object (vs. array)
- Data organization for complex pages
- Arrays within objects for repeating content
- How to structure bio, experience, education, and interests data

WHAT WE'RE BUILDING IN CLASS 6:

- A comprehensive about data file
- Bio sections (intro, background, current, personal)
- Values array (4 core principles)
- Experience array (professional timeline)
- Education array (degrees and certifications)
- Interests array (hobbies with images)
- CTA object (call-to-action data)

================================================================================
STEP 1: CREATE THE ABOUT.JS FILE AND START THE DATA STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"This data file is different from our others. Instead of just an array like
projects or testimonials, we're exporting a single object that contains
multiple sections: bio, values, experience, education, interests, and a CTA.
This structure makes it easy to organize all the content for your About page
in one place. Let's start by creating the file and the main object structure."

## STUDENTS CREATE FILE:

Create: src/data/about.js

## STUDENTS TYPE:

export const aboutData = {
// Bio sections - tells your story
bio: {

},
};

## EXPLAIN:

- export const aboutData - Named export (import with { aboutData })
- = { ... } - Creates an object (not an array like previous data files)
- bio: { } - First section, will contain multiple bio paragraphs
- Comments help organize the data structure

## CURRENT CODE SHOULD LOOK LIKE:

export const aboutData = {
// Bio sections - tells your story
bio: {

},
};

================================================================================
STEP 2: ADD BIO SECTION WITH FOUR PARAGRAPHS
================================================================================

INSTRUCTOR SAYS:
"The bio section tells your professional story in four parts: intro (who you
are), background (how you got here), current (what you're doing now), and
personal (who you are outside of work). These will be displayed as separate
paragraphs on the About page. You'll customize these with your own story!"

## STUDENTS ADD:

Inside the bio object:

    intro:
      "I'm a UX Designer and Frontend Developer passionate about creating digital experiences that are both beautiful and functional. With a strong foundation in design thinking and modern web technologies, I bridge the gap between user needs and technical implementation.",
    background:
      "My journey into UX and development began during my undergraduate studies, where I discovered the perfect intersection of creativity and problem-solving. What started as a curiosity about how websites work evolved into a deep passion for crafting intuitive user experiences backed by clean, efficient code.",
    current:
      "Currently, I'm focused on building accessible, performant web applications using React and modern JavaScript frameworks. I'm particularly interested in design systems, component architecture, and creating seamless user experiences that drive real business results.",
    personal:
      "When I'm not designing or coding, you'll find me exploring new coffee shops, reading about emerging web technologies, or working on side projects that challenge me to learn new skills. I believe the best work comes from a balance of focused effort and creative exploration.",

## EXPLAIN:

- intro: - Property containing intro paragraph (who you are professionally)
- background: - Your journey (how you got here)
- current: - What you're focused on now
- personal: - Hobbies and interests (makes you relatable)
- Each is a string (text in quotes)
- Commas between properties
- These are templates - students will replace with their own story!

ASK STUDENTS:
"Why do we split the bio into four separate properties instead of one long paragraph?"
(Answer: It gives us flexibility in how we display them. We can style the intro
differently, or choose to display only some parts in different contexts.)

## CURRENT CODE SHOULD LOOK LIKE:

export const aboutData = {
// Bio sections - tells your story
bio: {
intro:
"I'm a UX Designer and Frontend Developer passionate about creating digital experiences that are both beautiful and functional. With a strong foundation in design thinking and modern web technologies, I bridge the gap between user needs and technical implementation.",
background:
"My journey into UX and development began during my undergraduate studies, where I discovered the perfect intersection of creativity and problem-solving. What started as a curiosity about how websites work evolved into a deep passion for crafting intuitive user experiences backed by clean, efficient code.",
current:
"Currently, I'm focused on building accessible, performant web applications using React and modern JavaScript frameworks. I'm particularly interested in design systems, component architecture, and creating seamless user experiences that drive real business results.",
personal:
"When I'm not designing or coding, you'll find me exploring new coffee shops, reading about emerging web technologies, or working on side projects that challenge me to learn new skills. I believe the best work comes from a balance of focused effort and creative exploration.",
},
};

================================================================================
STEP 3: ADD VALUES ARRAY WITH FOUR CORE PRINCIPLES
================================================================================

INSTRUCTOR SAYS:
"After bio, let's add a values array. This contains your core principles - what
drives your work. We'll have four values, each with an id, title, description,
and icon emoji. These will be displayed as cards on the About page."

## STUDENTS ADD:

After the bio section (before the closing }):

// Core values and approach - what guides your work
values: [
{
id: 1,
title: "User-Centered Design",
description:
"Every design decision starts with understanding user needs. I believe in validating assumptions through research and testing, ensuring solutions truly serve the people who use them.",
icon: "👤",
},
{
id: 2,
title: "Clean, Maintainable Code",
description:
"Beautiful interfaces deserve beautiful code. I prioritize writing clean, well-documented code that's easy for teams to understand, maintain, and scale as projects grow.",
icon: "💻",
},
{
id: 3,
title: "Accessibility First",
description:
"Great design is inclusive design. I'm committed to creating experiences that work for everyone, regardless of their abilities or the devices they use.",
icon: "♿",
},
{
id: 4,
title: "Continuous Learning",
description:
"The web evolves constantly, and so do I. I'm always exploring new tools, techniques, and best practices to deliver better solutions and stay at the forefront of the industry.",
icon: "📚",
},
],

## EXPLAIN:

- values: [ ] - Array of value objects
- Each object has: id, title, description, icon
- id - Unique number (for React keys)
- title - Short heading for the value
- description - Detailed explanation
- icon - Emoji that represents the value visually
- Students should customize these to reflect their own principles!

COMMON MISTAKE:
Forgetting commas between objects. Each object needs a comma after the
closing }, except the last one.

## CURRENT CODE SHOULD LOOK LIKE:

export const aboutData = {
// Bio sections - tells your story
bio: {
intro:
"I'm a UX Designer and Frontend Developer passionate about creating digital experiences that are both beautiful and functional. With a strong foundation in design thinking and modern web technologies, I bridge the gap between user needs and technical implementation.",
background:
"My journey into UX and development began during my undergraduate studies, where I discovered the perfect intersection of creativity and problem-solving. What started as a curiosity about how websites work evolved into a deep passion for crafting intuitive user experiences backed by clean, efficient code.",
current:
"Currently, I'm focused on building accessible, performant web applications using React and modern JavaScript frameworks. I'm particularly interested in design systems, component architecture, and creating seamless user experiences that drive real business results.",
personal:
"When I'm not designing or coding, you'll find me exploring new coffee shops, reading about emerging web technologies, or working on side projects that challenge me to learn new skills. I believe the best work comes from a balance of focused effort and creative exploration.",
},

// Core values and approach - what guides your work
values: [
{
id: 1,
title: "User-Centered Design",
description:
"Every design decision starts with understanding user needs. I believe in validating assumptions through research and testing, ensuring solutions truly serve the people who use them.",
icon: "👤",
},
{
id: 2,
title: "Clean, Maintainable Code",
description:
"Beautiful interfaces deserve beautiful code. I prioritize writing clean, well-documented code that's easy for teams to understand, maintain, and scale as projects grow.",
icon: "💻",
},
{
id: 3,
title: "Accessibility First",
description:
"Great design is inclusive design. I'm committed to creating experiences that work for everyone, regardless of their abilities or the devices they use.",
icon: "♿",
},
{
id: 4,
title: "Continuous Learning",
description:
"The web evolves constantly, and so do I. I'm always exploring new tools, techniques, and best practices to deliver better solutions and stay at the forefront of the industry.",
icon: "📚",
},
],
};

================================================================================
STEP 4: ADD EXPERIENCE ARRAY WITH PROFESSIONAL TIMELINE
================================================================================

INSTRUCTOR SAYS:
"Now let's add your professional experience. This is your work history,
displayed as a timeline on the About page. Each job includes company, role,
duration, description, and achievements. The achievements array is optional -
use it to highlight specific accomplishments!"

## STUDENTS ADD:

After the values array:

// Professional timeline - your work history
experience: [
{
id: 1,
company: "Tech Startup Inc.",
role: "Frontend Developer & UX Designer",
duration: "2023 - Present",
description:
"Lead frontend development and UX design for multiple client projects, focusing on responsive web applications and design systems.",
achievements: [
"Redesigned core product resulting in 45% increase in user engagement",
"Built reusable component library adopted across 5+ projects",
"Mentored junior developers in React and modern CSS techniques",
],
},
{
id: 2,
company: "Creative Agency",
role: "UX/UI Designer",
duration: "2021 - 2023",
description:
"Collaborated with cross-functional teams to design and prototype web and mobile applications for diverse clients.",
achievements: [
"Led user research initiatives that informed product strategy",
"Designed interfaces for 10+ successful client projects",
"Implemented design systems that improved team efficiency by 30%",
],
},
{
id: 3,
company: "Freelance",
role: "Web Designer & Developer",
duration: "2020 - 2021",
description:
"Provided end-to-end design and development services for small businesses and startups looking to establish their online presence.",
achievements: [
"Completed 15+ projects from concept to deployment",
"Maintained 100% client satisfaction rating",
"Built long-term relationships leading to repeat business",
],
},
],

## EXPLAIN:

- experience: [ ] - Array of job objects
- Each job has: id, company, role, duration, description, achievements
- id - Unique number
- company - Where you worked
- role - Your job title
- duration - Time period (format: "YYYY - YYYY" or "YYYY - Present")
- description - Overview of your responsibilities
- achievements - Array of strings highlighting specific accomplishments
- Achievements are nested arrays! (array within an object within an array)

ASK STUDENTS:
"What if I don't have professional experience yet?"
(Answer: Include school projects, volunteer work, internships, or focus on
personal projects. Every experience counts!)

## CURRENT CODE SHOULD LOOK LIKE:

(Previous code continues, then:)

// Professional timeline - your work history
experience: [
{
id: 1,
company: "Tech Startup Inc.",
role: "Frontend Developer & UX Designer",
duration: "2023 - Present",
description:
"Lead frontend development and UX design for multiple client projects, focusing on responsive web applications and design systems.",
achievements: [
"Redesigned core product resulting in 45% increase in user engagement",
"Built reusable component library adopted across 5+ projects",
"Mentored junior developers in React and modern CSS techniques",
],
},
{
id: 2,
company: "Creative Agency",
role: "UX/UI Designer",
duration: "2021 - 2023",
description:
"Collaborated with cross-functional teams to design and prototype web and mobile applications for diverse clients.",
achievements: [
"Led user research initiatives that informed product strategy",
"Designed interfaces for 10+ successful client projects",
"Implemented design systems that improved team efficiency by 30%",
],
},
{
id: 3,
company: "Freelance",
role: "Web Designer & Developer",
duration: "2020 - 2021",
description:
"Provided end-to-end design and development services for small businesses and startups looking to establish their online presence.",
achievements: [
"Completed 15+ projects from concept to deployment",
"Maintained 100% client satisfaction rating",
"Built long-term relationships leading to repeat business",
],
},
],
};

================================================================================
STEP 5: ADD EDUCATION ARRAY WITH DEGREES AND CERTIFICATIONS
================================================================================

INSTRUCTOR SAYS:
"Let's add your education and certifications. This includes degrees,
certificates, bootcamps, online courses - anything that demonstrates your
learning and qualifications. Each entry has degree, institution, year, and
details about what you studied."

## STUDENTS ADD:

After the experience array:

// Education and certifications
education: [
{
id: 1,
degree: "Bachelor of Science in Computer Science",
institution: "University Name",
year: "2020",
details: "Focus on Human-Computer Interaction and Web Development",
},
{
id: 2,
degree: "UX Design Professional Certificate",
institution: "Google/Coursera",
year: "2021",
details: "Comprehensive program covering UX research, design, and prototyping",
},
{
id: 3,
degree: "Frontend Development Certification",
institution: "freeCodeCamp",
year: "2020",
details: "Specialized training in React, JavaScript, and modern web APIs",
},
],

## EXPLAIN:

- education: [ ] - Array of education objects
- Each has: id, degree, institution, year, details
- degree - Name of the degree or certification
- institution - School, university, or platform
- year - Year completed (as a string for consistency)
- details - Brief description of focus areas
- Students should replace with their actual education!

## CURRENT CODE SHOULD LOOK LIKE:

(Previous code continues, then:)

// Education and certifications
education: [
{
id: 1,
degree: "Bachelor of Science in Computer Science",
institution: "University Name",
year: "2020",
details: "Focus on Human-Computer Interaction and Web Development",
},
{
id: 2,
degree: "UX Design Professional Certificate",
institution: "Google/Coursera",
year: "2021",
details: "Comprehensive program covering UX research, design, and prototyping",
},
{
id: 3,
degree: "Frontend Development Certification",
institution: "freeCodeCamp",
year: "2020",
details: "Specialized training in React, JavaScript, and modern web APIs",
},
],
};

================================================================================
STEP 6: ADD INTERESTS ARRAY WITH IMAGES
================================================================================

INSTRUCTOR SAYS:
"Now let's add your personal interests! This section makes you relatable and
shows who you are outside of work. Each interest has a name, description, icon,
and image URL. We're using Unsplash for placeholder images - you can replace
these with your own photos later!"

## STUDENTS ADD:

After the education array:

// Personal interests - makes you relatable
interests: [
{
id: 1,
name: "Open Source Contribution",
description: "Contributing to UI component libraries and accessibility tools",
icon: "🌐",
image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
},
{
id: 2,
name: "Photography",
description: "Exploring composition and visual storytelling through digital photography",
icon: "📸",
image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop",
},
{
id: 3,
name: "Coffee Enthusiast",
description: "Always searching for the perfect pour-over and new brewing techniques",
icon: "☕",
image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
},
{
id: 4,
name: "Hiking & Nature",
description: "Finding inspiration and balance through outdoor adventures",
icon: "🥾",
image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
},
{
id: 5,
name: "Tech Podcasts",
description: "Staying current with industry trends and emerging technologies",
icon: "🎧",
image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop",
},
],

## EXPLAIN:

- interests: [ ] - Array of interest objects
- Each has: id, name, description, icon, image
- image - URL to a photo (using Unsplash placeholder images)
- Format: ?w=400&h=300&fit=crop optimizes the image size
- Students should replace with their own interests and optionally their own photos!

## CURRENT CODE SHOULD LOOK LIKE:

(Previous code continues, then:)

// Personal interests - makes you relatable
interests: [
{
id: 1,
name: "Open Source Contribution",
description: "Contributing to UI component libraries and accessibility tools",
icon: "🌐",
image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
},
{
id: 2,
name: "Photography",
description: "Exploring composition and visual storytelling through digital photography",
icon: "📸",
image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop",
},
{
id: 3,
name: "Coffee Enthusiast",
description: "Always searching for the perfect pour-over and new brewing techniques",
icon: "☕",
image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
},
{
id: 4,
name: "Hiking & Nature",
description: "Finding inspiration and balance through outdoor adventures",
icon: "🥾",
image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
},
{
id: 5,
name: "Tech Podcasts",
description: "Staying current with industry trends and emerging technologies",
icon: "🎧",
image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop",
},
],
};

================================================================================
STEP 7: ADD CTA SECTION WITH CALL-TO-ACTION DATA
================================================================================

INSTRUCTOR SAYS:
"Finally, let's add a CTA (call-to-action) section at the end of the About page.
This encourages visitors to take the next step - either contacting you or
viewing your work. It has a heading, description, and two action buttons."

## STUDENTS ADD:

After the interests array (this is the last section):

// Call to action - encourage next steps
cta: {
heading: "Let's Work Together",
description:
"I'm always interested in hearing about new opportunities, interesting projects, or just connecting with fellow designers and developers. Feel free to reach out!",
primaryAction: {
text: "Get in Touch",
href: "/contact",
},
secondaryAction: {
text: "View My Work",
href: "/portfolio",
},
},

## EXPLAIN:

- cta: { } - Object containing call-to-action data
- heading - Main CTA heading
- description - Supporting text
- primaryAction - Object with text and href for primary button
- secondaryAction - Object with text and href for secondary button
- This is nested objects! (objects within an object)

## CURRENT CODE SHOULD LOOK LIKE:

(Complete file - all sections together)

export const aboutData = {
// Bio sections - tells your story
bio: {
intro:
"I'm a UX Designer and Frontend Developer passionate about creating digital experiences that are both beautiful and functional. With a strong foundation in design thinking and modern web technologies, I bridge the gap between user needs and technical implementation.",
background:
"My journey into UX and development began during my undergraduate studies, where I discovered the perfect intersection of creativity and problem-solving. What started as a curiosity about how websites work evolved into a deep passion for crafting intuitive user experiences backed by clean, efficient code.",
current:
"Currently, I'm focused on building accessible, performant web applications using React and modern JavaScript frameworks. I'm particularly interested in design systems, component architecture, and creating seamless user experiences that drive real business results.",
personal:
"When I'm not designing or coding, you'll find me exploring new coffee shops, reading about emerging web technologies, or working on side projects that challenge me to learn new skills. I believe the best work comes from a balance of focused effort and creative exploration.",
},

// Core values and approach - what guides your work
values: [
{
id: 1,
title: "User-Centered Design",
description:
"Every design decision starts with understanding user needs. I believe in validating assumptions through research and testing, ensuring solutions truly serve the people who use them.",
icon: "👤",
},
{
id: 2,
title: "Clean, Maintainable Code",
description:
"Beautiful interfaces deserve beautiful code. I prioritize writing clean, well-documented code that's easy for teams to understand, maintain, and scale as projects grow.",
icon: "💻",
},
{
id: 3,
title: "Accessibility First",
description:
"Great design is inclusive design. I'm committed to creating experiences that work for everyone, regardless of their abilities or the devices they use.",
icon: "♿",
},
{
id: 4,
title: "Continuous Learning",
description:
"The web evolves constantly, and so do I. I'm always exploring new tools, techniques, and best practices to deliver better solutions and stay at the forefront of the industry.",
icon: "📚",
},
],

// Professional timeline - your work history
experience: [
{
id: 1,
company: "Tech Startup Inc.",
role: "Frontend Developer & UX Designer",
duration: "2023 - Present",
description:
"Lead frontend development and UX design for multiple client projects, focusing on responsive web applications and design systems.",
achievements: [
"Redesigned core product resulting in 45% increase in user engagement",
"Built reusable component library adopted across 5+ projects",
"Mentored junior developers in React and modern CSS techniques",
],
},
{
id: 2,
company: "Creative Agency",
role: "UX/UI Designer",
duration: "2021 - 2023",
description:
"Collaborated with cross-functional teams to design and prototype web and mobile applications for diverse clients.",
achievements: [
"Led user research initiatives that informed product strategy",
"Designed interfaces for 10+ successful client projects",
"Implemented design systems that improved team efficiency by 30%",
],
},
{
id: 3,
company: "Freelance",
role: "Web Designer & Developer",
duration: "2020 - 2021",
description:
"Provided end-to-end design and development services for small businesses and startups looking to establish their online presence.",
achievements: [
"Completed 15+ projects from concept to deployment",
"Maintained 100% client satisfaction rating",
"Built long-term relationships leading to repeat business",
],
},
],

// Education and certifications
education: [
{
id: 1,
degree: "Bachelor of Science in Computer Science",
institution: "University Name",
year: "2020",
details: "Focus on Human-Computer Interaction and Web Development",
},
{
id: 2,
degree: "UX Design Professional Certificate",
institution: "Google/Coursera",
year: "2021",
details: "Comprehensive program covering UX research, design, and prototyping",
},
{
id: 3,
degree: "Frontend Development Certification",
institution: "freeCodeCamp",
year: "2020",
details: "Specialized training in React, JavaScript, and modern web APIs",
},
],

// Personal interests - makes you relatable
interests: [
{
id: 1,
name: "Open Source Contribution",
description: "Contributing to UI component libraries and accessibility tools",
icon: "🌐",
image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
},
{
id: 2,
name: "Photography",
description: "Exploring composition and visual storytelling through digital photography",
icon: "📸",
image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop",
},
{
id: 3,
name: "Coffee Enthusiast",
description: "Always searching for the perfect pour-over and new brewing techniques",
icon: "☕",
image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
},
{
id: 4,
name: "Hiking & Nature",
description: "Finding inspiration and balance through outdoor adventures",
icon: "🥾",
image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
},
{
id: 5,
name: "Tech Podcasts",
description: "Staying current with industry trends and emerging technologies",
icon: "🎧",
image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop",
},
],

// Call to action - encourage next steps
cta: {
heading: "Let's Work Together",
description:
"I'm always interested in hearing about new opportunities, interesting projects, or just connecting with fellow designers and developers. Feel free to reach out!",
primaryAction: {
text: "Get in Touch",
href: "/contact",
},
secondaryAction: {
text: "View My Work",
href: "/portfolio",
},
},
};

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created comprehensive about.js data file
✓ Used nested object structure (object containing multiple sections)
✓ Organized data into logical sections (bio, values, experience, etc.)
✓ Created bio section with 4 paragraphs
✓ Added values array with 4 core principles
✓ Added experience array with professional timeline and achievements
✓ Added education array with degrees and certifications
✓ Added interests array with images
✓ Added CTA section with call-to-action data
✓ Data is ready to power the complete About page

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Named export of an object (vs. array)
- Nested object structure (objects within objects)
- Arrays within objects (values, experience, education, interests)
- Objects within arrays (each value, job, degree, interest)
- Nested arrays (achievements within experience objects)
- Data organization for complex pages
- Using comments to organize sections
- Image URLs (Unsplash placeholders)

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why is this an object instead of an array like projects and testimonials?"
A: Because the About page has different types of content (bio, values,
experience, etc.) that aren't all the same structure. An object lets us
organize these different sections clearly. Arrays are for lists of similar
items; objects are for organizing different types of data.

Q: "Can I change the number of values or interests?"
A: Absolutely! You can have 3 values or 6, 2 interests or 10. Just maintain
the same structure (id, title, description, etc.) for each item.

Q: "What if I don't want to use Unsplash images?"
A: You can replace the image URLs with your own photos, or remove the image
property entirely and update the About page to not display images.

Q: "Do I have to have achievements for every job?"
A: No! The achievements array is optional. If you don't have specific
achievements to highlight, you can remove that property or use an empty
array: achievements: []

Q: "Can I add more bio paragraphs?"
A: Yes! You can add more properties to the bio object like: goals: "My future
goals are..." or philosophy: "My work philosophy is...". Just make sure
to update the About page to display them.

================================================================================
WHAT'S NEXT
================================================================================

Next, we'll build the About.jsx page component that will display all this data
in a beautiful, well-organized layout with:

- Bio section with paragraphs
- Values cards in a grid
- Experience timeline with achievements
- Education cards
- Interests grid with images
- Final call-to-action

This will be a comprehensive page that tells your complete professional story!

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Unexpected token" or syntax errors
FIX:

- Check for missing commas between object properties
- Verify all strings are in quotes
- Make sure all objects and arrays have matching braces/brackets
- Check that commas separate items in arrays

SYMPTOM: VS Code shows red underlines
FIX:

- Hover over the error to see the message
- Common issues: missing commas, unclosed quotes, extra commas after last item
- Make sure all nested structures are properly closed

ERROR: "Cannot find module 'about.js'" (later when importing)
FIX:

- Verify file is saved as src/data/about.js
- Check filename is exactly: about.js (lowercase)
- When importing, use: import { aboutData } from "../data/about.js"

SYMPTOM: Data looks messy or hard to read
FIX:

- This is expected with long text! The formatting is correct
- Use comments to separate sections (we already have these)
- VSCode's auto-format (Shift+Alt+F) can help organize it

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ File is saved as src/data/about.js
□ No syntax errors (no red underlines in VS Code)
□ File starts with: export const aboutData = {
□ All sections are present: bio, values, experience, education, interests, cta
□ Bio has 4 properties: intro, background, current, personal
□ Values array has 4 objects (or however many you want)
□ Experience array has 3 objects (or however many jobs you have)
□ Education array has 3 objects (or however many credentials)
□ Interests array has 5 objects (or however many interests)
□ CTA section has heading, description, primaryAction, secondaryAction
□ All objects in arrays have unique IDs

================================================================================
CUSTOMIZATION GUIDE
================================================================================

INSTRUCTOR SAYS:
"This data file is a template! Here's how to make it yours:"

## CUSTOMIZE BIO:

Replace all four paragraphs with your own story:

- Who are you professionally?
- How did you get into this field?
- What are you focused on now?
- What do you do outside of work?

## CUSTOMIZE VALUES:

Replace with 3-6 of YOUR core principles:

- What guides your work?
- What do you believe in?
- What makes you different?
  Choose emojis that represent each value!

## CUSTOMIZE EXPERIENCE:

Add your actual work history:

- Full-time jobs
- Internships
- Freelance work
- Volunteer positions
- School projects (if early career)
- Each job should have 2-4 achievements

## CUSTOMIZE EDUCATION:

Add your real education:

- Degrees
- Bootcamps
- Online courses (Coursera, Udemy, freeCodeCamp)
- Certifications (Google, AWS, etc.)
- Workshops and training
  List most recent/important first!

## CUSTOMIZE INTERESTS:

Replace with YOUR hobbies:

- What do you do for fun?
- What are you passionate about?
- What makes you interesting?
- Find your own images or use different Unsplash photos

## CUSTOMIZE CTA:

Update the messaging:

- Change heading to match your personality
- Update description to your call-to-action
- Modify button text if desired

================================================================================
END OF ABOUT.JS GUIDE (CLASS 6 - DATA FILE)
================================================================================
