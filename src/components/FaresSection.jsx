import {useState} from "react";
import FareCardSlider from "./FareCardSlider.jsx";
import {fareMonths} from "../constants/index.jsx";

const FaresSection = () => {
    const [activeMonth, setActiveMonth] = useState('October'); // Initial active month

    const handleMonthClick = (month) => {
        setActiveMonth(month); // Update the active month when clicked
    };

    return (
        <div className="flex flex-col mt-[30rem] lg:mt-96 w-auto text-black mx-auto px-4 max-w-[72rem]">
            <h2 className="sm:text-2xl text-lg text-primaryOrange sm:font-semibold">Lowest Fares from Colombo</h2>
            <span className="pt-2 text-sm sm:text-lg">Fly to your favorite destination on the lowest fares.</span>

            {/* Month selection */}
            <div className="flex flex-col sm:flex-row md:items-center px-4 pt-8">
                <span className="font-semibold text-gray-500 sm:mb-0 mb-2">MONTH OF TRAVEL :</span>
                <div className="flex flex-row flex-wrap gap-1 sm:ml-2">
                    {fareMonths.map((month, index) => (
                        <button
                            key={index}
                            onClick={() => handleMonthClick(month)} // Set active month on click
                            className={`${
                                activeMonth === month ? 'bg-primaryLightBlue border border-primaryLightBlue text-white' : 'border border-primaryLightBlue text-primaryLightBlue'
                            } rounded-md px-3 py-[0.3rem] transition-all duration-300`}
                        >
                            {month}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content that changes based on selected month */}
            <div className="mt-4">
                    <FareCardSlider month={activeMonth} />
            </div>

            {/* Disclaimer text */}
            <div className="w-full text-right mt-6">
                <span className="text-[12px] text-gray-400">*Fares may vary according to the time & flight results will be subjected to availability</span>
            </div>
        </div>
    )
}

export default FaresSection;