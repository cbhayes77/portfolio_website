# Class 9: Creating the About Page Data Structure

**File:** `src/data/about.js`
**Type:** Data File
**Purpose:** Centralize all About page content in a structured format

---

## Why Create a Data File for About Content?

You might think: "Why not just write the content directly in the About page component?"

**Here's why a data file is better:**

1. **Separation of Concerns**
   - Content (data) separate from structure (UI)
   - Easier to update text without touching component code
   - Content team can edit without knowing React

2. **Reusability**
   - Same data could power multiple views (full page, summary card, etc.)
   - Could export data for other uses (resume generation, PDF, etc.)

3. **Organization**
   - All About content in one place
   - Easy to review and update
   - Clear structure for planning

4. **Consistency**
   - Follows the pattern from projects.js, techstack.js, testimonials.js
   - Students learn a repeatable approach

---

## The Complete Data Structure

The About page has **6 main sections**, each with its own data structure:

```javascript
export const aboutData = {
  bio: {...},           // 1. Biographical paragraphs
  values: [...],        // 2. Core values/principles (4 cards)
  experience: [...],    // 3. Work history (timeline)
  education: [...],     // 4. Education/certifications (grid)
  interests: [...],     // 5. Personal interests (image cards)
  cta: {...}           // 6. Call-to-action section
};
```

**In Class 9**, we'll create ALL the data, but only build UI for the first 3 sections (bio, values, experience).

**In Class 10**, we'll build UI for the remaining sections (education, interests, CTA).

**Why create all the data now?**

- See the full picture before building
- Plan content structure upfront
- Have everything ready for Class 10
- Practice thinking ahead (good development habit)

---

## Building the Data File

**📁 Create file:** `src/data/about.js`

Let's build this step by step, section by section.

### STAGE 1: File Setup and Bio Object

The bio object contains your professional story in 4 paragraphs.

```javascript
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
```

**What's happening:**

1. **`export const aboutData = {`**
   - Creates a named export called `aboutData`
   - Object containing all About page content
   - Can be imported in other files

2. **`bio: {`**
   - First property of aboutData
   - Contains 4 string properties

3. **Bio Structure:**
   - `intro` - Who you are and what you do (opening paragraph)
   - `background` - How you got here (your journey)
   - `current` - What you're doing now (present focus)
   - `personal` - Personal interests (humanizing paragraph)

**Content Guidelines:**

**Intro paragraph:**

- Start with "I'm a [your role]"
- State what you're passionate about
- Mention your approach or unique angle
- 3-4 sentences

**Background paragraph:**

- How you got into UX/development
- Key formative experiences
- Journey to your current path
- 3-4 sentences

**Current paragraph:**

- What you're working on now
- Technologies or areas of focus
- Future direction or interests
- 3-4 sentences

**Personal paragraph:**

- Hobbies or interests outside work
- Humanizing details (coffee, hiking, photography, etc.)
- Your philosophy or balance
- 2-3 sentences

---

### STAGE 2: Values Array

Add the values array with 4 core principles that guide your work.

```javascript
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
```

**What's happening:**

1. **`values: [`**
   - Array of value objects
   - Each value is a separate object in the array

2. **Value Object Structure:**
   - `id` - Unique identifier (for React keys)
   - `title` - Short principle name (2-4 words)
   - `description` - Explanation of the value (2-3 sentences)
   - `icon` - Emoji representing the value

3. **Why 4 values?**
   - Creates a nice 2x2 grid layout
   - Not too many (overwhelming), not too few
   - Industry standard for "core principles"

**Choosing Your Values:**

**Good value examples:**

- User-Centered Design
- Performance & Optimization
- Accessibility First
- Mobile-First Approach
- Data-Driven Decisions
- Collaborative Teamwork
- Attention to Detail
- Continuous Learning
- Design Systems Thinking
- Agile Methodology

**For each value:**

- **Title**: Clear, specific (avoid vague terms like "Excellence")
- **Description**: WHY it matters, HOW you practice it
- **Icon**: Emoji that visually represents the concept

**Icon suggestions:**

- User focus: 👤, 👥, 🎯
- Code quality: 💻, ⚙️, 🔧
- Accessibility: ♿, 🌐, 👁️
- Learning: 📚, 🎓, 🧠
- Design: 🎨, ✨, 🖌️
- Speed: ⚡, 🚀, 📈

---

### STAGE 3: Experience Array

Add your professional work history as a timeline.

```javascript
export const aboutData = {
  bio: {
    // ... bio content
  },

  values: [
    // ... values array
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
};
```

**What's happening:**

1. **`experience: [`**
   - Array of job objects
   - Listed in reverse chronological order (most recent first)

2. **Job Object Structure:**
   - `id` - Unique identifier
   - `company` - Company or organization name
   - `role` - Your job title
   - `duration` - Time period (use "Present" for current job)
   - `description` - 1-2 sentence overview of the role
   - `achievements` - Array of accomplishments (optional)

3. **Achievements (optional)**
   - Array of strings
   - 3-5 bullet points per job
   - Focus on measurable impact

