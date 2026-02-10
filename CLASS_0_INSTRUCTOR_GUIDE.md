Capstone Class - Portfolio Website
Teacher Build Guide
At the end of this project, students will have a React + Tailwind website, ready for them to fill in with their portfolio and resume.
Author: Christopher Hayes
Version: 2.0
Audience: Instructor Use Only
Format: Full teacher version with commentary, discussion cues, and step-by-step logic.

While the below instructions are for building the site from scratch, I recommend cloning the project and running it locally to familiarize yourself with the setup, coding, and functionality of the project before teaching it. You will need to go through installing the prerequisites in Section 1 and doing an “npm install” before the project will build. You’ll also want this to be able to view the code in an easier-to-read format than this instructor’s guide.

Student Boilerplate Repo: https://github.com/cbhayes77/capstone_boilerplate

Finished Capstone Repo: https://github.com/cbhayes77/portfolio_website
Section 1 — Prerequisites & Setup
🎯 Goal
By the end of this section, every student will:
Have Node.js and npm installed and verified.

Have Git installed and verified.

Be ready to use VS Code’s terminal to build the project from scratch.

These tools are required because the portfolio site is built with React + Vite, which runs on Node and npm, and uses Git for version control (see project README).

1.1 Check if Node and npm are already installed
What: Verify versions using the VS Code terminal.
Why: Vite’s commands (npm create vite@latest, npm run dev) depend on Node and npm.
Open VS Code.

Go to View → Terminal to open the integrated terminal.

Type each command and press Enter:

node -v
npm -v

If you see version numbers (e.g., v18.19.0 and 9.9.0), you’re ready.

If you see “command not found” or “not recognized”, install Node and npm next.

1.2 Install Node + npm (if needed)
macOS
What: Install Node through Homebrew.
Why: Ensures Node and npm are always up to date and easy to manage.
Open the VS Code terminal or the regular Terminal app.

Install Homebrew (if you don’t already have it):

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Once Homebrew is installed, install Node:

brew install node

Verify installation:

node -v
npm -v
✅ Both should show version numbers (Node v18 or higher recommended).

Windows
What: Install Node from the official site.
Why: Same requirement as macOS—React + Vite needs Node and npm.
Go to 👉 https://nodejs.org

Download the LTS (Long-Term Support) version for Windows.

Run the installer and check ✅ “Add to PATH” during setup.

After installation, open VS Code → Terminal and type:

node -v
npm -v
✅ Both should return version numbers (Node ≥ 18).

1.3 Install Git (version control)
What: Add Git so students can save versions and use VS Code’s Source Control panel.
Why: The workflow in the README assumes Git is available.
macOS
Git is usually pre-installed. Check:
git -v

If not found, install it with Homebrew:
brew install git

Windows
Go to 👉 https://git-scm.com/download/win

Run the installer (accept defaults, make sure “Add Git to PATH” is checked).

Restart VS Code, then verify:

git -v

✅ You should see a version number (e.g., git version 2.45.0).

