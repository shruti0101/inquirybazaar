"use client";

import { Layers, Image, LayoutGrid, Settings } from "lucide-react";
import Link from "next/link";
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your landing page content
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Sections</h3>
          <p className="text-2xl font-bold mt-2">4</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm">Banners</h3>
          <p className="text-2xl font-bold mt-2">3</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm">Categories</h3>
          <p className="text-2xl font-bold mt-2">8</p>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* HERO */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="text-blue-600" />
            <h2 className="text-lg font-semibold">Hero Section</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Manage slider banners and hero content
          </p>
          <Link href="/admin/hero" className="text-blue-600 font-medium">
            Edit →
          </Link>
        </div>

        {/* CATEGORIES */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <LayoutGrid className="text-green-600" />
            <h2 className="text-lg font-semibold">Categories</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Add, remove  categories
          </p>
          <Link href="/admin/featurecategories" className="text-green-600 font-medium">
            Edit →
          </Link>
        </div>

        {/* directories */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <Image className="text-orange-500" />
            <h2 className="text-lg font-semibold">Create Directories and Sub Directories</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Manage directories , Sub Directories and their links on landing page

          </p>
          <Link href="/admin/directory" className="text-orange-500 font-medium">
            Edit →
          </Link>
        </div>

        {/* BELOW THREE BANNERS */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <Image className="text-purple-500" />
            <h2 className="text-lg font-semibold">Below Three Banners</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Manage secondary promotional banners
          </p>
          <Link href="/admin/banner" className="text-purple-500 font-medium">
            Edit →
          </Link>
        </div>

        {/* SETTINGS */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-gray-600" />
            <h2 className="text-lg font-semibold">Footer Links</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">
          Add and change links of categories, brands and popular searches in footer
          </p>
          <Link href="/admin/footerlink" className="text-gray-700 font-medium">
            Edit →
          </Link>
        </div>

      </div>
    </div>
  );
}