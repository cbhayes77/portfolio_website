# Class 6: Building the Resume Page

**Instructional Guide**
**Estimated Time:** 15-20 minutes

---

## Overview

In this lesson, you'll create a Resume page that displays your PDF resume directly in the browser using an iframe. Users will be able to view your resume without leaving your portfolio site.

### What You'll Build

- **Resume.jsx** - A page component that embeds a PDF resume

### Concepts Covered

- Embedding PDFs with iframes
- Accessible fallback content
- Static asset management in Vite
- Simple page layouts

### Prerequisites

Before starting, you should have:

- ✅ Container.jsx (Class 1)
- ✅ Section.jsx (Class 1)
- ✅ SEO.jsx (Class 2)
- ✅ Basic understanding of React components

---

## Understanding the Resume Page

### What is an iframe?

An **iframe** (inline frame) is an HTML element that embeds another document within the current page. It's perfect for displaying PDFs because:

- The PDF stays within your site (no external links)
- Users can scroll through the PDF
- It provides a seamless viewing experience
- Fallback content displays if iframe isn't supported

### Page Structure

```
Resume Page
├── SEO Component (meta tags)
├── Section (spacing wrapper)
└── Container (max-width wrapper)
    ├── Heading
    └── iframe (PDF viewer)
        └── Fallback content (if iframe fails)
```

---

## Step 1: Prepare Your Resume PDF

Before building the component, you need a PDF file.

### Adding Your Resume to the Project

**1. Locate or create your resume PDF:**

- Use an existing resume file
- Or use a placeholder PDF for now

**2. Name your file appropriately:**

- Good: `yourname_resume.pdf`
- Good: `resume.pdf`
- Avoid: `my resume final FINAL v2.pdf`

**3. Add the PDF to the `public` folder:**

```bash
# In your terminal, from project root
# Option 1: Use VS Code file explorer
# Drag your PDF into the public/ folder

# Option 2: Use terminal
cp ~/path/to/your/resume.pdf public/resume.pdf
```

**Why the `public` folder?**

- Files in `public/` are served as-is
- They're accessible at the root URL (`/resume.pdf`)
- No import needed - just reference the path

**4. Verify the file is there:**

```bash
ls public/
# You should see: resume.pdf (or your filename)
```

---

## Step 2: Create the Resume Page Component

### Create the File

**1. Create a new file:**

```
src/pages/Resume.jsx
```

**2. Start with the basic structure:**

```jsx
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Resume() {
  return <></>;
}
```

**Understanding the imports:**

- `Section` - Provides consistent vertical spacing
- `Container` - Centers content with max-width
- `SEO` - Adds meta tags for search engines

---

## Step 3: Add SEO Component

Add the SEO component with appropriate meta tags:

```jsx
export default function Resume() {
  return (
    <>
      <SEO title="Resume" description="View my professional resume and download a PDF copy." url="/resume" />
    </>
  );
}
```

**What this does:**

- Sets the page title to "Resume | Portfolio" (site name added automatically)
- Provides a description for search engines
- Sets the canonical URL for SEO

---

## Step 4: Build the Page Layout

Add the Section, Container, and heading:

```jsx
export default function Resume() {
  return (
    <>
      <SEO title="Resume" description="View my professional resume and download a PDF copy." url="/resume" />

      <Section>
        <Container>
          <h1 className="heading-page">Resume</h1>
        </Container>
      </Section>
    </>
  );
}
```

**Understanding the structure:**

- `<Section>` - Adds vertical padding (py-20)
- `<Container>` - Centers content, max-width 1280px
- `<h1 className="heading-page">` - Large page title (defined in index.css)

---

## Step 5: Add the PDF iframe

Now add the iframe to display your PDF:

```jsx
export default function Resume() {
  return (
    <>
      <SEO title="Resume" description="View my professional resume and download a PDF copy." url="/resume" />

      <Section>
        <Container>
          <h1 className="heading-page">Resume</h1>

          <div className="mt-8">
            <iframe
              src="/resume.pdf"
              width="100%"
              height="800px"
              title="Resume PDF"
              className="border border-white/10 rounded-lg"
            >
              <p>
                Your browser does not support iframes.{" "}
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white underline">
                  Click here to view the PDF directly.
                </a>
              </p>
            </iframe>
          </div>
        </Container>
      </Section>
    </>
  );
}
```

---

## Step 6: Understanding the iframe Code

Let's break down each part of the iframe:

### The Wrapper Div

```jsx
<div className="mt-8">
```

**What it does:**

