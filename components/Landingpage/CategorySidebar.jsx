"use client"
import Link from "next/link";
import { ChevronRight } from "lucide-react";
const CategorySidebar = ({data}) => {
  return (
    <div>

          {/* LEFT CATEGORIES */}
      <div className="col-span-3 bg-white rounded-lg p-4 sticky top-0 self-start shadow h-fit">
        {data?.categories?.length > 0 ? (
          data.categories.map((cat, i) => (
            <Link href={cat.link}
              key={i}
              className="flex group items-center gap-3 py-2 px-2 hover:bg-gray-100 rounded"
            >
              <span>{cat.icon}</span>
              <span className="text-md cursor-pointer group capitalize">{cat.name}</span>
              <div href={cat.link} className="ml-auto "> 
                <ChevronRight  className="text-xs text-orange-500 group-hover:translate-x-2  transform transition-all duration-300"></ChevronRight>
              </div>
            </Link>
          ))
        ) : (
          <p>No categories</p>
        )}
      </div>
    </div>
  )
}

export default CategorySidebar