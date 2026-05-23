"use client";

import { Factory, BarChart4, Focus, Globe } from "lucide-react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function IndustrySection() {

  const cards = [
    {
      icon: <Factory className="w-6 h-6 text-orange-500" />,
      title: "Har Industry, Har Category",
      desc: "Ek platform jahan har type ka business connect hota hai",
    },
    {
      icon: <BarChart4 className="w-6 h-6 text-orange-500" />,
      title: "Sabko Equal Growth",
      desc: "Opportunity sabke liye same, growth effort ke hisaab se",
    },
    {
      icon: <Focus className="w-6 h-6 text-orange-500" />,
      title: "Right Buyers Milenge",
      desc: "Aapke products ke liye targeted buyers yahan available hai",
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: "Global Market Reach",
      desc: "Aapka business India se global market tak grow karega",
    },
  ];

  return (
    <section className="w-full py-8 px-4 bg-gradient-to-b from-[#f6e9e4] to-[#f3dfd6] relative overflow-hidden">

      {/* Background dots */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full blur-sm"></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-white rounded-full blur-sm"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-white rounded-full blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* MOBILE SLIDER */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={2.1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Card {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}


function Card({ icon, title, desc }) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300 text-center h-[190px] flex flex-col justify-center">

      {/* Icon */}
      <div className="flex justify-center mb-3">
        <div className="p-3 rounded-xl bg-orange-50">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[13px] font-semibold text-black leading-snug mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[11px] md:text-[14px] text-black leading-relaxed">
        {desc}
      </p>

    </div>
  );
}