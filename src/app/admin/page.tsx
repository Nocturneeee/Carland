"use client";
import Link from "next/link";
export default function Admin() {
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
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-4 py-2 bg-primary-container/10 rounded-full">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>admin_panel_settings</span>
<span className="font-label-bold text-label-bold text-primary">Admin Login</span>
</div>
</div>
</div>
</header>
<main className="max-w-container-max mx-auto px-margin-desktop py-12 flex flex-col md:flex-row gap-gutter">
{/*  Sidebar Sub-Nav  */}
<aside className="w-full md:w-64 flex-shrink-0">
<div className="glass-card rounded-xl p-6 shadow-sm sticky top-32">
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-primary-container/10 transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-bold text-label-bold">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-container text-on-primary font-bold shadow-md" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>inventory_2</span>
<span className="font-label-bold text-label-bold">Inventory</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-primary-container/10 transition-all" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-bold text-label-bold">Analytics</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-primary-container/10 transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-bold text-label-bold">Settings</span>
</a>
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
<p className="font-display-lg text-headline-lg text-primary">124</p>
</div>
<div className="glass-card p-6 rounded-xl shadow-sm border border-white/20">
<p className="text-on-surface-variant font-label-bold text-label-bold mb-1">Available Now</p>
<p className="font-display-lg text-headline-lg text-tertiary">86</p>
</div>
<div className="glass-card p-6 rounded-xl shadow-sm border border-white/20">
<p className="text-on-surface-variant font-label-bold text-label-bold mb-1">Sold this month</p>
<p className="font-display-lg text-headline-lg text-secondary">38</p>
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
{/*  Row 1  */}
<tr className="hover:bg-primary-container/5 transition-colors group">
<td className="px-6 py-4">
<div className="w-20 h-14 rounded-lg overflow-hidden bg-surface-container shadow-inner">
<img className="w-full h-full object-cover" data-alt="A side view profile of a metallic silver 2023 BMW M4 parked in a high-tech showroom with soft blue studio lighting and floor reflections. The scene is incredibly clean and modern, following a futuristic luxury aesthetic with glass and steel elements." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOd031upVK5bK7AGAAWPYV-XdetcaB_eDrEKomTzDKhz_k-0gZgKNiO72KWNvwWKAJakQwA-cw-Sis2ZEO1p_VGlR8vO2ZL809vbBZciNtVvvHjaioOgg3-hg7hRGm-T-ytGS60Emsfv3hbue4I7OAQVR7Tlv7G8krisE6Z8Pp8MBJB6CmlT6rSGpPsJ05RtigYWDSdRs_XKP1GAqP4m_gP6Bw5dEYgLPIfsfw9g__wnbKK6HVIQXIQpe4sDyAbApO8mh1Rzo5BQ"/>
</div>
</td>
<td className="px-6 py-4">
<p className="font-label-bold text-label-bold text-on-surface">2023 BMW M4 Competition</p>
<p className="text-xs text-on-surface-variant">VIN: 1234567890ABC</p>
</td>
<td className="px-6 py-4 text-right">
<p className="font-label-bold text-on-surface">2.450.000.000</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary text-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-2"></span>
                                        Available
                                    </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-center gap-2">
<button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-container/20 rounded-full transition-all">
<span className="material-symbols-outlined">edit</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-full transition-all">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-primary-container/5 transition-colors group">
<td className="px-6 py-4">
<div className="w-20 h-14 rounded-lg overflow-hidden bg-surface-container shadow-inner">
<img className="w-full h-full object-cover" data-alt="A front view of a sleek black 2022 Porsche 911 Carrera on a minimalist white platform. Soft ambient blue lighting accents the curves of the car. High-end editorial photography style with deep shadows and vibrant sky-blue highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDleqFZASecQ9rPPN0JBuV2uVxSEu3BmzyBUGUTQwb5WQec1QpN9D7Un2ZcmhDUcJV7MXct-5JQF4nqUckCptKcCvlUKdl_I0HcMS6vE12W4vL7rx9dYmLzE9uG1qE_2tiiKhAqwJLTLmCRLhjWp9sVm2udIEbmhYrCW_K-L90VofVJP4-BZmobp2duKGe01145pt-VeVJuQjlYpvSdragTex1Ima12UCJmVjCZiilZRnOUNcgi_rgMnXLTX58HaRR5TPnbWZ5HfQ"/>
</div>
</td>
<td className="px-6 py-4">
<p className="font-label-bold text-label-bold text-on-surface">2022 Porsche 911 Carrera</p>
<p className="text-xs text-on-surface-variant">VIN: 9876543210XYZ</p>
</td>
<td className="px-6 py-4 text-right">
<p className="font-label-bold text-on-surface">4.100.000.000</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container/50 text-secondary text-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                                        Sold
                                    </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-center gap-2">
<button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-container/20 rounded-full transition-all">
<span className="material-symbols-outlined">edit</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-full transition-all">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-primary-container/5 transition-colors group">
<td className="px-6 py-4">
<div className="w-20 h-14 rounded-lg overflow-hidden bg-surface-container shadow-inner">
<img className="w-full h-full object-cover" data-alt="A modern electric car, a 2024 Tesla Model S in pearl white, showcasing its aerodynamic design in a futuristic glass-enclosed showroom. The environment is filled with soft, glowing blue mesh patterns on the floor and walls, creating a high-tech atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKqqi8xO8s18dzXLfYcGaFzqhe4DvioEnK9pqvgks7AqywFQl0pGDJSfnAJcN7b8v8aVr0LAtycj00jdxd1lequZHRD_W405jr6bkTLo7Wp-zxZLM5Tuk2wbp0BKaMt2gf9plk1BauHceoRFUl40B4l29Ti0J8ulowjOrF0qkqR_WK0aC_2-uinzx9wWJvlf5KvKymmA504Am4swpkjNtQsQqIb17IliNoO1_7aZk7VxwIscnRqZZzgzUpOKrJ4cryeAEkoZA5_g"/>
</div>
</td>
<td className="px-6 py-4">
<p className="font-label-bold text-label-bold text-on-surface">2024 Tesla Model S Plaid</p>
<p className="text-xs text-on-surface-variant">VIN: EV123456789PL</p>
</td>
<td className="px-6 py-4 text-right">
<p className="font-label-bold text-on-surface">3.200.000.000</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary text-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-2"></span>
                                        Available
                                    </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-center gap-2">
<button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-container/20 rounded-full transition-all">
<span className="material-symbols-outlined">edit</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-full transition-all">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-surface-container-lowest border-t border-outline-variant/30 flex justify-between items-center">
<p className="text-on-surface-variant text-sm">Showing 1 to 3 of 124 cars</p>
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
<div className="absolute inset-0 bg-on-surface/40 backdrop-blur-md" onClick={() => { document.getElementById('addModal')?.classList.add('hidden'); }}></div>
{/*  Modal Content  */}
<div className="relative glass-card w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-white/40">
<div className="px-8 py-6 border-b border-outline-variant/20 flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Add New Vehicle</h3>
<button className="text-on-surface-variant hover:text-primary transition-all" onClick={() => { document.getElementById('addModal')?.classList.add('hidden'); }}>
<span className="material-symbols-outlined">close</span>
</button>
</div>
<form className="p-8 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Car Model Name</label>
<input className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. BMW M4" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Year</label>
<input className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="2024" type="number"/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Price (IDR)</label>
<input className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="2.500.000.000" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Status</label>
<select className="w-full bg-surface-container/50 border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none">
<option>Available</option>
<option>Reserved</option>
<option>Sold</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant">Upload Vehicle Photos</label>
<div className="w-full h-32 border-2 border-dashed border-outline-variant/40 rounded-xl flex flex-col items-center justify-center bg-surface-container/20 group hover:bg-primary-container/5 hover:border-primary transition-all cursor-pointer">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-all mb-2">cloud_upload</span>
<p className="text-sm text-on-surface-variant">Drag and drop or click to upload</p>
</div>
</div>
{/*  Modal Actions  */}
<div className="mt-8 pt-6 border-t border-outline-variant/30 flex justify-end gap-4">
<button className="px-6 py-3 rounded-full font-label-bold text-on-surface-variant hover:bg-surface-container transition-all" onClick={() => { document.getElementById('addModal')?.classList.add('hidden'); }} type="button">Cancel</button>
<button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-bold shadow-lg hover:shadow-[0_8px_16px_rgba(0,98,157,0.3)] hover:-translate-y-1 transition-all" type="submit">Save Vehicle</button>
</div>
</form>
</div>
</div>
{/*  WhatsApp FAB  */}
<a className="fixed bottom-10 right-10 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-110 transition-transform group" href="https://wa.me/yournumber">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>chat</span>
<span className="font-label-bold text-label-bold pr-2 max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-500 whitespace-nowrap">Chat with Support</span>
</a>


    </>
  );
}