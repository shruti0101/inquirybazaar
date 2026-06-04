


import Image from "next/image";
import Link from "next/link";

export default function CategorySection({ data }) {
  
  

  return (
    <div className="w-full mx-auto px-3 md:px-6 py-2 md:py-5 bg-white">
      
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">
        {data.name}
      </h2>

      <div className="grid grid-cols-12 gap-4 ">
        
        {/* LEFT IMAGE */}
        <div className="col-span-12 md:col-span-4">
          <div className="bg-gray-100 ">
            <Image
              src={data.imageUrl}
              alt={data.name}
              width={400}
              height={500}
              className="object-cover h-[160px] sm:h-[220px] md:h-[240px] w-full"
              
            />
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-2 md:gap-6">
          {data.categories.slice(0,4).map((item, index) => (
            <div key={index} className="flex gap-3">
              
              {/* ICON */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={70}
                  height={66}
                  className="object-contain"
                />
              </div>

              {/* TEXT */}
              <div>
                <a target="_blank" className="hover:underline" href={`${process.env.NEXT_PUBLIC_DIR_URL}categories/${item.slug}`}>

                <h3 className="text-[10px] md:text-lg space-y-1 font-semibold text-gray-800 mb-1">
                  {item.name}
                </h3>
                </a>

          <div className="flex flex-col text-[9px] md:text-[15px]  text-orange-600">
  {item.subCategories.slice(0,3).map((link, index) => (
    <a target="_blank"
      key={index}
      href={`${process.env.NEXT_PUBLIC_DIR_URL}category/${link.slug}`}
    className="hover:underline flex items-start gap-2 leading-[1.2]"
    >
     <span className="w-1 h-1 rounded-full bg-orange-500 mt-[5px] flex-shrink-0"></span>
      {link.name}
    </a>
  ))}
</div>
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM BUTTON (UNCHANGED) */}
        <div className="col-span-12 flex justify-center ">
          <Link
            href={`${process.env.NEXT_PUBLIC_DIR_URL}industries/${data.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ef7a1b] text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
          >
            View More →
          </Link>
        </div>

      </div>
    </div>
  );
}