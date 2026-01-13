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
import HeroEnquiryForm from "@/components/HeroEnquiryForm";

export default function HydraulicTorqueWrenchPage({ params }) {
  const { country = "casp", lang = "en" } = params || {};
  const t = translations[lang] || translations.en;

  const categoryProducts = getProductsByCategory("Hydraulic Torque Wrenches");

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

      {/* =============================== HERO SECTION (COMPACT) =============================== */}
      <section className="relative pt-24 pb-12 md:pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/industries/refinery-background.jpg"
              alt="Hydraulic Torque Wrenches"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95" />
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center space-x-2 text-xs md:text-sm text-gray-400 mb-6">
              <Link
                href={`/${country}/${lang}`}
                className="hover:text-white font-medium"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href={`/${country}/${lang}/products`}
                className="hover:text-white font-medium"
              >
                Products
              </Link>
              <span>/</span>
              <span className="text-white font-semibold">
                Hydraulic Torque Wrenches
              </span>
            </nav>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Hydraulic Torque Wrenches
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Precision-engineered torque solutions for critical industrial
              bolting applications. Trusted by leading EPC contractors
              worldwide.
            </p>

            {/* ================= QUICK ENQUIRY FORM ================= */}
            <HeroEnquiryForm />

            {/* Certifications */}
            <div className="flex justify-center items-center space-x-6 md:space-x-10 pt-10 border-t border-white/10 mt-10">
              {[
                { src: "/images/cert/iso.webp", name: "ISO" },
                { src: "/images/cert/ecitb.webp", name: "ECITB" },
                { src: "/images/cert/ce-seeklogo.png", name: "CE" },
              ].map((cert, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl group-hover:bg-white/30 transition-all" />
                  <div className="relative h-10 md:h-14 w-14 md:w-18">
                    <Image
                      src={cert.src}
                      alt={cert.name}
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

      {/* =============================== FILTERS (STICKY) =============================== */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b-2 border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Left: Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-2 text-gray-700 font-bold text-xs md:text-sm">
                <Filter className="w-4 h-4 md:w-5 md:h-5 text-[#D6312F]" />
                <span>Filter:</span>
              </div>

              {allSeries.length > 1 && (
                <select
                  value={selectedSeries}
                  onChange={(e) => setSelectedSeries(e.target.value)}
                  className="px-3 md:px-4 py-2 text-xs md:text-sm border-2 border-gray-200 rounded-lg font-semibold text-gray-900 hover:border-[#D6312F] focus:border-[#D6312F] transition-all cursor-pointer focus:outline-none bg-white"
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
                  className="px-3 md:px-4 py-2 text-xs md:text-sm border-2 border-gray-200 rounded-lg font-semibold text-gray-900 hover:border-[#D6312F] focus:border-[#D6312F] transition-all cursor-pointer focus:outline-none bg-white"
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
                  className="px-3 py-1.5 text-xs text-[#D6312F] font-bold hover:bg-red-50 rounded-lg transition-all"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Right: View Controls */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-600 font-semibold text-xs md:text-sm">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "Product" : "Products"}
              </span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded transition-all ${
                    viewMode === "grid"
                      ? "bg-white shadow text-[#D6312F]"
                      : "text-gray-600"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded transition-all ${
                    viewMode === "list"
                      ? "bg-white shadow text-[#D6312F]"
                      : "text-gray-600"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== PRODUCTS GRID (COMPACT) =============================== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="space-y-6">
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
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters</p>
              <button
                onClick={() => {
                  setSelectedSeries("All");
                  setSelectedApplication("All");
                }}
                className="px-6 py-3 bg-[#D6312F] text-white rounded-lg font-bold hover:bg-red-700 transition-all"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-14 md:py-20 px-0 bg-gray-50">
        {/* FULL WIDTH CONTAINER */}
        <div className="w-full">
          <div className="w-full bg-white shadow-xl border-y border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* IMAGE — FULL HEIGHT LEFT */}
              <div className="md:col-span-2 relative min-h-[280px] md:min-h-[420px]">
                <Image
                  src="/images/testimonail.jpg"
                  alt="Pamban Bridge Project Testimonial"
                  fill
                  className="absolute inset-0 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* CONTENT — RIGHT SIDE */}
              <div className="md:col-span-3 px-6 md:px-16 py-8 md:py-12 flex flex-col justify-center">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
                  “Tritorc has been a key partner in our shutdown success at
                  Qatar Gas. For five years, their dedicated team has delivered
                  reliable bolt torquing and flange-facing support, helping us
                  complete critical shutdowns on time. Their professionalism,
                  planning, and qualified workforce continue to add real value
                  to our operations.”
                </p>

                {/* REVIEWER */}
                <div className="mt-2">
                  <div className="text-lg font-black text-gray-900">
                    Mr. Aftab Ahmed Waseer
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Shutdown Manager for Qatar Gas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== WHY CHOOSE (COMPACT) =============================== */}
      {/* <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Why Choose Tritorc
            </h2>
            <p className="text-gray-600">
              Engineered for critical bolting applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Shield,
                stat: "±3%",
                label: "Precision",
                color: "bg-blue-600",
              },
              {
                icon: Award,
                stat: "35+",
                label: "Years Exp.",
                color: "bg-[#D6312F]",
              },
              {
                icon: Zap,
                stat: "700",
                label: "Bar Max",
                color: "bg-green-600",
              },
              {
                icon: TrendingUp,
                stat: "24/7",
                label: "Support",
                color: "bg-purple-600",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-xl p-4 md:p-6 hover:border-[#D6312F] hover:shadow-lg transition-all text-center"
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
                  {item.stat}
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* =============================== COLLAGE SECTION =============================== */}
      <CollageSection />

      {/* =============================== TOOLS IN ACTION (COMPACT) =============================== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-bold text-white mb-3">
              Real-World Performance
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
              Tools in Action
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
              Real-world applications across industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {categoryProducts[0]?.images?.slice(0, 4).map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`Application ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== FINAL CTA (COMPACT) =============================== */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-white">
              Sales Team Online Now
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Need Help Selecting the
            <br />
            <span className="bg-gradient-to-r from-[#D6312F] to-red-600 bg-clip-text text-transparent">
              Right Tool?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-2">
            Our engineering team can help you choose
          </p>
          <div className="text-gray-400 text-base md:text-lg mb-8">
            <span className="font-bold text-white">35+ years</span> supporting
            global EPC contractors
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${country}/${lang}/contact`}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#D6312F] to-red-600 text-white rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              <span>Contact Team</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Catalog</span>
            </button>
          </div>
        </div>
      </section>

      {/* =============================== FLOATING BUTTONS (MOBILE OPTIMIZED) =============================== */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3">
        <a
          href="https://wa.me/+971565095820"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        <a
          href="tel:+971565095820"
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-500 text-white rounded-full shadow-2xl hover:bg-blue-600 transition-all hover:scale-110"
        >
          <Phone className="w-6 h-6 md:w-7 md:h-7" />
        </a>

        <Link
          href={`/${country}/${lang}/contact`}
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#D6312F] text-white rounded-full shadow-2xl hover:bg-red-700 transition-all hover:scale-110"
        >
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
      </div>

      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}

/* ====================== PRODUCT CARD (COMPACT) ====================== */
function ProductCard({ product, country, lang }) {
  return (
    <Link
      href={`/${country}/${lang}/product/${product.slug}`}
      className="group"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#D6312F] transition-all duration-300 hover:shadow-xl">
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <div
              className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                product.badge === "Best Seller"
                  ? "bg-[#D6312F]"
                  : product.badge === "New"
                  ? "bg-green-600"
                  : "bg-blue-600"
              }`}
            >
              {product.badge}
            </div>
          </div>
        )}

        <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="p-5">
          {product.series && (
            <div className="mb-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                {product.series} Series
              </span>
            </div>
          )}

          <h3 className="text-lg font-black text-gray-900 mb-2 line-clamp-2 min-h-[3rem] group-hover:text-[#D6312F] transition-colors">
            {product.name}
          </h3>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
            {product.torqueRange && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-semibold">
                  Torque Range
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {product.torqueRange}
                </span>
              </div>
            )}
            {product.weight && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-semibold">
                  Weight
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {product.weight}
                </span>
              </div>
            )}
            {product.boltSize && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-semibold">
                  Bolt Size
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {product.boltSize}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#D6312F] font-bold text-sm group-hover:underline">
              View Details
            </span>
            <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-[#D6312F] transition-all">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ====================== PRODUCT LIST ITEM (COMPACT) ====================== */
function ProductListItem({ product, country, lang }) {
  return (
    <Link
      href={`/${country}/${lang}/product/${product.slug}`}
      className="group block"
    >
      <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#D6312F] transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 aspect-video md:aspect-square bg-gradient-to-br from-gray-100 to-gray-50 relative p-8">
            {product.badge && (
              <div className="absolute top-4 left-4 z-10">
                <div
                  className={`px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${
                    product.badge === "Best Seller"
                      ? "bg-[#D6312F]"
                      : product.badge === "New"
                      ? "bg-green-600"
                      : "bg-blue-600"
                  }`}
                >
                  {product.badge}
                </div>
              </div>
            )}
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="md:w-3/5 p-6 md:p-8">
            {product.series && (
              <div className="mb-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  {product.series} Series
                </span>
              </div>
            )}

            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 group-hover:text-[#D6312F] transition-colors">
              {product.name}
            </h3>

            <p className="text-gray-600 mb-6">{product.shortDescription}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {product.torqueRange && (
                <div>
                  <div className="text-xs text-gray-500 font-semibold mb-1">
                    Torque Range
                  </div>
                  <div className="text-base font-bold text-[#D6312F]">
                    {product.torqueRange}
                  </div>
                </div>
              )}
              {product.weight && (
                <div>
                  <div className="text-xs text-gray-500 font-semibold mb-1">
                    Weight
                  </div>
                  <div className="text-base font-bold text-gray-900">
                    {product.weight}
                  </div>
                </div>
              )}
              {product.boltSize && (
                <div>
                  <div className="text-xs text-gray-500 font-semibold mb-1">
                    Bolt Size
                  </div>
                  <div className="text-base font-bold text-gray-900">
                    {product.boltSize}
                  </div>
                </div>
              )}
            </div>

            {product.features && product.features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {product.features.slice(0, 4).map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-[#D6312F] font-bold group-hover:underline">
                View Full Details
              </span>
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-[#D6312F] transition-all">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
