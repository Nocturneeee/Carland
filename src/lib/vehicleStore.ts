// Vehicle data store - shared across admin and catalog
export interface Vehicle {
  id: string;
  make: string;
  model: string;
  variant: string;
  year: number;
  color: string;
  price: number;
  images: string[];
  transmission: "Automatic" | "Manual";
  engineCapacity: number;
  fuelType: string;
  drivetrain: string;
  mileage: number;
  owners: number;
  serviceHistory: string;
  taxStatus: string;
  documents: {
    stnk: boolean;
    bpkb: boolean;
    faktur: boolean;
    invoice?: boolean;
    nik?: boolean;
  };
  specifications: {
    basic: {
      transmission: string;
      engineCapacity: string;
      fuelType: string;
      drivetrain: string;
    };
    powertrain: {
      power: string;
      torque: string;
      acceleration: string;
      topSpeed: string;
    };
    comfort: {
      seats: number;
      acType: string;
      audioSystem: string;
      climateControl: string;
    };
    safety: {
      airbags: number;
      abs: boolean;
      esp: boolean;
      adaptiveCruiseControl: boolean;
    };
    condition: {
      floodFree: boolean;
      accidentFree: boolean;
      ac: string;
      suspension: string;
    };
  };
  badge: string;
  power: string;
  torque: string;
  acceleration: string;
  seats: number;
  description: string;
  status: "Available" | "Booked" | "Sold";
  dateAdded: string;
  lastModified: string;
  licensePlate?: string;
  plateType?: string;
  usage?: string;
  accidentHistory?: string;
  features?: {
    airbags: string;
    abs: boolean;
    seatMaterial: string;
    sunroof: boolean;
    headUnit: string;
  };
  conditionNotes?: {
    floodFree: boolean;
    accidentFree: boolean;
    ac: string;
    suspension: string;
  };
}

