"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";

export default function HeroSection({ data }) {

const data2 = [
  {
    title: "Inquiry Bazaar",
    subtitle: "Exhibition Se Google Tak Har Jagah Bas Aap",
    img: "/doodle/5-5.png",
  },
  {
    title: "Inquiry Bazaar",
    subtitle: "Buy Premium Domains",
    img: "/doodle/3-3.png",
  },
  {
    title: "Inquiry Bazaar",
    subtitle: "Membership Plans",
    img: "/doodle/4-4.png",
  },
  {
    title: "Inquiry Bazaar",
    subtitle: "GEM Tenders ",
    img: "/doodle/2-2.png",
  },
];


const mobileImages = ["/mob1.jpeg","/mob2.jpeg","/mob3.jpeg"];
  return (

    <>
    
    <section className="w-full  mx-auto">

      <div className="w-full">

        {/* SLIDER */}
        {data?.banners?.length && (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop
          >
            {data.banners.map((b, i) => (
              <SwiperSlide key={i}>
                <div className="relative rounded-sm overflow-hidden">

              <picture>
  {/* Mobile Image */}
  <source
    media="(max-width: 768px)"
    srcSet={mobileImages[i % mobileImages.length]}
  />

  {/* Desktop Image */}
  <img
    src={b.image}
    alt={b.title}
    className="w-full h-auto object-cover"
  />
</picture>

                  <div className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 text-white max-w-[90%]">
                    <p className="text-xs sm:text-sm md:text-lg">{b.subtitle}</p>
                    <h2 className="text-sm sm:text-xl md:text-3xl font-bold leading-tight">
                      {b.title}
                    </h2>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* GRID BANNERS */}
 <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-4 mt-4 ">

  {/* IMAGE 1 */}
  <div className="relative overflow-hidden rounded-xl shadow-md md:shadow-none">
    <Image
      src="/new2.png"
      width={600}
      height={350}
      alt="img1"
      className="w-full h-[150px] sm:h-[220px] md:h-[240px] object-cover"
    />

    <div className="absolute inset-0 flex flex-col justify-center p-2 sm:p-6 bg-black/20 md:bg-black/20">

      <h2 className="text-white text-[20px] sm:text-lg md:text-2xl font-semibold leading-snug">
        Looking for a product?
      </h2>

      <span className="hidden md:block text-white text-[10px] sm:text-[16px] w-full sm:w-70 mt-1 sm:mt-3 leading-snug">
        Before making a purchase, make sure you’ve posted your buy requirement.
      </span>

      <button className="mt-2 sm:mt-4 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg bg-[#f48335] w-fit text-[10px] sm:text-sm hover:shadow-md transition active:scale-95">
        Post As Per Requirement →
      </button>
    </div>
  </div>

  {/* IMAGE 2 */}
  <div className="relative overflow-hidden rounded-xl shadow-md ">
    <Image
      src="/new1.jpeg"
      width={550}
      height={300}
      alt="img2"
      className="w-full h-[150px] sm:h-[220px] md:h-[240px] object-cover"
    />

    <div className="absolute inset-0 flex flex-col justify-center p-2 sm:p-6 bg-black/20 md:bg-black/10">

      <h2 className="text-white text-[17px] sm:text-lg md:text-2xl w-full sm:w-[280px] font-semibold leading-snug">
        Want to grow your business 10x faster?
      </h2>

      <div className="hidden md:flex items-center mt-1 sm:mt-3">
        <span className="text-white text-[10px] sm:text-[17px] leading-snug">
          Showcase <br /> product
        </span>

        <div className="h-4 sm:h-8 border-r mx-2 sm:mx-4 border-white"></div>

        <span className="text-white text-[10px] sm:text-[17px] leading-snug">
          Get Free <br /> listing
        </span>
      </div>

      <button className="hidden md:block mt-2 sm:mt-4 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg bg-[#24457a] w-fit text-[10px] sm:text-[14px] hover:shadow-md transition active:scale-95">
        Sell On Inquiry Bazaar →
      </button>


           <button className="block md:hidden mt-2 sm:mt-4 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg bg-[#24457a] w-fit text-[10px] sm:text-[14px] hover:shadow-md transition active:scale-95">
        Get Free listing →
      </button>
    </div>
  </div>

</div>

        {/* MORE VALUE ADDS */}
        <section className="w-full px-2 sm:px-4 md:px-6 py-6 bg-white relative">

          <h2 className="text-[16px] sm:text-[18px] font-semibold text-gray-800 mb-4">
            More Value Adds
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">

            {data2.map((item, i) => (
              <div
                key={i}
                className="h-[140px] bg-[#eeecec] border border-[#F48335] rounded-xl p-4 relative shadow-sm hover:shadow-md transition-all duration-300 group overflow-visible hover:bg-[#F48335]"
              >

                <p className="text-[12px] sm:text-[13px] text-black group-hover:text-white relative z-10 mb-2">
                  {item.title}
                </p>

                <h3 className="text-[13px] sm:text-[15px] font-semibold text-gray-800 mt-1 leading-snug w-[90%] group-hover:text-white relative z-10">
                  {item.subtitle}
                </h3>

                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-orange-500 text-xs sm:text-sm font-medium group-hover:text-white z-10">
                  Learn more
                  <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center group-hover:bg-white group-hover:text-orange-500">
                    <ArrowRight size={12} />
                  </span>
                </div>

                <Image
                  src={item.img}
                  alt="doodle"
                  width={80}
                  height={80}
                  className="absolute right-0 -bottom-2 object-contain transition-all duration-300 z-0"
                />
              </div>
            ))}

          </div>
        </section>

      </div>
    </section>


   
    </>
  );
}