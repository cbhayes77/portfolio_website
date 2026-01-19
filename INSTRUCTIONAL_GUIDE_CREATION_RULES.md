================================================================================
GUIDE CREATION INSTRUCTIONS
================================================================================

Date: January 14, 2026
Last Updated: January 16, 2026

## PURPOSE:

To create a guide for AI tools to follow when creating instructional materials
for the capstone class that builds this website from a shell. This ensures
consistency, pedagogical effectiveness, and eliminates wasteful teaching patterns.

================================================================================
HOW TO USE THIS GUIDE (FOR INSTRUCTORS AND AI ASSISTANTS)
================================================================================

## FOR INSTRUCTORS: HOW TO PROMPT AI TO CREATE NEW GUIDES

When you want to create a new instructional guide, use this prompt format:

**TEMPLATE PROMPT:**

```
Create a new instructional guide for [COMPONENT_NAME].jsx following the
INSTRUCTIONAL_GUIDE_CREATION_RULES.md guidelines.

Component details:
- File location: src/[path]/[ComponentName].jsx
- Class number: [1, 2, 3, etc.]
- Type: [UI component / Layout component / Page component / Data file]
- Difficulty: [Simple / Moderate / Complex]

Key features to teach:
- [Feature 1]
- [Feature 2]
- [Feature 3]

Prerequisites (components students should have built already):
- [Component 1]
- [Component 2]

[Optional: Paste the actual component code or provide step-by-step content]

Follow these priorities:
1. Read INSTRUCTIONAL_GUIDE_CREATION_RULES.md completely
2. Read the actual component file from the codebase
3. Verify final code matches codebase exactly
4. Use the 5-phase creation process (Research → Planning → Writing → Completion → Validation)
5. Run through the Quality Checklist before finishing
```

**EXAMPLE PROMPT:**

```
Create a new instructional guide for ProjectCard.jsx following the
INSTRUCTIONAL_GUIDE_CREATION_RULES.md guidelines.

Component details:
- File location: src/components/ui/ProjectCard.jsx
- Class number: 2
- Type: UI component
- Difficulty: Moderate

Key features to teach:
- Props (title, description, image, tags, link)
- Image handling with alt text
- Tag mapping and display
- Link with target="_blank" and rel attributes

Prerequisites (components students should have built already):
- Button.jsx (Class 1)
- Container.jsx (Class 1)

Follow the 5-phase creation process and quality checklist.
```

## HOW TO VERIFY AI READ THE COMPLETE GUIDE

### RED FLAGS THAT AI ONLY SAMPLED THE DOCUMENT:

❌ **AI starts creating immediately without verification statement**
❌ **AI doesn't mention total line count of rules document**
❌ **AI doesn't list major sections it reviewed**
❌ **Created guide is missing required sections** (listed in Quality Checklist)
❌ **Guide doesn't follow exact formatting standards** (header format, step numbering)
❌ **AI doesn't mention the document's last updated date**
❌ **Guide creation takes less than 2 minutes** (indicates rushing/skipping)

### GREEN FLAGS THAT AI READ COMPLETELY:

✅ **AI outputs verification statement with line count**
✅ **AI lists major sections reviewed from the document**
✅ **AI mentions last updated date from the rules**
✅ **AI asks clarifying questions based on rules content**
✅ **Created guide includes ALL required sections**
✅ **Guide follows exact formatting conventions**
✅ **AI references specific rules during creation** (e.g., "Following the polymorphic pattern guideline...")

### ENFORCEMENT PROMPT:

If you suspect AI didn't read completely, use this prompt:

```
STOP. Before creating the guide, I need you to:

1. Read INSTRUCTIONAL_GUIDE_CREATION_RULES.md completely (ALL lines)
2. Output the verification statement showing:
   - Total line count you read
   - List of major sections reviewed
   - Last updated date
3. Only then proceed with guide creation

Do NOT create the guide until you've provided this verification.
```

### AUDIT QUESTIONS TO ASK:

Ask the AI these questions to verify it read the complete document:

