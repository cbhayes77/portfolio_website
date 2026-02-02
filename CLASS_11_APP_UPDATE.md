# Class 11: Integrating and Testing the Error Boundary

**File:** `src/App.jsx` (updated)
**Type:** Application Root Component
**Purpose:** Wrap the entire application with ErrorBoundary to catch errors globally

---

## What We're Doing

You've built the ErrorBoundary component. Now we need to:

1. Import ErrorBoundary into App.jsx
2. Wrap our application with it
3. Test that it actually catches errors
4. Verify the recovery options work

This will protect your entire application from crashing due to JavaScript errors.

---

## Step 1: Update App.jsx Imports

Open `src/App.jsx` and update the imports at the top.

**Find the existing imports and add ErrorBoundary:**

```jsx
import { Outlet } from "react-router-dom";
import ErrorBoundary from "./components/ui/ErrorBoundary.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
```

**What's new:**

- **`ErrorBoundary`**: The component we just built
- Everything else should already be there

---

## Step 2: Wrap the Application

Now we'll wrap the entire app structure with the ErrorBoundary.

**Update the App component:**

```jsx
export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-dvh flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
```

**What changed:**

### Before (no error handling):

```jsx
export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

### After (with error boundary):

```jsx
export default function App() {
  return (
    <ErrorBoundary>  {/* ← Wrapper added */}
      <div className="min-h-dvh flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>  {/* ← Closing tag */}
  );
}
```

**Understanding the structure:**

```
<ErrorBoundary>           ← Catches errors from anything inside
  <div>                   ← Layout container
    <Navbar />            ← Errors in Navbar caught
    <main>
      <Outlet />          ← Errors in ANY page caught
    </main>
    <Footer />            ← Errors in Footer caught
  </div>
</ErrorBoundary>
```

**What this means:**

- **Any error** in Navbar, Footer, or any page component will be caught
- **ErrorBoundary** will display the fallback UI instead of crashing
- **Users** see a friendly error message instead of a blank screen

**Why wrap at the App level?**

- **Global protection**: Catches errors anywhere in the app
- **Single boundary**: Simple, maintainable
- **Consistent experience**: All errors handled the same way

---

## Step 3: Save and Verify

Save `App.jsx`.

**Your complete App.jsx should look like this:**

```jsx
import { Outlet } from "react-router-dom";
import ErrorBoundary from "./components/ui/ErrorBoundary.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-dvh flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
```

**Check your browser:**

- App should still work normally
- No errors in console
- All pages load correctly

**The ErrorBoundary is now active, but you won't see it unless there's an error.**

---

## Step 4: Test the Error Boundary

Now let's intentionally break something to see the ErrorBoundary in action.

### Test Method 1: Modify an Existing Component

**Pick a page component** (let's use Home.jsx) and add an error.

**Open `src/pages/Home.jsx` and at the top of the component function, add:**

```jsx
export default function Home() {
  // TEMPORARY: Test error boundary
  throw new Error("Test error - checking if ErrorBoundary works!");

  return (
    // ... rest of component
  );
}
```

**Save the file and check your browser.**

**What you should see:**

1. **Error UI displays** instead of the Home page:
   - Heading: "Something went wrong"
   - Message: "We encountered an unexpected error..."
   - Two buttons: "Refresh Page" and "Try Again"

2. **In development mode**, you should also see:
   - "Error Details (Development Only)" section (collapsed)
   - Click to expand and see the error message

3. **In the browser console** (F12 → Console):
   - Red error message: "Error caught by boundary: Error: Test error..."
   - Component stack trace showing where error occurred

**This proves your ErrorBoundary is working!**

### Test the Recovery Options

**Test "Try Again" button:**

1. Click the "Try Again" button
2. Error UI should disappear briefly
3. Error UI should reappear (because error still exists)
4. **Why?** The error is still in the code, so it throws again

**Test "Refresh Page" button:**

1. Click the "Refresh Page" button
2. Browser should reload
3. Error UI appears again (because error still exists)
4. **Why?** Hard refresh, but error is still in code

### Clean Up

**Remove the test error from Home.jsx:**

```jsx
export default function Home() {
  // TEMPORARY: Test error boundary
  throw new Error("Test error - checking if ErrorBoundary works!");  // ← DELETE THIS LINE

  return (
    // ... rest of component
  );
}
```

**Save, and your app should work normally again.**

---

## Test Method 2: Create a Test Component

A better way to test without breaking existing components:

### Create a Broken Component

**Create `src/pages/TestError.jsx`:**

```jsx
export default function TestError() {
  // This component intentionally throws an error
  throw new Error("This is a test error to verify ErrorBoundary works!");

  return <div>You should never see this</div>;
}
```

### Add a Test Route

**Open `src/main.jsx` and add a route:**

```jsx
import TestError from "./pages/TestError.jsx";

