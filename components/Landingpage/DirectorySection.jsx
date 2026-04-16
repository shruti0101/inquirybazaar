// "use client";
// import Link from "next/link";

// export default function DirectorySection({ data }) {
//   if (!data || !data.sections) return null;

//   return (
//     <section className="px-8 py-8 bg-white rounded-sm">

//       {/* TITLE */}
//       <h2 className="text-2xl font-semibold mb-6 text-black">
//         {data.title}
//       </h2>

//       <div className="grid grid-cols-12 gap-6">

//         {/* LEFT IMAGE */}
//         <div className="col-span-4">
//           {data.image && (
//             <img
//               src={data.image}
//               className="w-full h-full object-cover rounded"
//             />
//           )}
//         </div>

//         {/* RIGHT */}
//         <div className="col-span-8 grid grid-cols-3 gap-8">

//           {data.sections.map((sec, i) => (
//             <div key={i} className="flex gap-3 group">

//               {/* ICON */}
//               {sec.image && (
//                 <img
//                   src={sec.image}
//                   className="w-16 h-16 object-contain"
//                 />
//               )}

//               {/* CONTENT */}
//               <div className="flex flex-col">

//                 {/* SECTION TITLE (CLICKABLE) */}
//                 {sec.viewAllLink ? (
//                   <Link
//                     href={sec.viewAllLink}
//                     className="font-semibold text-lg mb-1 hover:text-orange-500 transition"
//                   >
//                     {sec.title}
//                   </Link>
//                 ) : (
//                   <h3 className="font-semibold text-sm mb-1">
//                     {sec.title}
//                   </h3>
//                 )}

//                 {/* LINKS */}
//                 <div className="flex flex-col text-blue-600 text-sm space-y-1">
//                   {sec.links?.map((link, j) => (
//                     link.url ? (
//                       <Link
//                         key={j}
//                         href={link.url}
//                         className="hover:underline hover:text-orange-500 transition"
//                       >
//                         {link.text}
//                       </Link>
//                     ) : (
//                       <span key={j}>{link.text}</span>
//                     )
//                   ))}
//                 </div>

//                 {/* VIEW ALL BUTTON */}
//                 {sec.viewAllLink && (
//                   <Link
//                     href={sec.viewAllLink}
//                     className="mt-2 text-sm text-red-600 hover:text-orange-500 transition flex items-center gap-1"
//                   >
//                    view all -
//                   </Link>
//                 )}

//               </div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import Link from "next/link";

export default function CategorySection({ data }) {
  return (
    <div className="w-full mx-auto px-2 py-8 bg-white">
      
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        {data.title}
      </h2>

      <div className="grid grid-cols-12 gap-4">
        
        {/* LEFT IMAGE */}
        <div className="col-span-12 md:col-span-4">
          <div className="bg-gray-100 h-full">
            <Image
              src={data.mainImage}
              alt={data.title}
              width={400}
              height={350}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.categories.map((item, index) => (
            <div key={index} className="flex gap-3">
              
              {/* ICON */}
              <div className="w-18 h-18 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={70}
                  height={66}
                  className="object-contain"
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>

                <div className="flex flex-col text-sm text-blue-600">
                  {item.links.map((link, i) => (
                    <Link key={i} href="#" className="hover:underline">
                      {link}
                    </Link>
                  ))}
                </div>

                <Link
                  href="#"
                  className="text-sm text-gray-600 mt-1 inline-block hover:underline"
                >
                  + View All
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}