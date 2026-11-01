"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

// Mock data - In production, this would come from an API or database
const carData: { [key: string]: any } = {
  "1": {
    id: "1",
    make: "BMW",
    model: "3 Series",
    variant: "330i M Sport",
    year: 2022,
    color: "Mineral White Metallic",
    price: 925000000,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLdIE_iK2JbtyF85auxJct9pz4RP4QVYBf3BsZTpUSPUMPxQg1DVas_P5sSX95BhgPN9U0phC-XbuU3OaM7M2fS28AHfpgpEBLvPBfuxRnObNY474fG95auyv2gIzVBO_taNhpkxstJgEU3dDt93YDIzvL2oVwAMKY_wLcvXWxucomyo6VAPr9p3k6_W7OLNA6vJlOi2D-oT2KyDwQPu_QyUGATo7mlCnmA8wfKu2EmotI3IG4atlYvDRF1nKiFO8IUsPDnBQ6kQ",
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
      invoice: true,
      nik: true
    },
    licensePlate: "B 1234 XYZ",
    plateType: "Genap (Even)",
    features: {
      airbags: "6 Airbags",
      abs: true,
      seatMaterial: "Dakota Leather",
      sunroof: true,
      headUnit: "10.25\" BMW Live Cockpit Professional"
    },
    condition: {
      floodFree: true,
      accidentFree: true,
      ac: "Cold & functioning perfectly",
      suspension: "Quiet, no abnormal sounds"
    },
    badge: "Certified",
    power: "258 hp",
    torque: "400 Nm",
    acceleration: "5.8s (0-100 km/h)",
    seats: 5,
    description: "Exceptional condition BMW 3 Series with full M Sport package. This vehicle has been meticulously maintained with complete service records. Features the latest generation iDrive system with gesture control, ambient lighting, and premium sound system."
  },
  "2": {
    id: "2",
    make: "Mercedes-Benz",
    model: "C-Class",
    variant: "C 200 Avantgarde",
    year: 2021,
    color: "Obsidian Black",
    price: 845000000,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARzvz8zfZR_WnOaRam0CdCoPTFZm7X25RIIszJzT6Y4Og5c5Rp6Lkhr9ffkReHqp1Sb27TQHBMIjfNqy5rKM603-On0TS80ficAVuorLOtW8-lnskwx7K_H6uWTe377zgH93qPKrlvH24pVbkZxVou3GrVl9NwMtl5V75dYAU5ULJ6QnXrED05aKDfUZKU7SUDRO68H8GM1S6mWADNp8T2u4qvWyX4pJxGqj0hoArMlpiJQg9D6azpKyT4lAGXHU2HUJE5zbmaIQ",
    ],
    transmission: "Automatic (9G-Tronic)",
    engineCapacity: 1496,
    fuelType: "Gasoline",
    drivetrain: "RWD",
    mileage: 18500,
    owners: 1,
    serviceHistory: "Full Mercedes-Benz service record",
    taxStatus: "Valid until October 2026",
    documents: {
      stnk: true,
      bpkb: true,
      invoice: true,
      nik: true
    },
    licensePlate: "B 5678 ABC",
    plateType: "Genap (Even)",
    features: {
      airbags: "7 Airbags",
      abs: true,
      seatMaterial: "Artico Leather",
      sunroof: true,
      headUnit: "MBUX 10.25\" Touchscreen"
    },
    condition: {
      floodFree: true,
      accidentFree: true,
      ac: "Excellent cooling performance",
      suspension: "Perfect condition"
    },
    badge: "New Arrival",
    power: "184 hp",
    torque: "280 Nm",
    acceleration: "7.7s (0-100 km/h)",
    seats: 5,
    description: "Stunning Mercedes-Benz C-Class in pristine condition. Equipped with the latest MBUX infotainment system, LED High Performance headlights, and Avantgarde styling package. Single owner vehicle with impeccable maintenance history."
  }
};

