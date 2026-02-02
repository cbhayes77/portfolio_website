# Class 11: Building the Error Boundary Component

**File:** `src/components/ui/ErrorBoundary.jsx`
**Type:** UI Component (Class Component)
**Purpose:** Catch JavaScript errors in React components and display a user-friendly fallback UI instead of crashing the entire application

---

## Why Do We Need Error Boundaries?

Imagine you're showing your portfolio to a potential employer. They click on a project, and suddenly... **the entire page goes blank**. No error message. No way to recover. Just a white screen.

**This is what happens without error boundaries.**

A single bug in one component can crash your entire React app. Error boundaries prevent this by:

1. **Catching errors** before they crash the app
2. **Displaying a fallback UI** (friendly error message)
3. **Allowing recovery** (refresh or try again)
4. **Logging errors** for debugging

**Think of it as a safety net for your application.**

---

## Class Components vs Functional Components

So far, you've been writing **functional components**:

```jsx
function MyComponent() {
  const [state, setState] = useState();
  return <div>Hello</div>;
}
```

For error boundaries, we need a **class component**. This is the **only** reason to use classes in modern React.

**Why?** React's error boundary features (`getDerivedStateFromError` and `componentDidCatch`) are only available in class components.

---

## Understanding Class Components

Don't worry—class components are straightforward once you understand the pattern.

**Functional Component:**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

