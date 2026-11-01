import Link from "next/link";
import Navbar from "@/components/Navbar";
import WhatsAppFAB from "@/components/WhatsAppFAB";
export default function Contact() {
  return (
    <>
      
<Navbar />
<main className="relative">
{/*  Hero Section  */}
<section className="pt-24 pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
<span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 text-primary font-label-bold text-label-bold mb-6">
                WE'RE HERE TO HELP
            </span>
<h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6">
                Let's find your <span className="text-primary">perfect drive</span>.
            </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Whether you're looking to buy, sell, or just have a question about our certified inventory, our team of specialists is ready to assist you.
            </p>
</section>
{/*  Main Contact Cards  */}
<section className="py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/*  WhatsApp Card  */}
<a className="glass-card p-10 flex flex-col items-center text-center group" href="https://wa.me/1234567890" target="_blank">
<div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[#25D366] text-4xl" style={{ fontVariationSettings: '\'FILL\' 1' }}>chat</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Chat via WhatsApp</h3>
<p className="text-on-surface-variant mb-8 max-w-xs">Connect instantly with our sales team for real-time inventory updates and pricing details.</p>
<span className="inline-flex items-center gap-2 text-[#25D366] font-label-bold text-label-bold border border-[#25D366]/30 px-6 py-3 rounded-xl hover:bg-[#25D366] hover:text-white transition-all">
                        Message Us Now
                        <span className="material-symbols-outlined">arrow_forward</span>
</span>
</a>
{/*  Email Card  */}
<a className="glass-card p-10 flex flex-col items-center text-center group" href="mailto:hello@usedcar.id">
<div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: '\'FILL\' 1' }}>mail</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Email Our Team</h3>
<p className="text-on-surface-variant mb-8 max-w-xs">For partnerships, fleet inquiries, or detailed documentation, send us a formal request anytime.</p>
<span className="inline-flex items-center gap-2 text-primary font-label-bold text-label-bold border border-primary/30 px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-all">
                        Send an Email
                        <span className="material-symbols-outlined">alternate_email</span>
</span>
</a>
</div>
</section>
{/*  Social Media Bento Grid  */}
<section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="text-left">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Connect Digitally</h2>
<p className="text-on-surface-variant">Follow us for daily new arrivals and automotive insights.</p>
</div>
<div className="flex gap-2">
<div className="w-12 h-1 rounded-full bg-primary"></div>
<div className="w-4 h-1 rounded-full bg-outline-variant"></div>
<div className="w-4 h-1 rounded-full bg-outline-variant"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-gutter h-auto md:h-[500px]">
{/*  Instagram (Large)  */}
<div className="md:col-span-2 md:row-span-2 glass-card overflow-hidden relative group">
<div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-cover bg-center" data-alt="A premium luxury sports car parked in a minimalist high-tech showroom with soft blue neon lighting, reflecting a futuristic and polished automotive marketplace aesthetic." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuC28fpssb68ilF2nxr27YQV7JM_V2DicwoiiQzyHvhDWrAW6FyxIjcQJVHq5dhLkmdPVz4EHayk3RAPqilDFjeag4y5aWF3awBrs_kXGJ2HyQD2Q2BBIk43UmOItYCA-kpCl0K8ORv3qhg8lrlLxyjO65xZ0U6FFx2tdW4aIavHt6nGecbCcyMBesZejvAGX7luOjS3U-E10uBRklqpZhyR4fuSJu5ASIwh6xO404afBWtmuSDV3USHGppIeamjOqn6WfPG_AW0Ng\')' }}></div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-pink-600">photo_camera</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface">Instagram</h4>
<p className="text-on-surface-variant">@GarasiBoost_Official</p>
</div>
<button className="bg-on-surface text-surface px-6 py-3 rounded-full font-label-bold text-label-bold w-fit hover:scale-105 transition-transform">
                            Follow Showcase
                        </button>
</div>
</div>
{/*  TikTok  */}
<div className="md:col-span-1 glass-card p-6 flex flex-col justify-between group">
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-white text-xl">music_note</span>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">north_east</span>
</div>
<div>
<h4 className="font-label-bold text-label-bold text-on-surface">TikTok</h4>
<p className="text-body-md text-on-surface-variant text-sm">Car reviews &amp; POV drives</p>
</div>
</div>
{/*  Facebook  */}
<div className="md:col-span-1 glass-card p-6 flex flex-col justify-between group">
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-white text-xl">groups</span>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">north_east</span>
</div>
<div>
<h4 className="font-label-bold text-label-bold text-on-surface">Facebook</h4>
<p className="text-body-md text-on-surface-variant text-sm">Join our buyer community</p>
</div>
</div>
{/*  Twitter/X  */}
<div className="md:col-span-2 glass-card p-6 flex items-center gap-6 group">
<div className="w-14 h-14 bg-on-surface-variant/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
<span className="material-symbols-outlined text-on-surface text-2xl">chat_bubble</span>
</div>
<div className="flex-grow">
<h4 className="font-label-bold text-label-bold text-on-surface">Direct Inquiry</h4>
<p className="text-on-surface-variant text-sm">Average response time: &lt; 2 hours</p>
</div>
<button className="p-3 rounded-full bg-primary-container/10 text-primary">
<span className="material-symbols-outlined">send</span>
</button>
</div>
</div>
</section>
{/*  Newsletter / Contact Map Section  */}
<section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20">
<div className="glass-card rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
<div className="p-12 md:p-20 flex flex-col justify-center">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Visit Our Experience Center</h2>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">location_on</span>
<div>
<p className="font-label-bold text-label-bold text-on-surface">Jakarta Headquarters</p>
<p className="text-on-surface-variant">Sudirman Central Business District, Lot 11, Jakarta 12190</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">schedule</span>
<div>
<p className="font-label-bold text-label-bold text-on-surface">Operating Hours</p>
<p className="text-on-surface-variant">Mon - Fri: 09:00 - 18:00<br/>Sat - Sun: 10:00 - 15:00</p>
</div>
</div>
</div>
<button className="bg-primary text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-primary/30 transition-all w-fit">
                        Get Directions
                    </button>
</div>
<div className="h-[400px] lg:h-auto min-h-[400px] relative">
<div className="absolute inset-0 bg-cover bg-center" data-alt="A clean, minimalist 3D map rendering of a modern urban business district in Jakarta, focusing on a futuristic automotive showroom location, styled with vibrant sky-blue highlights and soft shadows on a white base." data-location="Jakarta" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuByWpaAVG0AKA1fs3odj9biHFzvMoyWD_aOz3eKmHa7cpchmp75UTx5kcBqsSoiI49Kl6TzaextH8BTYds56I_NgKdAJ_ShILvobmGZWAe9-AD-Dc5vdwxvLXIxM9ZszPQ-_1UYCifH71EBpaRqC8-N9YfG8AvivjxbEz-dHZPBiiQaJqehi7C3hXRkniPrPUVjjc6u0qjWeYFN6cE_fZZE7RKulOMDs8e4D9WtYtpG5Q1tdSwSq3PMOsihWZcxEn5ZgHX-fzWFww\')' }}></div>
<div className="absolute inset-0 bg-primary/10 backdrop-overlay"></div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-lowest py-section-gap border-t border-outline-variant/30">
<div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="col-span-1 md:col-span-1">
<Link className="font-display-lg text-headline-md font-bold text-primary mb-6 block" href="/">GarasiBoost</Link>
<p className="text-on-surface-variant text-body-md pr-8">
                    Redefining the pre-owned vehicle marketplace with transparency and technology.
                </p>
</div>
<div className="flex flex-col gap-4">
<h5 className="font-label-bold text-label-bold text-on-surface">Quick Links</h5>
<a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">About Us</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Buyer Guide</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Seller Center</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="font-label-bold text-label-bold text-on-surface">Legal</h5>
<a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Terms of Service</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Cookie Policy</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="font-label-bold text-label-bold text-on-surface">Newsletter</h5>
<p className="text-on-surface-variant text-sm mb-2">Get the latest stock updates.</p>
<div className="flex gap-2">
<input className="bg-surface-container border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary w-full" placeholder="Email address" type="email"/>
<button className="bg-primary text-on-primary p-2 rounded-lg">
<span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
</div>
</div>
<div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/10 text-center">
<p className="text-on-surface-variant text-label-bold">© 2024 GarasiBoost. Premium Marketplace for Certified Pre-owned Vehicles.</p>
</div>
</footer>
<WhatsAppFAB />
{/*  Micro-interaction Script  */}


    </>
  );
}