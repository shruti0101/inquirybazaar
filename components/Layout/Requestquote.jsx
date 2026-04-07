"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";

export default function RequestQuotePopup({ isOpen, setIsOpen }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      return toast.error("Please fill all required fields");
    }

    try {
      setLoading(true);

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Request submitted successfully");
        setForm({ name: "", email: "", phone: "", message: "" });
        setIsOpen(false); 
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="bg-white w-full max-w-[600px] rounded-2xl shadow-xl p-6 relative animate-scaleIn">

        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Request a Quote</h2>
          <p className="text-gray-500 text-sm mt-1">
            Fill details and we’ll contact you shortly
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name *"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email *"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Your requirement..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          <button
            type="submit"
            className="w-full bg-[#10316C] text-white py-3 rounded-lg"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>  

      <style jsx>{`
        .animate-scaleIn {
          animation: scaleIn 0.25s ease;
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}