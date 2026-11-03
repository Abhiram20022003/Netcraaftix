import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronRight, Code2, Computer,
  GraduationCap, Laptop, Menu, Network, Phone, Printer, ShieldCheck, Video, X,
  Building2, Hospital, Factory, School, Home, BriefcaseBusiness, Wifi, Monitor,
  Cable, ClipboardCheck, Headset, Server, Camera, Sparkles
} from "lucide-react";

const PHONE = "918977118189";
const PHONE_DISPLAY = "+91 89771 18189";
const EMAIL = "info@netcraaftix.co.in";
const WA_BASE = `https://wa.me/${PHONE}?text=`;

type Service = {
  slug: string;
  title: string;
  cardTitle: string;
  summary: string;
  intro: string;
  image: string;
  icon: typeof Video;
  keywords: string[];
  solutions: string[];
  sectors: string[];
  scale: string[];
  faqs: { q: string; a: string }[];
};

const services: Service[] = [
  {
    slug: "cctv-installation-hyderabad",
    title: "CCTV Camera Installation in Hyderabad",
    cardTitle: "CCTV & Video Surveillance",
    summary: "CCTV planning, supply coordination, installation and maintenance for small premises, growing businesses and large multi-site facilities.",
    intro: "From a few cameras for a home or shop to a structured surveillance system for hospitals, colleges, factories and commercial campuses, we help plan camera coverage, recording, storage and remote access around the site.",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1400&q=85",
    icon: Video,
    keywords: ["CCTV installation Hyderabad", "CCTV camera installation near me", "commercial CCTV installation", "industrial CCTV surveillance", "hospital CCTV camera system", "college CCTV installation", "IP camera installation Hyderabad", "DVR NVR setup"],
    solutions: ["IP and HD CCTV camera installation", "DVR / NVR recording and storage setup", "Remote viewing and mobile access configuration", "Indoor, outdoor and perimeter camera planning", "Existing CCTV upgrade, repair and maintenance", "Multi-building and multi-location surveillance planning"],
    sectors: ["Hospitals & healthcare facilities", "Colleges, schools & campuses", "Industries, factories & warehouses", "Offices & commercial buildings", "Shops, showrooms & retail spaces", "Apartments, homes & gated communities"],
    scale: ["Small: homes, shops, clinics and small offices", "Medium: schools, offices, showrooms and multi-floor buildings", "Large: hospitals, colleges, factories, warehouses and campuses"],
    faqs: [
      { q: "Do you handle small and large CCTV projects?", a: "Yes. We can discuss compact installations as well as medium and large projects. The final scope depends on site size, camera count, coverage requirements and location." },
      { q: "Can you install CCTV in hospitals, colleges and industries?", a: "We support CCTV project discussions for healthcare facilities, educational campuses, industrial premises, warehouses and commercial properties." },
      { q: "Can I view cameras remotely?", a: "Remote viewing can be configured where the selected camera system, network and internet connection support it." }
    ]
  },
  {
    slug: "networking-solutions-hyderabad",
    title: "Networking Solutions & Structured Cabling in Hyderabad",
    cardTitle: "Networking & Wi-Fi",
    summary: "Reliable wired and wireless networking for offices, institutions, commercial buildings and industrial environments.",
    intro: "Plan a network that supports the people, devices and applications in your organisation. We help with structured cabling, LAN setup, Wi-Fi coverage, switches, routers and network expansion.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
    icon: Network,
    keywords: ["networking company Hyderabad", "LAN setup Hyderabad", "office networking solutions", "structured cabling Hyderabad", "WiFi installation for office", "network rack setup", "industrial networking"],
    solutions: ["LAN and structured network cabling", "Office and campus Wi-Fi access points", "Router, switch and network rack installation", "Network expansion and connectivity planning", "Basic network troubleshooting and support", "CCTV, printer and workstation network integration"],
    sectors: ["Corporate offices", "Schools & colleges", "Hospitals & clinics", "Factories & industrial units", "Retail stores & warehouses", "Commercial buildings"],
    scale: ["Small: single office, shop or clinic", "Medium: multi-floor office, school or branch", "Large: campus, industrial facility or multi-building network"],
    faqs: [
      { q: "Can you set up networking for a new office?", a: "Yes. We can discuss cabling, Wi-Fi coverage, switches, routers and connectivity based on your floor plan and device count." },
      { q: "Do you support campus and industrial networks?", a: "We can review medium and large networking requirements for campuses, offices and industrial facilities." },
      { q: "Can you extend an existing network?", a: "Yes. Share your current setup, coverage gaps and expansion requirement so the scope can be reviewed." }
    ]
  },
  {
    slug: "computers-printers-laptops-hyderabad",
    title: "Computers, Laptops & Printer Solutions in Hyderabad",
    cardTitle: "Computers, Laptops & Printers",
    summary: "Desktop computers, laptops, printers, peripherals and IT deployment support for businesses and institutions.",
    intro: "Equip teams, labs, classrooms and offices with the right computing devices and printing setup. We discuss quantity, configuration, intended use, deployment and support for small orders through larger institutional requirements.",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1400&q=85",
    icon: Laptop,
    keywords: ["computer supplier Hyderabad", "laptop supply for offices", "printer sales and installation Hyderabad", "bulk computers for colleges", "desktop computers for business", "IT hardware procurement Hyderabad", "computer lab setup"],
    solutions: ["Desktop computer and laptop supply enquiries", "Printer and multifunction printer setup", "Computer lab and office workstation deployment", "Monitors, accessories and peripherals", "Device configuration and installation", "Bulk IT hardware requirement coordination"],
    sectors: ["Colleges & computer laboratories", "Schools & training centres", "Corporate offices & businesses", "Hospitals & healthcare administration", "Government and institutional offices", "Retail and commercial operations"],
    scale: ["Small: individual systems and small offices", "Medium: department, branch and classroom deployments", "Large: computer labs, institutions and multi-site rollouts"],
    faqs: [
      { q: "Can I enquire about bulk computers and laptops?", a: "Yes. Share the quantity, preferred configuration, delivery location and intended use for a requirement review." },
      { q: "Do you provide printer installation?", a: "Printer setup and connectivity support can be discussed along with your printer and workstation requirements." },
      { q: "Can you plan a computer lab for a college?", a: "Yes. We can discuss lab size, number of systems, networking, printers and deployment requirements." }
    ]
  },
  {
    slug: "smart-classroom-displays-hyderabad",
    title: "Smart Classroom Displays & Interactive Panels in Hyderabad",
    cardTitle: "Smart Classroom Displays",
    summary: "Interactive flat panels, classroom TVs and display solutions for colleges, schools, training centres and institutions.",
    intro: "Create connected teaching and presentation spaces with classroom displays, interactive panels and large-format screens. We help institutions discuss room size, screen requirements, connectivity and installation planning.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=85",
    icon: GraduationCap,
    keywords: ["smart classroom solutions Hyderabad", "interactive flat panel for colleges", "classroom TV installation", "smart board installation Hyderabad", "college digital classroom", "interactive display installation", "large screen for classroom"],
    solutions: ["Interactive flat panel and smart board installation", "Classroom TV and large display setup", "Wall mounting and installation coordination", "HDMI, network and presentation connectivity", "Multi-classroom and campus deployment planning", "Basic user orientation and handover"],
    sectors: ["Engineering & degree colleges", "Schools & junior colleges", "Universities & training institutes", "Coaching and skill centres", "Conference and seminar rooms", "Corporate learning spaces"],
    scale: ["Small: single classroom or meeting room", "Medium: department or multiple classroom setup", "Large: college-wide and multi-building deployments"],
    faqs: [
      { q: "Do you support multiple classrooms?", a: "Yes. We can discuss phased or multi-room display requirements based on the number of classrooms and campus layout." },
      { q: "Can you install classroom TVs as well as smart boards?", a: "Yes. We can discuss standard classroom displays, TVs and interactive flat panels according to teaching needs and budget." },
      { q: "Can you handle college-scale requirements?", a: "We can review large institutional requirements, quantities, room layouts and installation schedules." }
    ]
  },
  {
    slug: "software-development-hyderabad",
    title: "Custom Software & Website Development in Hyderabad",
    cardTitle: "Software & Website Development",
    summary: "Business websites, web applications, portals, automation and custom software for organisations.",
    intro: "Build practical digital tools around your business process. From a professional company website to internal dashboards, portals and workflow applications, we help turn requirements into a clear development scope.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    icon: Code2,
    keywords: ["software development company Hyderabad", "website development company Hyderabad", "custom software development", "business web application development", "CRM ERP development Hyderabad", "website design for business"],
    solutions: ["Business and corporate website development", "Custom web applications and dashboards", "Customer, employee and admin portals", "Workflow automation and API integration", "Database-backed applications", "Website maintenance and improvement"],
    sectors: ["Small and medium businesses", "Educational institutions", "Service companies & consultancies", "Retail and distribution", "Startups and growing teams", "Professional organisations"],
    scale: ["Small: business websites and landing pages", "Medium: portals, dashboards and workflow tools", "Large: custom applications and multi-user platforms"],
    faqs: [
      { q: "Can you develop a website for my company?", a: "Yes. Share your business, pages required, preferred features and timeline for a project discussion." },
      { q: "Do you build custom business software?", a: "We discuss custom web applications, dashboards, portals and workflow automation based on the problem you want to solve." },
      { q: "Can you maintain an existing website?", a: "Existing website improvements and maintenance can be reviewed after checking the current platform and requirements." }
    ]
  },
  {
    slug: "biometric-attendance-hyderabad",
    title: "Biometric Attendance & Access Control in Hyderabad",
    cardTitle: "Biometric & Access Control",
    summary: "Employee attendance, fingerprint and face recognition devices, and access-control setup.",
    intro: "Make attendance and entry management easier with biometric devices and access-control solutions suited to your workplace or institution.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85",
    icon: ShieldCheck,
    keywords: ["biometric attendance system Hyderabad", "fingerprint attendance machine", "face recognition attendance system", "office access control installation"],
    solutions: ["Fingerprint and face attendance devices", "Door access control setup", "Attendance software configuration", "Device connectivity and integration", "Installation and user handover"],
    sectors: ["Offices & businesses", "Schools & colleges", "Factories & warehouses", "Hospitals & clinics", "Commercial buildings"],
    scale: ["Small: single entry and small teams", "Medium: offices and institutional departments", "Large: multi-entry and multi-building facilities"],
    faqs: [
      { q: "Can biometric attendance be used across departments?", a: "The suitable configuration depends on device compatibility, employee count and reporting requirements." },
      { q: "Do you install access control systems?", a: "Yes. Share the number of doors, entry points and access requirements for a project discussion." }
    ]
  }
];

