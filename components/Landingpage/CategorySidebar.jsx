"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const CategorySidebar = () => {
  const [showAll, setShowAll] = useState(false);
  const [catData, setCatData] = useState([]);
  const [loading, setLoading] = useState(true);

  const visibleCount = 15;

  const displayedCategories = showAll
    ? catData
    : catData.slice(0, visibleCount);

  const truncate = (text = "", limit = 12) =>
    text.length > limit ? `${text.slice(0, limit)}..` : text;

  useEffect(() => {
    let isMounted = true;

    const fetchIndustries = async () => {
      try {
        // Show cached data instantly
        const cached = localStorage.getItem("industries");

        if (cached) {
          try {
            const parsed = JSON.parse(cached);

            if (Array.isArray(parsed) && isMounted) {
              setCatData(parsed);
              setLoading(false);
            }
          } catch (err) {
            console.error("Invalid cache:", err);
          }
        }

        // Refresh from API
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/industries`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch industries");
        }

        const result = await res.json();

        if (isMounted && Array.isArray(result?.data)) {
          setCatData(result.data);

          localStorage.setItem(
            "industries",
            JSON.stringify(result.data)
          );
        }
      } catch (error) {
        console.error("Error fetching industries:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchIndustries();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {/* MOBILE CATEGORY SLIDER */}
      <div className="md:hidden col-span-12 bg-white shadow-sm py-4 px-2 z-50">
        {loading ? (
          <div className="flex gap-3 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <Swiper
            spaceBetween={12}
            slidesPerView="auto"
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={catData.length > 5}
          >
            {catData.map((cat) => (
              <SwiperSlide
                key={cat._id || cat.slug}
                style={{ width: "auto" }}
              >
                <a
                  href={`https://dir.inquirybazaar.com/industries/${cat.slug}`}
                  className="flex flex-col items-center justify-center min-w-[60px]"
                >
                  <div className="text-xl mb-1">{cat.icon}</div>

                  <span className="text-xs capitalize text-black whitespace-nowrap">
                    {truncate(cat.name)}
                  </span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:block col-span-3 bg-white rounded-lg p-3 sticky top-0 self-start shadow h-fit">
        {loading ? (
          <div className="space-y-2">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-8 rounded bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <>
            {displayedCategories.map((cat) => (
              <a
                key={cat._id || cat.slug}
                href={`https://dir.inquirybazaar.com/industries/${cat.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex group items-center gap-3 py-2 px-2 hover:bg-gray-100 rounded transition"
              >
                <span>{cat.icon}</span>

                <span className="text-sm capitalize">
                  {cat.name}
                </span>

                <div className="ml-auto">
                  <ChevronRight className="text-orange-500 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </a>
            ))}

            {catData.length > visibleCount && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="w-full mt-2 bg-orange-100 py-2 text-sm font-medium hover:text-orange-600 transition"
              >
                {showAll ? "Show Less ↑" : "Show More ↓"}
              </button>
            )}
          </>
        )}

        {/* REVIEW BOX */}
        <div className="mt-5 bg-[#F5EDB7] rounded-2xl h-[150px] p-4 shadow-sm">
          <a
            href="https://www.google.com/maps/place/Inquiry+Bazaar+%5C%5C+Hybrid+B2B+Marketplace/@28.6922061,77.1477074,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03087fd1b4df:0xec224959e4ec6e13!8m2!3d28.6922061!4d77.1477074!16s%2Fg%2F11njwfyl1v"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3"
          >
            <div className="w-14 h-14 mt-5 flex-shrink-0">
              <img
                src="/write-review-icon.webp"
                alt="Write Review"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h3 className="text-[25px] mt-5 leading-none font-bold text-[#1B2A41]">
                Write a Review
              </h3>

              <p className="text-[12px] xl:text-[15px] leading-[1.4] text-black mt-2 max-w-[250px]">
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