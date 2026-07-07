"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import {  X } from "lucide-react";

export default function InquiryChat() {
  const knowledgeBase = [
    {
      keywords: ["hi", "hy", "hello", "hey"],
      answer:
        "Hi there! I'm the Inquiry Bazaar Assistant. I can help you with any questions about our services, how to use the platform, or anything else related to Inquiry Bazaar. Just ask away!",
    },

    {
      keywords: [
        "what is inquiry bazaar",
        "about inquiry bazaar",
        "who are you",
      ],
      answer:
        "Inquiry Bazaar is India's hybrid B2B marketplace that connects verified buyers with trusted suppliers. Unlike traditional marketplaces, we combine supplier listings with active digital marketing to generate genuine business inquiries.",
    },

    {
      keywords: ["mission", "company mission"],
      answer:
        "Our mission is to turn India's hidden suppliers into India's preferred suppliers by providing visibility, promotion, and genuine buyer inquiries.",
    },

    {
      keywords: ["vision"],
      answer:
        "Our vision is to become India's most trusted B2B discovery platform where every serious buyer finds the right supplier in minutes, not months.",
    },

    {
      keywords: ["founder", "who founded inquiry bazaar"],
      answer:
        "Inquiry Bazaar was founded by Sourabh Sachin after years of experience working with MSMEs and manufacturers in India's B2B ecosystem.",
    },

    {
      keywords: ["when founded", "company started", "established"],
      answer:
        "Inquiry Bazaar was founded on 16 July 2024 under Promozione Branding Private Limited.",
    },

    {
      keywords: ["services", "what do you do", "offerings"],
      answer:
        "We provide dedicated supplier catalog pages, targeted call advertising, genuine buyer inquiries, premium visibility plans, exhibition promotion, supplier directories, and buyer sourcing tools.",
    },

    {
      keywords: ["catalog page"],
      answer:
        "Every supplier gets a dedicated catalog page featuring products, company information, and direct contact details.",
    },

    {
      keywords: ["call ads", "targeted ads"],
      answer:
        "We run targeted call advertisements so buyers searching for your products can directly reach your business.",
    },

    {
      keywords: ["leads", "inquiries", "buyer inquiries"],
      answer:
        "Inquiry Bazaar focuses on quality over quantity by delivering genuine, filtered, high-intent buyer inquiries directly to suppliers.",
    },

    {
      keywords: ["pricing", "membership", "premium plan"],
      answer:
        "We offer free business registration and product listings along with premium membership plans for higher visibility, better rankings, and more inquiries.",
    },

    {
      keywords: ["buyer process", "how buyer works"],
      answer:
        "Buyers post requirements, suppliers are matched, quotations are received, and deals are closed directly between buyer and supplier.",
    },

    {
      keywords: ["supplier process", "how supplier works"],
      answer:
        "Suppliers register, list products, get a catalog page, receive promotion through targeted advertising, and start receiving inquiries directly.",
    },

    {
      keywords: ["contact details", "direct contact"],
      answer:
        "Buyers can directly view and contact supplier phone numbers and email addresses without going through a shared platform inbox.",
    },

    {
      keywords: ["difference", "why inquiry bazaar", "unique"],
      answer:
        "Unlike traditional marketplaces, Inquiry Bazaar actively promotes suppliers, provides exclusive inquiries, shows direct contact details, and focuses on MSME growth.",
    },

    {
      keywords: ["msme", "manufacturers"],
      answer:
        "Inquiry Bazaar is built specifically for Indian MSMEs, manufacturers, factories, exporters, and suppliers looking for genuine business opportunities.",
    },

    {
      keywords: ["sister companies", "related brands"],
      answer:
        "Our sister brands include Promozione Branding, Promotion Branding and Top 10 Digital Marketing Agency.",
    },

    {
      keywords: ["free listing", "registration"],
      answer:
        "Business registration and product listing are completely free on Inquiry Bazaar.",
    },

    {
      keywords: ["domain", "premium domain"],
      answer:
        "Inquiry Bazaar also offers premium domain sales and branding opportunities for businesses.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const [form, setForm] = useState({
    name: "",

    phone: "",
    question: "",
  });

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good Morning ☀️";
    } else if (hour < 17) {
      return "Good Afternoon 🌤️";
    } else {
      return "Good Evening 🌙";
    }
  };

  const [messages, setMessages] = useState([
    {
      text: `${getGreeting()} 👋 Welcome to Inquiry Bazaar. How can I help you today?`,
      sender: "bot",
    },
  ]);

  const getBotReply = (message) => {
    const msg = message.toLowerCase().trim();

    for (const item of knowledgeBase) {
      const matched = item.keywords.some((keyword) =>
        msg.includes(keyword.toLowerCase()),
      );

      if (matched) {
        return item.answer;
      }
    }

    return null;
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    const reply = getBotReply(input);

    if (!reply) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thank you for your question. To ensure you receive the most accurate information, please share your details below and one of our business experts will get in touch with you shortly.",
        },
      ]);

      setShowInquiryForm(true);

      setForm((prev) => ({
        ...prev,
        question: input,
      }));

      setInput("");
      return;
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: reply,
          sender: "bot",
        },
      ]);
    }, 500);

    setInput("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        platform: "Inquiry Bazaar Chat Assistant",
        platformEmail: "lead.inquirybazaar@gmail.com",
        supplierToken: "7303486777",
        name: form.name,
        phone: form.phone,
        email: "N/A",
        place: "N/A",
        product: form.question,
        message: form.question,
      };

      const response = await fetch("https://brandbnalo.com/api/form/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result?.success) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `Thank you ${form.name}! ✅ Your inquiry has been submitted successfully. One of our business experts will contact you shortly.`,
          },
        ]);

        setShowInquiryForm(false);

        setForm({
          name: "",
          email: "",
          phone: "",
          question: "",
        });
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "We couldn't submit your inquiry right now. Please try again in a few minutes.",
          },
        ]);
      }
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "There was a connection issue while submitting your inquiry. Please try again.",
        },
      ]);
    }
  };

