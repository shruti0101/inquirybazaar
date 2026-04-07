"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Footerlink() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    axios.get("/api/footerlink").then((res) => {
      setCategories(res.data.categories || []);
      setBrands(res.data.brands || []);
      setSearches(res.data.searches || []);
    });
  }, []);

  const addItem = (setter, data) => {
    setter([...data, { title: "", link: "" }]);
  };

  const updateItem = (setter, data, i, field, value) => {
    const updated = [...data];
    updated[i][field] = value;
    setter(updated);
  };

  const deleteItem = (setter, data, i) => {
    setter(data.filter((_, index) => index !== i));
  };

  const save = async () => {
    await axios.post("/api/footerlink", {
      categories,
      brands,
      searches
    });
    toast.success("Footer updated!");
  };

  const renderSection = (title, data, setter) => (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        <button
          onClick={() => addItem(setter, data)}
          className="text-sm bg-black text-white px-3 py-1.5 rounded-lg hover:opacity-90"
        >
          + Add
        </button>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 border rounded-xl p-4 space-y-3 hover:shadow transition"
          >
            <input
              placeholder="Title"
              value={item.title}
              onChange={(e) =>
                updateItem(setter, data, i, "title", e.target.value)
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
            />

            <input
              placeholder="Link (/category)"
              value={item.link}
              onChange={(e) =>
                updateItem(setter, data, i, "link", e.target.value)
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
            />

            <button
              onClick={() => deleteItem(setter, data, i)}
              className="text-xs text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {data.length === 0 && (
        <p className="text-sm text-gray-400 text-center py-6">
          No items added yet
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Footer Manager
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage categories, brands and popular searches
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {renderSection("Categories", categories, setCategories)}
        {renderSection("Brands", brands, setBrands)}
        {renderSection("Popular Searches", searches, setSearches)}
      </div>

      {/* Sticky Save Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md py-3 px-6 flex justify-end">
        <button
          onClick={save}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Save Changes
        </button>
      </div>

    </div>
  );
}