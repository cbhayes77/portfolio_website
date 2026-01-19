================================================================================
CLASS 1: MAIN.JSX STEP-BY-STEP GUIDE - REACT ROUTER SETUP
================================================================================

## OVERVIEW FOR INSTRUCTOR

This guide walks students through building main.jsx progressively. We'll start
with the basics and build up to a working router with one test route. Students
should have a blank main.jsx file open.

NOTE: We're only building the router infrastructure in this file. The App
component and pages will be created later in Class 1.

========================================================================
STEP 1: BASIC REACT IMPORTS
========================================================================

INSTRUCTOR SAYS:
"Let's start by importing the basic React dependencies we need to render our
application."

## STUDENTS TYPE:

import React from "react";
import ReactDOM from "react-dom/client";

## EXPLAIN:

- React - Core React library
- ReactDOM - Provides DOM-specific methods (rendering to browser)
- /client - The modern React 18+ way to create roots

========================================================================
STEP 2: IMPORT REACT ROUTER
========================================================================

INSTRUCTOR SAYS:
"Now we'll import React Router. This library will handle all our page
navigation without full page refreshes."

## STUDENTS ADD:

import { createBrowserRouter, RouterProvider } from "react-router-dom";

## EXPLAIN:

- createBrowserRouter - Creates a router instance using browser history API
- RouterProvider - Component that provides routing context to our app
- This is the modern React Router v6.4+ approach (data router)

## CURRENT CODE SHOULD LOOK LIKE:

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

========================================================================
STEP 3: IMPORT APP COMPONENT (PLACEHOLDER)
========================================================================

INSTRUCTOR SAYS:
"We need to import our App component. We haven't created it yet, but we're
setting up the import now."

## STUDENTS ADD:

import App from "./App.jsx";

## EXPLAIN:

- App.jsx will be our main layout component
- It will wrap all our pages
- We'll create this file in just a few minutes

## CURRENT CODE SHOULD LOOK LIKE:

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

================================================================================
STEP 4: IMPORT CSS
================================================================================

INSTRUCTOR SAYS:
"Let's import our global styles. This CSS file is already provided in your
starter template."

## STUDENTS ADD:

import "./index.css";

## EXPLAIN:

- This loads all our Tailwind CSS and custom styles
- It's imported once in main.jsx and applies to the entire app

## CURRENT CODE SHOULD LOOK LIKE:

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";

================================================================================
STEP 5: CREATE ROUTER CONFIGURATION - EMPTY
================================================================================

INSTRUCTOR SAYS:
"Now let's create our router. We'll start simple with just the basic structure."

## STUDENTS ADD:

const router = createBrowserRouter([
{
path: "/",
element: <App />,
},
]);

## EXPLAIN:

- createBrowserRouter() takes an array of route objects
- path: "/" - This is the root/home route
- element: <App /> - This is what renders when you visit "/"
- We're creating a constant called router that holds our route configuration

ASK STUDENTS:
"What URL path would match this route?" (Answer: localhost:5173/)

## CURRENT CODE SHOULD LOOK LIKE:

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";

const router = createBrowserRouter([
{
path: "/",
element: <App />,
},
]);

================================================================================
STEP 6: ADD CHILDREN ROUTES STRUCTURE
================================================================================

INSTRUCTOR SAYS:
"App will be our layout wrapper. Inside it, we'll have different pages. Let's
add a 'children' array to hold those page routes."

## STUDENTS MODIFY THE ROUTER TO:

const router = createBrowserRouter([
{
path: "/",
element: <App />,
children: [

    ],

},
]);

## EXPLAIN:

- children array will hold all our page routes
- These child routes will render INSIDE the App component (in an Outlet)
- App provides the layout (navbar, footer), children provide the page content

## CURRENT CODE SHOULD LOOK LIKE:

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";

const router = createBrowserRouter([
{
path: "/",
element: <App />,
children: [

    ],

},
]);

================================================================================
STEP 7: RENDER THE APPLICATION
================================================================================

INSTRUCTOR SAYS:
"Now let's render our application to the DOM. This is what actually puts our
React app on the page."

## STUDENTS ADD AFTER THE ROUTER:

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);

## EXPLAIN:

