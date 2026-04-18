"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Banner3Section({ data }) {
  if (!data || !data.length) return null;

  return (
    <section className="">

      {/* ✅ Mobile Slider */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={12}
          slidesPerView={1.2}
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
        >
          {data.map((b, i) => (
            <SwiperSlide key={i}>
              <Link href={b.link || "#"}>
                <div className="overflow-hidden group cursor-pointer">
                  <img
                    src={b.image}
                    className="w-full h-[180px] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Desktop Grid (unchanged) */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((b, i) => (
          <Link key={i} href={b.link || "#"}>
            <div className="overflow-hidden group cursor-pointer">
              <img
                src={b.image}
                className="w-full h-[200px] object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}