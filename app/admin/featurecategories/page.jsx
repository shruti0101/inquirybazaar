"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function FeaturedAdmin() {
  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    axios.get("/api/categories").then((res) => {
      setData(res.data.content || { products: [] });
    });
  }, []);

  const updateField = (i, field, value) => {
    const updated = [...data.products];
    updated[i][field] = value;
    setData({ ...data, products: updated });
  };

  const addProduct = () => {
    setData({
      ...data,
      products: [
        ...data.products,
        { name: "", image: "", price: "", reviews: "", badge: "", extra: "" },
      ],
    });
  };

  const save = async () => {
    await axios.post("/api/categories", data);
   toast.success(" products updated successfully!")
  };

  const uploadImage = async (file, index) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );

    const result = await res.json();

    const updated = [...data.products];
    updated[index].image = result.secure_url;

    setData({ ...data, products: updated });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-10">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Featured Products
        </h1>

        <button
          onClick={save}
          className="bg-black text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition"
        >
          Save Changes
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {data.products.map((p, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Image Upload */}
            <div className="mb-4">
              {p.image ? (
                <img
                  src={p.image}
                  className="w-full h-40 object-cover rounded-xl mb-3"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-xl text-gray-400">
                  No Image
                </div>
              )}

              <input
                type="file"
                className="text-sm"
                onChange={(e) => uploadImage(e.target.files[0], i)}
              />
            </div>

            {/* Inputs */}
            <div className="space-y-3">
              <input
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-black outline-none"
                placeholder="Product Name"
                value={p.name}
                onChange={(e) => updateField(i, "name", e.target.value)}
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-black outline-none"
                  placeholder="Price"
                  value={p.price}
                  onChange={(e) => updateField(i, "price", e.target.value)}
                />

                <input
                  className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-black outline-none"
                  placeholder="Reviews"
                  value={p.reviews}
                  onChange={(e) => updateField(i, "reviews", e.target.value)}
                />
              </div>

              <input
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-black outline-none"
                placeholder="Badge (e.g. Best Seller)"
                value={p.badge}
                onChange={(e) => updateField(i, "badge", e.target.value)}
              />

              <input
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-black outline-none"
                placeholder="Extra Info"
                value={p.extra}
                onChange={(e) => updateField(i, "extra", e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add Button */}
      <div className="mt-10">
        <button
          onClick={addProduct}
          className="w-full py-4 rounded-2xl border-2 border-dashed border-gray-300 text-gray-600 hover:bg-gray-100 transition"
        >
          + Add New Product
        </button>
      </div>
    </div>
  );
}