- `mt-8` - Adds margin-top (2rem / 32px) for spacing below heading

### The iframe Element

```jsx
<iframe
  src="/resume.pdf"
  width="100%"
  height="800px"
  title="Resume PDF"
  className="border border-white/10 rounded-lg"
>
```

**Attribute breakdown:**

| Attribute   | Purpose         | Value Explanation                           |
| ----------- | --------------- | ------------------------------------------- |
| `src`       | PDF location    | `/resume.pdf` references file in public/    |
| `width`     | Horizontal size | `100%` makes it full-width of container     |
| `height`    | Vertical size   | `800px` provides good viewing area          |
| `title`     | Accessibility   | Describes iframe content for screen readers |
| `className` | Styling         | Border and rounded corners                  |

**Tailwind classes explained:**

- `border` - Adds a border
- `border-white/10` - White border at 10% opacity
- `rounded-lg` - Rounds corners (8px)

### Fallback Content

```jsx
<p>
  Your browser does not support iframes.{" "}
  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white underline">
    Click here to view the PDF directly.
  </a>
</p>
```

**What this does:**

- Only shows if browser doesn't support iframes (rare nowadays)
- Provides a direct link to open PDF in new tab
- `{" "}` adds a space between text and link
- `target="_blank"` opens in new tab
- `rel="noopener noreferrer"` - Security best practice for external links
- `className="text-white underline"` - Styles the link

---

## Step 7: Add Route in main.jsx

Now that Resume.jsx exists, add it to your routing:

**1. Open `src/main.jsx`**

**2. Import the Resume component:**

```jsx
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx"; // Add this line
```

**3. Add the route:**

Find the routes array and add:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/portfolio/:slug", element: <Project /> },
      { path: "/contact", element: <Contact /> },
      { path: "/resume", element: <Resume /> }, // Add this line
    ],
  },
]);
```

**What this does:**

- Maps the URL `/resume` to the Resume component
- When users visit `yoursite.com/resume`, they'll see your Resume page

---

## Step 8: Test Your Resume Page

### Start the Dev Server

```bash
npm run dev
```

### Navigate to the Resume Page

**Option 1: Click the Resume link in your navigation**

**Option 2: Type URL directly:**

```
http://localhost:5173/resume
```

### What You Should See

✅ **Page title** "Resume" at the top
✅ **PDF displayed** in the iframe
✅ **Ability to scroll** through the PDF
✅ **Clean border** around the PDF viewer

### Troubleshooting

**Problem: PDF doesn't display**

**Check:**

1. Is the PDF in the `public/` folder?
2. Does the filename in `src` match exactly? (case-sensitive!)
3. Is the file actually a valid PDF?
4. Check browser console for errors (F12 → Console)

**Solution:**

```jsx
// Make sure filename matches exactly
src = "/resume.pdf"; // If your file is public/resume.pdf
src = "/my_resume.pdf"; // If your file is public/my_resume.pdf
```

**Problem: "File not found" error**

**Cause:** The path doesn't match the file location

**Fix:**

- Verify file is in `public/` (not `src/` or elsewhere)
- Check filename spelling and case
- Try refreshing the page

**Problem: PDF downloads instead of displaying**

**Cause:** Some browsers download PDFs instead of displaying them

**This is normal behavior** - users can still view it, just in a new tab instead of embedded.

---

## Step 9: Optional Enhancements

### Add a Download Button

Want to let users download the PDF easily? Add a button:

```jsx
<Section>
  <Container>
    <h1 className="heading-page">Resume</h1>

    {/* Download Button */}
    <div className="mt-4 flex gap-4">
      <Button as="a" href="/resume.pdf" download variant="primary">
        Download PDF
      </Button>

      <Button as="a" href="/resume.pdf" target="_blank" rel="noopener noreferrer" variant="secondary">
        Open in New Tab
      </Button>
    </div>

    {/* PDF Viewer */}
    <div className="mt-8">
      <iframe
        src="/resume.pdf"
        width="100%"
        height="800px"
        title="Resume PDF"
        className="border border-white/10 rounded-lg"
      >
        {/* ...fallback content... */}
      </iframe>
    </div>
  </Container>
</Section>
```

**What this adds:**

- Download button with `download` attribute
- "Open in New Tab" button for full-screen viewing
- Buttons positioned above the iframe

### Adjust iframe Height for Mobile

Make the iframe responsive:

```jsx
<iframe
  src="/resume.pdf"
  width="100%"
  height="800px"
  title="Resume PDF"
  className="border border-white/10 rounded-lg h-[600px] md:h-[800px]"
