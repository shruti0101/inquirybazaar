// "use client";

// import { useEffect, useState } from "react";
// import { X } from "lucide-react";
// import { auth } from "@/lib/firebase";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";
// import toast from "react-hot-toast";

// export default function LoginPopup() {
//   const [open, setOpen] = useState(false);
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState("phone");
//   const [confirmationResult, setConfirmationResult] = useState(null);

//   useEffect(() => {
//     setTimeout(() => setOpen(true), 1500);
//   }, []);

//   // Setup recaptcha
//   const setupRecaptcha = () => {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       auth,
//       "recaptcha-container",
//       {
//         size: "invisible",
//       }
//     );
//   };

//   // Send OTP
//   const sendOtp = async () => {
//     if (phone.length !== 10) return toast.error("Enter valid number");

//     try {
//       setupRecaptcha();

//       const appVerifier = window.recaptchaVerifier;

//       const result = await signInWithPhoneNumber(
//         auth,
//         `+91${phone}`,
//         appVerifier
//       );

//       setConfirmationResult(result);
//       setStep("otp");

//       toast.success("OTP Sent");
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to send OTP");
//     }
//   };

//   // Verify OTP
//   const verifyOtp = async () => {
//     try {
//       await confirmationResult.confirm(otp);

//       // Save to DB
//       await fetch("/api/lead", {
//         method: "POST",
//         body: JSON.stringify({ phone }),
//       });

//       // WhatsApp redirect
//       window.open(
//         `https://wa.me/91${phone}?text=Thanks for registering with us!`,
//         "_blank"
//       );

//       setStep("success");

//       setTimeout(() => {
//         setOpen(false);
//       }, 2000);
//     } catch (err) {
//       toast.error("Invalid OTP");
//     }
//   };

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">

//       <div className="bg-white w-full max-w-[400px] rounded-2xl p-6 relative shadow-xl">

//         <button
//           onClick={() => setOpen(false)}
//           className="absolute top-3 right-3"
//         >
//           <X />
//         </button>

//         {/* PHONE */}
//         {step === "phone" && (
//           <>
//             <h2 className="text-xl font-semibold text-center">
//               Get Best Price
//             </h2>

//             <input
//               type="tel"
//               placeholder="Enter mobile number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full mt-5 px-4 py-3 border rounded-lg"
//             />

//             <button
//               onClick={sendOtp}
//               className="w-full bg-black text-white py-3 mt-4 rounded-lg"
//             >
//               Send OTP
//             </button>
//           </>
//         )}

//         {/* OTP */}
//         {step === "otp" && (
//           <>
//             <h2 className="text-xl font-semibold text-center">
//               Verify OTP
//             </h2>

//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="w-full mt-5 px-4 py-3 border rounded-lg text-center tracking-[6px]"
//             />

//             <button
//               onClick={verifyOtp}
//               className="w-full bg-black text-white py-3 mt-4 rounded-lg"
//             >
//               Verify OTP
//             </button>
//           </>
//         )}

//         {/* SUCCESS */}
//         {step === "success" && (
//           <div className="text-center py-6">
//             <h2 className="text-green-600 text-xl font-semibold">
//               🎉 Success
//             </h2>
//             <p className="mt-2">
//               Thank you for registering with us!
//             </p>
//           </div>
//         )}

//         <div id="recaptcha-container"></div>
//       </div>
//     </div>
//   );
// }


"use client";

import { Lock } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoginPopup({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  // on first load
  useEffect(() => {
   const timer= setTimeout(()=>{
setIsOpen(true);
   },5000) 
  return () => clearTimeout(timer); 
}, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={handleClose}
      >
        {/* POPUP CARD */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ backgroundImage: "url(/bgform.jpeg)" }}
          className="w-[650px] bg-center bg-cover relative rounded-[26px] p-8 bg-white/90 backdrop-blur-xl border  shadow-[0_20px_60px_rgba(0,0,0,0.25)] animate-fadeIn"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
          >
            ✕
          </button>

          {/* CONTENT */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                🔍
              </div>
              <span className="text-2xl font-semibold text-[#1E3A5F]">
                Inquiry <span className="text-orange-500">Bazaar</span>
              </span>
            </div>

            <h2 className="text-[26px] font-bold text-[#0f172a]">
              Welcome Back!
            </h2>
            <p className="text-gray-600 mt-1 mb-6">
              Login for a seamless experience
            </p>

            <div className="flex items-center border border-gray-300 rounded-xl px-6 py-3 bg-white shadow-sm mb-5">
              <span className="mr-3 text-sm"> +91</span>
              <div className="w-[1px] h-6 bg-gray-300 mr-3" />
              <input
                type="text"
                placeholder="Enter mobile number"
                className="w-full outline-none bg-transparent text-[15px]"
              />
            </div>

            <div className="flex items-start justify-center gap-2 mb-5">
              <input
                type="checkbox"
                defaultChecked
                required
                className="mt-1 accent-blue-600"
              />
              <p className="text-sm text-gray-700 leading-tight">
                I Agree to{" "}
                <span className="text-orange-500 font-medium cursor-pointer">
                  Terms & Conditions
                </span>
               
                <span className="underline cursor-pointer text-gray-600">
                  T&C's Privacy Policy
                </span>
              </p>
            </div>

            <button
              className="
              w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-[17px]
              bg-gradient-to-r from-[#ff5c00] via-[#ff6a00] to-[#2b4eff]
              shadow-[0_12px_30px_rgba(255,90,0,0.45)]
              hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-300
            "
            >
              <Lock size={18} />
              Login with OTP
            </button>

            <p
              onClick={handleClose}
              className="text-center mt-5 text-gray-600 cursor-pointer hover:text-black"
            >
              Maybe Later
            </p>
          </div>
        </div>
      </div>
    </>
  );
}