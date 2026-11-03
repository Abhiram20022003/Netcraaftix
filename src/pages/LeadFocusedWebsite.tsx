import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Cpu, GraduationCap,
  Headphones, Menu, Network, Phone, ShieldCheck, Video, Wifi, X, Zap
} from "lucide-react";

const PHONE = "918977118189";
const PHONE_DISPLAY = "+91 89771 18189";
const EMAIL = "info@netcraaftix.co.in";

type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  outcome: string;
  icon: typeof Code2;
  points: string[];
  keywords: string[];
};

const services: Service[] = [
  {
    slug: "software-development-hyderabad",
    title: "Custom Software & Website Development",
    short: "Software Development",
    description: "Websites, business applications and custom software designed around the way your organisation works.",
    outcome: "Turn manual work and disconnected tools into practical digital workflows.",
    icon: Code2,
    points: ["Business websites and portals", "Custom web applications", "CRM, ERP and workflow tools", "API integration and maintenance"],
    keywords: ["software development company Hyderabad", "website development Hyderabad"]
  },
  {
    slug: "networking-solutions-hyderabad",
    title: "Business Networking & Wi-Fi Solutions",
    short: "Networking & Wi-Fi",
    description: "Plan, install and support reliable wired and wireless networks for offices, campuses and commercial spaces.",
    outcome: "Improve connectivity, coverage and network reliability across your premises.",
    icon: Network,
    points: ["LAN, WAN and structured cabling", "Office Wi-Fi and access points", "Router, switch and firewall setup", "Network troubleshooting and support"],
    keywords: ["network installation Hyderabad", "office Wi-Fi setup"]
  },
  {
    slug: "cctv-installation-hyderabad",
    title: "CCTV Camera Installation & Support",
    short: "CCTV & Surveillance",
    description: "Security camera planning, installation and maintenance for homes, offices, schools and commercial properties.",
    outcome: "Get the right camera coverage, recording setup and remote viewing for your site.",
    icon: Video,
    points: ["Site assessment and camera placement", "IP and HD camera installation", "DVR / NVR and remote viewing setup", "AMC, repair and maintenance"],
    keywords: ["CCTV installation Hyderabad", "security camera installation near me"]
  },
  {
    slug: "biometric-attendance-hyderabad",
    title: "Biometric Attendance & Access Control",
    short: "Biometric Systems",
    description: "Attendance and access-control systems configured for your workforce, premises and operating process.",
    outcome: "Make employee attendance and controlled entry easier to manage.",
    icon: ShieldCheck,
    points: ["Fingerprint and face attendance devices", "Door access control", "Attendance software setup", "Device integration and support"]
  },
  {
    slug: "smart-board-installation-hyderabad",
    title: "Interactive Smart Board Installation",
    short: "Smart Boards",
    description: "Interactive display supply coordination, installation and user guidance for classrooms and meeting rooms.",
    outcome: "Set up a ready-to-use interactive learning or collaboration space.",
    icon: GraduationCap,
    points: ["Interactive flat panel installation", "Classroom and meeting-room setup", "Connectivity and software configuration", "User orientation and technical support"]
  }
];

function trackLeadEvent(event: string, details: Record<string, string> = {}) {
  const w = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...details });
}

function WhatsAppLink({ children, className = "", message = "Hello Netcraaftix, I would like to discuss a technology requirement." }: { children: React.ReactNode; className?: string; message?: string }) {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackLeadEvent("whatsapp_click", { lead_channel: "whatsapp" })}
      className={className}
    >
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101311]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="Netcraaftix home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400 text-lg font-black text-[#101311]">N</span>
          <span className="text-xl font-bold tracking-tight text-white">Netcraaftix<span className="text-amber-400">.</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="/#services" className="hover:text-amber-300">Services</a>
          <a href="/#industries" className="hover:text-amber-300">Who We Help</a>
          <a href="/#process" className="hover:text-amber-300">Our Process</a>
          <a href="/#contact" className="hover:text-amber-300">Contact</a>
        </nav>
        <div className="hidden md:block">
          <a href="/#contact" className="rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-[#171914] transition hover:bg-amber-300">Request a Quote <ArrowUpRight className="ml-1 inline" size={16}/></a>
        </div>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && <nav className="flex flex-col gap-4 border-t border-white/10 px-5 py-5 text-sm text-zinc-200 md:hidden">
        <a onClick={() => setOpen(false)} href="/#services">Services</a>
        <a onClick={() => setOpen(false)} href="/#industries">Who We Help</a>
        <a onClick={() => setOpen(false)} href="/#process">Our Process</a>
        <a onClick={() => setOpen(false)} href="/#contact">Contact</a>
      </nav>}
    </header>
  );
}

