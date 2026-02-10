# Class 7: Building the Contact Page with Formspree

**Instructional Guide**
**Estimated Time:** 25-30 minutes

---

## Overview

In this lesson, you'll create a Contact page with a working contact form using **Formspree.io**. Formspree handles all the backend work (receiving emails, preventing spam, storing submissions) so you can focus on building a great user experience.

### What You'll Build

- **Contact.jsx** - A page component with a contact form
- **Formspree Form** - External service that handles form submissions

### Why Use Formspree?

**Without a backend service:**

- You'd need to build a server (Node.js, PHP, etc.)
- Configure email sending (SMTP servers)
- Handle spam protection
- Store form data in a database
- Deal with security concerns

**With Formspree:**

- ✅ No backend code needed
- ✅ Form submissions go directly to your email
- ✅ Built-in spam protection
- ✅ Free tier for basic use
- ✅ Easy setup and integration
- ✅ Professional and reliable

### Concepts Covered

- Integrating third-party services
- HTML form structure
- Form accessibility
- External service configuration
- Production-ready contact forms

### Prerequisites

Before starting, you should have:

- ✅ Container.jsx (Class 1)
- ✅ Section.jsx (Class 1)
- ✅ SEO.jsx (Class 2)
- ✅ Basic understanding of HTML forms

---

## Part 1: Create the Basic Contact Page

### Step 1: Create the Contact.jsx File

**1. Create a new file:**

```
src/pages/Contact.jsx
```

**2. Add the basic structure:**

```jsx
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with me for opportunities, collaborations, or questions."
        url="/contact"
      />

      <Section>
        <Container>
          <h1 className="heading-page">Get In Touch</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hi,
            feel free to reach out.
          </p>

          {/* Formspree form will be pasted here */}
        </Container>
      </Section>
    </>
  );
}
```

**What this creates:**

- Basic page structure with SEO
- Page heading "Get In Touch"
- Brief introductory paragraph
- Container ready for the Formspree form

### Step 2: Add Route in main.jsx

**1. Open `src/main.jsx`**

**2. Import the Contact component:**

```jsx
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Project from "./pages/Project.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx"; // Add this line
```

**3. Add the route:**

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
      { path: "/resume", element: <Resume /> },
      { path: "/contact", element: <Contact /> }, // Add this line
    ],
  },
]);
```

### Step 3: Verify the Page

**1. Start your dev server:**

```bash
npm run dev
```

**2. Navigate to the Contact page:**

Visit `http://localhost:5173/contact`

**You should see:**

- ✅ Page title "Get In Touch"
- ✅ Introductory paragraph
- ✅ Clean, centered layout

---

## Part 2: Create Form with Formspree.io

### What is Formspree?

**Formspree** is a form backend service that:

- Receives form submissions from your site
- Sends the data to your email
- Provides spam protection
- Stores submissions (optional)
- Works with static sites (no server needed)

### Formspree.io Setup Instructions

**[INSTRUCTOR: Add specific Formspree.io form creation steps here]**

This section should include:

1. How to create a Formspree account
2. How to create a new form
3. How to configure form settings
4. How to get the form embed code
5. Screenshots or detailed steps for the Formspree dashboard

**Placeholder for detailed Formspree instructions:**

```
═══════════════════════════════════════════════════════════════
FORMSPREE.IO FORM CREATION INSTRUCTIONS
═══════════════════════════════════════════════════════════════

[TO BE COMPLETED BY INSTRUCTOR]

Step 1: Create Formspree Account
- Visit https://formspree.io
- Click "Sign Up" or "Get Started"
- [Add specific steps...]

Step 2: Create New Form
- [Add specific steps...]
- Form name: "Portfolio Contact Form"
- [Configuration options...]

Step 3: Get Form Embed Code
- [How to access the code...]
- [Where to find it in Formspree dashboard...]
- [What settings to enable...]

Step 4: Copy the Form HTML
- [Specific instructions for copying the form code...]

═══════════════════════════════════════════════════════════════
```

### Important Form Settings

**When creating your Formspree form, make sure to:**

- ✅ Set the form name (e.g., "Portfolio Contact Form")
- ✅ Enable email notifications to your email address
- ✅ Enable reCAPTCHA or honeypot spam protection
- ✅ Set a custom success message (optional)
- ✅ Configure form fields: name, email, message

---

## Part 3: Add Formspree Form to Contact.jsx

Once you have the Formspree form code, you'll add it to your Contact page.

### Step 1: Copy the Formspree Form Code

**From Formspree dashboard:**

1. Navigate to your form
2. Click "Integration" or "Embed"
3. Copy the HTML form code

**The code will look something like this:**

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <label for="name">Name:</label>
  <input type="text" name="name" id="name" required />

  <label for="email">Email:</label>
  <input type="email" name="email" id="email" required />

  <label for="message">Message:</label>
  <textarea name="message" id="message" required></textarea>

  <button type="submit">Send</button>
