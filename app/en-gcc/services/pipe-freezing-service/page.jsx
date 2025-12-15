import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Shield,
  Zap,
  Clock,
  Award,
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
              {/* <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 w-fit">
                <Snowflake className="w-5 h-5 text-[#D6312F]" />
                <span className="text-sm font-bold uppercase tracking-wider">
                  Non-Intrusive Pipeline Isolation
                </span>
              </div> */}

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

            {/* Right Image */}
            <div className="relative flex items-center">
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src="/images/hottapping/pipe-2.webp"
                  alt="Pipe Freezing Operations"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stats Overlay */}
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

              {/* Form */}
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
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-2">
              Trusted By Industry Leaders
            </p>
            <div className="text-gray-600 text-lg">
              <span className="font-bold text-gray-900">35+ years</span>{" "}
              supporting global EPC contractors
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "ADNOC",
              "Saudi Aramco",
              "Qatar Energy",
              "PDO",
              "Shell",
              "BP",
            ].map((company) => (
              <div
                key={company}
                className="text-xl font-bold text-gray-400 hover:text-[#D6312F] transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== EQUIPMENT GALLERY =============================== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
              Pipe Freezing Equipment & Systems
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced liquid nitrogen and CO₂ systems for safe pipeline
              isolation
            </p>
          </div>

          {/* Images Grid - Compact Mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {[
              {
                src: "/images/hottapping/pipe-3.png",
                alt: "Pipe Freezing Machine",
                label: "Freezing Unit",
              },
              {
                src: "/images/hottapping/pipe-4.png",
                alt: "Liquid Nitrogen System",
                label: "LN₂ System",
              },
              {
                src: "/images/hottapping/pipe-2.webp",
                alt: "Temperature Monitoring",
                label: "Monitoring System",
              },
              {
                src: "/images/hottapping/pipe-3.png",
                alt: "Freeze Jackets",
                label: "Freeze Jackets",
              },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="group relative aspect-square rounded-lg md:rounded-2xl overflow-hidden shadow-md md:shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-[#D6312F]"
              >
                <Image
                  src={tool.src}
                  alt={tool.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Mobile: Always show label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                    <h3 className="text-white font-bold text-xs md:text-lg">
                      {tool.label}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Liquid Nitrogen / CO₂",
                desc: "Advanced cooling agents for rapid freeze",
              },
              {
                title: "Real-Time Monitoring",
                desc: "Temperature sensors track plug integrity",
              },
              {
                title: 'Sizes: 4" - 24"',
                desc: "Coverage for standard industrial pipes",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-4 md:p-6 text-center hover:border-[#D6312F] transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== TECHNICAL SPECIFICATIONS TABLE =============================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Technical Specifications
            </h2>
            <p className="text-gray-600">
              Comprehensive capabilities for pipe freezing operations
            </p>
          </div>

          {/* Specifications Table */}
          <div className="bg-white border-2 border-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="px-4 md:px-6 py-4 text-left font-bold text-sm md:text-base">
                      Specification
                    </th>
                    <th className="px-4 md:px-6 py-4 text-left font-bold text-sm md:text-base">
                      Metric
                    </th>
                    <th className="px-4 md:px-6 py-4 text-left font-bold text-sm md:text-base">
                      Imperial
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Minimum Pipe Diameter */}
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-gray-900 text-sm md:text-base">
                      Minimum Pipe Diameter
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base">
                      100 mm
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base">
                      4 inch
                    </td>
                  </tr>

                  {/* Maximum Pipe Diameter */}
                  <tr className="bg-white hover:bg-gray-100 transition-colors">
                    <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-gray-900 text-sm md:text-base">
                      Maximum Pipe Diameter
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base">
                      609 mm
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base">
                      24 inch
                    </td>
                  </tr>

                  {/* Pipe Temperature Range */}
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-gray-900 text-sm md:text-base">
                      Pipe Temperature Range
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base">
                      50° to 120° C
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base">
                      122°F to 248°F
                    </td>
                  </tr>

                  {/* Cooling Fluid */}
                  <tr className="bg-white hover:bg-gray-100 transition-colors">
                    <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-gray-900 text-sm md:text-base">
                      Cooling Fluid Used
                    </td>
                    <td
                      colSpan="2"
                      className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base"
                    >
                      Liquid Nitrogen, Carbon Dioxide
                    </td>
                  </tr>

                  {/* Materials Covered */}
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-gray-900 text-sm md:text-base">
                      Materials Covered
                    </td>
                    <td
                      colSpan="2"
                      className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base"
                    >
                      Carbon Steels, Stainless Steel, Aluminum Alloys, Cast
                      Iron, Epoxy Coated Pipes, Nickel Alloys, Copper-based
                      Alloys
                    </td>
                  </tr>

                  {/* Line Medium */}
                  <tr className="bg-white hover:bg-gray-100 transition-colors">
                    <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-gray-900 text-sm md:text-base">
                      Line Medium
                    </td>
                    <td
                      colSpan="2"
                      className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base"
                    >
                      Freshwater, Glycol solutions, Seawaters, Effluents/Sewage,
                      Produced water, Sludge, Crude oil, Fuel oils, Lubrication
                      oils, Various chemical products
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Highlights Below Table */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: "❄️",
                label: "Cooling Method",
                value: "LN₂ / CO₂ Systems",
              },
              {
                icon: "🌡️",
                label: "Temperature Range",
                value: "50°C - 120°C",
              },
              {
                icon: "✓",
                label: "Certification",
                value: "ISO-Certified Procedures",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#D6312F]/5 to-orange-50 border-2 border-[#D6312F]/20 rounded-xl p-4 md:p-6 text-center hover:border-[#D6312F] transition-all"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-xs text-gray-600 mb-1">{item.label}</div>
                <div className="text-sm md:text-base font-bold text-gray-900">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== COMPACT KEY BENEFITS =============================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Choose Pipe Freezing
            </h2>
            <p className="text-lg text-gray-600">
              Safe, non-intrusive isolation without system drainage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Snowflake,
                title: "No System Drainage",
                desc: "Freeze plugs eliminate complete drainage",
              },
              {
                icon: Shield,
                title: "ISO Certified",
                desc: "Validated freeze-plug procedures",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                desc: "Emergency response available",
              },
              {
                icon: Award,
                title: "35+ Years",
                desc: "Proven industry experience",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#D6312F] hover:shadow-lg transition-all text-center"
              >
                <item.icon className="w-10 h-10 text-[#D6312F] mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== CONTACT SECTION (COMPACT) =============================== */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Get Expert Consultation
              </h2>
              <p className="text-gray-600 mb-2">
                24/7 emergency response • ISO-certified procedures
              </p>
              <div className="text-gray-700 text-lg">
                <span className="font-bold text-[#D6312F]">35+ years</span>{" "}
                supporting global EPC contractors
              </div>
            </div>

            <ContactForm />

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Clock className="w-8 h-8 text-[#D6312F] mb-2" />
                  <div className="font-bold text-gray-900">24/7 Support</div>
                  <div className="text-sm text-gray-600">Always available</div>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-8 h-8 text-[#D6312F] mb-2" />
                  <div className="font-bold text-gray-900">ISO Certified</div>
                  <div className="text-sm text-gray-600">Full compliance</div>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="w-8 h-8 text-[#D6312F] mb-2" />
                  <div className="font-bold text-gray-900">35+ Years</div>
                  <div className="text-sm text-gray-600">Proven expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== FINAL CTA =============================== */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-white">
              Expert Team Available 24/7
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Safe Pipeline Isolation Without Shutdowns
          </h2>

          <p className="text-xl text-gray-300 mb-2">
            Get your free consultation today
          </p>
          <div className="text-gray-400 text-lg mb-8">
            <span className="font-bold text-white">35+ years</span> supporting
            global EPC contractors
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#D6312F] to-red-600 text-white rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Request Quote Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/assets/pdf/pipe-freezing-service.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Catalog
            </a>
          </div>
        </div>
      </section>

      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}

/* ====================== Helper Component ====================== */
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
