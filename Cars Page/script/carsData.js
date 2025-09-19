const CARSDATA = [
  {
    name: "Toyota Fortuner",
    price: 7000,
    discountedPrice: 6000,
    vehicleid: "010",
    keys: ["7 seater", "SUV", "white"],
    path: "assets/fortuner1.jpg",
    images: ["fortuner1.jpg", "fortuner2.jpg"],
    features:
      "Toyota Fortuner is a rugged SUV offering a powerful performance, spacious interiors, and advanced safety features.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  },
  {
    name: "Toyota Innova Crysta",
    price: 5000,
    discountedPrice: 4900,
    vehicleid: "011",
    keys: ["7 seater", "SUV", "gray"],
    path: "assets/innovaCrysta2Gray.jpg",
    images: ["innovaCrysta2Gray.jpg", "innovaCrysta1Gray.jpg"],
    features:
      "Toyota Innova Crysta is a spacious, reliable MPV with strong performance, luxurious interiors, and ideal for long family or group trips.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  },
  {
    name: "Maruti Suzuki Baleno",
    price: 2500,
    discountedPrice: 2150,
    vehicleid: "012",
    keys: ["5 seater", "hatchback", "red"],
    path: "assets/balenoRed2.jpg",
    images: ["balenoRed2.jpg", "balenoRed1.jpg"],
    features:
      "Maruti Suzuki Baleno is a stylish hatchback offering a comfortable ride, advanced features, and efficient performance.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  },{
    name: "Maruti Suzuki Brezza",
    price: 2500,
    discountedPrice: 2150,
    vehicleid: "013",
    keys: ["5 seater", "SUV", "white"],
    path: "assets/brezza2.jpg",
    images: ["brezza2.jpg", "brezza1.jpg"],
    features:
      "Maruti Suzuki Brezza is a stylish, fuel-efficient 5-seater compact SUV, perfect for city drives and weekend trips.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  },{
    name: "Tata Curvv",
    price: 2600,
    discountedPrice: 2250,
    vehicleid: "014",
    keys: ["5 seater", "SUV", "white"],
    path: "assets/curvv1.jpg",
    images: ["curvv2.jpg", "curvv1.jpg"],
    features:
      "Tata Curvv is a stylish, fuel-efficient 5-seater compact SUV, perfect for city drives and weekend trips.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  },{
    name: "Mahindra Thar",
    price: 5000,
    discountedPrice: 4500,
    vehicleid: "015",
    keys: ["5 seater", "SUV", "black"],
    path: "assets/thar1.jpg",
    images: ["thar2.jpg", "thar1.jpg"],
    features:
      "Mahindra Thar is a rugged, off-road SUV with a powerful engine, advanced 4x4 capabilities, and a stylish design.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  },{
    name: "Maruti Suzuki Swift Dzire",
    price: 2200,
    discountedPrice: 2150,
    vehicleid: "016",
    keys: ["4 seater", "Hatchback", "red"],
    path: "assets/swiftDesireRed1.jpg",
    images: ["swiftDesireRed2.jpg", "swiftDesireRed1.jpg"],
    features:
      "Maruti Suzuki Swift Dzire is a fuel-efficient, comfortable sedan ideal for city and family trips.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  },{
    name: "Hyundai i20",
    price: 2700,
    discountedPrice: 2500,
    vehicleid: "017",
    keys: ["5 seater", "Hatchback", "gray"],
    path: "assets/i202.jpg",
    images: ["i202.jpg", "i201.jpg"],
    features:
      "Hyundai i20 is a stylish and feature-packed hatchback, offering a comfortable ride and advanced technology.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  },  {
    name: "Maruti Suzuki Swift Dzire",
    price: 2300,
    discountedPrice: 2150,
    vehicleid: "018",
    keys: ["4 seater", "Hatchback", "white"],
    path: "assets/swiftDesireGray1.jpg",
    images: ["swiftDesireGray1.jpg", "swiftDesireGray2.jpg"],
    features:
      "Maruti Suzuki Swift Dzire is a fuel-efficient, comfortable sedan ideal for city and family trips.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  }, {
    name: "Maruti Suzuki Swift Dzire",
    price: 2300,
    discountedPrice: 2150,
    vehicleid: "018",
    keys: ["4 seater", "Hatchback", "white"],
    path: "assets/swiftDesireGray1.jpg",
    images: ["swiftDesireGray1.jpg", "swiftDesireGray2.jpg"],
    features:
      "Maruti Suzuki Swift Dzire is a fuel-efficient, comfortable sedan ideal for city and family trips.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  },{
    name: "Toyota Innova Crysta",
    price: 5000,
    discountedPrice: 4900,
    vehicleid: "019",
    keys: ["7 seater", "SUV", "black"],
    path: "assets/innovaCrystaBlack1.jpg",
    images: ["innovaCrystaBlack1.jpg", "innovaCrystaBlack2.jpg"],
    features:
      "Toyota Innova Crysta is a spacious, reliable MPV with strong performance, luxurious interiors, and ideal for long family or group trips.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  },{
    name: "Maruti Suzuki XL6",
    price: 4000,
    discountedPrice: 3500,
    vehicleid: "020",
    keys: ["6 seater", "MUV", "gray"],
    path: "assets/nexa2.jpg",
    images: ["nexa2.jpg", "nexa1.jpg"],
    features:
      "The Maruti Suzuki XL6 is a premium 6-seater Multi-Utility Vehicle (MUV) designed for families seeking comfort and style.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  },
  {
    name: "Hyundai Creta",
    price: 4000,
    discountedPrice: 3000,
    vehicleid: "021",
    keys: ["5 seater", "SUV", "gray"],
    path: "assets/creta1.jpg",
    images: ["creta1.jpg", "creta2.jpg"],
    features:
      "The Hyundai Creta is a stylish and feature-packed SUV, offering a comfortable ride and advanced technology.",
    // perHourRate: 500,
    // kilometerLimit: "Unlimited",
    // validity: "24hrs Valid (Min 5hrs)",
    options: {
      // perDayRate: 12000,
      // perHourRate: 500,
      // kilometerLimit: "Unlimited",
      // validity: "24hrs Valid (Min 5hrs)"
    },
  },
];

const BIKESDATA = [];
