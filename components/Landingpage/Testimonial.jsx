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
    photo: "/client7logo.webp",
    message:
      "InquiryBazaar ne humara time aur effort dono bachaya. Ab hume sirf relevant aur high-intent buyers se hi inquiries milti hain.",
  },
  {
    name: "Vands Engineering Solutions ",
    photo: "/client8logo.webp",
    message:
      "InquiryBazaar ne humari sales team ka kaafi time bachaya. Ab random calls ki jagah sirf serious industrial buyers hi contact karte hain.",
  },
  {
    name: "Eutair ",
    photo: "/client9logo.png",
    message:
      "InquiryBazaar ki targeted lead generation ki wajah se hume air compressor aur compressed air solutions ke liye high-quality business inquiries milti hain.",
  },
  {
    name: "JL Industries ",
    photo: "/client10logo.png",
    message:
      "Business expansion ke liye InquiryBazaar ek effective B2B marketplace hai. Quality inquiries aur professional support ki wajah se humara overall experience excellent raha hai.",
  },
  {
    name: "RYKA ",
    photo: "/client11logo.webp",
    message:
      "RYKA ke liye InquiryBazaar ek valuable B2B marketplace hai. Industrial buyers tak pahunchna pehle se kaafi aasan ho gaya hai.",
  },
  {
    name: "NewTech",
    photo: "/client15logo.png",
    message:
      "InquiryBazaar ne hume naye corporate clients tak pahunchne ka ek effective platform diya hai. Inquiry quality achhi hai aur business opportunities bhi lagatar mil rahi hain.",
  },
 
  {
    name: "Genzee Switchgears ",
    photo: "/client13logo.webp",
    message:
      "Hum InquiryBazaar ki professional support aur quality lead generation se bahut satisfied hain. Yeh platform business growth ke liye kaafi beneficial sabit hua hai.",
  },
  {
    name: "Anand Aggarwal Properties",
    photo: "/client11logo.webp",
    message:
 "Platform par listing ke baad humari online visibility aur client reach dono mein noticeable growth dekhne ko mili hai. Overall experience bahut positive raha hai.",    },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white pt-3 text-center max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold  text-gray-900">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        spaceBetween={30}
        slidesPerView={3}
        className="!pb-10"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map(({ name, photo, message }, index) => (
          <SwiperSlide key={index} className="!h-auto flex">
            {/* CARD */}
            <div className="flex flex-col w-full bg-white rounded-2xl shadow-lg p-4 h-full">
              {/* Logo */}
              <div className="mb-4 flex items-center justify-center h-12">
                <img
                  src={photo}
                  alt={name}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Message */}
              <p className="text-black italic text-sm leading-relaxed flex-grow">
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
