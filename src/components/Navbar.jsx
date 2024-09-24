import {NavLink} from "react-router-dom";
import logo from "../assets/logo.png";
import {navItems, systemItems} from "../constants/index.jsx"; // Import data
import {useState} from "react";
import {FaXmark} from "react-icons/fa6";
import {FaBars} from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);// State to manage mobile menu visibility
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);// State to manage mobile menu visibility
    const [isSysMenuOpen, setIsSysMenuOpen] = useState(false);// State to manage mobile menu visibility
    const [isMoreMenuActive, setMoreMenuActive] = useState(false);
    const [isSysMenuActive, setSysMenuActive] = useState(false);
    const [isHoveringMore, setIsHoveringMore] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle mobile menu open/close
        setIsSysMenuOpen(false);
        setIsMoreMenuOpen(false);
    }

    const toggleMoreMenu = () => {
        setIsMoreMenuOpen(!isMoreMenuOpen); // Toggle mobile menu open/close
        setIsSysMenuOpen(false);
        setMoreMenuActive(!isMoreMenuActive); // Toggle the active state
        setSysMenuActive(false); // Toggle the active state
    }

    const toggleSysMenu = () => {
        setIsSysMenuOpen(!isSysMenuOpen); // Toggle mobile menu open/close
        setIsMoreMenuOpen(false);
        setSysMenuActive(!isSysMenuActive); // Toggle the active state
        setMoreMenuActive(false); // Toggle the active state
    }


    return (
        <>
            <header className="fixed top-0 left-0 border-b right-0 bg-white z-50">
                <nav className='md:px-3 px-3 mx-auto flex max-w-screen-xl items-center'>
                    <img src={logo} alt="Logo" className="h-[50px] pt-4"/>

                    <div className="flex justify-between w-full">
                        <ul className='md:flex ml-4 text-sm font-semibold hidden'>
                            {
                                navItems.map((item, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={(e) => {
                                            if (item.path === "/more") {
                                                e.preventDefault(); // Stop navigation for dropdowns
                                                toggleMoreMenu(); // Open or close the dropdown
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            if (item.path === "/more") {
                                                toggleMoreMenu(); // Close the dropdown
                                            }
                                        }}
                                    >
                                        <li>
                                            <NavLink
                                                to={item.path}
                                                onMouseEnter={(e) => {
                                                    if (item.path === "/more") {
                                                        e.preventDefault(); // Stop navigation for dropdowns
                                                        setIsHoveringMore(true); // Keep track of hovering
                                                    }
                                                }}
                                                onClick={(e) => {
                                                    e.preventDefault(); // Stop navigation for dropdowns
                                                }}
                                            >
                                                {({isActive}) => (
                                                    <div
                                                        className={`flex flex-col uppercase items-center text-[12px] transition-transform hover:bg-[#056C9D] hover:text-white duration-300 ease-in-out px-1 nav-item py-[0.4rem] ${
                                                            isActive || (isMoreMenuActive && item.path === "/more") ? 'nav-active' : 'bg-transparent'
                                                        }`}
                                                    >
                                                        <img src={item.img} className="h-5 w-14 nav-icon mb-1"
                                                             alt={item.img}/>
                                                        {item.link}
                                                    </div>
                                                )}
                                            </NavLink>
                                        </li>

                                        {/* Dropdown for children items */}
                                        {item.path === "/more" && isHoveringMore && (
                                            <div className="relative">
                                                {/* Arrow */}
                                                <div
                                                    className={`absolute top-[-10px] left-5 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[10px] border-b-[#F8F8F8]
            transition-opacity duration-300 ${isMoreMenuOpen ? 'opacity-100 delay-300' : 'opacity-0'}`}
                                                ></div>
                                                <div
                                                    className="absolute top-[-10px] bg-[#F8F8F8] left-[-40px] shadow-xl mt-2 w-36">
                                                    <ul className={`flex flex-col overflow-hidden transition-all ease-out duration-300 ${isMoreMenuOpen ? 'h-[6.8rem]' : 'h-0'}`}>
                                                        {item.children.map((child, childIndex) => (
                                                            <li key={childIndex}>
                                                                <NavLink
                                                                    to={child.path}
                                                                    className="block px-4 py-2 font-normal hover:bg-[#056C9D] hover:text-white"
                                                                    onClick={toggleMoreMenu} // Close the dropdown on click
                                                                >
                                                                    {child.link}
                                                                </NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))
                            }
                        </ul>

                        <ul className='md:flex items-center ml-4 text-sm font-semibold hidden'>
                            {
                                systemItems.map((item, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={(e) => {
                                            if (item.path === "/more") {
                                                e.preventDefault(); // Stop navigation for dropdowns
                                                toggleSysMenu(); // Open or close the dropdown
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            if (item.path === "/more") {
                                                toggleSysMenu(); // Close the dropdown
                                            }
                                        }}
                                    >
                                        <li>
                                            <NavLink
                                                to={item.path}
                                                onMouseEnter={(e) => {
                                                    if (item.path === "/more") {
                                                        e.preventDefault(); // Stop navigation for dropdowns
                                                        setIsHoveringMore(true); // Keep track of hovering
                                                    }
                                                }}
                                                onClick={(e) => {
                                                    e.preventDefault(); // Stop navigation for dropdowns
                                                }}
                                            >
                                                {({isActive}) => (
                                                    <div
                                                        className={`flex flex-row uppercase items-center text-[12px] transition-transform hover:bg-[#056C9D] hover:text-white duration-300 ease-in-out nav-item py-[0.9rem] px-4 ${
                                                            isActive || (isSysMenuActive && item.path === "/more") ? 'nav-active' : 'bg-transparent'
                                                        }`}
                                                    >
                                                        <img src={item.img} className="h-6 w-6 nav-icon mb-1 mr-2"
                                                             alt={item.img}/>
                                                        {item.link}
                                                    </div>
                                                )}
                                            </NavLink>
                                        </li>

                                        {/* Dropdown for children items */}
                                        {item.path === "/more" && isHoveringMore && (
                                            <div className="relative">
                                                {/* Arrow */}
                                                <div
                                                    className={`absolute top-[-10px] left-[60px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[10px] border-b-[#F8F8F8]
            transition-opacity duration-300 ${isSysMenuOpen ? 'opacity-100 delay-300' : 'opacity-0'}`}
                                                ></div>
                                                <div
                                                    className="absolute top-[-10px] bg-[#F8F8F8] shadow-lg mt-2 w-36">
                                                    <ul className={`flex flex-col overflow-hidden transition-all ease-out duration-300 ${isSysMenuOpen ? 'h-[9.1rem]' : 'h-0'}`}>
                                                        {item.children.map((child, childIndex) => (
                                                            <li key={childIndex}>
                                                                <NavLink
                                                                    to={child.path}
                                                                    className="block px-4 py-2 font-normal hover:bg-[#056C9D] hover:text-white"
                                                                    onClick={toggleMoreMenu} // Close the dropdown on click
                                                                >
                                                                    {child.link}
                                                                </NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))
                            }
                        </ul>

                    </div>
                    {/*mobile menu btn, display mobile screen*/}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className='cursor-pointer'>
                        <span
                            className={`transition-transform duration-300 text-[#056C9D] ease-in-out ${isMenuOpen ? 'rotate-180' : ''}`}>
                            {isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>}
                        </span>
                        </button>
                    </div>
                </nav>

            </header>
            {/*menu items only for mobile*/}
            <div className="mt-[3.2rem]">
                <ul className={`md:hidden overflow-hidden block gap-12 text-lg ${isMenuOpen ? `w-full transition-all ease-out duration-150 ${isMoreMenuOpen ? 'h-[25.3rem]' : isSysMenuOpen ? 'h-[25.3rem]' : 'h-[16.3rem]'}` : 'h-0'}`}>
                    {
                        navItems.map((item, index) => (
                            <div key={index}>
                                <li>
                                    <NavLink
                                        to={item.path}
                                        onClick={(e) => {
                                            if (item.path === "/more") {
                                                e.preventDefault(); // Stop navigation for dropdowns
                                                toggleMoreMenu(); // Close the menu after clicking
                                            }
                                        }}
                                    >
                                        {({isActive}) => (
                                            <div
                                                className={`flex flex-row uppercase text-[12px] font-semibold transition-transform hover:bg-[#056C9D] hover:text-white duration-300 ease-in-out px-1 nav-item py-3 ${isActive || (isMoreMenuActive && item.path === "/more") ? 'nav-active' : 'bg-transparent'}`}
                                            >
                                                <img src={item.img} className="h-[1.1rem] w-14 mt-1 nav-icon"
                                                     alt={item.img}/>
                                                {item.link}
                                            </div>
                                        )}
                                    </NavLink>
                                </li>

                                {/* Dropdown for mobile */}
                                {item.path === "/more" && (
                                    <ul className={`text-[14px] bg-[#F8F8F8] font-medium overflow-hidden ${isMoreMenuOpen ? 'w-full transition-all ease-out duration-150 h-[9rem]' : 'h-0'}`}>
                                        {item.children.map((child, childIndex) => (
                                            <li key={childIndex}
                                                className="border-b pl-6 border-b-gray-200 text-gray-500 hover:text-black transition-all ease-out duration-150">
                                                <NavLink
                                                    to={child.path}
                                                    className="block py-2"
                                                >
                                                    {child.link}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))
                    }

                    {/* Map through systemItems */}
                    {
                        systemItems.map((item, index) => (
                            <div key={index}>
                                <li>
                                    <NavLink
                                        to={item.path}
                                        onClick={(e) => {
                                            if (item.path === "/more") {
                                                e.preventDefault(); // Stop navigation for dropdowns
                                            }
                                            toggleSysMenu(); // Toggle the submenu
                                        }}
                                    >
                                        {({isActive}) => (
                                            <div
                                                className={`flex flex-row uppercase text-[12px] font-semibold transition-transform hover:bg-[#056C9D] hover:text-white duration-300 ease-in-out px-1 nav-item py-3 ${isActive || (isSysMenuActive && item.path === "/more") ? 'nav-active' : 'bg-transparent'}`}
                                            >
                                                <img src={item.img} className="h-[1.1rem] w-14 mt-1 nav-icon"
                                                     alt={item.img}/>
                                                {item.link}
                                            </div>
                                        )}
                                    </NavLink>
                                </li>

                                {/* Dropdown for /more in systemItems */}
                                {item.path === "/more" && (
                                    <ul className={`text-[14px] bg-[#F8F8F8] font-medium overflow-hidden ${isSysMenuOpen ? 'w-full transition-all ease-out duration-150 h-[9rem]' : 'h-0'}`}>
                                        {item.children.map((child, childIndex) => (
                                            <li key={childIndex}
                                                className="border-b pl-6 border-b-gray-200 text-gray-500 hover:text-black transition-all ease-out duration-150">
                                                <NavLink
                                                    to={child.path}
                                                    className="block py-2"
                                                >
                                                    {child.link}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))
                    }

                </ul>
            </div>

        </>
    );
};

export default Navbar;