1. "What's the total line count of INSTRUCTIONAL_GUIDE_CREATION_RULES.md?"
2. "What are the 5 phases in the guide creation process?"
3. "What sections are required at the end of every guide?"
4. "What's the file naming convention for guides?"
5. "What are 3 wasteful patterns that must be avoided?"
6. "What's the format for evolution notes?"

If AI can't answer these from the rules, it didn't read completely.

## FOR AI ASSISTANTS: MANDATORY READING VERIFICATION PROTOCOL

**⚠️ CRITICAL: You MUST read the ENTIRE rules document before creating any guide.**

### HOW TO ENSURE COMPLETE READING:

When asked to create a guide, you MUST:

1. **Read the ENTIRE INSTRUCTIONAL_GUIDE_CREATION_RULES.md file**

   - Use read_file with line ranges that cover ALL lines (e.g., 1-500, 501-1000, 1001-end)
   - Do NOT use sampling or skip sections
   - Read sequentially to understand full context

2. **BEFORE creating any guide, output a verification statement:**

   ```
   ✓ VERIFICATION COMPLETE:
   - Read INSTRUCTIONAL_GUIDE_CREATION_RULES.md: Lines 1-[total] ([total] lines)
   - Key sections reviewed:
     * File Naming Conventions
     * Header Format Requirements
     * Step Numbering Standards
     * Pedagogical Guidelines
     * Quality Checklist
     * [List other major sections]
   - Document last updated: [date from file]
   - Ready to create guide following all standards
   ```

3. **If you cannot verify complete reading, STATE THIS:**
   ```
   ⚠️ INCOMPLETE READ:
   I've only read lines [X-Y]. I need to read the complete document.
   Reading remaining sections now...
   ```

### READING STRATEGY FOR LARGE DOCUMENTS:

For documents over 200 lines:

```
Step 1: read_file(1, 200)
Step 2: read_file(201, 400)
Step 3: read_file(401, 600)
[Continue until complete]
Step N: Confirm total line count matches sum of reads
```

**DO NOT:**

- Read only the beginning and end
- Sample random sections
- Assume you know the content
- Skip sections thinking they're repetitive

## FOR AI ASSISTANTS: WORKFLOW WHEN CREATING GUIDES

When you receive a request to create an instructional guide:

### PHASE 0: COMPLETE DOCUMENT READING (MANDATORY)

1. **Read INSTRUCTIONAL_GUIDE_CREATION_RULES.md in its entirety**
   - Use multiple read_file calls if needed to cover all lines
   - Note the total line count
   - Review all major sections
2. **Output verification statement** (see format above)
3. **Only proceed after verification is complete**

### PHASE 1: ACKNOWLEDGE AND CONFIRM

1. Confirm you've read INSTRUCTIONAL_GUIDE_CREATION_RULES.md (with line count)
2. State which component you'll be creating a guide for
3. Confirm the class number and component type
4. Ask for any missing information (if needed)

### PHASE 2: RESEARCH

1. Read the actual component file from src/ (complete file, not sampling)
2. Note all imports, props, features, patterns
3. Check component dependencies
4. Review similar existing guides for tone/format
5. Report findings to instructor

### PHASE 3: CREATE THE GUIDE

1. Follow the exact formatting standards from this document
2. Use the step-by-step creation process
3. Ensure no wasteful patterns are present
4. Verify codebase alignment throughout

### PHASE 4: VALIDATE

1. Run through the Quality Checklist
2. Verify final code matches codebase
3. Check for consistent formatting
4. Confirm all required sections are present

### PHASE 5: DELIVER

1. Use create_file to generate the guide
2. Summarize what was created
3. Note any simplifications or evolution notes added
4. Highlight any potential issues or questions
5. **Include verification that rules were followed**

## SHORTHAND PROMPTS FOR QUICK GUIDE CREATION

Once you're familiar with the system, you can use shorter prompts:

**Quick Format:**

```
Create CLASS_[N]_[COMPONENT].md guide following the rules.
[Paste component content or Google Doc text]
```

**Example:**

```
Create CLASS_2_FOOTER.md guide following the rules.

[Paste the step-by-step content from Google Docs]
```

The AI should automatically:

