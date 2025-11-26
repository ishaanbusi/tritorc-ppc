"use client";

import Link from "next/link";
import { Globe, MapPin, Mountain, Waves } from "lucide-react";
import { continents } from "@/lib/continents";

const iconMap = {
  Globe,
  MapPin,
  Mountain,
  Waves,
};
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/logo.png"
              alt="Tritorc Logo"
              className="h-16 md:h-14 object-contain"
            />
          </div>

          <p className="text-2xl md:text-3xl text-gray-600 font-light mb-4">
            Precision Bolting Solutions Worldwide
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Select your region to access engineering-grade hydraulic torque
            tools and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {continents.map((continent) => {
            const Icon = iconMap[continent.icon] || Globe;
            return (
              <Link
                key={continent.id}
                href={`/continent/${continent.id}`}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#D6312F] hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D6312F] to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#D6312F] transition-colors">
                    {continent.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {continent.countries.length} countries available
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-white rounded-xl px-8 py-6 shadow-md border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              Certified to ISO 9001:2015
            </p>
            <p className="text-xs text-gray-500">
              Trusted by Fortune 500 Companies Worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
