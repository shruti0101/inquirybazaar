"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Image, LayoutGrid, Layers } from "lucide-react";
import toast from "react-hot-toast";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function HeroAdmin() {
  const [data, setData] = useState({
    categories: [],
    banners: [],
    banners2: [],
  });

  useEffect(() => {
    axios.get("/api/hero").then((res) => {
      if (res.data) {
        setData({
          categories: res.data.content?.categories || [],
          banners: res.data.content?.banners || [],
          banners2: res.data.content?.banners2 || [],
        });
      }
    });
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(sections);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);

    setSections(items);
  };

  const addCategory = () => {
    setData({
      ...data,
      categories: [...data.categories, { name: "", icon: "", link: "" }],
    });
  };

  const addBanner = () => {
    setData({
      ...data,
      banners: [
        ...data.banners,
        { title: "", subtitle: "", image: "", button: "" },
      ],
    });
  };

  const addBanner2 = () => {
    setData({
      ...data,
      banners2: [...data.banners2, { image: "" }],
    });
  };

  const save = async () => {
    await axios.post("/api/hero", data);
    toast.success("Content saved successfully!");
  };

  const uploadImage = async (file, index, type = "banners") => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData },
    );

    const dataRes = await res.json();
    if (!dataRes.secure_url) return;

    const updated = [...data[type]];
    updated[index].image = dataRes.secure_url;

    setData({ ...data, [type]: updated });
  };

  return (
    <div className="min-h-screen bg-[#f6f8fc] p-8">
      {/* HEADER */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Hero CMS Editor</h1>
          <p className="text-gray-500">Manage hero, categories and banners</p>
        </div>

        <button
          onClick={save}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
        >
          Save Changes
        </button>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CATEGORIES */}
        <DragDropContext
          onDragEnd={(result) => {
            if (!result.destination) return;

            const items = Array.from(data.categories);
            const [moved] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, moved);

            setData({ ...data, categories: items });
          }}
        >
          <Droppable droppableId="categories" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {data.categories.map((cat, i) => (
                  <Draggable key={i} draggableId={`cat-${i}`} index={i}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="group relative bg-white rounded-2xl border p-4 shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        {/* DELETE BUTTON */}
                        <button
                          onClick={() => {
                            const updated = data.categories.filter(
                              (_, idx) => idx !== i,
                            );
                            setData({ ...data, categories: updated });
                          }}
                          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition text-red-500 hover:scale-110"
                        >
                          ✕
                        </button>

                        {/* PREVIEW */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-xl shadow">
                            {cat.icon || "📦"}
                          </div>

                          <div>
                            <p className="font-semibold text-gray-800 text-sm">
                              {cat.name || "Category"}
                            </p>
                            <p className="text-xs text-gray-400 truncate max-w-[120px]">
                              {cat.link || "/category"}
                            </p>
                          </div>
                        </div>

                        {/* INPUTS */}
                        <div className="space-y-2">
                          <input
                            className="w-full text-sm px-3 py-2 rounded-md bg-gray-50 border focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Category Name"
                            value={cat.name}
                            onChange={(e) => {
                              const updated = [...data.categories];
                              updated[i].name = e.target.value;
                              setData({ ...data, categories: updated });
                            }}
                          />

                          <div className="flex gap-2">
                            <input
                              className="w-14 text-center px-2 py-2 rounded-md bg-gray-50 border"
                              placeholder="📦"
                              value={cat.icon}
                              onChange={(e) => {
                                const updated = [...data.categories];
                                updated[i].icon = e.target.value;
                                setData({ ...data, categories: updated });
                              }}
                            />

                            <input
                              className="flex-1 text-sm px-3 py-2 rounded-md bg-gray-50 border"
                              placeholder="/category-link"
                              value={cat.link}
                              onChange={(e) => {
                                const updated = [...data.categories];
                                updated[i].link = e.target.value;
                                setData({ ...data, categories: updated });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}


<div className="col-span-full">


                <button
                  onClick={addCategory}
                  className="my-3 w-full py-2 mx-auto  border-dashed  rounded-lg  text-white border cursor-pointer  bg-blue-600 hover:bg-blue-800"
                >
                  + Add More Category
                </button>
</div>
              </div>
            )}
          </Droppable>
        </DragDropContext>





  {/* BELOW BANNERS */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border ">
          <div className="flex items-center gap-2 mb-4">
            <Image className="text-orange-500" />
            <h2 className="text-lg font-semibold">Below Banners</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.banners2.map((b, i) => (
              <div
                key={i}
                className="border p-4 rounded-xl bg-gray-50 text-center"
              >
                <input
                  type="file"
                  onChange={(e) =>
                    uploadImage(e.target.files[0], i, "banners2")
                  }
                />

                {b.image && (
                  <img
                    src={b.image}
                    className="w-full h-28 object-cover rounded-lg mt-2"
                  />
                )}
              </div>
            ))}
          </div>


<div className="flex justify-center ">


          <button
            onClick={addBanner2}
            className="mt-15 px-7 cursor-pointer text-white border border-dashed py-2 rounded-lg bg-blue-600 hover:bg-blue-800"
          >
            + Add Banner
          </button>
</div>
        </div>



        {/* MAIN BANNERS */}
        <div className="bg-white col-span-full p-6 rounded-2xl shadow-sm border">
          <div className="flex  gap-2 mb-4">
            <Layers className="text-purple-600" />
            <h2 className="text-lg font-semibold">Main Banners</h2>
          </div>

          <div className="space-y-4">
            {data.banners.map((b, i) => (
              <div
                key={i}
                className="border p-4 rounded-xl bg-gray-50 space-y-2"
              >
                <input
                  placeholder="Title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
                  value={b.title}
                  onChange={(e) => {
                    const updated = [...data.banners];
                    updated[i].title = e.target.value;
                    setData({ ...data, banners: updated });
                  }}
                />

                <input
                  placeholder="Subtitle"
               className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
                  value={b.subtitle}
                  onChange={(e) => {
                    const updated = [...data.banners];
                    updated[i].subtitle = e.target.value;
                    setData({ ...data, banners: updated });
                  }}
                />

                <input
                  type="file"
                  onChange={(e) => uploadImage(e.target.files[0], i, "banners")}
                />

                {b.image && (
                  <img
                    src={b.image}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>

          <button
            onClick={addBanner}
            className="mt-4 w-full border border-dashed py-2 rounded-lg hover:bg-gray-50"
          >
            + Add Banner
          </button>
        </div>

      
      </div>
    </div>
  );
}