- Read INSTRUCTIONAL_GUIDE_CREATION_RULES.md
- Read the actual component from codebase
- Follow all formatting standards
- Include all required sections
- Run validation checks

## WHEN TO MANUALLY REVIEW GUIDES

After AI creates a guide, you should review if:

- Component is complex (Button-level complexity)
- New patterns are being introduced
- Simplified version needs evolution notes
- Prerequisites might be unclear
- Component has accessibility considerations

Quick guides (Container, Section) typically need less review.

## UPDATING EXISTING GUIDES

**Prompt format for updates:**

```
Update CLASS_[N]_[COMPONENT].md to [describe change].

Changes needed:
- [Change 1]
- [Change 2]

Ensure:
- Add changelog entry at top
- Preserve pedagogical flow
- Maintain codebase alignment
- Update "CURRENT CODE SHOULD LOOK LIKE" sections
```

================================================================================
TYPES OF INSTRUCTIONAL PATTERNS THAT ARE ACCEPTABLE
================================================================================

## ✅ **ACCEPTABLE** - These are normal teaching patterns:

1. **Replacing comments with code**
   Example: {/_ Navbar will go here _/} → <Navbar />
   Why: Progressive disclosure, students understand structure first

2. **Adding to existing code incrementally**
   Example: Add Container, then add content inside Container
   Why: Teaching step-by-step, building understanding

3. **Personalizing placeholder text**
   Example: "Your Name" → "Sarah Chen"
   Why: Customization, not rebuilding

4. **Adding imports before using components**
   Example: Import Button, then use <Button>
   Why: Proper JavaScript requires imports first

5. **Building outer structure before inner content**
   Example: Create <footer>, then add <Container>, then add content
   Why: Teaches containment and nesting

## ❌ **NOT ACCEPTABLE** - These are wasteful patterns:

1. **Switching component types after building**
   Example: Build with <Link> → Replace all with <NavLink>
   Why: Wastes time, teaches wrong pattern first

2. **Importing a library then switching to another**
   Example: Import react-helmet → Remove and use native approach
   Why: Confusing, wastes time installing/uninstalling

3. **Adding props then removing them**
   Example: Add onClick → Remove for href approach
   Why: Indicates unclear teaching plan

4. **Building with one pattern then refactoring to another**
   Example: Hardcode links → Replace with array.map()
   Why: Unless this is the explicit lesson (refactoring), teach correct pattern first

5. **Changing styling approach mid-lesson**
   Example: Use inline styles → Replace with Tailwind classes
   Why: Confusing, should use project's chosen approach from start

================================================================================
PATTERN: REPLACING COMMENTS IS GOOD
================================================================================

This is a TEACHING pattern, not wasteful repetition:

## STEP 1: Show structure with comments

<Container className="flex h-16 items-center">
  {/* Logo will go here */}
  {/* Nav links will go here */}
  {/* Contact button will go here */}
</Container>

Why this works:

- Students see the overall structure
- Understand what's coming
- Mental model of layout before details

## STEP 2: Replace comments with actual code

<Container className="flex h-16 items-center">
  <div className="flex-1 flex justify-start">
    <a href="/">Logo</a>
  </div>
  {/* Nav links will go here */}
  {/* Contact button will go here */}
</Container>

Why this works:

- Focus on one section at a time
- Less overwhelming
- Can test incrementally

This is PROGRESSIVE DISCLOSURE, not wasteful repetition.

================================================================================
GUIDE FORMATTING STANDARDS
================================================================================

All instructional guides must follow these EXACT formatting conventions:

## 1. FILE NAMING CONVENTION

**Pattern:** CLASS*[NUMBER]*[COMPONENT_NAME].md

Examples:

- CLASS_1_BUTTON.md
- CLASS_1_SECTION.md
- CLASS_2_NAVBAR.md
- CLASS_2_FOOTER.md

Rules:

- ALL CAPS for class number and component name
- Underscores between words
- .md extension
- Component name matches the actual .jsx filename (without extension)

## 2. HEADER FORMAT (REQUIRED)

Every guide must start with this exact structure:

