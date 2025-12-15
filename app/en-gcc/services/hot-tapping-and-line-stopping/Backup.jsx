import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Shield,
  Zap,
  TrendingUp,
  Clock,
  Award,
  FileText,
  Phone,
  Droplet,
  Wind,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { translations } from "@/lib/translations";

// ADD THIS - Metadata for SEO
export const metadata = {
  title: "Hot Tapping & Line Stopping Services UAE | Tritorc",
  description:
    "Professional hot tapping and line stopping services in the UAE. Zero downtime operations. Rated up to 1,450 psig and 280°C. API 2201 certified.",
};

export default function HotTappingServicesPage({ params }) {
  const { country = "gcc", lang = "en" } = params || {};
  const t = translations[lang] || translations.en;

  return (
    <div className="min-h-screen bg-white">
      <Navigation country={country} lang={lang} translations={t} />

      {/* =============================== HERO SECTION =============================== */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hottapping/hot-tapping-4.webp"
              alt="Hot Tapping Services Background"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95" />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          {/* Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Content */}
            <div className="text-white space-y-6 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 w-fit">
                <Zap className="w-5 h-5 text-[#D6312F]" />
                <span className="text-sm font-bold uppercase tracking-wider">
                  System Downtime is Never an Option
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-[1.1]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Hot Tapping & Line Stopping
                </span>
                <br />
                <span className="text-[#D6312F]">in the UAE</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                Our Hot Tapping and Line Stopping services deliver seamless
                system modifications, maintenance, and expansions—while
                operations continue uninterrupted. By reducing risk, minimizing
                downtime, and maintaining pressure integrity, we represent an
                efficient choice for your modern infrastructure demands.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                <StatBadge label="Max Pressure" value="1,450 psig" />
                <StatBadge label="Max Temp" value="280°C" />
                <StatBadge label="Max Diameter" value='66"' />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-[#D6312F] text-white rounded-xl font-semibold hover:bg-red-700 transition-all hover:shadow-2xl hover:-translate-y-1"
                >
                  Request Service Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+971XXXXXXXX"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Hotline
                </a>
              </div>
            </div>

            {/* Right Image - Matches Left Height */}
            <div className="relative flex items-center">
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src="/images/hottapping/hot-tapping-1.webp"
                  alt="Hot Tapping Operations"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stats Overlay on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center justify-between text-center">
                  <div>
                    <div className="text-xl font-bold text-gray-900">35+</div>
                    <div className="text-xs text-gray-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="h-8 w-px bg-gray-300" />
                  <div>
                    <div className="text-xl font-bold text-[#D6312F]">24/7</div>
                    <div className="text-xs text-gray-600">
                      Emergency Support
                    </div>
                  </div>
                  <div className="h-8 w-px bg-gray-300" />
                  <div>
                    <div className="text-xl font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-600">Safety Record</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Form Below */}
          <div className="mt-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-200">
              <div className="text-center mb-8">
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-3">
                  ⚡ Rapid Response Team Available
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-2">
                  Schedule Your Service
                </h3>
                <p className="text-gray-600">
                  Expert consultation • Fast deployment • 24/7 support
                </p>
              </div>

              {/* Horizontal Form Layout */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D6312F] focus:border-transparent outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D6312F] focus:border-transparent outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D6312F] focus:border-transparent outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D6312F] focus:border-transparent outline-none"
                  />
                </div>

                <textarea
                  placeholder="Tell us about your project requirements..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D6312F] focus:border-transparent outline-none resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#D6312F] text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all hover:shadow-xl flex items-center justify-center group"
                >
                  Submit Request
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-center space-x-3 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-[#D6312F]" />
                <span>API 2201 & DNP Standards Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== TRUST BAR =============================== */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase">
              Trusted Across Industries
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              "ADNOC",
              "Saudi Aramco",
              "ONGC",
              "Qatar Energy",
              "PDO",
              "Shell",
              "ExxonMobil",
              "BP",
            ].map((company) => (
              <div
                key={company}
                className="text-2xl font-bold text-gray-400 hover:text-[#D6312F] transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== EXPERTISE INTRO =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold">
                Proven Expertise
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
                Decades of Trusted Excellence
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                With decades of proven expertise, our Hot Tapping and Line
                Stopping services deliver reliable on-line system solutions.
                Trusted across industries, we combine availability, precision,
                and safety with unmatched troubleshooting capabilities built
                over years in the field.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                Ideal for critical operations, our solutions ensure business
                continuity and pressure integrity—making us the dependable
                choice when experience and reliability matter most.
              </p>

              <div className="flex items-start space-x-3 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-[#D6312F]/20">
                <CheckCircle className="w-6 h-6 text-[#D6312F] flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Critical operations?</strong> Business continuity and
                  pressure integrity guaranteed.
                </p>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  src: "/images/hottapping/hot-tapping-1.webp",
                  alt: "Hot Tapping Operation",
                },
                {
                  src: "/images/hottapping/hot-tapping-2.webp",
                  alt: "Line Stopping Service",
                },
                {
                  src: "/images/hottapping/hot-tapping-3.webp",
                  alt: "Pipeline Modification",
                },
                {
                  src: "/images/hottapping/hot-tapping-4.webp",
                  alt: "Pressure Testing Equipment",
                },
              ].map((image, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================== OUR OVERVIEW =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#D6312F]/10 text-[#D6312F] rounded-full text-sm font-bold mb-4">
              Our Overview
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              High-Integrity Performance
              <br />
              Under Active Flow
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tritorc&apos;s engineered solutions are designed for
                high-integrity performance under active flow conditions. Our
                services are optimized for pipelines operating across a wide
                range of pressures, materials and temperatures{" "}
                <strong>rated up to 1,450 psig and 280°C</strong>. Utilizing
                advanced technology and industry-certified procedures, we ensure
                zero-compromise on safety, compliance, or continuity.
              </p>

              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-[#D6312F] mr-3" />
                  Cutting-Edge Technology & Expert Execution
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Backed by our cutting-edge technology and expert execution,
                  our hot tapping equipment is designed and operated in
                  accordance with <strong>API 2201</strong> and{" "}
                  <strong>API 1104 Appendix B</strong> codes and adheres to{" "}
                  <strong>DNP standards</strong> for material and design
                  integrity. We offer both precision and reliability in even the
                  most demanding environments.
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Hot Tap Tees Engineering
                </h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Our Hot Tap Tees engineered to meet{" "}
                  <strong>ASME B31.3 / B31.4 / B31.8</strong> design
                  requirements.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-sm text-blue-50 leading-relaxed">
                    The standard materials used include{" "}
                    <strong>ASTM A516 GR70</strong>,{" "}
                    <strong>MSS SP WPHY</strong>,{" "}
                    <strong>ASTM A537 Class 1/2</strong>, or equivalents
                    conforming to BS specifications—ensuring superior strength,
                    durability, and compatibility across various industrial
                    systems.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Zero-Compromise Promise
                    </h4>
                    <p className="text-sm text-gray-600">
                      Safety, compliance, and continuity guaranteed in every
                      operation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== TECHNICAL SPECIFICATIONS =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-50 text-[#D6312F] rounded-full text-sm font-bold mb-4">
              Technical Data
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Technical Specifications
            </h2>
          </div>

          {/* Specs Table */}
          <div className="bg-white border-2 border-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="px-6 py-4 text-left font-bold">
                      Specification
                    </th>
                    <th className="px-6 py-4 text-left font-bold">Metric</th>
                    <th className="px-6 py-4 text-left font-bold">Imperial</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Minimum Pipe Diameter
                    </td>
                    <td className="px-6 py-4 text-gray-700">50.8 mm</td>
                    <td className="px-6 py-4 text-gray-700">2&quot;</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Maximum Pipe Diameter
                    </td>
                    <td className="px-6 py-4 text-gray-700">1676.4mm</td>
                    <td className="px-6 py-4 text-gray-700">66&quot;</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Materials Covered
                    </td>
                    <td colSpan="2" className="px-6 py-4 text-gray-700">
                      Alloy Steel, Stainless Steel and Carbon Steel
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Drive Types of Hot Tapping Machines
                    </td>
                    <td colSpan="2" className="px-6 py-4 text-gray-700">
                      Manual, Pneumatic and Hydraulic
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Hot Tapping & Line Stop Fittings Size Range
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      12.7mm to 2352.2mm
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      1/2&quot; to 88&quot;
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Inflatable Gas Bag isolation up to
                    </td>
                    <td className="px-6 py-4 text-gray-700">2438.4mm</td>
                    <td className="px-6 py-4 text-gray-700">96&quot;</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Line Stopping Machines ranges up to
                    </td>
                    <td className="px-6 py-4 text-gray-700">1676.4mm</td>
                    <td className="px-6 py-4 text-gray-700">66&quot;</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Sandwich Valves - Manual
                    </td>
                    <td className="px-6 py-4 text-gray-700">Up to 304.8mm</td>
                    <td className="px-6 py-4 text-gray-700">Up to 12&quot;</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Sandwich Valves - Hydraulic
                    </td>
                    <td className="px-6 py-4 text-gray-700">Up to 1676.4mm</td>
                    <td className="px-6 py-4 text-gray-700">Up to 66&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== INDUSTRIES WE WORK WITH =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              We Are Working With
            </h2>
            <p className="text-xl text-gray-600">
              Critical sectors across the GCC region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Oil & Gas */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D6312F] hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🛢️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Oil & Gas Sector
              </h3>
              <ul className="space-y-2">
                {["On Shore", "Offshore", "GCD", "Subsea"].map((item) => (
                  <li
                    key={item}
                    className="flex items-start space-x-2 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-[#D6312F] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Petrochemical */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D6312F] hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">⚗️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Petrochemical Industry
              </h3>
              <p className="text-gray-700">
                Complete petrochemical processing and refining operations
              </p>
            </div>

            {/* Hydrocarbons */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D6312F] hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">⛽</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hydrocarbons
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D6312F] flex-shrink-0 mt-0.5" />
                  <span>Crude and Heavy Oils</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D6312F] flex-shrink-0 mt-0.5" />
                  <span>
                    Light Oils, Diesel, Kerosene, Petroleum, Motor Oils
                  </span>
                </li>
                <li className="flex items-start space-x-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D6312F] flex-shrink-0 mt-0.5" />
                  <span>Chemicals</span>
                </li>
              </ul>
            </div>

            {/* Power Generation */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D6312F] hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Power Generating Industry
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2 text-gray-700">
                  <Droplet className="w-4 h-4 text-[#D6312F] flex-shrink-0 mt-0.5" />
                  <span>Hot tapping water pipe</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-700">
                  <Wind className="w-4 h-4 text-[#D6312F] flex-shrink-0 mt-0.5" />
                  <span>Steam pipe</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Industries */}
          <div className="mt-8 bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Also Serving
            </h3>
            <p className="text-gray-700">
              <strong>Pharmaceuticals</strong> •{" "}
              <strong>Food Processing Industry</strong> •{" "}
              <strong>Malls and other large inhabited structures</strong> •
              Compressed Air • HVAC Systems
            </p>
          </div>
        </div>
      </section>

      {/* =============================== TAPPING ANGLES =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Various Angles for Tapping
            </h2>
            <p className="text-xl text-gray-600">
              Complete flexibility for any pipeline configuration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { name: "Top Down", icon: "⬇️" },
              { name: "Horizontal", icon: "↔️" },
              { name: "Angled Down", icon: "↘️" },
              { name: "Angled Up", icon: "↗️" },
              { name: "Bottom Up", icon: "⬆️" },
              { name: "Straight Alignment", icon: "↕️" },
              { name: "Lateral Alignment", icon: "↔️" },
            ].map((angle) => (
              <div
                key={angle.name}
                className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-[#D6312F] hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {angle.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm">
                  {angle.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== FEATURES & BENEFITS =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6">
                Features
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-8">
                Advanced Capabilities
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "No Downtime",
                    desc: "Operations continue uninterrupted during service",
                  },
                  {
                    title: "Versatile Use",
                    desc: "Applicable across multiple industries and systems",
                  },
                  {
                    title: "High-Pressure Safe",
                    desc: "Rated up to 1,450 psig with complete safety",
                  },
                  {
                    title: "Flexible Angle",
                    desc: "All tapping angles supported for any configuration",
                  },
                  {
                    title: "Leak Control",
                    desc: "Advanced sealing prevents fluid loss",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start space-x-4 bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#D6312F] transition-all"
                  >
                    <CheckCircle className="w-6 h-6 text-[#D6312F] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-bold mb-6">
                Benefits
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-8">
                Your Advantages
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Continuous Operations",
                    desc: "Maintain full production throughout service delivery",
                  },
                  {
                    title: "Cost-Effective",
                    desc: "Eliminate downtime costs and production losses",
                  },
                  {
                    title: "Safety First",
                    desc: "Zero-compromise approach to personnel and system safety",
                  },
                  {
                    title: "Leak Prevention",
                    desc: "Proven sealing technology eliminates leakage risks",
                  },
                  {
                    title: "Reliable Service",
                    desc: "Decades of field-proven performance across industries",
                  },
                ].map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start space-x-4 bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-600 transition-all"
                  >
                    <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== ENVIRONMENTAL RESPONSIBILITY =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
            Sustainable Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Economic Efficiency Meets
            <br />
            Environmental Responsibility
          </h2>
          <p className="text-xl text-green-100 leading-relaxed mb-8">
            By executing these critical modifications without taking pipelines
            out of service, Tritorc not only safeguards operational continuity
            but also minimizing unnecessary release of greenhouse gases—such as
            methane—into the environment. This approach offers both economic
            efficiency and environmental responsibility.
          </p>
          <p className="text-xl text-green-100 leading-relaxed">
            Whether you require precision-engineered interventions or need to
            maintain complex systems under full operational load, Tritorc&apos;s
            Hot Tapping and Line Stopping services provide a proven, sustainable
            solution for today&apos;s infrastructure demands.{" "}
            <strong>
              Trust us to deliver uncompromising safety, unmatched experience,
              and minimal environmental impact—every time.
            </strong>
          </p>
        </div>
      </section>

      {/* =============================== CASE STUDIES CTA =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Curious About How We&apos;ve
            <br />
            Delivered Results in the Field?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Take a look at our case studies to see Tritorc&apos;s Hot Tapping
            and Line Stopping solutions in action—proven performance, measurable
            impact, and unmatched reliability across industries.
          </p>
          <Link
            href={`/${country}/${lang}/case-studies`}
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 text-lg"
          >
            <FileText className="w-6 h-6 mr-2" />
            View Case Studies
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>

      {/* =============================== CONTACT FORM SECTION =============================== */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Info */}
            <div>
              <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-bold mb-4">
                Get Started Today
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Ready for a Proven,
                <br />
                Sustainable Solution?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Trust Tritorc to deliver uncompromising safety, unmatched
                experience, and minimal environmental impact—every time.
              </p>

              <div className="space-y-6">
                <ContactBenefit
                  icon={Clock}
                  title="24/7 Emergency Response"
                  desc="Rapid deployment for critical operations"
                />
                <ContactBenefit
                  icon={Shield}
                  title="Zero-Compromise Safety"
                  desc="API & ASME certified procedures"
                />
                <ContactBenefit
                  icon={Award}
                  title="Decades of Experience"
                  desc="Field-proven expertise across industries"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request a Service Quote
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* =============================== FINAL CTA =============================== */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-white">
              Expert Team Available 24/7
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            System Downtime is
            <br />
            Never an Option
          </h2>

          <p className="text-2xl text-gray-300 mb-8">
            Decades of proven expertise • Zero-compromise on safety
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#D6312F] to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Request Service Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <a
              href="tel:+971XXXXXXXX"
              className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              <Phone className="mr-2 w-6 h-6" />
              Call Emergency Hotline
            </a>
          </div>
        </div>
      </section>

      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}

/* ====================== Helper Components ====================== */

function StatBadge({ label, value }) {
  return (
    <div>
      <div className="text-2xl lg:text-3xl font-bold text-[#D6312F] mb-1">
        {value}
      </div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}

function ContactBenefit({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-[#D6312F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#D6312F]" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
