import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Construction from "./pages/Construction.jsx";

const router = createBrowserRouter([
    {
        path: "/", // Base path for the application
        element: <App />, // Main application component
        children: [ // Child routes under the base path
            {
                path: "/", // Home route
                element: <Construction />, // Component to render for the home route
            },
        ]
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>,
)
