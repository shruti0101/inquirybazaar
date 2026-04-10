"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, ExampleCorp",
    photo: "/client1logo.webp",
    message:
      "This service completely transformed our business. Professional, reliable, and excellent support.",
  },
  {
    name: "John Smith",
    role: "Marketing Head, Acme Inc.",
    photo: "/client2logo.webp",
    message:
      "A seamless experience from start to finish. Highly recommend for anyone looking to grow.",
  },
  {
    name: "Alice Johnson",
    role: "Founder, Startup XYZ",
    photo: "/client3logo.webp",
    message:
      "Exceptional quality and attention to detail. The team really cares about your success.",
  },
  {
    name: "Michael Lee",
    role: "CTO, Tech Solutions",
    photo: "/client1logo.webp",
    message:
      "Innovative and reliable team. Helped us scale our platform efficiently.",
  },
  {
    name: "Sara Patel",
    role: "Product Manager, RetailCorp",
    photo: "/client3logo.webp",
    message:
      "Outstanding service and great communication throughout the project.",
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
  <p className="font-semibold text-gray-900">{name}</p>

  {/* Role */}
  <p className="text-xs text-gray-500">{role}</p>

</div>

  </SwiperSlide>
))}
      </Swiper>
    </section>
  );
}