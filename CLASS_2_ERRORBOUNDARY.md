# Class 2: Building the Error Boundary Component

**Instructional Guide - Part 3 of Class 2**
**Estimated Time:** 20-25 minutes

---

## Overview

In this lesson, you'll create an **Error Boundary** component that catches JavaScript errors anywhere in your app and displays a helpful error message instead of a blank white screen. This is crucial for debugging as you build the rest of your portfolio.

### What You'll Build

- **ErrorBoundary.jsx** - A class component that catches and handles errors
- **Update App.jsx** - Wrap your application with the ErrorBoundary

### Why This Matters

**Without an Error Boundary:**

- Errors crash your entire app
- Users see a blank white screen
- You have no idea what went wrong
- Debugging is frustrating

**With an Error Boundary:**

- Errors are caught and displayed nicely
- Users see a helpful error message
- In development, you see detailed error info
- Debugging is much easier
- Professional error handling

### Concepts Covered

- Error boundaries in React
- Class components (vs functional components)
- Component lifecycle methods
- Conditional rendering
- Development vs production environments

### Prerequisites

Before starting, you should have:

- ✅ Button.jsx (Class 1)
- ✅ Container.jsx (Class 1)
- ✅ Section.jsx (Class 1)
- ✅ Basic understanding of React components

---

## Understanding Error Boundaries

### What is an Error Boundary?

An **Error Boundary** is a React component that:

- Catches JavaScript errors in child components
- Logs error information
- Displays a fallback UI instead of crashing
- Prevents the entire app from breaking

**Think of it like a safety net:**

```
Your App
  └── ErrorBoundary (safety net)
        └── All your components
              └── If any component errors,
                  ErrorBoundary catches it!
```

### Class vs Functional Components

**Important:** Error Boundaries MUST be **class components** (not functional components with hooks).

**Why?** Error boundaries use special lifecycle methods that don't exist in functional components:

- `getDerivedStateFromError()` - Updates state when error occurs
- `componentDidCatch()` - Logs error information

**This is one of the few cases where we still need class components in modern React.**

---

## Step 1: Understanding Class Components

Before we build the ErrorBoundary, let's understand class component syntax.

### Functional vs Class Components

