import Link from "next/link";
import Navbar from "@/components/Navbar";
export default function Catalog() {
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
<select className="w-full bg-surface-container-lowest/50 border-outline-variant/30 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
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
<select className="w-full bg-surface-container-lowest/50 border-outline-variant/30 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
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
<select className="w-full bg-surface-container-lowest/50 border-outline-variant/30 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
<option>Under Rp 500M</option>
<option>Rp 500M - 1B</option>
<option>Rp 1B - 2B</option>
<option>Above 2B</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">payments</span>
</div>
</div>
</div>
<button className="w-full lg:w-auto bg-primary text-on-primary font-label-bold text-label-bold px-10 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-container transition-all active:scale-95 btn-glow">
<span className="material-symbols-outlined">search</span>
                    Apply Filters
                </button>
</div>
</section>
{/*  Product Grid  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-20">
{/*  Car Card 1  */}
<div className="glass-card rounded-[2rem] overflow-hidden group">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A side-profile studio shot of a sleek 2022 BMW 3 Series in mineral white metallic. The lighting is soft and cinematic, highlighting the elegant curves and aerodynamic body of the luxury sedan. The background is a minimalist, high-end showroom with subtle blue ambient glows and soft shadows, reflecting a premium and modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLdIE_iK2JbtyF85auxJct9pz4RP4QVYBf3BsZTpUSPUMPxQg1DVas_P5sSX95BhgPN9U0phC-XbuU3OaM7M2fS28AHfpgpEBLvPBfuxRnObNY474fG95auyv2gIzVBO_taNhpkxstJgEU3dDt93YDIzvL2oVwAMKY_wLcvXWxucomyo6VAPr9p3k6_W7OLNA6vJlOi2D-oT2KyDwQPu_QyUGATo7mlCnmA8wfKu2EmotI3IG4atlYvDRF1nKiFO8IUsPDnBQ6kQ"/>
<div className="absolute top-4 left-4 bg-primary text-white font-label-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Certified</div>
</div>
<div className="p-8 space-y-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">BMW 3 Series 2022</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">330i M Sport</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">settings</span> Automatic
                        </span>
<span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">speed</span> 12.000 km
                        </span>
</div>
<div className="pt-4 flex items-center justify-between border-t border-outline-variant/10">
<div className="font-headline-md text-primary">Rp 925.000.000</div>
</div>
<Link href="/catalog/1" className="w-full py-4 mt-2 rounded-xl bg-surface-container-high text-on-surface font-label-bold text-label-bold transition-all hover:bg-primary hover:text-white flex items-center justify-center gap-2 group/btn">
                        View Details
                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
</Link>
</div>
</div>
{/*  Car Card 2  */}
<div className="glass-card rounded-[2rem] overflow-hidden group">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A front-three-quarter view of a metallic obsidian black Mercedes-Benz C-Class 2021 parked in an ultra-modern architectural setting. The car's LED headlights are faintly glowing, and the polished surface reflects a soft sky-blue gradient. The image conveys high-tech sophistication and timeless luxury within a clean, airy environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARzvz8zfZR_WnOaRam0CdCoPTFZm7X25RIIszJzT6Y4Og5c5Rp6Lkhr9ffkReHqp1Sb27TQHBMIjfNqy5rKM603-On0TS80ficAVuorLOtW8-lnskwx7K_H6uWTe377zgH93qPKrlvH24pVbkZxVou3GrVl9NwMtl5V75dYAU5ULJ6QnXrED05aKDfUZKU7SUDRO68H8GM1S6mWADNp8T2u4qvWyX4pJxGqj0hoArMlpiJQg9D6azpKyT4lAGXHU2HUJE5zbmaIQ"/>
<div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container font-label-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">New Arrival</div>
</div>
<div className="p-8 space-y-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Mercedes C-Class 2021</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">C 200 Avantgarde</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">settings</span> Automatic
                        </span>
<span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">speed</span> 18.500 km
                        </span>
</div>
<div className="pt-4 flex items-center justify-between border-t border-outline-variant/10">
<div className="font-headline-md text-primary">Rp 845.000.000</div>
</div>
<Link href="/catalog/2" className="w-full py-4 mt-2 rounded-xl bg-surface-container-high text-on-surface font-label-bold text-label-bold transition-all hover:bg-primary hover:text-white flex items-center justify-center gap-2 group/btn">
                        View Details
                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
</Link>
</div>
</div>
{/*  Car Card 3  */}
<div className="glass-card rounded-[2rem] overflow-hidden group">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A dynamic shot of a Daytona Gray Audi A4 2022 driving through a minimalist urban canyon with glass-fronted buildings. The lighting is bright and optimistic, with a cool sky-blue tint. The car's design lines are emphasized by the soft, diffused daylight, creating a feeling of motion and technological advancement in a premium setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLEHl2JkRonkriiEnLqOxoHe9dmEvfgrvb3DvgcHAAP79i75FE4LqSlWFer84iDUcpaKWSUCY_FgtHDrogc56LqU3kMymGwmRiVgdrnn26rYb7lb_GjzVrjv6lre4M8nuiLSZPR4LQLanntdWOKL2yEPFooFj5-fC2dlUHbpyMRtebO0gkMJZcTGMyAy9RMc1mmjr50jCC8vbylJiquxfNth8ElE_pnUbHqEY0Ol5nJu9pO9WiZSqIKiekDcmbn4EgVF-CsGhlBA"/>
<div className="absolute top-4 left-4 bg-primary text-white font-label-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Certified</div>
</div>
<div className="p-8 space-y-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Audi A4 2022</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">2.0 TFSI Quattro</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">settings</span> Automatic
                        </span>
<span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">speed</span> 8.200 km
                        </span>
</div>
<div className="pt-4 flex items-center justify-between border-t border-outline-variant/10">
<div className="font-headline-md text-primary">Rp 975.000.000</div>
</div>
<Link href="/catalog/3" className="w-full py-4 mt-2 rounded-xl bg-surface-container-high text-on-surface font-label-bold text-label-bold transition-all hover:bg-primary hover:text-white flex items-center justify-center gap-2 group/btn">
                        View Details
                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
</Link>
</div>
</div>
{/*  Car Card 4  */}
<div className="glass-card rounded-[2rem] overflow-hidden group">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A sophisticated shot of a Guards Red Porsche Taycan 2022 in a minimalist showroom environment. The car is showcased under soft, overhead studio lighting that creates elegant highlights on its futuristic silhouette. The color palette is composed of clean whites and light blues, creating a high-tech and premium atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMcS9tcGFcgyvGQ_ordB8hVho6eqyBEapj-M536F-mOSNN19XvFa1LmV_U2tvFeAPfHgJELJZAvxoo6u9fa5kddpnWN5wx8ShElm8yyDmwIqVFcNYU0QfCqtknd4HW1RX6qXfJpZx1nbH5-ZtIUJEKurPVco3XrmmcNNyrQVAZ1ez7w3A5PYhCKKY1wVUwalDZr2CY8Qy1bxAPKTX5CjCEsKamjIOm3n-i2iJ3rXEnz4y_FZvaAeDc7B5_K1eD-T9i4EnYZs0ZWg"/>
<div className="absolute top-4 left-4 bg-primary-container text-on-primary-container font-label-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Performance</div>
</div>
<div className="p-8 space-y-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Porsche Taycan 2022</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Taycan 4S Electric</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">bolt</span> Electric
                        </span>
<span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">speed</span> 5.500 km
                        </span>
</div>
<div className="pt-4 flex items-center justify-between border-t border-outline-variant/10">
<div className="font-headline-md text-primary">Rp 2.850.000.000</div>
</div>
<Link href="/catalog/4" className="w-full py-4 mt-2 rounded-xl bg-surface-container-high text-on-surface font-label-bold text-label-bold transition-all hover:bg-primary hover:text-white flex items-center justify-center gap-2 group/btn">
                        View Details
                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
</Link>
</div>
</div>
{/*  Car Card 5  */}
<div className="glass-card rounded-[2rem] overflow-hidden group">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A portrait shot of a Graphite Gray Mercedes-Benz GLE 2021 parked on a paved driveway with soft, warm morning lighting. The SUV looks powerful yet refined, with its large alloy wheels and chrome details glistening. The overall atmosphere is serene, high-end, and perfectly aligned with a premium lifestyle marketplace." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUNiCbmjT_Q9pdoIf-awI3YB9kS5c_U3j6ZqNpOeyrXMLV6NLqPg9GDseBOqA7UTLAf83dZyyWqEfhyu7K1cHFwG01VxESs1Gupu02hrwJkpTRZsAq7jP-Dh2YiTYTj9Ls9Xow1j3zXs_ONgY5noYK8taewlLOS_qtYG9gywPezjVDC7O_bA61N8lV6uxj_S_ANqJbeWVaonwsCR6E_6AqQskFNQx3mKEI7vAdjMmAmJ6g1NwQ04vbspdbOzXYn4Pay4mBPX0SPQ"/>
<div className="absolute top-4 left-4 bg-primary text-white font-label-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Certified</div>
</div>
<div className="p-8 space-y-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Mercedes GLE 2021</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">GLE 450 AMG Line</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">settings</span> Automatic
                        </span>
<span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">speed</span> 15.000 km
                        </span>
</div>
<div className="pt-4 flex items-center justify-between border-t border-outline-variant/10">
<div className="font-headline-md text-primary">Rp 1.450.000.000</div>
</div>
<Link href="/catalog/5" className="w-full py-4 mt-2 rounded-xl bg-surface-container-high text-on-surface font-label-bold text-label-bold transition-all hover:bg-primary hover:text-white flex items-center justify-center gap-2 group/btn">
                        View Details
                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
</Link>
</div>
</div>
{/*  Car Card 6  */}
<div className="glass-card rounded-[2rem] overflow-hidden group">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A sleek profile shot of an Alpine White BMW X5 2023. The vehicle is captured in a bright, modern studio with high-key lighting. The clean lines of the SUV are emphasized by subtle reflections on its flawless paintwork. The design feels futuristic and airy, emphasizing the premium quality of the vehicle in a minimalist environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNWlfwhfeb5nFMWN3gissKcumjTQnfrwn4cc6UeL19WCztASs8c6GxKVsqHU2Vd-3pEffRSkE7uHmEIhi1887l9HXmyYNKsIG7R65StLm7uK_4zTpRAtc5OJd7cibQoXkyMeM1lgllU2Cl5A7dZEO6DU0S3nuhnnd4-vMBdcJ1lnmOONr9imep3tWhoI3MUTIABukLZyKw7llt_dFt8fOp0LtWtTwfTv2Kqphf0RYC50n_iQ3C-kIh1A1NQeU0Izx39BcXWbOKyA"/>
<div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container font-label-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Top Choice</div>
</div>
<div className="p-8 space-y-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">BMW X5 2023</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">xDrive40i xLine</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">settings</span> Automatic
                        </span>
<span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">speed</span> 4.100 km
                        </span>
</div>
<div className="pt-4 flex items-center justify-between border-t border-outline-variant/10">
<div className="font-headline-md text-primary">Rp 1.625.000.000</div>
</div>
<Link href="/catalog/6" className="w-full py-4 mt-2 rounded-xl bg-surface-container-high text-on-surface font-label-bold text-label-bold transition-all hover:bg-primary hover:text-white flex items-center justify-center gap-2 group/btn">
                        View Details
                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
</Link>
</div>
</div>
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
{/*  Floating WhatsApp FAB  */}
<a className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-300 floating-element" href="#">
<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
<path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.312l-1.02 3.709 3.834-1.005c.944.512 1.956.784 2.929.784 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm3.444 8.212c-.145.408-.847.742-1.18.794-.333.051-.741.082-1.84-.332-1.428-.538-2.345-1.99-2.417-2.086-.072-.096-.583-.775-.583-1.49s.374-1.072.507-1.216c.133-.144.289-.18.386-.18.096 0 .193 0 .278.004.09.004.211-.034.331.253.12.289.41.999.446 1.072.036.073.06.157.012.253-.048.096-.072.156-.144.24-.073.085-.153.19-.22.253-.073.073-.148.153-.064.298.084.144.373.616.802 1 1.553 1.385 1.564.912 1.78 1.033.217.12.344.108.47-.036.126-.144.542-.63.687-.843.145-.213.29-.18.483-.108.193.072 1.229.578 1.446.687.217.108.361.168.415.26.054.09.054.524-.092.932z"></path>
</svg>
</a>
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