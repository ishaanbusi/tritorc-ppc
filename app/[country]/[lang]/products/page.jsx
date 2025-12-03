"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Filter,
  Download,
  ChevronDown,
  Search,
  Grid,
  List,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { countries } from "@/lib/countries";
import { translations } from "@/lib/translations";

// Product data matching your image
const PRODUCTS = [
  {
    id: "tsl-series",
    name: "Square Drive Type – TSL Series",
    image: "/images/tsl-3.png",
    minTorque: "112 Nm",
    maxTorque: "69427 Nm",
    boltSize: '3/4" – 2.1/2"',
    range: "(19 – 53mm)",
    description:
      "Compact square drive design for confined spaces. Ideal for standard bolting applications.",
    features: ["360° Rotating Head", "Compact Design", "High Accuracy"],
    category: "Hydraulic Torque Wrenches",
    series: "TSL",
    applications: ["Oil & Gas", "Petrochemical", "Power Generation"],
    badge: "Best Seller",
    slug: "tsl-square-drive",
  },
  {
    id: "thl-series",
    name: "Low Profile Ratchet Type – THL Series",
    image: "/images/products/thl-series.jpg",
    minTorque: "273 Nm",
    maxTorque: "51909 Nm",
    boltSize: '3/4" – 6.7/8"',
    range: "(19 – 170mm)",
    description:
      "Low profile ratcheting design for tight access areas. Perfect for flange work.",
    features: ["Ratcheting Mechanism", "Low Profile", "Extended Reach"],
    category: "Hydraulic Torque Wrenches",
    series: "THL",
    applications: ["Pipeline", "Marine", "Construction"],
    badge: "Popular",
    slug: "thl-low-profile",
  },
  {
    id: "thl-ultra-slim",
    name: "Ultra Slim Type – THL Series",
    image: "/images/products/thl-ultra-slim.jpg",
    minTorque: "293 Nm",
    maxTorque: "12834 Nm",
    boltSize: '3/4" – 3.1/8"',
    range: "(19 – 79mm)",
    description:
      "Ultra-slim profile for extremely limited access. Industry's thinnest design.",
    features: ["Ultra Slim Body", "Lightweight", "Precision Control"],
    category: "Hydraulic Torque Wrenches",
    series: "THL",
    applications: ["Offshore", "Subsea", "Wind Energy"],
    badge: "New",
    slug: "thl-ultra-slim",
  },
];

export default function CategoryPage({ params }) {
  const { country, lang } = params;
  const t = translations[lang] || translations.en;

  const [selectedSeries, setSelectedSeries] = useState("All");
  const [selectedApplication, setSelectedApplication] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const seriesMatch =
      selectedSeries === "All" || product.series === selectedSeries;
    const applicationMatch =
      selectedApplication === "All" ||
      product.applications.includes(selectedApplication);
    return seriesMatch && applicationMatch;
  });

  // Get unique series and applications for filters
  const allSeries = ["All", ...new Set(PRODUCTS.map((p) => p.series))];
  const allApplications = [
    "All",
    ...new Set(PRODUCTS.flatMap((p) => p.applications)),
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation country={country} lang={lang} translations={t} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/20 via-transparent to-blue-600/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-bold text-white mb-6">
              Professional Grade Tools
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Hydraulic Torque Wrenches
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Precision-engineered torque solutions for critical industrial
              applications. Trusted by leading EPC contractors worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">±3% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">24h Global Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search Section */}
      <section className="sticky top-0 z-40 bg-white border-b-2 border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left: Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2 text-gray-700 font-semibold">
                <Filter className="w-5 h-5" />
                <span>Filter By:</span>
              </div>

              {/* Series Filter */}
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl font-semibold text-gray-900 hover:border-[#D6312F] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D6312F]"
              >
                {allSeries.map((series) => (
                  <option key={series} value={series}>
                    {series} Series
                  </option>
                ))}
              </select>

              {/* Application Filter */}
              <select
                value={selectedApplication}
                onChange={(e) => setSelectedApplication(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl font-semibold text-gray-900 hover:border-[#D6312F] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D6312F]"
              >
                {allApplications.map((app) => (
                  <option key={app} value={app}>
                    {app}
                  </option>
                ))}
              </select>

              {/* Reset Filters */}
              {(selectedSeries !== "All" || selectedApplication !== "All") && (
                <button
                  onClick={() => {
                    setSelectedSeries("All");
                    setSelectedApplication("All");
                  }}
                  className="px-4 py-2 text-sm text-[#D6312F] font-semibold hover:bg-red-50 rounded-lg transition-all"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Right: View Mode & Results */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">
                {filteredProducts.length} Products
              </span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "grid"
                      ? "bg-white shadow-sm text-[#D6312F]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "list"
                      ? "bg-white shadow-sm text-[#D6312F]"
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

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {viewMode === "grid" ? (
            /* Grid View */
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
            /* List View */
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
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters to see more results
              </p>
              <button
                onClick={() => {
                  setSelectedSeries("All");
                  setSelectedApplication("All");
                }}
                className="px-6 py-3 bg-[#D6312F] text-white rounded-xl font-semibold hover:bg-red-700 transition-all"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Need Help Selecting the Right Tool?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our engineering team can help you choose the perfect torque solution
            for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${country}/${lang}/contact`}
              className="px-8 py-4 bg-[#D6312F] text-white rounded-xl font-bold hover:bg-red-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Contact Engineering Team</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Full Catalog</span>
            </button>
          </div>
        </div>
      </section>

      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}

// Product Card Component (Grid View)
// Product Card Component (Grid View) - WITH FULL IMAGE FILL
function ProductCard({ product, country, lang }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
      {/* Badge */}
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

      {/* Image - FILLS COMPLETELY */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            {product.series} Series
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Specs Grid */}
        <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500 font-medium">Min Torque:</span>
            <span className="font-bold text-gray-900">{product.minTorque}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500 font-medium">Max Torque:</span>
            <span className="font-bold text-gray-900">{product.maxTorque}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500 font-medium">Bolt Size:</span>
            <span className="font-bold text-gray-900">{product.boltSize}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500 font-medium">Range:</span>
            <span className="font-semibold text-gray-700">{product.range}</span>
          </div>
        </div>

        {/* CTA Button - Matching Your Red Color */}
        <Link
          href={`/${country}/${lang}/product/${product.slug}`}
          className="w-full flex items-center justify-center px-6 py-2.5 bg-[#D6312F] text-white rounded-lg font-bold text-sm hover:bg-red-700 transition-all"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

// Product List Item Component (List View)
function ProductListItem({ product, country, lang }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#D6312F] transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-1/3 aspect-video lg:aspect-square bg-gradient-to-br from-gray-100 to-gray-50 relative p-8">
          {product.badge && (
            <div className="absolute top-4 left-4 z-10">
              <div
                className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
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
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="mb-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                {product.series} Series
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#D6312F] transition-colors">
              {product.name}
            </h3>

            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Specs Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <div className="text-xs text-gray-500 font-medium mb-1">
                  Min Torque
                </div>
                <div className="text-sm font-bold text-gray-900">
                  {product.minTorque}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium mb-1">
                  Max Torque
                </div>
                <div className="text-sm font-bold text-[#D6312F]">
                  {product.maxTorque}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium mb-1">
                  Bolt Size
                </div>
                <div className="text-sm font-bold text-gray-900">
                  {product.boltSize}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium mb-1">
                  Range
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {product.range}
                </div>
              </div>
            </div>

            {/* Features Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <Link
              href={`/${country}/${lang}/product/${product.slug}`}
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all group/btn"
            >
              <span className="mr-2">Read More</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
