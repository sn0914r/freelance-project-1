const CARSDATA = [
  {
    name: "Maruti Suzuki Swift Dzire Automatic",
    price: 2300,
    discountedPrice: 2150,
    vehicleid: "001",
    keys: ["4 seater", "Hatchback", "gray color"],
    path: "assets/swiftDesire1.jpg",
    images: ["swiftDesire1.jpg"],
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
  },
  {
    name: "Kia Sonet",
    price: 3000,
    discountedPrice: 2650,
    vehicleid: "002",
    keys: ["5 seater", "SUV", "white"],
    path: "assets/kiaSonet1.jpg",
    images: ["kiaSonet1.jpg"],
    features:
      "Kia Sonet is a stylish and feature-packed compact SUV, perfect for urban adventures.",
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
    name: "Maruti Suzuki Swift VXI Manual",
    price: 2500,
    discountedPrice: 2150,
    vehicleid: "003",
    keys: ["5 seater", "hatchback", "red", "petrol", "manual"],
    path: "assets/swiftVxi1.jpg",
    images: ["swiftVxi1.jpg"],
    features:
      "Maruti Suzuki Swift VXI Manual is a stylish 5-seater hatchback with a 1.2L petrol engine, manual gearbox, and excellent fuel efficiency.",
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
    name: "Tata Altroz",
    price: 2500,
    discountedPrice: 2150,
    vehicleid: "004",
    keys: ["4 seater", "hatchback", "black"],
    path: "assets/altroz1.jpg",
    images: ["altroz1.jpg"],
    features:
      "Tata Altroz is a premium hatchback offering a spacious interior, advanced features, and a choice of efficient engines.",
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
    vehicleid: "005",
    keys: ["5 seater", "hatchback", "black"],
    path: "assets/baleno1.jpg",
    images: ["baleno1.jpg"],
    features:
      "Maruti Suzuki Baleno is a premium hatchback offering a spacious interior, advanced features, and a choice of efficient engines.",
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
    name: "Maruti Suzuki Swift Dzire",
    price: 2300,
    discountedPrice: 2150,
    vehicleid: "006",
    keys: ["4 seater", "hatchback", "white"],
    path: "assets/swiftDzireWhite1.jpg",
    images: ["swiftDzireWhite1.jpg"],
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
  },
  {
    name: "Toyota Etios Liva",
    price: 2300,
    discountedPrice: 2000,
    vehicleid: "007",
    keys: ["5 seater", "hatchback", "light skyblue"],
    path: "assets/etiosLiva1.jpg",
    images: ["etiosLiva1.jpg"],
    features:
      "Toyota Etios Liva is a compact hatchback offering a spacious interior, comfortable seating, and efficient performance.",
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
    discountedPrice: 4500,
    vehicleid: "008",
    keys: ["7 seater", "MUV", "Garnet Brown", "Diesel"],
    path: "assets/innovaCrysta1.jpg",
    images: ["innovaCrysta1.jpg"],
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
    name: "Hyundai Verna Automatic",
    price: 5000,
    discountedPrice: 4500,
    vehicleid: "009",
    keys: ["5 seater", "sedan", "white", "Automatic"],
    path: "assets/verna1.jpg",
    images: ["verna1.jpg"],
    features:
      "Hyundai Verna Automatic is a stylish sedan offering a comfortable ride, advanced features, and efficient performance.",
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
