export const products = [
  {
    id: 'tsl-square-drive',
    name: 'TSL Square Drive',
    category: 'Hydraulic Torque Wrenches',
    shortDescription: 'Low-profile square drive wrench for confined spaces',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
    torqueRange: '200 - 12,000 Nm',
    weight: '3.5 - 28 kg',
    features: [
      'Compact design for restricted access',
      '360° rotating reaction arm',
      'High accuracy ±3%',
      'Durable steel construction'
    ],
    applications: [
      'Wind turbine maintenance',
      'Oil & gas flange connections',
      'Heavy machinery assembly',
      'Power plant installations'
    ],
    specifications: {
      'Torque Range': '200 - 12,000 Nm',
      'Accuracy': '±3%',
      'Weight': '3.5 - 28 kg',
      'Drive Size': '3/4" to 1-1/2"',
      'Operating Pressure': '700 bar',
      'Material': 'Chrome vanadium steel'
    }
  },
  {
    id: 'btl-low-profile',
    name: 'BTL Low Profile',
    category: 'Hydraulic Torque Wrenches',
    shortDescription: 'Ultra-compact wrench for extreme confined spaces',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    torqueRange: '500 - 8,000 Nm',
    weight: '4.2 - 22 kg',
    features: [
      'Ultra-low profile design',
      'Quick-change cassette system',
      'Anti-wind-up ratchet',
      'Corrosion-resistant coating'
    ],
    applications: [
      'Subsea equipment',
      'Mining machinery',
      'Chemical processing plants',
      'Rail transportation'
    ],
    specifications: {
      'Torque Range': '500 - 8,000 Nm',
      'Accuracy': '±3%',
      'Weight': '4.2 - 22 kg',
      'Drive Size': '3/4" to 1-1/4"',
      'Operating Pressure': '700 bar',
      'Material': 'Aerospace-grade aluminum alloy'
    }
  },
  {
    id: 'hts-pump',
    name: 'HTS Hydraulic Pump',
    category: 'Hydraulic Pumps',
    shortDescription: 'High-performance electric hydraulic pump',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    torqueRange: 'Up to 700 bar',
    weight: '18 - 35 kg',
    features: [
      'Dual-stage pumping system',
      'Digital pressure display',
      'Auto-return valve',
      'Brushless motor technology'
    ],
    applications: [
      'Remote operations',
      'Multi-tool setups',
      'Production line assembly',
      'Field service applications'
    ],
    specifications: {
      'Max Pressure': '700 bar',
      'Oil Capacity': '4 - 8 liters',
      'Weight': '18 - 35 kg',
      'Power Supply': '110V/230V/380V',
      'Flow Rate': '0.8 - 2.5 L/min',
      'Protection': 'IP54'
    }
  },
  {
    id: 'dtw-digital',
    name: 'DTW Digital Wrench',
    category: 'Digital Torque Solutions',
    shortDescription: 'Smart hydraulic wrench with digital monitoring',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    torqueRange: '300 - 15,000 Nm',
    weight: '4.0 - 32 kg',
    features: [
      'Real-time torque monitoring',
      'Bluetooth connectivity',
      'Data logging & reporting',
      'Preset torque programs'
    ],
    applications: [
      'Quality-critical assemblies',
      'Traceability requirements',
      'Aerospace manufacturing',
      'Automotive production'
    ],
    specifications: {
      'Torque Range': '300 - 15,000 Nm',
      'Accuracy': '±2%',
      'Weight': '4.0 - 32 kg',
      'Display': 'LED digital',
      'Memory': '500 operations',
      'Connectivity': 'Bluetooth 5.0'
    }
  },
  {
    id: 'xlt-extender',
    name: 'XLT Reaction Arm',
    category: 'Accessories',
    shortDescription: 'Heavy-duty reaction arm system',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    torqueRange: 'Up to 50,000 Nm',
    weight: '8 - 45 kg',
    features: [
      'Modular extension system',
      'Universal adapter compatibility',
      '360° swivel bearing',
      'High-strength steel construction'
    ],
    applications: [
      'Large flange connections',
      'Pipeline construction',
      'Bridge construction',
      'Ship building'
    ],
    specifications: {
      'Max Torque': '50,000 Nm',
      'Length': '500 - 2000 mm',
      'Weight': '8 - 45 kg',
      'Material': 'Chrome-moly steel',
      'Finish': 'Powder-coated',
      'Compatibility': 'Universal'
    }
  },
  {
    id: 'pth-pneumatic',
    name: 'PTH Pneumatic Wrench',
    category: 'Pneumatic Tools',
    shortDescription: 'Air-powered torque wrench for rapid deployment',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    torqueRange: '100 - 4,000 Nm',
    weight: '2.8 - 15 kg',
    features: [
      'No hydraulics required',
      'Rapid deployment',
      'Lightweight construction',
      'Low maintenance design'
    ],
    applications: [
      'Mobile service trucks',
      'Quick maintenance',
      'Light assembly work',
      'Emergency repairs'
    ],
    specifications: {
      'Torque Range': '100 - 4,000 Nm',
      'Accuracy': '±4%',
      'Weight': '2.8 - 15 kg',
      'Air Pressure': '6 - 8 bar',
      'Air Consumption': '25 - 60 CFM',
      'Noise Level': '85 dB'
    }
  }
];

export const getProductBySlug = (slug) => products.find(p => p.id === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