// In your routes array:
{
  path: "/test-error",
  element: <TestError />,
},
```

### Test It

1. Navigate to `http://localhost:5173/test-error`
2. Error UI should display
3. Test the buttons:
   - "Try Again": Error UI reappears (error still exists)
   - "Refresh": Page reloads, error UI appears (error still exists)

### Clean Up

When done testing:

1. Delete `src/pages/TestError.jsx`
2. Remove the route from `main.jsx`

---

## Understanding Error Boundary Behavior

### What Gets Caught

**✅ These errors are caught:**

```jsx
// Error during rendering
function Component() {
  const data = null;
  return <div>{data.name}</div>; // ✅ Caught (null.name)
}

// Error in component lifecycle
function Component() {
  useEffect(() => {
    throw new Error("Oops"); // ✅ Caught
  }, []);
  return <div>Hi</div>;
}

// Error in child component
<ErrorBoundary>
  <ChildThatThrows /> {/* ✅ Caught */}
</ErrorBoundary>;
```

### What Doesn't Get Caught

**❌ These errors are NOT caught:**

```jsx
// Event handlers
function Component() {
  const handleClick = () => {
    throw new Error("Click error"); // ❌ NOT caught
  };
  return <button onClick={handleClick}>Click</button>;
}

// Async code
function Component() {
  useEffect(() => {
    setTimeout(() => {
      throw new Error("Async error"); // ❌ NOT caught
    }, 1000);
  }, []);
  return <div>Hi</div>;
}

// Promises
async function fetchData() {
  throw new Error("Fetch error"); // ❌ NOT caught
}
```

**For event handlers, use try-catch:**

```jsx
const handleClick = () => {
  try {
    riskyOperation();
  } catch (error) {
    console.error("Error in handler:", error);
    // Show user-friendly message
  }
};
```

**For async code, use try-catch:**

```jsx
useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch("/api/data");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error);
    }
  }
  fetchData();
}, []);
```

---

## Production vs Development

### Development Mode (`npm run dev`)

**Error Details Visible:**

```
┌─────────────────────────────┐
│   Something went wrong      │
│                             │
│   [Refresh] [Try Again]     │
│                             │
│   ▼ Error Details (Dev Only)│  ← Visible
│   TypeError: Cannot read... │
└─────────────────────────────┘
```

- Stack trace visible
- Component tree visible
- Detailed error messages
- Helpful for debugging

### Production Mode (`npm run build && npm run preview`)

**Error Details Hidden:**

```
┌─────────────────────────────┐
│   Something went wrong      │
│                             │
│   [Refresh] [Try Again]     │
│                             │
│   (No error details shown)  │  ← Hidden
└─────────────────────────────┘
```

- Clean, professional
- No technical jargon
- No security leaks
- Better user experience

**Test production mode:**

```bash
npm run build
npm run preview
```

Navigate to the test error page and verify error details are hidden.

---

## Common Questions

### Q: Should I wrap each page separately or the whole app?

**A:**

**Whole app (recommended for this portfolio):**

```jsx
<ErrorBoundary>
  <App>
    <Navbar />
    <Routes />
    <Footer />
  </App>
</ErrorBoundary>
```

**Pros:**

- Simple (one boundary)
- Consistent experience
- Easy to maintain

**Cons:**

- One error crashes entire page
- Navbar/Footer disappear on error

**Per-section (advanced):**

```jsx
<App>
  <Navbar />
  <ErrorBoundary>
    <Routes />
  </ErrorBoundary>
  <Footer />
</App>
```

**Pros:**

- Navbar/Footer stay visible on error
- More granular control

**Cons:**

- More complex
- Multiple boundaries to maintain

**For this portfolio:** One boundary is sufficient.

---

### Q: What if the ErrorBoundary itself has an error?

**A:** It won't be caught by itself.

**If ErrorBoundary errors:**

- App will crash (white screen)
- Error shown in console
- No fallback UI

**How to prevent:**

- Keep ErrorBoundary simple
- Test thoroughly
- Use proven patterns (like ours)

**Advanced solution:** Nested boundaries

```jsx
<OuterErrorBoundary>
  <InnerErrorBoundary>
    <App />
  </InnerErrorBoundary>
</OuterErrorBoundary>
```

But this is overkill for most apps.

---

