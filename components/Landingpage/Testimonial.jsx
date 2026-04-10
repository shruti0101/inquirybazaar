"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "matrix tissues",
    photo: "/client1logo.webp",
    message:
      "InquiryBazaar ne sirf listing nahi di, balki hume real business inquiries milna start hua. Leads ka quality genuinely better hai aur conversion bhi improve hua.",
  },
  {
    name: "exotic crate",
    photo: "/client2logo.webp",
    message:
      "Pehle hum multiple platforms use kar rahe the but results clear nahi the. Yahan hume proper visibility aur genuine buyers mile — exactly what we needed.",
  },
  {
    name: "shree shakti infratech",
    photo: "/client3logo.webp",
    message:
      "InquiryBazaar ka biggest advantage hai targeted inquiries. Random calls band ho gaye aur sirf serious buyers hi connect karte hain.",
  },
  {
    name: "strides design studio",
    photo: "/client5logo.webp",
    message:
      "Unki marketing approach alag hai — sirf listing nahi, actively promote karte hain. Isse humari brand visibility kaafi strong hui hai.",
  },
  {
    name: "bhagya laxmi industries",
    photo: "/client4logo.webp",
    message:
      "Platform use karna simple hai aur results transparent hain. Hume clearly dikhta hai inquiries kahan se aa rahi hain. Highly Recommended",
  },
  {
    name: "mr dates",
    photo: "/client6logo.webp",
    message:
      "InquiryBazaar ne humara time aur effort dono bachaya. Ab hume sirf relevant aur high-intent buyers se hi inquiries milti hain.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white py-12 text-center max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-8 text-gray-900">What Our Clients Say</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
     {testimonials.map(({ name, role, photo, message }, index) => (
  <SwiperSlide key={index} className="h-full">
    
   <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col items-center text-center max-w-sm mx-auto">

  {/* Logo */}
  <div className="mb-4 flex items-center justify-center h-12">
    <img
      src={photo}
      alt={`${name} logo`}
      className="max-h-full w-auto object-contain"
      loading="lazy"
    />
  </div>

  {/* Message */}
  <p className="text-black italic text-md leading-relaxed mb-4 flex-grow">
    “{message}”
  </p>

  {/* Name */}
  <p className="font-semibold capitalize text-gray-900">{name}</p>



</div>

  </SwiperSlide>
))}
      </Swiper>
    </section>
  );
}