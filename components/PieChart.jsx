"use client";

export default function PieChart({ value1 = 65, value2 = 35 }) {
  const total = value1 + value2;
  const angle = (value1 / total) * 360;

  return (
    <div className="relative w-48 h-48">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        {/* Background circle */}
        <circle
          r="16"
          cx="16"
          cy="16"
          fill="transparent"
          stroke="#f3f4f6"
          strokeWidth="32"
        />

        {/* Red Arc */}
        <circle
          r="16"
          cx="16"
          cy="16"
          fill="transparent"
          stroke="#D6312F"
          strokeWidth="32"
          strokeDasharray={`${(angle / 360) * 100} 100`}
          transform="rotate(-90 16 16)"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-800">
        {value1}%
      </div>
    </div>
  );
}
