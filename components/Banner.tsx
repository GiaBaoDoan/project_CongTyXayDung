"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            loading="lazy"
            className="w-full max-sm:hidden h-auto"
            src="/banner1.jpg"
            alt="banner.png"
          ></Image>
          <Image
            width="100"
            height="100"
            sizes="100vw"
            loading="lazy"
            className="w-full h-full sm:hidden"
            src="/banner3.jpg"
            alt="banner.png"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            loading="lazy"
            className="w-full h-auto max-sm:hidden"
            src="/banner2.jpg"
            alt="banner.png"
          ></Image>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            loading="lazy"
            className="w-full h-full sm:hidden object-cover"
            src="/banner4.jpg"
            alt="banner.png"
          ></Image>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
