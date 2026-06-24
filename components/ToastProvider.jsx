"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          marginTop: "80px",
          borderRadius: "12px",
          background: "#fff",
          color: "#111",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        },
      }}
    />
  );
}