"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TrendingBrands() {
  const brands = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
   
  ];

  return (
    <div className="w-full bg-[#f3f4f6]  ">

      {/* TITLE */}
      <h2 className="text-[20px] font-semibold text-[#1f3b5b] mb-3 tracking-wide">
        TRENDING BRANDS
      </h2>

      {/* CONTAINER */}
      <div className="bg-white rounded-sm px-4 py-7">

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
       
          spaceBetween={30}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {brands.map((logo, i) => (
            <SwiperSlide
              key={i}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Hybrid B2B Marketplace in India"
                className="h-[90px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}