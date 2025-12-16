"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Filter,
  Download,
  Grid,
  List,
  Phone,
  Shield,
  Award,
  Zap,
  TrendingUp,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { translations } from "@/lib/translations";
import { getProductsByCategory } from "@/lib/products";
import CollageSection from "@/components/CollageSection";
import VideoSection from "@/components/VideoSection";

export default function HydraulicBoltTensionersPage() {
  // Since this is a static route (en-gcc), hardcode the values
  const country = "gcc";
  const lang = "en";
  const t = translations[lang] || translations.en;

  const categoryProducts = getProductsByCategory("Hydraulic Bolt Tensioners");

  const [selectedSeries, setSelectedSeries] = useState("All");
  const [selectedApplication, setSelectedApplication] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const filteredProducts = categoryProducts.filter((product) => {
    const seriesMatch =
      selectedSeries === "All" || product.series === selectedSeries;
    const applicationMatch =
      selectedApplication === "All" ||
      (product.applications &&
        product.applications.includes(selectedApplication));
    return seriesMatch && applicationMatch;
  });

  const allSeries = [
    "All",
    ...new Set(categoryProducts.map((p) => p.series).filter(Boolean)),
  ];
  const allApplications = [
    "All",
    ...new Set(categoryProducts.flatMap((p) => p.applications || [])),
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation country={country} lang={lang} translations={t} />

      {/* =============================== HERO SECTION =============================== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/industries/refinery-background.jpg"
              alt="Hydraulic Bolt Tensioners"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95" />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav
              className="flex items-center justify-center space-x-3 text-sm text-gray-400 mb-8"
              aria-label="Breadcrumb"
            >
              <Link
                href="/en-gcc"
                className="hover:text-white transition-colors font-medium"
              >
                Home
              </Link>
              <span className="text-gray-600">/</span>
              <Link
                href="/en-gcc/products"
                className="hover:text-white transition-colors font-medium"
              >
                Products
              </Link>
              <span className="text-gray-600">/</span>
              <span className="text-white font-semibold">
                Hydraulic Bolt Tensioners
              </span>
            </nav>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Hydraulic Bolt Tensioners
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              Precision-engineered bolt tensioning solutions for critical
              industrial applications. Trusted by leading EPC contractors
              worldwide.
            </p>

            {/* Certifications */}
            <div className="flex justify-center items-center space-x-12 pt-8 border-t border-white/10">
              {[
                { src: "/images/cert/iso.webp", name: "ISO" },
                { src: "/images/cert/ecitb.webp", name: "ECITB" },
                { src: "/images/cert/ce-seeklogo.png", name: "CE" },
              ].map((cert, i) => (
                <div key={i} className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl group-hover:bg-white/30 transition-all" />
                  <div className="relative h-16 w-20">
                    <Image
                      src={cert.src}
                      alt={`${cert.name} Certification`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================== FILTERS =============================== */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b-2 border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left: Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2.5 text-gray-700 font-bold text-sm">
                <Filter className="w-5 h-5 text-[#D6312F]" />
                <span>Filter By:</span>
              </div>

              {allSeries.length > 1 && (
                <select
                  value={selectedSeries}
                  onChange={(e) => setSelectedSeries(e.target.value)}
                  className="px-5 py-2.5 border-2 border-gray-200 rounded-xl font-semibold text-gray-900 hover:border-[#D6312F] focus:border-[#D6312F] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D6312F]/20 bg-white shadow-sm"
                >
                  {allSeries.map((series) => (
                    <option key={series} value={series}>
                      {series === "All" ? "All Series" : `${series} Series`}
                    </option>
                  ))}
                </select>
              )}

              {allApplications.length > 1 && (
                <select
                  value={selectedApplication}
                  onChange={(e) => setSelectedApplication(e.target.value)}
                  className="px-5 py-2.5 border-2 border-gray-200 rounded-xl font-semibold text-gray-900 hover:border-[#D6312F] focus:border-[#D6312F] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D6312F]/20 bg-white shadow-sm"
                >
                  {allApplications.map((app) => (
                    <option key={app} value={app}>
                      {app === "All" ? "All Applications" : app}
                    </option>
                  ))}
                </select>
              )}

              {(selectedSeries !== "All" || selectedApplication !== "All") && (
                <button
                  onClick={() => {
                    setSelectedSeries("All");
                    setSelectedApplication("All");
                  }}
                  className="px-4 py-2 text-sm text-[#D6312F] font-bold hover:bg-red-50 rounded-xl transition-all"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Right: View Controls */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-semibold text-sm">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "Product" : "Products"}
              </span>
              <div className="flex bg-gray-100 rounded-xl p-1 shadow-inner">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-white shadow-md text-[#D6312F]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-white shadow-md text-[#D6312F]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== PRODUCTS GRID =============================== */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  country={country}
                  lang={lang}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {filteredProducts.map((product) => (
                <ProductListItem
                  key={product.id}
                  product={product}
                  country={country}
                  lang={lang}
                />
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-32">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-5xl">🔍</span>
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-3">
                No Products Found
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                Try adjusting your filters to see more results
              </p>
              <button
                onClick={() => {
                  setSelectedSeries("All");
                  setSelectedApplication("All");
                }}
                className="px-8 py-4 bg-[#D6312F] text-white rounded-xl font-bold hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Rest of your sections... */}

      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}

/* ====================== Helper Components ====================== */
function ProductCard({ product, country, lang }) {
  return (
    <Link
      href={`/${lang}-${country}/product/${product.slug}`}
      className="group"
    >
      {/* Your existing ProductCard JSX */}
    </Link>
  );
}

function ProductListItem({ product, country, lang }) {
  return (
    <Link
      href={`/${lang}-${country}/product/${product.slug}`}
      className="group block"
    >
      {/* Your existing ProductListItem JSX */}
    </Link>
  );
}
