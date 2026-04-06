"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, ExampleCorp",
    photo: "/testimonials/jane.jpg",
    message:
      "This service completely transformed our business. Professional, reliable, and excellent support.",
  },
  {
    name: "John Smith",
    role: "Marketing Head, Acme Inc.",
    photo: "/testimonials/john.jpg",
    message:
      "A seamless experience from start to finish. Highly recommend for anyone looking to grow.",
  },
  {
    name: "Alice Johnson",
    role: "Founder, Startup XYZ",
    photo: "/testimonials/alice.jpg",
    message:
      "Exceptional quality and attention to detail. The team really cares about your success.",
  },
  {
    name: "Michael Lee",
    role: "CTO, Tech Solutions",
    photo: "/testimonials/michael.jpg",
    message:
      "Innovative and reliable team. Helped us scale our platform efficiently.",
  },
  {
    name: "Sara Patel",
    role: "Product Manager, RetailCorp",
    photo: "/testimonials/sara.jpg",
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
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center max-w-md mx-auto h-full">
              <img
                src={photo}
                alt={`${name} photo`}
                className="w-20 h-20 rounded-full object-cover mb-6"
                loading="lazy"
              />
              <p className="text-gray-700 italic mb-6 max-w-prose">“{message}”</p>
              <p className="font-semibold text-gray-900">{name}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}