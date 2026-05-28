"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "📝",
      title: "Post Your Requirement",
      desc: "Describe what you need — product, quantity, specs. It takes less than 2 minutes.",
    },
    {
      number: "02",
      icon: "🔍",
      title: "We Match Suppliers",
      desc: "Our system finds verified suppliers who match your exact requirement from our network.",
    },
    {
      number: "03",
      icon: "💬",
      title: "Receive Quotes",
      desc: "Get competitive quotes on your mobile and dashboard within hours — not days.",
    },
    {
      number: "04",
      icon: "🤝",
      title: "Close the Deal",
      desc: "Compare, negotiate, and close with confidence. All suppliers are GST-verified.",
    },
  ];

  return (
    <section className="bg-[#0e2347] py-1 px-2">
      <div className="max-w-[1200px] mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-white text-[25px] md:text-[42px] font-bold ">
          How Inquiry Bazaar Works
        </h2>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="relative text-left px-2 py-6 h-full">

                {/* BIG FADED NUMBER */}
                <span
                  className="
                    absolute 
                    -top-2 md:-top-6 
                    left-10 
                    text-[50px] md:text-[90px] 
                    font-bold text-white/5 select-none
                  "
                >
                  {step.number}
                </span>

                {/* ICON BOX */}
                <div
                  className="
                    w-[48px] h-[48px] md:w-[60px] md:h-[60px]
                    rounded-xl bg-white/10 backdrop-blur-md border border-white/20 
                    flex items-center justify-center 
                    text-[18px] md:text-[22px] 
                    mb-3 md:mb-6 shadow-inner
                  "
                >
                  {step.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-white text-[15px] md:text-[18px] font-semibold mb-2 md:mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-white/80 text-[12px] md:text-[14px] leading-relaxed">
                  {step.desc}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}