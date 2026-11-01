"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const featuredScrollRef = useRef<HTMLDivElement>(null);

  const scrollFeatured = (direction: "left" | "right") => {
    featuredScrollRef.current?.scrollBy({
      left: direction === "right" ? 404 : -404,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface/80 backdrop-blur-xl sticky top-0 z-50 border-b border-white/10 shadow-sm h-16 md:h-20 flex items-center">
        <div className="flex justify-between items-center w-full px-4 md:px-[64px] max-w-[1280px] mx-auto">
          <div className="flex items-center gap-6 md:gap-8">
            <Link className="text-xl md:text-2xl font-extrabold text-primary tracking-tight" href="/">GarasiBoost</Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-primary font-bold border-b-2 border-primary pb-1 font-label-bold text-label-bold" href="/">Home</Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-bold text-label-bold" href="/catalog">Catalog</Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-bold text-label-bold" href="/contact">Contact</Link>
            </nav>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/admin" className="hidden md:block font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors">Admin Login</Link>
            <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full hover:bg-primary-container/10 transition-all duration-300 active:scale-95">
              <span className="material-symbols-outlined text-primary text-[22px]">admin_panel_settings</span>
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-primary-container/10 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-on-surface">{mobileMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mounted && mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/20 shadow-xl md:hidden z-50">
            <nav className="flex flex-col px-4 py-4 gap-1">
              <Link className="flex items-center gap-3 px-4 py-3 text-primary font-bold rounded-xl bg-primary/5" href="/" onClick={() => setMobileMenuOpen(false)}>
                <span className="material-symbols-outlined text-[20px]">home</span> Home
              </Link>
              <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-xl transition-all" href="/catalog" onClick={() => setMobileMenuOpen(false)}>
                <span className="material-symbols-outlined text-[20px]">directions_car</span> Catalog
              </Link>
              <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-xl transition-all" href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <span className="material-symbols-outlined text-[20px]">contact_support</span> Contact
              </Link>
              <hr className="border-outline-variant/20 my-1" />
              <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-xl transition-all" onClick={() => setMobileMenuOpen(false)}>
                <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span> Admin Login
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[600px] lg:min-h-[921px] flex items-center overflow-hidden mesh-gradient pt-8 md:pt-16 pb-16">
          <div className="max-w-[1280px] mx-auto px-4 md:px-[64px] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 w-full">
            {/* Hero Left */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20">
                <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
                <span className="font-label-bold text-label-bold text-primary text-xs md:text-sm">New Inventory Arriving Daily</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-on-surface leading-tight tracking-tight">
                The Smartest Way to Own Your <span className="text-primary">Dream Car</span>
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant max-w-lg mx-auto lg:mx-0">
                Premium certified pre-owned vehicles with futuristic reliability. Experience the next generation of car buying today.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start pt-2">
                <Link href="/catalog" className="px-6 md:px-8 py-3 md:py-4 bg-primary text-on-primary font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all active:scale-95 flex items-center gap-2 text-sm md:text-base">
                  Explore Catalog
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Hero Right - Floating Cards Visuals */}
            <div className="relative h-[300px] sm:h-[420px] lg:h-[600px] hidden sm:block">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 lg:rotate-3 scale-100 lg:scale-105 border border-white/20">
                <img className="w-full h-full object-cover" alt="Luxury car in showroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxqlboInAGaUX_yGMuwdK_Q67cEIamgvktuM8jQVeHCi47vU1GmnCXKVcNp8EJrRxyM-Ma61Q9f8pd6WOijco_wW7WgCLUt9BZM1Tb3nI6lbIsvhTLE5j-2BUzvcbLx6XTBz7jdlTmEv4Gu6NPaAPJpgyPX8uGbdld6RonbEoC6faraiAKsHJkU0Xusbn5Tgi-K0mMB8ZhfXYV4HmuFPjhr-SgmsZ7PKCPggnAN75k54SeG5-YopcuOelxFK5v1PYyj4ithW7Ziw" />
              </div>
              {/* Glassmorphic Info Cards */}
              <div className="absolute top-10 -left-4 lg:-left-10 glass-card p-4 lg:p-6 rounded-2xl w-44 lg:w-56 floating-anim" style={{ animationDelay: '0.2s' }}>
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-container/20 rounded-xl flex items-center justify-center mb-3 lg:mb-4">
                  <span className="material-symbols-outlined text-primary text-[20px] lg:text-[24px]">verified</span>
                </div>
                <p className="font-bold text-on-surface text-sm lg:text-base">0% Down Payment</p>
                <p className="text-on-surface-variant text-xs mt-1">Financing Available</p>
              </div>
              <div className="absolute bottom-16 -right-4 lg:-right-8 glass-card p-4 lg:p-6 rounded-2xl floating-anim" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-tertiary-container/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-tertiary text-[20px] lg:text-[24px]">rocket_launch</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm">Instant Approval</p>
                    <p className="text-xs text-on-surface-variant">Get keys today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-16 md:py-[120px] bg-surface overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 md:px-[64px] mb-8 md:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-2xl md:text-[40px] font-bold text-on-surface leading-tight">Featured Collections</h2>
              <p className="text-sm md:text-base text-on-surface-variant">Our hand-picked selection of high-performance luxury vehicles.</p>
            </div>
            <div className="flex gap-3 md:gap-4 self-end sm:self-auto">
              <button
                type="button"
                aria-label="Show previous featured vehicle"
                onClick={() => scrollFeatured("left")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary-container/10 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button
                type="button"
                aria-label="Show next featured vehicle"
                onClick={() => scrollFeatured("right")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary/90 transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Car Cards - horizontal scroll on mobile, flex on desktop */}
          <div ref={featuredScrollRef} className="flex gap-4 md:gap-6 px-4 md:px-[64px] overflow-x-auto hide-scrollbar snap-x scroll-smooth pb-8 md:pb-12">
            {/* Tesla Card */}
            <div className="min-w-[300px] sm:min-w-[340px] md:min-w-[380px] snap-center glass-card rounded-3xl group flex-shrink-0">
              <div className="relative h-48 md:h-64 rounded-t-3xl overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Tesla Model 3 Performance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfh3YIhkVUeTP1oWV8gqbeXXqTQ-XOxfTpkVMOHBdOy6clNhbpvl221m3R876GjoJxmscY4cNruMvw3ekabx-Mb6D0CjtLIVk7Na5oOsOQ1kpPjqeJtf6rm7pdrVa-xv48KFhyEq0V1sEXHukD-3E84aklyFV8ZDmvX-5RGT_euXiyd3afoRZ25gyXWfUcUb7JUjrQZIxMe8U_YACIqgT99RhsJwHegeYNRExKQ2CVvh-F_YQrGrWGbuvD56g-H-DFQ349qo8kCg" />
                <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xs font-bold text-primary">Certified</div>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div>
                  <h3 className="font-bold text-base md:text-xl text-on-surface">Tesla Model 3 Performance</h3>
                  <p className="text-on-surface-variant text-sm font-semibold">2022 • Dual Motor AWD</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 bg-primary-container/10 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-primary uppercase">Range</span>
                    <span className="font-bold text-on-surface text-sm">547 km</span>
                  </div>
                  <div className="p-2 bg-primary-container/10 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-primary uppercase">0-100</span>
                    <span className="font-bold text-on-surface text-sm">3.3s</span>
                  </div>
                  <div className="p-2 bg-primary-container/10 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-primary uppercase">Mileage</span>
                    <span className="font-bold text-on-surface text-sm">12k km</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-primary font-bold text-base md:text-xl">Rp 850.000.000</span>
                  <Link href="/catalog/1" className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-xs font-bold text-on-primary transition-all hover:bg-primary/90">
                    View Details
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* BMW Card */}
            <div className="min-w-[300px] sm:min-w-[340px] md:min-w-[380px] snap-center glass-card rounded-3xl group flex-shrink-0">
              <div className="relative h-48 md:h-64 rounded-t-3xl overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="BMW M4 Competition" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVtil5OZIilBz5wr-mKWeo1Y1FO2e0phhyWzvoiH9gD0up53Onw6KMC78cFjMQs2xv0mIsXgqj1uh7aV_vMP7G8VgHeweNLsdPVbFoLah1J8zcmJUqSkkfBfNGV4MV09SE3qLhQH6a8c3EVfjGN070Z7SNoWsUSckTjaCtbZG6huoh1_fwxaBf0C28IZ5zZdXOYY6VJaOoK0VIY5kXjL6cO3VjZxW6233aGRdoSbvJqdtpX_dixdsjbPnUFYnzatcyTGIz0vQnBQ" />
                <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xs font-bold text-primary">Premium Plus</div>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div>
                  <h3 className="font-bold text-base md:text-xl text-on-surface">BMW M4 Competition</h3>
                  <p className="text-on-surface-variant text-sm font-semibold">2021 • M xDrive</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 bg-primary-container/10 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-primary uppercase">Power</span>
                    <span className="font-bold text-on-surface text-sm">510 hp</span>
                  </div>
                  <div className="p-2 bg-primary-container/10 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-primary uppercase">Engine</span>
                    <span className="font-bold text-on-surface text-sm">3.0L L6</span>
                  </div>
                  <div className="p-2 bg-primary-container/10 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-primary uppercase">Mileage</span>
                    <span className="font-bold text-on-surface text-sm">8k km</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-primary font-bold text-base md:text-xl">Rp 2.150.000.000</span>
                  <Link href="/catalog/1" className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-xs font-bold text-on-primary transition-all hover:bg-primary/90">
                    View Details
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Audi Card */}
            <div className="min-w-[300px] sm:min-w-[340px] md:min-w-[380px] snap-center glass-card rounded-3xl group flex-shrink-0">
              <div className="relative h-48 md:h-64 rounded-t-3xl overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Audi RS6 Avant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRlooeur3Sa6JVezbVGBUlIjYqfGy5z4BxqUyCzikqahNjper8hJeMs4oU6xxurn-_-ojDTgXnvg1yawYxljJjRxXkPCW8PDKopYzkOQumkERG-Hw4Gtuy9Z7fcoRnuc9eiPYSlumrVsvhJVY3_ssYBD9oJqUMrxtRnzSGugiYBTuGPyjOkHugkkVEsUuumcAt82_StIUH27W15NJi7E1dwDPdCgeIcGNAkH10Bz7m4MwOHlkUA6Hd0eQ4SoiR-lvgWs58VIiItQ" />
                <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xs font-bold text-primary">New Arrival</div>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div>
                  <h3 className="font-bold text-base md:text-xl text-on-surface">Audi RS6 Avant</h3>
                  <p className="text-on-surface-variant text-sm font-semibold">2023 • Quattro</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 bg-primary-container/10 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-primary uppercase">Torque</span>
                    <span className="font-bold text-on-surface text-sm">800 Nm</span>
                  </div>
                  <div className="p-2 bg-primary-container/10 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-primary uppercase">Seats</span>
                    <span className="font-bold text-on-surface text-sm">5 Adults</span>
                  </div>
                  <div className="p-2 bg-primary-container/10 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-primary uppercase">Mileage</span>
                    <span className="font-bold text-on-surface text-sm">3k km</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-primary font-bold text-base md:text-xl">Rp 3.850.000.000</span>
                  <Link href="/catalog/1" className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-xs font-bold text-on-primary transition-all hover:bg-primary/90">
                    View Details
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Porsche Card */}
            <div className="min-w-[300px] sm:min-w-[340px] md:min-w-[380px] snap-center glass-card rounded-3xl group flex-shrink-0">
              <div className="relative h-48 md:h-64 rounded-t-3xl overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Porsche 911 Carrera" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80" />
                <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xs font-bold text-primary">Exclusive</div>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div>
                  <h3 className="font-bold text-base md:text-xl text-on-surface">Porsche 911 Carrera</h3>
                  <p className="text-on-surface-variant text-sm font-semibold">2022 • PDK</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 bg-primary-container/10 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-primary uppercase">Power</span>
                    <span className="font-bold text-on-surface text-sm">385 hp</span>
                  </div>
                  <div className="p-2 bg-primary-container/10 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-primary uppercase">0-100</span>
                    <span className="font-bold text-on-surface text-sm">4.2s</span>
                  </div>
                  <div className="p-2 bg-primary-container/10 rounded-lg text-center">
                    <span className="block text-[10px] font-bold text-primary uppercase">Mileage</span>
                    <span className="font-bold text-on-surface text-sm">6k km</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-primary font-bold text-base md:text-xl">Rp 2.950.000.000</span>
                  <Link href="/catalog" className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-xs font-bold text-on-primary transition-all hover:bg-primary/90">
                    View Details
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 md:py-[120px] relative overflow-hidden bg-background">
          <div className="max-w-[1280px] mx-auto px-4 md:px-[64px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
            <div className="glass-card p-6 md:p-10 rounded-3xl text-center flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 md:mb-8">
                <span className="material-symbols-outlined text-primary text-[32px] md:text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              </div>
              <h3 className="font-bold text-lg md:text-2xl text-on-surface mb-3 md:mb-4">150+ Points Inspection</h3>
              <p className="text-on-surface-variant text-sm md:text-base">Every vehicle undergoes a rigorous 150-point technical and aesthetic inspection by our certified engineers.</p>
            </div>
            <div className="glass-card p-6 md:p-10 rounded-3xl text-center flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-tertiary-container/10 flex items-center justify-center mb-5 md:mb-8">
                <span className="material-symbols-outlined text-tertiary text-[32px] md:text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
              <h3 className="font-bold text-lg md:text-2xl text-on-surface mb-3 md:mb-4">1-Year Warranty</h3>
              <p className="text-on-surface-variant text-sm md:text-base">Drive with peace of mind. All our certified cars come with a comprehensive 1-year powertrain warranty.</p>
            </div>
            <div className="glass-card p-6 md:p-10 rounded-3xl text-center flex flex-col items-center sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-secondary-container/20 flex items-center justify-center mb-5 md:mb-8">
                <span className="material-symbols-outlined text-secondary text-[32px] md:text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>history</span>
              </div>
              <h3 className="font-bold text-lg md:text-2xl text-on-surface mb-3 md:mb-4">Verified History</h3>
              <p className="text-on-surface-variant text-sm md:text-base">Full service history and accident-free verification report provided for every car in our inventory.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-[120px] px-4 md:px-[64px]">
          <div className="max-w-[1280px] mx-auto bg-primary rounded-[32px] md:rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="relative z-10 space-y-4 md:space-y-6 text-on-primary text-center lg:text-left">
              <h2 className="text-2xl md:text-[40px] font-bold text-white leading-tight">Found your match? Let&apos;s chat.</h2>
              <p className="text-white/80 text-sm md:text-lg max-w-2xl">
                Our personal concierge is ready to help you with trade-ins, financing, or scheduling a private test drive at your location.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 pt-2 justify-center lg:justify-start">
                <button className="px-6 md:px-8 py-3 md:py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center gap-3 text-sm md:text-base">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82s.181.106.512.285c1.44.78 3.067 1.193 4.741 1.194 5.588 0 10.138-4.55 10.14-10.137.002-2.707-1.054-5.251-2.973-7.17-1.917-1.917-4.461-2.971-7.168-2.971-5.588 0-10.14 4.551-10.142 10.139-.001 2.016.593 3.98 1.717 5.634l-.999 3.65 3.774-.99zm11.366-5.412c-.333-.167-1.97-.973-2.275-1.084-.305-.11-.527-.167-.749.167-.221.333-.859 1.084-1.054 1.306-.194.222-.389.25-.722.083-.333-.167-1.405-.518-2.675-1.651-.989-.882-1.657-1.971-1.851-2.306-.194-.333-.021-.514.145-.68.15-.149.333-.389.5-.583.167-.194.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.749-1.806-1.026-2.473-.271-.652-.546-.564-.749-.574l-.639-.012c-.221 0-.583.083-.888.417-.305.333-1.165 1.139-1.165 2.778 0 1.639 1.193 3.222 1.36 3.444.167.222 2.348 3.585 5.69 5.028.794.344 1.415.549 1.899.704.8.254 1.528.218 2.103.132.641-.096 1.97-.805 2.248-1.583.278-.778.278-1.444.194-1.583-.083-.14-.305-.222-.638-.389z" /></svg>
                  Chat on WhatsApp
                </button>
                <Link href="/catalog" className="px-6 md:px-8 py-3 md:py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-all text-sm md:text-base">
                  View Full Inventory
                </Link>
              </div>
            </div>
            <div className="relative z-10 hidden lg:block flex-shrink-0">
              <div className="w-64 h-64 xl:w-72 xl:h-72 rounded-full border-4 border-white/20 p-4">
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-white/10">
                  <img className="w-full h-full object-cover" alt="Automotive concierge specialist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYlYMnYlDB0VOdq0UR8SI0CP39JZz5hC1MeDZax8-5_UJkN5rbKJG1SFiSPEgbl_HKUxSMHi5_-PfM3SFODHIw94B56RDGXtIeJLfwnkPSO3C6gpeqfMItwzcDWjGHlBcPHzxKl0KHXoOk3zGHPJ2LcSDecM0G-5wbkv-F8zEM3dFonLhRAQ7LEFn9iG6zSlFM2gy8KHHLxtChtWSwgICW9v8hzmTlUoF1AzT6ka-OD_MZtDoZrZmqbZL_PU65_0j4I6DNCMY5oQ" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest py-16 md:py-[120px] border-t border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-4 md:px-[64px] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          <div className="col-span-2 md:col-span-1 space-y-4 md:space-y-6">
            <Link className="text-xl md:text-2xl font-bold text-primary block" href="/">Garasi Boost</Link>
            <p className="text-sm md:text-base text-on-surface-variant">Premium Marketplace for Certified Pre-owned Vehicles.</p>
          </div>
          <div>
            <h4 className="font-bold text-xs md:text-sm text-on-surface mb-4 md:mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">About Us</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Buyer Guide</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Seller Center</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs md:text-sm text-on-surface mb-4 md:mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Financing Solutions</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Car Valuation</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Door-to-door Delivery</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Certified Inspections</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs md:text-sm text-on-surface mb-4 md:mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">location_on</span>
                <span>Malang, East Java</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[16px]">mail</span>
                <a href="mailto:contact@garasiboost.id" className="hover:text-primary transition-colors">contact@garasiboost.id</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[16px]">call</span>
                <a href="tel:+622155999888" className="hover:text-primary transition-colors">+62 21 559 99 888</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 md:px-[64px] mt-12 md:mt-20 pt-6 md:pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-on-surface-variant text-center md:text-left">© 2024 GarasiBoost. Premium Marketplace for Certified Pre-owned Vehicles.</p>
          <div className="flex gap-3">
            <a className="w-9 h-9 md:w-10 md:h-10 rounded-full glass-card flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
            <a className="w-9 h-9 md:w-10 md:h-10 rounded-full glass-card flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/622155999888" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-300">
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82s.181.106.512.285c1.44.78 3.067 1.193 4.741 1.194 5.588 0 10.138-4.55 10.14-10.137.002-2.707-1.054-5.251-2.973-7.17-1.917-1.917-4.461-2.971-7.168-2.971-5.588 0-10.14 4.551-10.142 10.139-.001 2.016.593 3.98 1.717 5.634l-.999 3.65 3.774-.99zm11.366-5.412c-.333-.167-1.97-.973-2.275-1.084-.305-.11-.527-.167-.749.167-.221.333-.859 1.084-1.054 1.306-.194.222-.389.25-.722.083-.333-.167-1.405-.518-2.675-1.651-.989-.882-1.657-1.971-1.851-2.306-.194-.333-.021-.514.145-.68.15-.149.333-.389.5-.583.167-.194.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.749-1.806-1.026-2.473-.271-.652-.546-.564-.749-.574l-.639-.012c-.221 0-.583.083-.888.417-.305.333-1.165 1.139-1.165 2.778 0 1.639 1.193 3.222 1.36 3.444.167.222 2.348 3.585 5.69 5.028.794.344 1.415.549 1.899.704.8.254 1.528.218 2.103.132.641-.096 1.97-.805 2.248-1.583.278-.778.278-1.444.194-1.583-.083-.14-.305-.222-.638-.389z" /></svg>
      </a>
    </>
  );
}