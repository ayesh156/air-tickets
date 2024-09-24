import mall from "../assets/nav-img/mall.svg";
import flight from "../assets/nav-img/flight.svg";
import menu_dots from "../assets/nav-img/menu-dots.svg";
import user from "../assets/nav-img/user.svg";
import customer_support from "../assets/nav-img/customer-support.svg";

//navItems
export const navItems = [
  {path: "/", img: flight, link: "Flights"},
  {path: "/mall", img: mall, link: "Mall"},
  {path: "/more", img: menu_dots, link: "More+", children: [
      {path: "/offers-us", link: "Offers"},
      {path: "/why-findmyfare", link: "Why Findmyfare"},
      {path: "/paymentoptions", link: "Installment Plans"},
    ]},

];

//systemItems
export const systemItems = [
    {path: "/customer-support", img: customer_support, link: "Customer Support"},
    {path: "/more", img: user, link: "My Account", children: [
            {path: "/account/login", link: "Login"},
            {path: "/account/register", link: "Register"},
            {path: "/my-bookings", link: "My Bookings"},
            {path: "/cancel-booking", link: "Cancel Booking"},
        ]},

];
