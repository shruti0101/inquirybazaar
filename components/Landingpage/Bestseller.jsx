"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedProducts({ data }) {
  return (
    <section className="py-4">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-black">
          Bestseller Products for You
        </h2>

        <div className="flex gap-2">
          <button className="prev w-7 h-7 sm:w-8 sm:h-8 border rounded flex items-center justify-center">
            ←
          </button>
          <button className="next w-7 h-7 sm:w-8 sm:h-8 border rounded flex items-center justify-center">
            →
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: ".prev", nextEl: ".next" }}
        spaceBetween={15}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 2.5, spaceBetween: 12 },
          768: { slidesPerView: 3, spaceBetween: 12 },
          1024: { slidesPerView: 4, spaceBetween: 15 },
          1280: { slidesPerView: 5, spaceBetween: 15 },
        }}
      >
        {data?.products?.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="h-auto rounded-lg p-3 relative bg-white group">

              {/* BADGE */}
              {p.badge && (
                <div className="absolute capitalize top-2 left-2 text-[11px] bg-red-100 text-red-600 px-2 py-[2px] rounded">
                  {p.badge}
                </div>
              )}

              {/* IMAGE */}
              <div className="h-[120px] sm:h-[130px] flex items-center justify-center mb-4">
                <img src={p.image} className="max-h-full object-contain" />
              </div>

              {/* NAME */}
              <p className="capitalize text-[15px] sm:text-[17px] line-clamp-2 text-black h-[30px]">
                {p.name}
              </p>

              {/* RATING */}
              <div className="text-orange-500 text-[11px] sm:text-[12px]">
                ★★★★★ <span className="text-gray-400">{p.reviews}</span>
              </div>

              {/* EXTRA */}
              <p className="text-[13px] sm:text-[14px] my-2 text-black capitalize">
                {p.extra}
              </p>

              {/* PRICE */}
              <p className="font-semibold text-[13px] sm:text-[14px] mt-1">
                ₹{p.price}
              </p>

              {/* BUTTON */}
              <button className="w-full bg-[#F45A06] text-white text-xs sm:text-sm mt-2 py-2">
                Request a Quote
              </button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}