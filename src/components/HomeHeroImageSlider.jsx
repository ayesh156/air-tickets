import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow, Navigation} from "swiper/modules";
import {homeHeroImgSlider} from "../constants/index.jsx";
import {HiOutlineChevronLeft, HiOutlineChevronRight} from "react-icons/hi2";
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-coverflow'; // Import coverflow effect styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import {Link} from "react-router-dom";

const HomeHeroImageSlider = () => {

    return (
        <div
            className="px-8 pt-4 pb-8 text-[#333333] flex flex-col text-center justify-center lg:bg-white rounded-md h-full lg:shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
            <h3 className="font-semibold text-2xl">Offers in store for you</h3>
            <span className="mt-2">View all live offers for flights and hotels</span>
            <div className="relative home-hero-swiper px-6 mt-6">
                <Swiper
                    spaceBetween={28} // Set the gap between slides (in pixels)

                    slidesPerView={3} // Show part of the adjacent slides
                    grabCursor={true} // Enable cursor grab effect
                    loop={true} // Enable infinite loop mode
                    navigation={{
                        nextEl: '.swiper-button-next', // Selector for next button
                        prevEl: '.swiper-button-prev', // Selector for previous button
                        clickable: true // Make buttons clickable
                    }}
                    modules={[Autoplay, EffectCoverflow, Navigation]} // Load required modules
                    breakpoints={{
                        991: {
                            slidesPerView: 3, // Show 1 slide when viewport is below 768px
                        },
                        576: {
                            slidesPerView: 2, // Show 1 slide when viewport is below 768px
                        },
                        0: {
                            slidesPerView: 1, // Show 1 slide when viewport is below 768px
                        },
                    }}
                >
                    {/* Render images in SwiperSlide */}
                    {homeHeroImgSlider.map((item, i) => (
                        <SwiperSlide key={i} className="flex flex-col my-2 justify-center items-center h-[280px]">
                            <div
                                className="relative w-full h-full rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
                                <img className="h-[190px] w-full rounded-t-md" src={item.image}
                                     alt={item.name}/>
                                <div className="text-left px-3 h-[90px]">
                                    <h4 className="text-md text-black py-2">{item.title}</h4>
                                    <span className="block text-gray-600 pb-3 text-[14px]">{item.label}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler"></div>
                    {/* Navigation buttons */}

                </Swiper>
                <div className="absolute top-1/2 -left-[3.5rem] transform -translate-y-1/2 ml-4">
                    <button className="swiper-btn">
                        <HiOutlineChevronLeft className="swiper-button-prev"/>
                    </button>
                </div>
                <div className="absolute top-1/2 -right-[3.5rem] transform -translate-y-1/2 mr-4">
                    <button className="swiper-btn">
                        <HiOutlineChevronRight className="swiper-button-next"/>
                    </button>
                </div>

            </div>
            <Link to="/offers">
                <button
                    className="mt-6 px-8 py-2 bg-primaryOrange text-white rounded transition active:shadow-btnShadow">
                    Explore all offers
                </button>
            </Link>
        </div>
    )
}

export default HomeHeroImageSlider;