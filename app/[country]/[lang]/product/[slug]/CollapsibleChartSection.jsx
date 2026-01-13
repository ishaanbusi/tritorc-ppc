"use client";

import React, { useMemo, useState } from "react";
import { ChevronDown, Download, Maximize2 } from "lucide-react";

export default function CollapsibleChartSection({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("Metric");

  const selectorData = product?.selectorData || {};
  const models = selectorData.models || [];
  const technicalData = selectorData.technicalData || {};
  const datasheetUrl = product?.datasheetUrl || "";

  if (!models.length) return null;

  const unitKey = activeTab.toLowerCase();

  /* -------------------------------------------------
     AUTO FALLBACK SPEC CONFIG (FOR OLD DATASETS)
  -------------------------------------------------- */
  const autoSpecConfig = {
    basic: [
      { key: "squareDrive", label: "Square Drive", unit: "inch" },
      {
        key: "maxTorque",
        label: "Max Torque",
        unitMetric: "Nm",
        unitImperial: "Ft. Lbs.",
        highlight: true,
        color: "text-[#D6312F]",
      },
      {
        key: "weight",
        label: "Weight",
        unitMetric: "Kg",
        unitImperial: "Lbs.",
      },
      {
        key: "driveWeight",
        label: "Drive Weight",
        unitMetric: "Kg",
        unitImperial: "Lbs.",
      },
      {
        key: "ratchetWeight",
        label: "Ratchet Weight",
        unitMetric: "Kg",
        unitImperial: "Lbs.",
      },
    ],
    detailed: [
      {
        key: "minTorque",
        label: "Min Torque",
        unitMetric: "Nm",
        unitImperial: "Ft. Lbs.",
      },
      {
        key: "bodyLength",
        label: "Body Length",
        unitMetric: "mm",
        unitImperial: "inch",
      },
      {
        key: "overallLength",
        label: "Overall Length",
        unitMetric: "mm",
        unitImperial: "inch",
      },
      {
        key: "toolWidth",
        label: "Tool Width",
        unitMetric: "mm",
        unitImperial: "inch",
      },
      {
        key: "overallWidth",
        label: "Overall Width",
        unitMetric: "mm",
        unitImperial: "inch",
      },
      {
        key: "toolHeight",
        label: "Tool Height",
        unitMetric: "mm",
        unitImperial: "inch",
      },
      {
        key: "overallHeight",
        label: "Overall Height",
        unitMetric: "mm",
        unitImperial: "inch",
      },
      {
        key: "toolRadius",
        label: "Tool Radius",
        unitMetric: "mm",
        unitImperial: "inch",
      },
      {
        key: "reactionReach",
        label: "Reaction Reach",
        unitMetric: "mm",
        unitImperial: "inch",
      },
      {
        key: "acrossFlat",
        label: "Across Flats",
        unitMetric: "mm",
        unitImperial: "inch",
      },
      { key: "h1", label: "Height H1", unitMetric: "mm", unitImperial: "inch" },
      { key: "h2", label: "Height H2", unitMetric: "mm", unitImperial: "inch" },
      {
        key: "noseRadius",
        label: "Nose Radius",
        unitMetric: "mm",
        unitImperial: "inch",
      },
    ],
  };

  const specConfig =
    selectorData.specConfig && selectorData.specConfig.basic?.length
      ? selectorData.specConfig
      : autoSpecConfig;

  /* -------------------------------------------------
     CHECK IF ANY MODEL HAS A VALUE FOR A SPEC
  -------------------------------------------------- */
  const hasAnyValue = (specKey) => {
    return models.some((model) => {
      const value = technicalData[model]?.[specKey];
      if (!value) return false;
      if (typeof value === "string") return value.trim() !== "";
      return value[unitKey] != null && value[unitKey] !== "";
    });
  };

  /* -------------------------------------------------
     BUILD SPECS (HIDE NON-EXISTING ONES)
  -------------------------------------------------- */
  const buildSpecs = (specs) =>
    specs
      .filter((spec) => hasAnyValue(spec.key)) // ✅ hide missing specs
      .map((spec) => ({
        ...spec,
        unit:
          activeTab === "Metric"
            ? spec.unitMetric || spec.unit
            : spec.unitImperial || spec.unit,
        getValue: (model) => {
          const value = technicalData[model]?.[spec.key];
          if (!value) return null;
          if (typeof value === "string") return value;
          return value[unitKey];
        },
      }));

  const basicSpecs = useMemo(
    () => buildSpecs(specConfig.basic),
    [technicalData, activeTab]
  );

  const detailedSpecs = useMemo(
    () => buildSpecs(specConfig.detailed),
    [technicalData, activeTab]
  );

  const allSpecs = useMemo(
    () => [...basicSpecs, ...(isExpanded ? detailedSpecs : [])],
    [basicSpecs, detailedSpecs, isExpanded]
  );

  const handleDownload = () => {
    if (datasheetUrl) window.open(datasheetUrl, "_blank");
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
            <Maximize2 className="w-4 h-4" />
            Technical Specifications
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-3">
            {product?.name || "Product Comparison"}
          </h2>
        </div>

        {/* UNIT TOGGLE */}
        <div className="flex justify-end mb-6">
          <div className="inline-flex bg-white border rounded-xl p-1 shadow-sm">
            {["Metric", "Imperial"].map((unit) => (
              <button
                key={unit}
                onClick={() => setActiveTab(unit)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold ${
                  activeTab === unit
                    ? "bg-[#D6312F] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {unit}
              </button>
            ))}
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white border rounded-3xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-900 text-white sticky top-0">
                <tr>
                  <th className="sticky left-0 bg-gray-900 px-6 py-4 text-left text-xs uppercase">
                    Specification
                  </th>
                  <th className="px-4 py-4 text-xs uppercase">Unit</th>
                  {models.map((model) => (
                    <th key={model} className="px-4 py-4 font-bold">
                      {model}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {allSpecs.map((spec, idx) => (
                  <tr key={spec.key} className={idx % 2 ? "bg-gray-50" : ""}>
                    <td className="sticky left-0 bg-inherit px-6 py-4 font-semibold">
                      <div className="flex items-center gap-2">
                        {spec.highlight && (
                          <span className="w-2 h-2 bg-[#D6312F] rounded-full animate-pulse" />
                        )}
                        {spec.label}
                      </div>
                    </td>
                    <td className="text-center text-xs text-gray-500">
                      {spec.unit}
                    </td>
                    {models.map((model) => (
                      <td
                        key={model}
                        className={`text-center font-bold ${
                          spec.color || "text-gray-800"
                        }`}
                      >
                        {spec.getValue(model) || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* EXPAND */}
          {!!detailedSpecs.length && (
            <div className="border-t bg-gray-50 p-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex justify-center items-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-xl font-semibold"
              >
                {isExpanded
                  ? "Show Less Details"
                  : "Show Detailed Specifications"}
                <ChevronDown
                  className={`w-5 h-5 transition ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          )}
        </div>

        {/* DOWNLOAD */}
        {!!datasheetUrl && (
          <div className="mt-12">
            <div className="bg-gray-900 rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-white text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  Complete Technical Documentation
                </h3>
                <p className="text-gray-400">
                  Datasheets, CAD drawings & torque charts
                </p>
              </div>
              <button
                onClick={handleDownload}
                className="flex items-center gap-3 px-8 py-4 bg-[#D6312F] rounded-xl font-bold text-white hover:bg-red-700 transition"
              >
                <Download className="w-5 h-5" />
                Download Datasheet
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
