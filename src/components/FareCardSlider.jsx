import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow, Navigation} from "swiper/modules";
import {HiOutlineChevronLeft, HiOutlineChevronRight} from "react-icons/hi2";
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-coverflow'; // Import coverflow effect styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import {Link} from "react-router-dom";
import React from "react";
import {fareData} from "../constants/index.jsx";

const FareCardSlider = ({month}) => {
    // Example fare data for each month (can be fetched from an API or defined locally)

    return (
        <div className="relative">

            <div className="relative home-fares-swiper px-6 pt-2">
                <Swiper

                    slidesPerView={6} // Show part of the adjacent slides
                    grabCursor={true} // Enable cursor grab effect
                    loop={true} // Enable infinite loop mode
                    navigation={{
                        nextEl: '.swiper-button-next-fare', // Selector for next button
                        prevEl: '.swiper-button-prev-fare', // Selector for previous button
                        clickable: true // Make buttons clickable
                    }}
                    modules={[Autoplay, EffectCoverflow, Navigation]} // Load required modules
                    breakpoints={{
                        991: {
                            slidesPerView: 6, // Show 1 slide when viewport is below 768px
                            spaceBetween: 20
                        },
                        576: {
                            slidesPerView: 4, // Show 1 slide when viewport is below 768px
                        },
                        0: {
                            slidesPerView: 2, // Show 1 slide when viewport is below 768px
                            spaceBetween:5
                        },
                    }}
                >
                    {/* Render images in SwiperSlide */}
                    {fareData[month].map((item, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="h-[13rem] px-2 my-1 flex flex-col rounded-md border border-gray-200 hover:border-primaryLightBlue transition-all duration-500 hover:shadow-xl"
                                style={{boxShadow: '1px 0px 5px rgba(0, 0, 0, 0.2), -2px 0px 5px rgba(0, 0, 0, 0.2)'}}>
                                <span className="text-sm font-semibold leading-4 text-gray-400">TO</span>
                                <span className="text-sm font-semibold leading-4 uppercase">{item.to}</span>
                                <span className="font-normal text-gray-500 leading-4 line-through">{item.oldPrice}</span>
                                <span className="text-lg font-bold leading-5 text-primaryGreen">{item.newPrice}</span>
                                <img src={item.image} alt={item.image} className="w-10 h-8 rounded-full mt-3"/>
                                <span className="text-sm font-semibold leading-5 pt-1">{item.airline}</span>
                                <span className="text-sm font-semibold leading-5 text-gray-400">{item.date}</span>
                                <Link to={item.link} className="pt-2">
                                    <span className="text-sm font-semibold leading-5 text-primaryLightBlue">&#62; See Flights</span>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler"></div>
                    {/* Navigation buttons */}

                </Swiper>
                <div className="absolute top-1/2 left-[0] transform -translate-y-1/2">
                    <button className="swiper-btn">
                        <HiOutlineChevronLeft className="swiper-button-prev-fare"/>
                    </button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                    <button className="swiper-btn">
                        <HiOutlineChevronRight className="swiper-button-next-fare"/>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default FareCardSlider;