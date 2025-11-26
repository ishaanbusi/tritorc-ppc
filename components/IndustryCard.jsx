import * as Icons from 'lucide-react';

export default function IndustryCard({ industry }) {
  const Icon = Icons[industry.icon] || Icons.Factory;

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={industry.image}
          alt={industry.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <div className="w-12 h-12 bg-[#D6312F] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          {industry.name}
        </h3>
        <p className="text-gray-200 text-sm">
          {industry.description}
        </p>
      </div>
    </div>
  );
}
