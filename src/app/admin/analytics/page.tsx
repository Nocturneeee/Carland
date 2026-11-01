import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AnalyticsClient from "./AnalyticsClient";
import LogoutButton from "@/components/LogoutButton";
import { ADMIN_SESSION_COOKIE, isAuthenticatedAdminSession } from "@/lib/adminAuth";

export default async function AnalyticsPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  if (!isAuthenticatedAdminSession(session)) {
    redirect("/admin/login");
  }

  return (
    <>
      {/* TopNavBar Component */}
      <header className="bg-surface/70 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-sm border-b border-white/10">
        <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
          <div className="flex items-center gap-12">
            <Link className="font-display-lg text-headline-md font-extrabold text-primary tracking-tight" href="/">
              Garasi Boost
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-bold text-label-bold" href="/">
                Home
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-bold text-label-bold" href="/catalog">
                Catalog
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-bold text-label-bold" href="/contact">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-container/10 rounded-full">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                admin_panel_settings
              </span>
              <span className="font-label-bold text-label-bold text-primary">Admin Panel</span>
            </div>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-desktop py-12 flex flex-col md:flex-row gap-gutter">
        {/* Sidebar Sub-Nav */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="glass-card rounded-xl p-6 shadow-sm sticky top-32">
            <nav className="flex flex-col gap-2">
              <Link
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-primary-container/10 transition-all"
                href="/admin"
              >
                <span className="material-symbols-outlined">dashboard</span>
                <span className="font-label-bold text-label-bold">Dashboard</span>
              </Link>
              <Link
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-primary-container/10 transition-all"
                href="/admin"
              >
                <span className="material-symbols-outlined">inventory_2</span>
                <span className="font-label-bold text-label-bold">Inventory</span>
              </Link>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-container text-on-primary font-bold shadow-md">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  analytics
                </span>
                <span className="font-label-bold text-label-bold">Analytics</span>
              </a>
              <Link
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-primary-container/10 transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">settings</span>
                <span className="font-label-bold text-label-bold">Settings</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="flex-grow">
          <AnalyticsClient />
        </section>
      </main>

      {/* Footer Component */}
      <footer className="bg-surface-container-lowest dark:bg-surface-dim full-width py-section-gap border-t border-outline-variant/30 mt-section-gap">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display-lg text-headline-md font-bold text-primary mb-4">Garasi Boost</h2>
            <p className="text-on-surface-variant max-w-sm mb-6">© 2026 Garasi Boost. Premium Marketplace for Certified Pre-owned Vehicles. Driving the future of automotive luxury.</p>
          </div>
          <div>
            <h4 className="font-label-bold text-label-bold text-on-surface uppercase mb-4">Marketplace</h4>
            <nav className="flex flex-col gap-3">
              <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">
                About Us
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">
                Buyer Guide
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">
                Seller Center
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">
                Privacy Policy
              </a>
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

      {/* WhatsApp FAB */}
      <a className="fixed bottom-10 right-10 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-110 transition-transform group" href="https://wa.me/yournumber">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          chat
        </span>
        <span className="font-label-bold text-label-bold pr-2 max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-500 whitespace-nowrap">
          Chat with Support
        </span>
      </a>
    </>
  );
}