// Default vehicles data
export const defaultVehicles: Vehicle[] = [
  {
    id: "1",
    make: "BMW",
    model: "3 Series",
    variant: "330i M Sport",
    year: 2022,
    color: "Mineral White Metallic",
    price: 925_000_000,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLdIE_iK2JbtyF85auxJct9pz4RP4QVYBf3BsZTpUSPUMPxQg1DVas_P5sSX95BhgPN9U0phC-XbuU3OaM7M2fS28AHfpgpEBLvPBfuxRnObNY474fG95auyv2gIzVBO_taNhpkxstJgEU3dDt93YDIzvL2oVwAMKY_wLcvXWxucomyo6VAPr9p3k6_W7OLNA6vJlOi2D-oT2KyDwQPu_QyUGATo7mlCnmA8wfKu2EmotI3IG4atlYvDRF1nKiFO8IUsPDnBQ6kQ",
    ],
    transmission: "Automatic",
    engineCapacity: 1998,
    fuelType: "Gasoline",
    drivetrain: "RWD",
    mileage: 12000,
    owners: 1,
    serviceHistory: "Complete service history at authorized BMW dealer",
    taxStatus: "Valid until December 2026",
    documents: {
      stnk: true,
      bpkb: true,
      faktur: true,
    },
    specifications: {
      basic: {
        transmission: "Automatic",
        engineCapacity: "1998 cc",
        fuelType: "Gasoline",
        drivetrain: "RWD",
      },
      powertrain: {
        power: "184 hp",
        torque: "280 Nm",
        acceleration: "7.7s (0-100 km/h)",
        topSpeed: "215 km/h",
      },
      comfort: {
        seats: 5,
        acType: "Dual Zone Climate Control",
        audioSystem: "BMW Premium Sound System",
        climateControl: "Automatic Temperature Control",
      },
      safety: {
        airbags: 8,
        abs: true,
        esp: true,
        adaptiveCruiseControl: true,
      },
      condition: {
        floodFree: true,
        accidentFree: true,
        ac: "Excellent cooling performance",
        suspension: "Perfect condition",
      },
    },
    badge: "Certified",
    power: "184 hp",
    torque: "280 Nm",
    acceleration: "7.7s (0-100 km/h)",
    seats: 5,
    description: "Premium BMW 3 Series in pristine condition with complete service history.",
    status: "Available",
    dateAdded: "2026-10-15",
    lastModified: "2026-10-15",
  },
  {
    id: "2",
    make: "Mercedes-Benz",
    model: "C-Class",
    variant: "C 200 Avantgarde",
    year: 2021,
    color: "Obsidian Black",
    price: 845_000_000,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARzvz8zfZR_WnOaRam0CdCoPTFZm7X25RIIszJzT6Y4Og5c5Rp6Lkhr9ffkReHqp1Sb27TQHBMIjfNqy5rKM603-On0TS80ficAVuorLOtW8-lnskwx7K_H6uWTe377zgH93qPKrlvH24pVbkZxVou3GrVl9NwMtl5V75dYAU5ULJ6QnXrED05aKDfUZKU7SUDRO68H8GM1S6mWADNp8T2u4qvWyX4pJxGqj0hoArMlpiJQg9D6azpKyT4lAGXHU2HUJE5zbmaIQ",
    ],
    transmission: "Automatic",
    engineCapacity: 1498,
    fuelType: "Gasoline",
    drivetrain: "RWD",
    mileage: 18500,
    owners: 1,
    serviceHistory: "Regular service at authorized Mercedes dealer",
    taxStatus: "Valid until June 2026",
    documents: {
      stnk: true,
      bpkb: true,
      faktur: true,
    },
    specifications: {
      basic: {
        transmission: "Automatic",
        engineCapacity: "1498 cc",
        fuelType: "Gasoline",
        drivetrain: "RWD",
      },
      powertrain: {
        power: "156 hp",
        torque: "250 Nm",
        acceleration: "8.5s (0-100 km/h)",
        topSpeed: "210 km/h",
      },
      comfort: {
        seats: 5,
        acType: "Automatic Climate Control",
        audioSystem: "Mercedes Premium Audio",
        climateControl: "Single Zone Climate",
      },
      safety: {
        airbags: 7,
        abs: true,
        esp: true,
        adaptiveCruiseControl: false,
      },
      condition: {
        floodFree: true,
        accidentFree: true,
        ac: "Excellent",
        suspension: "Good condition",
      },
    },
    badge: "New Arrival",
    power: "156 hp",
    torque: "250 Nm",
    acceleration: "8.5s (0-100 km/h)",
    seats: 5,
    description: "Elegant Mercedes C-Class with MBUX infotainment system.",
    status: "Available",
    dateAdded: "2026-10-20",
    lastModified: "2026-10-20",
  },
  {
    id: "3",
    make: "Audi",
    model: "A4",
    variant: "2.0 TFSI Quattro",
    year: 2022,
    color: "Daytona Gray",
    price: 975_000_000,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLEHl2JkRonkriiEnLqOxoHe9dmEvfgrvb3DvgcHAAP79i75FE4LqSlWFer84iDUcpaKWSUCY_FgtHDrogc56LqU3kMymGwmRiVgdrnn26rYb7lb_GjzVrjv6lre4M8nuiLSZPR4LQLanntdWOKL2yEPFooFj5-fC2dlUHbpyMRtebO0gkMJZcTGMyAy9RMc1mmjr50jCC8vbylJiquxfNth8ElE_pnUbHqEY0Ol5nJu9pO9WiZSqIKiekDcmbn4EgVF-CsGhlBA",
    ],
    transmission: "Automatic",
    engineCapacity: 1984,
    fuelType: "Gasoline",
    drivetrain: "AWD",
    mileage: 8200,
    owners: 1,
    serviceHistory: "Complete Audi service history",
    taxStatus: "Valid until September 2026",
    documents: {
      stnk: true,
      bpkb: true,
      faktur: true,
    },
    specifications: {
      basic: {
        transmission: "Automatic",
        engineCapacity: "1984 cc",
        fuelType: "Gasoline",
        drivetrain: "AWD",
      },
      powertrain: {
        power: "190 hp",
        torque: "320 Nm",
        acceleration: "7.3s (0-100 km/h)",
        topSpeed: "220 km/h",
      },
      comfort: {
        seats: 5,
        acType: "Tri-Zone Climate",
        audioSystem: "Audi Premium Plus",
        climateControl: "Three-Zone Control",
      },
      safety: {
        airbags: 8,
        abs: true,
        esp: true,
        adaptiveCruiseControl: true,
      },
      condition: {
        floodFree: true,
        accidentFree: true,
        ac: "Perfect",
        suspension: "Excellent",
      },
    },
    badge: "Certified",
    power: "190 hp",
    torque: "320 Nm",
    acceleration: "7.3s (0-100 km/h)",
    seats: 5,
    description: "Audi A4 with Quattro all-wheel drive and premium features.",
    status: "Available",
    dateAdded: "2026-10-10",
    lastModified: "2026-10-10",
  },
];

