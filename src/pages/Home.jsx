import travel_img from '../assets/home-img/tourism-travel-img.png';
import splitpay_img from '../assets/home-img/splitpay.png';
import {useEffect, useState} from 'react';
import FlightOnWay from "../components/FlightOnWay.jsx";
import FlightRoundTrip from "../components/FlightRoundTrip.jsx";
import FlightMultiCity from "../components/FlightMultiCity.jsx";
import HomeHeroImageSlider from "../components/HomeHeroImageSlider.jsx";

const Home = () => {

    const [divHeight, setDivHeight] = useState("31.6rem"); // Initial height for large screens

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
                return <FlightRoundTrip />; // Replace with your actual component
            case "multiCity":
                return <FlightMultiCity adjustHeight={adjustHeight} />; // Replace with your actual component
            default:
                return null;
        }
    };

    // Function to handle button clicks and set the active content
    const handleClick = (newContent) => {
        setActiveContent(newContent);
    };

    return (
        <div className="relative text-white w-full mt-12">
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
                    <div className="flex 2xl:justify-start justify-center space-x-3 2xl:pl-[12rem]">
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
                <div className={`lg:absolute h-[31.3rem] ${activeContent === "multiCity" ? divHeight > "31.6rem" ? "top-[40rem]" : "top-[29.7rem]" : "top-[21rem]"} px-1 sm:px-10 md:px-20 xl:px-48 w-full`}>
                    <HomeHeroImageSlider />
                </div>
            </div>

            <div className="h-screen"></div>
        </div>
    )
}

export default Home;