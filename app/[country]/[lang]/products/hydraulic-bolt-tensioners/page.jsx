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
  Play,
  Phone,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { translations } from "@/lib/translations";
import { getProductsByCategory } from "@/lib/products";
import CollageSection from "@/components/CollageSection";

export default function TorqueWrenchesPage({ params }) {
  const { country, lang } = params;
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

      {/* ========================================
          HERO SECTION - MATCHING PRODUCT PAGE STYLE
          ======================================== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/industries/manufacturing_optimized.webp"
              alt="Industrial Background"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95" />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav
              className="flex items-center justify-center space-x-3 text-sm text-gray-400 mb-8"
              aria-label="Breadcrumb"
            >
              <Link
                href={`/${country}/${lang}`}
                className="hover:text-white transition-colors font-medium"
              >
                Home
              </Link>
              <span className="text-gray-600">/</span>
              <Link
                href={`/${country}/${lang}/products`}
                className="hover:text-white transition-colors font-medium"
              >
                Products
              </Link>
              <span className="text-gray-600">/</span>
              <span className="text-white font-semibold">
                Hydraulic Bolt Tensioners
              </span>
            </nav>

            {/* Category Badge */}
            {/* <div className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold text-white mb-8 shadow-xl">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Professional Grade Tools
            </div> */}

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Hydraulic Bolt Tensioners
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              Precision-engineered bolt solutions for critical industrial
              bolting applications. Trusted by leading EPC contractors
              worldwide.
            </p>

            {/* Trust Metrics */}
            {/* <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              {[
                {
                  label: "±3% Accuracy",
                  color: "from-yellow-400 to-orange-500",
                },
                {
                  label: "ISO 9001 Certified",
                  color: "from-green-400 to-emerald-500",
                },
                {
                  label: "24h Global Delivery",
                  color: "from-blue-400 to-cyan-500",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white font-semibold text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div> */}

            {/* Certifications */}
            <div className="flex justify-center items-center space-x-12 pt-8 border-t border-white/10">
              {[
                { src: "/images/cert/iso.webp", name: "ISO" },
                { src: "/images/cert/ecitb.webp", name: "ECITB" },
                { src: "/images/cert/ce-seeklogo.png", name: "CE" },
              ].map((cert, i) => (
                <div key={i} className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl group-hover:bg-white/30 transition-all"></div>
                  <div className="relative h-16 w-20">
                    <Image
                      src={cert.src}
                      alt={`${cert.name} Certification`}
                      fill
                      className="object-contain "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          FILTERS - MATCHING PRODUCT PAGE STICKY STYLE
          ======================================== */}
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

      {/* ========================================
          PRODUCTS GRID
          ======================================== */}
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

      {/* ========================================
          TESTIMONIALS - MATCHING PRODUCT PAGE
          ======================================== */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-bold mb-4">
              Real Results
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our clients say about working with Tritorc
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categoryProducts
              .filter((p) => p.testimonial)
              .slice(0, 2)
              .map((product, idx) => (
                <div
                  key={idx}
                  className="relative bg-white border-2 border-gray-900 rounded-3xl p-10 shadow-2xl"
                >
                  {/* Quote Mark */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#D6312F] rounded-2xl flex items-center justify-center text-white text-5xl font-serif">
                    &quot;
                  </div>

                  <p className="text-lg text-gray-900 font-medium leading-relaxed mb-8 relative z-10">
                    {product.testimonial.quote}
                  </p>

                  <div className="flex items-center space-x-4 border-t-2 border-gray-200 pt-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={product.testimonial.authorImage}
                        alt={product.testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {product.testimonial.author}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {product.testimonial.position}
                      </div>
                      <div className="text-[#D6312F] font-bold text-sm">
                        {product.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ========================================
          INDUSTRIES SERVED
          ======================================== */}
      {/* <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-4">
              Global Reach
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering precision bolting solutions across critical sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Oil & Gas", icon: "🛢️" },
              { name: "Petrochemical", icon: "⚗️" },
              { name: "Power Generation", icon: "⚡" },
              { name: "Pipeline", icon: "🔗" },
              { name: "Marine", icon: "⚓" },
              { name: "Construction", icon: "🏗️" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D6312F] hover:shadow-xl transition-all cursor-pointer overflow-hidden"
              >
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 leading-tight">
                    {industry.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ========================================
          FAQs
          ======================================== */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-yellow-50 text-yellow-600 rounded-full text-sm font-bold mb-4">
              Common Questions
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the accuracy of your torque wrenches?",
                a: "All our hydraulic torque wrenches are calibrated to ±3% accuracy, meeting international standards ASME B107.14 and ISO 6789.",
              },
              {
                q: "Do you provide calibration certificates?",
                a: "Yes, every tool comes with a calibration certificate traceable to national standards. We also offer recalibration services.",
              },
              {
                q: "What is the delivery time?",
                a: "Standard tools are available for immediate dispatch. Custom configurations typically take 2-3 weeks for manufacturing and delivery.",
              },
              {
                q: "Do you offer rental options?",
                a: "Yes, we provide flexible rental programs for short-term projects, shutdowns, and emergency requirements with global delivery.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#D6312F] transition-all"
              >
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-[#D6312F] text-2xl group-open:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div>
        <CollageSection />
      </div>

      {/* ========================================
          TOOLS IN ACTION - MATCHING PRODUCT PAGE
          ======================================== */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-bold text-white mb-4">
              Real-World Performance
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Tools in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real-world applications across industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categoryProducts[0]?.images.slice(0, 4).map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`Application ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          MANUFACTURING VIDEOS - MATCHING STYLE
          ======================================== */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-bold mb-4">
              Behind the Scenes
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how we manufacture precision torque tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Manufacturing Process", duration: "2:45" },
              { title: "Quality Control", duration: "1:30" },
              { title: "Assembly Line", duration: "3:15" },
            ].map((video, idx) => (
              <div
                key={idx}
                className="relative aspect-video bg-gray-900 rounded-3xl overflow-hidden group cursor-pointer shadow-2xl"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={
                      categoryProducts[0]?.images[idx] ||
                      "/images/placeholder.jpg"
                    }
                    alt={video.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500"
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#D6312F] rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                    <div className="relative w-20 h-20 bg-[#D6312F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                      <Play
                        className="w-10 h-10 text-white ml-1"
                        fill="white"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                  {video.duration}
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA - MATCHING PRODUCT PAGE
          ======================================== */}
      <section className="relative py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white">
                Sales Team Online Now
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Need Help Selecting the
              <br />
              <span className="bg-gradient-to-r from-[#D6312F] to-red-600 bg-clip-text text-transparent">
                Right Tool?
              </span>
            </h2>

            <p className="text-2xl text-gray-300 mb-8">
              Our engineering team can help you choose the perfect torque wrench
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href={`/${country}/${lang}/contact`}
              className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#D6312F] to-red-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <span>Contact Engineering Team</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-3 shadow-2xl">
              <Download className="w-6 h-6" />
              <span>Download Catalog</span>
            </button>
          </div>

          <div className="text-gray-400 text-lg">
            <span className="font-bold text-white">35+ years</span> supporting
            global EPC contractors
          </div>
        </div>
      </section>

      {/* ========================================
          FLOATING BUTTONS - MATCHING PRODUCT PAGE
          ======================================== */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href={`/${country}/${lang}/contact`}
          className="group flex items-center space-x-3 px-8 py-4 bg-[#D6312F] text-white rounded-full font-bold shadow-2xl hover:bg-red-700 transition-all hover:scale-105"
        >
          <span className="text-sm">Get a Quote</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="fixed right-6 bottom-28 z-50 flex flex-col space-y-4">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        <a
          href="tel:+1234567890"
          className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full shadow-2xl hover:bg-blue-600 transition-all hover:scale-110"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>

      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}

// ========================================
// PRODUCT CARD - MATCHING PRODUCT PAGE STYLE
// ========================================
function ProductCard({ product, country, lang }) {
  return (
    <Link
      href={`/${country}/${lang}/product/${product.slug}`}
      className="group"
    >
      <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[#D6312F] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
        {product.badge && (
          <div className="absolute top-6 left-6 z-10">
            <div
              className={`px-4 py-2 rounded-full text-xs font-black text-white shadow-xl ${
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
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div className="p-8">
          {product.series && (
            <div className="mb-3">
              <span className="text-xs font-black text-gray-500 uppercase tracking-wider">
                {product.series} Series
              </span>
            </div>
          )}

          <h3 className="text-xl font-black text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-[#D6312F] transition-colors">
            {product.name}
          </h3>

          <p className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="space-y-3 mb-6 pb-6 border-b-2 border-gray-100">
            {product.torqueRange && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-bold">
                  Torque Range
                </span>
                <span className="text-sm font-black text-gray-900">
                  {product.torqueRange}
                </span>
              </div>
            )}
            {product.weight && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-bold">Weight</span>
                <span className="text-sm font-black text-gray-900">
                  {product.weight}
                </span>
              </div>
            )}
            {product.boltSize && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-bold">
                  Bolt Size
                </span>
                <span className="text-sm font-black text-gray-700">
                  {product.boltSize}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#D6312F] font-bold text-sm group-hover:underline">
              View Details
            </span>
            <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-[#D6312F] transition-all group-hover:scale-110">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ========================================
// LIST ITEM - MATCHING PRODUCT PAGE STYLE
// ========================================
function ProductListItem({ product, country, lang }) {
  return (
    <Link
      href={`/${country}/${lang}/product/${product.slug}`}
      className="group block"
    >
      <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[#D6312F] transition-all duration-500 hover:shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 aspect-video lg:aspect-square bg-gradient-to-br from-gray-100 to-gray-50 relative p-10">
            {product.badge && (
              <div className="absolute top-6 left-6 z-10">
                <div
                  className={`px-4 py-2 rounded-full text-xs font-black text-white shadow-xl ${
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
                className="object-contain group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="lg:w-3/5 p-10 flex flex-col justify-between">
            <div>
              {product.series && (
                <div className="mb-3">
                  <span className="text-xs font-black text-gray-500 uppercase tracking-wider">
                    {product.series} Series
                  </span>
                </div>
              )}

              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 group-hover:text-[#D6312F] transition-colors">
                {product.name}
              </h3>

              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                {product.shortDescription}
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {product.torqueRange && (
                  <div>
                    <div className="text-xs text-gray-500 font-bold mb-2">
                      Torque Range
                    </div>
                    <div className="text-lg font-black text-[#D6312F]">
                      {product.torqueRange}
                    </div>
                  </div>
                )}
                {product.weight && (
                  <div>
                    <div className="text-xs text-gray-500 font-bold mb-2">
                      Weight
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {product.weight}
                    </div>
                  </div>
                )}
                {product.boltSize && (
                  <div>
                    <div className="text-xs text-gray-500 font-bold mb-2">
                      Bolt Size
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {product.boltSize}
                    </div>
                  </div>
                )}
              </div>

              {product.features && product.features.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {product.features.slice(0, 5).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg hover:bg-[#D6312F] hover:text-white transition-all"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#D6312F] font-bold text-lg group-hover:underline">
                View Full Details
              </span>
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-[#D6312F] transition-all group-hover:scale-110">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