>
```

**What this does:**

- `h-[600px]` - 600px height on mobile
- `md:h-[800px]` - 800px height on tablet/desktop
- Better viewing experience on small screens

### Add a Brief Introduction

Add context before the PDF:

```jsx
<h1 className="heading-page">Resume</h1>

<p className="mt-4 text-lg text-white/70 max-w-2xl">
  Below is my professional resume. You can download a PDF copy or
  view it directly in your browser.
</p>

<div className="mt-8">
  <iframe ...>
```

---

## Complete Code

Here's the full Resume.jsx with all enhancements:

```jsx
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Resume() {
  return (
    <>
      <SEO title="Resume" description="View and download my professional resume." url="/resume" />

      <Section>
        <Container>
          <h1 className="heading-page">Resume</h1>

          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Below is my professional resume. You can download a PDF copy or view it directly in your browser.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <Button as="a" href="/resume.pdf" download variant="primary">
              Download PDF
            </Button>

            <Button as="a" href="/resume.pdf" target="_blank" rel="noopener noreferrer" variant="secondary">
              Open in New Tab
            </Button>
          </div>

          {/* PDF Viewer */}
          <div className="mt-8">
            <iframe
              src="/resume.pdf"
              width="100%"
              height="800px"
              title="Resume PDF"
              className="border border-white/10 rounded-lg h-[600px] md:h-[800px]"
            >
              <p>
                Your browser does not support iframes.{" "}
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white underline">
                  Click here to view the PDF directly.
                </a>
              </p>
            </iframe>
          </div>
        </Container>
      </Section>
    </>
  );
}
```

---

## Key Concepts Review

### What You Learned

**1. Embedding PDFs with iframes**

- Using the `<iframe>` element
- Setting appropriate width/height
- Providing fallback content

**2. Static Assets in Vite**

- Files in `public/` are served at root URL
- No import needed - reference with `/filename.ext`
- Perfect for PDFs, images, favicons

**3. Accessible iframes**

- Always include `title` attribute
- Provide fallback content
- Offer alternative ways to view (download, new tab)

**4. React Router Integration**

- Adding new routes to `main.jsx`
- URL mapping to components

---

## Accessibility Considerations

### Screen Reader Support

**✅ Good:**

- iframe has `title` attribute
- Fallback content is descriptive
- Alternative download link provided

**❌ Avoid:**

- iframe without title
- No fallback content
- Only one way to access PDF

### Keyboard Navigation

Users should be able to:

- Tab to the iframe
- Navigate within the PDF using arrow keys
- Access download/new tab buttons with keyboard

### Mobile Considerations

- Adjust iframe height for small screens
- Ensure buttons are easily tappable
- PDF should be readable on mobile

---

## Common Questions

### "Can I use a Google Drive/Dropbox link instead?"

**Yes, but not recommended:**

- External embeds may break
- Slower loading
- Privacy concerns
- Loss of control

**Better:** Host the PDF in your project's `public/` folder

### "What if my resume is multiple pages?"

**The iframe will show all pages** - users can scroll through them just like a normal PDF viewer.

### "Can users print the PDF from the iframe?"

**Usually yes** - most browsers allow printing from iframes. But providing a download button gives users more control.

### "Should I use iframe or just a download link?"

**Use both:**

- iframe for immediate viewing (better UX)
- Download button for users who want a local copy

### "What if I update my resume?"

**Just replace the PDF file:**

1. Delete old PDF from `public/`
2. Add new PDF with same filename
3. Refresh browser (might need hard refresh: Cmd+Shift+R)

If you change the filename, update the `src` in Resume.jsx

---

## Next Steps

### For Class 7

In the next class, you'll build the **Contact.jsx** page with a functional contact form, learning about:

- Form handling in React
- Controlled components
- Form validation
- User input management

### Customization Homework

**Replace the placeholder resume:**

1. Create or update your professional resume
2. Export as PDF
3. Replace the file in `public/`
4. Update any text/buttons in Resume.jsx to match your branding

**Update SEO:**

- Customize the description
- Add your name to the title

**Styling:**

- Adjust iframe height to your preference
- Customize button text/placement
- Add personal touches

---

## Summary

✅ **You've built a Resume page that:**

- Displays your PDF resume in an embedded viewer
- Provides download and new tab options
- Works on mobile and desktop
- Is accessible and SEO-friendly
- Integrates seamlessly with your portfolio

**Great work!** Your portfolio now has a professional way to showcase your resume. In the next class, you'll add a contact form so employers can reach you directly. 🎉
