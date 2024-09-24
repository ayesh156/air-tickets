import {AiOutlineGlobal} from "react-icons/ai";
import {footerItems, footerDetailsImg, footerLinks, socialMediaLinks} from "../constants/index.jsx";
import {useEffect, useState} from "react"; // Import data
import {FaPlus, FaMinus} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const Footer = () => {

    return (
        <footer>
            <div className="bottom-0 left-0 right-0 border-b-2 md:border-b-0 bg-[#F3F3F3] z-50">

                <div
                    className="hidden pt-5 pb-11 px-[3.5rem] mx-auto md:flex flex-col justify-between max-w-screen-xl items-center">
                    {/* Footer columns grid */}

                    {/* Footer links for large screens */}
                    <ul className="space-x-4 md:space-x-16 md:flex text-titleGray text-md items-center justify-end hidden">
                        {/* Map through footer links */}
                        {footerLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.href}
                                >
                                    {link.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>


                    <div className="grid grid-cols-4  px-[0.5rem] mt-12 w-full">
                        {/* Map through footer items to create columns */}
                        {footerItems.map((column, index) => {

                            return (
                                <div key={index}
                                     className={`text-titleGray ${index === 0 ? 'w-[24rem]' : index === 1 ? 'pl-[10rem]' : index === 2 ? 'pl-[4rem]' : 'pl-[1.1rem]'}`}>
                                    <div className="flex md:justify-start justify-between md:mb-4 items-center">
                                        {/* Footer section title */}
                                        <span
                                            className="text-md cursor-pointer"
                                        >
                                            {column.title}
                                        </span>

                                    </div>
                                    {/* Render items only if open on small screens; always show on medium and larger screens */}
                                    <ul className={`space-y-2 overflow-hidden transition-all duration-500`}>
                                        {column.items.map((item, i) => (
                                            <li key={i}
                                                className={`flex items-center transition-all text-sm ${index === 0 ? 'cursor-default' : 'hover:text-black cursor-pointer'}`}>
                                                <NavLink
                                                    to={item.link}
                                                    onClick={(e) => {
                                                        if (index === 0) {
                                                            e.preventDefault(); // Stop navigation for dropdowns
                                                        }
                                                    }}
                                                >
                                                    {item.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}

                    </div>

                    <div className="border-b border-b-gray-200 my-6 w-full"></div>

                    <div className="grid grid-cols-3 px-[0.5rem] w-full">
                        {footerDetailsImg.map((section, index) => (
                            <div key={index}>
                                <span className="text-[12px] text-titleGray">{section.title}</span>
                                {section.images.length > 0 && (
                                    <div className="flex flex-row items-center gap-3 pt-2">
                                        {section.images.map((image, imgIndex) => (
                                            <img key={imgIndex} src={image} alt="" className="h-8" />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <div className="bg-primaryBlue text-center flex flex-col justify-center items-center py-8">
                <ul className="space-x-4 text-primaryBlue flex items-center md:items-end">
                    {/* Map through social media links */}
                    {socialMediaLinks.map((social, index) => (
                        <li key={index}
                            className="flex items-center bg-[#CEE5F5] transition-all duration-150 hover:text-black rounded-2xl justify-center h-8 w-8">
                            <a href={social.link} target="_blank" rel="noopener noreferrer">
                                {social.icon}
                            </a>
                        </li>
                    ))}
                </ul>
                <span className="mt-4 text-blue-100 w-full text-[14px]">2024 © Star Cells (Pvt) Ltd | Designed & Developed by Silicon Radon Networks (Pvt) Ltd.</span>
            </div>
        </footer>

    )
}

export default Footer;
