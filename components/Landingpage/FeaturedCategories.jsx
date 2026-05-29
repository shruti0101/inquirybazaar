"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import RequestQuoteModal from "@/components/Layout/Requestquote";
import Image from "next/image";
import Link from "next/link";
export default function FeaturedProducts({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-md md:text-xl font-bold text-black px-1">
            Featured Categories for You - Explore Top Picks in Every Industry
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={4000} // 👈 smooth continuous feel
          autoplay={{
            delay: 0, // 👈 makes it continuous
            disableOnInteraction: false,
          }}
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
                <div className="h-[130px] flex items-center justify-center mb-4">
                  <img src={p.image} className="max-h-full object-contain" />
                </div>

                {/* NAME */}
                <p className="capitalize text-[17px] line-clamp-2 text-black h-[30px]">
                  {p.name}
                </p>

                {/* RATING */}
                <div className="text-orange-500 text-[12px]">
                  ★★★★★{" "}
                  <span className="text-gray-400">{p.reviews}</span>
                </div>

                {/* EXTRA */}
                <p className="text-[14px] my-2 text-black capitalize">
                  {p.extra}
                </p>

                {/* PRICE */}
                <p className="font-semibold text-[14px] mt-1">
                  ₹{p.price}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="w-full bg-[#F45A06] text-white text-sm mt-2 py-2"
                >
                  Request a Quote
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

{/* BANNER */}
<section className="mt-6 hidden md:block">

  <div className="relative overflow-hidden rounded-md">

    {/* IMAGE */}
    <Image
      src="/b3.jpeg"
      alt="banner"
      width={2000}
      height={700}
      className="
        w-full
        h-auto
        object-cover
      "
    />


    {/* BUTTONS */}
    <div
      className="
        absolute
        inset-x-0
        bottom-4
        flex
        items-center
        justify-center
        gap-3
        px-4
        z-10
      "
    >

      <Link href="/post-requirement">

        <button
          className="
          border-2 border-cyan-400 cursor-pointer text-white hover:bg-cyan-400/10 font-semibold text-md px-3 py-3 rounded-xl backdrop-blur-sm transition
          "
        >
          Post Requirement
        </button>

      </Link>

      <Link href="/register">

        <button
          className="
           border-2 border-[#F07B20] cursor-pointer  text-white font-semibold text-md px-3 py-3 rounded-xl shadow-lg transition flex items-center gap-2
          "
        >
          Register Free →
        </button>

      </Link>

    </div>

  </div>

</section>




      <RequestQuoteModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}