function LeadForm({ defaultService = "" }: { defaultService?: string }) {
  const [form, setForm] = useState({ name: "", phone: "", company: "", city: "Hyderabad", service: defaultService, details: "" });
  const [consent, setConsent] = useState(true);
  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(current => ({ ...current, [e.target.name]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    const message = [
      "New website enquiry - Netcraaftix",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Company: ${form.company || "Not provided"}`,
      `Location: ${form.city}`,
      `Service: ${form.service || "Not selected"}`,
      `Requirement: ${form.details || "Please contact me"}`
    ].join("\n");
    trackLeadEvent("generate_lead", { lead_channel: "whatsapp", service: form.service || "general_enquiry" });
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-[#1a201c] p-6 shadow-2xl shadow-black/20 sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-400">Project enquiry</p>
        <h3 className="mt-2 text-2xl font-bold text-white">Tell us what you need.</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">Share a few details. Your enquiry will open in WhatsApp so our team can follow up.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Your name *
          <input required name="name" value={form.name} onChange={update} placeholder="Full name" className="mt-2 w-full rounded-lg border border-white/10 bg-[#101511] px-4 py-3 text-white outline-none focus:border-amber-400"/>
        </label>
        <label className="text-sm text-zinc-300">Phone number *
          <input required name="phone" type="tel" inputMode="tel" pattern="[+0-9() -]{8,18}" value={form.phone} onChange={update} placeholder="+91 XXXXX XXXXX" className="mt-2 w-full rounded-lg border border-white/10 bg-[#101511] px-4 py-3 text-white outline-none focus:border-amber-400"/>
        </label>
        <label className="text-sm text-zinc-300">Company / institution
          <input name="company" value={form.company} onChange={update} placeholder="Company name (optional)" className="mt-2 w-full rounded-lg border border-white/10 bg-[#101511] px-4 py-3 text-white outline-none focus:border-amber-400"/>
        </label>
        <label className="text-sm text-zinc-300">Your location
          <input name="city" value={form.city} onChange={update} placeholder="City" className="mt-2 w-full rounded-lg border border-white/10 bg-[#101511] px-4 py-3 text-white outline-none focus:border-amber-400"/>
        </label>
        <label className="text-sm text-zinc-300 sm:col-span-2">Service required *
          <select required name="service" value={form.service} onChange={update} className="mt-2 w-full rounded-lg border border-white/10 bg-[#101511] px-4 py-3 text-white outline-none focus:border-amber-400">
            <option value="">Choose a service</option>
            {services.map(service => <option key={service.slug} value={service.short}>{service.short}</option>)}
            <option value="Multiple services / consultation">Multiple services / consultation</option>
          </select>
        </label>
        <label className="text-sm text-zinc-300 sm:col-span-2">Brief requirement
          <textarea name="details" rows={3} value={form.details} onChange={update} placeholder="Tell us about the site, quantity, scope or timeline..." className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-[#101511] px-4 py-3 text-white outline-none focus:border-amber-400"/>
        </label>
      </div>
      <label className="mt-4 flex items-start gap-2 text-xs leading-5 text-zinc-400">
        <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1 accent-amber-400"/>
        I agree to be contacted by Netcraaftix about this enquiry.
      </label>
      <button disabled={!consent} type="submit" className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-4 font-bold text-[#171914] transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50">
        Continue to WhatsApp <ArrowRight size={18}/>
      </button>
      <p className="mt-3 text-center text-xs text-zinc-500">No payment required · Your details are used to respond to this enquiry.</p>
    </form>
  );
}

function ServiceCards() {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
    {services.map((service, index) => {
      const Icon = service.icon;
      return <article key={service.slug} className="group flex flex-col rounded-2xl border border-white/10 bg-[#1a201c] p-6 transition hover:-translate-y-1 hover:border-amber-400/50">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300"><Icon size={24}/></div>
        <h3 className="text-xl font-bold text-white">{service.short}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{service.description}</p>
        <Link to={`/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-amber-200">Explore service <ArrowRight size={16}/></Link>
      </article>;
    })}
  </div>;
}

function Footer() {
  return <footer className="border-t border-white/10 bg-[#0b0e0c] py-10">
    <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3 lg:px-8">
      <div><div className="text-xl font-bold text-white">Netcraaftix<span className="text-amber-400">.</span></div><p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">Technology and infrastructure solutions for businesses, institutions and homes. It's all about perfection.</p></div>
      <div><p className="font-semibold text-white">Talk to our team</p><a href={`tel:+${PHONE}`} onClick={() => trackLeadEvent("phone_click", { lead_channel: "phone" })} className="mt-3 block text-sm text-zinc-400 hover:text-amber-300">{PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`} className="mt-2 block text-sm text-zinc-400 hover:text-amber-300">{EMAIL}</a><p className="mt-2 text-sm text-zinc-500">Meerpet, Hyderabad, Telangana</p></div>
      <div><p className="font-semibold text-white">Quick links</p><div className="mt-3 flex flex-col gap-2 text-sm text-zinc-400"><a href="/#services" className="hover:text-amber-300">Services</a><a href="/#contact" className="hover:text-amber-300">Request a quote</a><a href="/privacy-policy" className="hover:text-amber-300">Privacy policy</a></div></div>
    </div>
    <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-5 pt-6 text-xs text-zinc-600 lg:px-8">© {new Date().getFullYear()} Netcraaftix. All rights reserved.</div>
  </footer>;
}

function HomePage() {
  useEffect(() => { document.title = "Netcraaftix | IT Solutions, CCTV, Networking & Software in Hyderabad"; }, []);
  return <div className="min-h-screen bg-[#101311] text-white">
    <Header/>
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-amber-400/10 blur-3xl"/>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-amber-300"><span className="h-2 w-2 rounded-full bg-amber-400"/> Technology that works for your business</p>
            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">One reliable partner for your <span className="text-amber-300">technology needs.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">From CCTV security and business networking to custom software and smart classroom solutions, Netcraaftix helps you plan, install and support the technology your organisation depends on.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-4 font-bold text-[#171914] hover:bg-amber-300">Get a project quote <ArrowRight size={18}/></a>
              <a href={`tel:+${PHONE}`} onClick={() => trackLeadEvent("phone_click", { lead_channel: "phone" })} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-4 font-semibold text-white hover:border-amber-300 hover:text-amber-300"><Phone size={17}/> Call {PHONE_DISPLAY}</a>
            </div>
            <p className="mt-5 text-xs text-zinc-500">Serving Hyderabad and projects across Telangana. Service availability is confirmed after requirement review.</p>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#252d27] to-[#171c18] p-5 shadow-2xl shadow-black/40 sm:p-8">
              <div className="mb-6 flex items-center justify-between"><span className="text-sm font-semibold text-zinc-300">Technology solutions</span><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">End-to-end support</span></div>
              <div className="grid grid-cols-2 gap-3">
                {services.slice(0,4).map(s => { const Icon=s.icon; return <div key={s.slug} className="rounded-2xl border border-white/10 bg-black/20 p-5"><Icon className="mb-5 text-amber-300" size={26}/><p className="font-semibold text-white">{s.short}</p><p className="mt-2 text-xs leading-5 text-zinc-500">Planning · Installation · Support</p></div>; })}
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-xl border border-amber-300/20 bg-amber-300/5 p-4"><Zap className="shrink-0 text-amber-300"/><p className="text-sm text-zinc-300">Practical solutions. Clear communication. Support after installation.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">What we do</p><h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Technology services built around your requirements.</h2><p className="mt-4 leading-7 text-zinc-400">Choose the service you need to see the relevant scope, common requirements and a dedicated enquiry page.</p></div>
        <ServiceCards/>
      </section>

      <section id="industries" className="border-y border-white/10 bg-[#171c18] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">Who we work with</p><h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Solutions for the spaces where work happens.</h2></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["Offices & businesses","Connectivity, surveillance, access and business software."],["Schools & colleges","Smart classrooms, campus networks and attendance systems."],["Retail & warehouses","CCTV coverage, network infrastructure and operational tools."],["Homes & apartments","Home security cameras, Wi-Fi and installation support."]].map(([title,desc])=><div key={title} className="rounded-2xl border border-white/10 bg-[#101311] p-6"><Check className="mb-4 text-amber-300"/><h3 className="font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-400">{desc}</p></div>)}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">How it works</p><h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">A straightforward process from enquiry to support.</h2></div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[["01","Understand","We discuss your site, goals, quantity and budget."],["02","Recommend","We suggest a suitable scope and solution."],["03","Implement","Our team coordinates installation or development."],["04","Support","We explain handover and available maintenance options."]].map(([n,title,desc])=><div key={n} className="border-l-2 border-amber-400/60 pl-5"><p className="text-sm font-bold text-amber-300">{n}</p><h3 className="mt-3 text-xl font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-400">{desc}</p></div>)}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#171c18] py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div className="pt-4"><p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">Let's discuss your project</p><h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Get a clear next step for your requirement.</h2><p className="mt-5 leading-7 text-zinc-400">Tell us what you need and where the work is located. We will use your details to start a conversation and understand the scope.</p>
            <div className="mt-8 space-y-5"><a href={`tel:+${PHONE}`} onClick={() => trackLeadEvent("phone_click", { lead_channel: "phone" })} className="flex items-center gap-4 text-zinc-200 hover:text-amber-300"><span className="rounded-xl bg-amber-400/10 p-3 text-amber-300"><Phone/></span><span><span className="block text-xs text-zinc-500">Call our team</span>{PHONE_DISPLAY}</span></a><a href={`mailto:${EMAIL}`} className="flex items-center gap-4 text-zinc-200 hover:text-amber-300"><span className="rounded-xl bg-amber-400/10 p-3 text-amber-300">@</span><span><span className="block text-xs text-zinc-500">Email</span>{EMAIL}</span></a><div className="text-sm text-zinc-500">Meerpet, Hyderabad, Telangana, India</div></div>
          </div>
          <LeadForm/>
        </div>
      </section>
    </main>
    <Footer/>
    <WhatsAppLink className="fixed bottom-5 right-5 z-40 rounded-full bg-emerald-500 px-5 py-4 text-sm font-bold text-white shadow-xl shadow-black/30 hover:bg-emerald-400">WhatsApp us</WhatsAppLink>
  </div>;
}

function ServiceLandingPage() {
  const { slug } = useParams();
  const service = services.find(item => item.slug === slug) || services[0];
  const Icon = service.icon;
  useEffect(() => {
    document.title = `${service.title} in Hyderabad | Netcraaftix`;
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement("meta"); description.setAttribute("name", "description"); document.head.appendChild(description); }
    description.setAttribute("content", `${service.description} Contact Netcraaftix in Hyderabad for a project discussion and quote.`);
  }, [service]);
  return <div className="min-h-screen bg-[#101311] text-white">
    <Header/>
    <main>
      <section className="border-b border-white/10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400/10 via-[#101311] to-[#101311]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_.85fr] lg:px-8 lg:py-24">
          <div><Link to="/" className="text-sm text-amber-300 hover:text-amber-200">← Back to Netcraaftix</Link><div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300"><Icon size={28}/></div><p className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-amber-300">Netcraaftix · Hyderabad</p><h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">{service.title} <span className="text-amber-300">in Hyderabad</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">{service.description}</p><p className="mt-5 text-sm leading-6 text-zinc-400">{service.outcome}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#enquiry" className="rounded-lg bg-amber-400 px-6 py-4 text-center font-bold text-[#171914] hover:bg-amber-300">Request a quote <ArrowRight className="ml-2 inline" size={18}/></a><a href={`tel:+${PHONE}`} onClick={() => trackLeadEvent("phone_click", { lead_channel: "phone", service: service.short })} className="rounded-lg border border-white/20 px-6 py-4 text-center font-semibold text-white hover:border-amber-300">{PHONE_DISPLAY}</a></div></div>
          <div className="rounded-3xl border border-white/10 bg-[#1a201c] p-7 sm:p-9"><h2 className="text-2xl font-bold">What we can help with</h2><ul className="mt-6 space-y-4">{service.points.map(point=><li key={point} className="flex gap-3 text-sm leading-6 text-zinc-300"><Check className="mt-1 shrink-0 text-amber-300" size={18}/>{point}</li>)}</ul><div className="mt-8 border-t border-white/10 pt-6"><p className="text-sm leading-6 text-zinc-400">Not sure which setup is right? Share your requirement and we can discuss the suitable options.</p></div></div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">A practical approach</p><h2 className="mt-3 text-3xl font-bold">Designed around your site and use case.</h2><p className="mt-5 leading-7 text-zinc-400">The right solution depends on your location, scale, existing equipment and operational needs. We begin by understanding those details before recommending a scope.</p><div className="mt-8 space-y-4">{["Requirement discussion","Site and scope review","Solution and estimate","Implementation and handover"].map((step,i)=><div key={step} className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#1a201c] p-4"><span className="font-bold text-amber-300">0{i+1}</span><span className="text-sm text-zinc-200">{step}</span></div>)}</div></div><div id="enquiry"><LeadForm defaultService={service.short}/></div></section>
    </main>
    <Footer/>
    <WhatsAppLink className="fixed bottom-5 right-5 z-40 rounded-full bg-emerald-500 px-5 py-4 text-sm font-bold text-white shadow-xl hover:bg-emerald-400" message={`Hello Netcraaftix, I am interested in ${service.short} in Hyderabad. Please contact me.`}>WhatsApp us</WhatsAppLink>
  </div>;
}

export { HomePage, ServiceLandingPage };