const industries = [
  { title: "Hospitals & healthcare", detail: "CCTV, network connectivity, workstations, printers and controlled access.", icon: Hospital },
  { title: "Colleges & universities", detail: "Campus surveillance, smart classrooms, computer labs and networking.", icon: School },
  { title: "Industries & factories", detail: "Perimeter surveillance, structured networks and operational IT infrastructure.", icon: Factory },
  { title: "Commercial properties", detail: "Offices, retail stores, showrooms, warehouses and business centres.", icon: Building2 },
  { title: "Homes & residential", detail: "Home CCTV, Wi-Fi and practical technology installation.", icon: Home },
  { title: "Institutions & enterprises", detail: "Coordinated IT hardware and multi-site technology requirements.", icon: BriefcaseBusiness }
];

function track(event: string, details: Record<string, string> = {}) {
  const w = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...details });
}

function WhatsAppButton({ children = "WhatsApp our team", message = "Hello Netcraaftix, I would like to discuss a project requirement.", className = "" }: { children?: ReactNode; message?: string; className?: string }) {
  return <a className={className} href={WA_BASE + encodeURIComponent(message)} target="_blank" rel="noreferrer" onClick={() => track("whatsapp_click", { lead_channel: "whatsapp" })}>{children}</a>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    ["Services", "/#services"], ["Industries", "/#industries"], ["About", "/#about"], ["Contact", "/#contact"]
  ];
  return <header className="site-header">
    <div className="container header-inner">
      <Link to="/" className="brand" aria-label="Netcraaftix home">
        <img className="brand-logo" src="/netcraaftix-logo.svg" alt="Netcraaftix — Technology & Infrastructure" />
      </Link>
      <nav className="desktop-nav">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
      <a className="button button-primary header-cta" href="/#contact">Discuss a project <ArrowUpRight size={17}/></a>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </div>
    {menuOpen && <nav className="mobile-nav">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a href="/#contact" onClick={() => setMenuOpen(false)}>Request a quote</a></nav>}
  </header>;
}

