================================================================================
CLASS 5: TESTIMONIALCARD.JSX STEP-BY-STEP GUIDE - UI COMPONENT
================================================================================

OVERVIEW FOR INSTRUCTOR
-----------------------
This guide teaches students how to create a TestimonialCard component using
proper semantic HTML for quotes. Students will learn about <figure>,
<blockquote>, and <figcaption> elements - the correct way to mark up
testimonials and quotes for accessibility and SEO.

Students should create a new file: src/components/ui/TestimonialCard.jsx

NOTE: This is a simple presentational component with no complex logic, making
it a great confidence builder for students.

CONCEPTS TAUGHT:
- Semantic HTML for quotes (<figure>, <blockquote>, <figcaption>)
- Component props (quote, author, role)
- Proper quote formatting with quotation marks
- Using custom CSS classes (card-testimonial from index.css)
- Text styling with Tailwind opacity classes
- Accessibility best practices for testimonials

WHAT WE'RE BUILDING IN CLASS 5:
- A reusable card component for displaying testimonials
- Semantic HTML structure for quotes
- Styled card with proper visual hierarchy

================================================================================
STEP 1: CREATE THE TESTIMONIALCARD.JSX FILE AND COMPONENT STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"We're building a component to display a single testimonial. This is similar
to ProjectCard, but simpler - it just shows a quote, who said it, and their
role. We'll use special HTML elements designed specifically for quotes, which
helps screen readers and search engines understand the content better."

STUDENTS CREATE FILE:
----------------------
Create: src/components/ui/TestimonialCard.jsx

STUDENTS TYPE:
--------------
export default function TestimonialCard() {
  return (
    <div>
      {/* Testimonial content will go here */}
    </div>
  );
}

EXPLAIN:
--------
- export default function TestimonialCard() - Standard component export
- For now, returns a simple div as a placeholder
- We'll replace this with semantic HTML elements for quotes

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function TestimonialCard() {
  return (
    <div>
      {/* Testimonial content will go here */}
    </div>
  );
}

================================================================================
STEP 2: ADD PROPS FOR QUOTE, AUTHOR, AND ROLE
================================================================================

INSTRUCTOR SAYS:
"This component needs three pieces of information: the quote text, who said
it (author), and their job title (role). Let's add these as props using
destructuring."

STUDENTS MODIFY:
----------------
Update the function signature:

export default function TestimonialCard({ quote, author, role }) {

EXPLAIN:
--------
- { quote, author, role } - Destructuring props to get these three values
- quote - The testimonial text
- author - The person's name
- role - Their job title or position
- No defaults needed - these are all required props

ASK STUDENTS:
"Why don't we need default values for these props?"
(Answer: A testimonial doesn't make sense without a quote and author. These
are required data, not optional customizations.)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function TestimonialCard({ quote, author, role }) {
  return (
    <div>
      {/* Testimonial content will go here */}
    </div>
  );
}

================================================================================
STEP 3: REPLACE DIV WITH SEMANTIC FIGURE ELEMENT
================================================================================

INSTRUCTOR SAYS:
"Now here's where we learn something really cool about HTML! There's a special
element called <figure> that's designed for things like quotes, images, and
diagrams. Using <figure> tells browsers and screen readers: 'This is a
self-contained piece of content with a caption.' Let's use it with our
card-testimonial class for styling."

STUDENTS MODIFY:
----------------
Replace the <div> with <figure>:

  return (
    <figure className="card-testimonial">
      {/* Testimonial content will go here */}
    </figure>
  );

EXPLAIN:
--------
- <figure> - Semantic HTML element for self-contained content with a caption
- className="card-testimonial" - Custom class from index.css for card styling
- This gives us the card background, padding, border radius, and hover effects
- Semantic HTML helps screen readers understand this is a testimonial

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function TestimonialCard({ quote, author, role }) {
  return (
    <figure className="card-testimonial">
      {/* Testimonial content will go here */}
    </figure>
  );
}

================================================================================
STEP 4: ADD THE QUOTE WITH BLOCKQUOTE ELEMENT
================================================================================

INSTRUCTOR SAYS:
"Inside the figure, we need to display the quote. HTML has another special
element called <blockquote> that's specifically for quotes! We'll add
quotation marks around the quote to make it look like a proper testimonial,
and use Tailwind classes to style the text."

STUDENTS ADD:
-------------
Replace the comment with:

      <blockquote className="text-white/90">"{quote}"</blockquote>

EXPLAIN:
--------
- <blockquote> - Semantic HTML for quotations
- className="text-white/90" - White text with 90% opacity (slightly transparent)
- "{quote}" - Displays the quote text with quotation marks around it
- The quote marks are part of the display (visual), not the data
- {quote} is the variable containing the actual quote text from props

ASK STUDENTS:
"Why do we put the quotation marks outside the {quote} variable?"
(Answer: The quote marks are for visual presentation. The data in our
testimonials.js doesn't include quote marks - we add them here for display.)

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function TestimonialCard({ quote, author, role }) {
  return (
    <figure className="card-testimonial">
      <blockquote className="text-white/90">"{quote}"</blockquote>
    </figure>
  );
}

================================================================================
STEP 5: ADD THE AUTHOR AND ROLE WITH FIGCAPTION
================================================================================

INSTRUCTOR SAYS:
"Now we need to show who said this quote. HTML gives us <figcaption> - the
official element for captions on figures! We'll show the author's name
(emphasized) followed by a dash and their role. This creates a nice visual
hierarchy where the quote is most prominent, and the attribution is secondary."

STUDENTS ADD:
-------------
After the blockquote:

      <figcaption className="mt-3 text-sm text-white/70">
        <span className="font-medium text-white/90">{author}</span> — {role}
      </figcaption>

EXPLAIN:
--------
- <figcaption> - Semantic HTML for the caption of a figure
- className="mt-3 text-sm text-white/70" - Styling for the caption:
  * mt-3 - Margin-top for spacing from the quote
  * text-sm - Smaller text size
  * text-white/70 - White text with 70% opacity (more subtle than quote)
- <span className="font-medium text-white/90">{author}</span> - Author name:
  * font-medium - Makes it slightly bolder
  * text-white/90 - Slightly more visible than the role
- — - Em dash character (longer than a regular hyphen)
- {role} - The person's job title

DEMONSTRATE:
------------
"Notice how we're creating visual hierarchy with opacity:
- Quote: text-white/90 (most visible, 90%)
- Author: text-white/90 (same as quote, but smaller and bold)
- Role: text-white/70 (most subtle, 70%)

This guides the reader's eye: quote first, then who said it!"

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
export default function TestimonialCard({ quote, author, role }) {
  return (
    <figure className="card-testimonial">
      <blockquote className="text-white/90">"{quote}"</blockquote>
      <figcaption className="mt-3 text-sm text-white/70">
        <span className="font-medium text-white/90">{author}</span> — {role}
      </figcaption>
    </figure>
  );
}

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Created a TestimonialCard component with semantic HTML
✓ Used <figure> for the card container (proper semantic element)
✓ Used <blockquote> for the quote (accessibility best practice)
✓ Used <figcaption> for attribution (proper semantic element)
✓ Created visual hierarchy with text opacity
✓ Added proper quotation mark formatting
✓ Made the component reusable with props

================================================================================
KEY CONCEPTS COVERED
================================================================================

- Semantic HTML elements:
  * <figure> - Self-contained content with caption
  * <blockquote> - Quotations
  * <figcaption> - Caption for a figure
- Component props (quote, author, role)
- Visual hierarchy with opacity (text-white/90 vs text-white/70)
- Custom CSS classes (card-testimonial)
- Text styling with Tailwind (text-sm, font-medium, mt-3)
- Accessibility best practices for testimonials

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why use <figure> instead of <div>?"
A: Semantic HTML! <figure> tells screen readers and search engines this is a
   self-contained piece of content. It's better for accessibility and SEO.
   <div> is just a generic container with no meaning.

Q: "What's the difference between <blockquote> and <q>?"
A: <blockquote> is for longer, block-level quotes (like testimonials).
   <q> is for short, inline quotes within text. We want blockquote here.

Q: "Can I remove the quotation marks?"
A: Yes! You can remove the quote marks from "{quote}" to just {quote} if you
   prefer a cleaner look. Some designs use quote marks, some don't.

Q: "What if the quote is really long?"
A: The card will expand to fit the content. If you want to limit it, you
   could add Tailwind classes like line-clamp-3 to truncate long quotes.

Q: "What's that — character?"
A: It's an em dash - a longer dash used in typography to separate thoughts.
   You can type it on Mac with Option+Shift+- or use a regular hyphen (-).

================================================================================
WHAT'S NEXT
================================================================================

Next, we'll create the Testimonials section component that will:
- Import this TestimonialCard component
- Import the testimonials data
- Map over the testimonials array
- Display multiple cards in a responsive grid

This follows the same pattern we used for Projects: Data → Card → Section!

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "className is not defined" or styling doesn't appear
FIX:
- Verify index.css has the card-testimonial class defined
- Check that index.css is imported in main.jsx
- Make sure className uses camelCase (not class)

SYMPTOM: Card has no background or padding
FIX:
- Check that className="card-testimonial" is on the <figure> element
- Inspect element in browser DevTools to see if class is applied
- Verify index.css contains .card-testimonial styles

SYMPTOM: Quote and author text are the same size/color
FIX:
- Check Tailwind classes are correct: text-sm on figcaption
- Verify opacity values: text-white/90 vs text-white/70
- Make sure font-medium is on the author span

ERROR: "quote is not defined" or testimonial shows blank
FIX:
- Check that props are destructured: ({ quote, author, role })
- Verify the component is being used with props: <TestimonialCard quote="..." author="..." role="..." />
- Check for typos in prop names

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ File saved without errors in VS Code
□ Component uses <figure>, <blockquote>, and <figcaption>
□ Props are destructured (quote, author, role)
□ className="card-testimonial" is on the figure
□ Quote displays with quotation marks
□ Author and role display correctly
□ Text has proper visual hierarchy (different sizes/opacity)
□ No console errors or warnings

================================================================================
OPTIONAL ENHANCEMENTS
================================================================================

INSTRUCTOR SAYS:
"Here are some ways students can enhance this component later:"

ENHANCEMENT 1: ADD STAR RATING
-------------------------------
Add a rating prop and display stars:

export default function TestimonialCard({ quote, author, role, rating = 5 }) {
  return (
    <figure className="card-testimonial">
      <div className="text-yellow-400 mb-2">
        {"⭐".repeat(rating)}
      </div>
      <blockquote className="text-white/90">"{quote}"</blockquote>
      {/* ...rest */}
    </figure>
  );
}

ENHANCEMENT 2: ADD COMPANY NAME
--------------------------------
Display the person's company:

<figcaption className="mt-3 text-sm text-white/70">
  <span className="font-medium text-white/90">{author}</span>
  <br />
  {role} at {company}
</figcaption>

ENHANCEMENT 3: ADD AVATAR IMAGE
--------------------------------
Include a photo of the person:

<figure className="card-testimonial">
  <img src={image} alt={author} className="w-12 h-12 rounded-full mb-3" />
  <blockquote>"{quote}"</blockquote>
  {/* ...rest */}
</figure>

================================================================================
END OF TESTIMONIALCARD.JSX GUIDE (CLASS 5 - UI COMPONENT)
================================================================================
