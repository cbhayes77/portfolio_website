================================================================================
GUIDE CREATION INSTRUCTIONS
================================================================================

Date: January 14, 2026

## PURPOSE:

To create a guide for AI tools to follow when creating instructional materials for the capstone class that builds this website from a shell.

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
PATTERN: WHEN CREATING NEW GUIDES
================================================================================

1. **Start with the right component/library**

   - Use NavLink if you need active states
   - Use the project's chosen library from start
   - Don't switch approaches mid-lesson

2. **Use progressive disclosure (acceptable)**

   - Comments → Code
   - Outer structure → Inner content
   - Imports → Usage

3. **Avoid wasteful patterns**

   - No building then replacing entire sections
   - No switching component types
   - No library switching

4. **Clear evolution notes**
   - Show how simple version becomes advanced
   - Explain what will be added later
   - Document why we wait (pedagogical reasons)