function EnquiryForm({ initialService = "" }: { initialService?: string }) {
  const [form, setForm] = useState({ name: "", phone: "", organisation: "", location: "Hyderabad", service: initialService, scale: "", details: "" });
  const [consent, setConsent] = useState(true);
  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(v => ({ ...v, [e.target.name]: e.target.value }));
  function submit(e: FormEvent) {
    e.preventDefault();
    if (!consent) return;
    const msg = [
      "Website enquiry - Netcraaftix", `Name: ${form.name}`, `Phone: ${form.phone}`,
      `Organisation: ${form.organisation || "Not provided"}`, `Location: ${form.location}`,
      `Service: ${form.service}`, `Project scale: ${form.scale || "To be discussed"}`,
      `Requirement: ${form.details || "Please contact me"}`
    ].join("\n");
    track("generate_lead", { lead_channel: "whatsapp", service: form.service });
    window.open(WA_BASE + encodeURIComponent(msg), "_blank", "noopener,noreferrer");
  }
  return <form className="enquiry-card" onSubmit={submit}>
    <div className="eyebrow">Project enquiry</div><h3>Tell us about your requirement.</h3>
    <p className="form-intro">A few details help us understand the scale and connect you with the right team.</p>
    <div className="form-grid">
      <label>Name *<input required name="name" value={form.name} onChange={update} placeholder="Your full name"/></label>
      <label>Phone number *<input required name="phone" type="tel" inputMode="tel" pattern="[+0-9() -]{8,18}" value={form.phone} onChange={update} placeholder="+91 XXXXX XXXXX"/></label>
      <label>Company / institution<input name="organisation" value={form.organisation} onChange={update} placeholder="Organisation name"/></label>
      <label>Project location<input name="location" value={form.location} onChange={update} placeholder="City / area"/></label>
      <label className="full-field">Service required *<select required name="service" value={form.service} onChange={update}><option value="">Select a service</option>{services.map(s => <option key={s.slug} value={s.cardTitle}>{s.cardTitle}</option>)}<option value="Multiple services / turnkey IT">Multiple services / turnkey IT</option></select></label>
      <label className="full-field">Project size<select name="scale" value={form.scale} onChange={update}><option value="">Select project size</option><option>Small requirement</option><option>Medium scale</option><option>Large scale / multi-site</option><option>Need guidance</option></select></label>
      <label className="full-field">Project details<textarea name="details" value={form.details} onChange={update} rows={3} placeholder="Quantity, building type, number of cameras / systems / classrooms, timeline..."/></label>
    </div>
    <label className="consent"><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)}/> I agree to be contacted about this enquiry.</label>
    <button type="submit" disabled={!consent} className="button button-primary form-submit">Send enquiry on WhatsApp <ArrowRight size={18}/></button>
    <p className="form-note">Your message opens in WhatsApp. No payment is required to submit an enquiry.</p>
  </form>;
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return <article className="service-card">
    <Link to={`/${service.slug}`} className="service-image-link" aria-label={service.cardTitle}>
      <img src={service.image} alt={service.cardTitle + " service in Hyderabad"} loading="lazy"/>
      <span className="service-image-icon"><Icon size={22}/></span>
    </Link>
    <div className="service-card-body"><h3><Link to={`/${service.slug}`}>{service.cardTitle}</Link></h3><p>{service.summary}</p><Link className="text-link" to={`/${service.slug}`}>Explore solution <ArrowRight size={16}/></Link></div>
  </article>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div><Link to="/" className="brand footer-brand"><img className="brand-logo" src="/netcraaftix-logo.svg" alt="Netcraaftix — Technology & Infrastructure" /></Link><p className="footer-description">Technology solutions for businesses, institutions and homes. It’s all about perfection.</p></div>
    <div><h4>Explore services</h4>{services.slice(0,5).map(s => <Link key={s.slug} to={`/${s.slug}`}>{s.cardTitle}</Link>)}</div>
    <div><h4>Contact</h4><a href={`tel:+${PHONE}`} onClick={() => track("phone_click", { lead_channel: "phone" })}>{PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>Meerpet, Hyderabad, Telangana</span><Link to="/privacy-policy">Privacy policy</Link></div>
  </div><div className="container footer-bottom">© {new Date().getFullYear()} Netcraaftix. All rights reserved.</div></footer>;
}

