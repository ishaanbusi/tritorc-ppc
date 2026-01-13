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
      "/images/tsl-pump.jpg",
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
      },
      {
        title: "Aerospace-Grade Square Drive",
        description: "Built with aerospace-grade materials for extreme load resistance, ensuring reliability in high-torque, critical applications",
      },
      {
        title: "Push-Through Drive",
        description: "Enables torqueing from one and de-torqueing from the other end, ensuring ease of operation.",
      },
      {
        title: "360° × 180° Hose Swivel",
        description: "Allows flexible tool positioning, making it easier to set up and work in tight spaces",
      },
      {
        title: "Composite Leak Sealing System",
        description: "Prevents leaks, maintaining steady pressure for consistent performance, even in high-stress, high-pressure applications.",
      },
      {
        title: "Finer Tooth Ratchet Pawl Mechanism",
        description: "Smooth operation without locking, allowing faster, controlled bolting and de-bolting in high-torque environments",
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
    "TSL-07",
    "TSL-1",
    "TSL-3",
    "TSL-5",
    "TSL-8",
    "TSL-10",
    "TSL-15",
    "TSL-20",
    "TSL-25",
    "TSL-35",
    "TSL-50",
  ],

  generalTechnicalDrawing: "/assets/img/tsl-technical-drawing.webp",

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

    "TSL-15": {
      squareDrive: '2.1/2"',
      minTorque: { metric: "2176 Nm", imperial: "1605 Ft. Lbs." },
      maxTorque: { metric: "22505 Nm", imperial: "16599 Ft. Lbs." },
      weight: { metric: "23 Kg", imperial: "50.7 Lbs." },
      bodyLength: { metric: "272 mm", imperial: "10.71 inch" },
      overallLength: { metric: "352 mm", imperial: "13.86 inch" },
      toolWidth: { metric: "111 mm", imperial: "4.37 inch" },
      overallWidth: { metric: "185 mm", imperial: "7.28 inch" },
      toolHeight: { metric: "197 mm", imperial: "7.76 inch" },
      overallHeight: { metric: "247 mm", imperial: "9.72 inch" },
      toolRadius: { metric: "57.5 mm", imperial: "2.26 inch" },
      reactionReach: { metric: "170 mm", imperial: "6.69 inch" },
    },

    "TSL-20": {
      squareDrive: '2.1/2"',
      minTorque: { metric: "3045 Nm", imperial: "2246 Ft. Lbs." },
      maxTorque: { metric: "30461 Nm", imperial: "22467 Ft. Lbs." },
      weight: { metric: "26 Kg", imperial: "57.3 Lbs." },
      bodyLength: { metric: "309 mm", imperial: "12.17 inch" },
      overallLength: { metric: "387 mm", imperial: "15.24 inch" },
      toolWidth: { metric: "128 mm", imperial: "5.04 inch" },
      overallWidth: { metric: "203 mm", imperial: "7.99 inch" },
      toolHeight: { metric: "213 mm", imperial: "8.39 inch" },
      overallHeight: { metric: "262 mm", imperial: "10.31 inch" },
      toolRadius: { metric: "59 mm", imperial: "2.32 inch" },
      reactionReach: { metric: "187 mm", imperial: "7.36 inch" },
    },

    "TSL-25": {
      squareDrive: '2.1/2"',
      minTorque: { metric: "3472 Nm", imperial: "2561 Ft. Lbs." },
      maxTorque: { metric: "34725 Nm", imperial: "25612 Ft. Lbs." },
      weight: { metric: "35 Kg", imperial: "77.1 Lbs." },
      bodyLength: { metric: "325 mm", imperial: "12.80 inch" },
      overallLength: { metric: "402 mm", imperial: "15.83 inch" },
      toolWidth: { metric: "136.5 mm", imperial: "5.37 inch" },
      overallWidth: { metric: "207 mm", imperial: "8.15 inch" },
      toolHeight: { metric: "252 mm", imperial: "9.92 inch" },
      overallHeight: { metric: "301 mm", imperial: "11.85 inch" },
      toolRadius: { metric: "66 mm", imperial: "2.60 inch" },
      reactionReach: { metric: "202 mm", imperial: "7.95 inch" },
    },

    "TSL-35": {
      squareDrive: '2.1/2"',
      minTorque: { metric: "4886 Nm", imperial: "3604 Ft. Lbs." },
      maxTorque: { metric: "48666 Nm", imperial: "36042 Ft. Lbs." },
      weight: { metric: "50 Kg", imperial: "110.2 Lbs." },
      bodyLength: { metric: "372 mm", imperial: "14.65 inch" },
      overallLength: { metric: "466 mm", imperial: "18.35 inch" },
      toolWidth: { metric: "153 mm", imperial: "6.02 inch" },
      overallWidth: { metric: "226 mm", imperial: "8.90 inch" },
      toolHeight: { metric: "283 mm", imperial: "11.14 inch" },
      overallHeight: { metric: "333 mm", imperial: "13.11 inch" },
      toolRadius: { metric: "77.5 mm", imperial: "3.05 inch" },
      reactionReach: { metric: "241 mm", imperial: "9.49 inch" },
    },

    "TSL-50": {
      squareDrive: '2.1/2"',
      minTorque: { metric: "6925 Nm", imperial: "5108 Ft. Lbs." },
      maxTorque: { metric: "69247 Nm", imperial: "51074 Ft. Lbs." },
      weight: { metric: "65 Kg", imperial: "143.3 Lbs." },
      bodyLength: { metric: "387 mm", imperial: "15.24 inch" },
      overallLength: { metric: "518 mm", imperial: "20.39 inch" },
      toolWidth: { metric: "167.5 mm", imperial: "6.59 inch" },
      overallWidth: { metric: "239 mm", imperial: "9.41 inch" },
      toolHeight: { metric: "301 mm", imperial: "11.85 inch" },
      overallHeight: { metric: "351 mm", imperial: "13.82 inch" },
      toolRadius: { metric: "80.5 mm", imperial: "3.17 inch" },
      reactionReach: { metric: "258 mm", imperial: "10.16 inch" },
    },
  },
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
      image: "/images/testi-1.jpg",
      projectName: "NCOC Kazakhstan - Tengiz Field",
      description: "Completed mechanical commissioning with zero flange leaks",
      results: "Saved 5 days on shutdown schedule"
    },
    
    testimonial: {
      quote: "Tritorc has been a key partner in our shutdown success at Qatar Gas. For five years, their dedicated team has delivered reliable bolt torquing and flange-facing support, helping us complete critical shutdowns on time. Their professionalism, planning, and qualified workforce continue to add real value to our operations.",
      author: "Mr. Aftab Ahmed Waseer",
      position: "Shutdown Manager for Qatar Gas",
      company: "DESCON",
      authorImage: "/images/testi-1.jpg",
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
      },
      {
        title: "360° × 180° Hose Swivel",
        description: "Allows full hose movement, simplifying tool positioning in tight, overhead, or vertical bolting spaces.",
      },
      {
        title: "Quick-Connector Hose",
        description: "Simplifies hose attachment and removal, reducing operator effort and improving speed during bolting operations.",
      },
      {
        title: "Fine-Tooth Ratchet Pawl Mechanism",
        description: "Prevents jamming or locking under load, enabling consistent, controlled torque application.",
      },
      {
        title: "Corrosion Resistant Finish",
        description: "Resistant coating prevents corrosion in harsh industrial environments, extending tool durability.",
      },
      {
        title: "Ultra-Low Clearance Design",
        description: "Slim, compact body allows easy access in highly restricted spaces and tight bolting zones.",
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

    selectorData: {
    models: ["THL-2", "THL-4", "THL-8", "THL-14", "THL-32"],

    technicalData: {
      "THL-2": {
        minTorque: { metric: "273 Nm", imperial: "201 Ft. Lbs." },
        maxTorque: { metric: "2728 Nm", imperial: "2012 Ft. Lbs." },
        driveWeight: { metric: "1.5 Kg", imperial: "3.3 Lbs." },
        ratchetWeight: { metric: "1.7 Kg", imperial: "3.7 Lbs." },
        acrossFlat: {
          metric: "19–48 mm",
          imperial: "3/4 – 1.7/8 inch",
        },

        overallLength: { metric: "164 mm", imperial: "6.46 in" },
        h1: { metric: "132 mm", imperial: "5.20 in" },
        h2: { metric: "99 mm", imperial: "3.90 in" },
        w1: { metric: "32.2 mm", imperial: "1.27 in" },
        w2: { metric: "34.4 mm", imperial: "1.35 in" },
        noseRadius: {
          metric: "22–43 mm",
          imperial: "0.87–1.69 in",
        },
        rMin: { metric: "9.5 mm", imperial: "0.37 in" },
        rMax: { metric: "14.5 mm", imperial: "0.57 in" },
      },

      "THL-4": {
        minTorque: { metric: "607 Nm", imperial: "448 Ft. Lbs." },
        maxTorque: { metric: "6069 Nm", imperial: "4476 Ft. Lbs." },
        driveWeight: { metric: "3.2 Kg", imperial: "7.1 Lbs." },
        ratchetWeight: { metric: "4.1 Kg", imperial: "9.0 Lbs." },
        acrossFlat: {
          metric: "34–56 mm",
          imperial: "1.5/16 – 2.3/16 inch",
        },

        overallLength: { metric: "202 mm", imperial: "7.95 in" },
        h1: { metric: "168 mm", imperial: "6.61 in" },
        h2: { metric: "129 mm", imperial: "5.08 in" },
        w1: { metric: "40.6 mm", imperial: "1.60 in" },
        w2: { metric: "49.5 mm", imperial: "1.95 in" },
        noseRadius: {
          metric: "33–46 mm",
          imperial: "1.30–1.81 in",
        },
        rMin: { metric: "10 mm", imperial: "0.39 in" },
        rMax: { metric: "15 mm", imperial: "0.59 in" },
      },

      "THL-8": {
        minTorque: { metric: "1228 Nm", imperial: "906 Ft. Lbs." },
        maxTorque: { metric: "12281 Nm", imperial: "9058 Ft. Lbs." },
        driveWeight: { metric: "5.3 Kg", imperial: "11.7 Lbs." },
        ratchetWeight: { metric: "8.7 Kg", imperial: "19.2 Lbs." },
        acrossFlat: {
          metric: "41–80 mm",
          imperial: "1.5/8 – 3.1/8 inch",
        },

        overallLength: { metric: "267 mm", imperial: "10.51 in" },
        h1: { metric: "198 mm", imperial: "7.80 in" },
        h2: { metric: "159 mm", imperial: "6.26 in" },
        w1: { metric: "52.5 mm", imperial: "2.07 in" },
        w2: { metric: "61.5 mm", imperial: "2.42 in" },
        noseRadius: {
          metric: "42–63 mm",
          imperial: "1.65–2.48 in",
        },
        rMin: { metric: "12 mm", imperial: "0.47 in" },
        rMax: { metric: "20 mm", imperial: "0.79 in" },
      },

      "THL-14": {
        minTorque: { metric: "2162 Nm", imperial: "1595 Ft. Lbs." },
        maxTorque: { metric: "21620 Nm", imperial: "15946 Ft. Lbs." },
        driveWeight: { metric: "9.8 Kg", imperial: "21.6 Lbs." },
        ratchetWeight: { metric: "11.5 Kg", imperial: "25.4 Lbs." },
        acrossFlat: {
          metric: "50–100 mm",
          imperial: "2 – 3.7/8 inch",
        },

        overallLength: { metric: "325 mm", imperial: "12.80 in" },
        h1: { metric: "237 mm", imperial: "9.33 in" },
        h2: { metric: "193 mm", imperial: "7.60 in" },
        w1: { metric: "63 mm", imperial: "2.48 in" },
        w2: { metric: "81 mm", imperial: "3.19 in" },
        noseRadius: {
          metric: "53–80 mm",
          imperial: "2.09–3.15 in",
        },
        rMin: { metric: "17 mm", imperial: "0.67 in" },
        rMax: { metric: "27 mm", imperial: "1.06 in" },
      },

      "THL-32": {
        minTorque: { metric: "5026 Nm", imperial: "3707 Ft. Lbs." },
        maxTorque: { metric: "50258 Nm", imperial: "37068 Ft. Lbs." },
        driveWeight: { metric: "15 Kg", imperial: "33.1 Lbs." },
        ratchetWeight: { metric: "32 Kg", imperial: "70.6 Lbs." },
        acrossFlat: {
          metric: "90–145 mm",
          imperial: "3.7/8 – 5.11/16 inch",
        },

        overallLength: { metric: "408 mm", imperial: "16.06 in" },
        h1: { metric: "299 mm", imperial: "11.77 in" },
        h2: { metric: "259 mm", imperial: "10.20 in" },
        w1: { metric: "83 mm", imperial: "3.27 in" },
        w2: { metric: "93 mm", imperial: "3.66 in" },
        noseRadius: {
          metric: "90–114 mm",
          imperial: "3.54–4.49 in",
        },
        rMin: { metric: "25 mm", imperial: "0.98 in" },
        rMax: { metric: "31 mm", imperial: "1.22 in" },
      },
    },
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
        
      },
      {
        title: "Radial Clearance Optimized Body",
        description: "Low nose radius provides access around dense bolt patterns, ideal for ANSI B16.3, API, and BOP/X-Mas flanges.",
        
      },
      {
        title: "360° × 180° Hose Swivel",
        description: "Full movement flexibility simplifies tool placement in vertical, horizontal, and confined spaces.",
        
      },
      {
        title: "Quick-Connector Hose",
        description: "Enables fast, tool-free coupling for efficient setup and reduced downtime.",
    
      },
      {
        title: "Composite Seal System",
        description: "Maintains pressure integrity, preventing hydraulic leaks and ensuring consistent torque output.",
    
      },
      {
        title: "Fine-Tooth Ratchet Pawl Mechanism",
        description: "Smooth, non-locking movement enables efficient, uninterrupted torque cycles.",
       
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

    selectorData: {
    models: ["THL-2", "THL-4", "THL-8"],

    generalTechnicalDrawing: "/assets/img/thl-technical-drawing.webp",

    /* -------------------------------------------------
       TECHNICAL DATA (SINGLE SOURCE OF TRUTH)
    -------------------------------------------------- */
    technicalData: {
      "THL-2": {
        hexSize: '36.51 mm (1-7/16")',
        minTorque: { metric: "293 Nm", imperial: "214 Ft.Lbs" },
        maxTorque: { metric: "3051 Nm", imperial: "2217 Ft.Lbs" },
        weight: { metric: "2.1 Kg", imperial: "4.6 Lbs" },

        length: { metric: "135 mm", imperial: "5.31 inch" },
        height: { metric: "101 mm", imperial: "3.97 inch" },
        width: { metric: "25.5 mm", imperial: "1.00 inch" },
        widthLength: { metric: "34.4 mm", imperial: "1.35 inch" },
        radius: { metric: "8.9 mm", imperial: "0.35 inch" },
      },

      "THL-4": {
        hexSize: '65.1 mm (2-9/16")',
        minTorque: { metric: "608 Nm", imperial: "443 Ft.Lbs" },
        maxTorque: { metric: "6733 Nm", imperial: "4891 Ft.Lbs" },
        weight: { metric: "4.9 Kg", imperial: "10.8 Lbs" },

        length: { metric: "174 mm", imperial: "6.85 inch" },
        height: { metric: "142 mm", imperial: "5.59 inch" },
        width: { metric: "28.7 mm", imperial: "1.13 inch" },
        widthLength: { metric: "49.5 mm", imperial: "1.95 inch" },
        radius: { metric: "11.5 mm", imperial: "0.45 inch" },
      },

      "THL-8": {
        hexSize: '53.98 mm (2-1/8")',
        minTorque: { metric: "1192 Nm", imperial: "867 Ft.Lbs" },
        maxTorque: { metric: "12834 Nm", imperial: "9323 Ft.Lbs" },
        weight: { metric: "8.2 Kg", imperial: "18.1 Lbs" },

        length: { metric: "216 mm", imperial: "8.5 inch" },
        height: { metric: "154 mm", imperial: "6.06 inch" },
        width: { metric: "38 mm", imperial: "1.49 inch" },
        widthLength: { metric: "61.5 mm", imperial: "2.42 inch" },
        radius: { metric: "13.35 mm", imperial: "0.53 inch" },
      },
    },

    /* -------------------------------------------------
       SPEC CONFIG (DRIVES THE UI)
    -------------------------------------------------- */
    specConfig: {
      basic: [
        {
          key: "hexSize",
          label: "Hex Size",
          unit: "",
        },
        {
          key: "maxTorque",
          label: "Max Torque",
          unitMetric: "Nm",
          unitImperial: "Ft.Lbs",
          highlight: true,
          color: "text-[#D6312F]",
        },
        {
          key: "weight",
          label: "Weight",
          unitMetric: "Kg",
          unitImperial: "Lbs",
        },
      ],

      detailed: [
        {
          key: "minTorque",
          label: "Min Torque",
          unitMetric: "Nm",
          unitImperial: "Ft.Lbs",
        },
        {
          key: "length",
          label: "Overall Length (L)",
          unitMetric: "mm",
          unitImperial: "inch",
        },
        {
          key: "height",
          label: "Overall Height (H)",
          unitMetric: "mm",
          unitImperial: "inch",
        },
        {
          key: "width",
          label: "Tool Width (W1)",
          unitMetric: "mm",
          unitImperial: "inch",
        },
        {
          key: "widthLength",
          label: "Overall Width (W2)",
          unitMetric: "mm",
          unitImperial: "inch",
        },
        {
          key: "radius",
          label: "Radius (R)",
          unitMetric: "mm",
          unitImperial: "inch",
        },
      ],
    },
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
        
      },
      {
        title: "Composite Sealing System",
        description: "Ensures zero pressure drop, preventing fluid leaks and maintaining consistent tensioning performance.",
      },
      {
        title: "Enclosed Load Cell",
        description: "Prevents entry of contaminants, protecting internal components and ensuring reliable tensioner performance.",
      },
      {
        title: "Hard Chrome Plated Piston",
        description: "Resists wear and corrosion, ensuring smooth piston movement and consistent force transmission.",
      },
      {
        title: "High Stroke Design",
        description: "Achieves greater elongation per cycle, reducing pump operations and improving tensioning efficiency.",
      },
      {
        title: "Low Nickel Bronze Drive Bush",
        description: "Offers high strength and corrosion resistance, ensuring smooth load transfer and extended tool life.",
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
      },
      {
        title: "Compact Smaller-Diameter Profile",
        description: "Slim multi-cylinder body fits restricted spaces, ensuring safe and efficient tensioning in tight-access applications.",
      },
      {
        title: "Over Stroke Alarming Mark",
        description: "Clearly indicates maximum piston travel, preventing over-extension and ensuring controlled, safe tensioning cycles.",
      },
      {
        title: "Automatic Piston Return",
        description: "Ensures quick and smooth piston retraction after pressure release, improving cycle speed and overall efficiency.",
      },
      {
        title: "Sturdy Gearbox for Rundown of Sockets",
        description: "Robust gearbox provides smooth socket rundown, enabling faster nut engagement before hydraulic tensioning.",
      },
      {
        title: "Composite Seal System",
        description: "High-performance seals prevent pressure loss and fluid leakage, ensuring consistent tensioning reliability.",
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