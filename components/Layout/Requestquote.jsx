"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import axios from "axios";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

export default function RequestQuotePopup({
  isOpen,
  setIsOpen,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    gstNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // OTP STATES
  const [otp, setOtp] = useState("");
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [confirmationResult, setConfirmationResult] =
    useState(null);

  const [isPhoneVerified, setIsPhoneVerified] =
    useState(false);

  // UNIQUE CAPTCHA ID
  const recaptchaId = "request-quote-recaptcha";

  // FIREBASE RECAPTCHA
  useEffect(() => {
    if (!isOpen) return;

    const initializeRecaptcha = async () => {
      try {
        if (
          typeof window !== "undefined" &&
          !window.requestQuoteRecaptchaVerifier
        ) {
          const verifier = new RecaptchaVerifier(
            auth,
            recaptchaId,
            {
              size: "normal",
            }
          );

          await verifier.render();

          // STORE VERIFIER
          window.requestQuoteRecaptchaVerifier =
            verifier;
        }
      } catch (error) {
        console.log(error);
      }
    };

    initializeRecaptcha();

    return () => {
      try {
        if (
          window.requestQuoteRecaptchaVerifier
        ) {
          window.requestQuoteRecaptchaVerifier.clear();

          window.requestQuoteRecaptchaVerifier =
            null;
        }

        const recaptchaElement =
          document.getElementById(recaptchaId);

        if (recaptchaElement) {
          recaptchaElement.innerHTML = "";
        }
      } catch (error) {
        console.log(error);
      }
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SEND OTP
  const sendOTP = async () => {
    try {
      setLoading(true);

      if (
        !form.phone ||
        form.phone.trim().length !== 10
      ) {
        toast.error("Enter Valid Phone Number");
        return;
      }

      // GET VERIFIER
      let appVerifier =
        window.requestQuoteRecaptchaVerifier;

      // RECREATE IF MISSING
      if (!appVerifier) {
        appVerifier = new RecaptchaVerifier(
          auth,
          recaptchaId,
          {
            size: "normal",
          }
        );

        await appVerifier.render();

        window.requestQuoteRecaptchaVerifier =
          appVerifier;
      }

      const result = await signInWithPhoneNumber(
        auth,
        `+91${form.phone.trim()}`,
        appVerifier
      );

      setConfirmationResult(result);

      setShowOtpBox(true);

      toast.success("OTP Sent Successfully");
    } catch (error) {
      console.log(error);

      // RESET CAPTCHA ON ERROR
      try {
        if (
          window.requestQuoteRecaptchaVerifier
        ) {
          window.requestQuoteRecaptchaVerifier.clear();

          window.requestQuoteRecaptchaVerifier =
            null;
        }

        const recaptchaElement =
          document.getElementById(recaptchaId);

        if (recaptchaElement) {
          recaptchaElement.innerHTML = "";
        }
      } catch (err) {
        console.log(err);
      }

      toast.error(
        error?.message || "Failed to Send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const verifyOTP = async () => {
    try {
      setLoading(true);

      if (!otp) {
        toast.error("Enter OTP");
        return;
      }

      if (!confirmationResult) {
        toast.error("Please send OTP first");
        return;
      }

      await confirmationResult.confirm(otp);

      setIsPhoneVerified(true);

      toast.success("Phone Verified Successfully");

      // SUBMIT FORM AFTER VERIFY
      await submitForm();
    } catch (error) {
      console.log(error);

      toast.error("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // SUBMIT FORM
  const submitForm = async () => {
    try {
      setLoading(true);

    const formData = {
  platform: "Request Quote Popup Form inquirybazaar site",
  platformEmail: "care@inquirybazaar.com",
  name: form.name,
  phone: form.phone,
  email: form.email,
  place: "N/A",
  product: "N/A",

  message: `
Company Name: ${form.companyName}

GST Number: ${form.gstNumber}

Requirement: ${form.message}
  `,
};

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        toast.success(
          "Request Submitted Successfully"
        );

        const whatsappText = `Hi, I am ${form.name}.

Company Name: ${form.companyName}

GST Number: ${form.gstNumber}

Email: ${form.email}

Message: ${form.message}

Contact: ${form.phone}`;

        const waUrl = `https://wa.me/6306530720?text=${encodeURIComponent(
          whatsappText
        )}`;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);

        // RESET
        setForm({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          gstNumber: "",
          message: "",
        });

        setOtp("");
        setShowOtpBox(false);
        setConfirmationResult(null);
        setIsPhoneVerified(false);

        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      } else {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      console.log(error);

      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      return toast.error(
        "Please fill all required fields"
      );
    }

    if (form.phone.trim().length !== 10) {
      return toast.error(
        "Enter Valid Phone Number"
      );
    }

    // IF VERIFIED
    if (isPhoneVerified) {
      await submitForm();
      return;
    }

    // SEND OTP
    await sendOTP();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 overflow-y-auto py-10">

      <div className="bg-white w-full max-w-[600px] rounded-2xl shadow-xl p-6 relative animate-scaleIn">

        {/* CLOSE */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        {/* HEADING */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">
            Request a Quote
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Fill details and we’ll contact you shortly
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name *"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              disabled={loading}
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              disabled={loading}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              disabled={loading}
            />

            <input
              type="text"
              name="gstNumber"
              value={form.gstNumber}
              onChange={handleChange}
              placeholder="GST Number"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              disabled={loading}
            />
          </div>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value.replace(
                  /\D/g,
                  ""
                ),
              })
            }
            maxLength={10}
            placeholder="Phone Number *"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            disabled={loading}
            required
          />

          {/* RECAPTCHA */}
          <div
            id={recaptchaId}
            className="flex justify-center"
          ></div>

          {/* OTP BOX */}
          {showOtpBox && !isPhoneVerified && (
            <div className="space-y-3">

              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) =>
                  setOtp(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                maxLength={6}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              />

              <button
                type="button"
                onClick={verifyOTP}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
              >
                {loading
                  ? "Verifying..."
                  : "Verify OTP"}
              </button>
            </div>
          )}

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Your requirement..."
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#10316C] text-white py-3 rounded-lg font-semibold"
          >
            {loading
              ? "Loading..."
              : !showOtpBox
              ? "Send OTP"
              : !isPhoneVerified
              ? "Verify OTP First"
              : "Submit Request"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .animate-scaleIn {
          animation: scaleIn 0.25s ease;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }

          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}