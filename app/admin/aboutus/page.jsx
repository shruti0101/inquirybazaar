"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import { toast } from "react-hot-toast";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

export default function AdminAbout() {
  const editor = useRef(null);

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch("/api/aboutus", {
          signal: controller.signal
        });

        if (!res.ok) throw new Error("Failed to fetch content");

        const data = await res.json();
        setContent(data?.content || "");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError("Failed to load content");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  const handleSave = useCallback(async () => {
    try {
      setSaving(true);
      setError("");

      const res = await fetch("/api/aboutus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ content })
      });

      if (!res.ok) throw new Error("Save failed");

      toast.success("Content Saved successfully!");
    } catch (err) {
      console.error(err);
      setError("Failed to save content");
    } finally {
      setSaving(false);
    }
  }, [content]);

  return (
    <div className="admin-container px-10">
      <div className="editor-card">
        <div className="editor-header flex justify-between items-center py-10">
          <h2 className="text-xl font-semibold">About Us Editor</h2>

          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {error && (
          <p className="text-red-500 mb-3 text-sm">{error}</p>
        )}

        {loading ? (
          <p>Loading editor please wait...</p>
        ) : (
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
        )}
      </div>
    </div>
  );
}