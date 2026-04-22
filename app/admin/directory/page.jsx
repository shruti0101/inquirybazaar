"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export default function DirectoryAdmin() {
  const [directories, setDirectories] = useState([]);

  useEffect(() => {
    axios.get("/api/directory").then((res) => {
      setDirectories(res.data || []);
    });
  }, []);

  const addDirectory = () => {
    setDirectories([
      ...directories,
      {
        _id: "temp_" + Date.now(),
        content: {
          title: "",
          image: "",
          sections: [],
        },
      },
    ]);
  };

  const deleteDirectory = async (id) => {
    if (typeof id === "string" && id.startsWith("temp_")) {
      setDirectories(directories.filter((d) => d._id !== id));
      return;
    }

    await axios.delete("/api/directory", {
      data: { id },
    });

    setDirectories(directories.filter((d) => d._id !== id));
  };

  const addSection = (dirIndex) => {
    const updated = [...directories];
    updated[dirIndex].content.sections.push({
      title: "",
      image: "",
      links: [{ text: "", url: "" }],
    });
    setDirectories(updated);
  };

  const addLink = (dirIndex, secIndex) => {
    const updated = [...directories];
    updated[dirIndex].content.sections[secIndex].links.push({
      text: "",
      url: "",
    });
    setDirectories(updated);
  };

  const uploadImage = async (file, dirIndex, secIndex = null) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );

    const result = await res.json();
    const updated = [...directories];

    if (secIndex === null) {
      updated[dirIndex].content.image = result.secure_url;
    } else {
      updated[dirIndex].content.sections[secIndex].image =
        result.secure_url;
    }

    setDirectories(updated);
  };

  const saveAll = async () => {
    try {
      const updatedDirectories = [];

      for (let dir of directories) {
        if (typeof dir._id === "string" && dir._id.startsWith("temp_")) {
          const res = await axios.post("/api/directory", dir.content);
          updatedDirectories.push(res.data);
        } else {
          const res = await axios.put("/api/directory", {
            _id: dir._id,
            content: dir.content,
          });
          updatedDirectories.push(res.data);
        }
      }

      setDirectories(updatedDirectories);
      toast.success("Saved Successfully ✅");
    } catch (error) {
      
      toast.error("Save Failed ❌");
    }
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen  p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold text-gray-800">
          Directory CMS
        </h1>

        <button
          onClick={saveAll}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition"
        >
          Save All
        </button>
      </div>

      {/* DIRECTORIES */}
      <div className="space-y-8">
        {directories.map((dir, dIndex) => (
          <div
            key={dir._id}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6"
          >

            {/* TOP */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg px-3 py-2 rounded-md font-medium text-white bg-blue-400">
                DIRECTORY {dIndex + 1}
              </h2>

              <button
                onClick={() => deleteDirectory(dir._id)}
                className="text-white bg-red-600 py-3 px-4 rounded-md cursor-pointer text-md"
              >
                Delete
              </button>
            </div>

            {/* TITLE */}
            <input
              className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Directory Title"
              value={dir.content.title}
              onChange={(e) => {
                const updated = [...directories];
                updated[dIndex].content.title = e.target.value;
                setDirectories(updated);
              }}
            />

            {/* IMAGE */}
         <div className="space-y-3">
  <input
    type="file"
    className="text-sm text-gray-500"
    onChange={(e) =>
      uploadImage(e.target.files[0], dIndex)
    }
  />

  {dir.content.image && (
    <img
      src={dir.content.image}
      alt="Hybrid B2B Marketplace in India"
      className="w-full h-48 object-cover rounded-xl border border-gray-200 shadow-sm"
    />
  )}
</div>


<h2 className="text-2xl font-bold">SUB CATEGORIES</h2>

            {/* SECTIONS */}
            <div className="space-y-5">
              {dir.content.sections.map((sec, sIndex) => (
                <div
                  key={sIndex}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-4"
                >

                    <h2 className="text-lg px-3 py-2 rounded-md font-medium text-white bg-blue-400">
              SUB CATEGORY {sIndex + 1}
              </h2>


                  <input
                    className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    value={sec.title}
                    placeholder="Section Title"
                    onChange={(e) => {
                      const updated = [...directories];
                      updated[dIndex].content.sections[sIndex].title =
                        e.target.value;
                      setDirectories(updated);
                    }}
                  />

               <div className="space-y-3">
  <input
    type="file"
    className="text-sm text-gray-500"
    onChange={(e) =>
      uploadImage(e.target.files[0], dIndex, sIndex)
    }
  />

  {sec.image && (
    <img
      src={sec.image}
      alt="Hybrid B2B Marketplace in India"
      className="w-full h-40 object-cover rounded-lg border border-gray-200"
    />
  )}
</div>



                  {/* LINKS */}
                  <div className="space-y-3">
                    {sec.links.map((link, lIndex) => (
                      <div key={lIndex} className="flex gap-3">
                        <input
                          className="flex-1 border border-gray-200 rounded-lg p-2"
                          placeholder="Text"
                          value={link.text}
                          onChange={(e) => {
                            const updated = [...directories];
                            updated[dIndex].content.sections[sIndex].links[lIndex].text =
                              e.target.value;
                            setDirectories(updated);
                          }}
                        />

                        <input
                          className="flex-1 border border-gray-200 rounded-lg p-2"
                          placeholder="URL"
                          value={link.url}
                          onChange={(e) => {
                            const updated = [...directories];
                            updated[dIndex].content.sections[sIndex].links[lIndex].url =
                              e.target.value;
                            setDirectories(updated);
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => addLink(dIndex, sIndex)}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    + Add Link
                  </button>


                  <input
  placeholder="View All Link (/category)"
  value={sec.viewAllLink || ""}
  onChange={(e) => {
    const updated = [...directories];
    updated[dIndex].content.sections[sIndex].viewAllLink = e.target.value;
    setDirectories(updated);
  }}
  className="border p-2 w-full"
/>

                </div>
              ))}
            </div>

            <button
              onClick={() => addSection(dIndex)}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-black"
            >
              + Add Sub Category
            </button>

          </div>
        ))}
      </div>

      {/* ADD DIRECTORY */}
      <div className="mt-10">
        <button
          onClick={addDirectory}
          className="bg-white border border-gray-300 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition"
        >
          + Add Directory
        </button>
      </div>
    </div>
  );
}