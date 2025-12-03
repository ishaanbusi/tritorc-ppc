"use client";

import React, { useState } from "react";
import { ChevronDown, Download, Maximize2 } from "lucide-react";

export default function CollapsibleChartSection({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("Metric");

  // Safe data extraction
  const models = product?.selectorData?.models || [];
  const technicalData = product?.selectorData?.technicalData || {};

  // If no chart data, don't render
  if (models.length === 0) {
    return null;
  }

  const unitKey = activeTab.toLowerCase();

  // ✅ Basic specs - ALWAYS VISIBLE (3 rows)
  const basicSpecs = [
    {
      key: "squareDrive",
      label: "Square Drive",
      unit: "inch",
      getValue: (model) => technicalData[model]?.squareDrive,
      color: "text-gray-900",
    },
    {
      key: "maxTorque",
      label: "Max Torque",
      unit: activeTab === "Metric" ? "Nm" : "Ft. Lbs.",
      getValue: (model) => technicalData[model]?.maxTorque?.[unitKey],
      highlight: true,
      color: "text-[#D6312F]",
    },
    {
      key: "weight",
      label: "Weight",
      unit: activeTab === "Metric" ? "Kg" : "Lbs.",
      getValue: (model) => technicalData[model]?.weight?.[unitKey],
      color: "text-green-600",
    },
  ];

  // ✅ Detailed specs - SHOWN ON EXPAND (9 rows)
  const detailedSpecs = [
    {
      key: "minTorque",
      label: "Min Torque",
      unit: activeTab === "Metric" ? "Nm" : "Ft. Lbs.",
      getValue: (model) => technicalData[model]?.minTorque?.[unitKey],
      color: "text-orange-600",
    },
    {
      key: "bodyLength",
      label: "Body Length (L1)",
      unit: activeTab === "Metric" ? "mm" : "inch",
      getValue: (model) => technicalData[model]?.bodyLength?.[unitKey],
      color: "text-blue-600",
    },
    {
      key: "overallLength",
      label: "Overall Length (L2)",
      unit: activeTab === "Metric" ? "mm" : "inch",
      getValue: (model) => technicalData[model]?.overallLength?.[unitKey],
      color: "text-blue-600",
    },
    {
      key: "toolWidth",
      label: "Tool Width (H1)",
      unit: activeTab === "Metric" ? "mm" : "inch",
      getValue: (model) => technicalData[model]?.toolWidth?.[unitKey],
      color: "text-purple-600",
    },
    {
      key: "overallWidth",
      label: "Overall Width (H2)",
      unit: activeTab === "Metric" ? "mm" : "inch",
      getValue: (model) => technicalData[model]?.overallWidth?.[unitKey],
      color: "text-purple-600",
    },
    {
      key: "toolHeight",
      label: "Tool Height (H3)",
      unit: activeTab === "Metric" ? "mm" : "inch",
      getValue: (model) => technicalData[model]?.toolHeight?.[unitKey],
      color: "text-indigo-600",
    },
    {
      key: "overallHeight",
      label: "Overall Height (H4)",
      unit: activeTab === "Metric" ? "mm" : "inch",
      getValue: (model) => technicalData[model]?.overallHeight?.[unitKey],
      color: "text-indigo-600",
    },
    {
      key: "toolRadius",
      label: "Tool Radius (R1)",
      unit: activeTab === "Metric" ? "mm" : "inch",
      getValue: (model) => technicalData[model]?.toolRadius?.[unitKey],
      color: "text-pink-600",
    },
    {
      key: "reactionReach",
      label: "Reaction Reach (R2)",
      unit: activeTab === "Metric" ? "mm" : "inch",
      getValue: (model) => technicalData[model]?.reactionReach?.[unitKey],
      color: "text-pink-600",
    },
  ];

  const allSpecs = [...basicSpecs, ...(isExpanded ? detailedSpecs : [])];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-4">
            <Maximize2 className="w-4 h-4" />
            <span>Technical Specifications</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            TSL Series Comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare specifications across all models to select the right tool
            for your project
          </p>
        </div>

        {/* Unit Toggle */}
        <div className="flex justify-center sm:justify-end mb-6">
          <div className="inline-flex bg-white border-2 border-gray-200 rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("Metric")}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                activeTab === "Metric"
                  ? "bg-[#D6312F] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Metric
            </button>
            <button
              onClick={() => setActiveTab("Imperial")}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                activeTab === "Imperial"
                  ? "bg-[#D6312F] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Imperial
            </button>
          </div>
        </div>

        {/* Chart Container */}
        <div className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden shadow-xl">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Table Header - Sticky */}
              <thead className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white sticky top-0 z-10">
                <tr>
                  <th className="border-r border-gray-700 px-6 py-4 text-left font-bold text-xs uppercase tracking-wider sticky left-0 bg-gray-900 z-20 min-w-[200px]">
                    Specification
                  </th>
                  <th className="border-r border-gray-700 px-4 py-4 text-center font-bold text-xs uppercase tracking-wider min-w-[80px]">
                    Unit
                  </th>
                  {models.map((model) => (
                    <th
                      key={model}
                      className="border-r border-gray-700 px-4 py-4 text-center font-bold text-sm min-w-[110px] last:border-r-0"
                    >
                      {model}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {allSpecs.map((spec, idx) => (
                  <tr
                    key={spec.key}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-blue-50 transition-colors duration-150`}
                  >
                    <td
                      className={`border-b border-r border-gray-200 px-6 py-4 font-semibold text-gray-900 sticky left-0 z-10 ${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        {spec.highlight && (
                          <div className="w-2 h-2 bg-[#D6312F] rounded-full animate-pulse"></div>
                        )}
                        <span>{spec.label}</span>
                      </div>
                    </td>
                    <td className="border-b border-r border-gray-200 px-4 py-4 text-center text-xs text-gray-600 font-medium">
                      {spec.unit}
                    </td>
                    {models.map((model) => {
                      const value = spec.getValue(model);
                      return (
                        <td
                          key={model}
                          className={`border-b border-r border-gray-200 px-4 py-4 text-center font-bold last:border-r-0 ${spec.color}`}
                        >
                          {value || "-"}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Expand/Collapse Button */}
          <div className="border-t-2 border-gray-200 bg-gradient-to-r from-gray-50 to-white p-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center space-x-3"
            >
              {isExpanded ? (
                <>
                  <span>Show Less Details</span>
                  <ChevronDown className="w-5 h-5 rotate-180 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  <span>
                    Show All {detailedSpecs.length} Detailed Specifications
                  </span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-white text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  Need the Complete Technical Documentation?
                </h3>
                <p className="text-gray-400 text-base">
                  Download our comprehensive datasheet with CAD drawings, torque
                  charts, and installation guides
                </p>
              </div>
              <button className="flex-shrink-0 px-8 py-4 bg-[#D6312F] text-white rounded-xl font-bold text-base hover:bg-red-700 transition-all hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3 whitespace-nowrap">
                <Download className="w-5 h-5" />
                <span>Download Full Datasheet</span>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#D6312F] transition-all hover:shadow-lg group">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              ±3% Accuracy
            </h4>
            <p className="text-gray-600 text-sm">
              Factory calibrated with traceable certification included
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#D6312F] transition-all hover:shadow-lg group">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              24h Delivery
            </h4>
            <p className="text-gray-600 text-sm">
              Express shipping available to project sites worldwide
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#D6312F] transition-all hover:shadow-lg group">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Field Support
            </h4>
            <p className="text-gray-600 text-sm">
              Technical engineers available for on-site commissioning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
