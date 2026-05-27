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
{/* WRITE REVIEW BOX */}
<div className="mt-5 bg-[#F5EDB7] rounded-2xl p-4 shadow-sm">
  
  {/* TOP */}
  <a href="https://www.google.com/search?sca_esv=69538f729b95e5bf&sxsrf=ANbL-n7uxvdh_X3dUXXDmVfX6zpqoFp5TQ:1779880445560&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOXT6y7tboRhshNIYWu8MITTAmcuFKzjNF4w6QsR-blybB0U6kBMPLoIJItMf7aNF1VHKpimG1Jvbaa2eynmTJUyPv9T9KMuCqO4XwVlbq7paeRMPrJLUAizKnT4ECpPqMmKM2qCnwoF72Qtglqz7qWqsTnlq34iUgaQIpCJkAVIjAVOj1M--QPlCpy7H2wlFlS1I1adJeDd4oRibASIywk3XQjQN8zpMfrcuHhau6538WJSnvw%3D%3D&q=Promozione+Branding+Pvt.+Ltd+%7C+Best+Digital+Marketing+Agency+In+Delhi+NCR+%7C+Web+Development,SEO,+PPC,+SMM+Agency+Reviews&sa=X&ved=2ahUKEwj128ytq9mUAxX26jgGHY5jI7EQ0bkNegQIKhAH&biw=1536&bih=695&dpr=1.25" className="flex items-start gap-3">
    
    {/* ICON */}
    <div className="w-14 h-14 flex-shrink-0">
      <img
        src="/write-review-icon.webp"
        alt="review"
        className="w-full h-full object-contain"
      />
    </div>

    {/* TEXT */}
    <div>
      <h3 className="text-[28px] leading-none font-bold text-[#1B2A41]">
        Write a Review
      </h3>

      <p className="text-[15px] leading-[1.4] text-[#4B5563] mt-2 max-w-[250px]">
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