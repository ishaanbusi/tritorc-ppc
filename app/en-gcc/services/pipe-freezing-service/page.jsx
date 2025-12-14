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
  Snowflake,
  Thermometer,
  Activity,
  Settings,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { translations } from "@/lib/translations";

// Metadata for SEO
export const metadata = {
  title: "Industrial Pipe Freezing Services UAE | Tritorc",
  description:
    "Safe, non-intrusive pipeline isolation services. Pipe sizes ½″ to 30″+, up to 6000 PSI. ISO-certified freezing procedures for oil & gas, petrochemical industries.",
};

export default function PipeFreezingServicesPage({ params }) {
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
              src="/images/hottapping/pipe-2.webp"
              alt="Pipe Freezing Services Background"
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
                <Snowflake className="w-5 h-5 text-[#D6312F]" />
                <span className="text-sm font-bold uppercase tracking-wider">
                  Non-Intrusive Pipeline Isolation
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-[1.1]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Industrial Pipe Freezing
                </span>
                <br />
                <span className="text-[#D6312F]">Services</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                Safe, non-intrusive pipeline isolation engineered for industries
                where shutdowns are costly, valve failures risk safety, and
                controlled live-line intervention is essential.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                <StatBadge label="Pipe Size" value="½″ to 30″+" />
                <StatBadge label="Pressure" value="6000 PSI" />
                <StatBadge label="Certification" value="ISO" />
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
                  href="/assets/pdf/pipe-freezing-service.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Catalog
                </a>
              </div>
            </div>

            {/* Right Image - Matches Left Height */}
            <div className="relative flex items-center">
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src="/images/hottapping/pipe-2.webp"
                  alt="Pipe Freezing Operations"
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
                <span>ISO-Certified Freezing Procedures</span>
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

      {/* =============================== OVERVIEW =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-4">
              Overview
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Engineered for Diverse Materials,
              <br />
              Line Conditions & Industrial Fluids
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our freeze-plug formation process is validated for multiple pipe
              metallurgy and fluid chemistries, ensuring a structurally sound,
              high-strength ice barrier.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Engineered for{" "}
                <strong>
                  refineries, petrochemical plants, power stations, district
                  cooling networks, offshore platforms
                </strong>
                , and process industries requiring zero-disruption isolation.
              </p>

              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-[#D6312F] mr-3" />
                  Freeze Isolation Engineering
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The freeze isolation is engineered considering{" "}
                  <strong>
                    fluid expansion profiles, thermal conductivity, pressure
                    factors, and live-line operating parameters
                  </strong>
                  .
                </p>
              </div>
            </div>

            {/* Right Content - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  src: "/images/hottapping/pipe-3.png",
                  alt: "Pipe Freezing Operation",
                },
                {
                  src: "/images/hottapping/pipe-4.png",
                  alt: "Liquid Nitrogen Freezing",
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

      {/* =============================== MATERIALS & FLUIDS TABLE =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pipe Materials */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Pipe Materials Supported
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Carbon steel",
                  "Stainless steel",
                  "Copper",
                  "Cast iron",
                  "Aluminium",
                  "Epoxy-lined pipes",
                  "Duplex & super duplex",
                  "Alloy steels",
                ].map((material) => (
                  <li
                    key={material}
                    className="flex items-start space-x-3 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{material}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fluids Supported */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#D6312F]/10 rounded-xl flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-[#D6312F]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Fluids Supported
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Water, chilled water, demineralized water",
                  "Diesel, oils, lubricants, glycols",
                  "Industrial chemicals (subject to thermal evaluation and freeze-point feasibility)",
                ].map((fluid) => (
                  <li
                    key={fluid}
                    className="flex items-start space-x-3 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-[#D6312F] flex-shrink-0 mt-0.5" />
                    <span>{fluid}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== CAPABILITIES =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-50 text-[#D6312F] rounded-full text-sm font-bold mb-4">
              Technical Capabilities
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Pipe Freezing Capabilities &<br />
              Technical Strengths
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cooling Agents */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Snowflake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cooling Agents</h3>
              <p className="text-blue-100 mb-3">
                <strong>Liquid Nitrogen or CO₂</strong>
              </p>
              <p className="text-sm text-blue-100 leading-relaxed">
                Used based on pipeline material, thermal response, and
                environmental constraints—ensuring controlled freeze rates and
                uniform plug density.
              </p>
            </div>

            {/* Temperature Monitoring */}
            <div className="bg-gradient-to-br from-[#D6312F] to-red-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Real-Time Temperature Monitoring
              </h3>
              <p className="text-sm text-red-100 leading-relaxed">
                Precision sensors track freeze-front growth and plug integrity,
                maintaining safe thermal differentials across the pipe wall.
              </p>
            </div>

            {/* Freeze Control */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Continuous Freeze-Front Control
              </h3>
              <p className="text-sm text-green-100 leading-relaxed">
                Automated cold delivery regulates freeze progression, preventing
                partial plugs, thermal shock, or irregular formations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== SPECIALIZED SERVICES =============================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Specialized Pipe Freezing Services
              <br />
              for Live Line Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Live-Line Valve Replacements",
                desc: "Isolate sections for valve, actuator, or control element replacement—no system depressurization or production downtime required.",
                icon: "🔧",
              },
              {
                title: "Process Pipe Leak Isolation",
                desc: "Rapid leak containment by forming freeze plugs to prevent fluid loss, hazards, or escalation during emergency response.",
                icon: "⚠️",
              },
              {
                title: "Offshore Pipe Work & Subsea Freezing",
                desc: "Deployable freeze kits for FPSOs, platforms, and marine vessels—engineered for corrosive environments and high-motion conditions.",
                icon: "🚢",
              },
              {
                title: "Shutdown & Turnaround Support",
                desc: "Critical isolation support during TARs where multiple interventions require precise, non-invasive line control.",
                icon: "🔄",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D6312F] hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
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
                    <td className="px-6 py-4 text-gray-700">100 mm</td>
                    <td className="px-6 py-4 text-gray-700">4 inch</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Maximum Pipe Diameter
                    </td>
                    <td className="px-6 py-4 text-gray-700">609 mm</td>
                    <td className="px-6 py-4 text-gray-700">24 inch</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Pipe Temperature Range
                    </td>
                    <td className="px-6 py-4 text-gray-700">50° to 120° C</td>
                    <td className="px-6 py-4 text-gray-700">122°F to 248°F</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Cooling Fluid Used
                    </td>
                    <td colSpan="2" className="px-6 py-4 text-gray-700">
                      Liquid Nitrogen, Carbon Dioxide
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Materials Covered
                    </td>
                    <td colSpan="2" className="px-6 py-4 text-gray-700">
                      Carbon Steels, Stainless Steel, Aluminum Alloys, Cast
                      Iron, Epoxy Coated Pipes, Nickel Alloys, Copper-based
                      Alloys
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Line Medium
                    </td>
                    <td colSpan="2" className="px-6 py-4 text-gray-700">
                      Freshwater, Glycol solutions, Seawaters, Effluents/Sewage,
                      Produced water, Sludge, Crude oil, Fuel oils, Lubrication
                      oils, Various chemical products
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                    title: "No System Drainage",
                    desc: "Freeze plugs eliminate the need for complete system drainage",
                  },
                  {
                    title: "Versatile Material Compatibility",
                    desc: "Works across carbon steel, stainless steel, copper and specialty alloys",
                  },
                  {
                    title: "Wide Range of Fluids",
                    desc: "Compatible with water, oils, chemicals, and various industrial fluids",
                  },
                  {
                    title: "Precise Temperature Control",
                    desc: "Real-time monitoring ensures optimal freeze plug formation",
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
                    title: "Safe and Secure",
                    desc: "Non-intrusive method with proven safety record across industries",
                  },
                  {
                    title: "Cost-Effective",
                    desc: "Eliminates downtime costs and production losses during maintenance",
                  },
                  {
                    title: "Versatile Use",
                    desc: "Applicable across oil & gas, petrochemical, power, and water industries",
                  },
                  {
                    title: "Efficient Maintenance",
                    desc: "Enables rapid valve replacement and leak isolation without shutdowns",
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
                Ready for Safe,
                <br />
                Non-Intrusive Isolation?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Trust Tritorc to deliver ISO-certified pipe freezing solutions
                with zero compromise on safety and efficiency.
              </p>

              <div className="space-y-6">
                <ContactBenefit
                  icon={Clock}
                  title="24/7 Emergency Response"
                  desc="Rapid deployment for critical operations"
                />
                <ContactBenefit
                  icon={Shield}
                  title="ISO-Certified Procedures"
                  desc="Validated freeze-plug formation process"
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
            Safe Pipeline Isolation
            <br />
            Without Shutdowns
          </h2>

          <p className="text-2xl text-gray-300 mb-8">
            ISO-certified procedures • Zero-compromise on safety
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
              href="/assets/pdf/pipe-freezing-service.pdf"
              download
              className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              <Download className="mr-2 w-6 h-6" />
              Download Catalog
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