// Get all vehicles from localStorage
export function getAllVehicles(): Vehicle[] {
  if (typeof window === "undefined") return defaultVehicles;

  try {
    const stored = localStorage.getItem("vehicles");
    return stored ? JSON.parse(stored) : defaultVehicles;
  } catch {
    return defaultVehicles;
  }
}

// Save vehicles to localStorage
export function saveVehicles(vehicles: Vehicle[]): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
  } catch (error) {
    console.error("Failed to save vehicles:", error);
  }
}

// Add a new vehicle
export function addVehicle(vehicle: Omit<Vehicle, "id" | "dateAdded" | "lastModified">): Vehicle {
  const vehicles = getAllVehicles();
  const newVehicle: Vehicle = {
    ...vehicle,
    id: Math.max(...vehicles.map((v) => parseInt(v.id)), 0) + 1 + "",
    dateAdded: new Date().toISOString().split("T")[0],
    lastModified: new Date().toISOString().split("T")[0],
  };

  vehicles.push(newVehicle);
  saveVehicles(vehicles);
  return newVehicle;
}

// Update a vehicle
export function updateVehicle(id: string, updates: Partial<Vehicle>): Vehicle | null {
  const vehicles = getAllVehicles();
  const index = vehicles.findIndex((v) => v.id === id);

  if (index === -1) return null;

  vehicles[index] = {
    ...vehicles[index],
    ...updates,
    id: vehicles[index].id, // Prevent ID change
    dateAdded: vehicles[index].dateAdded, // Prevent date change
    lastModified: new Date().toISOString().split("T")[0],
  };

  saveVehicles(vehicles);
  return vehicles[index];
}

// Delete a vehicle
export function deleteVehicle(id: string): boolean {
  const vehicles = getAllVehicles();
  const filtered = vehicles.filter((v) => v.id !== id);

  if (filtered.length === vehicles.length) return false;

  saveVehicles(filtered);
  return true;
}

// Get a single vehicle by ID
export function getVehicleById(id: string): Vehicle | null {
  const vehicles = getAllVehicles();
  return vehicles.find((v) => v.id === id) || null;
}

// Get stock indicators
export function getStockIndicators() {
  const vehicles = getAllVehicles();
  const now = new Date();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();

  const totalStock = vehicles.length;
  const availableNow = vehicles.filter((v) => v.status === "Available").length;
  const bookedNow = vehicles.filter((v) => v.status === "Booked").length;
  const soldThisMonth = vehicles.filter((v) => {
    const date = new Date(v.lastModified);
    return v.status === "Sold" && date.getMonth() === thisMonth && date.getFullYear() === thisYear;
  }).length;

  return {
    totalStock,
    availableNow,
    bookedNow,
    soldThisMonth,
  };
}
