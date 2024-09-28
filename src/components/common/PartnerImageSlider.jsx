import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow, Navigation} from "swiper/modules";
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-coverflow'; // Import coverflow effect styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import {HiOutlineChevronLeft, HiOutlineChevronRight} from "react-icons/hi2";
import {Link} from "react-router-dom";

const PartnerImageSlider = ({data}) => {

    const nextButtonSelector =
        data.title === "Airline Partners"
            ? "swiper-button-next-partner-a"
            : "swiper-button-next-partner-p";

    const prevButtonSelector =
        data.title === "Airline Partners"
            ? "swiper-button-prev-partner-a"
            : "swiper-button-prev-partner-p";

    return (
        <div className="relative md:flex flex-col hidden  mt-12 text-black mx-auto px-4 max-w-[72rem] mb-2">
            <div className="flex flex-col">
                <h2 className="sm:text-2xl text-lg text-primaryOrange sm:font-semibold">{data.title}</h2>
                <span className="text-sm mt-3 text-[17px]">{data.label}</span>
            </div>
            <div className="relative home-partner-swiper px-6 mt-10">
                <Swiper
spaceBetween={2}
                    slidesPerView={8} // Show part of the adjacent slides
                    grabCursor={true} // Enable cursor grab effect
                    loop={true} // Enable infinite loop mode
                    navigation={{
                        nextEl: `.${prevButtonSelector}`, // Selector for next button
                        prevEl: `.${nextButtonSelector}`, // Selector for previous button
                        clickable: true // Make buttons clickable
                    }}
                    modules={[Autoplay, EffectCoverflow, Navigation]} // Load required modules
                    breakpoints={{
                        991: {
                            slidesPerView: 8, // Show 1 slide when viewport is below 768px
                            spaceBetween: 10
                        },
                        0: {
                            slidesPerView: 4, // Show 1 slide when viewport is below 768px
                            spaceBetween: 2
                        },
                    }}
                >
                    {/* Render images in SwiperSlide */}
                    {data.images.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="h-[5rem] my-1 flex items-center justify-center overflow-hidden rounded-md border hover:scale-105 shadow-md hover:shadow-xl transition-all duration-500">
                                <Link to={item.link} >
                                <img src={item.image} alt={item.image} className="rounded-md h-12 w-24"/>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler"></div>
                    {/* Navigation buttons */}

                </Swiper>
                <div className="absolute top-1/2 left-[0] transform -translate-y-1/2">
                    <button className="swiper-btn">
                        <HiOutlineChevronLeft className={prevButtonSelector}/>
                    </button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                    <button className="swiper-btn">
                        <HiOutlineChevronRight className={nextButtonSelector}/>
                    </button>
                </div>

            </div>

        </div>


    )
}

export default PartnerImageSlider;