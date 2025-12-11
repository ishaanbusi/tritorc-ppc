export const dynamic = "force-static";
export const revalidate = 86400;

import Link from "next/link";
import Image from "next/image";
import dyn from "next/dynamic"; // ← rename the imported function
import { ArrowRight, Download, Video } from "lucide-react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { translations } from "@/lib/translations";
import { getProductBySlug, getProductsByCategory } from "@/lib/products";
import CollapsibleChartSection from "./CollapsibleChartSection";
import FloatingCTA from "./FloatingCTA";
import StaticReelSwiper from "@/components/StaticReelSwiper";
import UltraReels from "@/components/UltraReels";

// use renamed import
const VideoGallery = dyn(() => import("@/components/VideoGallery"), {
  ssr: false,
});

export default function ProductPage({ params }) {
  const { country, lang, slug } = params;
  const t = translations[lang] || translations.en;
  const product = getProductBySlug(slug);

  if (!product) return <div>Product not found</div>;

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navigation country={country} lang={lang} translations={t} />

      {/* =============================== HERO =============================== */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src={
                product.hero?.backgroundImage ||
                "/images/refinery-background.jpg"
              }
              alt="Background"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95" />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Radial Tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT CONTENT */}
            <div className="text-white space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {product.name}
                </span>
              </h1>

              {/* Main Product Image */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D6312F] to-blue-600 rounded-3xl blur-2xl opacity-20" />
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover drop-shadow-2xl"
                  />
                </div>
              </div>

              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                {product.shortDescription ||
                  "Eliminate commissioning delays caused by flange leaks. Tritorc ensures reliability in critical operations."}
              </p>

              {/* TRUST METRICS */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10">
                <Metric
                  label="Precision"
                  value={product.specifications?.Accuracy || "±3%"}
                />
                <Metric
                  label="Max Pressure"
                  value={
                    product.specifications?.["Operating Pressure"] || "700 bar"
                  }
                />
                <Metric label="OEM Experience" value="35+ yrs" />
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-200">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-3">
                    Response in 2 Hours
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">
                    Get Engineering Quote
                  </h3>
                  <p className="text-gray-600">
                    Fast response • Global delivery
                  </p>
                </div>

                <ContactForm />

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-500 mb-4">
                    Or download the datasheet
                  </p>

                  <a
                    href={product.datasheetUrl || "#"}
                    download
                    className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Specs Sheet
                  </a>
                </div>

                {/* Certificates */}
                {product.certificates?.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-4">
                      {product.certificates.map((cert, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center p-3 bg-gray-50 rounded-xl"
                        >
                          <Image
                            src={cert}
                            alt="Certificate"
                            width={90}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        {product.clientLogos?.length > 0 && (
          <ClientMarqueeModern clients={product.clientLogos} />
        )}
      </section>

      {/* =============================== SPECS SECTION =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* BENEFITS */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <div className="inline-block px-4 py-2 bg-red-50 text-[#D6312F] rounded-full text-sm font-bold mb-4">
                Why EPC Teams Choose Tritorc
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                Shutdown Readiness,
                <br />
                Zero Compromises
              </h2>
              <p className="text-xl text-gray-600">
                Every spec engineered for mission-critical performance.
              </p>
            </div>

            <BenefitCards product={product} />
          </div>

          {/* STICKY SPEC CARD */}
          <SpecsCard product={product} country={country} lang={lang} />
        </div>
      </section>

      {/* =============================== ABOUT TRITORC =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-4">
              Trusted OEM Partner
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              35+ Years Supporting
              <br />
              Global EPC Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by Mechanical Engineers, Turnaround Managers, and
              Maintenance Leads worldwide.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* IMAGE LEFT */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-[500px]">
                <Image
                  src="/images/industries/manufacturing_optimized.webp"
                  alt="Tritorc Manufacturing Facility"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-sm font-bold text-[#D6312F] mb-2">
                  SINCE 1990
                </div>
                <h3 className="text-3xl font-black mb-2">
                  World-Class Manufacturing
                </h3>
                <p className="text-gray-200">
                  State-of-the-art facility serving 50+ countries
                </p>
              </div>
            </div>

            {/* TEXT RIGHT */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                Engineering Excellence for Critical Applications
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Tritorc has been the trusted partner for major EPC contractors
                and oil & gas operators worldwide. Our hydraulic torque tools
                perform in the world’s toughest environments.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over three decades of manufacturing experience, we combine
                precision engineering with rigorous quality control.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Every Tritorc tool is backed by ISO 9001:2015 certification and
                full calibration documentation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={`/${country}/${lang}/about`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#D6312F] text-white rounded-xl font-bold hover:bg-red-700 transition-all"
                >
                  About Tritorc
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  href={`/${country}/${lang}/contact`}
                  className="inline-flex px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-all"
                >
                  Contact Engineering Team
                </Link>
              </div>
            </div>
          </div>

          {/* FULL SOLUTIONS STRIP */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Complete Bolting & Cutting Solutions
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                "Hydraulic Torque Wrenches",
                "Hydraulic Tensioners",
                "Cold Cutting Machines",
                "Hot Tapping Systems",
                "Pipeline Tools",
                "Maintenance Equipment",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center space-x-2"
                >
                  <div className="w-2 h-2 bg-[#D6312F] rounded-full" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/${country}/${lang}/products`}
              className="inline-flex items-center px-8 py-4 bg-[#D6312F] rounded-xl font-bold hover:bg-red-700 transition-all"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =============================== PRODUCT VISUALS / GALLERY =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {(product.images || [])
            .map((img) =>
              img && img.startsWith("/")
                ? img
                : img
                ? `/images/${img.replace(/^\/?images\//, "")}`
                : null
            )
            .filter(Boolean)
            .slice(0, 4)
            .map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border-2 border-gray-200 hover:border-[#D6312F] transition-all cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`${product.name} View ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-semibold text-sm">
                    View {i + 1}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Chart Selector (Dynamic) */}
      {product.selectorData && <CollapsibleChartSection product={product} />}

      {/* =============================== TESTIMONIAL =============================== */}
      {product.testimonial && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-bold mb-4">
                Real Results
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
                Trusted on High-Stakes
                <br />
                EPC Sites
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial Card */}
              <div>
                <div className="bg-white border-2 border-gray-900 rounded-3xl p-10 shadow-2xl relative">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#D6312F] rounded-2xl flex items-center justify-center text-white text-5xl font-serif">
                    &quot;
                  </div>

                  <p className="text-2xl text-gray-900 font-medium leading-relaxed mb-8">
                    {product.testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4 border-t-2 border-gray-200 pt-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={
                          product.testimonial.authorImage ||
                          "/images/avatar-placeholder.jpg"
                        }
                        alt={product.testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {product.testimonial.author}
                      </div>
                      <div className="text-gray-600">
                        {product.testimonial.position} •{" "}
                        {product.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Card */}
              {product.caseStudy && (
                <div className="space-y-6">
                  {/* Case Study Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="relative w-full h-[400px]">
                      <Image
                        src={product.caseStudy.image}
                        alt={product.caseStudy.projectName}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                      <div className="text-white">
                        <div className="text-sm font-semibold text-[#D6312F] mb-2">
                          CASE STUDY
                        </div>
                        <div className="text-2xl font-bold">
                          {product.caseStudy.projectName}
                        </div>
                        <div className="text-gray-300 mt-2">
                          {product.caseStudy.description ||
                            "Zero flange leaks • On-time commissioning"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Engineer Info */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
                    <div className="flex items-start space-x-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                        <Image
                          src="/images/engineer-avatar.jpg"
                          alt="Engineer"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-blue-200 mb-1">
                          YOUR FIELD ENGINEER
                        </div>
                        <div className="text-xl font-bold mb-2">
                          John Anderson, PE
                        </div>
                        <div className="text-sm text-blue-100 mb-3">
                          ASME PCC-1 Certified • 15+ Years EPC Experience
                        </div>
                        <div className="text-sm">24/7 Support Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <div>
        <UltraReels />
      </div>

      <div>
        <StaticReelSwiper />
      </div>

      {/* =============================== VIDEOS SECTION =============================== */}
      {product.videos && product.videos.length > 0 && (
        <VideoGallery videos={product.videos} />
      )}

      {/* =============================== RELATED PRODUCTS =============================== */}
      {related && related.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-bold mb-4">
                Explore More
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
                Complete Your Toolkit
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our full range of hydraulic torque & tensioning systems.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/${country}/${lang}/product/${p.slug}`}
                  className="group"
                >
                  <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[#D6312F] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900">
                        {p.category}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#D6312F] transition-colors">
                        {p.name}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {p.shortDescription}
                      </p>

                      <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Torque Range</span>
                          <span className="font-semibold text-gray-900">
                            {p.torqueRange}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Weight</span>
                          <span className="font-semibold text-gray-900">
                            {p.weight}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[#D6312F] font-bold text-sm group-hover:underline">
                          View Details
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#D6312F] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href={`/${country}/${lang}/products`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
              >
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* =============================== FAQ =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-yellow-50 text-yellow-600 rounded-full text-sm font-bold mb-4">
              Common Questions
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {[
              {
                q: "What is the delivery time for hydraulic torque wrenches?",
                a: "Standard delivery is 7–10 business days. Express shipping is available.",
              },
              {
                q: "Do you provide calibration certificates?",
                a: "Yes, all tools come with internationally traceable calibration certificates.",
              },
              {
                q: "What is the warranty period?",
                a: "12-month comprehensive warranty from date of delivery.",
              },
              {
                q: "Do you offer technical training?",
                a: "Yes, we offer on-site training and certification programs.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#D6312F] transition-all"
              >
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-[#D6312F] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>

                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== FINAL CTA =============================== */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white">
                Sales Team Online Now
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Ready to Get Started?
            </h2>

            <p className="text-2xl text-gray-300 mb-8">
              Fast response • Global delivery • OEM-level performance
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#hero"
              className="inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-[#D6312F] to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Get Engineering Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>

            <a
              href="tel:+918433708957"
              className="inline-flex items-center justify-center px-8 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              Call Sales: +91 84337-08957
            </a>
          </div>

          <div className="text-gray-400 text-lg">
            <span className="font-bold text-white">35+ years</span> supporting
            global EPC contractors
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}

/* ====================== Helper Components ====================== */

function Metric({ label, value }) {
  return (
    <div>
      <div className="text-2xl lg:text-3xl font-bold text-[#D6312F] mb-1">
        {value}
      </div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}

function BenefitCards({ product }) {
  const benefits = product.benefits || [
    {
      title: "ASME PCC-1 Compliance",
      description: "Traceable bolt load documentation",
      color: "bg-[#D6312F]",
    },
    {
      title: "±3% Precision Accuracy",
      description: "Calibration certificate included",
      color: "bg-blue-600",
    },
    {
      title: "Fleet Optimization",
      description: "Reduced inventory with interchangeable parts",
      color: "bg-green-600",
    },
    {
      title: "Global 24h Delivery",
      description: "OEM dispatch with worldwide coverage",
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {benefits.map((card, i) => (
        <div
          key={i}
          className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#D6312F] hover:shadow-xl transition-all"
        >
          <div
            className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
          >
            <div className="w-6 h-6 bg-white rounded-full" />
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function SpecsCard({ product, country, lang }) {
  return (
    <div className="lg:col-span-2">
      <div className="lg:sticky lg:top-24">
        <div className="relative bg-white border-2 border-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white">
            <h3 className="text-2xl font-bold">Technical Specs</h3>
            <p className="text-gray-400 text-sm mt-1">
              {product.series ? `${product.series} Series` : product.category}
            </p>
          </div>

          {/* Specs List */}
          <div className="p-6 space-y-4">
            {product.specifications ? (
              Object.entries(product.specifications).map(([key, value], i) => (
                <div
                  key={i}
                  className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0 gap-4"
                >
                  <span className="text-sm font-semibold text-gray-700 flex-shrink-0">
                    {key}:
                  </span>
                  <span className="text-sm text-gray-900 font-bold text-right">
                    {value}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  Contact us for full specifications
                </p>
              </div>
            )}
          </div>

          {/* Download Button */}
          <div className="p-6 bg-gray-50 border-t-2 border-gray-200">
            {product.datasheetUrl ? (
              <a
                href={product.datasheetUrl}
                download
                className="w-full flex items-center justify-center px-6 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all group"
              >
                Download Full Datasheet
                <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            ) : (
              <Link
                href={`/${country}/${lang}/contact`}
                className="w-full flex items-center justify-center px-6 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all group"
              >
                Request Specifications
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          {/* Quick Facts */}
          {product.specifications?.["Number of Models"] && (
            <div className="absolute top-4 right-4 bg-[#D6312F] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              {product.specifications["Number of Models"]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ====================== Client Logo Marquee ====================== */

function ClientMarqueeModern({ clients = [] }) {
  const defaultClients = [
    "Shell",
    "ExxonMobil",
    "Chevron",
    "BP",
    "TotalEnergies",
  ];
  const logos = clients.length > 0 ? clients : defaultClients;

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-2">
            Trusted Partners
          </p>
          <h3 className="text-sm text-gray-700 font-medium">
            Leading EPC Contractors & Oil/Gas Operators Worldwide
          </h3>
        </div>

        <div className="flex gap-16 justify-center flex-wrap">
          {logos.map((client, i) => (
            <div
              key={i}
              className="text-gray-600 font-bold text-2xl hover:text-[#D6312F] transition-all"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