</form>
```

### Step 2: Convert HTML to JSX

**Important changes when pasting into React:**

1. **Change `class` to `className`:**

   ```html
   <!-- HTML -->
   <div class="form-group">
     <!-- JSX -->
     <div className="form-group"></div>
   </div>
   ```

2. **Change `for` to `htmlFor`:**

   ```html
   <!-- HTML -->
   <label for="name">
     <!-- JSX -->
     <label htmlFor="name"></label
   ></label>
   ```

3. **Self-closing tags need `/`:**

   ```html
   <!-- HTML -->
   <input type="text" name="name" />

   <!-- JSX -->
   <input type="text" name="name" />
   ```

### Step 3: Add Tailwind Styling

Style the form to match your portfolio design:

```jsx
export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with me for opportunities, collaborations, or questions."
        url="/contact"
      />

      <Section>
        <Container>
          <h1 className="heading-page">Get In Touch</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hi,
            feel free to reach out.
          </p>

          {/* Formspree Form */}
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="mt-12 max-w-2xl space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition resize-y"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
              >
                Send Message
              </button>
            </div>
          </form>
        </Container>
      </Section>
    </>
  );
}
```

**Understanding the styling:**

**Form container:**

```jsx
className = "mt-12 max-w-2xl space-y-6";
```

- `mt-12` - Top margin (spacing from intro text)
- `max-w-2xl` - Maximum width for readability
- `space-y-6` - Vertical spacing between form fields

**Input fields:**

```jsx
className =
  "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition";
```

- `w-full` - Full width of container
- `px-4 py-3` - Comfortable padding
- `bg-white/5` - Subtle background
- `border border-white/10` - Subtle border
- `rounded-lg` - Rounded corners
- `text-white` - White text color
- `placeholder-white/40` - Semi-transparent placeholder
- `focus:*` - Focus state styling (when clicking into field)
- `transition` - Smooth hover/focus effects

**Submit button:**

```jsx
className =
  "px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black";
```

- `bg-white text-black` - White background, black text (inverted)
- `hover:bg-white/90` - Slightly transparent on hover
- `focus:ring-2` - Visible focus ring for keyboard navigation

---

## Part 4: Test Your Contact Form

### Step 1: Visual Testing

**1. Visit the Contact page:**

```
http://localhost:5173/contact
```

**Check that:**

- [ ] Page loads correctly
- [ ] Form displays properly
- [ ] All fields are visible
- [ ] Labels are aligned correctly
- [ ] Submit button looks good

### Step 2: Accessibility Testing

**Test keyboard navigation:**

1. Click in browser address bar
2. Press `Tab` key repeatedly
3. Tab should move through:
   - Name field
   - Email field
   - Message field
   - Submit button

**Check focus indicators:**

- [ ] Each field shows a visible focus ring when tabbed to
- [ ] Focus ring is clearly visible
- [ ] Can navigate entire form with keyboard only

### Step 3: Form Functionality Testing

**Test form submission:**

1. **Fill out the form:**
   - Name: Your test name
   - Email: Your actual email address
   - Message: "This is a test message from my portfolio form"

2. **Click "Send Message" button**

3. **What should happen:**
   - Form submits to Formspree
   - Page redirects to Formspree success page OR
   - Shows success message (depending on Formspree settings)

4. **Check your email:**
   - You should receive an email with the form submission
   - Email contains: name, email, message fields

**If the form doesn't submit:**

- Check browser console for errors (F12 → Console)
- Verify Formspree form ID is correct in `action` attribute
- Make sure all required fields are filled
- Check internet connection

### Step 4: Spam Protection

**Formspree provides spam protection:**

- reCAPTCHA (optional)
- Honeypot fields (hidden fields that bots fill out)
- Rate limiting

**Test that it's working:**

- First submission should go through
- Multiple rapid submissions might be blocked (spam prevention)

---

## Part 5: Optional Enhancements

### Add Success Message

Instead of redirecting to Formspree's page, show a custom success message:

**Add to Formspree form settings:**

- Enable "AJAX submissions"
- Or set custom redirect URL

**Or handle with React state:**

```jsx
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // Let form submit normally to Formspree
    // After submission, show success message
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <>
        <SEO title="Contact" description="Get in touch" url="/contact" />
        <Section>
          <Container className="text-center">
            <h1 className="heading-page">Thank You!</h1>
            <p className="mt-4 text-lg text-white/70">
              Your message has been sent. I'll get back to you soon!
            </p>
          </Container>
        </Section>
      </>
    );
  }

  return (
    // ... rest of form
  );
}
```

### Add Subject Line

Add a hidden field for email subject:

```jsx
<input type="hidden" name="_subject" value="New contact form submission!" />
```

### Add Auto-Reply

Configure Formspree to send automatic reply to user:

```jsx
<input type="hidden" name="_replyto" value="email" />
```

### Add Required Field Indicators

Show asterisks on required fields:

```jsx
<label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
  Name <span className="text-red-400">*</span>