**Same Component as Class:**

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return <button onClick={() => this.setState({ count: this.state.count + 1 })}>Count: {this.state.count}</button>;
  }
}
```

**Key differences:**

- `class` keyword instead of `function`
- `extends Component` (inherit from React's Component class)
- `constructor(props)` to initialize state
- `this.state` instead of `useState`
- `this.setState()` instead of setter function
- `render()` method returns JSX

**For our ErrorBoundary, we'll use a class component.**

---

## Step 1: Create the ErrorBoundary.jsx File

Navigate to `src/components/ui/` and create a new file called `ErrorBoundary.jsx`.

---

## Step 2: Set Up Imports

Let's start with the necessary imports.

**Add this code:**

```jsx
import { Component } from "react";
import Section from "./Section.jsx";
import Container from "./Container.jsx";
import Button from "./Button.jsx";
```

**What we're importing:**

1. **`Component`**: Base class from React (we'll extend this)
2. **`Section`**: Layout component for consistent spacing
3. **`Container`**: Centers and pads content
4. **`Button`**: Reusable button component for our error UI

---

## Step 3: Create the Class Component Shell

Now let's create the basic class structure.

**Add this code:**

```jsx
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
```

**Breaking it down:**

### The Class Declaration

```jsx
class ErrorBoundary extends Component {
```

- **`class`**: Define a class component
- **`ErrorBoundary`**: Component name
- **`extends Component`**: Inherit from React's Component class
  - Gives us access to React features (state, lifecycle methods, etc.)

### The Constructor

```jsx
constructor(props) {
  super(props);
  this.state = { hasError: false, error: null };
}
```

**Purpose:** Initialize the component's state.

**Line by line:**

1. **`constructor(props)`**:
   - Special method called when component is created
   - Receives props from parent
   - Only runs once (at creation)

2. **`super(props)`**:
   - **Required in constructor**: Calls parent class (Component) constructor
   - Passes props to parent
   - **Must come before** accessing `this`

3. **`this.state = { ... }`**:
   - Initialize state (in classes, state is an object)
   - **`hasError: false`**: Is there currently an error?
   - **`error: null`**: The error object (if any)

**Why this state?**

- `hasError`: Controls which UI to show (normal vs error)
- `error`: Stores error details for debugging

### The Render Method

```jsx
render() {
  return this.props.children;
}
```

**Purpose:** Return the JSX to display.

- **`render()`**: Required method in class components
- **`this.props.children`**: Render child components normally
- Later, we'll add logic to show error UI when `hasError` is true

**How it works:**

```jsx
<ErrorBoundary>
  <SomeComponent /> {/* this.props.children */}
</ErrorBoundary>
```

---

## Step 4: Add Error Detection

Now let's add the method that detects errors.

**After the constructor, before render(), add:**

```jsx
static getDerivedStateFromError(error) {
  return { hasError: true, error };
}
```

**Breaking it down:**

### Static Method

```jsx
static getDerivedStateFromError(error) {
```

- **`static`**: Method belongs to the class, not instances
  - Called by React, not by you
  - No access to `this` (doesn't need it)

- **`getDerivedStateFromError`**: Special React lifecycle method
  - **Only works in class components**
  - Called when a child component throws an error
  - Must return new state or null

**When it's called:**

```
Child component throws error
        ↓
React calls getDerivedStateFromError(error)
        ↓
Method returns new state
        ↓
Component re-renders with new state
```

### Return New State

```jsx
return { hasError: true, error };
```

- **Returns object** that will be merged into `this.state`
- **`hasError: true`**: Set error flag
- **`error`**: Store the error object (shorthand for `error: error`)

**Result:**

```jsx
// Before error:
this.state = { hasError: false, error: null };

// After error:
this.state = { hasError: true, error: ErrorObject };
```

**Why return instead of setState?**

- This method runs during the render phase
- Can't use `setState` during render (would cause infinite loop)
- Returning state is the safe way to update

---

## Step 5: Add Error Logging

Let's add a method to log errors for debugging.

**After getDerivedStateFromError, before render(), add:**

```jsx
componentDidCatch(error, errorInfo) {
  console.error("Error caught by boundary:", error, errorInfo);
}
```

**Breaking it down:**

### Component Lifecycle Method

```jsx
componentDidCatch(error, errorInfo) {
```

- **`componentDidCatch`**: Another special React lifecycle method
  - Called after an error has been caught
  - Used for logging/reporting errors
  - Can have side effects (unlike getDerivedStateFromError)

**Parameters:**

1. **`error`**: The error that was thrown
   - Example: `TypeError: Cannot read property 'foo' of undefined`

2. **`errorInfo`**: Object with component stack trace
   - Shows which component threw the error
   - Shows component tree that led to error
   - Helpful for debugging

### Logging

```jsx
console.error("Error caught by boundary:", error, errorInfo);
```

- **`console.error`**: Log to browser console (red, stands out)
- Logs both error and component stack
- In production, you might send this to an error tracking service (Sentry, LogRocket, etc.)

**Example output:**

```
Error caught by boundary:
  TypeError: Cannot read property 'foo' of undefined

Component stack:
  in ProjectCard
  in Projects
  in Home
  in ErrorBoundary
```

**Why both methods?**

- **`getDerivedStateFromError`**: Update UI (show error page)
- **`componentDidCatch`**: Log for debugging
- Both are needed for complete error handling

---

## Step 6: Build the Error Fallback UI

Now let's update the `render()` method to show an error UI when errors occur.

**Replace the render() method with:**

```jsx
render() {
  if (this.state.hasError) {
    return (
      <Section>
        <Container className="text-center">
          <h1 className="heading-section text-red-400">Something went wrong</h1>
          <p className="mt-4 body-default">We encountered an unexpected error. Please try refreshing the page.</p>
          <div className="mt-6 space-x-4">
            <Button onClick={() => window.location.reload()} variant="primary">
              Refresh Page
            </Button>
            <Button onClick={() => this.setState({ hasError: false, error: null })} variant="secondary">
              Try Again
            </Button>
          </div>
          {import.meta.env.DEV && this.state.error && (
            <details className="mt-8 text-left">
              <summary className="cursor-pointer text-red-400 mb-2">Error Details (Development Only)</summary>
              <pre className="bg-red-950/50 text-red-300 p-4 rounded-lg overflow-auto text-sm">
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </Container>
      </Section>
    );
  }

  return this.props.children;
}
```

**This is a lot! Let's break it down:**

### Conditional Rendering

```jsx
if (this.state.hasError) {
  // Return error UI
}
return this.props.children; // Normal rendering
```

- **Check state**: Is there an error?
- **If yes**: Show error UI
- **If no**: Render children normally

### Error UI Structure

```jsx
<Section>
  <Container className="text-center">
```

- Use our layout components for consistency
- `text-center`: Center all text

### Error Heading

```jsx
<h1 className="heading-section text-red-400">Something went wrong</h1>
```

- **`heading-section`**: Our design system heading style
- **`text-red-400`**: Red color signals error
- **Friendly message**: Not technical (users don't need jargon)

### Error Description

```jsx
<p className="mt-4 body-default">We encountered an unexpected error. Please try refreshing the page.</p>
```

- **`mt-4`**: Top margin (1rem) for spacing
- **`body-default`**: Standard body text style
- **Helpful guidance**: Tell user what to do

### Action Buttons

```jsx
<div className="mt-6 space-x-4">
  <Button onClick={() => window.location.reload()} variant="primary">
    Refresh Page
  </Button>
  <Button onClick={() => this.setState({ hasError: false, error: null })} variant="secondary">
    Try Again
  </Button>
</div>
```

**Container:**

- `mt-6`: Top margin (1.5rem) before buttons
- `space-x-4`: Horizontal spacing between buttons (1rem)

**Refresh Button:**

```jsx
onClick={() => window.location.reload()}
```

- **`window.location.reload()`**: Browser API to refresh page
- **Hard refresh**: Reloads entire app
- **Use case**: Fixes most errors (fresh start)

**Try Again Button:**

```jsx
onClick={() => this.setState({ hasError: false, error: null })}
```

- **`this.setState()`**: Update component state (class component way)
- **Reset state**: `hasError: false, error: null`
- **What happens**: Error UI hides, tries to render children again
- **Use case**: Might work if error was temporary/transient

**Why two options?**

- **Refresh**: Nuclear option, always works
- **Try Again**: Lighter option, might work without losing state

### Development Error Details

```jsx
{
  import.meta.env.DEV && this.state.error && (
    <details className="mt-8 text-left">
      <summary className="cursor-pointer text-red-400 mb-2">Error Details (Development Only)</summary>
      <pre className="bg-red-950/50 text-red-300 p-4 rounded-lg overflow-auto text-sm">
        {this.state.error.toString()}
      </pre>
    </details>
  );
}
```

**This is advanced conditional rendering! Let's unpack it:**

#### Triple Condition

```jsx
{import.meta.env.DEV && this.state.error && (...)}
```

- **`import.meta.env.DEV`**: Vite environment variable
  - `true` in development mode (`npm run dev`)
  - `false` in production build (`npm run build`)

- **`this.state.error`**: Error object exists

- **`&&`**: Logical AND
  - All conditions must be true to render
  - If any is false, nothing renders

**Translation:** "Only show error details if we're in development AND there's an error"

**Why?**

- **Development**: Developers need error details for debugging
- **Production**: Users don't need technical stack traces (confusing/scary)
- **Security**: Don't expose internal errors in production

#### Details/Summary Elements

```jsx
<details className="mt-8 text-left">
  <summary>...</summary>
  ...
</details>
```

- **`<details>`**: HTML5 collapsible element
- **`<summary>`**: Clickable header/toggle
- **Behavior**: Click summary to expand/collapse details
- **Native HTML**: No JavaScript needed

**Styling:**

- `mt-8`: Top margin (2rem) separates from buttons
- `text-left`: Override center alignment for code readability
- `cursor-pointer`: Shows it's clickable
- `text-red-400`: Red to match error theme

#### Error Display

```jsx
<pre className="bg-red-950/50 text-red-300 p-4 rounded-lg overflow-auto text-sm">{this.state.error.toString()}</pre>
```

- **`<pre>`**: Preformatted text (preserves whitespace/line breaks)
  - Good for code/stack traces

- **Styling:**
  - `bg-red-950/50`: Dark red background (50% opacity)
  - `text-red-300`: Light red text (readable on dark)
  - `p-4`: Padding (1rem) inside
  - `rounded-lg`: Large border radius
  - `overflow-auto`: Scroll if content is too wide/tall
  - `text-sm`: Smaller text (fits more)

- **`this.state.error.toString()`**: Convert error object to string
  - Shows error message and stack trace
  - Helpful for debugging

**Visual result:**

```
[Click to expand: Error Details (Development Only)]

(Expanded)
─────────────────────────────────────
TypeError: Cannot read property 'foo'
of undefined
  at ProjectCard (ProjectCard.jsx:15)
  at Projects (Projects.jsx:23)
  ...
─────────────────────────────────────
```

---

## Step 7: Export the Component

At the end of the file, export the component.

**Add this code:**

```jsx
export default ErrorBoundary;
```

Standard default export (same as functional components).

---

## Step 8: Save and Review

Save the `ErrorBoundary.jsx` file.

**Your complete component should look like this:**

```jsx
import { Component } from "react";
import Section from "./Section.jsx";
import Container from "./Container.jsx";
import Button from "./Button.jsx";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Section>
          <Container className="text-center">
            <h1 className="heading-section text-red-400">Something went wrong</h1>
            <p className="mt-4 body-default">We encountered an unexpected error. Please try refreshing the page.</p>
            <div className="mt-6 space-x-4">
              <Button onClick={() => window.location.reload()} variant="primary">
                Refresh Page
              </Button>
              <Button onClick={() => this.setState({ hasError: false, error: null })} variant="secondary">
                Try Again
              </Button>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-red-400 mb-2">Error Details (Development Only)</summary>
                <pre className="bg-red-950/50 text-red-300 p-4 rounded-lg overflow-auto text-sm">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </Container>
        </Section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

---

## Common Questions

### Q: Why can't we use hooks (useState, useEffect) in this component?

**A:** Because it's a **class component**, and hooks only work in **functional components**.

**Hooks (functional only):**

```jsx
function Component() {
  const [state, setState] = useState(); // ✅ Works
  useEffect(() => {}, []); // ✅ Works
}
```

**Class components use different APIs:**

```jsx
class Component extends Component {
  constructor() {
    this.state = {}; // Class state (not useState)
  }
  componentDidMount() {} // Lifecycle (not useEffect)
}
```

**Why use class then?**

- Error boundaries **require** `getDerivedStateFromError` and `componentDidCatch`
- These lifecycle methods **only exist** in class components
- React team hasn't added hook equivalents (yet)

---

### Q: What's the difference between `getDerivedStateFromError` and `componentDidCatch`?

**A:** Both handle errors, but at different times and for different purposes.

**`getDerivedStateFromError`:**

- Called **during render phase**
- **Updates state** (triggers re-render with error UI)
- **Can't have side effects** (no logging, no API calls)
- **Must return new state** or null

**`componentDidCatch`:**

- Called **after render phase** (after error caught)
- **Can have side effects** (logging, reporting)
- **Can't update state** (would cause issues)
- Returns nothing

**Timeline:**

```
1. Error occurs in child component
2. getDerivedStateFromError(error) runs → returns new state
3. Component re-renders with error UI
4. componentDidCatch(error, errorInfo) runs → logs to console
```

**Both are needed:**

- `getDerivedStateFromError`: Show error UI
- `componentDidCatch`: Log for debugging

---

### Q: Why use `window.location.reload()` instead of resetting state?

**A:** Different recovery strategies.

**`window.location.reload()` (Refresh):**

- **Hard reset**: Reloads entire page
- **Clears all state**: Fresh start
- **Always works**: Guaranteed to fix error
- **Downside**: Loses any unsaved work

**`this.setState({ hasError: false })` (Try Again):**

- **Soft reset**: Just hides error UI, tries to render again
- **Keeps state**: Doesn't lose work
- **Might work**: If error was temporary
- **Might fail**: If error persists, shows error UI again

**Best practice:** Offer both options

- User chooses based on situation
- "Try Again" first (faster, preserves state)
- "Refresh" if Try Again doesn't work

---

### Q: What errors do error boundaries catch?

**A:** Not all errors! Only specific types.

**✅ Caught by error boundaries:**

- Errors during **rendering**
- Errors in **lifecycle methods**
- Errors in **constructors**
- Errors in **child components**

**❌ NOT caught:**

- Errors in **event handlers** (onClick, etc.)
- Errors in **async code** (setTimeout, Promises)
- Errors in **server-side rendering**
- Errors in the **error boundary itself**

**Example:**

```jsx
// ✅ Caught
function Component() {
  const data = undefined;
  return <div>{data.foo}</div>; // Error during render
}

// ❌ NOT caught
function Component() {
  const handleClick = () => {
    throw new Error("Oops"); // Error in event handler
  };
  return <button onClick={handleClick}>Click</button>;
}
```

**For event handlers**, use try-catch:

```jsx
const handleClick = () => {
  try {
    riskyOperation();
  } catch (error) {
    console.error(error);
    // Handle error
  }
};
```

---

### Q: Can I have multiple error boundaries?

**A:** Yes! You can nest them for granular error handling.

**Single boundary (our approach):**

```jsx
<ErrorBoundary>
  <App>
    <Navbar />
    <Routes /> {/* All pages */}
    <Footer />
  </App>
</ErrorBoundary>
```

- **One error** anywhere crashes to error page
- **Simple**: One boundary to maintain
- **Good for**: Most small-medium apps

**Multiple boundaries (advanced):**

```jsx
<ErrorBoundary>
  {" "}
  {/* Catches errors in entire app */}
  <App>
    <Navbar />
    <ErrorBoundary>
      {" "}
      {/* Catches errors in main content only */}
      <Routes />
    </ErrorBoundary>
    <Footer />
  </App>
</ErrorBoundary>
```

- **Navbar/Footer keep working** if page errors
- **More complex**: Multiple boundaries to maintain
- **Good for**: Large apps where one section failing shouldn't break others

**For this portfolio:** One boundary is sufficient.

---

### Q: What happens in production vs development?

**A:**

**Development (`npm run dev`):**

```jsx
{import.meta.env.DEV && this.state.error && (...)}
         ↑
      This is TRUE
```

- Error details **shown** (stack trace visible)
- Developers can debug
- Console errors displayed

**Production (`npm run build`):**

```jsx
{import.meta.env.DEV && this.state.error && (...)}
         ↑
      This is FALSE
```

- Error details **hidden** (only friendly message)
- Users don't see technical details
- Cleaner, more professional

**Why hide details in production?**

1. **User experience**: Stack traces are scary/confusing for users
2. **Security**: Don't expose internal structure/code
3. **Professionalism**: Clean, polished error messages

---

## Testing Your Error Boundary

You've built the ErrorBoundary, but how do you know it works? We'll test it after integrating it into the app.

**Teaser for next step:**

```jsx
// Create a test component that throws an error
function BrokenComponent() {
  throw new Error("Test error!");
  return <div>You won't see this</div>;
}

// Use it somewhere to test
<BrokenComponent />;
```

We'll do this in the next guide when we integrate the ErrorBoundary into App.jsx.

---

## Key Takeaways

1. **Error Boundaries**: Catch React errors and show fallback UI

2. **Class Components**: Required for error boundaries (only use case in modern React)

3. **Two Lifecycle Methods**:
   - `getDerivedStateFromError`: Update state (show error UI)
   - `componentDidCatch`: Log errors (debugging)

4. **Fallback UI**: User-friendly error message with recovery options

5. **Development vs Production**: Show error details in dev, hide in production

6. **Not All Errors**: Only catches render/lifecycle errors (not event handlers)

7. **Recovery Options**: Refresh (hard reset) or Try Again (soft reset)

8. **Graceful Degradation**: App doesn't crash, users can still navigate/recover

**Congratulations!** You've built a professional error boundary component. In the next guide, we'll integrate it into the app and test it! 🎉
