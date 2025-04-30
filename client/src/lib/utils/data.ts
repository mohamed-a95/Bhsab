// Car types for rental
export const CarTypes = [
  {
    name: "Personbil (Kompakt)",
    description: "Toyota Yaris eller liknande",
    pricePerDay: "450",
    imgSrc: "/images/car-rental.jpg",
    passengers: "4",
    luggage: "2 stora väskor",
    fuelEconomy: "Låg bränsleförbrukning"
  },
  {
    name: "Kombi",
    description: "Volvo V60 eller liknande",
    pricePerDay: "650",
    imgSrc: "/images/car-rental.jpg",
    passengers: "5",
    luggage: "4 stora väskor",
    fuelEconomy: "Medel bränsleförbrukning"
  },
  {
    name: "Skåpbil",
    description: "Mercedes Sprinter eller liknande",
    pricePerDay: "950",
    imgSrc: "/images/car-rental.jpg",
    passengers: "3",
    luggage: "15 kubikmeter lastutrymme",
    fuelEconomy: "B-körkort tillräckligt"
  }
];

// Personal car pricing data
export const PersonalCarPricing = [
  {
    name: "Kompaktbil",
    description: "Toyota Yaris eller liknande",
    day: "450 kr",
    weekend: "1 200 kr",
    week: "2 500 kr",
    extraPerKm: "1,50 kr"
  },
  {
    name: "Mellanklass",
    description: "Volkswagen Golf eller liknande",
    day: "550 kr",
    weekend: "1 400 kr",
    week: "3 000 kr",
    extraPerKm: "1,75 kr"
  },
  {
    name: "Kombi",
    description: "Volvo V60 eller liknande",
    day: "650 kr",
    weekend: "1 600 kr",
    week: "3 500 kr",
    extraPerKm: "2,00 kr"
  },
  {
    name: "SUV",
    description: "Volvo XC60 eller liknande",
    day: "850 kr",
    weekend: "2 200 kr",
    week: "4 800 kr",
    extraPerKm: "2,50 kr"
  }
];

// Van pricing data
export const VanPricing = [
  {
    name: "Liten skåpbil",
    description: "VW Caddy eller liknande (3.5m³)",
    day: "750 kr",
    weekend: "1 800 kr",
    week: "4 000 kr",
    extraPerKm: "2,50 kr"
  },
  {
    name: "Mellan skåpbil",
    description: "Mercedes Vito eller liknande (6m³)",
    day: "950 kr",
    weekend: "2 400 kr",
    week: "5 200 kr",
    extraPerKm: "2,75 kr"
  },
  {
    name: "Stor skåpbil",
    description: "Mercedes Sprinter eller liknande (12-15m³)",
    day: "1 250 kr",
    weekend: "3 200 kr",
    week: "6 800 kr",
    extraPerKm: "3,00 kr"
  }
];

// Trailer pricing data
export const TrailerPricing = [
  {
    name: "Öppet släp (litet)",
    description: "Max 500 kg",
    day: "250 kr",
    weekend: "600 kr",
    week: "1 400 kr"
  },
  {
    name: "Öppet släp (stort)",
    description: "Max 750 kg",
    day: "350 kr",
    weekend: "850 kr",
    week: "1 800 kr"
  },
  {
    name: "Täckt släp",
    description: "Med kåpa, max 750 kg",
    day: "450 kr",
    weekend: "1 100 kr",
    week: "2 300 kr"
  },
  {
    name: "Takbox",
    description: "400-500 liter",
    day: "150 kr",
    weekend: "350 kr",
    week: "800 kr"
  },
  {
    name: "Cykelhållare",
    description: "För 2-4 cyklar",
    day: "100 kr",
    weekend: "250 kr",
    week: "600 kr"
  }
];

// Moving price data
export const MovingPricing = {
  hourlyRates: [
    {
      description: "2 flyttare + skåpbil",
      time: "Vardagar 7-18",
      price: "720 kr/tim"
    },
    {
      description: "3 flyttare + skåpbil",
      time: "Vardagar 7-18",
      price: "980 kr/tim"
    },
    {
      description: "4 flyttare + skåpbil",
      time: "Vardagar 7-18",
      price: "1 250 kr/tim"
    }
  ],
  additionalServices: [
    {
      name: "Packning",
      description: "Per person och timme",
      price: "395 kr/tim"
    },
    {
      name: "Flyttstädning",
      description: "Pris per m²",
      price: "från 20 kr/m²"
    },
    {
      name: "Emballage",
      description: "Kartonger, tejp, bubbelplast",
      price: "Enligt prislista"
    },
    {
      name: "Möbelmontering",
      description: "Per timme",
      price: "450 kr/tim"
    }
  ]
};

// New rental pricing data
export const RentalPricing = {
  columns: ["Hyresperiod", "Plan", "Personbil", "Minibuss"],
  data: [
    {
      period: "Dygn",
      plan: "Inkl. 100 km",
      car: "379 kr",
      van: "1 099 kr"
    },
    {
      period: "Dygn",
      plan: "Fri körsträcka",
      car: "529 kr",
      van: "1 099 kr"
    },
    {
      period: "Extra dygn",
      plan: "Fri körsträcka",
      car: "489 kr",
      van: "919 kr"
    },
    {
      period: "Weekend",
      plan: "Inkl. 300 km",
      car: "839 kr",
      van: "1 889 kr"
    },
    {
      period: "Weekend",
      plan: "Fri körsträcka",
      car: "1 049 kr",
      van: "2 399 kr"
    },
    {
      period: "Vecka",
      plan: "Inkl. 700 km",
      car: "1 899 kr",
      van: "4 799 kr"
    },
    {
      period: "Vecka",
      plan: "Fri körsträcka",
      car: "2 499 kr",
      van: "5 099 kr"
    },
    {
      period: "Månad",
      plan: "Inkl. 2100 km",
      car: "8 999 kr",
      van: "14 999 kr"
    }
  ],
  extraInfo: [
    {
      period: "Extra km",
      car: "2,35 kr",
      van: "5,00 kr"
    },
    {
      period: "Självriskreducering",
      car: "100 kr",
      van: "140 kr"
    }
  ]
};