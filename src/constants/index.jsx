import mall from "../assets/nav-img/mall.svg";
import flight from "../assets/nav-img/flight.svg";
import menu_dots from "../assets/nav-img/menu-dots.svg";
import user from "../assets/nav-img/user.svg";
import customer_support from "../assets/nav-img/customer-support.svg";

import {LiaFacebookF} from "react-icons/lia";
import {FaYoutube} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";
import {TiSocialTwitter} from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";

import mastercard from "../assets/payment-method-img/mastercard-logo.png";
import visa from "../assets/payment-method-img/visa-logo.jpg";
import american_express from "../assets/payment-method-img/american-express-logo.svg";
import union_pay from "../assets/payment-method-img/union-pay-logo.png";

import iata from "../assets/footer-img/iata-logo.jpg";
import iifa from "../assets/footer-img/iifa-logo.png";
import sn_initial from "../assets/footer-img/sn-initial-logo.jpg";

import s_img from "../assets/home-img/flag-img/Flag_of_Sri_Lanka.png";
import i_img from "../assets/home-img/flag-img/Flag_of_India.png";
import sp_img from "../assets/home-img/flag-img/Flag_of_Singapore.png";
import uk_img from "../assets/home-img/flag-img/Flag_of_United_Kingdom.png";

export const footerDetailsImg = [
    {
        title: "Member of",
        images: [iata] // No images in this section
    },
    {
        title: "Awards",
        images: [iifa,sn_initial] // No images in this section
    },
    {
        title: "We Accept",
        images: [mastercard, visa, american_express, union_pay] // Images for payment methods
    }
];

//navItems
export const navItems = [
    {path: "/", img: flight, link: "Flights"},
    {path: "/mall", img: mall, link: "Mall"},
    {
        path: "/more", img: menu_dots, link: "More+", children: [
            {path: "/offers-us", link: "Offers"},
            {path: "/why-bookingairtickets", link: "Why BookingAirTickets"},
            {path: "/paymentoptions/instalmentpayment", link: "Installment Plans"},
        ]
    },

];

//systemItems
export const systemItems = [
    {path: "/customer-support", img: customer_support, link: "Customer Support"},
    {
        path: "/more", img: user, link: "My Account", children: [
            {path: "/account/login", link: "Login"},
            {path: "/account/register", link: "Register"},
            {path: "/my-bookings", link: "My Bookings"},
            {path: "/customer-support/make-payment", link: "Make Payment"},
            {path: "/customer-support/flights-cancel", link: "Cancel Booking"},
        ]
    },
];

//footerItems
export const footerItems = [
    {
        title: "BookingAirTickets Offers Lowest Air Fares, Hotel Bookings & Overseas Holiday Packages",
        items: [
            {
                label: "BookingAirTickets is a unique and first of its kind online travel company in Sri Lanka to provide affordable air tickets, hotel accommodations and exciting holiday packages. Now, we are the leading player for booking cheap air tickets to anywhere around the world. We provide a seamless experience to our customers, with a user friendly search engine, good pricing and discounts on air-tickets and hotel bookings, all in a click of a mouse, anywhere, any time.\n" +
                    "\n", link: "#"
            },
        ],
    },
    {
        title: "Our Products",
        items: [
            {label: "Flight Tickets", link: "/"},
        ],
    },
    {
        title: "Payments Information",
        items: [
            {label: "Payment Options", link: "#"},
            {label: "Bank Transfer", link: "#"},
            {label: "Credit/Debit Cards", link: "#"},
            {label: "Instalment Plans", link: "#"},
        ],
    },
    {
        title: "Other Information",
        items: [
            {label: "Offers & Promotions", link: "#"},
            {label: "Airlines", link: "#"},
            {label: "Airline Web Check-In", link: "#"},
            {label: "Sitemap", link: "#"},
            {label: "Testimonials", link: "#"},
            {label: "Security", link: "#"},
        ],
    }
];

//footerMediaLinks
export const socialMediaLinks = [
    {
        name: "Facebook",
        link: "https://facebook.com",
        icon: <LiaFacebookF className="text-md"/>,
    },
    {
        name: "YouTube",
        link: "https://youtube.com",
        icon: <FaYoutube className="text-md"/>,
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com",
        icon: <FaLinkedinIn className="text-md"/>,
    },
    {
        name: "Instagram",
        link: "https://instagram.com",
        icon: <FaInstagram className="text-md"/>,
    },
    {
        name: "Twitter",
        link: "https://x.com",
        icon: <TiSocialTwitter className="text-md"/>,
    },
];

// footerLinks
export const footerLinks = [
    {href: "/about", text: "About Us"},
    {href: "/privacy", text: "Privacy Policy"},
    {href: "/termsconditions", text: "Terms & Conditions"},
    {href: "/customer-support", text: "Customer Support"},
    {href: "/faq", text: "FAQ"},
    {href: "/contact", text: "Contact Us"}
];

// travellersCategoryArray
export const travellersCategoryArray = [
    { label: "Adults", age: null, count: 1 },
    { label: "Child", age: "(2-11 YRS)", count: 0 },
    { label: "Infants", age: "(Below 2 YRS)", count: 0 }
];

// travellersClass
export const travellersClass = ["Economy", "Premium Economy", "Business", "First"];

export const citiesItem = [
    {
        title: 'Sri Lanka',
        img: s_img,
        options: [
            {label: 'Colombo', description: 'Bandaranaike Intl Arpt', flight: "CMB"},
            {label: 'Jaffna', description: 'Jaffna Intl Arpt', flight: "JAF"},
        ],
    },
    {
        title: 'India',
        img: i_img,
        options: [
            {label: 'Delhi', description: 'Delhi Indira Gandhi Intl', flight: "DEL"},
            {label: 'Chennai', description: 'Chennai Arpt', flight: "MAA"},
        ],
    },
    {
        title: 'Singapore',
        img: sp_img,
        options: [
            {label: 'Singapore', description: 'Changi Intl Arpt', flight: "SIN"},
        ],
    },
    {
        title: 'UK',
        img: uk_img,
        options: [
            {label: 'London', description: 'London, UK - All Airports (LON)', flight: "LON"},
        ],
    },
];