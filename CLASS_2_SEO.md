================================================================================
CLASS 2: SEO.JSX STEP-BY-STEP GUIDE - SEO COMPONENT (NATIVE APPROACH)
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide walks students through building SEO.jsx using native React and DOM
manipulation. Unlike some tutorials that use react-helmet-async, we'll use
useEffect to directly manipulate the document head.

Students should create a new file: src/components/ui/SEO.jsx

IMPORTANT: This approach does NOT require installing any additional libraries!
We use native React (useEffect) and browser APIs (document).

CONCEPTS TAUGHT:

- useEffect hook for side effects
- DOM manipulation in React
- Dynamic document head updates
- SEO meta tags
- Default props and prop destructuring
- null return (components that don't render)

WHAT WE'RE BUILDING:

- SEO component that updates document.title
- Meta tags for description, robots, author
- Canonical URL link
- All done with native React/JavaScript

FINAL CODE MATCHES:
This builds to match your exact SEO.jsx in the repository.

================================================================================
STEP 1: CREATE THE BASIC COMPONENT STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"We're building a component that doesn't render anything visible - it just
updates the page's meta tags. This is a 'utility component'."

## STUDENTS TYPE:

export default function SEO() {
return null;
}

## EXPLAIN:

- export default - Makes component available to import
- function SEO() - Function component
- return null - Component doesn't render anything visible!
- SEO components update document head, not page body

ASK STUDENTS:
"What does return null mean?"
(Answer: Component doesn't render anything - no HTML in the page)

## CURRENT CODE SHOULD LOOK LIKE:

export default function SEO() {
return null;
}

================================================================================
STEP 2: IMPORT USEEFFECT
================================================================================

INSTRUCTOR SAYS:
"We need useEffect from React. This hook lets us run code after the component
renders - perfect for updating the document head."

## STUDENTS ADD AT THE TOP:

import { useEffect } from "react";

## EXPLAIN:

- useEffect - React hook for side effects
- Side effects = code that affects things outside React (like document.title)
- Runs after component renders
- Perfect for DOM manipulation

## CURRENT CODE SHOULD LOOK LIKE:

import { useEffect } from "react";

export default function SEO() {
return null;
}

================================================================================
STEP 3: ADD PROPS WITH DEFAULTS
================================================================================

INSTRUCTOR SAYS:
"Let's add props for customization. Each page will pass different title,
description, etc."

## STUDENTS MODIFY THE FUNCTION:

export default function SEO({
title,
description,
image = "/assets/brackets-curly-svgrepo-com.svg",
url = window.location.href,
type = "website",
}) {
return null;
}

## EXPLAIN:

- { title, description, ... } - Destructured props
- title - Page title (no default - required)
- description - Page description (no default - required)
- image = "..." - Default Open Graph image
- url = window.location.href - Current page URL by default
- type = "website" - Default content type
- Props with = have defaults, props without are required

ASK STUDENTS:
"What's window.location.href?"
(Answer: The current page's full URL from the browser)

## CURRENT CODE SHOULD LOOK LIKE:

import { useEffect } from "react";

export default function SEO({
title,
description,
image = "/assets/brackets-curly-svgrepo-com.svg",
url = window.location.href,
type = "website",
}) {
return null;
}

================================================================================
STEP 4: CREATE SITE NAME AND FULL TITLE
================================================================================

INSTRUCTOR SAYS:
"Let's create variables for the site name and full title. The full title
combines the page title with the site name."

## STUDENTS ADD BEFORE RETURN:

export default function SEO({
title,
description,
image = "/assets/brackets-curly-svgrepo-com.svg",
url = window.location.href,
type = "website",
}) {
const siteName = "Student Name Here - Portfolio";
const fullTitle = title ? `${title} | ${siteName}` : siteName;

return null;
}

## EXPLAIN:

- siteName - Your site's name (students will customize)
- fullTitle - Combines page title + site name
- Ternary operator: title ? "yes" : "no"
- If title exists: "Home | Student Name Here - Portfolio"
- If no title: just "Student Name Here - Portfolio"
- Template literal: `${title} | ${siteName}` combines strings

## SHOW EXAMPLES:

title = "Home"
fullTitle = "Home | Student Name Here - Portfolio"

title = "About"
fullTitle = "About | Student Name Here - Portfolio"

title = undefined
fullTitle = "Student Name Here - Portfolio"

NOTE FOR STUDENTS:
"Replace 'Student Name Here' with your actual name!"

## CURRENT CODE SHOULD LOOK LIKE:

import { useEffect } from "react";

export default function SEO({
title,
description,
image = "/assets/brackets-curly-svgrepo-com.svg",
url = window.location.href,
type = "website",
}) {
const siteName = "Student Name Here - Portfolio";
const fullTitle = title ? `${title} | ${siteName}` : siteName;

return null;
}

================================================================================
STEP 5: CREATE USEEFFECT HOOK
================================================================================

INSTRUCTOR SAYS:
"Now let's add useEffect. This will run whenever our props change and update
the document head."

## STUDENTS ADD BEFORE RETURN:

const siteName = "Student Name Here - Portfolio";
const fullTitle = title ? `${title} | ${siteName}` : siteName;

useEffect(() => {

}, [fullTitle, description, image, url, type, siteName]);

return null;

## EXPLAIN:

- useEffect(() => { ... }, [...]) - Hook syntax
- First argument: function to run
- Second argument: dependency array
- Dependencies: [fullTitle, description, ...]
- Effect runs when ANY dependency changes
- Effect also runs on first render

ASK STUDENTS:
"When will this effect run?"
(Answer: When component first renders, and whenever any value in the
dependency array changes)

## CURRENT CODE SHOULD LOOK LIKE:

import { useEffect } from "react";

export default function SEO({
title,
description,
image = "/assets/brackets-curly-svgrepo-com.svg",
url = window.location.href,
type = "website",
}) {
const siteName = "Student Name Here - Portfolio";
const fullTitle = title ? `${title} | ${siteName}` : siteName;

useEffect(() => {

}, [fullTitle, description, image, url, type, siteName]);

return null;
}

================================================================================
STEP 6: UPDATE DOCUMENT TITLE
================================================================================

INSTRUCTOR SAYS:
"First, let's update the page title - this shows in the browser tab."

## STUDENTS ADD INSIDE USEEFFECT:

useEffect(() => {
// Update document title
document.title = fullTitle;

}, [fullTitle, description, image, url, type, siteName]);

## EXPLAIN:

- document.title - Browser API to set page title
- fullTitle - Our combined title ("Home | Site Name")
- This is visible in browser tab and bookmarks
- Comment explains what we're doing

## DEMONSTRATE:

Show browser tab title changing when this runs!

## CURRENT CODE SHOULD LOOK LIKE:

import { useEffect } from "react";

export default function SEO({
title,
description,
image = "/assets/brackets-curly-svgrepo-com.svg",
url = window.location.href,
type = "website",
}) {
const siteName = "Student Name Here - Portfolio";
const fullTitle = title ? `${title} | ${siteName}` : siteName;

useEffect(() => {
// Update document title
document.title = fullTitle;

}, [fullTitle, description, image, url, type, siteName]);

return null;
}

================================================================================
STEP 7: CREATE HELPER FUNCTION FOR META TAGS
================================================================================

INSTRUCTOR SAYS:
"We'll create a helper function to add or update meta tags. This keeps our
code DRY (Don't Repeat Yourself)."

## STUDENTS ADD INSIDE USEEFFECT (AFTER TITLE UPDATE):

useEffect(() => {
// Update document title
document.title = fullTitle;

// Update or create meta tags
const updateMetaTag = (name, content, property = false) => {
const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
let meta = document.querySelector(selector);

    if (!meta) {
      meta = document.createElement("meta");
      if (property) {
        meta.setAttribute("property", name);
      } else {
        meta.setAttribute("name", name);
      }
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);

};

}, [fullTitle, description, image, url, type, siteName]);

## EXPLAIN:

- updateMetaTag function - Creates or updates meta tags
- (name, content, property = false) - Three parameters
- selector - CSS selector to find existing tag
- property ? "property" : "name" - Open Graph uses property, others use name
- document.querySelector - Find existing tag
- if (!meta) - If tag doesn't exist, create it
- document.createElement("meta") - Create new meta element
- setAttribute - Set attributes on the element
- document.head.appendChild - Add to document head
- meta.setAttribute("content", content) - Update content

## BREAK IT DOWN:

1. Try to find existing meta tag
2. If not found, create a new one
3. Set/update the content attribute
4. If new, add it to document head

## WHY A HELPER FUNCTION?

We'll call this many times for different meta tags. Function prevents
repeating this logic!

## CURRENT CODE SHOULD LOOK LIKE:

import { useEffect } from "react";

export default function SEO({
title,
description,
image = "/assets/brackets-curly-svgrepo-com.svg",
url = window.location.href,
type = "website",
}) {
const siteName = "Student Name Here - Portfolio";
const fullTitle = title ? `${title} | ${siteName}` : siteName;

useEffect(() => {
// Update document title
document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

}, [fullTitle, description, image, url, type, siteName]);

return null;
}

================================================================================
STEP 8: USE HELPER TO ADD META TAGS
================================================================================

INSTRUCTOR SAYS:
"Now let's use our helper function to add the actual meta tags."

## STUDENTS ADD AFTER THE HELPER FUNCTION:

const updateMetaTag = (name, content, property = false) => {
// ...helper function code...
};

// Basic Meta Tags
updateMetaTag("description", description);
updateMetaTag("robots", "index, follow");
updateMetaTag("author", "Student Name Here");

## EXPLAIN:

- updateMetaTag("description", description) - Page description
- updateMetaTag("robots", "index, follow") - Tell search engines to index
- updateMetaTag("author", "Student Name Here") - Page author
- Third parameter defaults to false (uses name, not property)

## META TAG PURPOSES:

- description: Shows in search results
- robots: "index" = add to search, "follow" = follow links
- author: Who created the site

NOTE FOR STUDENTS:
"Replace 'Student Name Here' with your actual name!"

## CURRENT CODE SHOULD LOOK LIKE:

useEffect(() => {
// Update document title
document.title = fullTitle;

// Update or create meta tags
const updateMetaTag = (name, content, property = false) => {
const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
let meta = document.querySelector(selector);

    if (!meta) {
      meta = document.createElement("meta");
      if (property) {
        meta.setAttribute("property", name);
      } else {
        meta.setAttribute("name", name);
      }
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);

};

// Basic Meta Tags
updateMetaTag("description", description);
updateMetaTag("robots", "index, follow");
updateMetaTag("author", "Student Name Here");

}, [fullTitle, description, image, url, type, siteName]);

================================================================================
STEP 9: ADD CANONICAL URL
================================================================================

INSTRUCTOR SAYS:
"Finally, let's add the canonical URL. This tells search engines the official
URL for this page."

## STUDENTS ADD AFTER META TAGS:

// Basic Meta Tags
updateMetaTag("description", description);
updateMetaTag("robots", "index, follow");
updateMetaTag("author", "Student Name Here");

// Update canonical link
let canonical = document.querySelector('link[rel="canonical"]');
if (!canonical) {
canonical = document.createElement("link");
canonical.setAttribute("rel", "canonical");
document.head.appendChild(canonical);
}
canonical.setAttribute("href", url);

## EXPLAIN:

- Similar pattern to meta tags, but for <link> element
- document.querySelector('link[rel="canonical"]') - Find existing canonical
- if (!canonical) - If doesn't exist, create it
- document.createElement("link") - Create link element
- setAttribute("rel", "canonical") - Set relationship type
- document.head.appendChild - Add to head
- canonical.setAttribute("href", url) - Set the URL

## WHY CANONICAL?

Tells search engines which URL is the "official" one. Prevents duplicate
content issues if same page is accessible via different URLs.

================================================================================
FINAL CODE FOR SEO.JSX (MATCHES YOUR CODEBASE)
================================================================================

import { useEffect } from "react";

export default function SEO({
title,
description,
image = "/assets/brackets-curly-svgrepo-com.svg",
url = window.location.href,
type = "website",
}) {
const siteName = "Student Name Here - Portfolio";
const fullTitle = title ? `${title} | ${siteName}` : siteName;

useEffect(() => {
// Update document title
document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic Meta Tags
    updateMetaTag("description", description);
    updateMetaTag("robots", "index, follow");
    updateMetaTag("author", "Student Name Here");

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

}, [fullTitle, description, image, url, type, siteName]);

return null;
}

================================================================================
✅ THIS CODE EXACTLY MATCHES YOUR SEO.JSX FILE
================================================================================

# STEP 10: USE SEO IN HOME PAGE

INSTRUCTOR SAYS:
"Let's test the SEO component in our Home page."

STUDENTS OPEN: src/pages/Home.jsx

## STUDENTS ADD IMPORT:

import SEO from "../components/ui/SEO.jsx";

## STUDENTS ADD SEO COMPONENT:

export default function Home() {
return (
<div>
<SEO
        title="Home"
        description="YOUR NAME HERE - UX Designer & Frontend Developer."
        url="/"
      />

      {/* ...rest of page... */}
    </div>

);
}

## EXPLAIN:

- <SEO /> component at top of page
- title="Home" - Page-specific title
- description="..." - Page description for search
- url="/" - Page path
- Component doesn't render visibly, just updates head

================================================================================
STEP 11: TEST THE SEO COMPONENT
================================================================================

## IN TERMINAL:

npm run dev

## TEST IN BROWSER:

1. Open localhost:5173
2. Check browser tab - should show "Home | Student Name Here - Portfolio"
3. Open DevTools (F12)
4. Go to Elements/Inspector tab
5. Find <head> section
6. Look for:
   - <title>Home | Student Name Here - Portfolio</title>
   - <meta name="description" content="...">
   - <meta name="robots" content="index, follow">
   - <meta name="author" content="Student Name Here">
   - <link rel="canonical" href="/">

## DEMONSTRATE:

Show how changing the title prop changes the browser tab title!

## WHAT WE'VE ACCOMPLISHED

✓ Created SEO component using native React
✓ No external libraries needed (no react-helmet-async!)
✓ Dynamic document title updates
✓ Meta tags for SEO
✓ Canonical URL support
✓ Matches your exact codebase
✓ Reusable across all pages

## KEY CONCEPTS COVERED

- useEffect hook for side effects
- DOM manipulation in React
- document.title API
- document.querySelector()
- document.createElement()
- Element.setAttribute()
- Ternary operator for conditional logic
- Helper functions for DRY code
- Default props
- Components that return null

## COMMON STUDENT QUESTIONS

Q: "Why return null instead of returning the meta tags in JSX?"
A: Meta tags go in <head>, but React components render in <body>. We use
useEffect + DOM APIs to put them in the right place.

Q: "What's the difference between name and property?"
A: Standard meta tags use name="...". Open Graph tags (Facebook, etc.) use
property="...". Our helper supports both.

Q: "Why use useEffect instead of doing this in render?"
A: Manipulating DOM directly in render causes issues. useEffect runs AFTER
render, which is the right time for side effects.

Q: "Do I need react-helmet-async?"
A: No! This native approach works great and has zero dependencies. It's
simpler and more transparent.

Q: "Can I add Open Graph tags?"
A: Yes! Use updateMetaTag("og:title", title, true). The true parameter means
it's a property attribute. But your codebase doesn't include these yet.

## TROUBLESHOOTING

ERROR: "useEffect is not defined"

- Check import: import { useEffect } from "react"
- Verify spelling (capital E in useEffect)

TITLE NOT UPDATING:

- Check useEffect is called correctly
- Verify document.title = fullTitle is inside useEffect
- Check browser DevTools console for errors

META TAGS NOT APPEARING:

- Open DevTools and inspect <head>
- Check updateMetaTag function is correct
- Verify function is called inside useEffect

WRONG TITLE FORMAT:

- Check fullTitle logic: title ? `${title} | ${siteName}` : siteName
- Verify template literal syntax (backticks)

## TESTING CHECKLIST

□ SEO.jsx file exists in src/components/ui/
□ No errors in code editor
□ No errors in browser console
□ SEO component imported in Home.jsx
□ <SEO /> component used with props
□ Browser tab shows correct title
□ DevTools <head> has <title> tag
□ DevTools <head> has description meta tag
□ DevTools <head> has robots meta tag
□ DevTools <head> has author meta tag
□ DevTools <head> has canonical link

## CUSTOMIZATION

Students should:

- Replace "Student Name Here" in siteName (line 8)
- Replace "Student Name Here" in author meta tag (line 30)
- Use SEO component on every page with unique titles

================================================================================
END OF SEO.JSX GUIDE (CORRECTED - MATCHES YOUR CODEBASE)
================================================================================
