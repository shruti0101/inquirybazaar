"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Autoplay } from "swiper/modules";

// ✅ Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CategorySidebar = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleCount = 15;
  const categoriesToShow = showAll
    ? data?.categories
    : data?.categories?.slice(0, visibleCount);

const truncate = (text, limit = 12) =>
  text.length > limit ? text.slice(0, limit) + ".." : text;

  return (
    <>
      {/* ✅ MOBILE SWIPER SLIDER */}
      <div className="md:hidden col-span-12  bg-white shadow-sm py-4 px-2   z-50">
        <Swiper
          spaceBetween={12}
          slidesPerView={"auto"}
              modules={[Autoplay]}
              
              
                      autoplay={{ delay: 3000 }}
          
        >
          {data?.categories?.map((cat, i) => (
            <SwiperSlide key={i} style={{ width: "auto" }}>
              <Link
                href={cat.link}
                className="flex flex-col items-center justify-center min-w-[60px]"
              >
                <div className="text-xl mb-1">{cat.icon}</div>
                <span className="text-xs  capitalize text-black whitespace-nowrap">
           {truncate(cat.name)}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ DESKTOP SIDEBAR (UNCHANGED) */}
      <div className="hidden md:block col-span-3  bg-white rounded-lg p-3 sticky top-0 self-start shadow h-fit">
        {categoriesToShow?.length > 0 ? (
          <>
            {categoriesToShow.map((cat, i) => (
              <Link
                href={cat.link}
                key={i}
                className="flex group items-center gap-3 py-2 px-2 hover:bg-gray-100 rounded transition"
              >
                <span>{cat.icon}</span>

                <span className="text-sm cursor-pointer group capitalize">
                  {cat.name}
                </span>

                <div className="ml-auto">
                  <ChevronRight className="text-sm text-orange-500 group-hover:translate-x-2 transform transition-all duration-300" />
                </div>
              </Link>
            ))}

            {/* SHOW MORE BUTTON */}
            {data?.categories?.length > visibleCount && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="w-full bg-orange-100 text-md py-2 font-medium text-black hover:text-orange-600 transition"
              >
                {showAll ? "Show Less ↑" : "Show More ↓"}
              </button>
            )}
          </>
        ) : (
          <p></p>
        )}




{/* WRITE REVIEW BOX */}
<div className="mt-5 bg-[#F5EDB7] rounded-2xl h-[150px] p-4 shadow-sm">
  
  {/* TOP */}
  <a href="https://www.google.com/maps/place/Inquiry+Bazaar+%5C%5C+Hybrid+B2B+Marketplace/@28.6922061,77.1477074,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03087fd1b4df:0xec224959e4ec6e13!8m2!3d28.6922061!4d77.1477074!16s%2Fg%2F11njwfyl1v?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D" className="flex items-start gap-3">
    
    {/* ICON */}
    <div className="w-14 mt-5 h-14 flex-shrink-0">
      <img
        src="/write-review-icon.webp"
        alt="review"
        className="w-full h-full object-contain"
      />
    </div>

    {/* TEXT */}
    <div>
      <h3 className="text-[25px] mt-5 leading-none font-bold text-[#1B2A41]">
        Write a Review
      </h3>

      <p className="text-[15px]  leading-[1.4] text-black mt-2 max-w-[250px]">
        Share your experiences with the products
      </p>
    </div>
  </a>


</div>

      </div>
    </>
  );
};

export default CategorySidebar;