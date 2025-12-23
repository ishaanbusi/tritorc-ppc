// lib/products.js

export const products = [
  // PRODUCT 1: TSL - Square Drive (Already complete - keeping as is)
  {
    id: "tsl-square-drive",
    name: "Square Drive Type – TSL Series",
    slug: "tsl-square-drive",
    category: "Hydraulic Torque Wrenches",
    series: "TSL",
    badge: "",
    
    shortDescription: "Performance validating reliable torque tools built for rugged environments and industry-critical heavy-duty bolting applications.",
    image: "/images/tsl-3.png",
    images: [
      "/images/tsl-new.png",
      "/images/tsl-2.png",
      "/images/tsl-3.png",
      "/images/tsl-app.jpg",
      "/images/tsl-case.png"
    ],
    
    minTorque: "112 Nm",
    maxTorque: "69427 Nm",
    boltSize: '3/4" – 2.1/2"',
    range: "(19 – 53mm)",
    torqueRange: "112 - 69,427 Nm",
    weight: "1.8 - 65 kg",
    
    features: [
      "360° Rotating Head",
      "Compact Design",
      "High Accuracy ±3%",
      "Durable Chrome Vanadium Steel",
      "Compatible with All Major Pumps"
    ],
    
    applications: [
      "Oil & Gas",
      "Petrochemical",
      "Power Generation",
      "Pipeline Construction",
      "Offshore Platforms"
    ],

    benefits: [
      {
        title: "Universal Socket Compatibility",
        description: "Compatible with a wide range of impact sockets, enabling efficient work across various bolt sizes and applications",
        color: "bg-[#D6312F]",
      },
      {
        title: "Aerospace-Grade Square Drive",
        description: "Built with aerospace-grade materials for extreme load resistance, ensuring reliability in high-torque, critical applications",
        color: "bg-blue-600",
      },
      {
        title: "Push-Through Drive",
        description: "Enables torqueing from one and de-torqueing from the other end, ensuring ease of operation.",
        color: "bg-green-600",
      },
      {
        title: "360° × 180° Hose Swivel",
        description: "Allows flexible tool positioning, making it easier to set up and work in tight spaces",
        color: "bg-purple-600",
      },
      {
        title: "Composite Leak Sealing System",
        description: "Prevents leaks, maintaining steady pressure for consistent performance, even in high-stress, high-pressure applications.",
        color: "bg-orange-600",
      },
      {
        title: "Finer Tooth Ratchet Pawl Mechanism",
        description: "Smooth operation without locking, allowing faster, controlled bolting and de-bolting in high-torque environments",
        color: "bg-indigo-600",
      },
    ],
    
    hero: {
      title: "Hydraulic Torque Wrenches for EPC & Oil/Gas Projects",
      subtitle: "Eliminate the #1 cause of commissioning delays: flange leaks and re-work. Tritorc keeps your critical path on schedule.",
      backgroundImage: "/images/industries/refinery-background.jpg",
    },
    
    specifications: {
      "Torque Range": "112 – 69,247 Nm",
      "Drive Size": '3/4" – 2.1/2"',
      "Weight": "1.8 kg – 65 kg",
      "Number of Models": "11 configurations",
      "Custom Solutions": "Available"
    },
    
    selectorData: {
      models: [
        "TSL-07", "TSL-1", "TSL-3", "TSL-5", "TSL-8", 
        "TSL-10", "TSL-15", "TSL-20", "TSL-25", "TSL-35", "TSL-50"
      ],
      technicalData: {
        "TSL-07": {
          squareDrive: '3/4"',
          minTorque: { metric: "112 Nm", imperial: "83 Ft. Lbs." },
          maxTorque: { metric: "1120 Nm", imperial: "826 Ft. Lbs." },
          weight: { metric: "1.8 Kg", imperial: "3.9 Lbs." },
          bodyLength: { metric: "117 mm", imperial: "4.61 inch" },
          overallLength: { metric: "139 mm", imperial: "5.47 inch" },
          toolWidth: { metric: "42 mm", imperial: "1.65 inch" },
          overallWidth: { metric: "67 mm", imperial: "2.64 inch" },
          toolHeight: { metric: "80 mm", imperial: "3.15 inch" },
          overallHeight: { metric: "117 mm", imperial: "4.61 inch" },
          toolRadius: { metric: "21.5 mm", imperial: "0.85 inch" },
          reactionReach: { metric: "67 mm", imperial: "2.64 inch" },
        },
        "TSL-1": {
          squareDrive: '3/4"',
          minTorque: { metric: "183 Nm", imperial: "135 Ft. Lbs." },
          maxTorque: { metric: "1837 Nm", imperial: "1355 Ft. Lbs." },
          weight: { metric: "2.5 Kg", imperial: "5.5 Lbs." },
          bodyLength: { metric: "143 mm", imperial: "5.63 inch" },
          overallLength: { metric: "171 mm", imperial: "6.73 inch" },
          toolWidth: { metric: "52 mm", imperial: "2.05 inch" },
          overallWidth: { metric: "75 mm", imperial: "2.95 inch" },
          toolHeight: { metric: "96 mm", imperial: "3.78 inch" },
          overallHeight: { metric: "133 mm", imperial: "5.24 inch" },
          toolRadius: { metric: "26.3 mm", imperial: "1.04 inch" },
          reactionReach: { metric: "84 mm", imperial: "3.31 inch" },
        },
        "TSL-3": {
          squareDrive: '1"',
          minTorque: { metric: "450 Nm", imperial: "332 Ft. Lbs." },
          maxTorque: { metric: "4500 Nm", imperial: "3319 Ft. Lbs." },
          weight: { metric: "4.9 Kg", imperial: "10.8 Lbs." },
          bodyLength: { metric: "178 mm", imperial: "7.01 inch" },
          overallLength: { metric: "228 mm", imperial: "8.98 inch" },
          toolWidth: { metric: "69.5 mm", imperial: "2.74 inch" },
          overallWidth: { metric: "97 mm", imperial: "3.82 inch" },
          toolHeight: { metric: "127 mm", imperial: "5.00 inch" },
          overallHeight: { metric: "177 mm", imperial: "6.97 inch" },
          toolRadius: { metric: "34.5 mm", imperial: "1.36 inch" },
          reactionReach: { metric: "111 mm", imperial: "4.37 inch" },
        },
        "TSL-5": {
          squareDrive: '1.1/2"',
          minTorque: { metric: "737 Nm", imperial: "544 Ft. Lbs." },
          maxTorque: { metric: "7379 Nm", imperial: "5442 Ft. Lbs." },
          weight: { metric: "9.5 Kg", imperial: "20.9 Lbs." },
          bodyLength: { metric: "213 mm", imperial: "8.39 inch" },
          overallLength: { metric: "275 mm", imperial: "10.83 inch" },
          toolWidth: { metric: "82.5 mm", imperial: "3.25 inch" },
          overallWidth: { metric: "122 mm", imperial: "4.80 inch" },
          toolHeight: { metric: "149 mm", imperial: "5.87 inch" },
          overallHeight: { metric: "199 mm", imperial: "7.83 inch" },
          toolRadius: { metric: "39 mm", imperial: "1.54 inch" },
          reactionReach: { metric: "140 mm", imperial: "5.51 inch" },
        },
        "TSL-8": {
          squareDrive: '1.1/2"',
          minTorque: { metric: "1078 Nm", imperial: "795 Ft. Lbs." },
          maxTorque: { metric: "10780 Nm", imperial: "7951 Ft. Lbs." },
          weight: { metric: "10.8 Kg", imperial: "23.8 Lbs." },
          bodyLength: { metric: "226 mm", imperial: "8.90 inch" },
          overallLength: { metric: "292 mm", imperial: "11.50 inch" },
          toolWidth: { metric: "84 mm", imperial: "3.31 inch" },
          overallWidth: { metric: "132 mm", imperial: "5.20 inch" },
          toolHeight: { metric: "168 mm", imperial: "6.61 inch" },
          overallHeight: { metric: "218 mm", imperial: "8.58 inch" },
          toolRadius: { metric: "47 mm", imperial: "1.85 inch" },
          reactionReach: { metric: "148 mm", imperial: "5.83 inch" },
        },
        "TSL-10": {
          squareDrive: '1.1/2"',
          minTorque: { metric: "1551 Nm", imperial: "1144 Ft. Lbs." },
          maxTorque: { metric: "15519 Nm", imperial: "11446 Ft. Lbs." },
          weight: { metric: "14.7 Kg", imperial: "32.4 Lbs." },
          bodyLength: { metric: "246 mm", imperial: "9.69 inch" },
          overallLength: { metric: "317 mm", imperial: "12.48 inch" },
          toolWidth: { metric: "102 mm", imperial: "4.02 inch" },
          overallWidth: { metric: "141 mm", imperial: "5.55 inch" },
          toolHeight: { metric: "182 mm", imperial: "7.17 inch" },
          overallHeight: { metric: "232 mm", imperial: "9.13 inch" },
          toolRadius: { metric: "51 mm", imperial: "2.01 inch" },
          reactionReach: { metric: "153 mm", imperial: "6.02 inch" },
        },
      }
    },

    datasheetUrl: "/catalog/tsl-square-drive.pdf",
    certificates: [
      "/images/cert/iso.webp",
      "/images/cert/ecitb.webp",
      "/images/cert/ce-seeklogo.png"
    ],
    
    clientLogos: ["ADNOC",
    "Saudi Aramco",
    "ExxonMobil",
    "BP",
    "Shell",
    "TotalEnergies",
    "Reliance Industries",
    "Indian Oil Corporation",
    "ONGC",
    "QatarEnergy",
    "SLB (Schlumberger)",
    "Halliburton",
    "Saipem",
    "McDermott",
    "Samsung Engineering",
    "Larsen & Toubro",
    "NPCC",
    "Sonatrach",
    "Kuwait Oil Company",
    "Petroleum Development Oman",],
    
    caseStudy: {
      image: "/images/case-studies/tengiz-field.jpg",
      projectName: "NCOC Kazakhstan - Tengiz Field",
      description: "Completed mechanical commissioning with zero flange leaks",
      results: "Saved 5 days on shutdown schedule"
    },
    
    testimonial: {
      quote: "Tritorc has been a key partner in our shutdown success at Qatar Gas. For five years, their dedicated team has delivered reliable bolt torquing and flange-facing support, helping us complete critical shutdowns on time. Their professionalism, planning, and qualified workforce continue to add real value to our operations.",
      author: "Mr. Aftab Ahmed Waseer",
      position: "Shutdown Manager for Qatar Gas",
      company: "DESCON",
      authorImage: "/images/testimonials/aftab-waseer.jpg",
    },
    
    videos: [
  {
    title: "Quality Control",
    description: "QC run",
    thumbnail: "/images/videos/qc.jpg",
    duration: "1:30",
    sources: [
      { src: "/videos/QC.webm", type: "video/webm" },
      { src: "/videos/QC.mp4", type: "video/mp4" }
    ]
  }
]

  },

  // PRODUCT 2: THL - Hex Drive Low Profile
  {
    id: "thl-hex-drive",
    name: "Hex Drive Type – THL Series",
    slug: "thl-hex-drive",
    category: "Hydraulic Torque Wrenches",
    series: "THL",
    badge: "",
    
    shortDescription: "Purpose-built for heavy-duty, low-clearance bolting tasks, delivering stable torque output even in harsh operating conditions.",
    image: "/images/products/torque-wrenches/THL/THL - Piyush M 004.webp",
images: [
  "/images/products/torque-wrenches/THL/THL - Piyush M 001.webp",
  "/images/products/torque-wrenches/THL/THL - Piyush M 002.webp",
  "/images/products/torque-wrenches/THL/THL - Piyush M 003.webp",
  "/images/products/torque-wrenches/THL/THL - Piyush M 004.webp",
  "/images/products/torque-wrenches/THL/THL - Piyush M 005.webp",
  "/images/products/torque-wrenches/THL/THL - Piyush M 006.webp",
],

    
    minTorque: "273 Nm",
    maxTorque: "53512 Nm",
    boltSize: '3/4" – 6.7/8"',
    range: "(19 – 175mm)",
    torqueRange: "273 - 53,512 Nm",
    weight: "1.5 - 15 kg",
    
    features: [
      "Interchangeable Hex Links",
      "360° × 180° Hose Swivel",
      "Quick-Connector Hose",
      "Ultra-Low Clearance Design",
      "Corrosion Resistant Finish"
    ],
    
    applications: [
      "Low-Clearance Flanges",
      "Pipeline Maintenance",
      "Petrochemical Plants",
      "Offshore Platforms",
      "Power Generation"
    ],

    benefits: [
      {
        title: "Interchangeable Hex Links",
        description: "Quick-change links enable fast switching between bolt sizes, enhancing versatility for varied bolting needs.",
        color: "bg-[#D6312F]",
      },
      {
        title: "360° × 180° Hose Swivel",
        description: "Allows full hose movement, simplifying tool positioning in tight, overhead, or vertical bolting spaces.",
        color: "bg-blue-600",
      },
      {
        title: "Quick-Connector Hose",
        description: "Simplifies hose attachment and removal, reducing operator effort and improving speed during bolting operations.",
        color: "bg-green-600",
      },
      {
        title: "Fine-Tooth Ratchet Pawl Mechanism",
        description: "Prevents jamming or locking under load, enabling consistent, controlled torque application.",
        color: "bg-purple-600",
      },
      {
        title: "Corrosion Resistant Finish",
        description: "Resistant coating prevents corrosion in harsh industrial environments, extending tool durability.",
        color: "bg-orange-600",
      },
      {
        title: "Ultra-Low Clearance Design",
        description: "Slim, compact body allows easy access in highly restricted spaces and tight bolting zones.",
        color: "bg-indigo-600",
      },
    ],
    
    hero: {
      title: "Hydraulic Torque Wrench - Hex Drive Type",
      subtitle: "Purpose-built for heavy-duty, low-clearance bolting tasks, delivering stable torque output even in harsh operating conditions.",
      backgroundImage: "/images/industries/pipeline.jpg",
    },
    
    specifications: {
      "Torque Range": "273 – 53,512 Nm",
      "Drive Size": '3/4" – 6.7/8"',
      "Weight": "1.5 kg – 15 kg",
      "Operating Pressure": "700 bar",
      "Number of Models": "5 configurations",
      "Custom Solutions": "Available"
    },

    datasheetUrl: "/catalog/thl-hex-drive.pdf",
    certificates: [
      "/images/cert/iso.webp",
      "/images/cert/ecitb.webp",
      "/images/cert/ce-seeklogo.png"
    ],
    
    clientLogos: ["Shell", "BP", "Chevron", "TotalEnergies", "DESCON"],
    
    testimonial: {
      quote: "Tritorc has been a key partner in our shutdown success at Qatar Gas. For five years, their dedicated team has delivered reliable bolt torquing and flange-facing support, helping us complete critical shutdowns on time. Their professionalism, planning, and qualified workforce continue to add real value to our operations.",
      author: "Mr. Aftab Ahmed Waseer",
      position: "Shutdown Manager for Qatar Gas",
      company: "DESCON",
      authorImage: "/images/testimonials/aftab-waseer.jpg",
    },
    
    videos: [
      {
        title: "THL Hex Drive Operation",
        description: "Complete operation guide",
        thumbnail: "/images/videos/thl-demo.jpg",
        duration: "3:15",
        url: "https://youtube.com/watch?v=thl1",
      },
    ],
  },

  // PRODUCT 3: THL Ultra Slim
  {
    id: "thl-ultra-slim",
    name: "Ultra-Slim Hex Drive – THL Series",
    slug: "thl-ultra-slim",
    category: "Hydraulic Torque Wrenches",
    series: "THL Ultra-Slim",
    badge: "",
    
    shortDescription: "Designed for extremely tight bolt circles and low-clearance industrial joints, it delivers controlled torque in areas where conventional tools can't.",
    image: "/images/products/torque-wrenches/Ultraslim - Piyush M 002.webp",
    images: [
      "/images/products/torque-wrenches/Ultraslim - Piyush M 001.webp",
    "/images/products/torque-wrenches/Ultraslim - Piyush M 002.webp",
    "/images/products/torque-wrenches/Ultraslim - Piyush M 003.webp",
    "/images/products/torque-wrenches/Ultraslim - Piyush M 004.webp",
    "/images/products/torque-wrenches/Ultraslim - Piyush M 005.webp"
    ],
    
    minTorque: "293 Nm",
    maxTorque: "12834 Nm",
    boltSize: '7/8" – 2.3/8"',
    range: "(19 – 90mm)",
    torqueRange: "293 - 12,834 Nm",
    weight: "2.7 - 11.6 kg",
    
    features: [
      "Ultra-Slim Interchangeable Hex Link",
      "Radial Clearance Optimized Body",
      "360° × 180° Hose Swivel",
      "Quick-Connector Hose",
      "Composite Seal System"
    ],
    
    applications: [
      "ANSI B16.3 Flanges",
      "API Flanges",
      "BOP/X-Mas Flanges",
      "Dense Bolt Patterns",
      "Subsea Equipment"
    ],

    benefits: [
      {
        title: "Ultra-Slim Interchangeable Hex Link",
        description: "Slim, space-optimized link accommodates multiple bolt sizes, ensuring precise torqueing in confined areas.",
        color: "bg-[#D6312F]",
      },
      {
        title: "Radial Clearance Optimized Body",
        description: "Low nose radius provides access around dense bolt patterns, ideal for ANSI B16.3, API, and BOP/X-Mas flanges.",
        color: "bg-blue-600",
      },
      {
        title: "360° × 180° Hose Swivel",
        description: "Full movement flexibility simplifies tool placement in vertical, horizontal, and confined spaces.",
        color: "bg-green-600",
      },
      {
        title: "Quick-Connector Hose",
        description: "Enables fast, tool-free coupling for efficient setup and reduced downtime.",
        color: "bg-purple-600",
      },
      {
        title: "Composite Seal System",
        description: "Maintains pressure integrity, preventing hydraulic leaks and ensuring consistent torque output.",
        color: "bg-orange-600",
      },
      {
        title: "Fine-Tooth Ratchet Pawl Mechanism",
        description: "Smooth, non-locking movement enables efficient, uninterrupted torque cycles.",
        color: "bg-indigo-600",
      },
    ],
    
    hero: {
      title: "Hydraulic Torque Wrench - Ultra-Slim Hex Drive",
      subtitle: "Designed for extremely tight bolt circles and low-clearance industrial joints, it delivers controlled torque in areas where conventional tools can't.",
      backgroundImage: "/images/industries/offshore.jpg",
    },
    
    specifications: {
      "Torque Range": "293 – 12,834 Nm",
      "Drive Size": '7/8" – 2.3/8"',
      "Weight": "2.7 kg – 11.6 kg",
      "Operating Pressure": "700 bar",
      "Number of Models": "3 configurations",
      "Custom Solutions": "Available"
    },

    datasheetUrl: "/catalog/thl-ultra-slim.pdf",
    certificates: [
      "/images/cert/iso.webp",
      "/images/cert/ecitb.webp",
      "/images/cert/ce-seeklogo.png"
    ],
    
    clientLogos: ["ADNOC",
    "Saudi Aramco",
    "ExxonMobil",
    "BP",
    "Shell",
    "TotalEnergies",
    "Reliance Industries",
    "Indian Oil Corporation",
    "ONGC",
    "QatarEnergy",
    "SLB (Schlumberger)",
    "Halliburton",
    "Saipem",
    "McDermott",
    "Samsung Engineering",
    "Larsen & Toubro",
    "NPCC",
    "Sonatrach",
    "Kuwait Oil Company",
    "Petroleum Development Oman",],
    
    testimonial: {
      quote: "Tritorc has been a key partner in our shutdown success at Qatar Gas. For five years, their dedicated team has delivered reliable bolt torquing and flange-facing support, helping us complete critical shutdowns on time. Their professionalism, planning, and qualified workforce continue to add real value to our operations.",
      author: "Mr. Aftab Ahmed Waseer",
      position: "Shutdown Manager for Qatar Gas",
      company: "DESCON",
      authorImage: "/images/testimonials/aftab-waseer.jpg",
    },
    
    videos: [
      {
        title: "THL Ultra-Slim Demo",
        description: "Tight space bolting demonstration",
        thumbnail: "/images/videos/thl-ultra-demo.jpg",
        duration: "2:50",
        url: "https://youtube.com/watch?v=thl-ultra",
      },
    ],
  },

  // PRODUCT 4: BTL - Top Loaded Bolt Tensioner
  {
    id: "btl-top-loaded",
    name: "Top Loaded – BTL Series",
    slug: "btl-top-loaded",
    category: "Hydraulic Bolt Tensioners",
    series: "BTL",
    badge: "",
    
    shortDescription: "Delivers uniform axial preload for critical joints, reducing rework and ensuring reliable, leak-free performance in high-pressure systems.",
    image: "/images/products/bolt-tensioners/BTL - Piyush M 001.webp",
    images: [
      "/images/products/bolt-tensioners/BTL - Piyush M 001.webp",
    "/images/products/bolt-tensioners/BTL - Piyush M 002.webp",
    "/images/products/bolt-tensioners/BTL - Piyush M 003.webp",
    "/images/products/bolt-tensioners/BTL - Piyush M 004.webp"
    ],
    
    minLoad: "50 kN",
    maxLoad: "5406 kN",
    boltSize: "M16 – M150",
    range: "(16 – 150mm)",
    loadRange: "50 - 5,406 kN",
    weight: "3 - 125 kg",
    
    features: [
      "Axial Tensioning",
      "Composite Sealing System",
      "Enclosed Load Cell",
      "Hard Chrome Plated Piston",
      "High Stroke Design"
    ],
    
    applications: [
      "Pressure Vessels",
      "Heat Exchangers",
      "Turbine Assembly",
      "Critical Flanges",
      "Reactor Vessels"
    ],

    benefits: [
      {
        title: "Axial Tensioning",
        description: "Provides direct axial load that eliminates torsional shear and prevents thread damage or flange distortion.",
        color: "bg-[#D6312F]",
      },
      {
        title: "Composite Sealing System",
        description: "Ensures zero pressure drop, preventing fluid leaks and maintaining consistent tensioning performance.",
        color: "bg-blue-600",
      },
      {
        title: "Enclosed Load Cell",
        description: "Prevents entry of contaminants, protecting internal components and ensuring reliable tensioner performance.",
        color: "bg-green-600",
      },
      {
        title: "Hard Chrome Plated Piston",
        description: "Resists wear and corrosion, ensuring smooth piston movement and consistent force transmission.",
        color: "bg-purple-600",
      },
      {
        title: "High Stroke Design",
        description: "Achieves greater elongation per cycle, reducing pump operations and improving tensioning efficiency.",
        color: "bg-orange-600",
      },
      {
        title: "Low Nickel Bronze Drive Bush",
        description: "Offers high strength and corrosion resistance, ensuring smooth load transfer and extended tool life.",
        color: "bg-indigo-600",
      },
    ],
    
    hero: {
      title: "Hydraulic Bolt Tensioner - Top Loaded",
      subtitle: "Delivers uniform axial preload for critical joints, reducing rework and ensuring reliable, leak-free performance in high-pressure systems.",
      backgroundImage: "/images/industries/power-generation.jpg",
    },
    
    specifications: {
      "Tensioning Load": "5,406 kN",
      "Bolt Sizes": "16 – 150 mm",
      "Weight": "3 – 125 kg",
      "Max. Working Pressure": "1500 bar",
      "Number of Models": "9 configurations",
      "Custom Solutions": "Available"
    },
    
    datasheetUrl: "/catalog/btl-top-loaded.pdf",
    certificates: [
      "/images/cert/iso.webp",
      "/images/cert/ecitb.webp",
      "/images/cert/ce-seeklogo.png"
    ],
    
    clientLogos: ["Shell", "BP", "ExxonMobil", "DESCON"],
    
    testimonial: {
      quote: "Tritorc has been a key partner in our shutdown success at Qatar Gas. For five years, their dedicated team has delivered reliable bolt torquing and flange-facing support, helping us complete critical shutdowns on time. Their professionalism, planning, and qualified workforce continue to add real value to our operations.",
      author: "Mr. Aftab Ahmed Waseer",
      position: "Shutdown Manager for Qatar Gas",
      company: "DESCON",
      authorImage: "/images/testimonials/aftab-waseer.jpg",
    },
    
    videos: [
  {
    title: "Quality Control",
    duration: "1:30",
    thumbnail: "/images/products/torque-wrenches/THL/THL - Piyush M 002.webp", // change if needed
    url: "/videos/QC.mp4"
  },
  {
    title: "Manufacturing Process",
    duration: "2:45",
    thumbnail: "/images/products/torque-wrenches/THL/THL - Piyush M 001.webp", // change if needed
    url: "/videos/Manufacturing.mp4"
  },
  {
    title: "Designing Overview",
    duration: "1:10",
    thumbnail: "/images/products/torque-wrenches/THL/THL - Piyush M 003.webp", // change if needed
    url: "/videos/Designing.mp4"
  }
]

  },

  // PRODUCT 5: SLT - Spring Return Tensioner
  {
    id: "slt-spring-return",
    name: "Spring Return – SLT Series",
    slug: "slt-spring-return",
    category: "Hydraulic Bolt Tensioners",
    series: "SLT",
    
    shortDescription: "Fast-return, lightweight tensioners engineered for rapid cycling, consistent preload, and high-efficiency bolting across repetitive industrial operations.",
    image: "/images/products/bolt-tensioners/slt/SLT Gen 001.webp",

images: [
  "/images/products/bolt-tensioners/slt/SLT Gen 001.webp",
  "/images/products/bolt-tensioners/slt/SLT Gen 002.webp",
  "/images/products/bolt-tensioners/slt/SLT Gen 003.webp",
  "/images/products/bolt-tensioners/slt/SLT Gen 004.webp",
  "/images/products/bolt-tensioners/slt/SLT - Gen 005.webp"
],

    
    minLoad: "160 kN",
    maxLoad: "3202 kN",
    boltSize: "M20 – M100",
    range: "(20 – 100mm)",
    loadRange: "160 - 3,202 kN",
    weight: "1.4 - 32 kg",
    
    features: [
      "Faster Reset",
      "Built-In Stroke Limit Valve",
      "Enclosed Load Cell",
      "Composite Seal System",
      "High-Strength Alloy Build"
    ],
    
    applications: [
      "Repetitive Tensioning",
      "Pipeline Flanges",
      "Valve Assemblies",
      "Equipment Maintenance",
      "Fast-Turnaround Projects"
    ],

    benefits: [
      {
        title: "Faster Reset",
        description: "Rapid piston return enables quick cycling between studs, significantly improving overall tensioning efficiency.",
        color: "bg-[#D6312F]",
      },
      {
        title: "Built-In Stroke Limit Valve",
        description: "Integrated valve prevents piston over-travel, ensuring controlled stroke movement and safer operation.",
        color: "bg-blue-600",
      },
      {
        title: "Enclosed Load Cell",
        description: "Sealed construction blocks contaminants, protecting internal components and ensuring long-term tensioner reliability.",
        color: "bg-green-600",
      },
      {
        title: "Composite Seal System",
        description: "High-integrity seals maintain stable pressure, prevent leakage, and ensure consistent repeatable tensioning performance.",
        color: "bg-purple-600",
      },
      {
        title: "Cylindrical Misalignment Compensation",
        description: "Design accommodates minor stud misalignment, ensuring proper engagement and safe, accurate load transfer.",
        color: "bg-orange-600",
      },
      {
        title: "High-Strength Alloy Build",
        description: "Constructed from advanced alloys for superior wear, corrosion, and fatigue resistance in harsh environments.",
        color: "bg-indigo-600",
      },
    ],
    
    hero: {
      title: "Hydraulic Bolt Tensioner - Spring Return",
      subtitle: "Fast-return, lightweight tensioners engineered for rapid cycling, consistent preload, and high-efficiency bolting across repetitive industrial operations.",
      backgroundImage: "/images/industries/manufacturing.jpg",
    },
    
    specifications: {
      "Tensioning Load": "160 – 3,202 kN",
      "Bolt Sizes": "20 – 100 mm",
      "Weight": "1.4 – 32 kg",
      "Max. Working Pressure": "1500 bar",
      "Number of Models": "8 configurations",
      "Custom Solutions": "Available"
    },
    
    datasheetUrl: "/catalog/slt-spring-return.pdf",
    certificates: [
      "/images/cert/iso.webp",
      "/images/cert/ecitb.webp",
      "/images/cert/ce-seeklogo.png"
    ],
    
    clientLogos: ["Chevron", "BP", "Shell", "DESCON"],
    
    testimonial: {
      quote: "Tritorc has been a key partner in our shutdown success at Qatar Gas. For five years, their dedicated team has delivered reliable bolt torquing and flange-facing support, helping us complete critical shutdowns on time. Their professionalism, planning, and qualified workforce continue to add real value to our operations.",
      author: "Mr. Aftab Ahmed Waseer",
      position: "Shutdown Manager for Qatar Gas",
      company: "DESCON",
      authorImage: "/images/testimonials/aftab-waseer.jpg",
    },
    
    videos: [
      {
        title: "SLT Spring Return Demo",
        description: "Fast cycling demonstration",
        thumbnail: "/images/videos/slt-demo.jpg",
        duration: "3:30",
        url: "https://youtube.com/watch?v=slt-demo",
      },
    ],
  },

  // PRODUCT 6: MST - Multi-Stage Tensioner
  {
    id: "mst-multi-stage",
    name: "Multi Stage – MST Series",
    slug: "mst-multi-stage",
    category: "Hydraulic Bolt Tensioners",
    series: "MST",
    
    shortDescription: "Engineered for large-diameter, high-load studs requiring extended stroke and precise preload in restricted-access industrial joints.",
  image: "/images/products/bolt-tensioners/MST/MST-Gen-003.webp",

images: [
  "/images/products/bolt-tensioners/MST/MST-Gen-001.webp",
  "/images/products/bolt-tensioners/MST/MST-Gen-002.webp",
  "/images/products/bolt-tensioners/MST/MST-Gen-003.webp",
  "/images/products/bolt-tensioners/MST/MST-Gen-004.webp",
  "/images/products/bolt-tensioners/MST/MST-Gen-005.webp",
  "/images/products/bolt-tensioners/MST/MST-Gen-006.webp",
],




    
    maxLoad: "1231 kN",
    boltSize: "M30 – M48",
    range: "(30 – 48mm)",
    loadRange: "Up to 1,231 kN",
    weight: "Varies by configuration",
    
    features: [
      "Multi-Stage Piston System",
      "Compact Smaller-Diameter Profile",
      "Over Stroke Alarming Mark",
      "Automatic Piston Return",
      "Sturdy Gearbox for Rundown"
    ],
    
    applications: [
      "Large-Diameter Studs",
      "High-Load Applications",
      "Restricted-Access Joints",
      "Extended Stroke Requirements",
      "Heavy Industrial Equipment"
    ],

    benefits: [
      {
        title: "Multi-Stage Piston System",
        description: "Delivers extended stroke with high load capacity, enabling accurate tensioning on large-diameter, high-preload studs.",
        color: "bg-[#D6312F]",
      },
      {
        title: "Compact Smaller-Diameter Profile",
        description: "Slim multi-cylinder body fits restricted spaces, ensuring safe and efficient tensioning in tight-access applications.",
        color: "bg-blue-600",
      },
      {
        title: "Over Stroke Alarming Mark",
        description: "Clearly indicates maximum piston travel, preventing over-extension and ensuring controlled, safe tensioning cycles.",
        color: "bg-green-600",
      },
      {
        title: "Automatic Piston Return",
        description: "Ensures quick and smooth piston retraction after pressure release, improving cycle speed and overall efficiency.",
        color: "bg-purple-600",
      },
      {
        title: "Sturdy Gearbox for Rundown of Sockets",
        description: "Robust gearbox provides smooth socket rundown, enabling faster nut engagement before hydraulic tensioning.",
        color: "bg-orange-600",
      },
      {
        title: "Composite Seal System",
        description: "High-performance seals prevent pressure loss and fluid leakage, ensuring consistent tensioning reliability.",
        color: "bg-indigo-600",
      },
    ],
    
    hero: {
      title: "Hydraulic Bolt Tensioner - Multi Stage",
      subtitle: "Engineered for large-diameter, high-load studs requiring extended stroke and precise preload in restricted-access industrial joints.",
      backgroundImage: "/images/industries/heavy-equipment.jpg",
    },
    
    specifications: {
      "Tensioning Load": "1,231 kN",
      "Bolt Sizes": "30 – 48 mm",
      "Max. Working Pressure": "1500 bar",
      "Number of Models": "7 configurations",
      "Custom Solutions": "Available"
    },
    
    datasheetUrl: "/catalog/mst-multi-stage.pdf",
    certificates: [
      "/images/cert/iso.webp",
      "/images/cert/ecitb.webp",
      "/images/cert/ce-seeklogo.png"
    ],
    
    clientLogos: ["ExxonMobil", "Shell", "BP", "DESCON"],
    
    testimonial: {
      quote: "Tritorc has been a key partner in our shutdown success at Qatar Gas. For five years, their dedicated team has delivered reliable bolt torquing and flange-facing support, helping us complete critical shutdowns on time. Their professionalism, planning, and qualified workforce continue to add real value to our operations.",
      author: "Mr. Aftab Ahmed Waseer",
      position: "Shutdown Manager for Qatar Gas",
      company: "DESCON",
      authorImage: "/images/testimonials/aftab-waseer.jpg",
    },
    
    videos: [
      {
        title: "MST Multi-Stage Operation",
        description: "Extended stroke demonstration",
        thumbnail: "/images/videos/mst-demo.jpg",
        duration: "4:45",
        url: "https://youtube.com/watch?v=mst-demo",
      },
    ],
  },
];

// Helper Functions
export const getProductBySlug = (slug) => 
  products.find((p) => p.slug === slug || p.id === slug);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category);

export const getAllProducts = () => products;

export const getRelatedProducts = (currentProductId, limit = 4) => {
  const currentProduct = products.find(p => p.id === currentProductId);
  if (!currentProduct) return [];
  
  return products
    .filter(p => p.id !== currentProductId && p.category === currentProduct.category)
    .slice(0, limit);
};

export const getFeaturedProducts = (limit = 3) => 
  products.filter(p => p.badge).slice(0, limit);

export const getProductCategories = () => 
  [...new Set(products.map(p => p.category))];