**Writing Experience Entries:**

**For each job:**

**Company:**

- Full company name or generic type ("Tech Startup", "Creative Agency")
- Can be vague for privacy (NDAs, etc.)

**Role:**

- Your actual job title
- Can combine roles ("Frontend Developer & UX Designer")
- Be specific, not generic

**Duration:**

- Format: "Year - Year" or "Year - Present"
- Can be more specific: "Jan 2023 - Present"
- Keep consistent format across all entries

**Description:**

- 1-2 sentences summarizing the role
- What did you do day-to-day?
- What was the scope/focus?

**Achievements:**

- Start with action verbs (Redesigned, Built, Led, Implemented, etc.)
- Include numbers when possible (45% increase, 10+ projects, etc.)
- Focus on YOUR contributions (not team accomplishments)
- Be specific and concrete

**Examples of good achievements:**

- "Redesigned checkout flow, reducing cart abandonment by 25%"
- "Built component library used across 8 product teams"
- "Mentored 3 junior developers in React best practices"
- "Improved page load times by 60% through performance optimization"

---

### STAGE 4: Education Array

Add your educational background and certifications.

```javascript
export const aboutData = {
  bio: {
    // ... bio content
  },

  values: [
    // ... values array
  ],

  experience: [
    // ... experience array
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
};
```

**What's happening:**

1. **`education: [`**
   - Array of education/certification objects
   - Mix of degrees and professional certificates

2. **Education Object Structure:**
   - `id` - Unique identifier
   - `degree` - Degree name or certification title
   - `institution` - School or platform name
   - `year` - Graduation or completion year
   - `details` - Additional context (focus area, specialization, etc.)

**What to Include:**

**Formal degrees:**

- Bachelor's, Master's, PhD
- Associate degrees
- Bootcamp programs

**Professional certifications:**

- Google UX Design Certificate
- AWS Certifications
- Microsoft Certifications
- Industry-specific certs

**Online courses/certificates:**

- Coursera, Udemy, edX courses
- freeCodeCamp certifications
- LinkedIn Learning paths

**Tips:**

- Most recent or most relevant first
- Mix of formal and self-directed learning shows initiative
- Include ongoing education (currently enrolled)
- Can add expected graduation: `year: "2024 (Expected)"`

---

### STAGE 5: Interests Array

Add personal interests to show personality and humanize your profile.

```javascript
export const aboutData = {
  bio: {
    // ... bio content
  },

  values: [
    // ... values array
  ],

  experience: [
    // ... experience array
  ],

  education: [
    // ... education array
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
};
```

**What's happening:**

1. **`interests: [`**
   - Array of personal interest objects
   - Shows personality beyond work

2. **Interest Object Structure:**
   - `id` - Unique identifier
   - `name` - Interest or hobby name
   - `description` - Brief explanation
   - `icon` - Emoji representation
   - `image` - URL to representative photo

3. **Unsplash Images**
   - Free stock photos from Unsplash
   - URL pattern: `https://images.unsplash.com/photo-[id]?w=400&h=300&fit=crop`
   - `w=400&h=300&fit=crop` ensures consistent size

**Choosing Interests:**

**Good interest examples:**

- Tech-related: Open source, side projects, tech meetups, podcasts
- Creative: Photography, design, music, writing
- Active: Hiking, cycling, sports, yoga
- Cultural: Travel, cooking, languages, reading
- Craft: Coffee, gardening, woodworking

**Why include interests?**

- Shows you're a well-rounded person
- Creates connection points with potential employers/clients
- Demonstrates work-life balance
- Makes you memorable

**Finding Images:**

**Option 1: Use Unsplash URLs (placeholder)**

- Go to https://unsplash.com
- Search for your interest (e.g., "hiking")
- Copy photo ID from URL
- Use format: `https://images.unsplash.com/photo-[ID]?w=400&h=300&fit=crop`

**Option 2: Use your own photos**

- Take or find personal photos
- Add to `public/` folder
- Reference as `"/your-photo.jpg"`

**Option 3: Placeholder service**

- Use `https://picsum.photos/400/300?random=1` pattern
- Change number for different random images

---

### STAGE 6: CTA Object (Final Section)

Add a call-to-action to encourage visitors to connect with you.

**📁 Complete file:** `src/data/about.js`

```javascript
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
```

**What's happening:**

1. **`cta: {`**
   - Call-to-action object (not an array!)
   - Encourages visitors to take next step

2. **CTA Object Structure:**
   - `heading` - Invitation or prompt
   - `description` - Context or explanation
   - `primaryAction` - Main button (usually "Contact" or similar)
   - `secondaryAction` - Alternative action (usually "View Work")

3. **Action Objects:**
   - `text` - Button label
   - `href` - Where button links to

**Writing Effective CTAs:**

**Heading options:**

- "Let's Work Together"
- "Ready to Collaborate?"
- "Get in Touch"
- "Start a Conversation"

**Description:**

- What you're open to (jobs, projects, consulting, networking)
- Tone (friendly but professional)
- Invitation to connect

**Primary action** (most important):

