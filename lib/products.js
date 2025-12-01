export const products = [
  {
    id: "tsl-square-drive",
    name: "TSL Square Drive",
    category: "Hydraulic Torque Wrenches",
    shortDescription: "Low-profile square drive wrench for confined spaces",
    image: "/images/tsl-3.png",

    // EXISTING FIELDS
    images: ["/images/tsl-new.png", "/images/tsl-3.png", "/images/tsl-app.jpg", "/images/tsl-2.png", "/images/tsl-case.png"],
    torqueRange: "200 - 12,000 Nm",
    weight: "3.5 - 28 kg",
    certificates: ["/images/cert/iso-9001.webp", "/images/cert/ecitb.webp", "/cert/madeinindia.png"],
    shutdownData: {
      "Operating Pressure": "700 bar",
      "Cycle Rating": "High Duty",
      "Temperature Range": "-20°C to 55°C",
      "Oil Flow Required": "0.8 – 2.5 L/min",
    },
    performanceDistribution: { torque: 65, weight: 35 },
    features: [
      "Compact design for restricted access",
      "360° rotating reaction arm",
      "High accuracy ±3%",
      "Durable steel construction",
    ],
    applications: [
      "Wind turbine maintenance",
      "Oil & gas flange connections",
      "Heavy machinery assembly",
      "Power plant installations",
    ],
    specifications: {
      "Torque Range": "200 - 12,000 Nm",
      Accuracy: "±3%",
      Weight: "3.5 - 28 kg",
      "Drive Size": '3/4" to 1-1/2"',
      "Operating Pressure": "700 bar",
      Material: "Chrome vanadium steel",
    },

    // ⭐ NEW FIELDS FOR 8-SECTION LAYOUT
    hero: {
      title: "Hydraulic Torque Wrenches for EPC & Oil/Gas Projects",
      subtitle:
        "Tritorc is your project partner and OEM manufacturer — we help EPC mechanical teams stay on the critical path by eliminating the #1 cause of commissioning delays: flange leaks and re-work.",
      backgroundImage: "/images/industries/manufacturing.jpg",
    },

    datasheetUrl: "/datasheets/tsl-square-drive.pdf",

    clientLogos: ["Shell", "ExxonMobil", "Chevron", "BP", "TotalEnergies"],

    caseStudy: {
      image: "/images/testi/salalah-liquefied-petroleum-gas-project.png",
      projectName: "NCOC Kazakhstan - Tengiz Field",
    },

    testimonial: {
      quote:
        "Tritorc's torque tools helped us complete mechanical commissioning with zero flange leaks. Their field engineer support saved us days on shutdown.",
      author: "Omkar Mungekar",
      company: "International EPC Contractor",
      authorImage: "/images/testi/omkar-mungekar.jpg",
    },

    videos: [
      {
        title: "TSL Torque Wrench in Action",
        thumbnail: "/images/video-thumb-1.jpg",
        url: "https://youtube.com/watch?v=example1",
      },
      {
        title: "Hydraulic Pump Operation",
        thumbnail: "/images/video-thumb-2.jpg",
        url: "https://youtube.com/watch?v=example2",
      },
      {
        title: "Socket & Accessory Overview",
        thumbnail: "/images/video-thumb-3.jpg",
        url: "https://youtube.com/watch?v=example3",
      },
      {
        title: "Reaction Arm Demo",
        thumbnail: "/images/video-thumb-4.jpg",
        url: "https://youtube.com/watch?v=example4",
      },
      {
        title: "Field Engineer QC Explanation",
        thumbnail: "/images/video-thumb-5.jpg",
        url: "https://youtube.com/watch?v=example5",
      },
      {
        title: "Cold Cutting Demo",
        thumbnail: "/images/video-thumb-6.jpg",
        url: "https://youtube.com/watch?v=example6",
      },
    ],
  },

  // ... repeat for other products
];


export const getProductBySlug = (slug) =>
  products.find((p) => p.id === slug);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category);