function HomePage() {
  useEffect(() => { document.title = "Netcraaftix | CCTV, Networking, IT Hardware & Software Solutions Hyderabad"; }, []);
  return <div className="corporate-site"><Header/><main>
    <section className="hero-section">
      <div className="hero-photo" role="img" aria-label="Modern technology infrastructure and server equipment"/>
      <div className="hero-overlay"/>
      <div className="container hero-content">
        <div className="hero-copy"><div className="eyebrow eyebrow-light"><span/> Technology infrastructure partner · Hyderabad</div>
          <h1>Technology that keeps your <em>organisation connected, secure and moving.</em></h1>
          <p>From CCTV surveillance and business networking to computers, classroom displays and custom software — one team to plan and support your technology requirements.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Discuss your project <ArrowRight size={18}/></a><a className="button button-glass" href={`tel:+${PHONE}`} onClick={() => track("phone_click", { lead_channel: "phone" })}><Phone size={17}/> {PHONE_DISPLAY}</a></div>
          <div className="hero-proof"><span><Check size={15}/> Small to enterprise-scale projects</span><span><Check size={15}/> Business & institutional solutions</span></div>
        </div>
        <div className="hero-side-card"><div className="side-card-icon"><Sparkles size={21}/></div><span className="side-card-label">One technology partner</span><strong>From planning to installation and support.</strong><div className="side-card-rule"/><div className="side-card-tags"><span>CCTV</span><span>Networking</span><span>IT Hardware</span><span>Smart Classrooms</span><span>Software</span></div></div>
      </div>
      <div className="hero-bottom-blur"/>
    </section>

    <section className="trust-strip"><div className="container trust-inner"><span>Supporting technology needs across</span><strong>Business</strong><i/><strong>Education</strong><i/><strong>Healthcare</strong><i/><strong>Industry</strong><i/><strong>Residential</strong></div></section>

    <section id="services" className="section section-services"><div className="container">
      <div className="section-heading"><div><div className="eyebrow">Our capabilities</div><h2>Complete technology solutions.<br/><em>One accountable team.</em></h2></div><p>Choose a service to explore what we can plan, supply, install or develop for your organisation.</p></div>
      <div className="services-grid">{services.map(s => <ServiceCard key={s.slug} service={s}/>)}</div>
    </div></section>

    <section className="feature-band"><div className="container feature-layout"><div className="feature-image"><img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85" alt="Technology professional working on an installation" loading="lazy"/><div className="image-caption"><span>Project approach</span><strong>Planned around your site, scale and operations.</strong></div></div><div className="feature-copy"><div className="eyebrow">Built for your scale</div><h2>From a single room to a <em>large campus.</em></h2><p>Different sites need different solutions. We consider your building, users, equipment, connectivity, future expansion and budget before shaping the scope.</p><div className="scale-list"><div><span>01</span><p><strong>Small scale</strong>Homes, clinics, shops, small offices and individual classrooms.</p></div><div><span>02</span><p><strong>Medium scale</strong>Multi-floor offices, schools, branches, departments and showrooms.</p></div><div><span>03</span><p><strong>Large scale</strong>Hospitals, colleges, factories, warehouses and multi-building campuses.</p></div></div><a href="#contact" className="text-link">Discuss your project scale <ArrowRight size={16}/></a></div></div></section>

    <section id="industries" className="section industries-section"><div className="container"><div className="section-heading"><div><div className="eyebrow">Industries we support</div><h2>Solutions for <em>everyday operations.</em></h2></div><p>Technology requirements vary by sector. We tailor discussions around the site, team and operational priorities.</p></div><div className="industry-grid">{industries.map(({title,detail,icon:Icon})=><article key={title} className="industry-card"><span><Icon size={23}/></span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>

    <section id="about" className="about-section"><div className="container about-layout"><div><div className="eyebrow">Why Netcraaftix</div><h2>Clear communication.<br/><em>Practical technology.</em></h2><p>We bring multiple technology requirements together so you can discuss infrastructure, devices, installation and software with a single point of contact.</p></div><div className="about-points"><div><ClipboardCheck/><span><strong>Understand the requirement</strong><small>We start with your site, quantity, usage and priorities.</small></span></div><div><Cable/><span><strong>Plan the right scope</strong><small>Recommendations are based on the actual project needs.</small></span></div><div><Headset/><span><strong>Support beyond setup</strong><small>Handover and available maintenance options are discussed.</small></span></div></div></div></section>

    <section id="contact" className="contact-section"><div className="container contact-layout"><div className="contact-copy"><div className="eyebrow eyebrow-light">Start a conversation</div><h2>Tell us what your site <em>needs next.</em></h2><p>Share the service, location and approximate project size. Our team can follow up to understand your requirement.</p><div className="contact-detail"><Phone/><span><small>Call our team</small><a href={`tel:+${PHONE}`} onClick={() => track("phone_click", { lead_channel: "phone" })}>{PHONE_DISPLAY}</a></span></div><div className="contact-detail"><Headset/><span><small>Email</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></div><div className="contact-detail"><Building2/><span><small>Location</small><strong>Meerpet, Hyderabad, Telangana</strong></span></div></div><EnquiryForm/></div></section>
  </main><Footer/><WhatsAppButton className="floating-whatsapp"/></div>;
}

function ServicePage() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "");
  const service = services.find(s => s.slug === slug) || services[0];
  const Icon = service.icon;
  useEffect(() => {
    document.title = `${service.title} | Netcraaftix`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", `${service.summary} Contact Netcraaftix for ${service.cardTitle.toLowerCase()} in Hyderabad and Telangana.`);
    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) { keywords = document.createElement("meta"); keywords.setAttribute("name", "keywords"); document.head.appendChild(keywords); }
    keywords.setAttribute("content", service.keywords.join(", "));
  }, [service]);
  return <div className="corporate-site"><Header/><main>
    <section className="service-hero"><div className="service-hero-image"><img src={service.image} alt={service.cardTitle + " project"} fetchPriority="high"/></div><div className="service-hero-shade"/><div className="container service-hero-content"><Link to="/" className="back-link">Home <ChevronRight size={14}/> Services</Link><div className="service-title-icon"><Icon size={24}/></div><div className="eyebrow eyebrow-light">Netcraaftix · Hyderabad, Telangana</div><h1>{service.title}</h1><p>{service.intro}</p><div className="hero-actions"><a className="button button-primary" href="#enquiry">Request a project quote <ArrowRight size={18}/></a><a className="button button-glass" href={`tel:+${PHONE}`} onClick={() => track("phone_click", { lead_channel: "phone", service: service.cardTitle })}><Phone size={17}/> Call {PHONE_DISPLAY}</a></div></div></section>
    <section className="section service-detail-section"><div className="container service-detail-layout"><div><div className="eyebrow">What we offer</div><h2>Solutions shaped around <em>your requirement.</em></h2><p className="section-lead">{service.summary}</p><div className="solution-list">{service.solutions.map((item,i)=><div key={item}><span><Check size={17}/></span><p>{item}</p></div>)}</div></div><aside className="service-aside"><div className="aside-image"><img src={service.image} alt={service.cardTitle + " installation"} loading="lazy"/></div><h3>Need a solution for your site?</h3><p>Tell us the building type, location, quantity and project timeline.</p><a href="#enquiry" className="button button-primary">Talk to our team <ArrowRight size={17}/></a></aside></div></section>
    <section className="sector-section"><div className="container"><div className="eyebrow">Project environments</div><h2>For small, medium and <em>large-scale requirements.</em></h2><div className="sector-grid">{service.sectors.map((s,i)=><div key={s}><span>0{i+1}</span><strong>{s}</strong></div>)}</div><div className="scale-callout">{service.scale.map((s,i)=><div key={s}><Check size={17}/>{s}</div>)}</div></div></section>
    <section className="section service-detail-section"><div className="container"><div className="eyebrow">Common questions</div><h2>What customers <em>often ask.</em></h2><div className="faq-list">{service.faqs.map(({q,a})=><details key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}</div></div></section>
    <section id="enquiry" className="contact-section"><div className="container contact-layout"><div className="contact-copy"><div className="eyebrow eyebrow-light">Request a quote</div><h2>Let's plan your <em>{service.cardTitle.toLowerCase()}.</em></h2><p>Send your details and project scope. We will follow up to discuss the next step.</p><div className="contact-detail"><Phone/><span><small>Call our team</small><a href={`tel:+${PHONE}`}>{PHONE_DISPLAY}</a></span></div><div className="contact-detail"><Building2/><span><small>Service base</small><strong>Meerpet, Hyderabad, Telangana</strong></span></div></div><EnquiryForm initialService={service.cardTitle}/></div></section>
  </main><Footer/><WhatsAppButton message={`Hello Netcraaftix, I am interested in ${service.cardTitle}. Please contact me.`} className="floating-whatsapp"/></div>;
}

export { HomePage, ServicePage };
