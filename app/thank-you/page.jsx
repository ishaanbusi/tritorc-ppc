import Link from "next/link";

export const metadata = {
  title: "Thank You | Tritorc",
  description: "Your enquiry has been successfully submitted.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
      <div className="max-w-lg w-full text-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl">
        <div className="text-[#D6312F] text-6xl mb-4">✓</div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
          Thank You!
        </h1>

        <p className="text-gray-300 mb-6">
          Your enquiry has been successfully submitted. Our team will contact
          you within <strong>24 hours</strong>.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#D6312F] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#b72826] transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
