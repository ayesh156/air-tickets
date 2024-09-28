import mall from "../assets/nav-img/mall.svg";
import flight from "../assets/nav-img/flight.svg";
import menu_dots from "../assets/nav-img/menu-dots.svg";
import user from "../assets/nav-img/user.svg";
import customer_support from "../assets/nav-img/customer-support.svg";

import {LiaFacebookF} from "react-icons/lia";
import {FaYoutube} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";
import {TiSocialTwitter} from "react-icons/ti";
import {FaLinkedinIn} from "react-icons/fa6";

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

import air_asia_img from "../assets/home-img/hero-slider-image/Air-Asia-FM.jpg";
import madness_img from "../assets/home-img/hero-slider-image/Travel-Madness-FM.jpg";
import banner_img from "../assets/home-img/hero-slider-image/Home-Banner-FM.jpg";
import indigo_img from "../assets/home-img/hero-slider-image/Indigo-Flights-FM.jpg";
import chennai_img from "../assets/home-img/hero-slider-image/Flights-to-Chennai-FM.jpg";

import s_airline_img from "../assets/home-img/airline_slider_img/srilankan-airline.png";
import j_airline_img from "../assets/home-img/airline_slider_img/japan-airlines-jal-logo.png";
import a_airline_img from "../assets/home-img/airline_slider_img/american-airlines-logo.png";
import c_airline_img from "../assets/home-img/airline_slider_img/china-airlines-logo.png";
import t_airline_img from "../assets/home-img/airline_slider_img/turkish-airlines-logo.png";
import m_airline_img from "../assets/home-img/airline_slider_img/malaysia-airlines-logo.png";
import au_airline_img from "../assets/home-img/airline_slider_img/Austrian_Airlines-logo.png";
import p_airline_img from "../assets/home-img/airline_slider_img/pia-pakistan-international-airlines.png";
import si_airline_img from "../assets/home-img/airline_slider_img/singapore-airlines-logo.png";
import e_airline_img from "../assets/home-img/airline_slider_img/Emirates_Airlines-logo.png";

import a_payment_img from "../assets/home-img/payment-img/american-express.svg";
import g_payment_img from "../assets/home-img/payment-img/google-wallet.svg";
import ma_payment_img from "../assets/home-img/payment-img/maestro.svg";
import m_payment_img from "../assets/home-img/payment-img/mastercard.svg";
import v_payment_img from "../assets/home-img/payment-img/visa.svg";
import p_payment_img from "../assets/home-img/payment-img/paypal.svg";
import s_payment_img from "../assets/home-img/payment-img/skrill.svg";
import u_payment_img from "../assets/home-img/payment-img/unionpay.svg";
import sh_payment_img from "../assets/home-img/payment-img/shopify.svg";
import az_payment_img from "../assets/home-img/payment-img/amazon.svg";

import fares_img1 from "../assets/home-img/fares_img/smCX.gif";
import fares_img2 from "../assets/home-img/fares_img/smCA.gif";
import fares_img3 from "../assets/home-img/fares_img/smEK.gif";
import fares_img4 from "../assets/home-img/fares_img/smQR.gif";

