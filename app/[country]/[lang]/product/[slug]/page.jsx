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
import CollapsibleChartSection from "../[slug]/CollapsibleChartSection";

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
                {/* <span className="text-[#D6312F]">for EPC & Oil/Gas</span> */}
              </h1>

              {/* Product Image - UPDATED WITH FULL FILL */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D6312F] to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover drop-shadow-2xl"
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
              {/* <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <span className="text-gray-600">•</span>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>ASME PCC-1 Compliant</span>
                </div>
              </div> */}
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

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      "/images/cert/iso.webp",
                      "/images/cert/ecitb.webp",
                      "/images/cert/ce-seeklogo.png",
                    ].map((cert, i) => (
                      <div key={i} className="flex items-center justify-center">
                        <img
                          src={cert}
                          alt="Certificate"
                          className="h-12 object-contain hover:scale-110 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
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
            preserveAspectRatio="none"
          >
            {/* Main wave */}
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="white"
              fillOpacity="0.3"
            />
            {/* Secondary wave for depth */}
            <path
              d="M0,80L48,85.3C96,91,192,101,288,96C384,91,480,69,576,64C672,59,768,69,864,80C960,91,1056,101,1152,101.3C1248,101,1344,91,1392,85.3L1440,80L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="white"
              fillOpacity="0.6"
            />
            {/* Top wave */}
            <path
              d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,80C672,75,768,85,864,96C960,107,1056,117,1152,117.3C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
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

              {/* Benefit Cards Grid - NOW 6 CARDS */}
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
                  {
                    title: "Field Engineer Support",
                    desc: "On-site technical assistance and commissioning services available globally",
                    color: "bg-orange-600",
                  },
                  {
                    title: "Rental Programs Available",
                    desc: "Flexible rental options for short-term projects and emergency shutdowns",
                    color: "bg-indigo-600",
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
    SECTION 3: ABOUT TRITORC - IMAGE + CONTENT
    ======================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
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

          {/* Image + Content Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* LEFT: Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/industries/manufacturing.jpg"
                alt="Tritorc Manufacturing Facility"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-sm font-bold text-[#D6312F] mb-2">
                  SINCE 1990
                </div>
                <h3 className="text-3xl font-black mb-2">
                  World-Class Manufacturing
                </h3>
                <p className="text-gray-200">
                  State-of-the-art facility in India serving 50+ countries
                </p>
              </div>
            </div>

            {/* RIGHT: Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Engineering Excellence for Critical Applications
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Tritorc has been the trusted partner for major EPC contractors
                  and oil & gas operators worldwide. Our hydraulic torque tools
                  have been deployed on some of the world&apos;s most
                  challenging projects.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  With over three decades of manufacturing experience, we
                  combine precision engineering with rigorous quality control to
                  deliver tools that meet the demanding requirements of
                  mission-critical bolting applications.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Every Tritorc tool is backed by ISO 9001:2015 certification,
                  comprehensive calibration documentation.
                </p>
              </div>

              {/* CTA Buttons */}
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
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-all"
                >
                  Contact Engineering Team
                </Link>
              </div>
            </div>
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
          {/* <div className="flex flex-wrap justify-center gap-4">
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
          </div> */}
        </div>
      </section>

      {/* NEW: COLLAPSIBLE CHART SECTION */}
      <CollapsibleChartSection product={product} />

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
              {/* <div className="mt-8 grid grid-cols-3 gap-4">
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
              </div> */}
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
    SECTION 6: PREMIUM VERTICAL VIDEOS
    ======================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-bold mb-4">
              Product Demos
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              See the Tools in Action
            </h2>
            <p className="text-xl text-gray-400 mt-4">
              Watch how our systems perform in real field conditions
            </p>
          </div>

          {/* 3 Vertical Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "TSL Series Torque Wrench",
                description: "Complete operation guide",
                thumbnail: product.image,
                duration: "2:45",
                views: "2.5K",
              },
              {
                title: "Hydraulic Pump Setup",
                description: "Step-by-step tutorial",
                thumbnail: product.image,
                duration: "3:20",
                views: "1.8K",
              },
              {
                title: "Field Installation",
                description: "Real project demo",
                thumbnail: product.image,
                duration: "4:15",
                views: "3.2K",
              },
            ].map((video, i) => (
              <div key={i} className="group">
                {/* Video Card */}
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-gray-800 cursor-pointer border-2 border-gray-700 hover:border-[#D6312F] transition-all hover:shadow-2xl hover:-translate-y-2">
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnail || product.image}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#D6312F] rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                      <div className="relative w-20 h-20 rounded-full bg-[#D6312F] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                        <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[22px] border-l-white border-b-[14px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-bold">
                    {video.duration}
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <h4 className="font-bold text-xl mb-1 text-white">
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-300 mb-3">
                      {video.description}
                    </p>
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <span>👁️ {video.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <div className="text-center mt-12">
            <Link
              href={`/${country}/${lang}/videos`}
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              View All Videos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div> */}
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
            {/* <div className="flex justify-center items-center space-x-8">
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
            </div> */}

            {/* Stats Row */}
            {/* <div className="flex justify-center space-x-12 text-center">
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
            </div> */}

            {/* Final Trust Line */}
            <div className="text-gray-400 text-lg">
              <span className="font-bold text-white">35+ years</span> supporting
              global EPC contractors
            </div>
          </div>
        </div>
      </section>

      {/* <CountryScroller /> */}
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
        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-16 min-w-max animate-marquee">
            {[...logos, ...logos, ...logos].map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[220px] h-16 text-gray-600 font-bold text-2xl tracking-wide hover:text-[#D6312F] hover:scale-105 transition-all duration-300 cursor-default"
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
