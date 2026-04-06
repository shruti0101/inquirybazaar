"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
export default function HeroSection({ data }) {




  return (



    <section className="w-full   mx-auto  ">


    <div className=" ">

    

    
   {/* RIGHT BANNERS */}
<div className="col-span-9">

  {data?.banners?.length ? (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop
    >
      {data.banners.map((b, i) => (
        <SwiperSlide key={i}>
          <div className="relative h-[330px] rounded-sm overflow-hidden">
            <img
              src={b.image}
              alt={b.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute top-10 left-10 text-white">
              <p className="text-lg">{b.subtitle}</p>
              <h2 className="text-3xl font-bold">{b.title}</h2>

              <button className="mt-4 bg-red-500 px-5 py-2">
                {b.button}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <p>No banners</p>
  )}


  {/* GRID BANNERS */}
{data?.banners2?.length ? (
  <div className="grid grid-cols-2 gap-4 mt-3">
    {data.banners2.map((b, i) => (
      <div key={i} className="relative rounded-sm overflow-hidden">
        <img src={b.image} className="w-full h-full object-contain" />
      </div>
    ))}
  </div>
) : null}

</div>


     
    </div>
    </section>
  );
}