```
================================================================================
CLASS [N]: [COMPONENT].JSX STEP-BY-STEP GUIDE - [SUBTITLE]
================================================================================

OVERVIEW FOR INSTRUCTOR
-----------------------
[Brief description of what this guide teaches]

Students should create a new file: [exact file path]

NOTE: [Any prerequisites or folder requirements]

CONCEPTS TAUGHT:
- [Concept 1]
- [Concept 2]
- [Concept 3]

[If applicable: WHAT WE'RE BUILDING IN CLASS X:]
- [Feature 1]
- [Feature 2]

[If applicable: WHAT WE'LL ADD LATER:]
- [Future enhancement 1]
- [Future enhancement 2]
```

## 3. STEP NUMBERING FORMAT

Use consistent step numbering throughout:

**For simple guides:**

```
================================================================================
STEP 1: [STEP TITLE IN CAPS]
================================================================================
```

**For complex guides with stages:**

```
================================================================================
STAGE 1: [STAGE TITLE IN CAPS]
================================================================================

## STEP 1.1: [SUBSTEP TITLE]

## STEP 1.2: [SUBSTEP TITLE]
```

## 4. INSTRUCTOR DIALOGUE FORMAT

Each step must include instructor guidance:

```
INSTRUCTOR SAYS:
"[Natural, conversational explanation of what we're doing and why]"

STUDENTS TYPE:
--------------
[Exact code to type]

EXPLAIN:
--------
- [Point 1 with technical detail]
- [Point 2 with technical detail]
- [Point 3 with technical detail]

CURRENT CODE SHOULD LOOK LIKE:
-------------------------------
[Complete code as it should appear after this step]
```

**Important:** Use "STUDENTS TYPE:", "STUDENTS ADD:", or "STUDENTS MODIFY:"
depending on the action.

## 5. INTERACTIVE ELEMENTS

Include these pedagogical elements where appropriate:

**Ask Questions:**

```
ASK STUDENTS:
"[Question that checks understanding]?"
(Answer: [Expected answer])
```

**Demonstrations:**

```
DEMONSTRATE:
1. [Step-by-step demo action]
2. [What to show in browser/DevTools]
3. [What students should observe]
```

**Common Mistakes:**

```
COMMON MISTAKE:
Students might [describe error].
Fix: [How to correct it]
```

## 6. CODE BLOCK FORMATTING

**DO:**

- Use proper indentation (2 spaces)
- Show complete, runnable code in "CURRENT CODE SHOULD LOOK LIKE" sections
- Include all necessary imports
- Use actual prop names and values from the codebase

**DON'T:**

- Use ellipsis (...) or "// rest of code" in student-facing code
- Show incomplete code that won't run
- Include comments that won't be in final codebase (unless teaching comments)

## 7. ENDING FORMAT

Every guide must end with these sections (in order):

```
================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ [Achievement 1]
✓ [Achievement 2]
✓ [Achievement 3]

================================================================================
KEY CONCEPTS COVERED
================================================================================

- [Concept 1]
- [Concept 2]
- [Concept 3]

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "[Anticipated question]"
A: [Clear, concise answer]

Q: "[Another question]"
A: [Clear, concise answer]

================================================================================
WHAT'S NEXT
================================================================================

[Description of what will be built next or how this component will be enhanced]

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "[Common error message]"
- [Fix step 1]
- [Fix step 2]

[ISSUE DESCRIPTION]:
- [Fix step 1]
- [Fix step 2]

================================================================================
TESTING CHECKLIST FOR STUDENTS
================================================================================

Before moving on, verify:
□ [Checkpoint 1]
□ [Checkpoint 2]
□ [Checkpoint 3]

================================================================================
END OF [COMPONENT].JSX GUIDE (CLASS [N] - [VERSION])
================================================================================
```

================================================================================
PEDAGOGICAL GUIDELINES
================================================================================

## 1. PROGRESSIVE DISCLOSURE PRINCIPLE

**Always build from outside-in and simple-to-complex:**

✅ CORRECT:

1. Create component shell
2. Add basic props
3. Add return structure
4. Add outer container
5. Add inner content
6. Add interactivity
7. Add advanced features

❌ INCORRECT:

- Building complete complex version then explaining
- Adding everything at once
- Explaining advanced concepts before basics

