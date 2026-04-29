"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function TrendingBrands() {
  const brands = [
    "/clientimages/1.webp",
    "/clientimages/2.webp",
    "/clientimages/3.png",
    "/clientimages/4.webp",
    "/clientimages/5.webp",
    "/clientimages/6.webp",
    "/clientimages/7.png",
    "/clientimages/8.webp",
    "/clientimages/9.png",
    "/clientimages/10.webp",
    "/clientimages/11.webp",
    "/clientimages/12.webp",
    "/clientimages/13.webp",
    "/clientimages/14.webp",
    "/clientimages/16.png",
    "/clientimages/17.jpg",
    "/clientimages/18.webp",
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-10">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TITLE */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1f3b5b] tracking-wide">
            Trending Brands
          </h2>

          {/* optional subtle line */}
          <div className="hidden sm:block flex-1 h-[1px] bg-gray-200 ml-4"></div>
        </div>

        {/* SLIDER BOX */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 sm:px-6 py-6">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
          >
            {brands.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center h-[80px] sm:h-[90px] group">
                  <img
                    src={logo}
                    alt="brand"
                    className="max-h-[40px] sm:max-h-[60px] object-contain "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}