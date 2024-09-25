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
import Mall from "./pages/Mall.jsx";
import InstalmentPayment from "./pages/InstalmentPayment.jsx";
import Offers from "./pages/Offers.jsx";
import WhyBookingAirTickets from "./pages/WhyBookingAirTickets.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import CancelBooking from "./pages/CancelBooking.jsx";
import MakePayment from "./pages/MakePayment.jsx";
import CustomerSupport from "./pages/CustomerSupport.jsx";

const router = createBrowserRouter([
    {
        path: "/", // Base path for the application
        element: <App />, // Main application component
        children: [ // Child routes under the base path
            {
                path: "/", // Home route
                element: <Home />, // Component to render for the home route
            },
            {
                path: "/mall",
                element: <Construction />,
            },
            {
                path: "/offers-us",
                element: <Construction />,
            },
            {
                path: "/why-bookingairtickets",
                element: <Construction />,
            },
            {
                path: "/paymentoptions/instalmentpayment",
                element: <Construction />,
            },
            {
                path: "/customer-support",
                element: <Construction />,
            },
            {
                path: "/account/login",
                element: <Construction />,
            },
            {
                path: "/account/register",
                element: <Construction />,
            },
            {
                path: "/my-bookings",
                element: <Construction />,
            },
            {
                path: "/customer-support/make-payment",
                element: <Construction />,
            },
            {
                path: "/customer-support/flights-cancel",
                element: <Construction />,
            },
            {
                path: "/about",
                element: <Construction />,
            },
            {
                path: "/privacy",
                element: <Construction />,
            },
            {
                path: "/termsconditions",
                element: <Construction />,
            },
            {
                path: "/faq",
                element: <Construction />,
            },
            {
                path: "/contact",
                element: <Construction />,
            },
        ]
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>,
)
