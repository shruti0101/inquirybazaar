"use client"
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const CategorySidebar = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleCount = 15; 
  const categoriesToShow = showAll
    ? data?.categories
    : data?.categories?.slice(0, visibleCount);

  return (
    <div>
      {/* LEFT CATEGORIES */}
      <div className="col-span-3 mt-32 bg-white rounded-lg p-3 sticky top-0 self-start shadow h-fit">
        
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

            {/* ✅ SHOW MORE BUTTON */}
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
      </div>
    </div>
  );
};

export default CategorySidebar;