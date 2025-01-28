// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import ProgramsDetail from "./pages/ProgramDetail";
import ProgramsEdit from "./pages/ProgramEdit";
import ProgramsIndex from "./pages/ProgramIndex";
import ProgramNew from "./pages/ProgramNew";

const router = createBrowserRouter([
  {
    path: "/", // The root path
    element: <App />, // Renders the App component for the home page
    children: [
      {
        path: "/programs",
        element: <ProgramsIndex />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/api/programs`),
      },
      {
        path: "/programs/new",
        element: <ProgramNew />,
      },
      {
        path: "/programs/:id",
        element: <ProgramsDetail />,
      },
      {
        path: "/programs/:id/edit",
        element: <ProgramsEdit />,
      },
    ],
  },
  // Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
