'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Slideshow() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='h-auto w-11/12 mx-auto'>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 "
      >
        <SwiperSlide>
          <img src="/slider/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider/3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider/5.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
