"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";



import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
export default function HeroSection({ data }) {


const data2 = [
  {
    title: "Inquiry Bazaar",
    subtitle: "Exhibition Se Google Tak Har Jagah Bas Aap",
    img: "/doodle/4.png",
  },

  {
    title: "Inquiry Bazaar",
    subtitle: "Buy Premium Domains",
    img: "/doodle/2.png",
  },

  {
    title: "Inquiry Bazaar",
    subtitle: "Membership Plans",
    img: "/doodle/3.png",
  },

  {
    title: "Inquiry Bazaar",
    subtitle: "GEM Tenders ",
    img: "/doodle/4.png",
  },


];


  return (



    <section className="w-full mt-32  mx-auto  ">


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
    <p></p>
  )}


  {/* GRID BANNERS */}
{/* {data?.banners2?.length ? (
  <div className="grid grid-cols-2 gap-4 mt-3">
    {data.banners2.map((b, i) => (
      <div key={i} className="relative rounded-sm overflow-hidden">
        <img src={b.image} className="w-full h-full object-contain" />
      </div>
    ))}
  </div>
) : null} */}



<div className="grid grid-cols-2 gap-4 mt-2">

  {/* IMAGE 1 */}
  <div className="relative">
    <Image
      src="/new2.png"
      width={600}
      height={350}
      alt="uisgyu"
      className="object-cover"
    />

    <div className="absolute inset-0 flex flex-col justify-center px-6 ">
      <h2 className="text-2xl font-semibold text-white">
        Looking for a product?
      </h2>

      <p className="text-white text-md  w-60 mt-3">
        Before making a purchase, make sure you’ve posted your buy requirement.
      </p>



  
  {/* ICON */}
  <button className="mt-5  text-white px-2 py-1 rounded-lg bg-[#f48335] w-fit hover:shadow-md transition">
    Post As Per Requirement →
  </button>


    </div>
  </div>

  {/* IMAGE 2 */}
  <div className="relative">
    <Image
      src="/new1.jpeg"
      width={550}
      height={50}
      alt="uisgyu"
      className="object-contain "
    />

  <div className="absolute inset-0 flex flex-col justify-center px-6">
  
  <h2 className="text-2xl w-[280px] font-semibold text-white leading-snug">
    Want to grow your business 10x faster?
  </h2>

  {/* TEXT ROW */}
  <div className="flex items-center mt-3">
    
    {/* LEFT TEXT (2 lines) */}
    <p className="text-white text-sm  ">
      Showcase your <br /> product
    </p>

    {/* SEPARATOR */}
    <div className="h-8 border-r mx-4 border-white"></div>

    {/* RIGHT TEXT */}
    <p className="text-white text-sm ">
     Get Free <br /> listing
    </p>

  </div>

  {/* BUTTON */}
  <button className="mt-4  text-white px-2 py-1 rounded-lg bg-[#24457a] w-fit hover:shadow-md transition">
    Sell On Inquiry Bazaar →
  </button>

</div>
  </div>

</div>



{/* section one more */}





    <section className="w-full px-6 py-6 bg-white relative">
      
      {/* TITLE */}
      <h2 className="text-[18px] font-semibold text-gray-800 mb-4">
        More Value Adds
      </h2>

      {/* SLIDER CONTAINER */}
      <div className="relative">

        {/* LEFT ARROW */}
       

        {/* CARDS */}
       <div className="grid grid-cols-4 gap-5">

  {data2.map((item, i) => (
    <div
      key={i}
      className="h-[140px]  border border-[#F48335] rounded-xl p-4 relative shadow-sm hover:shadow-md transition-all duration-300 group overflow-visible hover:bg-[#F48335]"
    >
      
      {/* TEXT */}
      <p className="text-[13px] text-black group-hover:text-white relative z-10 mb-2">
        {item.title}
      </p>

      <h3 className="text-[15px] font-semibold text-gray-800 mt-1 leading-snug w-[190px] group-hover:text-white relative z-10">
        {item.subtitle}
      </h3>

      {/* LEARN MORE */}
      <div className="absolute bottom-5 left-4 flex items-center gap-1 text-orange-500 text-sm font-medium group-hover:text-white z-10">
        Learn more
        <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center group-hover:bg-white group-hover:text-orange-500">
          <ArrowRight size={12} />
        </span>
      </div>

      {/* DOODLE IMAGE */}
      <Image
        src={item.img}
        alt="doodle"
        width={100}
        height={100}
        className="absolute right-0 -bottom-2 object-contain opacity-40 group-hover:opacity-100  transition-all duration-300 z-0"
      />
    </div>
  ))}
</div>

    
      </div>
    </section>


</div>





     
    </div>
    </section>
  );
}