## 2. EXPLAIN BEFORE IMPLEMENTING

**Every step must answer:**

- WHAT are we doing?
- WHY are we doing it?
- HOW does it work?

**Example:**

```
INSTRUCTOR SAYS:
"We need NavLink instead of Link because we want to highlight the active
page. NavLink automatically adds a class when the route matches."

STUDENTS TYPE:
import { NavLink } from "react-router-dom";
```

## 3. BUILD ANTICIPATION WITH COMMENTS

Use comments to show structure before implementation:

```
return (
  <div>
    {/* Hero section will go here */}
    {/* Projects section will go here */}
    {/* Contact section will go here */}
  </div>
);
```

Then replace incrementally in later steps.

## 4. SHOW INCREMENTAL PROGRESS

After meaningful steps, students should be able to:

- Save the file
- See something in the browser
- Verify it works
- Feel accomplishment

**Include testing moments:**

```
INSTRUCTOR SAYS:
"Let's save and test! You should now see [expected result]."
```

## 5. USE REALISTIC PLACEHOLDER CONTENT

**DO:**

- "Your Name" (students can personalize)
- "I'm a developer..." (realistic description)
- Actual project types (Portfolio, E-commerce, etc.)

**DON'T:**

- "Lorem ipsum..."
- "Test test test"
- Nonsensical placeholder text

## 6. TEACH ONE CONCEPT AT A TIME

**Example - Teaching polymorphic components:**

Step 1: Introduce the "as" prop concept
Step 2: Show default behavior (as="section")
Step 3: Show override (as="div")
Step 4: Explain use cases

Don't combine with teaching props, styling, and composition in same step.

================================================================================
EVOLUTION NOTES - WHEN TO SIMPLIFY FOR PEDAGOGY
================================================================================

## WHEN TO BUILD SIMPLIFIED VERSIONS FIRST:

✅ **Appropriate simplifications:**

1. **Desktop-only before responsive**

   - CLASS 2: Desktop Navbar
   - CLASS 10: Add mobile menu
   - Why: Teaches layout fundamentals without state management complexity

2. **Static before dynamic**

   - CLASS 1: Hardcoded links
   - CLASS 5: Data-driven from array
   - Why: Teaches JSX before data patterns

3. **Basic styling before advanced**

   - CLASS 1: Single variant
   - CLASS 3: Multiple variants
   - Why: Teaches Tailwind before complex composition

4. **Single instance before reusable patterns**
   - CLASS 2: One project card
   - CLASS 4: Map over projects array
   - Why: Teaches component structure before iteration

## REQUIRED EVOLUTION NOTE FORMAT:

When creating a simplified version, MUST include:

```
⚠️ EVOLUTION NOTE:
This [simple/desktop-only/static] version is fully functional and teaches
correct patterns. In later classes (Class X), we'll enhance it with:
- [Enhancement 1]
- [Enhancement 2]
- [Enhancement 3]

We start simple to teach [fundamental concept], then add complexity progressively.
```

## WHAT SHOULD NEVER BE SIMPLIFIED:

❌ **Never teach incorrect patterns:**

- Using Link when NavLink is needed
- Using wrong HTML semantics (div instead of nav)
- Using deprecated approaches
- Using anti-patterns that must be unlearned

================================================================================
CODEBASE ALIGNMENT RULES
================================================================================

## 1. FINAL CODE MUST MATCH ACTUAL CODEBASE

**Before creating any guide:**

1. Read the actual component file in src/
2. Note all props, imports, and patterns used
3. Ensure teaching progression ends at that exact code
4. Verify class names match
5. Verify import paths match

## 2. COMPONENT DEPENDENCIES

**Always check and document:**

- What components does this import?
- Have those components been built in previous classes?
- If not, note this in prerequisites

**Example:**

```
NOTE: This guide assumes students have already built:
- Container.jsx (Class 1)
- Button.jsx (Class 1)
- Section.jsx (Class 1)
```

## 3. TAILWIND CLASSES

**Use actual classes from codebase:**

- Don't invent classes
- Don't use deprecated Tailwind syntax
- Match exact spacing, colors, sizes
- Reference index.css custom classes correctly