// footerDetailsImg
export const footerDetailsImg = [
    {
        title: "Member of",
        images: [iata] // No images in this section
    },
    {
        title: "Awards",
        images: [iifa, sn_initial] // No images in this section
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
    {label: "Adults", age: null, count: 1},
    {label: "Child", age: "(2-11 YRS)", count: 0},
    {label: "Infants", age: "(Below 2 YRS)", count: 0}
];

// travellersClass
export const travellersClass = ["Economy", "Premium Economy", "Business", "First"];

// citiesItem
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

// homeHeroImgSlider
export const homeHeroImgSlider = [
    {
        image: air_asia_img,
        title: "Fly with Air Asia",
        label: "Airfares from Colombo to Bangkok, Kuala Lumpur and many more"
    },
    {image: madness_img, title: "Travel Madness", label: "Up to 20% discount on flights"},
    {image: banner_img, title: "Split Pay", label: "Split your payment into 3x Installments"},
    {image: indigo_img, title: "Book Indigo Flight Tickets", label: "From Colombo to India and many more"},
    {image: chennai_img, title: "Flight Tickets to India", label: "Reserve your seat today!"},
]

// partnersImgSlider
export const partnersImgSlider = [
    {
    title: "Airline Partners",
    label:"Travel around the world with our airline partners.",
    images:[
        {image:s_airline_img, link:"#"},
        {image:j_airline_img, link:"#"},
        {image:a_airline_img, link:"#"},
        {image:c_airline_img, link:"#"},
        {image:t_airline_img, link:"#"},
        {image:m_airline_img, link:"#"},
        {image:au_airline_img, link:"#"},
        {image:p_airline_img, link:"#"},
        {image:si_airline_img, link:"#"},
        {image:e_airline_img, link:"#"},
    ]
    },
    {
        title: "Payment Partners",
        label:"Wide range of payment options with our bank partners.",
        images:[
            {image:u_payment_img, link:"#"},
            {image:s_payment_img, link:"#"},
            {image:p_payment_img, link:"#"},
            {image:v_payment_img, link:"#"},
            {image:m_payment_img, link:"#"},
            {image:ma_payment_img, link:"#"},
            {image:g_payment_img, link:"#"},
            {image:a_payment_img, link:"#"},
            {image:sh_payment_img, link:"#"},
            {image:az_payment_img, link:"#"},
        ]
    }
];

// fareData
export const fareData = {
    October: [
        {
            to: "Sydney",
            oldPrice: "LKR 316,395",
            newPrice: "LKR 227,897",
            airline: "Cathay Pacific",
            date: "28/10/2024",
            image: fares_img2,
            link: "/flights/sydney"
        },
        {
            to: "Sydney",
            oldPrice: "LKR 316,395",
            newPrice: "LKR 227,897",
            airline: "Cathay Pacific",
            date: "29/10/2024",
            image: fares_img2,
            link: "/flights/sydney"
        },
        {
            to: "Sydney",
            oldPrice: "LKR 316,395",
            newPrice: "LKR 227,897",
            airline: "Cathay Pacific",
            date: "30/10/2024",
            image: fares_img4,
            link: "/flights/sydney"
        },
        {
            to: "Sydney",
            oldPrice: "LKR 316,395",
            newPrice: "LKR 227,897",
            airline: "Cathay Pacific",
            date: "31/10/2024",
            image: fares_img2,
            link: "/flights/sydney"
        },
        {
            to: "Sydney",
            oldPrice: "LKR 316,395",
            newPrice: "LKR 227,897",
            airline: "Cathay Pacific",
            date: "01/10/2024",
            image: fares_img1,
            link: "/flights/sydney"
        },
        {
            to: "Sydney",
            oldPrice: "LKR 316,395",
            newPrice: "LKR 227,897",
            airline: "Cathay Pacific",
            date: "02/10/2024",
            image: fares_img2,
            link: "/flights/sydney"
        },
        {
            to: "Sydney",
            oldPrice: "LKR 316,395",
            newPrice: "LKR 227,897",
            airline: "Cathay Pacific",
            date: "03/10/2024",
            image: fares_img3,
            link: "/flights/sydney"
        },
        {
            to: "Sydney",
            oldPrice: "LKR 316,395",
            newPrice: "LKR 227,897",
            airline: "Cathay Pacific",
            date: "04/10/2024",
            image: fares_img4,
            link: "/flights/sydney"
        }
    ],
    November: [
        {
            to: "New York",
            oldPrice: "LKR 400,000",
            newPrice: "LKR 350,000",
            airline: "Singapore Airlines",
            date: "05/11/2024",
            image: fares_img4,
            link: "/flights/newyork"
        },
        {
            to: "New York",
            oldPrice: "LKR 400,000",
            newPrice: "LKR 350,000",
            airline: "Singapore Airlines",
            date: "06/11/2024",
            image: fares_img3,
            link: "/flights/newyork"
        },
        {
            to: "New York",
            oldPrice: "LKR 400,000",
            newPrice: "LKR 350,000",
            airline: "Singapore Airlines",
            date: "07/11/2024",
            image: fares_img1,
            link: "/flights/newyork"
        },
        {
            to: "New York",
            oldPrice: "LKR 400,000",
            newPrice: "LKR 350,000",
            airline: "Singapore Airlines",
            date: "08/11/2024",
            image: fares_img2,
            link: "/flights/newyork"
        },
        {
            to: "New York",
            oldPrice: "LKR 400,000",
            newPrice: "LKR 350,000",
            airline: "Singapore Airlines",
            date: "09/11/2024",
            image: fares_img1,
            link: "/flights/newyork"
        },
        {
            to: "New York",
            oldPrice: "LKR 400,000",
            newPrice: "LKR 350,000",
            airline: "Singapore Airlines",
            date: "10/11/2024",
            image: fares_img2,
            link: "/flights/newyork"
        },
        {
            to: "New York",
            oldPrice: "LKR 400,000",
            newPrice: "LKR 350,000",
            airline: "Singapore Airlines",
            date: "11/11/2024",
            image: fares_img3,
            link: "/flights/newyork"
        },
        {
            to: "New York",
            oldPrice: "LKR 400,000",
            newPrice: "LKR 350,000",
            airline: "Singapore Airlines",
            date: "12/11/2024",
            image: fares_img4,
            link: "/flights/newyork"
        }
    ],
    December: [
        {
            to: "London",
            oldPrice: "LKR 500,000",
            newPrice: "LKR 450,000",
            airline: "British Airways",
            date: "12/12/2024",
            image: fares_img3,
            link: "/flights/london"
        },
        {
            to: "London",
            oldPrice: "LKR 500,000",
            newPrice: "LKR 450,000",
            airline: "British Airways",
            date: "13/12/2024",
            image: fares_img4,
            link: "/flights/london"
        },
        {
            to: "London",
            oldPrice: "LKR 500,000",
            newPrice: "LKR 450,000",
            airline: "British Airways",
            date: "14/12/2024",
            image: fares_img1,
            link: "/flights/london"
        },
        {
            to: "London",
            oldPrice: "LKR 500,000",
            newPrice: "LKR 450,000",
            airline: "British Airways",
            date: "15/12/2024",
            image: fares_img3,
            link: "/flights/london"
        },
        {
            to: "London",
            oldPrice: "LKR 500,000",
            newPrice: "LKR 450,000",
            airline: "British Airways",
            date: "16/12/2024",
            image: fares_img4,
            link: "/flights/london"
        },
        {
            to: "London",
            oldPrice: "LKR 500,000",
            newPrice: "LKR 450,000",
            airline: "British Airways",
            date: "17/12/2024",
            image: fares_img2,
            link: "/flights/london"
        },
        {
            to: "London",
            oldPrice: "LKR 500,000",
            newPrice: "LKR 450,000",
            airline: "British Airways",
            date: "18/12/2024",
            image: fares_img3,
            link: "/flights/london"
        },
        {
            to: "London",
            oldPrice: "LKR 500,000",
            newPrice: "LKR 450,000",
            airline: "British Airways",
            date: "19/12/2024",
            image: fares_img4,
            link: "/flights/london"
        }
    ],
};

// fareMonths
export const fareMonths = ['October', 'November', 'December']; // Array of months
