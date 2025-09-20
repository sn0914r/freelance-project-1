const CARSDATA = [
  {
    name: "Toyota Fortuner",
    price: 7000,
    discountedPrice: 6000,
    vehicleid: "010",
    keys: ["7 seater", "SUV", "white"],
    path: "assets/fortuner1.jpg",
    images: ["fortuner1.jpg", "fortuner2.jpg"],
    features: function () {
      return `Rent the rugged Toyota Fortuner SUV for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, advanced safety features, spacious interiors).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Toyota Innova",
    price: 4500,
    discountedPrice: 3500,
    vehicleid: "011",
    keys: ["7 seater", "SUV", "gray"],
    path: "assets/innovaCrysta2Gray.jpg",
    images: ["innovaCrysta2Gray.jpg", "innovaCrysta1Gray.jpg"],
    features: function () {
      return `Rent the spacious Toyota Innova Crysta for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, luxurious interiors, ideal for family/group trips).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Maruti Suzuki Baleno Old",
    price: 2500,
    discountedPrice: 2300,
    vehicleid: "012",
    keys: ["5 seater", "hatchback", "red"],
    path: "assets/balenoRed2.jpg",
    images: ["balenoRed2.jpg", "balenoRed1.jpg"],
    features: function () {
      return `Rent the stylish Maruti Suzuki Baleno for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, comfortable ride, advanced features).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Maruti Suzuki Brezza",
    price: 2600,
    discountedPrice: 2500,
    vehicleid: "013",
    keys: ["5 seater", "SUV", "white"],
    path: "assets/brezza2.jpg",
    images: ["brezza2.jpg", "brezza1.jpg"],
    features: function () {
      return `Rent the fuel-efficient Maruti Suzuki Brezza for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, perfect for city drives and weekend trips).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Tata Curvv",
    price: 2600,
    discountedPrice: 2500,
    vehicleid: "014",
    keys: ["5 seater", "SUV", "white"],
    path: "assets/curvv1.jpg",
    images: ["curvv2.jpg", "curvv1.jpg"],
    features: function () {
      return `Rent the stylish Tata Curvv for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, compact SUV, city and weekend trips).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Mahindra Thar",
    price: 5000,
    discountedPrice: 4500,
    vehicleid: "015",
    keys: ["5 seater", "SUV", "black"],
    path: "assets/thar1.jpg",
    images: ["thar2.jpg", "thar1.jpg"],
    features: function () {
      return `Rent the rugged Mahindra Thar for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, off-road SUV, powerful engine).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Maruti Suzuki Swift Red ",
    price: 2500,
    discountedPrice: 2400,
    vehicleid: "016",
    keys: ["4 seater", "Hatchback", "red"],
    path: "assets/swiftDesireRed1.jpg",
    images: ["swiftDesireRed2.jpg", "swiftDesireRed1.jpg"],
    features: function () {
      return `Rent the comfortable Swift Dzire for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, ideal for city and family trips).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Hyundai i20",
    price: 2700,
    discountedPrice: 2500,
    vehicleid: "017",
    keys: ["5 seater", "Hatchback", "gray"],
    path: "assets/i202.jpg",
    images: ["i202.jpg", "i201.jpg"],
    features: function () {
      return `Rent the stylish Hyundai i20 for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, feature-packed, comfortable ride).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Maruti Suzuki Swift Dzire",
    price: 2500,
    discountedPrice: 2400,
    vehicleid: "018",
    keys: ["4 seater", "Hatchback", "white"],
    path: "assets/swiftDesireGray1.jpg",
    images: ["swiftDesireGray1.jpg", "swiftDesireGray2.jpg"],
    features: function () {
      return `Rent the comfortable Swift Dzire for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, ideal for city and family trips).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Toyota Innova Crysta",
    price: 4500,
    discountedPrice: 4000,
    vehicleid: "019",
    keys: ["7 seater", "SUV", "black"],
    path: "assets/innovaCrystaBlack1.jpg",
    images: ["innovaCrystaBlack1.jpg", "innovaCrystaBlack2.jpg"],
    features: function () {
      return `Rent the spacious Toyota Innova Crysta for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, luxurious interiors, ideal for family/group trips).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Maruti Suzuki XL6",
    price: 4000,
    discountedPrice: 3500,
    vehicleid: "020",
    keys: ["6 seater", "MUV", "gray"],
    path: "assets/nexa2.jpg",
    images: ["nexa2.jpg", "nexa1.jpg"],
    features: function () {
      return `Rent the premium Maruti Suzuki XL6 for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, designed for families seeking comfort and style).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Hyundai Creta",
    price: 4000,
    discountedPrice: 3000,
    vehicleid: "021",
    keys: ["5 seater", "SUV", "gray"],
    path: "assets/creta1.jpg",
    images: ["creta1.jpg", "creta2.jpg"],
    features: function () {
      return `Rent the stylish Hyundai Creta for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, feature-packed SUV, comfortable ride).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Maruti Suzuki Swift Dzire Automatic",
    price: 2500,
    discountedPrice: 2400,
    vehicleid: "001",
    keys: ["4 seater", "Hatchback", "gray color"],
    path: "assets/swiftDesire1.jpg",
    images: ["swiftDesire1.jpg"],
    features: function () {
      return `Rent the comfortable Swift Dzire for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, ideal for city and family trips).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Kia Sonet",
    price: 3000,
    discountedPrice: 2650,
    vehicleid: "002",
    keys: ["5 seater", "SUV", "white"],
    path: "assets/kiaSonet1.jpg",
    images: ["kiaSonet1.jpg"],
    features: function () {
      return `Rent the stylish Kia Sonet for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, feature-packed compact SUV, perfect for urban adventures).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Maruti Suzuki Swift VXI Manual",
    price: 2500,
    discountedPrice: 2400,
    vehicleid: "003",
    keys: ["5 seater", "hatchback", "red", "petrol", "manual"],
    path: "assets/swiftVxi1.jpg",
    images: ["swiftVxi1.jpg"],
    features: function () {
      return `Rent the stylish Maruti Suzuki Swift VXI Manual for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, 1.2L petrol engine, manual gearbox).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Tata Altroz",
    price: 3000,
    discountedPrice: 2459,
    vehicleid: "004",
    keys: ["4 seater", "hatchback", "black"],
    path: "assets/altroz1.jpg",
    images: ["altroz1.jpg"],
    features: function () {
      return `Rent the premium Tata Altroz for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, spacious interior, advanced features).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Maruti Suzuki Baleno",
    price: 3000,
    discountedPrice: 2500,
    vehicleid: "005",
    keys: ["5 seater", "hatchback", "black"],
    path: "assets/baleno1.jpg",
    images: ["baleno1.jpg"],
    features: function () {
      return `Rent the premium Maruti Suzuki Baleno for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, spacious interior, advanced features).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Maruti Suzuki Swift DZire",
    price: 2500,
    discountedPrice: 2400,
    vehicleid: "006",
    keys: ["4 seater", "hatchback", "white"],
    path: "assets/swiftDzireWhite1.jpg",
    images: ["swiftDzireWhite1.jpg"],
    features: function () {
      return `Rent the comfortable Swift Dzire for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, ideal for city and family trips).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Toyota Etios Liva",
    price: 2300,
    discountedPrice: 2200,
    vehicleid: "007",
    keys: ["5 seater", "hatchback", "light skyblue"],
    path: "assets/etiosLiva1.jpg",
    images: ["etiosLiva1.jpg"],
    features: function () {
      return `Rent the compact Toyota Etios Liva for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, spacious interior, comfortable seating).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Toyota Innova Crysta",
    price: 5000,
    discountedPrice: 4500,
    vehicleid: "008",
    keys: ["7 seater", "MUV", "Garnet Brown", "Diesel"],
    path: "assets/innovaCrysta1.jpg",
    images: ["innovaCrysta1.jpg"],
    features: function () {
      return `Rent the spacious Toyota Innova Crysta for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, luxurious interiors, ideal for long family or group trips).`;
    },
    kilometerLimit: 300,
  },
  {
    name: "Hyundai Verna Automatic",
    price: 2300,
    discountedPrice: 2000,
    vehicleid: "009",
    keys: ["5 seater", "sedan", "white", "Automatic"],
    path: "assets/verna1.jpg",
    images: ["verna1.jpg"],
    features: function () {
      return `Rent the stylish Hyundai Verna Automatic for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, comfortable ride, advanced features).`;
    },
    kilometerLimit: 300,
  },
];

const BIKESDATA = [
  {
    name: "Royal Enfield Classic Signals",
    price: 1600,
    discountedPrice: 1500,
    vehicleid: "b001",
    keys: ["2 Seater", "Olive green"],
    path: "assets/royalEnfieldClassicSignals2.jpg",
    images: [
      "royalEnfieldClassicSignals2.jpg",
      "royalEnfieldClassicSignals1.jpg",
    ],
    features: function () {
      return `Rent the iconic Royal Enfield Classic Signals motorcycle for ₹${this.discountedPrice}/day (${this.kilometerLimit}km limit, ₹4/km extra).`;
    },
    kilometerLimit: 200,
    pricePerHr: 150,
  },

  {
    name: "Access 125",
    price: 700,
    discountedPrice: 600,
    vehicleid: "b002",
    keys: ["2 Seater", "light sky blue"],
    path: "assets/access1251.jpg",
    images: ["access1251.jpg", "access1252.jpg"],
    features: function () {
      return `Rent the stylish Suzuki Access 125 scooter for ₹${this.discountedPrice}/day (${this.kilometerLimit}km limit, ₹4/km extra).`;
    },
    kilometerLimit: 150,
    pricePerHr: 60,
  },

  {
    name: "FZ V3",
    price: 950,
    discountedPrice: 850,
    vehicleid: "b003",
    keys: ["black"],
    path: "assets/fz51.jpg",
    images: ["fz51.jpg", "fz52.jpg"],
    features: function () {
      return `Rent the Yamaha FZ V3 for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, no fuel included; ₹5/km extra, ₹85/hour extra).`;
    },
    kilometerLimit: 200,
    pricePerHr: 85,
  },
  {
    name: "Fascino",
    price: 950,
    discountedPrice: 850,
    vehicleid: "b004",
    keys: ["red"],
    path: "assets/fascino1.jpg",
    images: ["fascino1.jpg", "fascino2.jpg"],
    features: function () {
      return `Rent the Yamaha FZ V3 for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, no fuel included; ₹5/km extra, ₹85/hour extra).`;
    },
    kilometerLimit: 150,
    pricePerHr: 85,
  },
  {
    name: "BMW GS310",
    price: 3500,
    discountedPrice: 2999,
    vehicleid: "b005",
    keys: ["black"],
    path: "assets/gs3101.jpg",
    images: ["gs3101.jpg", "gs3102.jpg"],
    features: function () {
      return `Rent the BMW G310 for ₹${this.discountedPrice}/day (200 km limit, no fuel; ₹15/km extra, ₹${this.pricePerHr}/hour extra).`;
    },
    kilometerLimit: 200,
    pricePerHr: 300,
  },
  {
    name: "Honda Activa 6G",
    price: 600,
    discountedPrice: 500,
    vehicleid: "b006",
    keys: ["black", "blue"],
    path: "assets/activa6g1.jpg",
    images: ["activa6g1.jpg", "activa6g2.jpg"],
    features: function () {
      return `Rent the Honda Activa 6G for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, no fuel; ₹3/km extra, ₹${this.pricePerHr}/hour; min 5 hrs ₹300; delivery 1–5 km ₹100).`;
    },
    kilometerLimit: 150,
    pricePerHr: 60,
  },
  {
    name: "Pulsar 150cc",
    price: 600,
    discountedPrice: 500,
    vehicleid: "b007",
    keys: ["black", "blue"],
    path: "assets/pulsar150cc1.jpg",
    images: ["pulsar150cc1.jpg", "pulsar150cc2.jpg"],
    features: function () {
      return `Rent the Pulsar 150cc for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, no fuel; ₹5/km extra).`;
    },
    kilometerLimit: 200,
    pricePerHr: 85,
  },
  {
    name: "Hero Pleasure+ XTEC",
    price: 600,
    discountedPrice: 500,
    vehicleid: "b008",
    keys: ["black", "blue"],
    path: "assets/pleasure2.jpg",
    images: ["pleasure2.jpg", "pleasure1.jpg"],
    features: function () {
      return `Rent the Hero Pleasure+ XTEC for ₹${this.discountedPrice}/day (${this.kilometerLimit}km limit, no fuel; ₹4/km extra, ₹${this.pricePerHr}/hour extra).`;
    },
    kilometerLimit: 150,
    pricePerHr: 60,
  },
  {
    name: "TVS Jupiter 125",
    price: 700,
    discountedPrice: 600,
    vehicleid: "b009",
    keys: ["black", "blue"],
    path: "assets/jupiter1251.jpg",
    images: ["jupiter1252.jpg", "jupiter1251.jpg"],
    features: function () {
      return `Rent the TVS Jupiter 125 for ₹${this.discountedPrice}/day (${this.kilometerLimit}km limit, no fuel; ₹4/km extra, ₹${this.pricePerHr}/hour extra).`;
    },
    kilometerLimit: 150,
    pricePerHr: 60,
  },
  {
    name: "Yamaha MT15",
    price: 700,
    discountedPrice: 600,
    vehicleid: "b010",
    keys: ["black"],
    path: "assets/yamaha1.jpg",
    images: ["yamaha2.jpg", "yamaha1.jpg"],
    features: function () {
      return `Rent the Yamaha MT15 for ₹${this.discountedPrice}/day (${this.kilometerLimit}km limit, no fuel; ₹4/km extra, ₹${this.pricePerHr}/hour extra).`;
    },
    kilometerLimit: 150,
    pricePerHr: 60,
  },
  {
    name: "HARLEY DAVIDSON 750 Liquid Cooled",
    price: 4000,
    discountedPrice: 3500,
    vehicleid: "b011",
    keys: ["red"],
    path: "assets/davidson2.jpg",
    images: ["davidson1.jpg", "davidson2.jpg"],
    features: function () {
      return `Rent the Harley Davidson 750 Liquid Cooled for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, no fuel; ₹30/km extra; mileage 8 km/l).`;
    },
    kilometerLimit: 200,
    pricePerHr: 500,
  },
  {
    name: "Yamaha R15",
    price: 1800,
    discountedPrice: 1600,
    vehicleid: "b012",
    keys: [],
    path: "assets/yamahar151.jpg",
    images: ["yamahar151.jpg", "yamahar152.jpg"],
    features: function () {
      return `Rent the Yamaha R15 M4 for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, no fuel; ₹5/km extra, ₹${this.pricePerHr}/hour extra).`;
    },
    kilometerLimit: 200,
    pricePerHr: 160,
  },
  {
    name: "Hero Honda Splendor",
    price: 600,
    discountedPrice: 500,
    vehicleid: "b013",
    keys: [],
    path: "assets/splender1.jpg",
    images: ["splender1.jpg", "splender2.jpg"],
    features: function () {
      return `Rent the Hero Splendor+ for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, no fuel; ₹5/km extra).`;
    },
    kilometerLimit: 200,
    pricePerHr: 50,
  },
  {
    name: "TRIUMPH SPEED 400",
    price: 2200,
    discountedPrice: 2000,
    vehicleid: "b014",
    keys: [],
    path: "assets/triump1.jpg",
    images: ["triump1.jpg", "triump2.jpg"],
    features: function () {
      return `Rent the TRIUMPH SPEED 400 for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, no fuel; ₹5/km extra).`;
    },
    kilometerLimit: 200,
    pricePerHr: 50,
  },
  {
    name: "SUZUKI Access 125",
    price: 800,
    discountedPrice: 700,
    vehicleid: "b015",
    keys: [],
    path: "assets/access1251_1.jpg",
    images: ["access1251_1.jpg"],
    features: function () {
      return `Rent the Suzuki Access 125 for ₹${this.discountedPrice}/day (${this.kilometerLimit} km limit, no fuel; ₹5/km extra, ₹${this.pricePerHr}/hour extra).`;
    },
    kilometerLimit: 150,
    pricePerHr: 70,
  },
];