## 4. IMPORT PATHS

**Always use exact paths:**

```
✅ CORRECT:
import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

❌ INCORRECT:
import Container from "../ui/Container";
import Container from "./Container.jsx";
```

================================================================================
LANGUAGE AND TONE GUIDELINES
================================================================================

## 1. INSTRUCTOR DIALOGUE

**Should be:**

- Conversational but professional
- Encouraging and supportive
- Clear and concise
- Anticipating confusion

**Examples:**
✅ "Let's start with the structure. Every component is just a function that
returns JSX."

✅ "Notice how we're using NavLink instead of Link here. That's important
because we want to highlight the active page."

❌ "Now you will create a function component using modern React paradigms."

❌ "This is easy, just add the code."

## 2. EXPLANATIONS

**Keep explanations:**

- Brief (1-3 sentences)
- Focused on WHY not just WHAT
- Technically accurate
- Beginner-friendly

**Example:**

```
EXPLAIN:
- className = "" - Default to empty string (allows customization)
- children - The content to wrap (anything between <Section></Section>)
- as = "section" - Default HTML element (can be changed for semantics)
```

## 3. AVOID JARGON (OR EXPLAIN IT)

**First use of technical terms:**

```
✅ "We'll use destructuring - a JavaScript feature that unpacks values from
objects. The syntax { className, children } pulls those properties out."

❌ "Destructure the props."
```

================================================================================
TESTING AND VALIDATION SECTIONS
================================================================================

## 1. TESTING CHECKPOINTS

Every guide should include at least one "Test the [Component]" section:

```
================================================================================
STEP X: TEST THE [COMPONENT]
================================================================================

INSTRUCTOR SAYS:
"Let's save and test! Make sure your dev server is running."

IN TERMINAL (IF NOT RUNNING):
------------------------------
npm run dev

WHAT STUDENTS SHOULD SEE:
--------------------------
- [Expected visual result 1]
- [Expected visual result 2]
- [Expected behavior 1]

DEMONSTRATE:
------------
1. [Action to take in browser]
2. [Where to look / what to inspect]
3. [What should happen]
```

## 2. TROUBLESHOOTING FORMAT

**Be specific about errors:**

```
ERROR: "Cannot find module '../components/ui/Section.jsx'"
FIX:
- Check that Section.jsx exists in src/components/ui/
- Verify the import path uses ../ to go up one level
- Ensure the file extension .jsx is included

SYMPTOM: Component appears but has no styling
FIX:
- Verify index.css is imported in main.jsx
- Check that className props are being applied
- Inspect element in DevTools to see if classes are present
```

## 3. TESTING CHECKLIST

**Make it actionable:**

```
Before moving on, verify:
□ File saved without errors (check VS Code for red underlines)
□ No errors in terminal where dev server runs
□ No errors in browser console (F12 → Console tab)
□ Component renders on page
□ Expected styling is applied
□ Component is responsive (test mobile width)
```

================================================================================
PATTERN: WHEN CREATING NEW GUIDES
================================================================================

## STEP-BY-STEP GUIDE CREATION PROCESS:

### 1. RESEARCH PHASE

- [ ] Read the actual component file from src/
- [ ] Note all imports, props, features, and patterns
- [ ] Identify component dependencies (what it imports)
- [ ] Check what Tailwind classes and custom CSS it uses
- [ ] Review any existing guides for this class to match tone

### 2. PLANNING PHASE

- [ ] Determine if this needs a simplified version first
- [ ] Identify the learning progression (steps)
- [ ] Decide what to teach in each step (one concept per step)
- [ ] Plan where to add test/demo moments
- [ ] Identify likely student questions and errors

### 3. WRITING PHASE

- [ ] Follow the exact header format
- [ ] Write INSTRUCTOR SAYS for each step
- [ ] Provide exact code for STUDENTS TYPE
- [ ] Write EXPLAIN bullets
- [ ] Show complete CURRENT CODE after each meaningful change
- [ ] Add ASK STUDENTS questions
- [ ] Include at least one STEP X: TEST section

### 4. COMPLETION PHASE

