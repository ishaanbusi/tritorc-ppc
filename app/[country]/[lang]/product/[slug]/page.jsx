import Link from "next/link";
import { ArrowRight, Download, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import CountryScroller from "@/components/CountryScroller";
import { countries } from "@/lib/countries";
import { translations } from "@/lib/translations";
import {
  products,
  getProductBySlug,
  getProductsByCategory,
} from "@/lib/products";

export async function generateStaticParams() {
  const params = [];
  Object.entries(countries).forEach(([code, country]) => {
    country.languages.forEach((lang) => {
      products.forEach((product) => {
        params.push({ country: code, lang, slug: product.id });
      });
    });
  });
  return params;
}

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

      {/* ========================================
          SECTION 1: HERO WITH BACKGROUND IMAGE + LEAD FORM
          ======================================== */}
      {/* ========================================
    SECTION 1: COMPACT HERO WITH BACKGROUND IMAGE + LEAD FORM
    ======================================== */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={
              product.hero?.backgroundImage || "/images/refinery-background.jpg"
            }
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95"></div>
        </div>

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Radial Gradient Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT: Compact Content */}
            <div className="text-white space-y-6">
              {/* Category Badge */}
              {/* <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <div className="w-2 h-2 bg-[#D6312F] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold tracking-wide">
                  {product.category}
                </span>
              </div> */}

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Hydraulic Torque Wrenches
                </span>
                <br />
                <span className="text-[#D6312F]">for EPC & Oil/Gas</span>
              </h1>

              {/* Product Image - Right After Heading */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D6312F] to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Value Prop */}
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                Eliminate the{" "}
                <span className="text-white font-bold">
                  #1 cause of commissioning delays
                </span>
                : flange leaks and re-work. Tritorc keeps your critical path on
                schedule.
              </p>

              {/* Trust Metrics Row */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-[#D6312F] mb-1">
                    ±3%
                  </div>
                  <div className="text-xs text-gray-400">Precision</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-[#D6312F] mb-1">
                    700 bar
                  </div>
                  <div className="text-xs text-gray-400">Max Pressure</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-[#D6312F] mb-1">
                    35+ yrs
                  </div>
                  <div className="text-xs text-gray-400">OEM Experience</div>
                </div>
              </div>

              {/* Trust Line */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <span className="text-gray-600">•</span>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>ASME PCC-1 Compliant</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Lead Capture Form (Sticky) */}
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
                    Fast response • Global delivery • OEM-level performance
                  </p>
                </div>

                <ContactForm />

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center mb-4">
                    Or download the datasheet
                  </p>
                  <a
                    href={product.datasheetUrl || "#"}
                    download
                    className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Specs Sheet
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-3 gap-3">
                  {[
                    "/cert/iso.png",
                    "/cert/ce.png",
                    "/cert/madeinindia.png",
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <img
                        src={cert}
                        alt="Certificate"
                        className="h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curve Separator */}
        <div className="relative h-32 -mb-1">
          <svg
            className="absolute bottom-0 w-full h-32"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Client Marquee */}
        <ClientMarqueeModern clients={product.clientLogos} />
      </section>

      {/* ========================================
          SECTION 2: SPLIT BENEFIT/SPECS
          ======================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* LEFT: Benefits (3 columns) */}
            <div className="lg:col-span-3 space-y-12">
              {/* Section Header */}
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
                  Every spec, certification, and feature engineered for
                  mission-critical performance
                </p>
              </div>

              {/* Benefit Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "ASME PCC-1 Compliance",
                    desc: "Documented bolt loads meet client QA/QC standards with full traceability",
                    color: "bg-[#D6312F]",
                  },
                  {
                    title: "±3% Precision Accuracy",
                    desc: "Leak-free starts guaranteed with calibration certificates included",
                    color: "bg-blue-600",
                  },
                  {
                    title: "Fleet Optimization",
                    desc: "One tool, multiple bolt sizes via interchangeable sockets. Reduce inventory 40%",
                    color: "bg-green-600",
                  },
                  {
                    title: "Global 24h Delivery",
                    desc: "Rapid dispatch from OEM facility. On-site support & spares worldwide",
                    color: "bg-purple-600",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#D6312F] hover:shadow-xl transition-all"
                  >
                    <div
                      className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Feature List */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-6">
                  Complete System Includes
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "High-duty cycle performance",
                    "360° rotating reaction arm",
                    "Rental programs available",
                    "Field engineer support",
                    "Chrome vanadium steel",
                    "Compatible with all major pumps",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#D6312F] flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Sticky Spec Card (2 columns) */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                {/* Spec Card */}
                <div className="relative bg-white border-2 border-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white">
                    <h3 className="text-2xl font-bold">Technical Specs</h3>
                    <p className="text-gray-400 text-sm mt-1">TSL Series</p>
                  </div>

                  {/* Specs List */}
                  <div className="p-6 space-y-4">
                    {Object.entries(product.specifications).map(
                      ([key, value], i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                        >
                          <span className="text-sm font-semibold text-gray-700">
                            {key}
                          </span>
                          <span className="text-sm text-gray-900 font-bold">
                            {value}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="p-6 bg-gray-50 border-t-2 border-gray-200">
                    <a
                      href={product.datasheetUrl || "#"}
                      download
                      className="w-full flex items-center justify-center px-6 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all group"
                    >
                      Download Full Datasheet
                      <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Certificates */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[
                    "/cert/iso.png",
                    "/cert/ce.png",
                    "/cert/madeinindia.png",
                  ].map((cert, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center hover:border-[#D6312F] transition-all"
                    >
                      <img
                        src={cert}
                        alt="Certificate"
                        className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 3: ABOUT TRITORC - AUTHORITY
          ======================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
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
              From pipelines to process plants handling CH₄, H₂, CO₂, NH₃ — our
              footprint covers the world&apos;s most demanding energy projects
            </p>
          </div>

          {/* Industry Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Oil & Gas", icon: "⚡" },
              { name: "Petrochemicals", icon: "🧪" },
              { name: "Power Generation", icon: "🔋" },
              { name: "Shipbuilding", icon: "🚢" },
              { name: "Offshore", icon: "🌊" },
              { name: "Fabrication", icon: "🔧" },
              { name: "Pipeline", icon: "⛽" },
              { name: "LNG", icon: "❄️" },
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-[#D6312F] hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <div className="font-bold text-gray-900 text-sm">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>

          {/* Product Line CTA */}
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
                  <div className="w-2 h-2 bg-[#D6312F] rounded-full"></div>
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

      {/* ========================================
          SECTION 4: PRODUCT VISUALS - INTERACTIVE
          ======================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Compact, Powerful
              <br />& Field-Proven
            </h2>
            <p className="text-xl text-gray-600">
              Engineered for the toughest environments
            </p>
          </div>

          {/* Main Product Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {(
              product.images || [
                product.image,
                product.image,
                product.image,
                product.image,
              ]
            )
              .slice(0, 4)
              .map((img, i) => (
                <div
                  key={i}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border-2 border-gray-200 hover:border-[#D6312F] transition-all cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-semibold text-sm">
                      View {i + 1}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Confined Space Design",
              "Industrial-Strong",
              "Shutdown Optimized",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-100 border-2 border-gray-300 rounded-full font-semibold text-gray-900"
              >
                <div className="w-2 h-2 bg-[#D6312F] rounded-full"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 5: TESTIMONIAL - SOCIAL PROOF
          ======================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-bold mb-4">
              Real Results
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Trusted on High-Stakes
              <br />
              EPC Project Sites
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Testimonial Card */}
            <div>
              <div className="bg-white border-2 border-gray-900 rounded-3xl p-10 shadow-2xl relative">
                {/* Quote Mark */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#D6312F] rounded-2xl flex items-center justify-center text-white text-5xl font-serif">
                  &quot;
                </div>

                <div className="relative">
                  <p className="text-2xl text-gray-900 font-medium leading-relaxed mb-8">
                    {product.testimonial?.quote ||
                      "Tritorc's torque tools helped us complete mechanical commissioning with zero flange leaks. Their field engineer support saved us days on shutdown."}
                  </p>

                  <div className="flex items-center space-x-4 border-t-2 border-gray-200 pt-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden">
                      <img
                        src={
                          product.testimonial?.authorImage ||
                          "/images/avatar-placeholder.jpg"
                        }
                        alt="Author"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {product.testimonial?.author || "Mark Stevens"}
                      </div>
                      <div className="text-gray-600">
                        {product.testimonial?.company ||
                          "Senior PM, International EPC Contractor"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#D6312F]">500+</div>
                  <div className="text-xs text-gray-600 mt-1">Projects</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#D6312F]">50+</div>
                  <div className="text-xs text-gray-600 mt-1">Countries</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#D6312F]">99%</div>
                  <div className="text-xs text-gray-600 mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* RIGHT: Project Image + Engineer Card */}
            <div className="space-y-6">
              {/* Project Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={
                    product.caseStudy?.image ||
                    "/images/project-placeholder.jpg"
                  }
                  alt="Project"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                  <div className="text-white">
                    <div className="text-sm font-semibold text-[#D6312F] mb-2">
                      CASE STUDY
                    </div>
                    <div className="text-2xl font-bold">
                      {product.caseStudy?.projectName ||
                        "NCOC Kazakhstan - Tengiz Field"}
                    </div>
                    <div className="text-gray-300 mt-2">
                      Zero flange leaks • On-time commissioning
                    </div>
                  </div>
                </div>
              </div>

              {/* Field Engineer Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 rounded-xl bg-white/20 overflow-hidden flex-shrink-0">
                    <img
                      src="/images/engineer-avatar.jpg"
                      alt="Engineer"
                      className="w-full h-full object-cover"
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
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 6: VIDEO GRID
          ======================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-bold mb-4">
              Product Demos
            </div>
            <h2 className="text-4xl lg:text-5xl font-black">
              See the Tools in Action
            </h2>
            <p className="text-xl text-gray-400 mt-4">
              Watch how our systems perform in real field conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(
              product.videos || [
                { title: "TSL Torque Wrench Demo", thumbnail: product.image },
                { title: "Hydraulic Pump Operation", thumbnail: product.image },
                { title: "Socket & Accessories", thumbnail: product.image },
                { title: "Reaction Arm Setup", thumbnail: product.image },
                { title: "Field Engineer QC", thumbnail: product.image },
                { title: "Cold Cutting Demo", thumbnail: product.image },
              ]
            ).map((video, i) => (
              <div
                key={i}
                className="group relative aspect-video rounded-2xl overflow-hidden bg-gray-800 cursor-pointer border-2 border-gray-700 hover:border-[#D6312F] transition-all"
              >
                <img
                  src={video.thumbnail || product.image}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#D6312F] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <h4 className="font-bold text-sm">{video.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">2:45 min</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 7: COMPLETE YOUR TOOLKIT - REDESIGNED
          ======================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-bold mb-4">
              Explore More
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              Complete Your Toolkit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our full range of hydraulic torque & tensioning solutions
              for every industrial application
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {related.map((p, index) => (
              <Link
                key={p.id}
                href={`/${country}/${lang}/product/${p.id}`}
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
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#D6312F] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {p.shortDescription}
                    </p>

                    {/* Specs Grid */}
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

                    {/* CTA */}
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

          {/* View All CTA */}
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

      {/* ========================================
          SECTION 8: FINAL CTA
          ======================================== */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
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
              href={`tel:+1234567890`}
              className="inline-flex items-center justify-center px-8 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              Call Sales: +1 (234) 567-8900
            </a>
          </div>

          {/* Trust Elements */}
          <div className="space-y-8">
            {/* Certificates */}
            <div className="flex justify-center items-center space-x-8">
              <img
                src="/cert/iso.png"
                className="h-16 opacity-60 hover:opacity-100 transition-opacity"
                alt="ISO"
              />
              <img
                src="/cert/ce.png"
                className="h-16 opacity-60 hover:opacity-100 transition-opacity"
                alt="CE"
              />
              <img
                src="/cert/madeinindia.png"
                className="h-16 opacity-60 hover:opacity-100 transition-opacity"
                alt="Made in India"
              />
            </div>

            {/* Stats Row */}
            <div className="flex justify-center space-x-12 text-center">
              <div>
                <div className="text-3xl font-bold text-[#D6312F]">500+</div>
                <div className="text-sm text-gray-400">Major Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D6312F]">50+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D6312F]">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>

            {/* Final Trust Line */}
            <div className="text-gray-400 text-lg">
              <span className="font-bold text-white">35+ years</span> supporting
              global EPC contractors
            </div>
          </div>
        </div>
      </section>

      <CountryScroller />
      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}

// ========================================
// CLIENT MARQUEE COMPONENT
// ========================================
function ClientMarqueeModern({ clients = [] }) {
  const defaultClients = [
    "Shell",
    "ExxonMobil",
    "Chevron",
    "BP",
    "TotalEnergies",
    "Aramco",
    "Saudi Aramco",
    "Petrobras",
  ];
  const logos = clients.length > 0 ? clients : defaultClients;

  return (
    <div className="relative bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 font-semibold">
            TRUSTED BY LEADING EPC CONTRACTORS & OIL/GAS OPERATORS
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-12 min-w-max animate-marquee">
            {[...logos, ...logos, ...logos].map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[180px] h-12 text-gray-400 font-bold text-lg tracking-wide hover:text-[#D6312F] transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
