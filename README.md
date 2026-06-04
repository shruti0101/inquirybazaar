This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.









<!-- 



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
  {/* Mobile Image */}
  <source
    media="(max-width: 768px)"
    srcSet={mobileImages[i % mobileImages.length]}
  />

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
        )} -->


<!-- // "use client";
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
// } -->