### Q: Should I report errors to a service?

**A:** In production, yes!

**Error reporting services:**

- **Sentry**: Most popular, free tier available
- **LogRocket**: Records user sessions
- **Bugsnag**: Error monitoring
- **Rollbar**: Real-time error tracking

**Add to componentDidCatch:**

```jsx
componentDidCatch(error, errorInfo) {
  console.error("Error caught:", error, errorInfo);

  // Report to Sentry (example)
  if (import.meta.env.PROD) {
    Sentry.captureException(error, { extra: errorInfo });
  }
}
```

**For this class:** Console logging is sufficient.

---

### Q: Can I customize the error UI?

**A:** Absolutely!

**Current UI:**

- Generic message
- Two buttons
- Error details (dev only)

**Customization ideas:**

**Different messages for different errors:**

```jsx
render() {
  if (this.state.hasError) {
    const isNetworkError = this.state.error.message.includes("fetch");

    return (
      <ErrorUI
        title={isNetworkError ? "Connection Error" : "Something went wrong"}
        message={isNetworkError ? "Check your internet connection" : "Unexpected error"}
      />
    );
  }
  return this.props.children;
}
```

**Add contact support:**

```jsx
<Button as="a" href="/contact">
  Contact Support
</Button>
```

**Add home link:**

```jsx
<Button as="a" href="/">
  Go Home
</Button>
```

---

### Q: Why use `this.props.children` instead of `<Outlet />`?

**A:** `children` is more generic.

**ErrorBoundary is reusable:**

```jsx
<ErrorBoundary>
  <AnyComponent />
</ErrorBoundary>

<ErrorBoundary>
  <DifferentComponent />
</ErrorBoundary>
```

**`this.props.children`:** Whatever is inside the ErrorBoundary

**`<Outlet />`:** Specific to React Router

**ErrorBoundary doesn't care what it wraps—it just catches errors.**

---

## Testing Checklist

Test your ErrorBoundary thoroughly:

### Functionality

- [ ] Error boundary catches render errors
- [ ] Fallback UI displays correctly
- [ ] "Refresh Page" button works
- [ ] "Try Again" button works
- [ ] Error logged to console

### Development vs Production

- [ ] Error details visible in dev mode
- [ ] Error details hidden in production build
- [ ] `import.meta.env.DEV` works correctly

### Edge Cases

- [ ] Multiple errors in sequence handled
- [ ] Nested components errors caught
- [ ] Page still works after "Try Again" (after fixing error)
- [ ] No memory leaks (errors don't accumulate)

### User Experience

- [ ] Error message is friendly (not technical)
- [ ] Recovery options clear
- [ ] Layout not broken on error page
- [ ] Consistent with site design

---

## Real-World Error Scenarios

Here are some real errors that ErrorBoundary would catch:

### 1. Missing Data

```jsx
// API returns null instead of expected data
function ProjectCard({ project }) {
  return <div>{project.title}</div>; // Error if project is null
}
```

**Without ErrorBoundary:** White screen, app crashes
**With ErrorBoundary:** Error UI, user can refresh

### 2. Invalid JSON

```jsx
// JSON.parse() on invalid data
const data = JSON.parse(invalidString); // Throws error
```

**ErrorBoundary catches it, shows fallback.**

### 3. Type Errors

```jsx
// Calling method on undefined
const projects = undefined;
projects.map((p) => <div>{p}</div>); // Error: undefined.map
```

**ErrorBoundary catches it, shows fallback.**

### 4. Imported Component Missing

```jsx
import { NonExistent } from "./components";
// Component doesn't exist or import path wrong
```

**ErrorBoundary catches it, shows fallback.**

---

## Key Takeaways

1. **Integration**: Wrap app with `<ErrorBoundary>` at root level

2. **Global Protection**: All child components protected from errors

3. **Testing**: Intentionally break things to verify it works

4. **Two Buttons**: Refresh (hard reset) and Try Again (soft reset)

5. **Development vs Production**: Show details in dev, hide in production

6. **Limitations**: Doesn't catch event handlers or async errors (use try-catch)

7. **User Experience**: Graceful degradation instead of blank screen

8. **Professional Practice**: Production apps need error handling

**Congratulations!** Your application now has professional error handling. Users will never see a blank white screen again! 🎉

---

## What's Next?

Now that we have error handling in place, we'll focus on **accessibility**:

- Running accessibility audits
- Testing keyboard navigation
- Adding ARIA labels where needed
- Ensuring semantic HTML
- Testing with screen readers

This will ensure your portfolio is usable by everyone, including users with disabilities.
