"use client";

export default function HeroEnquiryForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Later you can POST data to API here
    // const data = Object.fromEntries(new FormData(e.target));

    // Redirect to thank-you page
    window.location.href = "/thank-you";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl"
      >
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input
            required
            name="name"
            placeholder="Full Name *"
            className="rounded-lg bg-white/90 px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#D6312F]"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Work Email *"
            className="rounded-lg bg-white/90 px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#D6312F]"
          />

          <input
            required
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            className="rounded-lg bg-white/90 px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#D6312F]"
          />

          <button
            type="submit"
            className="rounded-lg bg-[#D6312F] px-6 py-3 text-sm font-bold text-white hover:bg-[#b72826] transition-all"
          >
            Get Quote
          </button>
        </div>

        {/* Message */}
        <div className="mt-3">
          <textarea
            required
            name="message"
            rows={3}
            placeholder="Message / Application details (torque range, bolt size, industry, urgency, etc.) *"
            className="w-full rounded-lg bg-white/90 px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#D6312F] resize-none"
          />
        </div>

        <p className="text-xs text-gray-300 mt-3 text-center">
          Get pricing, datasheets & delivery timelines within 24 hours
        </p>
      </form>
    </div>
  );
}