export default function CarDetail({ params }: { params: { id: string } }) {
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [car, setCar] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    const carInfo = carData[params.id] || carData["1"];
    setCar(carInfo);
  }, [params.id]);

  if (!mounted || !car) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-on-surface-variant">Loading...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <main className="max-w-[1280px] mx-auto px-4 md:px-[64px] py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">Home</Link>
          <span className="text-on-surface-variant">/</span>
          <Link href="/catalog" className="text-on-surface-variant hover:text-primary transition-colors">Catalog</Link>
          <span className="text-on-surface-variant">/</span>
          <span className="text-primary font-semibold">{car.make} {car.model}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card">
              <img 
                src={car.images[currentImageIndex]} 
                alt={`${car.make} ${car.model}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider">
                {car.badge}
              </div>
              
              {/* Image Navigation */}
              {car.images.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentImageIndex((prev) => prev === 0 ? car.images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center hover:bg-surface transition-all"
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button 
                    onClick={() => setCurrentImageIndex((prev) => prev === car.images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center hover:bg-surface transition-all"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {car.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {car.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      currentImageIndex === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Car Info Summary */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-2">
                {car.year} {car.make} {car.model}
              </h1>
              <p className="text-xl text-on-surface-variant font-semibold">{car.variant}</p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-bold text-primary">
                Rp {car.price.toLocaleString('id-ID')}
              </span>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl">
                <span className="material-symbols-outlined text-primary text-2xl mb-2 block">speed</span>
                <p className="text-xs text-on-surface-variant uppercase mb-1">Mileage</p>
                <p className="text-lg font-bold text-on-surface">{car.mileage.toLocaleString()} km</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <span className="material-symbols-outlined text-primary text-2xl mb-2 block">settings</span>
                <p className="text-xs text-on-surface-variant uppercase mb-1">Transmission</p>
                <p className="text-lg font-bold text-on-surface">{car.transmission}</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <span className="material-symbols-outlined text-primary text-2xl mb-2 block">local_gas_station</span>
                <p className="text-xs text-on-surface-variant uppercase mb-1">Fuel Type</p>
                <p className="text-lg font-bold text-on-surface">{car.fuelType}</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <span className="material-symbols-outlined text-primary text-2xl mb-2 block">calendar_today</span>
                <p className="text-xs text-on-surface-variant uppercase mb-1">Year</p>
                <p className="text-lg font-bold text-on-surface">{car.year}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <a 
                href={`https://wa.me/622155999888?text=Halo, saya tertarik dengan ${car.year} ${car.make} ${car.model} ${car.variant} seharga Rp ${car.price.toLocaleString('id-ID')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82s.181.106.512.285c1.44.78 3.067 1.193 4.741 1.194 5.588 0 10.138-4.55 10.14-10.137.002-2.707-1.054-5.251-2.973-7.17-1.917-1.917-4.461-2.971-7.168-2.971-5.588 0-10.14 4.551-10.142 10.139-.001 2.016.593 3.98 1.717 5.634l-.999 3.65 3.774-.99zm11.366-5.412c-.333-.167-1.97-.973-2.275-1.084-.305-.11-.527-.167-.749.167-.221.333-.859 1.084-1.054 1.306-.194.222-.389.25-.722.083-.333-.167-1.405-.518-2.675-1.651-.989-.882-1.657-1.971-1.851-2.306-.194-.333-.021-.514.145-.68.15-.149.333-.389.5-.583.167-.194.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.749-1.806-1.026-2.473-.271-.652-.546-.564-.749-.574l-.639-.012c-.221 0-.583.083-.888.417-.305.333-1.165 1.139-1.165 2.778 0 1.639 1.193 3.222 1.36 3.444.167.222 2.348 3.585 5.69 5.028.794.344 1.415.549 1.899.704.8.254 1.528.218 2.103.132.641-.096 1.97-.805 2.248-1.583.278-.778.278-1.444.194-1.583-.083-.14-.305-.222-.638-.389z" />
                </svg>
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Basic Specifications */}
          <div className="glass-card p-6 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">info</span>
              </div>
              <h2 className="text-xl font-bold text-on-surface">Basic Specifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Make & Model</span>
                <span className="font-semibold text-on-surface text-right">{car.make} {car.model}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Variant/Trim</span>
                <span className="font-semibold text-on-surface text-right">{car.variant}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Year</span>
                <span className="font-semibold text-on-surface">{car.year}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Color</span>
                <span className="font-semibold text-on-surface text-right">{car.color}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-on-surface-variant">Seats</span>
                <span className="font-semibold text-on-surface">{car.seats} Passengers</span>
              </div>
            </div>
          </div>

          {/* Powertrain */}
          <div className="glass-card p-6 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">build</span>
              </div>
              <h2 className="text-xl font-bold text-on-surface">Powertrain</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Transmission</span>
                <span className="font-semibold text-on-surface text-right">{car.transmission}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Engine Capacity</span>
                <span className="font-semibold text-on-surface">{car.engineCapacity} cc</span>
              </div>
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Fuel Type</span>
                <span className="font-semibold text-on-surface">{car.fuelType}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Drivetrain</span>
                <span className="font-semibold text-on-surface">{car.drivetrain}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Power</span>
                <span className="font-semibold text-on-surface">{car.power}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Torque</span>
                <span className="font-semibold text-on-surface">{car.torque}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-on-surface-variant">0-100 km/h</span>
                <span className="font-semibold text-on-surface">{car.acceleration}</span>
              </div>
            </div>
          </div>

          {/* Usage History */}
          <div className="glass-card p-6 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">history</span>
              </div>
              <h2 className="text-xl font-bold text-on-surface">Usage & History</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Mileage</span>
                <span className="font-semibold text-on-surface">{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Previous Owners</span>
                <span className="font-semibold text-on-surface">{car.owners} Owner{car.owners > 1 ? 's' : ''}</span>
              </div>
              <div className="py-3">
                <span className="text-on-surface-variant block mb-2">Service History</span>
                <span className="font-semibold text-on-surface">{car.serviceHistory}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation & Legal */}
        <div className="glass-card p-6 md:p-8 rounded-3xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">description</span>
            </div>
            <h2 className="text-2xl font-bold text-on-surface">Documentation & Legal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Tax Status</span>
                <span className="font-semibold text-on-surface text-right">{car.taxStatus}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">License Plate</span>
                <span className="font-semibold text-on-surface">{car.licensePlate}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-on-surface-variant">Plate Type</span>
                <span className="font-semibold text-on-surface">{car.plateType}</span>
              </div>
            </div>
            <div>
              <p className="text-on-surface-variant mb-4">Document Completeness:</p>
              <div className="grid grid-cols-2 gap-3">
                <div className={`flex items-center gap-2 p-3 rounded-xl ${car.documents.stnk ? 'bg-primary/10' : 'bg-error/10'}`}>
                  <span className={`material-symbols-outlined ${car.documents.stnk ? 'text-primary' : 'text-error'}`}>
                    {car.documents.stnk ? 'check_circle' : 'cancel'}
                  </span>
                  <span className="font-semibold text-on-surface">STNK</span>
                </div>
                <div className={`flex items-center gap-2 p-3 rounded-xl ${car.documents.bpkb ? 'bg-primary/10' : 'bg-error/10'}`}>
                  <span className={`material-symbols-outlined ${car.documents.bpkb ? 'text-primary' : 'text-error'}`}>
                    {car.documents.bpkb ? 'check_circle' : 'cancel'}
                  </span>
                  <span className="font-semibold text-on-surface">BPKB</span>
                </div>
                <div className={`flex items-center gap-2 p-3 rounded-xl ${car.documents.invoice ? 'bg-primary/10' : 'bg-error/10'}`}>
                  <span className={`material-symbols-outlined ${car.documents.invoice ? 'text-primary' : 'text-error'}`}>
                    {car.documents.invoice ? 'check_circle' : 'cancel'}
                  </span>
                  <span className="font-semibold text-on-surface">Invoice</span>
                </div>
                <div className={`flex items-center gap-2 p-3 rounded-xl ${car.documents.nik ? 'bg-primary/10' : 'bg-error/10'}`}>
                  <span className={`material-symbols-outlined ${car.documents.nik ? 'text-primary' : 'text-error'}`}>
                    {car.documents.nik ? 'check_circle' : 'cancel'}
                  </span>
                  <span className="font-semibold text-on-surface">NIK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Condition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Features */}
          <div className="glass-card p-6 md:p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">star</span>
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Features</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-xl">
                <span className="material-symbols-outlined text-primary mt-0.5">security</span>
                <div>
                  <p className="font-semibold text-on-surface">Safety</p>
                  <p className="text-sm text-on-surface-variant">{car.features.airbags} • {car.features.abs ? 'ABS' : 'No ABS'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-xl">
                <span className="material-symbols-outlined text-primary mt-0.5">event_seat</span>
                <div>
                  <p className="font-semibold text-on-surface">Interior</p>
                  <p className="text-sm text-on-surface-variant">{car.features.seatMaterial}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-xl">
                <span className="material-symbols-outlined text-primary mt-0.5">{car.features.sunroof ? 'check_circle' : 'cancel'}</span>
                <div>
                  <p className="font-semibold text-on-surface">Sunroof</p>
                  <p className="text-sm text-on-surface-variant">{car.features.sunroof ? 'Available' : 'Not available'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-xl">
                <span className="material-symbols-outlined text-primary mt-0.5">screen_search_desktop</span>
                <div>
                  <p className="font-semibold text-on-surface">Head Unit</p>
                  <p className="text-sm text-on-surface-variant">{car.features.headUnit}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Condition */}
          <div className="glass-card p-6 md:p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">verified</span>
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Condition Notes</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <div>
                  <p className="font-semibold text-on-surface">Flood-Free</p>
                  <p className="text-sm text-on-surface-variant">{car.condition.floodFree ? 'Verified flood-free history' : 'History unclear'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <div>
                  <p className="font-semibold text-on-surface">Accident-Free</p>
                  <p className="text-sm text-on-surface-variant">{car.condition.accidentFree ? 'No major accidents reported' : 'Minor accident history'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <span className="material-symbols-outlined text-primary mt-0.5">ac_unit</span>
                <div>
                  <p className="font-semibold text-on-surface">Air Conditioning</p>
                  <p className="text-sm text-on-surface-variant">{car.condition.ac}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <span className="material-symbols-outlined text-primary mt-0.5">tune</span>
                <div>
                  <p className="font-semibold text-on-surface">Suspension</p>
                  <p className="text-sm text-on-surface-variant">{car.condition.suspension}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="glass-card p-6 md:p-8 rounded-3xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">article</span>
            </div>
            <h2 className="text-2xl font-bold text-on-surface">Description</h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">{car.description}</p>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-8 md:p-12 rounded-3xl text-center bg-gradient-to-br from-primary/10 to-tertiary/10">
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">
            Interested in this vehicle?
          </h2>
          <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a test drive or get more information about this {car.year} {car.make} {car.model}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/622155999888?text=Halo, saya tertarik dengan ${car.year} ${car.make} ${car.model} ${car.variant} seharga Rp ${car.price.toLocaleString('id-ID')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:brightness-110 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82s.181.106.512.285c1.44.78 3.067 1.193 4.741 1.194 5.588 0 10.138-4.55 10.14-10.137.002-2.707-1.054-5.251-2.973-7.17-1.917-1.917-4.461-2.971-7.168-2.971-5.588 0-10.14 4.551-10.142 10.139-.001 2.016.593 3.98 1.717 5.634l-.999 3.65 3.774-.99zm11.366-5.412c-.333-.167-1.97-.973-2.275-1.084-.305-.11-.527-.167-.749.167-.221.333-.859 1.084-1.054 1.306-.194.222-.389.25-.722.083-.333-.167-1.405-.518-2.675-1.651-.989-.882-1.657-1.971-1.851-2.306-.194-.333-.021-.514.145-.68.15-.149.333-.389.5-.583.167-.194.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.749-1.806-1.026-2.473-.271-.652-.546-.564-.749-.574l-.639-.012c-.221 0-.583.083-.888.417-.305.333-1.165 1.139-1.165 2.778 0 1.639 1.193 3.222 1.36 3.444.167.222 2.348 3.585 5.69 5.028.794.344 1.415.549 1.899.704.8.254 1.528.218 2.103.132.641-.096 1.97-.805 2.248-1.583.278-.778.278-1.444.194-1.583-.083-.14-.305-.222-.638-.389z" />
              </svg>
              Contact via WhatsApp
            </a>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined">mail</span>
              Send Inquiry
            </Link>
          </div>
        </div>
      </main>

      {/* WhatsApp FAB */}
      <a 
        href={`https://wa.me/622155999888?text=Halo, saya tertarik dengan ${car.year} ${car.make} ${car.model}`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-300"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82s.181.106.512.285c1.44.78 3.067 1.193 4.741 1.194 5.588 0 10.138-4.55 10.14-10.137.002-2.707-1.054-5.251-2.973-7.17-1.917-1.917-4.461-2.971-7.168-2.971-5.588 0-10.14 4.551-10.142 10.139-.001 2.016.593 3.98 1.717 5.634l-.999 3.65 3.774-.99zm11.366-5.412c-.333-.167-1.97-.973-2.275-1.084-.305-.11-.527-.167-.749.167-.221.333-.859 1.084-1.054 1.306-.194.222-.389.25-.722.083-.333-.167-1.405-.518-2.675-1.651-.989-.882-1.657-1.971-1.851-2.306-.194-.333-.021-.514.145-.68.15-.149.333-.389.5-.583.167-.194.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.749-1.806-1.026-2.473-.271-.652-.546-.564-.749-.574l-.639-.012c-.221 0-.583.083-.888.417-.305.333-1.165 1.139-1.165 2.778 0 1.639 1.193 3.222 1.36 3.444.167.222 2.348 3.585 5.69 5.028.794.344 1.415.549 1.899.704.8.254 1.528.218 2.103.132.641-.096 1.97-.805 2.248-1.583.278-.778.278-1.444.194-1.583-.083-.14-.305-.222-.638-.389z" />
        </svg>
      </a>
    </>
  );
}
