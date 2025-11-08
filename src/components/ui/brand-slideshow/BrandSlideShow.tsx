'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles2.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function BrandSlideShow() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='h-auto w-10/12 mx-auto my-12'>
            <Swiper
                loop={true}
                slidesPerView={5}
                spaceBetween={0}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 "
            >
                <SwiperSlide>
                    <img style={{
                                display:'block',
                                width: "60%",
                                height: "auto",
                                objectFit:'cover',
                            }}
                    className='filter grayscale contrast-100 h-auto hover:filter-none cursor-pointer transition-all duration-300 ease-in-out'
                    src="/logos/1.jpg"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img style={{
                                display:'block',
                                width: "60%",
                                height: "auto",
                                objectFit:'cover',
                            }}
                        className='filter grayscale contrast-100 w-10 h-auto hover:filter-none cursor-pointer transition-all duration-300 ease-in-out'
                        src="/logos/2.jpg"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img style={{
                                display:'block',
                                width: "60%",
                                height: "auto",
                                objectFit:'cover',
                            }}
                        className='filter grayscale contrast-100 w-10 h-auto hover:filter-none cursor-pointer transition-all duration-300 ease-in-out'
                        src="/logos/3.jpg"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img style={{
                                display:'block',
                                width: "60%",
                                height: "auto",
                                objectFit:'cover',
                            }}
                        className='filter grayscale contrast-100 w-10 h-auto hover:filter-none cursor-pointer transition-all duration-300 ease-in-out'
                        src="/logos/4.jpg"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img style={{
                                display:'block',
                                width: "60%",
                                height: "auto",
                                objectFit:'cover',
                            }}
                        className='filter grayscale contrast-100 w-10 h-auto hover:filter-none cursor-pointer transition-all duration-300 ease-in-out'
                        src="/logos/5.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{
                                display:'block',
                                width: "60%",
                                height: "auto",
                                objectFit:'cover',
                            }}
                        className='filter grayscale contrast-100 w-10 h-auto hover:filter-none cursor-pointer transition-all duration-300 ease-in-out'
                        src="/logos/6.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{
                                display:'block',
                                width: "60%",
                                height: "auto",
                                objectFit:'cover',
                            }}
                        className='filter grayscale contrast-100 w-10 h-auto hover:filter-none cursor-pointer transition-all duration-300 ease-in-out'
                        src="/logos/7.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{
                                display:'block',
                                width: "60%",
                                height: "auto",
                                objectFit:'cover',
                            }}
                        className='filter grayscale contrast-100 w-10 h-auto hover:filter-none cursor-pointer transition-all duration-300 ease-in-out'
                        src="/logos/8.jpg"
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
