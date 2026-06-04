"use client";

import {
  ShoppingCart,
  BadgeDollarSign,
  ShieldCheck,
  Users,
  Star,
  Lock,
} from "lucide-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function HeroInquiry() {







const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;

  const product = form.product.value;
  const mobile = form.mobile.value;

  if (mobile.length !== 10) {
    return toast.error("Enter valid mobile number");
  }

  try {
    setLoading(true);

    const formData = {
      platform: "Hero Inquiry Form",
      platformEmail: "lead.inquirybazaar@gmail.com",
      name: "N/A",
      phone: mobile,
      email: "N/A",
      place: "N/A",
      product: product,
      message: `Product Requirement: ${product}`,
    };

    const { data } = await axios.post(
      "https://brandbnalo.com/api/form/add",
      formData
    );

    if (data?.success) {
      toast.success("Requirement Submitted Successfully");

      const whatsappText = `Hi,

I am looking for:

${product}

My Contact Number: ${mobile}`;

      window.open(
        `https://wa.me/6306530720?text=${encodeURIComponent(
          whatsappText
        )}`,
        "_blank"
      );

      form.reset();
    } else {
      toast.error("Submission Failed");
    }
  } catch (error) {
    console.log(error);
    toast.error("Server Error");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="bg-[#f7f8fa] relative overflow-hidden">
      {/* BACKGROUND */}
   

      <div className="relative px-4 sm:px-6 md:px-8  grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-start max-w-7xl mx-auto">
        {/* ================= LEFT ================= */}
        <div>
          <h1 className="text-[24px] sm:text-[32px]  leading-[36px] sm:leading-[46px] md:leading-[56px] font-bold text-[#1f2937]">
            We connect {" "}
            <span className="text-[#e85d12]">Buyers & Sellers</span>
          </h1>

          <p className=" text-[14px] hidden md:block  text-black max-w-full sm:max-w-[600px] leading-relaxed">
Inquiry Bazaar is India’s hybrid B2B marketplace that connects businesses to verified buyers and trusted suppliers—making trade more reliable and efficient
          </p>

          {/* FEATURES */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-6 ">
            <Feature
              icon={<ShoppingCart className="text-[#10316C]" size={22} />}
              title=" Buyer Assistance"
              subtitle="Seamless sourcing"
            />
            <Feature
              icon={<BadgeDollarSign className="text-[#10316C]" size={22} />}
              title="India’s Hybrid B2B Network"
              subtitle="Competitive pricing"
            />
            <Feature
              icon={<ShieldCheck className="text-[#10316C]" size={22} />}
              title=" Quick Response "
              subtitle="Full protection"
            />
            <Feature
              icon={<Users className="text-[#10316C]" size={22} />}
              title="  Get Genuine Inquiries"
              subtitle="Verified inquiries"
            />
          </div>

       
        </div>

   
        <div className="md:pl-4 lg:pl-6">
          <div className="bg-white/80 backdrop-blur-lg border border-gray-200  p-4 ">
            <h2 className="text-[22px] sm:text-[24px] text-center font-semibold text-black leading-snug">
              Tell us what you need
              
            </h2>

       <form
  onSubmit={handleSubmit}
  className="mt-5 md:mt-6 space-y-4"
>
              <input
                name="product"
                type="text"
                placeholder="Product / Service"
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-[14px] sm:text-[15px] focus:ring-2 focus:ring-[#2a7f7f] outline-none"
                required
              />

              <div className="flex rounded-lg overflow-hidden border border-gray-300">
                <span className="px-3 sm:px-4 flex items-center bg-gray-100 text-gray-600 text-sm">
                  +91
                </span>
                <input
                  name="mobile"
                  type="tel"
                  placeholder="Mobile number"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[14px] sm:text-[15px] outline-none"
                  required
                />
              </div>

          <button
  type="submit"
  disabled={loading}
  className="w-full bg-gradient-to-r from-[#10316C] to-[#10316C] hover:opacity-90 text-white py-2.5 sm:py-3 rounded-lg text-[15px] sm:text-[17px] font-semibold shadow-md transition"
>
  {loading ? "Submitting..." : "Submit Requirement"}
</button>
            </form>

            {/* BENEFITS */}
            <div className="hidden md:block mt-5 md:mt-6 space-y-2 md:space-y-3 text-[13px] sm:text-[14px]">
              <div className="flex items-center gap-3 text-gray-600">
                <ShieldCheck size={14} className="text-[#10316C]" />
                100% genuine inquiries {"  "}

                    <Users size={14} className="text-[#10316C]" />
                Verified business leads
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* FEATURE COMPONENT */
function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-[#2a7f7f]/10 text-[#2a7f7f]">
        {icon}
      </div>
      <div>
        <p className="text-[14px] sm:text-[15px] font-semibold text-gray-800">
          {title}
        </p>
        <p className="text-[12px] sm:text-[13px] text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