1.4 Confirm VS Code Extensions
Why: These extensions help maintain clean, consistent code as students type.
Extension
Purpose
React Developer Tools
Browser extension for inspecting React components.
Tailwind Docs
Documentation for Tailwind
Tailwind Snippets
Snippets of code for Tailwind
React Dev Pack
Popular extensions to speed up React development (includes Prettier, ESLint, Tailwind CSS Intellisense, Better Comments, Auto Close Tag, and Custom CSS and JS Loader

Install them through VS Code → Extensions (⇧⌘X on Mac / Ctrl + Shift + X on Windows).

✅ Checkpoint — End of Section 1
At this point every student should confirm:
node -v, npm -v, and git -v return valid versions.

VS Code’s terminal opens successfully.

(Optional) Recommended extensions are installed.

🎉 Next up: Section 2 — Creating the Vite + React Project, where you’ll initialize the folder structure and run the first development server.

Section 2 — Clone the Boilerplate Repo
2.1 Create the project folder named “capstone” and open it in VS Code
What: Start in a clean directory.
Why: We’re building the site from scratch to match your final codebase.
Clone the Boilerplate Repo
git clone https://github.com/cbhayes77/capstone_boilerplate .

2.2 Install the package dependencies for this folder
What: Scaffold the base app.
Why: Your project uses React + Vite and Vite’s scripts.
Install packages:
npm install

2.5 Create the global CSS entry
What: Tailwind v4 uses a single import in your global stylesheet.
Why: Matches your src/index.css.
File: src/index.css — create this file with exactly:
@import "tailwindcss";

2.6 Import the global CSS in the entry file
What: Ensure the app loads Tailwind.
Why: This matches your src/main.jsx setup.
File: src/main.jsx — add this import at the top (if it’s not already there):
import './index.css'

2.7 Create the exact folder structure (empty now; we’ll fill later)
What: Mirror your project’s folder, if not already there.
Why: Prevents path errors and matches your code organization.
From project root (macOS zsh or Bash):
mkdir -p src/components/layout src/components/sections src/components/ui src/data src/pages src/assets

From project root (Windows PowerShell):
mkdir src/components/layout, src/components/sections, src/components/ui, src/data, src/pages, src/assets

2.8 Connect to Remote GitHub Repo, Commit and Push
What: Create a remote repo and connect your GitHub account
Why: Store your code offline to allow you to transport your code after you’ve completed this class..
Where: Terminal
Commit Files to GitHub
Open your terminal in the project folder and run
Remove the existing git remote
git remote remove origin

Create a new repository on GitHub
Go to https://github.com
Click the "+" icon in the top right, then "New repository"
Name your repo (e.g., capstone), set visibility, and click "Create repository"

Add the GitHub repository as a remote
Copy the URL GitHub gives you (e.g., https://github.com/your-username/brainwave.git) and run:
git remote add origin https://github.com/username/repo_name

Add your GitHub credentials
git config --global user.name “your username”
git config --global user.email “you@example.com”

Push your code to GitHub
git branch -M main
git push -u origin main

Enter a commit message
The COMMIT_EDITMSG file appears when VS Code (or Git) needs you to enter a commit message. To finalize and push:
Type a short, descriptive commit message in the file (e.g. “edited Home.jsx to include a header and footer component”) and hit enter

Verify code is pushed to remote git

2.8 Quick sanity check (optional)
What: Confirm everything compiles.
Why: Baseline before we start adding your actual components and routes.
npm run dev

Open the printed local URL (usually http://localhost:5173). You should see the homepage screen (we’ll replace it in the next sections).

✅ Section 2 Checkpoint
Vite + React app created

Installed project dependencies

src/index.css contains @import "tailwindcss"; and is imported by src/main.jsx.

Folder structure under src/ matches the final project layout.

Remote github added and code pushed
Section 3 — Portfolio Website Build
Goal: Recreate the portfolio website

## Week 1: Foundation & Layout

### Class 1: Setup, Routing & Core UI Components

**What Students Will Build:**

1. `main.jsx` - Set up React Router with basic routing
2. `App.jsx` - Create layout shell with Outlet
3. `components/ui/Container.jsx` - Reusable container wrapper
4. `components/ui/Section.jsx` - Consistent page sections
5. `components/ui/Button.jsx` - Polymorphic button component with variants

**Concepts Taught:**

- React Router basics
- Component composition
- Props and prop spreading
- Reusable components
- Polymorphic components (as prop)

**Homework:** Read about React Router and component patterns

---

================================================================================

### Class 2: Navigation, Layout & Error Handling

**What Students Will Build:**

1. `components/layout/Navbar.jsx` - Desktop navigation (no mobile yet)
2. `components/layout/Footer.jsx` - Basic footer with links
3. `components/ui/ErrorBoundary.jsx` - Error boundary component for debugging
4. Update `App.jsx` - Add Navbar, Footer, wrap with ErrorBoundary
5. `components/ui/SEO.jsx` - SEO component for meta tags
6. `pages/Home.jsx` - Basic hero section only

**Concepts Taught:**

- Layout components
- Navigation patterns
- Error boundaries and error handling
- Debugging React applications
- SEO best practices
- Helmet/meta tags

**Homework:** Research portfolio design inspiration

---

## Week 2: Data-Driven Home Page

### Class 3: Tech Stack Section

**What Students Will Build:**

1. `data/techstack.js` - Sample tech stack data (placeholder icons/names)
2. `components/sections/TechStack.jsx` - Grid layout rendering tech icons
3. Update `pages/Home.jsx` - Add TechStack section

**Concepts Taught:**

- Separating data from presentation
- Array mapping with .map()
- Grid layouts with Tailwind
- Data-driven components

**Homework:** List their own tech stack for later customization

---

### Class 4: Projects Showcase

**What Students Will Build:**

1. `data/projects.js` - Sample project data (3-4 placeholder projects)
2. `components/ui/ProjectCard.jsx` - Reusable project card component
3. `components/sections/Projects.jsx` - Project grid section with cards
4. Update `pages/Home.jsx` - Add Projects section

**Concepts Taught:**

- Card components
- Props destructuring
- Responsive grids
- Hover effects and transitions

**Homework:** Gather screenshots/info about 3-4 of their own projects

---

## Week 3: Complete Home Page & Static Pages

### Class 5: Testimonials & CTA

**What Students Will Build:**

1. `data/testimonials.js` - Sample testimonial data
2. `components/ui/TestimonialCard.jsx` - Testimonial card component
3. `components/sections/Testimonials.jsx` - Testimonials grid
4. `components/sections/FinalCTA.jsx` - Call-to-action section
5. Complete `pages/Home.jsx` - Add Testimonials and CTA sections

**Concepts Taught:**

- More component patterns
- Consistent card design
- Call-to-action best practices
- Completing a full page

**Homework:** Home page is now complete - students review and understand all sections

---

### Class 6: Contact & Resume Pages

**What Students Will Build:**

1. `pages/Contact.jsx` - Contact form (frontend only, no backend)
2. `pages/Resume.jsx` - PDF viewer with iframe and download button
3. Add routes for Contact and Resume in `main.jsx`
4. Students add a sample PDF to public folder

**Concepts Taught:**

- Form handling in React
- Controlled vs uncontrolled inputs
- Embedding PDFs with iframe
- Static page patterns

**Homework:** Prepare their resume PDF and contact information

---

## Week 4: Portfolio Pages & Dynamic Routing

### Class 7: Portfolio List Page

**What Students Will Build:**

1. `pages/Portfolio.jsx` - Grid of all projects (reuse ProjectCard)
2. Add Portfolio route in `main.jsx`
3. `components/ui/Breadcrumb.jsx` - Breadcrumb navigation component

**Concepts Taught:**

- Page layout patterns
- Reusing components across pages
- Breadcrumb navigation
- User experience patterns

**Homework:** Research case study examples and project documentation

---

### Class 8: Dynamic Project Pages

**What Students Will Build:**

1. `pages/Project.jsx` - Individual project detail page with useParams()
2. Update `data/projects.js` - Add detailed fields (overview, highlights, role, tools, timeline, client)
3. Update `Project.jsx` - Display all project details dynamically
4. Add dynamic route `/portfolio/:slug` in `main.jsx`

**Concepts Taught:**

- Dynamic routing
- useParams() hook
- URL parameters
- Data relationships and linking
- Conditional rendering

**Homework:** Write detailed descriptions for their projects (overview, highlights, etc.)

---

## Week 5: About Page & Advanced Features

### Class 9: About Page - Part 1

**What Students Will Build:**

1. `data/about.js` - Complete data structure (bio, values, experience, education, interests, CTA)
2. `pages/About.jsx` - Build these sections:
   - Hero/Intro with bio
   - Values grid (4 core values)
   - Professional experience timeline

**Concepts Taught:**

- Complex data structures
- Timeline layouts
- Semantic HTML (article, header, time)
- Visual hierarchy

**Homework:** Write their bio, values, and experience history

---

### Class 10: About Page - Part 2 & Mobile Menu

**What Students Will Build:**

1. Complete `pages/About.jsx` - Build remaining sections:
   - Education & certifications grid
   - Interests section with images
   - CTA section with buttons
2. `components/layout/MobileMenu.jsx` - Mobile navigation menu
3. Update `components/layout/Navbar.jsx` - Add mobile menu toggle

**Concepts Taught:**

- Complex page layouts
- Image cards with overlays
- Mobile-first design
- State management (useState for menu toggle)
- Responsive navigation patterns

**Homework:** Gather interest photos and education details

---

## Week 6: Polish & Customization

### Class 11: Accessibility Audit & Improvements

**What Students Will Work On:**

1. Accessibility review and improvements:
   - Add ARIA labels where needed
   - Ensure semantic HTML throughout
   - Add focus states to interactive elements
   - Test keyboard navigation
   - Add sr-only classes for screen readers
   - Run Lighthouse accessibility audit
   - Fix any accessibility issues found

**Concepts Taught:**

- Accessibility (WCAG 2.1 Level AA)
- ARIA attributes
- Semantic HTML
- Keyboard navigation
- Screen reader support
- Focus management
- Color contrast requirements

**Homework:** Begin replacing placeholder content with their own

---

### Class 12: Customization Lab & Final Polish

**What Students Will Work On (Lab/Workshop Style):**

**Content Replacement:**

- Update `data/about.js` - Real bio, experience, education, interests
- Update `data/projects.js` - Real projects with detailed case studies
- Update `data/techstack.js` - Their actual tech skills
- Update `data/testimonials.js` - Real testimonials or remove section
- Add their resume PDF to public folder
- Add project images to assets or use hosted URLs

**Optional Styling:**

- Customize colors in `index.css`
- Adjust typography/spacing to preference
- Add personal branding touches

**Testing & Deployment:**

- Test all pages and navigation
- Mobile/responsive testing
- Cross-browser testing
- Deploy to Netlify/Vercel/GitHub Pages (quick demo)

**Concepts Taught:**

- Content strategy
- Portfolio best practices
- Deployment options
- Git workflow
- Performance optimization basics

**Final Deliverable:** Fully customized, deployed portfolio website

---
