"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import IconCss from "@/components/SVGs/iconCss";
import IconHtml from "@/components/SVGs/iconHtml";
import IconJs from "@/components/SVGs/iconJs";
import IconReact from "@/components/SVGs/iconReact";
import IconTailwind from "@/components/SVGs/iconTailwind";
import IconSass from "./SVGs/iconSass";

const Carousel = () => {
  return (
    <>
      <Swiper
      //slidesPerView={3} para mobile e slidesPerView={5} para desktop
        slidesPerView={3}
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          loop: true,
        }}
        modules={[Pagination, Autoplay]}
        
          //w-80 para mobile e w-[65%] para desktop
        className="w-80 flex items-center justify-center"
      >
        <SwiperSlide>
          <IconHtml />
        </SwiperSlide>
        <SwiperSlide>
          <IconCss />
        </SwiperSlide>
        <SwiperSlide>
          <IconJs />
        </SwiperSlide>
        <SwiperSlide>
          <IconReact />
        </SwiperSlide>
        <SwiperSlide>
          <IconSass />
        </SwiperSlide>
        <SwiperSlide>
          <IconTailwind />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
