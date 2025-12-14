import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product, country, lang, translations }) {
  return (
    <Link
      href={`/${country}/${lang}/product/${product.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="text-xs font-semibold text-[#D6312F] uppercase tracking-wide mb-2">
          {product.category}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#D6312F] transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">
              {product.torqueRange}
            </span>
          </div>
          <div className="flex items-center text-[#D6312F] font-semibold text-sm group-hover:translate-x-1 transition-transform">
            {translations?.products?.learnMore || "Learn More"}
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
