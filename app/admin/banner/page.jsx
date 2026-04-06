"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Banner3Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/banner").then((res) => {
      setData(res.data.content || []);
    });
  }, []);

  const addBanner = () => {
    if (data.length >= 3) return alert("Only 3 banners allowed");
    setData([...data, { image: "", link: "" }]);
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

    const updated = [...data];
    updated[index].image = result.secure_url;

    setData(updated);
  };

  const save = async () => {
    await axios.post("/api/banner", data);
  toast.success("Banners updated successfully!")
  };

  return (
    <div className="p-10 space-y-6">

      <h1 className="text-2xl font-bold">3 Banner Section</h1>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


      {data.map((b, i) => (
        <div key={i} className="border p-4 rounded space-y-2">

          <input
            type="file"
            onChange={(e) => uploadImage(e.target.files[0], i)}
          />

          {b.image && (
            <img src={b.image} className="w-full h-40 object-cover rounded" />
          )}

          <input
            placeholder="Link (/category)"
            value={b.link}
            onChange={(e) => {
              const updated = [...data];
              updated[i].link = e.target.value;
              setData(updated);
            }}
            className="border p-2 w-full"
          />

        </div>
      ))}
</div>


<div className="flex gap-6 justify-center items-center">

      <button onClick={addBanner} className="bg-black text-white px-4 py-2">
        + Add Banner
      </button>

      <button onClick={save} className="bg-green-600 text-white px-6 py-2">
        Save
      </button>
</div>

    </div>
  );
}