"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { getAllVehicles, Vehicle } from "@/lib/vehicleStore";

export default function Catalog() {
  const [brand, setBrand] = useState("All Brands");
  const [year, setYear] = useState("Any Year");
  const [priceRange, setPriceRange] = useState("Any Price");
  const [appliedFilters, setAppliedFilters] = useState({ brand: "All Brands", year: "Any Year", priceRange: "Any Price" });
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setVehicles(getAllVehicles().filter((v) => v.status === "Available" || v.status === "Booked"));
  }, []);

  const filteredCars = vehicles.filter((car) => {
    const matchesBrand = appliedFilters.brand === "All Brands" || car.make === appliedFilters.brand;
    const matchesYear = appliedFilters.year === "Any Year" || car.year === Number(appliedFilters.year);
    const matchesPrice =
      appliedFilters.priceRange === "Any Price" ||
      (appliedFilters.priceRange === "Under Rp 500M" && car.price < 500_000_000) ||
      (appliedFilters.priceRange === "Rp 500M - 1B" && car.price >= 500_000_000 && car.price <= 1_000_000_000) ||
      (appliedFilters.priceRange === "Rp 1B - 2B" && car.price > 1_000_000_000 && car.price <= 2_000_000_000) ||
      (appliedFilters.priceRange === "Above 2B" && car.price > 2_000_000_000);

    return matchesBrand && matchesYear && matchesPrice;
  });

  const applyFilters = () => setAppliedFilters({ brand, year, priceRange });

  if (!mounted) return null;

  return (
    <>
      
<Navbar />
<main className="max-w-[1280px] mx-auto px-4 md:px-[64px] py-10 md:py-20">
{/*  Header Section  */}
<header className="text-center mb-16 space-y-6">
<div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-bold text-label-bold mb-4 tracking-wider">
                CERTIFIED PRE-OWNED
            </div>
<h1 className="font-display-lg text-display-lg md:text-display-lg max-w-3xl mx-auto">
                Find Your <span className="text-primary">Perfect</span> Match
            </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Discover the finest selection of certified pre-owned luxury vehicles, meticulously inspected and ready for their next journey.
            </p>
</header>
{/*  Filter Bar  */}
<section className="mb-20">
<div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-end gap-gutter">
<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Brand Filter  */}
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant uppercase ml-1">Brand</label>
<div className="relative">
<select value={brand} onChange={(event) => setBrand(event.target.value)} className="w-full bg-surface-container-lowest/50 border-outline-variant/30 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
<option>All Brands</option>
<option>BMW</option>
<option>Mercedes-Benz</option>
<option>Audi</option>
<option>Porsche</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
</div>
</div>
{/*  Year Filter  */}
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant uppercase ml-1">Year</label>
<div className="relative">
<select value={year} onChange={(event) => setYear(event.target.value)} className="w-full bg-surface-container-lowest/50 border-outline-variant/30 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
<option>Any Year</option>
<option>2024</option>
<option>2023</option>
<option>2022</option>
<option>2021</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">calendar_today</span>
</div>
</div>
{/*  Price Filter  */}
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant uppercase ml-1">Price Range</label>
<div className="relative">
<select value={priceRange} onChange={(event) => setPriceRange(event.target.value)} className="w-full bg-surface-container-lowest/50 border-outline-variant/30 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
<option>Any Price</option>
<option>Under Rp 500M</option>
<option>Rp 500M - 1B</option>
<option>Rp 1B - 2B</option>
<option>Above 2B</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">payments</span>
</div>
</div>
</div>
<button type="button" onClick={applyFilters} className="w-full lg:w-auto bg-primary text-on-primary font-label-bold text-label-bold px-10 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-container transition-all active:scale-95 btn-glow">
<span className="material-symbols-outlined">search</span>
                    Apply Filters
                </button>
</div>
</section>
{/*  Product Grid  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-20">
  {filteredCars.length > 0 ? (
    filteredCars.map((car) => (
      <div key={car.id} className="glass-card rounded-[2rem] overflow-hidden group">
        <div className="relative h-64 overflow-hidden">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt={`${car.make} ${car.model}`}
            src={car.images[0]}
          />
          {car.status === "Booked" ? (
            <div className="absolute top-4 left-4 bg-amber-500 text-white font-label-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
              Booked
            </div>
          ) : (
            <div className="absolute top-4 left-4 bg-primary text-white font-label-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
              {car.badge || "Available"}
            </div>
          )}
        </div>
        <div className="p-8 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                {car.make} {car.model} {car.year}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                {car.variant}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">{car.fuelType === "Electric" ? "bolt" : "settings"}</span>
              {car.transmission}
            </span>
            <span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">speed</span>
              {car.mileage.toLocaleString()} km
            </span>
          </div>
          <div className="pt-4 flex items-center justify-between border-t border-outline-variant/10">
            <div className="font-headline-md text-primary">
              Rp {car.price.toLocaleString("id-ID")}
            </div>
          </div>
          <Link href={`/catalog/${car.id}`} className="w-full py-4 mt-2 rounded-xl bg-surface-container-high text-on-surface font-label-bold text-label-bold transition-all hover:bg-primary hover:text-white flex items-center justify-center gap-2 group/btn">
            View Details
            <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
          </Link>
        </div>
      </div>
    ))
  ) : (
    <div className="col-span-full text-center py-12">
      <p className="text-on-surface-variant text-lg">No vehicles match your filters. Try adjusting your criteria.</p>
    </div>
  )}
</section>
{/*  Pagination  */}
<div className="flex justify-center items-center gap-4 mb-20">
<button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all active:scale-90">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-12 h-12 rounded-full bg-primary text-on-primary font-bold">1</button>
<button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all">2</button>
<button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all">3</button>
<button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all active:scale-90">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</main>
{/* Floating WhatsApp FAB */}
<WhatsAppFAB />
{/*  Footer  */}
<footer className="bg-surface-container-lowest border-t border-outline-variant/30 full-width py-section-gap">
<div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="col-span-1 md:col-span-1">
<div className="font-display-lg text-headline-md font-bold text-primary mb-6">Garasi Boost</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                    Redefining the pre-owned luxury car buying experience with trust, transparency, and technology.
                </p>
</div>
<div>
<h4 className="font-label-bold text-label-bold text-on-surface mb-6">Platform</h4>
<ul className="space-y-4">
<li><Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/catalog">Catalog</Link></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Seller Center</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Buyer Guide</a></li>
</ul>
</div>
<div>
<h4 className="font-label-bold text-label-bold text-on-surface mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Tentang Kami</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="font-label-bold text-label-bold text-on-surface mb-6">Newsletter</h4>
<div className="flex flex-col gap-4">
<input className="bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20" placeholder="Enter your email" type="email"/>
<button className="bg-primary text-on-primary font-label-bold text-label-bold py-3 rounded-xl hover:opacity-90 transition-all">Subscribe</button>
</div>
</div>
</div>
<div className="max-w-container-max mx-auto px-margin-desktop mt-20 pt-8 border-t border-outline-variant/10 text-center">
<p className="font-body-md text-body-md text-on-surface-variant/60">
                © 2026 Garasi Boost. Jual Beli Mobil Bekas Premium.
            </p>
</div>
</footer>


    </>
  );
}