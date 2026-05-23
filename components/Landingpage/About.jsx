// "use client";

// import { useState } from "react";

// export default function AboutPage({ content }) {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <section className="px-8 mt-3 bg-white">

//       <div
//         className={`prose max-w-none transition-all duration-300 overflow-hidden ${
//           expanded ? "max-h-full" : "max-h-[550px]"
//         }`}
//       >
//         <div dangerouslySetInnerHTML={{ __html: content }} />
//       </div>

//       {/* Button Wrapper */}
//       <div className="flex justify-center w-full mt-4  py-2">
//         <button
//           onClick={() => setExpanded(!expanded)}
//           className="px-6 py-2 rounded-full bg-gray-300 hover:bg-gray-200 text-gray-800 shadow-sm border border-gray-300 transition-all duration-200"
//         >
//           {expanded ? "Show Less" : "Show More"}
//         </button>
//       </div>

//     </section>
//   );
// }





import React from 'react'

const About = () => {
  return (
    <div>
      <section className="w-full py-5 px-4 bg-white">
  <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <div className="text-start mb-2">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
        India’s Smartest B2B Growth Platform
      </h2>

      <p className="text-orange-500 font-medium mt-2 text-sm md:text-lg">
        Marketplace + Performance Marketing
      </p>
    </div>

    {/* Content */}
    <div className="space-y-3 text-black text-sm md:text-base ">

      <p>
        <span className="font-semibold text-black">
          InquiryBazaar.com
        </span>{" "}
        is not just another B2B platform —
        it’s a system built after deep market research and real industry understanding.
      </p>

      <p>
        Humne is concept ko ground-level problems samajh kar design kiya hai,
        jahan suppliers ko sirf listing milti hai, lekin real inquiries nahi milti.
      </p>

      <p>
        InquiryBazaar bridges this gap by combining{" "}
        <span className="font-semibold text-orange-500">
          marketplace + digital marketing
        </span>,
        so your products are not just listed — they are actively promoted.
      </p>

      <p>
        Jab koi buyer Google ya kisi platform par specific product search karta hai,
        we make sure aapki visibility top level par ho, so that you receive
        relevant and high-intent inquiries.
      </p>

      <p>
        The focus here is simple —
        <span className="font-semibold text-gray-800">
          {" "}quality over quantity.
        </span>
      </p>

      <p>
        Yahan random ya time-wasting leads nahi aati,
        sirf genuine buyers ki inquiries aati hain.
        Isse aapka time bhi bachta hai aur manpower ka unnecessary load bhi kam hota hai.
      </p>

      <p>
        Aap clearly dekh paoge ki aapki visibility kahan ho rahi hai
        aur inquiries ka source kya hai.
      </p>

      <p>
        This is not just about short-term leads —
        it’s about building long-term brand visibility and credibility.
      </p>

    </div>

    {/* Bottom Highlight */}
    <div className="mt-4 bg-orange-50 border border-orange-100 rounded-2xl p-3 text-center">
      <p className="text-gray-800 text-sm md:text-md font-medium leading-8">
        Simple words mein —
        <span className="text-orange-500 font-semibold">
          {" "}InquiryBazaar sirf aapko dikhata nahi,
        </span>{" "}
        balki aapke liye actual business generate karta hai.
      </p>
    </div>

  </div>
</section>
      
    </div>
  )
}

export default About