- [ ] Add WHAT WE'VE ACCOMPLISHED section
- [ ] Add KEY CONCEPTS COVERED section
- [ ] Add COMMON STUDENT QUESTIONS section
- [ ] Add TROUBLESHOOTING section
- [ ] Add TESTING CHECKLIST
- [ ] Add proper ending marker
- [ ] Include EVOLUTION NOTES if simplified version

### 5. VALIDATION PHASE

- [ ] Verify final code matches actual codebase exactly
- [ ] Check all imports are correct
- [ ] Verify all Tailwind classes exist and are spelled correctly
- [ ] Ensure no wasteful patterns (check against rules)
- [ ] Test that progression is logical and incremental
- [ ] Confirm prerequisites are noted

================================================================================
EXAMPLES OF WELL-STRUCTURED GUIDES
================================================================================

## SIMPLE COMPONENT EXAMPLE: Container.jsx

**What it teaches:**

- Basic props (className, children)
- Tailwind responsive classes
- Component composition concept

**Progression:**

1. Basic component structure
2. Add className prop
3. Add children prop
4. Add Tailwind classes
5. Test in browser
6. Use in another component

**Time estimate:** 15-20 minutes

## COMPLEX COMPONENT EXAMPLE: Button.jsx

**What it teaches:**

- Multiple props (variant, size, as, icon positions)
- Polymorphic components (renders as button or anchor)
- forwardRef (advanced React)
- Complex className composition

**Progression:**

- STAGE 1: Basic button structure (steps 1.1-1.4)
- STAGE 2: Add variants (steps 2.1-2.3)
- STAGE 3: Add sizes (steps 3.1-3.2)
- STAGE 4: Add polymorphic "as" prop (steps 4.1-4.3)
- STAGE 5: Add icon support (steps 5.1-5.4)
- STAGE 6: Add forwardRef (steps 6.1-6.2)

**Time estimate:** 30-45 minutes

## PAGE COMPONENT EXAMPLE: Home.jsx

**CLASS 1 version (simplified):**

- Just hero section
- Uses Section and Container
- Static heading and description
- Comment placeholder for future buttons

**CLASS 2 version (enhanced):**

- Add Button components
- Add social links
- Keep same structure (no wasteful replacement)

**Progression demonstrates:**

- Building on previous work
- Progressive enhancement
- No wasteful rewriting

================================================================================
COMMON PATTERNS IN OUR GUIDES
================================================================================

## 1. CONTAINER + SECTION PATTERN

Nearly all page sections use this pattern:

```
<Section>
  <Container>
    {/* Content */}
  </Container>
</Section>
```

Teach this pattern explicitly and reinforce it across guides.

## 2. IMPORT ORGANIZATION

Standard order:

1. React imports (if needed)
2. React Router imports
3. UI components (from ../ui/)
4. Layout components (from ../layout/)
5. Data imports (from ../data/)
6. Assets

```
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import Navbar from "../layout/Navbar.jsx";
import { projects } from "../data/projects.js";
import logo from "../assets/logo.svg";
```

## 3. PROP DESTRUCTURING WITH DEFAULTS

Consistent pattern:

```
export default function Component({
  className = "",
  children,
  variant = "primary",
  size = "md"
}) {
  // ...
}
```

Always destructure props, provide defaults where sensible.

## 4. CONDITIONAL CLASSES

Use template literals for dynamic classes:

```
className={`base-classes ${variant === "primary" ? "primary-classes" : "secondary-classes"} ${className}`}
```

## 5. POLYMORPHIC PATTERN

For components that can render as different elements:

```
const Component = as;
return <Component {...props}>{children}</Component>;
```

Teach this carefully - it's advanced but powerful.

================================================================================
VERSION CONTROL AND CHANGE TRACKING
================================================================================

## UPDATING EXISTING GUIDES

When updating a guide:

1. **Add changelog at top:**

```
CHANGELOG:
- [Date]: [Description of change]
- [Date]: [Description of change]
```

2. **Mark updated sections:**

```
================================================================================
STEP 5: ADD STYLING (UPDATED: [Date])
================================================================================
```