**Functional Component (what you've been using):**

```jsx
function MyComponent(props) {
  return <div>Hello {props.name}</div>;
}
```

**Class Component (what we'll use for ErrorBoundary):**

```jsx
import { Component } from "react";

class MyComponent extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

**Key differences:**

| Functional                          | Class                                  |
| ----------------------------------- | -------------------------------------- |
| `function MyComponent(props)`       | `class MyComponent extends Component`  |
| Access props with `props.name`      | Access props with `this.props.name`    |
| Use hooks (`useState`, `useEffect`) | Use lifecycle methods and `this.state` |
| Simpler, modern                     | More verbose, older pattern            |

**For 99% of components, use functional.** ErrorBoundary is the exception.

---

## Step 2: Create the ErrorBoundary File

### Create the File

**1. Create a new file:**

```
src/components/ui/ErrorBoundary.jsx
```

**2. Import dependencies:**

```jsx
import { Component } from "react";
import Section from "./Section.jsx";
import Container from "./Container.jsx";
import Button from "./Button.jsx";
```

**What we're importing:**

- `Component` - Base class for React class components
- Our existing UI components for the error display

---

## Step 3: Build the ErrorBoundary Class

### Basic Class Structure

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

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
```

**What this does:**

**Line-by-line breakdown:**

```jsx
class ErrorBoundary extends Component {
```

- Create a class that extends React's Component class
- Like saying "ErrorBoundary IS A Component with extra powers"

```jsx
constructor(props) {
  super(props);
  this.state = { hasError: false, error: null };
}
```

- `constructor` - Runs when component is created
- `super(props)` - Required, calls parent Component constructor
- `this.state` - Initialize state (in class components, state is an object)
  - `hasError: false` - No error by default
  - `error: null` - No error details yet

```jsx
render() {
  return this.props.children;
}
```

- `render()` - Required method that returns JSX
- `this.props.children` - Renders whatever is inside the ErrorBoundary

---

## Step 4: Add Error Catching Logic

Now add the special methods that catch errors:

```jsx
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
    return this.props.children;
  }
}
```

**Understanding the new methods:**

### getDerivedStateFromError()

```jsx
static getDerivedStateFromError(error) {
  return { hasError: true, error };
}
```

**What it does:**

- `static` - Called on the class itself, not an instance
- Automatically runs when a child component throws an error
- Returns new state object
- Updates `hasError` to `true` and stores the `error`

**Why it's needed:**

- Triggers a re-render with error state
- Allows us to show fallback UI

### componentDidCatch()

```jsx
componentDidCatch(error, errorInfo) {
  console.error("Error caught by boundary:", error, errorInfo);
}
```

**What it does:**

- Runs after an error is caught
- Receives `error` (the error object) and `errorInfo` (component stack trace)
- Perfect place to log errors

**Why it's needed:**

- Logs errors to console for debugging
- Could send errors to error tracking service (Sentry, LogRocket)

---

## Step 5: Add the Error Display UI

Now add the fallback UI that shows when there's an error:

```jsx
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
          </Container>
        </Section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

**Understanding the render logic:**

```jsx
if (this.state.hasError) {
  return (/* Error UI */);
}
return this.props.children;
```

**Flow:**

1. Check if `hasError` is true
2. If yes → show error UI
3. If no → render children normally

**Error UI breakdown:**

```jsx
<h1 className="heading-section text-red-400">Something went wrong</h1>
```

- User-friendly error message
- Red color (`text-red-400`) indicates error

```jsx
<Button onClick={() => window.location.reload()} variant="primary">
  Refresh Page
</Button>
```

- Reload the entire page
- Often fixes temporary errors

```jsx
<Button onClick={() => this.setState({ hasError: false, error: null })} variant="secondary">
  Try Again
</Button>
```

- Reset error state
- Attempt to render children again
- Might work if error was temporary

---

## Step 6: Add Development Error Details

Add a section that shows detailed error info ONLY in development:

```jsx
render() {
  if (this.state.hasError) {
    return (
      <Section>
        <Container className="text-center">
          <h1 className="heading-section text-red-400">
            Something went wrong
          </h1>
          <p className="mt-4 body-default">
            We encountered an unexpected error. Please try refreshing the page.
          </p>
          <div className="mt-6 space-x-4">
            <Button
              onClick={() => window.location.reload()}
              variant="primary"
            >
              Refresh Page
            </Button>
            <Button
              onClick={() => this.setState({ hasError: false, error: null })}
              variant="secondary"
            >
              Try Again
            </Button>
          </div>

          {/* Development-only error details */}
          {import.meta.env.DEV && this.state.error && (
            <details className="mt-8 text-left">
              <summary className="cursor-pointer text-red-400 mb-2">
                Error Details (Development Only)
              </summary>
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

**Understanding the development section:**

```jsx
{import.meta.env.DEV && this.state.error && (
  // Error details
)}
```

**What this does:**

- `import.meta.env.DEV` - True in development, false in production
- `this.state.error` - Only show if there's an error object
- `&&` - Both conditions must be true

**Why this matters:**

- **Development:** Show detailed errors to help you debug
- **Production:** Hide technical details from users

```jsx
<details className="mt-8 text-left">
  <summary className="cursor-pointer text-red-400 mb-2">Error Details (Development Only)</summary>
  <pre className="bg-red-950/50 text-red-300 p-4 rounded-lg overflow-auto text-sm">{this.state.error.toString()}</pre>
</details>
```

**HTML elements:**

- `<details>` - Collapsible section (HTML5)
- `<summary>` - Clickable header for details
- `<pre>` - Preformatted text (preserves spacing)

**Result:** Clickable "Error Details" that shows the actual error message.

---

## Step 7: Complete ErrorBoundary Code

Here's the complete component:

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

## Step 8: Wrap App with ErrorBoundary

Now let's use the ErrorBoundary in your application.

### Update App.jsx

**1. Open `src/App.jsx`**

**2. Import ErrorBoundary:**

```jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ErrorBoundary from "./components/ui/ErrorBoundary.jsx"; // Add this
```

**3. Wrap the app content with ErrorBoundary:**

```jsx
function App() {
  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
```

**What this does:**

- Wraps ENTIRE app in ErrorBoundary
- Any error in Navbar, pages, Footer, or Outlet will be caught
- Error UI will replace the entire app when error occurs

---

## Step 9: Test the ErrorBoundary

Let's intentionally create an error to see the ErrorBoundary in action!

### Create a Test Error

**1. Open `src/pages/Home.jsx`**

**2. Add a button that throws an error:**

```jsx
export default function Home() {
  const causeError = () => {
    throw new Error("This is a test error!");
  };

  return (
    <>
      <SEO title="Home" description="Welcome to my portfolio" url="/" />

      <Section>
        <Container>
          <h1 className="heading-page">Welcome</h1>

          {/* Test error button */}
          <button onClick={causeError} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">
            Trigger Test Error
          </button>
        </Container>
      </Section>
    </>
  );
}
```

### See the ErrorBoundary in Action

**1. Start your dev server:**

```bash
npm run dev
```

**2. Visit the homepage**

**3. Click "Trigger Test Error" button**

**You should see:**

- ✅ Error UI appears (red heading "Something went wrong")
- ✅ "Refresh Page" and "Try Again" buttons
- ✅ "Error Details" section (development only)
- ✅ Console shows error log

**4. Click "Try Again" button:**

- Should attempt to render page again
- Error will occur again (because button still throws error)

**5. Remove the test button from Home.jsx:**

```jsx
// Delete this entire section:
const causeError = () => {
  throw new Error("This is a test error!");
};

// And delete this button:
<button onClick={causeError} ...>
  Trigger Test Error
</button>
```

**6. Click "Try Again" again:**

- Page should render normally now
- No more error!

---

## How ErrorBoundary Helps You

### Scenario 1: Typo in Component

**Without ErrorBoundary:**

```
White screen of death
Check console
See cryptic error
Try to figure out what broke
```

**With ErrorBoundary:**

```
Nice error message
Error details show exactly what broke
Click "Try Again" after fixing
Keep working!
```

### Scenario 2: Undefined Data

**Without ErrorBoundary:**

```jsx
// If projects is undefined
{projects.map(...)}  // CRASH! Blank screen!
```

**With ErrorBoundary:**

```
Error caught!
Shows "Something went wrong"
You see: "Cannot read property 'map' of undefined"
Fix the data import
Back to work!
```

### Scenario 3: Missing Import

**Without ErrorBoundary:**

```jsx
import { NotExist } from "./file.js"; // CRASH!
```

**With ErrorBoundary:**

```
Error message shown
Details: "NotExist is not exported"
Fix the import
All good!
```

---

## Understanding Error Boundary Limitations

### What ErrorBoundary CATCHES:

✅ Errors in render methods
✅ Errors in lifecycle methods
✅ Errors in child component constructors
✅ Errors during component updates

### What ErrorBoundary DOES NOT catch:

❌ Event handler errors (onClick, onChange, etc.)
❌ Asynchronous errors (setTimeout, fetch, promises)
❌ Server-side rendering errors
❌ Errors in the ErrorBoundary itself

**For event handlers, use try/catch:**

```jsx
const handleClick = () => {
  try {
    // Your code
  } catch (error) {
    console.error("Error in event handler:", error);
  }
};
```

---

## Key Concepts Review

### What You Learned

**1. Error Boundaries**

- Catch errors in child components
- Display fallback UI
- Prevent entire app from crashing

**2. Class Components**

- Older React pattern (still needed for error boundaries)
- Use `this.state` and `this.props`
- Lifecycle methods like `componentDidCatch`

**3. Development vs Production**

- `import.meta.env.DEV` checks environment
- Show detailed errors in development
- Hide technical details in production

**4. Error Handling Best Practices**

- Provide helpful user-facing messages
- Log errors for debugging
- Offer recovery options (refresh, try again)

---

## Common Questions

### "Why use a class component when we've been using functional components?"

**Answer:** Error boundaries REQUIRE class components because:

- They need `getDerivedStateFromError()` and `componentDidCatch()`
- These lifecycle methods don't exist in functional components
- No React Hook equivalent (as of React 18)

This is one of the only remaining use cases for class components.

### "Will this catch all errors in my app?"

**No.** Error boundaries only catch errors during rendering and in lifecycle methods. They don't catch:

- Errors in event handlers (use try/catch)
- Async errors (use try/catch or .catch())
- Errors in the ErrorBoundary itself

### "What happens in production?"

In production (`npm run build`):

- `import.meta.env.DEV` is `false`
- Error details section won't show
- Users only see the friendly error message
- Errors are still logged to console (for you to check)

### "Can I have multiple ErrorBoundaries?"

**Yes!** You can wrap different parts of your app:

```jsx
<ErrorBoundary>
  <Navbar />
</ErrorBoundary>

<ErrorBoundary>
  <Outlet />
</ErrorBoundary>
```

This way, if Navbar errors, the pages still work (and vice versa).

For this course, one boundary around the whole app is sufficient.

---

## Accessibility Considerations

### Screen Reader Support

The error UI is accessible because:

✅ Uses semantic HTML (`<h1>`, `<p>`, `<button>`)
✅ Buttons have clear text labels
✅ Error message is in heading (screen readers announce it)
✅ Details/summary is natively accessible

### Keyboard Navigation

Users can:

- Tab to buttons
- Enter/Space to activate buttons
- Navigate details/summary with keyboard

---

## Debugging Tips

### If ErrorBoundary doesn't catch an error:

**1. Check if error is in event handler:**

```jsx
// Not caught by ErrorBoundary
<button onClick={() => { throw new Error("Oops") }}>
```

**Solution:** Use try/catch in event handler

**2. Check if error is async:**

```jsx
// Not caught
setTimeout(() => {
  throw new Error("Later");
}, 1000);
```

**Solution:** Use try/catch in async code

**3. Check if error is outside component tree:**

```jsx
// In a separate file, not in React component
throw new Error("Outside"); // Not caught
```

**Solution:** Ensure error occurs within React components

---

## Next Steps

### Now that ErrorBoundary is set up:

✅ **All future errors will be caught** as you build
✅ **Debugging will be easier** with clear error messages
✅ **Professional error handling** from the start

### For the rest of Class 2:

Continue building:

- ✅ Navbar.jsx (already done)
- ✅ Footer.jsx (already done)
- ✅ ErrorBoundary.jsx (just completed!)
- Next: SEO.jsx and Home.jsx basic hero

### In Future Classes:

As you build more components (Classes 3-12), any errors will be caught by this ErrorBoundary. You can focus on building features knowing errors won't crash your entire app!

---

## Summary

✅ **You've built an ErrorBoundary that:**

- Catches errors throughout your app
- Displays user-friendly error messages
- Shows detailed error info in development
- Provides recovery options (refresh, try again)
- Prevents entire app from crashing

✅ **You've learned:**

- Class component syntax
- Error boundary lifecycle methods
- Development vs production environments
- Professional error handling patterns

**Excellent work!** Your portfolio now has robust error handling from day one. This will make debugging much easier as you build the rest of your site. 🎉

---

## Complete Code Reference

**src/components/ui/ErrorBoundary.jsx:**

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

**src/App.jsx (relevant section):**

```jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ErrorBoundary from "./components/ui/ErrorBoundary.jsx";

function App() {
  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
```
