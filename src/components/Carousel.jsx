"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import IconCss from "@/components/SVGs/iconCss";
import IconHtml from "@/components/SVGs/iconHtml";
import IconJava from "@/components/SVGs/iconJava";
import IconJs from "@/components/SVGs/iconJs";
import IconNext from "@/components/SVGs/iconNext";
import IconNode from "@/components/SVGs/iconNode";
import IconReact from "@/components/SVGs/iconReact";
import IconTailwind from "@/components/SVGs/iconTailwind";

const Carrossel = () => {
  return (
    <>
      <Swiper
        // slidesPerView={3} para mobile
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
        
        // obs.: w-80 para mobile e w-[65%] para desktop
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
          <IconNext />
        </SwiperSlide>
        <SwiperSlide>
          <IconNode />
        </SwiperSlide>
        <SwiperSlide>
          <IconTailwind />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carrossel;