3. **Preserve old content if pedagogically valuable:**
   Add "ARCHIVE" section at bottom with old approach and explanation why changed.

## GUIDE VERSION NUMBERING

If major revisions are needed:

- CLASS_1_BUTTON_V1.md (original)
- CLASS_1_BUTTON_V2.md (major revision)
- CLASS_1_BUTTON.md (current/active, copy of latest version)

Keep version history for reference but maintain one "current" guide.

================================================================================
SPECIAL CONSIDERATIONS FOR DIFFERENT COMPONENT TYPES
================================================================================

## UI COMPONENTS (Button, Section, Container, etc.)

**Focus on:**

- Reusability
- Props and customization
- Composition patterns
- Where it will be used

**Include:**

- Multiple usage examples
- Variant demonstrations
- Common use cases

## LAYOUT COMPONENTS (Navbar, Footer, etc.)

**Focus on:**

- Semantic HTML
- Responsive behavior
- Composition of UI components
- Navigation patterns

**Include:**

- Desktop AND mobile considerations (even if mobile comes later)
- Accessibility notes
- Visual structure diagrams

## PAGE COMPONENTS (Home, About, Portfolio, etc.)

**Focus on:**

- Section composition
- Content hierarchy
- SEO considerations
- User flow

**Include:**

- Complete page structure
- Content personalization notes
- How sections work together

## DATA FILES (projects.js, testimonials.js, etc.)

**Focus on:**

- Data structure
- How it's consumed
- How to customize

**Include:**

- Example entries
- Field explanations
- Validation rules

================================================================================
QUALITY CHECKLIST FOR COMPLETED GUIDES
================================================================================

Before marking a guide as complete, verify:

### FORMATTING

□ Filename follows CLASS*[N]*[COMPONENT].md pattern
□ Header section includes all required elements
□ Steps are properly numbered
□ Code blocks are properly formatted
□ Consistent use of divider lines (80 = characters)

### CONTENT

□ Each step has INSTRUCTOR SAYS
□ Each step has code example
□ Each step has EXPLAIN bullets
□ "CURRENT CODE SHOULD LOOK LIKE" shows complete code
□ At least one testing moment included
□ Evolution notes present (if simplified version)

### ACCURACY

□ Final code matches actual codebase
□ All imports are correct
□ All Tailwind classes are valid
□ No wasteful patterns present
□ Prerequisites are documented

### PEDAGOGY

□ Progression is logical (simple to complex)
□ One main concept per step
□ Questions and demonstrations included
□ Common errors anticipated
□ Testing checkpoints provided

### COMPLETENESS

□ WHAT WE'VE ACCOMPLISHED section
□ KEY CONCEPTS COVERED section
□ COMMON STUDENT QUESTIONS section
□ TROUBLESHOOTING section
□ TESTING CHECKLIST section
□ Proper ending marker

================================================================================
FINAL NOTES
================================================================================

## REMEMBER:

1. **Students come first** - Every decision should prioritize learning
2. **Progressive enhancement** - Simple to complex, always
3. **No wasteful patterns** - Never teach something that must be unlearned
4. **Codebase alignment** - Final code must match actual files exactly
5. **Test frequently** - Students should see results often
6. **Encourage experimentation** - Provide customization ideas
7. **Be consistent** - Follow these rules for every guide

## WHEN IN DOUBT:

- Review existing guides for patterns
- Check actual codebase for accuracy
- Ask: "Does this help students learn or confuse them?"
- Choose the simpler explanation
- Add more examples rather than more words

## GETTING HELP:

If you're unsure about:

- Whether a pattern is wasteful → Check the examples in this document
- How to structure a step → Review similar guides
- Whether simplification is appropriate → Check evolution notes section
- Formatting questions → Use existing guides as templates

================================================================================
END OF INSTRUCTIONAL GUIDE CREATION RULES
================================================================================

This document should be updated as new patterns emerge or teaching approaches
evolve. All updates should be documented in the changelog below.

CHANGELOG:

- January 16, 2026: Major expansion with formatting standards, pedagogical
  guidelines, quality checklist, and comprehensive examples
- January 14, 2026: Initial version with basic acceptable/unacceptable patterns
