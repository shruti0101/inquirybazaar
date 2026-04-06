"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedProducts({ data }) {
  return (
    <section className=" py-4 ">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black">
         Featured Categories for You - Explore Top Picks in Every Industry
        </h2>

        <div className="flex gap-2">
          <button className="prev w-8 h-8 border rounded flex items-center justify-center">
            ←
          </button>
          <button className="next w-8 h-8 border rounded flex items-center justify-center">
            →
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: ".prev", nextEl: ".next" }}
        spaceBetween={15}
        slidesPerView={5}
      >
        {data?.products?.map((p, i) => (
          <SwiperSlide key={i}>
            <div className=" h-auto rounded-lg p-3 relative bg-white group">

              {/* BADGE */}
              {p.badge && (
                <div className="absolute capitalize top-2 left-2 text-[11px] bg-red-100 text-red-600 px-2 py-[2px] rounded">
                   {p.badge}
                </div>
              )}

              {/* IMAGE */}
              <div className="h-[130px] flex items-center justify-center mb-4">
                <img src={p.image} className="max-h-full object-contain" />
              </div>

              {/* NAME */}
              <p className="capitalize text-[17px] line-clamp-2 text-black   h-[30px]">
                {p.name}
              </p>

              {/* RATING */}
              <div className="text-orange-500 text-[12px] ">
                ★★★★★ <span className="text-gray-400">{p.reviews}</span>
              </div>

              {/* EXTRA */}
              <p className="text-[14px] my-2 text-black capitalize">{p.extra}</p>

              {/* PRICE */}
              <p className="font-semibold text-[14px] mt-1">
                ₹{p.price}
              </p>

              {/* BUTTON */}
              <button className=" w-full bg-[#F45A06] text-white text-sm mt-2 py-2 ">
              Request a Quote
              </button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}