const [showTooltip, setShowTooltip] = useState(true);
  return (
    <>
      {/* Floating Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        {!isOpen && showTooltip && (
          <div className="absolute bottom-20 right-0 animate-pulse">
  <div className="relative w-[240px] rounded-2xl bg-white px-4 py-3 shadow-xl border border-gray-200">

    {/* Close Button */}
    <button
      onClick={() => setShowTooltip(false)}
      className="absolute top-2 right-2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
    >
      <X size={16} />
    </button>

    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

      <p className="text-sm font-medium text-gray-800">
        IB Assistant is online
      </p>
    </div>

    <p className="mt-1 text-xs text-gray-500 pr-5">
      Ask me anything about suppliers, products and services.
    </p>

    <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 bg-white border-r border-b border-gray-200"></div>
  </div>
</div>
        )}

        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#EC771C] to-orange-600 text-white shadow-[0_10px_40px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-110"
        >
          <MessageCircle size={28} />

          {/* Online Dot */}
          <span className="absolute right-1 top-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"></span>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-9999 flex h-[550px] w-[400px] flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          {/* Header */}
          <div className="bg-orange-600 p-4 text-white">
            <h3 className="font-bold">IB Assistant</h3>
            <p className="text-xs opacity-90">
              Ask anything about our services
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-xl px-4 py-2 text-sm ${
                    msg.sender === "user"
                      ? "bg-orange-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {showInquiryForm && (
              <div className="mt-4 rounded-lg border bg-gray-50 p-4">
                <h3 className="mb-3 font-semibold">Submit Inquiry</h3>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    required
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className="mb-2 w-full rounded border p-2"
                  />

                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                    className="mb-2 w-full rounded border p-2"
                  />

                  <textarea
                    rows="4"
                    placeholder="Question"
                    value={form.question}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        question: e.target.value,
                      })
                    }
                    className="mb-2 w-full rounded border p-2"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 py-3 font-semibold text-white shadow-lg"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                placeholder="Ask a question..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                onClick={sendMessage}
                className="rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