</label>
```

---

## Common Issues and Solutions

### Issue: Form not submitting

**Possible causes:**

1. Wrong Formspree form ID in `action` attribute
2. Network issues
3. Browser blocking the request
4. Required fields not filled

**Solution:**

- Double-check form ID from Formspree dashboard
- Check browser console for errors
- Verify all required fields are filled
- Test in different browser

### Issue: Not receiving emails

**Possible causes:**

1. Email went to spam folder
2. Wrong email configured in Formspree
3. Email delivery delay

**Solution:**

- Check spam/junk folder
- Verify email in Formspree settings
- Wait a few minutes (sometimes delayed)
- Check Formspree dashboard for submissions

### Issue: Styling looks broken

**Possible causes:**

1. Tailwind classes not applied
2. Missing className conversions
3. CSS conflicts

**Solution:**

- Ensure all `class` changed to `className`
- Check for typos in Tailwind classes
- Verify Tailwind CSS is imported in index.css

### Issue: Form submits but page looks weird

**Possible causes:**

1. Formspree redirect page showing
2. Missing custom redirect setting

**Solution:**

- Configure custom redirect in Formspree
- Or implement React state-based success message
- Set up AJAX form submission

---

## Accessibility Best Practices

### What Makes This Form Accessible?

**1. Labels for every field:**

```jsx
<label htmlFor="name">Name</label>
<input id="name" name="name" />
```

- `htmlFor` connects label to input
- Screen readers announce label when field is focused

**2. Required attributes:**

```jsx
<input required />
```

- Browsers show error if field is empty
- Screen readers announce field is required

**3. Proper input types:**

```jsx
<input type="email" />  {/* Not type="text" */}
```

- Mobile keyboards show @ symbol for email
- Built-in validation for email format

**4. Focus indicators:**

```jsx
className = "focus:ring-2 focus:ring-white/50";
```

- Visible outline when field is focused
- Important for keyboard navigation

**5. Placeholder text:**

```jsx
placeholder = "your.email@example.com";
```

- Gives example of expected format
- Should NOT replace labels

### Testing Accessibility

**Keyboard navigation:**

- [ ] Can tab through all fields
- [ ] Can submit form with Enter key
- [ ] Focus indicators are visible

**Screen reader testing (optional):**

- Mac: Turn on VoiceOver (Cmd+F5)
- Windows: Turn on Narrator (Ctrl+Win+Enter)
- Navigate form and verify labels are read correctly

---

## Key Concepts Review

### What You Learned

**1. Third-party service integration**

- Using external services (Formspree)
- Embedding forms in React
- No backend required

**2. HTML forms in React**

- Converting HTML to JSX
- `className` instead of `class`
- `htmlFor` instead of `for`
- Self-closing tags

**3. Form accessibility**

- Labels for inputs
- Required fields
- Proper input types
- Focus management

**4. Styling forms with Tailwind**

- Consistent field styling
- Focus states
- Responsive design
- Professional appearance

---

## Next Steps

### For Class 8

In the next class, you'll build the **Portfolio.jsx** page that displays all your projects in a grid layout, learning about:

- Reusing components across pages
- Page layouts
- Data filtering and display
- Breadcrumb navigation

### Customization Homework

**Update the Contact page:**

1. Customize the intro text to your voice
2. Adjust form styling to match your brand
3. Add any additional form fields you want (phone, company, etc.)
4. Configure Formspree settings (auto-reply, custom redirect)

**Test thoroughly:**

- Submit test messages
- Verify emails arrive
- Check spam folder
- Test on mobile device

---

## Summary

✅ **You've built a Contact page that:**

- Displays a professional contact form
- Integrates with Formspree for backend handling
- Sends form submissions to your email
- Is fully accessible and keyboard-navigable
- Includes spam protection
- Works without any server code

✅ **You've learned:**

- How to integrate third-party services
- HTML form best practices
- Form accessibility requirements
- Converting HTML to JSX

**Great work!** Your portfolio now has a working contact form that potential employers and clients can use to reach you. 🎉

---

## Additional Resources

**Formspree Documentation:**

- [Formspree.io](https://formspree.io/)
- [Formspree Docs](https://help.formspree.io/)

**Form Accessibility:**

- [WebAIM Form Accessibility](https://webaim.org/techniques/forms/)
- [MDN Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)

**Alternatives to Formspree:**

- [Netlify Forms](https://www.netlify.com/products/forms/) - If deploying to Netlify
- [EmailJS](https://www.emailjs.com/) - JavaScript-based email service
- [Basin](https://usebasin.com/) - Another form backend service
