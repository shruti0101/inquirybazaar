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
    link:"/exhibition"
  },
  {
    title: "Inquiry Bazaar",
    subtitle: "Buy Premium Domains",
    img: "/doodle/3-3.png",
    link:"/premium"
  },
  {
    title: "Inquiry Bazaar",
    subtitle: "Membership Plans",
    img: "/doodle/4-4.png",
    link:"https://corporate.inquirybazaar.com/solutions"
  },
  {
    title: "Inquiry Bazaar",
    subtitle: "GEM Tenders ",
    img: "/doodle/2-2.png",
    link:"https://gem.gov.in/"
  },
];



const mobileBanners = [
  {
    image: "/mob1.jpeg",


    buttons: [
      {
        text: "Register Free ->",
        link: "/register",
        className:
          "border-2 border-[#F07B20] text-white px-1 py-2 rounded-lg text-[11px] font-semibold",
      },

    
    ],
  },

  {
    image: "/mob2.jpeg",

  buttons: [
      {
        text: "Register Free",
        link: "/sell",
        className:
          "border-2 border-[#F07B20] text-white px-1 py-1 rounded-lg text-[10px] ",
      },

      {
        text: "Post Requirement",
        link: "/contact",
        className:
          "border-1 border-cyan-400 text-white px-1 py-1 rounded-lg text-[10px] ",
      },
    ],
  },

  {
    image: "/mob3.jpeg",


    buttons: [
      {
        text: "Get Quotation",
        link: "/sell",
        className:
          "border-2 border-[#F07B20] text-white px-1 py-1 rounded-lg text-[10px] ",
      },

      {
        text: "Partner With Us",
        link: "/contact",
        className:
          "border-1 border-cyan-400 text-white px-1 py-1 rounded-lg text-[10px] ",
      },
    ],
  },
];
  return (

    <>
    
    <section className="w-full  mx-auto">

      <div className="w-full">

     
<div className="hidden md:block">
 {/* SLIDER */}
        {data?.banners?.length && (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 10000 }}
            pagination={{ clickable: true }}
            loop
          >
            {data.banners.map((b, i) => (
              <SwiperSlide key={i}>
                <div className="relative rounded-sm overflow-hidden">

              <picture>


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


</div>
       

{/* mobile banners */}

  <div className="block md:hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 10000 }}
        pagination={{ clickable: true }}
        loop
      >
        {mobileBanners.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="relative overflow-hidden">

              {/* IMAGE */}
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-auto object-cover"
              />

        

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">

                <p className="text-sm mb-2">
                  {b.subtitle}
                </p>

                <h2 className="text-2xl font-bold leading-tight mb-5">
                  {b.title}
                </h2>

                {/* BUTTONS */}
                <div className="flex flex-col gap-3 absolute bottom-7">
                  {b.buttons.map((btn, idx) => (
                    <Link
                      key={idx}
                      href={btn.link}
                      className={btn.className}
                    >
                      {btn.text}
                    </Link>
                  ))}
                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


        {/* GRID BANNERS */}
 <div className="hidden md:grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-4 mt-4 ">

  {/* IMAGE 1 */}
  <div className="relative overflow-hidden rounded-xl w-full h-full">
    <Image
      src="/1.png"
      width={600}
      height={350}
      alt="Hybrid B2B Marketplace in India"
      className="w-full h-[160px] sm:h-[220px] md:h-[240px] object-cover"
    />

    <div className="absolute inset-0 flex flex-col justify-center pl-2 md:pl-6   ">

      <h2 className="mt-3 text-black text-[20px] sm:text-lg md:text-2xl font-semibold leading-snug">
        Looking for a <br /> <span className="text-[#1753C5]">Quality Product?</span> 
      </h2>

<div className="hidden md:flex items-center mt-1 sm:mt-3">
        <span className="text-black text-[10px] sm:text-[16px] leading-snug">
          100%  Transparent <br></br> Process
           
        </span>

        <div className="h-4 sm:h-8 border-r mx-2 sm:mx-3 border-gray-500"></div>

        <span className="text-black text-[10px] sm:text-[16px] leading-snug">
          Direct Supplier <br></br> Contact
        </span>
      </div>
   

      <button className="mt-2 sm:mt-3 mb-2 text-black px-1 py-2 sm:px-4 sm:py-2 rounded-lg border  border-[#f48335] w-fit text-[11px] sm:text-sm hover:shadow-md transition active:scale-95">
        Post As Per Requirement →
      </button>



    </div>
  </div>

  {/* IMAGE 2 */}
  <div className="relative overflow-hidden rounded-xl shadow-md ">
    <Image
      src="/2.png"
      width={550}
      height={300}
      alt="Hybrid B2B Marketplace in India"
      className="w-full h-[160px] sm:h-[220px] md:h-[240px] object-cover"
    />

    <div className="absolute inset-0 flex flex-col justify-center p-2 sm:p-6  ">

    <div className="relative">
  <h2 className="text-black text-[18px] sm:text-lg md:text-2xl w-full sm:w-[280px] font-semibold leading-snug">
        Want to grow your business <span className="text-[#F16D15] ">10x faster? </span> 
      </h2>

      <div className="hidden md:flex items-center mt-1 sm:mt-3">
        <span className="text-black text-[10px] sm:text-[16px] leading-snug">
          Showcase <br></br>
           product
        </span>

        <div className="h-4 sm:h-8 border-r mx-2 sm:mx-4 border-gray-500"></div>

        <span className="text-black text-[10px] sm:text-[16px] leading-snug">
          Get Free <br></br> listing
        </span>
      </div>

      <button className="hidden md:block mt-2 sm:mt-4 text-black px-2 py-1 sm:px-4 sm:py-2 rounded-lg border border-[#24457a] w-fit text-[10px] sm:text-[14px] hover:shadow-md transition active:scale-95">
        Sell On Inquiry Bazaar →
      </button>


           <button className="block md:hidden mt-2 sm:mt-4 text-white px-2 py-2 sm:px-4 sm:py-2 rounded-lg bg-[#24457a] w-fit text-[12px] sm:text-[14px] hover:shadow-md transition active:scale-95">
        Get Free listing →
      </button>

    </div>

    
    </div>
  </div>

</div>




 {/* MOBILE BANNERS */}
<div className="grid md:hidden grid-cols-2 gap-3 mt-4">

  {/* IMAGE 1 */}
  <div className="relative h-[140px] ">
    <Image
      src="/mobile2-2.jpeg"
   fill
      alt="Looking for product"
      className="object-cover"
    />

    <div className="absolute inset-0  flex flex-col justify-center px-2">
      <h2 className="text-black relative text-[15px] font-semibold leading-snug mb-2">
        Looking for a <br />
        <span className="text-[#0D2340]">product?</span>
      </h2>

      <button className="bg-[#f48335] text-white text-[11px] px-2 py-1.5 rounded-md w-fit">
        Post Requirement →
      </button>
    </div>
  </div>

  {/* IMAGE 2 */}
  <div className="relative h-[140px] overflow-hidden ">
    <Image
      src="/mobile1-1.jpeg"
     fill
      alt="Grow business faster"
      className="object-cover"
    />

    <div className="absolute inset-0  flex flex-col justify-center px-2">
      <h2 className="text-black text-[15px] font-semibold leading-snug mb-2 relative">
        Grow business{" "} <br />
        <span className="text-[#0D2340]">10x faster</span>
      </h2>

      <button className="bg-[#24457a] text-white text-[11px] px-2 py-1.5 rounded-md w-fit">
        Free Listing →
      </button>
    </div>
  </div>

</div>

        {/* MORE VALUE ADDS */}
    <section className="w-full px-2 sm:px-4 md:px-6 py-3 bg-white relative">

  <h2 className="text-[16px] sm:text-[18px] font-semibold text-gray-800 mb-2">
    More Value Adds
  </h2>

  {/* ✅ Desktop Grid */}
  <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
    {data2.map((item, i) => (
      <Link
        href={item.link}
        key={i}
        className="h-[140px] bg-[#eeecec] border border-[#F48335] rounded-xl p-4 relative shadow-sm 
        hover:shadow-md transition-all duration-300 group overflow-visible 
        hover:bg-[#F48335]"
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
          alt="Hybrid B2B Marketplace in India"
          width={80}
          height={80}
          className="absolute right-0 -bottom-2 object-contain transition-all duration-300 z-0 group-hover:scale-110"
        />
      </Link>
    ))}
  </div>

  {/* ✅ Mobile Slider */}
  <div className="md:hidden">
 <Swiper
  modules={[Autoplay]}
  slidesPerView={2}
  spaceBetween={12}
  freeMode={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  loop={true}
>
      {data2.map((item, i) => (
        <SwiperSlide key={i}>
          <Link
            href={item.link}
            className="block h-[140px] bg-[#eeecec] border border-[#F48335] rounded-xl p-4 relative shadow-sm 
            transition-all duration-300 group overflow-visible 
            active:bg-[#F48335]"
          >

            <p className="text-[12px] text-black group-active:text-white relative z-10 mb-2">
              {item.title}
            </p>

            <h3 className="text-[13px] font-semibold text-gray-800 mt-1 leading-snug w-[90%] 
            group-active:text-white relative z-10">
              {item.subtitle}
            </h3>

            <div className="absolute bottom-4 left-4 flex items-center gap-1 text-orange-500 text-xs font-medium 
            group-active:text-white z-10">
              Learn more
              <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center 
              group-active:bg-white group-active:text-orange-500">
                <ArrowRight size={12} />
              </span>
            </div>

            <Image
              src={item.img}
              alt="Hybrid B2B Marketplace in India"
              width={80}
              height={80}
              className="absolute right-0 -bottom-2 object-contain transition-all duration-300 z-0 
              group-active:scale-110"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

</section>

      </div>
    </section>


   
    </>
  );
}