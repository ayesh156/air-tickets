import travel_img from '../assets/home-img/tourism-travel-img.png';
import splitpay_img from '../assets/home-img/splitpay.png';
import React, {useEffect, useState} from 'react';
import FlightOnWay from "../components/FlightOnWay.jsx";
import FlightRoundTrip from "../components/FlightRoundTrip.jsx";
import FlightMultiCity from "../components/FlightMultiCity.jsx";

const Home = () => {

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
                return <FlightMultiCity />; // Replace with your actual component
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
            <div className="relative h-[31.6rem] bg-[#D93B07]">
                {/* Image and buttons container */}
                <div className="relative overflow-hidden h-[31.6rem]">
                    <img className="absolute bottom-[-2rem] h-96" src={travel_img} alt={travel_img}/>
                    <div className="flex flex-col justify-center h-full px-[28rem] pb-6">
                        <span className="text-2xl text-gray-200 pl-5">Introducing</span>
                        <img src={splitpay_img} alt={splitpay_img} className="w-64" />
                        <div className="text-xl text-gray-200 w-[27rem]">
                            <p>You can divide your flight ticket payments into 3 installments without any extra fees.</p>
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
            </div>


        </div>
    )
}

export default Home;