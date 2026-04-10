"use client";
import Link from "next/link"; 
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Headphones,
  PackageCheck,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full text-[13px] leading-[1.4]">
      {/* TOP STRIP */}
      <div className="bg-[#1e3a5f] text-white px-10 py-[26px]">
        <div className="grid grid-cols-4 gap-x-[60px] gap-y-[26px]">
          {/* COL 1 */}
          <div className="flex gap-[12px]">
            <Image
              src="/footer/bottom/imgi_99_helpline.webp"
              alt=""
               width={100}
    height={100}
    className="h-[50px] w-auto object-contain"

            />
            <div>
              <p className="font-semibold text-[15px]">Dedicated Support</p>
              <p className="text-[13px] mt-[2px]">Call: +91 7303486777</p>
              <p className="text-[13px]">(Mon–Sun: 9am–8pm)</p>
              <p className="text-[13px] mt-[2px]">Get quick assistance for all your business needs.</p>
            </div>
          </div>

          <div className="flex gap-[12px]">
            <Image
              src="/footer/bottom/imgi_102_original-tag.webp"
              alt=""
                width={100}
    height={100}
    className="h-[50px] w-auto object-contain"
            />
            <div>
              <p className="font-semibold text-[15px]">Verified Suppliers Only
</p>
              <p className="text-[13px] mt-[2px]">Connect with trusted manufacturers & wholesalers.
Every supplier is screened for quality and reliability.</p>
            </div>
          </div>

          {/* COL 2 */}
          <div className="flex gap-[12px]">
            <Image
              src="/footer/bottom/imgi_100_box.webp"
              alt=""
             width={100}
    height={100}
    className="h-[50px] w-auto object-contain"
            />
            <div>
              <p className="font-semibold text-[15px]">Quick Response Guarantee</p>
              <p className="text-[13px] mt-[2px]">Get multiple quotations within hours of posting your requirement.
Save time and close deals faster.</p>
            </div>
          </div>

          <div className="flex gap-[12px]">
            <Image
              src="/footer/bottom/imgi_103_wallet-check.webp"
              alt=""
               width={100}
    height={100}
    className="h-[47px] w-auto object-contain"
            />
            <div>
              <p className="font-semibold text-[15px]">Wide Product Categories</p>
              <p className="text-[13px] mt-[2px]">
               Explore lakhs of products across multiple industries.
One platform for all your B2B sourcing needs.
              </p>
            </div>
          </div>

          {/* COL 3 */}
          <div className="flex gap-[12px]">
            <Image
              src="/footer/bottom/imgi_103_wallet-check.webp"
              alt=""
               width={100}
    height={100}
    className="h-[47px] w-auto object-contain"
            />
            <div>
              <p className="font-semibold text-[15px]">
                Buyer Assistance
              </p>
              <p className="text-[13px] mt-[2px]">
              Our team helps you find the right supplier at the best price.
Hassle-free sourcing experience guaranteed.
              </p>
            </div>
          </div>

          <div className="flex gap-[12px]">
            <Image
              src="/footer/bottom/imgi_104_secure-shield.webp"
              alt=""
                width={100}
    height={100}
    className="h-[50px] w-auto object-contain"
            />
            <div>
              <p className="font-semibold text-[15px]">Buyer Protection</p>
              <p className="text-[13px] mt-[2px] max-w-[260px]">
                Committed to buyer interests to provide a smooth shopping
                experience.
              </p>
            </div>
          </div>

      

          <div>
            <p className="font-semibold text-[15px] mb-[8px]">Follow us on</p>
            <div className="flex gap-[18px] text-[15px]">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaPinterestP />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>

      {/* GREEN SECTION */}
      <div className="bg-[#c9d8b6] px-[60px] py-[40px]">
        <div className="grid grid-cols-4 gap-[40px] items-start">
          <div>
            <p className="font-bold text-[15px] mb-[12px]">COMPANY</p>
            <ul className="space-y-[6px]">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Become a Supplier</li>
     
              <li>Blog</li>
            </ul>
          </div>

          <div className="space-y-[6px]">
            <p className="font-bold text-[15px] mb-[12px] ">SISTER SITE</p>
            <ul className="space-y-[6px]">
              <a href="https://www.promozionebranding.com/">Promozione Branding </a>
           
            </ul>

            <ul className="space-y-[6px]">
              <a href="https://www.promotionbranding.com/">Promotion Branding </a>
           
            </ul>

            
            <ul className="space-y-[6px]">
              <a href="https://promotebharat.com/">Promote Bharat </a>
           
            </ul>

               <ul className="space-y-[6px]">
              <a href="https://promotebharat.com/">Top 10 Digital Marketing Agency </a>
           
            </ul>
          </div>

          <div>
            <p className="font-bold text-[15px] mb-[12px]">HELP</p>
      
  <ul className="space-y-[6px]">
    
    <li>
      <Link href="/faqs" className="block">
        FAQs
      </Link>
    </li>

    <li>
      <Link href="/privacy-policy" className="block">
        Privacy Policy
      </Link>
    </li>

    <li>
      <Link href="/terms-conditions" className="block">
        Terms & Conditions
      </Link>
    </li>

    <li>
      <a href="mailto:care@inquirybazaar.com" className="block">
        Write to Management
      </a>
    </li>

  </ul>

          </div>

          {/* Newsletter */}
          <div className="bg-white rounded-[10px] px-[20px] py-[20px] shadow-sm">
            <p className="text-[16px] font-semibold mb-[12px] text-center">
              Subscribe to Newsletter
            </p>

            <div className="flex items-center bg-[#f3f3f3] rounded-full overflow-hidden h-[42px]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-[14px] text-[13px] bg-transparent outline-none"
              />
              <button className="bg-black text-white text-[12px] px-[18px] h-full">
                SUBMIT NOW
              </button>
            </div>

            <p className="text-[12px] text-gray-600 mt-[10px] text-center leading-[1.3]">
              Sign up to get exclusive offers from our favorite brands and to be
              well up in the news
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#f2f2f2] px-[60px] py-[14px] flex justify-between items-center text-[13px]">
        <p>Copyright@ Inquirybazaar Pvt Ltd. 2026 All Right Reserved</p>
 
        <div className="flex gap-[14px] items-center">
          <Image src="/payment-options.webp" alt="visa"      width={450}
    height={400}
    className=" object-cover" />
       
        </div>
      </div>
    </footer>
  );
}
