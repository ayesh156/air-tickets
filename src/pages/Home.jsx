import travel_img from '../assets/home-img/tourism-travel-img.png';
import splitpay_img from '../assets/home-img/splitpay.png';
import ar_img from '../assets/home-img/QR_Code_FMF.png';
import fa_img from '../assets/home-img/icons/fare-alert.png';
import rf_img from '../assets/home-img/icons/referral.png';
import qp_img from '../assets/home-img/icons/quick-pick.png';
import {useEffect, useState} from 'react';
import FlightOnWay from "../components/FlightOnWay.jsx";
import FlightRoundTrip from "../components/FlightRoundTrip.jsx";
import FlightMultiCity from "../components/FlightMultiCity.jsx";
import HomeHeroImageSlider from "../components/HomeHeroImageSlider.jsx";
import FaresSection from "../components/FaresSection.jsx";
import PartnerImageSlider from "../components/common/PartnerImageSlider.jsx";
import {partnersImgSlider} from "../constants/index.jsx";
import { FiMinus , FiPlus } from "react-icons/fi";

const Home = () => {
    const [divHeight, setDivHeight] = useState("31.6rem"); // Initial height for large screens
    const [isFooterSectionShow, setIsFooterSectionShow] = useState(true);// State to manage mobile menu visibility

    // Adjust height on component mount and window resize
    useEffect(() => {
        const updateHeight = () => {
            if (window.innerWidth <= 768) { // Small screen width (tablet and mobile)
                setDivHeight("45rem");
            } else {
                setDivHeight("31.6rem");
            }
        };

        window.addEventListener("resize", updateHeight);
        updateHeight(); // Call initially to set correct height

        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    const adjustHeight = (cityCount) => {
        const baseHeight = 31.6; // Initial height for one city

        // Check screen size
        const screenWidth = window.innerWidth;

        // Set different additional height based on screen width
        let additionalHeight;
        if (screenWidth >= 1200) { // Large screen
            additionalHeight = 4; // Less height increase per city
        } else if (screenWidth >= 768) { // Medium screen
            additionalHeight = 6;
        } else { // Small screen
            additionalHeight = 9; // More height increase per city
        }

        // Calculate the new height based on the city count
        const newHeight = baseHeight + (cityCount * additionalHeight);
        setDivHeight(`${newHeight}rem`);
    };

    const [activeContent, setActiveContent] = useState("oneWay"); // Default active content

    // Array of button names and their associated content identifiers
    const buttons = [
        {name: "One Way", content: "oneWay"},
        {name: "Round Trip", content: "roundTrip"},
        {name: "Multi City", content: "multiCity"}
    ];

    // Function to render the active content component
    const renderActiveContent = () => {
        switch (activeContent) {
            case "oneWay":
                return <FlightOnWay/>;
            case "roundTrip":
                return <FlightRoundTrip/>; // Replace with your actual component
            case "multiCity":
                return <FlightMultiCity adjustHeight={adjustHeight}/>; // Replace with your actual component
            default:
                return null;
        }
    };

    // Function to handle button clicks and set the active content
    const handleClick = (newContent) => {
        setActiveContent(newContent);
    };

    const toggleFooterSectionShow = () => {
        setIsFooterSectionShow(!isFooterSectionShow);
    }

    return (
        <div className="relative text-white w-full md:mt-12">
            <div className={`relative bg-[#02578D] lg:bg-[#D93B07]`} style={{height: divHeight}}>
                {/* Image and buttons container */}
                <div className="relative overflow-hidden" style={{height: divHeight}}>
                    <img className="absolute hidden lg:block bottom-[-2rem] h-96" src={travel_img} alt={travel_img}/>
                    <div className="flex flex-col justify-center h-full px-[28rem] pb-6">
                        <span className="text-2xl text-gray-200 pl-5 hidden lg:block">Introducing</span>
                        <img src={splitpay_img} alt={splitpay_img} className="w-64 hidden lg:block"/>
                        <div className="text-xl text-gray-200 w-[27rem] hidden lg:block">
                            <p>You can divide your flight ticket payments into 3 installments without any extra
                                fees.</p>
                        </div>
                    </div>
                </div>

                {/* Dynamically generating buttons using map */}
                <div className="absolute text-[12px] top-[3.2rem] font-semibold w-full">
                    <div className="flex 2xl:justify-start justify-center space-x-3 2xl:pl-[11rem]">
                        {buttons.map((button, index) => (
                            <button
                                key={index}
                                className={`px-3 pt-[2px] pb-[4px] rounded-2xl ${activeContent === button.content ? "bg-white text-gray-600" : "bg-[#989594] text-white"}`}
                                onClick={() => handleClick(button.content)} // Pass content here
                            >
                                {button.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content box that updates based on button click */}
                <div className="absolute top-20 mt-4 w-full flex justify-center">
                    {renderActiveContent()}
                </div>

                {/* New content with paragraph positioned absolutely */}
                <div
                    className={`lg:absolute h-[31.3rem] ${activeContent === "multiCity" ? divHeight > "31.6rem" ? "top-[40rem]" : "top-[29.7rem]" : "top-[21rem]"} px-1 sm:px-10 md:px-20 xl:px-48 w-full`}>
                    <HomeHeroImageSlider/>
                </div>
            </div>
            {/* Fares section */}
            <FaresSection/>

            {/* Partner image sliders */}
            <PartnerImageSlider data={partnersImgSlider[0]}/>
            <PartnerImageSlider data={partnersImgSlider[1]}/>

            {/* Section for promoting the Findmyfare app */}
            <div className="relative flex flex-col mt-12 text-black mb-5 mx-auto px-4 max-w-[72rem]">
                <h2 className="sm:text-2xl text-lg text-primaryOrange sm:font-semibold">
                    Get the Findmyfare App
                </h2>

                {/* Card with Text, OR Line, and Image */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-between border border-gray-200 px-10 py-5 mt-5 rounded-lg shadow-md">

                    {/* Left Side: Title, Description, Input */}
                    <div className="flex space-y-5 flex-col w-full md:w-[80%]">
                        <h3 className="text-xl font-semibold">
                            Text yourself a link
                        </h3>


                        {/* Input and Button */}
                        <div className="relative flex flex-col md9:flex-row items-center">
                            <input
                                type="text"
                                placeholder="Enter your phone number"
                                className="w-full p-3 rounded-sm py-2 border border-gray-300 focus:outline-none focus:border-primaryOrange"
                            />
                            <button
                                className="bg-primaryOrange md9:ml-7 mt-2 md9:mt-0 text-white md9:w-[14.5rem] w-full py-2 rounded-sm hover:bg-orange-600 transition-all duration-300">
                                Send
                            </button>
                        </div>

                        {/* Features with Icons */}
                        <div
                            className="relative flex flex-col md9:flex-row space-y-4 md9:space-y-0 md9:justify-between md9:items-center pt-2">
                            {/* Feature 1: "Get to know offers first" */}
                            <div className="flex flex-row gap-2">
                                <img
                                    src={fa_img}
                                    alt="Findmyfare App"
                                    className="h-7 w-7"
                                />
                                <h3 className="font-semibold sm:text-lg">Get to know offers first</h3>
                            </div>

                            {/* Feature 2: "Refer and earn" */}
                            <div className="flex flex-row gap-2">
                                <img
                                    src={rf_img}
                                    alt="Findmyfare App"
                                    className="h-7 w-7"
                                />
                                <h3 className="font-semibold sm:text-lg">Refer and earn</h3>
                            </div>

                            {/* Feature 3: "Passenger quick pick" */}
                            <div className="flex flex-row gap-2">
                                <img
                                    src={qp_img}
                                    alt="Findmyfare App"
                                    className="h-7 w-7"
                                />
                                <h3 className="font-semibold sm:text-lg">Passenger quick pick</h3>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-gray-500 text-[12px] mb-4 font-semibold">
                            By providing your number, you agree to receive a one-time automated text message with a link
                            to get the app. Our app offers promotions and booking services. No purchase necessary.
                        </p>
                    </div>

                    {/* Middle Vertical "OR" Line */}
                    <div className="md:flex hidden flex-col items-center justify-center mx-8">
                        <div className="flex-grow border-l border-gray-200 h-20"></div>
                        <span className="mx-2 text-gray-500">OR</span>
                        <div className="flex-grow border-l border-gray-200 h-20"></div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="md:flex hidden items-center flex-col justify-center">
                        <h3 className="text-xl font-bold">Scan the QR Code!</h3>
                        <img
                            src={ar_img}
                            alt="Findmyfare App"
                            className="w-40 sm:w-48 h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Footer section that collapses/expands based on 'isFooterSectionShow' */}
            <div className={`bg-[#F9F9F9] md9:block hidden border-t border-t-gray-10 mt-[4.4rem] ${isFooterSectionShow ? 'w-full transition-all ease-in-out duration-300 h-[17.3rem]' : 'h-0 transition-all ease-in-out duration-300 '} overflow-hidden`}>
                <div className="mx-auto px-5 max-w-[72rem] pt-[3.4rem] pb-12 ">
                    {/* First information block about why to choose Findmyfare */}
                    <div>
                        <h6 className="text-gray-500 font-semibold">Why choose Findmyfare?</h6>
                        <p className="text-gray-500 text-[14px] mt-2">Planning an overseas travel is never easy – with so
                            many
                            places to visit and several to explore! We can help you find the best airfares and hotels,
                            thanks to our innovative system. We can provide cheaper air tickets guarantee with good
                            connection to our customers accompanied by amazing offers to any destinations.</p>
                    </div>

                    {/* Second information block about planning a holiday */}
                    <div className="mt-3">
                        <h6 className="text-gray-500 font-semibold">Planning a holiday with Findmyfare</h6>
                        <p className="text-gray-500 text-[14px] mt-2">We, at Findmyfare, give you an all-around holiday package offer to match your budget. We allow you to compare the cheap air tickets and the best hotel bookings available, before paying up. Findmyfare holidays are designed by our holiday experts, who look for lowest in both air fares and hotel rates to provide cheapest possible price! Enjoy your vacation with our uniquely designed Findmyfare holidays which have got us several satisfied customers till now!</p>
                    </div>
                </div>
            </div>

            {/* Floating button to toggle the footer section visibility */}
            <div className="absolute hidden md9:flex flex-col items-end right-8 xl:right-16 2xl:right-44 -mt-[16px]">
                {/* Button to toggle the state of the footer */}
                <button onClick={toggleFooterSectionShow} className="p-1 rounded-full border-2 border-gray-400 bg-white shadow-md">
                    {/* Icon that changes based on whether the footer is visible */}
                    {isFooterSectionShow ? <FiMinus className="h-6 w-6 text-gray-400" /> : <FiPlus className="h-6 w-6 text-gray-400" />  }
                </button>
            </div>

        </div>
    )
}

export default Home;