

"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
export default function RecentRecommendations() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      const searches = JSON.parse(localStorage.getItem("recentSearches")) || [];

      const categorySearches = searches.filter(
        (search) => search.type === "Category",
      );

      if (!categorySearches.length) {
        setLoading(false);
        return;
      }

      const uniqueCategoryKeywords = Array.from(
        new Set(categorySearches.map((search) => search.keyword)),
      );

      const productResponses = await Promise.all(
        uniqueCategoryKeywords.map(async (keyword) => {
          const res = await fetch(
            `https://backend.inquirybazaar.com/api/search/${keyword}`,
          );
          return res.json();
        }),
      );

      const allProducts = productResponses.flatMap((data) =>
        data?.success && data?.data?.products ? data.data.products : [],
      );

      const uniqueProducts = Array.from(
        new Map(allProducts.map((product) => [product._id, product])).values(),
      );

      setProducts(uniqueProducts.slice(0, 20));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!loading && products.length === 0) return null;

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="pb-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold">Recommended For You</h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollSlider("left")}
              className="h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollSlider("right")}
              className="h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
        <Swiper
  modules={[Navigation, Autoplay]}
  navigation
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  spaceBetween={24}
  slidesPerView={1.2}
  breakpoints={{
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  
  }}
  className="!pb-4"
>
  {products.slice(0, 6).map((product) => {
    const imageUrl =
      product.media?.find((item) => item.type === "image")?.url ||
      product.media?.[0]?.url ||
      product.image ||
      product.imageUrl ||
      product.thumbnail ||
      product.photo;

    return (
     <SwiperSlide key={product._id} className="h-auto">
  <div
    className="
      h-[520px]
      bg-white
      rounded-[28px]
      overflow-hidden
      border border-gray-200
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
      flex
      flex-col
      group
    "
  >
    {/* Product Image */}
    <div className="relative h-[220px] bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={product.name}
          className="
            w-[180px]
            h-[180px]
            object-contain
            transition-all
            duration-500
            group-hover:scale-110
          "
        />
      ) : (
        <div className="text-gray-400">No Image</div>
      )}

      <span className="absolute top-4 right-4 bg-[#ec771c] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
        MOQ {product.minOrderQty || 1}
      </span>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5">
      <h3
        className="
          text-lg
          font-bold
          text-[#1A2238]
          leading-7
          line-clamp-2
          h-[56px]
        "
      >
        {product.name}
      </h3>

      <p className="text-gray-500 text-sm mt-2 truncate">
        {product.brandName}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Starting From</p>
          <p className="text-[30px] font-bold text-[#ec771c] leading-none">
            ₹{product.price}
          </p>
        </div>

        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
          In Stock
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-5">
        <a
          href={`tel:${product?.supplier?.phone || product?.supplierId?.phone}`}
          className="
            h-11
            rounded-xl
            border-2
            border-[#183B63]
            text-[#183B63]
            font-semibold
            flex
            items-center
            justify-center
            hover:bg-[#183B63]
            hover:bg-black
            hover:text-white
            transition
          "
        >
          Call Now
        </a>

        <button
          onClick={() => openQuoteModal(product)}
          className="
            h-11
            rounded-xl
            bg-[#183B63]
            text-white
            font-semibold
            hover:bg-[#102845]
            transition
          "
        >
          Request Quote
        </button>
      </div>
    </div>
  </div>
</SwiperSlide>
    );
  })}
</Swiper>
        )}
      </div>
    </section>
  );
}