- ReactDOM.createRoot() - Creates a React 18 root
- document.getElementById("root") - Finds the div with id="root" in index.html
- .render() - Renders our app into that div
- <React.StrictMode> - Development mode checks (helps find bugs)
- <RouterProvider router={router} /> - Provides our router to the entire app

## CURRENT CODE SHOULD LOOK LIKE:

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";

const router = createBrowserRouter([
{
path: "/",
element: <App />,
children: [

    ],

},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);

================================================================================
STEP 8: PAUSE - CREATE APP.JSX
================================================================================

INSTRUCTOR SAYS:
"Before we can test this, we need to create the App.jsx file. Let's do that
now."

SWITCH TO CREATING APP.JSX (See separate guide for App.jsx creation)

================================================================================
STEP 9: ADD HOME ROUTE (AFTER APP.JSX IS CREATED)
================================================================================

INSTRUCTOR SAYS:
"Now that we have App.jsx, let's add our first actual page route. We'll need
to import a Home component first."

## STUDENTS ADD TO THE IMPORTS SECTION (AFTER APP IMPORT):

// Portfolio pages
import Home from "./pages/Home.jsx";

## THEN MODIFY THE CHILDREN ARRAY:

children: [
{ index: true, element: <Home /> },
],

## EXPLAIN:

- Comment helps organize our imports
- index: true means this is the default child route (renders at "/")
- This Home component will render inside App's <Outlet />

## CURRENT CODE SHOULD LOOK LIKE:

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

// Portfolio pages
import Home from "./pages/Home.jsx";

import "./index.css";

const router = createBrowserRouter([
{
path: "/",
element: <App />,
children: [
{ index: true, element: <Home /> },
],
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);

================================================================================
STEP 10: PAUSE - CREATE A SIMPLE HOME.JSX
================================================================================

INSTRUCTOR SAYS:
"Let's create a very simple Home page just to test our routing."

CREATE pages/Home.jsx (See separate guide)

================================================================================
STEP 11: TEST THE APPLICATION
================================================================================

INSTRUCTOR SAYS:
"Let's test what we've built! Make sure your dev server is running."

## IN TERMINAL:

npm run dev

## STUDENTS SHOULD SEE:

- App running at localhost:5173
- Can visit the homepage and see their simple Home component

## TEST POINTS:

1. Does the page load?
2. Is the home content visible?
3. Are there any errors in the console?

================================================================================
WHAT WE'VE ACCOMPLISHED
================================================================================

✓ Set up React Router with createBrowserRouter
✓ Created router configuration with parent/child routes
✓ Imported and configured the App layout component
✓ Added our first page route (Home with index route)
✓ Rendered the application to the DOM
✓ Tested that routing works

================================================================================
KEY CONCEPTS COVERED
================================================================================

- React Router v6.4+ Data Router pattern
- Parent/child route relationships
- Index routes (default child route)
- RouterProvider for providing routing context
- React 18 createRoot API
- Import organization (grouping related imports)

================================================================================
COMMON STUDENT QUESTIONS
================================================================================

Q: "Why do we need index: true instead of path: '/'?"
A: In nested routes, index: true means "render this when the parent path
matches exactly." It's cleaner than repeating the parent path.

Q: "What's the difference between element: <App /> and children?"
A: element is what renders for that route. children are nested routes that
render INSIDE that element (in an Outlet).

Q: "Why React.StrictMode?"
A: It's a development tool that helps identify potential problems by running
extra checks and warnings. It doesn't affect production builds.

Q: "Do we need the .jsx extension in imports?"
A: Yes, with Vite we explicitly include file extensions. It's more explicit
and works better with modern JavaScript modules.

================================================================================
WHAT'S NEXT
================================================================================

In the rest of Class 1, we'll:

- Create the basic App.jsx layout structure
- Build Container and Section components
- Build the Button component
- See how everything connects together

================================================================================
TROUBLESHOOTING
================================================================================

ERROR: "Cannot find module './App.jsx'"

- Make sure App.jsx file is created in the src folder
- Check that the import path is correct

ERROR: "Cannot find module './pages/Home.jsx'"

- Make sure pages folder exists in src
- Make sure Home.jsx file is created
- Check capitalization (case-sensitive)

BLANK WHITE SCREEN:

- Check browser console for errors
- Make sure dev server is running
- Verify all imports are correct

================================================================================
END OF MAIN.JSX GUIDE
================================================================================
