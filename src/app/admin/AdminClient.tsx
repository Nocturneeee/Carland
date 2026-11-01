"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { getAllVehicles, addVehicle, updateVehicle, deleteVehicle, getStockIndicators, Vehicle } from "@/lib/vehicleStore";

export default function Admin() {
  const [mounted, setMounted] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [stockIndicators, setStockIndicators] = useState({ totalStock: 0, availableNow: 0, soldThisMonth: 0 });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [vehicleImages, setVehicleImages] = useState<string[]>([]);
  const [formData, setFormData] = useState<{
    make: string;
    model: string;
    variant: string;
    year: number;
    color: string;
    price: number;
    transmission: "Automatic" | "Manual";
    engineCapacity: number;
    fuelType: string;
    drivetrain: string;
    mileage: number;
    owners: number;
    status: "Available" | "Reserved" | "Sold";
    // Documentation & Legal
    licensePlate: string;
    plateType: string;
    documents: {
      stnk: boolean;
      bpkb: boolean;
      faktur: boolean;
      invoice: boolean;
      nik: boolean;
    };
    // Description
    description: string;
    // Usage & History
    usage: string;
    accidentHistory: string;
    serviceHistory: string;
    // Basic Specifications
    basicSpecs: {
      transmission: string;
      engineCapacity: string;
      fuelType: string;
      drivetrain: string;
      seats: number;
      doors: number;
    };
    // Powertrain
    powertrainSpecs: {
      power: string;
      torque: string;
      acceleration: string;
      topSpeed: string;
    };
    // Features
    features: {
      airbags: number;
      abs: boolean;
      esp: boolean;
      sunroof: boolean;
      seatMaterial: string;
      headUnit: string;
      climateControl: string;
    };
    // Condition Notes
    conditionNotes: {
      floodFree: boolean;
      accidentFree: boolean;
      ac: string;
      suspension: string;
      interior: string;
      exterior: string;
    };
    // Additional
    badge: string;
    power: string;
    torque: string;
    acceleration: string;
    seats: number;
  }>({
    make: "",
    model: "",
    variant: "",
    year: 2024,
    color: "",
    price: 0,
    transmission: "Automatic",
    engineCapacity: 0,
    fuelType: "Gasoline",
    drivetrain: "RWD",
    mileage: 0,
    owners: 1,
    status: "Available",
    licensePlate: "",
    plateType: "Private",
    documents: { stnk: true, bpkb: true, faktur: true, invoice: true, nik: true },
    description: "",
    usage: "Personal",
    accidentHistory: "None",
    serviceHistory: "Available upon request",
    basicSpecs: { transmission: "Automatic", engineCapacity: "0 cc", fuelType: "Gasoline", drivetrain: "RWD", seats: 5, doors: 4 },
    powertrainSpecs: { power: "0 hp", torque: "0 Nm", acceleration: "0s", topSpeed: "0 km/h" },
    features: { airbags: 4, abs: true, esp: false, sunroof: false, seatMaterial: "Leather", headUnit: "Standard", climateControl: "Auto AC" },
    conditionNotes: { floodFree: true, accidentFree: true, ac: "Good", suspension: "Good", interior: "Good", exterior: "Good" },
    badge: "New",
    power: "0 hp",
    torque: "0 Nm",
    acceleration: "0s",
    seats: 5,
  });

  useEffect(() => {
    setMounted(true);
    const allVehicles = getAllVehicles();
    setVehicles(allVehicles);
    setStockIndicators(getStockIndicators());
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages = Array.from(files).map((file) => URL.createObjectURL(file));

    setVehicleImages((prev) => {
      const updated = [...prev, ...newImages];
      return updated.slice(0, 4); // Max 4 photos
    });
  };

  const removePhoto = (index: number) => {
    setVehicleImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();

    const vehiclePayload = {
      make: formData.make,
      model: formData.model,
      variant: formData.variant,
      year: formData.year,
      color: formData.color,
      price: formData.price,
      transmission: formData.transmission,
      engineCapacity: formData.engineCapacity,
      fuelType: formData.fuelType,
      drivetrain: formData.drivetrain,
      mileage: formData.mileage,
      owners: formData.owners,
      status: formData.status,
      licensePlate: formData.licensePlate,
      plateType: formData.plateType,
      images: vehicleImages.length > 0 ? vehicleImages : ["https://via.placeholder.com/400x300?text=Vehicle"],
      serviceHistory: formData.serviceHistory,
      taxStatus: "Valid",
      documents: formData.documents,
      specifications: {
        basic: formData.basicSpecs,
        powertrain: formData.powertrainSpecs,
        comfort: {
          seats: formData.basicSpecs.seats,
          acType: formData.features.climateControl,
          audioSystem: formData.features.headUnit,
          climateControl: formData.features.climateControl,
        },
        safety: {
          airbags: formData.features.airbags,
          abs: formData.features.abs,
          esp: formData.features.esp,
          adaptiveCruiseControl: false,
        },
        condition: {
          floodFree: formData.conditionNotes.floodFree,
          accidentFree: formData.conditionNotes.accidentFree,
          ac: formData.conditionNotes.ac,
          suspension: formData.conditionNotes.suspension,
        },
      },
      features: {
        airbags: `${formData.features.airbags} Airbags`,
        abs: formData.features.abs,
        seatMaterial: formData.features.seatMaterial,
        sunroof: formData.features.sunroof,
        headUnit: formData.features.headUnit,
      },
      conditionNotes: {
        floodFree: formData.conditionNotes.floodFree,
        accidentFree: formData.conditionNotes.accidentFree,
        ac: formData.conditionNotes.ac,
        suspension: formData.conditionNotes.suspension,
      },
      badge: formData.badge,
      power: formData.powertrainSpecs.power,
      torque: formData.powertrainSpecs.torque,
      acceleration: formData.powertrainSpecs.acceleration,
      seats: formData.basicSpecs.seats,
      description: formData.description || `${formData.year} ${formData.make} ${formData.model}`,
      usage: formData.usage,
      accidentHistory: formData.accidentHistory,
    };

    if (editingId) {
      const updated = updateVehicle(editingId, vehiclePayload);
      if (updated) {
        setVehicles(vehicles.map((v) => (v.id === editingId ? updated : v)));
      }
      setEditingId(null);
    } else {
      const newVehicle = addVehicle(vehiclePayload);
      setVehicles([...vehicles, newVehicle]);
    }

    setFormData({
      make: "",
      model: "",
      variant: "",
      year: 2024,
      color: "",
      price: 0,
      transmission: "Automatic",
      engineCapacity: 0,
      fuelType: "Gasoline",
      drivetrain: "RWD",
      mileage: 0,
      owners: 1,
      status: "Available",
      licensePlate: "",
      plateType: "Private",
      documents: { stnk: true, bpkb: true, faktur: true, invoice: true, nik: true },
      description: "",
      usage: "Personal",
      accidentHistory: "None",
      serviceHistory: "Available upon request",
      basicSpecs: { transmission: "Automatic", engineCapacity: "0 cc", fuelType: "Gasoline", drivetrain: "RWD", seats: 5, doors: 4 },
      powertrainSpecs: { power: "0 hp", torque: "0 Nm", acceleration: "0s", topSpeed: "0 km/h" },
      features: { airbags: 4, abs: true, esp: false, sunroof: false, seatMaterial: "Leather", headUnit: "Standard", climateControl: "Auto AC" },
      conditionNotes: { floodFree: true, accidentFree: true, ac: "Good", suspension: "Good", interior: "Good", exterior: "Good" },
      badge: "New",
      power: "0 hp",
      torque: "0 Nm",
      acceleration: "0s",
      seats: 5,
    });
    setVehicleImages([]);
    document.getElementById("addModal")?.classList.add("hidden");
    setStockIndicators(getStockIndicators());
  };

  const handleEditVehicle = (vehicle: Vehicle) => {
    setEditingId(vehicle.id);
    setFormData({
      make: vehicle.make,
      model: vehicle.model,
      variant: vehicle.variant,
      year: vehicle.year,
      color: vehicle.color,
      price: vehicle.price,
      transmission: vehicle.transmission,
      engineCapacity: vehicle.engineCapacity,
      fuelType: vehicle.fuelType,
      drivetrain: vehicle.drivetrain,
      mileage: vehicle.mileage,
      owners: vehicle.owners,
      status: vehicle.status,
      licensePlate: vehicle.licensePlate || "",
      plateType: vehicle.plateType || "Private",
      documents: {
        stnk: vehicle.documents?.stnk ?? true,
        bpkb: vehicle.documents?.bpkb ?? true,
        faktur: vehicle.documents?.faktur ?? true,
        invoice: vehicle.documents?.invoice ?? true,
        nik: vehicle.documents?.nik ?? true,
      },
      description: vehicle.description || "",
      usage: vehicle.usage || "Personal",
      accidentHistory: vehicle.accidentHistory || "None",
      serviceHistory: vehicle.serviceHistory || "Available upon request",
      basicSpecs: {
        transmission: vehicle.specifications?.basic?.transmission || vehicle.transmission,
        engineCapacity: vehicle.specifications?.basic?.engineCapacity || `${vehicle.engineCapacity} cc`,
        fuelType: vehicle.specifications?.basic?.fuelType || vehicle.fuelType,
        drivetrain: vehicle.specifications?.basic?.drivetrain || vehicle.drivetrain,
        seats: vehicle.specifications?.comfort?.seats || vehicle.seats || 5,
        doors: 4,
      },
      powertrainSpecs: vehicle.specifications?.powertrain || { power: vehicle.power || "0 hp", torque: vehicle.torque || "0 Nm", acceleration: vehicle.acceleration || "0s", topSpeed: "0 km/h" },
      features: {
        airbags: vehicle.specifications?.safety?.airbags || 4,
        abs: vehicle.specifications?.safety?.abs || true,
        esp: vehicle.specifications?.safety?.esp || false,
        sunroof: vehicle.features?.sunroof || false,
        seatMaterial: vehicle.features?.seatMaterial || "Leather",
        headUnit: vehicle.features?.headUnit || vehicle.specifications?.comfort?.audioSystem || "Standard",
        climateControl: vehicle.specifications?.comfort?.climateControl || "Auto AC",
      },
      conditionNotes: {
        floodFree: vehicle.specifications?.condition?.floodFree || true,
        accidentFree: vehicle.specifications?.condition?.accidentFree || true,
        ac: vehicle.specifications?.condition?.ac || "Good",
        suspension: vehicle.specifications?.condition?.suspension || "Good",
        interior: "Good",
        exterior: "Good",
      },
      badge: vehicle.badge || "New",
      power: vehicle.power || "0 hp",
      torque: vehicle.torque || "0 Nm",
      acceleration: vehicle.acceleration || "0s",
      seats: vehicle.seats || 5,
    });
    setVehicleImages(vehicle.images);
    document.getElementById("addModal")?.classList.remove("hidden");
    document.getElementById("addModal")?.classList.add("flex");
  };

  const handleDeleteVehicle = (id: string) => {
    if (confirm("Are you sure you want to delete this vehicle?")) {
      deleteVehicle(id);
      setVehicles(vehicles.filter((v) => v.id !== id));
      setStockIndicators(getStockIndicators());
    }
  };

  if (!mounted) return null;

  return (
    <>
      
{/*  TopNavBar Component  */}
<header className="bg-surface/70 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-sm border-b border-white/10">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
<div className="flex items-center gap-12">
<Link className="font-display-lg text-headline-md font-extrabold text-primary tracking-tight" href="/">Garasi Boost</Link>
<nav className="hidden md:flex items-center gap-8">
<Link className="text-on-surface-variant hover:text-primary transition-colors font-label-bold text-label-bold" href="/">Home</Link>
<Link className="text-on-surface-variant hover:text-primary transition-colors font-label-bold text-label-bold" href="/catalog">Catalog</Link>
<Link className="text-on-surface-variant hover:text-primary transition-colors font-label-bold text-label-bold" href="/contact">Contact</Link>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-4 py-2 bg-primary-container/10 rounded-full">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>admin_panel_settings</span>
<span className="font-label-bold text-label-bold text-primary">Admin Panel</span>
</div>
<button
  type="button"
  onClick={async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }}
  className="px-4 py-2 rounded-lg text-sm font-semibold text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors"
>
  Sign out
</button>
</div>
</div>
</header>
<main className="max-w-container-max mx-auto px-margin-desktop py-12 flex flex-col md:flex-row gap-gutter">
{/*  Sidebar Sub-Nav  */}
<aside className="w-full md:w-64 flex-shrink-0">
<div className="glass-card rounded-xl p-6 shadow-sm sticky top-32">
<nav className="flex flex-col gap-2">
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-container text-on-primary font-bold shadow-md" href="/admin">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>inventory_2</span>
<span className="font-label-bold text-label-bold">Inventory</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-primary-container/10 transition-all" href="/admin/analytics">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-bold text-label-bold">Analytics</span>
</Link>
</nav>
</div>
</aside>
{/*  Main Content Area  */}
<section className="flex-grow">
{/*  Header Actions  */}
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Vehicle Inventory</h1>
<p className="text-on-surface-variant">Manage and update your premium car listings.</p>
</div>
<button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label-bold text-label-bold flex items-center gap-2 hover:shadow-[0_4px_12px_rgba(0,98,157,0.3)] hover:translate-y-[-2px] transition-all active:scale-95" onClick={() => { document.getElementById('addModal')?.classList.remove('hidden'); document.getElementById('addModal')?.classList.add('flex'); }}>
<span className="material-symbols-outlined">add_circle</span>
                    Add New Car
                </button>
</div>
{/*  Stats Bar  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="glass-card p-6 rounded-xl shadow-sm border border-white/20">
<p className="text-on-surface-variant font-label-bold text-label-bold mb-1">Total Stock</p>
<p className="font-display-lg text-headline-lg text-primary">{stockIndicators.totalStock}</p>
</div>
<div className="glass-card p-6 rounded-xl shadow-sm border border-white/20">
<p className="text-on-surface-variant font-label-bold text-label-bold mb-1">Available Now</p>
<p className="font-display-lg text-headline-lg text-tertiary">{stockIndicators.availableNow}</p>
</div>
<div className="glass-card p-6 rounded-xl shadow-sm border border-white/20">
<p className="text-on-surface-variant font-label-bold text-label-bold mb-1">Sold this month</p>
<p className="font-display-lg text-headline-lg text-secondary">{stockIndicators.soldThisMonth}</p>
</div>
</div>
{/*  Inventory Table  */}
<div className="glass-card rounded-xl shadow-sm overflow-hidden border border-white/20">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low border-b border-outline-variant/30">
<tr>
<th className="px-6 py-4 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Image</th>
<th className="px-6 py-4 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Vehicle Name</th>
<th className="px-6 py-4 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider text-right">Price (IDR)</th>
<th className="px-6 py-4 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="px-6 py-4 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider text-center">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20">
{vehicles.map((vehicle) => (
<tr key={vehicle.id} className="hover:bg-primary-container/5 transition-colors group">
<td className="px-6 py-4">
<div className="w-20 h-14 rounded-lg overflow-hidden bg-surface-container shadow-inner">
<img className="w-full h-full object-cover" src={vehicle.images[0]} alt={`${vehicle.make} ${vehicle.model}`} />
</div>
</td>
<td className="px-6 py-4">
<p className="font-label-bold text-label-bold text-on-surface">{vehicle.year} {vehicle.make} {vehicle.model}</p>
<p className="text-xs text-on-surface-variant">VIN: {vehicle.id}</p>
</td>
<td className="px-6 py-4 text-right">
<p className="font-label-bold text-on-surface">Rp {vehicle.price.toLocaleString("id-ID")}</p>
</td>
<td className="px-6 py-4">
<span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
vehicle.status === "Available" ? "bg-tertiary-container/20 text-tertiary" :
vehicle.status === "Reserved" ? "bg-secondary-container/20 text-secondary" :
"bg-error-container/20 text-error"
}`}>
<span className="w-1.5 h-1.5 rounded-full mr-2" style={{backgroundColor: "currentColor"}}></span>
{vehicle.status}
</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-center gap-2">
<button onClick={() => handleEditVehicle(vehicle)} className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-container/20 rounded-full transition-all">
<span className="material-symbols-outlined">edit</span>
</button>
<button onClick={() => handleDeleteVehicle(vehicle.id)} className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-full transition-all">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</td>
</tr>
))}
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-surface-container-lowest border-t border-outline-variant/30 flex justify-between items-center">
<p className="text-on-surface-variant text-sm">Showing 1 to {vehicles.length} of {vehicles.length} cars</p>
<div className="flex gap-2">
<button className="p-2 rounded-lg border border-outline-variant/30 hover:bg-surface-container transition-all">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="p-2 rounded-lg border border-outline-variant/30 bg-primary text-on-primary shadow-sm font-label-bold">1</button>
<button className="p-2 rounded-lg border border-outline-variant/30 hover:bg-surface-container transition-all font-label-bold">2</button>
<button className="p-2 rounded-lg border border-outline-variant/30 hover:bg-surface-container transition-all font-label-bold">3</button>
<button className="p-2 rounded-lg border border-outline-variant/30 hover:bg-surface-container transition-all">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
</main>
{/*  Footer Component  */}
<footer className="bg-surface-container-lowest dark:bg-surface-dim full-width py-section-gap border-t border-outline-variant/30 mt-section-gap">
<div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="col-span-1 md:col-span-2">
<h2 className="font-display-lg text-headline-md font-bold text-primary mb-4">Garasi Boost</h2>
<p className="text-on-surface-variant max-w-sm mb-6">© 2026 Garasi Boost. Premium Marketplace for Certified Pre-owned Vehicles. Driving the future of automotive luxury.</p>
</div>
<div>
<h4 className="font-label-bold text-label-bold text-on-surface uppercase mb-4">Marketplace</h4>
<nav className="flex flex-col gap-3">
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">About Us</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Buyer Guide</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Seller Center</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Privacy Policy</a>
</nav>
</div>
<div>
<h4 className="font-label-bold text-label-bold text-on-surface uppercase mb-4">Connect</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
<span className="material-symbols-outlined">alternate_email</span>
</a>
<a className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
<span className="material-symbols-outlined">forum</span>
</a>
</div>
</div>
</div>
</footer>
{/*  Add New Car Modal (Hidden by Default)  */}
<div className="hidden fixed inset-0 z-[100] flex items-center justify-center px-4" id="addModal">
{/*  Modal Backdrop  */}
<div className="absolute inset-0 bg-on-surface/40 backdrop-blur-md" onClick={() => { document.getElementById('addModal')?.classList.add('hidden'); setEditingId(null); }}></div>
{/*  Modal Content  */}
<div className="relative glass-card w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-white/40 max-h-[90vh] overflow-y-auto">
<div className="px-8 py-6 border-b border-outline-variant/20 flex justify-between items-center sticky top-0 bg-surface-container-low z-10">
<h3 className="font-headline-md text-headline-md text-on-surface">{editingId ? "Edit Vehicle" : "Add New Vehicle"}</h3>
<button className="text-on-surface-variant hover:text-primary transition-all" onClick={() => { document.getElementById('addModal')?.classList.add('hidden'); setEditingId(null); }}>
<span className="material-symbols-outlined">close</span>
</button>
</div>
<form onSubmit={handleAddVehicle} className="p-8 space-y-8">
{/*  Basic Info Section  */}
<section className="space-y-4">
<h4 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>info</span>
Basic Information
</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Brand</label>
<input value={formData.make} onChange={(e) => setFormData({...formData, make: e.target.value})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. BMW" type="text" required/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Model</label>
<input value={formData.model} onChange={(e) => setFormData({...formData, model: e.target.value})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. M4" type="text" required/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Variant</label>
<input value={formData.variant} onChange={(e) => setFormData({...formData, variant: e.target.value})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. Competition" type="text" required/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Year</label>
<input value={formData.year} onChange={(e) => setFormData({...formData, year: parseInt(e.target.value)})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="2024" type="number" required/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Price (IDR)</label>
<input value={formData.price || ""} onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value) || 0})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="2500000000" type="number" required/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Status</label>
<select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value as "Available" | "Reserved" | "Sold"})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none">
<option>Available</option>
<option>Reserved</option>
<option>Sold</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Color</label>
<input value={formData.color} onChange={(e) => setFormData({...formData, color: e.target.value})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. Mineral White" type="text" required/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">License Plate</label>
<input value={formData.licensePlate} onChange={(e) => setFormData({...formData, licensePlate: e.target.value})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. B 1234 ABC" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Plate Type</label>
<select value={formData.plateType} onChange={(e) => setFormData({...formData, plateType: e.target.value})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="Private">Private</option>
<option value="Corporate">Corporate</option>
<option value="Rental">Rental</option>
</select>
</div>
</div>
</section>

{/*  Description Section  */}
<section className="space-y-4">
<h4 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>description</span>
Description & History
</h4>
<div className="space-y-4">
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Full Description</label>
<textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none min-h-[100px]" placeholder="Describe the vehicle in detail..."/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Usage</label>
<select value={formData.usage} onChange={(e) => setFormData({...formData, usage: e.target.value})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="Personal">Personal</option>
<option value="Corporate">Corporate</option>
<option value="Rental">Rental</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Accident History</label>
<select value={formData.accidentHistory} onChange={(e) => setFormData({...formData, accidentHistory: e.target.value})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="None">None</option>
<option value="Minor">Minor</option>
<option value="Major">Major</option>
</select>
</div>
<div className="space-y-2 md:col-span-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Service History</label>
<input value={formData.serviceHistory} onChange={(e) => setFormData({...formData, serviceHistory: e.target.value})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Service history details..."/>
</div>
</div>
</div>
</section>

{/*  Basic Specifications Section  */}
<section className="space-y-4">
<h4 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>engineering_services</span>
Basic Specifications
</h4>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Transmission</label>
<select value={formData.basicSpecs.transmission} onChange={(e) => setFormData({...formData, basicSpecs: {...formData.basicSpecs, transmission: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="Automatic">Automatic</option>
<option value="Manual">Manual</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Engine Capacity</label>
<input value={formData.basicSpecs.engineCapacity} onChange={(e) => setFormData({...formData, basicSpecs: {...formData.basicSpecs, engineCapacity: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. 2998 cc"/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Fuel Type</label>
<select value={formData.basicSpecs.fuelType} onChange={(e) => setFormData({...formData, basicSpecs: {...formData.basicSpecs, fuelType: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="Gasoline">Gasoline</option>
<option value="Diesel">Diesel</option>
<option value="Hybrid">Hybrid</option>
<option value="Electric">Electric</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Drivetrain</label>
<select value={formData.basicSpecs.drivetrain} onChange={(e) => setFormData({...formData, basicSpecs: {...formData.basicSpecs, drivetrain: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="RWD">RWD</option>
<option value="AWD">AWD</option>
<option value="FWD">FWD</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Seats</label>
<input value={formData.basicSpecs.seats} onChange={(e) => setFormData({...formData, basicSpecs: {...formData.basicSpecs, seats: parseInt(e.target.value)}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" type="number" min="1" max="12"/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Doors</label>
<input value={formData.basicSpecs.doors} onChange={(e) => setFormData({...formData, basicSpecs: {...formData.basicSpecs, doors: parseInt(e.target.value)}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" type="number" min="2" max="5"/>
</div>
</div>
</section>

{/*  Powertrain Section  */}
<section className="space-y-4">
<h4 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>speed</span>
Powertrain & Performance
</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Power</label>
<input value={formData.powertrainSpecs.power} onChange={(e) => setFormData({...formData, powertrainSpecs: {...formData.powertrainSpecs, power: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. 450 hp"/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Torque</label>
<input value={formData.powertrainSpecs.torque} onChange={(e) => setFormData({...formData, powertrainSpecs: {...formData.powertrainSpecs, torque: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. 650 Nm"/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">0-100 km/h</label>
<input value={formData.powertrainSpecs.acceleration} onChange={(e) => setFormData({...formData, powertrainSpecs: {...formData.powertrainSpecs, acceleration: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. 4.2s"/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Top Speed</label>
<input value={formData.powertrainSpecs.topSpeed} onChange={(e) => setFormData({...formData, powertrainSpecs: {...formData.powertrainSpecs, topSpeed: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. 280 km/h"/>
</div>
</div>
</section>

{/*  Features Section  */}
<section className="space-y-4">
<h4 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
Features & Comfort
</h4>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Airbags</label>
<input value={formData.features.airbags} onChange={(e) => setFormData({...formData, features: {...formData.features, airbags: parseInt(e.target.value)}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" type="number" min="0" max="12"/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">ABS</label>
<select value={formData.features.abs ? "true" : "false"} onChange={(e) => setFormData({...formData, features: {...formData.features, abs: e.target.value === "true"}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="true">Yes</option>
<option value="false">No</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">ESP</label>
<select value={formData.features.esp ? "true" : "false"} onChange={(e) => setFormData({...formData, features: {...formData.features, esp: e.target.value === "true"}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="true">Yes</option>
<option value="false">No</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Sunroof</label>
<select value={formData.features.sunroof ? "true" : "false"} onChange={(e) => setFormData({...formData, features: {...formData.features, sunroof: e.target.value === "true"}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="true">Yes</option>
<option value="false">No</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Seat Material</label>
<select value={formData.features.seatMaterial} onChange={(e) => setFormData({...formData, features: {...formData.features, seatMaterial: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="Leather">Leather</option>
<option value="Fabric">Fabric</option>
<option value="Alcantara">Alcantara</option>
<option value="Suedecloth">Suedecloth</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Head Unit</label>
<select value={formData.features.headUnit} onChange={(e) => setFormData({...formData, features: {...formData.features, headUnit: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="Standard">Standard</option>
<option value="Premium">Premium</option>
<option value="Navigation">Navigation</option>
<option value="Head Unit">Head Unit</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Climate Control</label>
<select value={formData.features.climateControl} onChange={(e) => setFormData({...formData, features: {...formData.features, climateControl: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="Auto AC">Auto AC</option>
<option value="Dual Zone">Dual Zone</option>
<option value="Multi Zone">Multi Zone</option>
</select>
</div>
</div>
</section>

{/*  Condition Notes Section  */}
<section className="space-y-4">
<h4 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>health_and_safety</span>
Condition Notes
</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Flood Free</label>
<select value={formData.conditionNotes.floodFree ? "true" : "false"} onChange={(e) => setFormData({...formData, conditionNotes: {...formData.conditionNotes, floodFree: e.target.value === "true"}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="true">Yes</option>
<option value="false">No</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Accident Free</label>
<select value={formData.conditionNotes.accidentFree ? "true" : "false"} onChange={(e) => setFormData({...formData, conditionNotes: {...formData.conditionNotes, accidentFree: e.target.value === "true"}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="true">Yes</option>
<option value="false">No</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">AC Condition</label>
<select value={formData.conditionNotes.ac} onChange={(e) => setFormData({...formData, conditionNotes: {...formData.conditionNotes, ac: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="Excellent">Excellent</option>
<option value="Good">Good</option>
<option value="Fair">Fair</option>
<option value="Poor">Poor</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Suspension</label>
<select value={formData.conditionNotes.suspension} onChange={(e) => setFormData({...formData, conditionNotes: {...formData.conditionNotes, suspension: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="Excellent">Excellent</option>
<option value="Good">Good</option>
<option value="Fair">Fair</option>
<option value="Poor">Poor</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Interior</label>
<select value={formData.conditionNotes.interior} onChange={(e) => setFormData({...formData, conditionNotes: {...formData.conditionNotes, interior: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="Excellent">Excellent</option>
<option value="Good">Good</option>
<option value="Fair">Fair</option>
<option value="Poor">Poor</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Exterior</label>
<select value={formData.conditionNotes.exterior} onChange={(e) => setFormData({...formData, conditionNotes: {...formData.conditionNotes, exterior: e.target.value}})} className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
<option value="Excellent">Excellent</option>
<option value="Good">Good</option>
<option value="Fair">Fair</option>
<option value="Poor">Poor</option>
</select>
</div>
</div>
</section>

{/*  Documentation & Legal Section  */}
<section className="space-y-4">
<h4 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>description</span>
Documentation & Legal
</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2 flex items-center gap-3">
<label className="font-label-bold text-label-bold text-on-surface-variant">STNK</label>
<input type="checkbox" checked={formData.documents.stnk} onChange={(e) => setFormData({...formData, documents: {...formData.documents, stnk: e.target.checked}})} className="w-5 h-5 accent-primary"/>
</div>
<div className="space-y-2 flex items-center gap-3">
<label className="font-label-bold text-label-bold text-on-surface-variant">BPKB</label>
<input type="checkbox" checked={formData.documents.bpkb} onChange={(e) => setFormData({...formData, documents: {...formData.documents, bpkb: e.target.checked}})} className="w-5 h-5 accent-primary"/>
</div>
<div className="space-y-2 flex items-center gap-3">
<label className="font-label-bold text-label-bold text-on-surface-variant">Faktur</label>
<input type="checkbox" checked={formData.documents.faktur} onChange={(e) => setFormData({...formData, documents: {...formData.documents, faktur: e.target.checked}})} className="w-5 h-5 accent-primary"/>
</div>
<div className="space-y-2 flex items-center gap-3">
<label className="font-label-bold text-label-bold text-on-surface-variant">Invoice</label>
<input type="checkbox" checked={formData.documents.invoice} onChange={(e) => setFormData({...formData, documents: {...formData.documents, invoice: e.target.checked}})} className="w-5 h-5 accent-primary"/>
</div>
<div className="space-y-2 flex items-center gap-3">
<label className="font-label-bold text-label-bold text-on-surface-variant">NIK Copy</label>
<input type="checkbox" checked={formData.documents.nik} onChange={(e) => setFormData({...formData, documents: {...formData.documents, nik: e.target.checked}})} className="w-5 h-5 accent-primary"/>
</div>
</div>
</section>

{/*  Photo Upload Section  */}
<section className="space-y-4">
<h4 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>photo_camera</span>
Vehicle Photos (Max 4)
</h4>
<div className="border-2 border-dashed border-outline-variant/50 rounded-xl p-6">
<input type="file" accept="image/*" multiple onChange={handlePhotoUpload} className="hidden" id="photoUpload" disabled={vehicleImages.length >= 4}/>
<div className="flex items-center justify-center gap-4" onClick={() => vehicleImages.length < 4 && document.getElementById('photoUpload')?.click()}>
<div className="flex flex-col items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-4xl">add_photo_alternate</span>
<span className="font-label-bold text-label-bold text-center">Click to add photos</span>
<span className="text-sm">Max 4 photos allowed</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
{vehicleImages.map((img, idx) => (
<div key={idx} className="relative group">
<img src={img} className="w-full h-32 object-cover rounded-lg shadow-sm"/>
<button type="button" onClick={(e) => { e.stopPropagation(); removePhoto(idx); }} className="absolute top-2 right-2 bg-error text-white rounded-full w-6 h-6 flex items-center justify-center hover:scale-110 transition-all">
<span className="material-symbols-outlined text-xs">close</span>
</button>
</div>
))}
</div>
</div>
</section>

{/*  Modal Actions  */}
<div className="pt-6 border-t border-outline-variant/30 flex justify-end gap-4">
<button className="px-6 py-3 rounded-full font-label-bold text-on-surface-variant hover:bg-surface-container transition-all" onClick={() => { document.getElementById('addModal')?.classList.add('hidden'); setEditingId(null); }} type="button">Cancel</button>
<button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-bold shadow-lg hover:shadow-[0_8px_16px_rgba(0,98,157,0.3)] hover:-translate-y-1 transition-all" type="submit">{editingId ? "Update Vehicle" : "Save Vehicle"}</button>
</div>
</form>
</div>
</div>
      {/*  WhatsApp FAB  */}
      <WhatsAppFAB />


    </>
  );
}