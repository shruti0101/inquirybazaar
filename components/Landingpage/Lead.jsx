"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { auth } from "@/lib/firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import toast from "react-hot-toast";

export default function LoginPopup() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("phone");
  const [confirmationResult, setConfirmationResult] = useState(null);

  useEffect(() => {
    setTimeout(() => setOpen(true), 1500);
  }, []);

  // Setup recaptcha
  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
  };

  // Send OTP
  const sendOtp = async () => {
    if (phone.length !== 10) return toast.error("Enter valid number");

    try {
      setupRecaptcha();

      const appVerifier = window.recaptchaVerifier;

      const result = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        appVerifier
      );

      setConfirmationResult(result);
      setStep("otp");

      toast.success("OTP Sent");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send OTP");
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);

      // Save to DB
      await fetch("/api/lead", {
        method: "POST",
        body: JSON.stringify({ phone }),
      });

      // WhatsApp redirect
      window.open(
        `https://wa.me/91${phone}?text=Thanks for registering with us!`,
        "_blank"
      );

      setStep("success");

      setTimeout(() => {
        setOpen(false);
      }, 2000);
    } catch (err) {
      toast.error("Invalid OTP");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">

      <div className="bg-white w-full max-w-[400px] rounded-2xl p-6 relative shadow-xl">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3"
        >
          <X />
        </button>

        {/* PHONE */}
        {step === "phone" && (
          <>
            <h2 className="text-xl font-semibold text-center">
              Get Best Price
            </h2>

            <input
              type="tel"
              placeholder="Enter mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-5 px-4 py-3 border rounded-lg"
            />

            <button
              onClick={sendOtp}
              className="w-full bg-black text-white py-3 mt-4 rounded-lg"
            >
              Send OTP
            </button>
          </>
        )}

        {/* OTP */}
        {step === "otp" && (
          <>
            <h2 className="text-xl font-semibold text-center">
              Verify OTP
            </h2>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full mt-5 px-4 py-3 border rounded-lg text-center tracking-[6px]"
            />

            <button
              onClick={verifyOtp}
              className="w-full bg-black text-white py-3 mt-4 rounded-lg"
            >
              Verify OTP
            </button>
          </>
        )}

        {/* SUCCESS */}
        {step === "success" && (
          <div className="text-center py-6">
            <h2 className="text-green-600 text-xl font-semibold">
              🎉 Success
            </h2>
            <p className="mt-2">
              Thank you for registering with us!
            </p>
          </div>
        )}

        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}