- "Get in Touch" → `/contact`
- "Hire Me" → `/contact`
- "Start a Project" → `/contact`

**Secondary action** (alternative):

- "View My Work" → `/portfolio`
- "Download Resume" → `/resume`
- "See My Projects" → `/portfolio`

---

## Data Structure Summary

Here's what you've created:

```javascript
aboutData = {
  bio: {
    intro: string,
    background: string,
    current: string,
    personal: string,
  },
  values: [
    { id, title, description, icon },
    // ... 3 more
  ],
  experience: [
    { id, company, role, duration, description, achievements: [] },
    // ... more jobs
  ],
  education: [
    { id, degree, institution, year, details },
    // ... more education
  ],
  interests: [
    { id, name, description, icon, image },
    // ... more interests
  ],
  cta: {
    heading,
    description,
    primaryAction: { text, href },
    secondaryAction: { text, href },
  },
};
```

**Total fields:** 6 main sections, ~15-20 individual data items

---

## Verifying Your Data

After creating the file:

1. **Save the file** (Cmd+S / Ctrl+S)
2. **Check for errors** in terminal (no red messages)
3. **Verify structure**:
   - All strings in quotes
   - Arrays use square brackets `[]`
   - Objects use curly braces `{}`
   - Commas between items
   - Closing braces/brackets match opening ones

**Note:** You won't see this data displayed yet! We'll build the UI components in the next guide.

---

## What You've Learned

✅ **Complex Data Structures:**

- Nested objects (bio object within aboutData)
- Arrays of objects (values, experience, etc.)
- Mixed data types (strings, arrays, objects)
- Organizing large amounts of content

✅ **Data Planning:**

- Thinking through content structure before building UI
- Separating data from presentation
- Creating flexible, reusable data formats

✅ **Content Strategy:**

- Professional storytelling structure
- Biographical narrative arc
- Balancing professional and personal
- Creating clear calls-to-action

✅ **JavaScript Concepts:**

- Object literals
- Array structures
- String properties
- Exporting data

---

## Homework: Customize with Your Content

**Now that you understand the structure, replace the placeholder content with YOUR real information!**

### For Bio:

- Write your actual introduction
- Tell your real journey story
- Describe your current focus
- Share genuine personal interests

### For Values:

- Identify 4 principles that truly guide your work
- Write authentic descriptions (not generic)
- Choose icons that represent YOU

### For Experience:

- List your actual jobs/projects
- Use real durations and roles
- Write specific achievements with real metrics
- Be honest about your level (it's okay to be early career!)

### For Education:

- Add your real degrees/certifications
- Include online courses you've completed
- Show ongoing learning

### For Interests:

- Share real hobbies
- Find or take photos that represent your interests
- Be genuine - employers value authenticity

### For CTA:

- Customize the message to your goals
- Make it personal and inviting

**Tips:**

- Write in first person ("I'm..." not "They are...")
- Be specific, not generic
- Show personality
- Be authentic
- Proofread for grammar and spelling

---

## Troubleshooting

### Issue: Syntax error in data file

**Problem:** Red underlines or terminal errors

**Solution:**

- Check all strings are in quotes: `"text here"`
- Check all arrays have brackets: `[item1, item2]`
- Check all objects have braces: `{ key: value }`
- Check commas between items (but not after last item)
- Use a JSON validator if stuck

**Common mistakes:**

```javascript
// ❌ Missing comma
values: [
  { id: 1, title: "Value 1" }
  { id: 2, title: "Value 2" }  // Error!
]

// ✅ Correct
values: [
  { id: 1, title: "Value 1" },
  { id: 2, title: "Value 2" }
]

// ❌ Trailing comma after last item (some linters flag this)
interests: [
  { id: 1, name: "Hobby" },
]  // Comma before ] can cause issues

// ✅ Correct
interests: [
  { id: 1, name: "Hobby" }
]  // No comma before ]
```

---

### Issue: Don't know what to write

**Problem:** Stuck on content, using generic placeholder text

**Solution:**
Use these templates:

**Bio intro template:**

```
"I'm a [role] passionate about [what you care about]. With [background/skills], I [what you do or your approach]."
```

**Value description template:**

```
"[Why it matters]. I [how you practice it], [result or goal]."
```

**Achievement template:**

```
"[Action verb] [what you did], [resulting in/achieving] [specific outcome with metric if possible]"
```

---

### Issue: Images not loading

**Problem:** Interest images show broken image icon

**Solution:**

- Check URL is complete and valid
- Unsplash URLs should start with `https://images.unsplash.com/`
- Try opening URL in browser to verify it works
- For now, placeholder images are fine - you can update later

---

### Issue: Too much or too little content

**Problem:** Bio paragraphs are too long/short

**Solution:**

- **Bio paragraphs**: 3-4 sentences each
- **Value descriptions**: 2-3 sentences
- **Experience description**: 1-2 sentences
- **Achievements**: 3-5 per job
- **Quality over quantity**: Concise, impactful content is better

---

**Excellent work!** You've created a comprehensive data structure for your About page. Move on to the next guide to start building the UI! 🎉
