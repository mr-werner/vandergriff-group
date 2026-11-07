import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Menu, Phone, Printer, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/vga-logo.png";
import hero from "./assets/hero-horseshoe.jpg";
import office from "./assets/office.jpg";
import sketch from "./assets/sketch.jpg";
import p125 from "./assets/p125.jpg";
import p126 from "./assets/p126.jpg";
import p129 from "./assets/p129.jpg";
import p130 from "./assets/p130.jpg";
import p131 from "./assets/p131.jpg";
import p133 from "./assets/p133.jpg";
import p134 from "./assets/p134.jpg";
import p135 from "./assets/p135.jpg";
import p136 from "./assets/p136.jpg";
import p139 from "./assets/p139.jpg";
import p142 from "./assets/p142.jpg";
import p143 from "./assets/p143.jpg";
import p144 from "./assets/p144.jpg";
import p145 from "./assets/p145.jpg";
import p151 from "./assets/p151.jpg";
import p152 from "./assets/p152.jpg";
import p153 from "./assets/p153.jpg";
import p156 from "./assets/p156.jpg";
import p157 from "./assets/p157.jpg";

// ---------------------------------------------------------------- Content (all facts from vandergriff-group.com)
const COMPANY = "Vandergriff Group Architects";
const ABBR = "vga";
const END_DATE = "2026-12-12T23:59:59-06:00";
const PHONE = "(432) 687-0781";
const PHONE_HREF = "tel:+14326870781";
const FAX = "(432) 687-5205";
const EMAIL = "wjparsons@vandergriff-group.com";
const ADDRESS = ["312 North Big Spring Street, Suite 100", "Midland, Texas 79701"];
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=312+N+Big+Spring+St+Suite+100+Midland+TX+79701";

const SECTORS = [
  { id: "all", name: "All work" },
  { id: "government", name: "Government", text: "Professional services to federal, state and local governing bodies for more than three decades.", clients: ["Texas Department of Public Safety", "Texas Department of Transportation", "Texas State General Services Commission", "Texas Department of Criminal Justice", "Texas Youth Commission", "Texas Workforce Commission", "Goodfellow Air Force Base", "City of Midland", "City of Odessa", "Midland County", "Martin County", "Andrews County", "Glasscock County"] },
  { id: "academic", name: "Academic", text: "Innovative educational facilities for colleges and school districts across the region.", clients: ["Midland College", "Odessa College", "Midland ISD (repeat client since 1983)", "The University of Texas System"] },
  { id: "healthcare", name: "Healthcare", text: "Work spanning more than 50 medical facility projects: 24 diagnostic imaging and clinical suites, 11 medical office buildings and multiple hospital building programs, designed to NFPA 101 and JCAHO Statement of Conditions standards.", clients: [] },
  { id: "religious", name: "Religious", text: "Vibrant church communities begin with quality spaces for people. The building environment can advance the quality of a church's life.", clients: [] },
  { id: "corporate", name: "Corporate", text: "Corporate architecture has long been a strong market for the firm.", clients: ["ExxonMobil", "AT&T", "Ashland Chemical", "Warren Equipment", "Schlumberger", "Weaver", "First Capital Bank", "University Lands"] },
  { id: "housing", name: "Residential & multi-housing", text: "Homes, apartment communities and supportive housing.", clients: [] },
];

const PROJECTS = [
  { id: 151, img: p151, sector: "government", name: "Midland County Pavilion", city: "Midland, TX", client: "Midland County", size: "153,000 sq ft", done: "February 2015", text: "A 150,000+ sq ft entertainment venue added to the iconic Horseshoe Arena, estimated around $26 million. It hosts concerts for 2,862 to 5,619 patrons, 52,000 sq ft trade shows and regional conventions with movable walls, plus an amphitheater with floor and lawn seating for up to 4,500. The configuration is unique among American venues of its size." },
  { id: 125, img: p125, sector: "government", name: "Midland County Horseshoe Multi-Purpose Facility", city: "Midland, TX", client: "Midland County", size: "143,000 sq ft", done: "January 2006", text: "Three buildings on a 126-acre site: an equestrian arena with fixed seating for 1,000, an exhibits and foyer building, a 200-stall livestock pavilion, and classrooms and community spaces. The 28-foot steel horseshoe at the entrance, conceived by Mr. Vandergriff, is now iconically associated with this West Texas community." },
  { id: 153, img: p153, sector: "government", name: "Show of Support: Hero Plaza", city: "Midland, TX", client: "Show of Support", size: "17,883 sq ft", done: "Fall 2015", text: "In front of the Midland County Annex Building, a memorial honoring the veterans of our community who lost their lives in the November 15, 2012 train crash. The design is simple and subtle; some of its most interesting aspects show at night through site lighting." },
  { id: 130, img: p130, sector: "government", name: "Downtown Redevelopment", city: "Midland, TX", client: "City of Midland", size: "Multiple phases", done: "In progress", text: "Beginning in 2003, the City asked VGA for a fresh renaissance of vision for downtown, centered on the pedestrian. Phases include the Downtown Redevelopment Guidelines (2003), Wall Street Redevelopment (2006) and Centennial Plaza (2007 and 2011)." },
  { id: 139, img: p139, sector: "government", name: "MLK Community Center", city: "Midland, TX", client: "City of Midland", size: "23,000 sq ft", done: "January 2006", text: "Renovation of the Martin Luther King Jr. Community Center into a performing arts facility with a stage, gymnasium seating, exhibit space, recreation spaces and concessions, funded by a $750,000 Texas Parks & Wildlife grant and $500,000 from the City." },
  { id: 129, img: p129, sector: "government", name: "Glasscock County Exhibit Building", city: "Garden City, TX", client: "Glasscock County", size: "18,000 sq ft", done: "", text: "A livestock exhibit and multi-purpose facility next to the courthouse, with meeting rooms, a show ring and holding area. The pre-engineered building gives economical open spans; its exterior is styled after the adjacent 1910 courthouse." },
  { id: 126, img: p126, sector: "healthcare", name: "Martin County Hospital", city: "Stanton, TX", client: "Martin County Hospital", size: "60,000 sq ft", done: "March 2012", text: "A $24 million replacement for a 50-year-old critical access hospital: 18 medical/surgical beds, emergency treatment, radiology, surgical suites and complete dietary support. VGA was lead design professional." },
  { id: 136, img: p136, sector: "healthcare", name: "Women's Center of the Permian Basin", city: "Odessa, TX", client: "John R. Molland, MD", size: "8,708 sq ft", done: "2002", text: "A contemporary free-standing obstetric practice in the Odessa medical district. Soft lines and curvilinear shapes carry inside to exams, procedure rooms and offices. Completed for $1.3 million." },
  { id: 156, img: p156, sector: "healthcare", name: "Pueblo Community Health Center", city: "Pueblo, CO", client: "Pueblo Community Health Center", size: "6,000 sq ft", done: "October 2014", text: "A multi-level addition of exam rooms and mental health offices built with little disruption to daily patient care, finished within budget and a month ahead of schedule." },
  { id: 152, img: p152, sector: "academic", name: "UTPB Nursing Simulation Center", city: "Odessa, TX", client: "The University of Texas System", size: "", done: "September 2012", text: "A medical simulation lab in UTPB's main Mesa Building with surgery rooms, a pediatric center, emergency treatment rooms, primary care, storage and teaching spaces." },
  { id: 142, img: p142, sector: "academic", name: "Midland College", city: "Midland, TX", client: "Midland College", size: "Multiple projects", done: "Ongoing", text: "Several assignments for Midland College, including the F. Marie Hall SimLife Center, a medical simulation department that recreates hospital environments." },
  { id: 133, img: p133, sector: "academic", name: "Midland ISD Science Classrooms", city: "Midland, TX", client: "Midland ISD", size: "15 science labs", done: "", text: "District-wide reconstruction of secondary science facilities across three high school and freshman campuses: 15 labs with physics, chemistry and biology stations plus lecture space, for $2.5 million. Other MISD work ranges up to 96,000 sq ft and $21 million." },
  { id: 134, img: p134, sector: "religious", name: "Stonegate Fellowship Church, Phase I", city: "Midland, TX", client: "Stonegate Fellowship Church", size: "64,000 sq ft, two stories", done: "May 2008", text: "A 20-year campus plan whose first phase is a children's education building of six themed age-group pods around open gathering areas, with 20-foot corridors for large crowds. Future phases include a 2,000-seat worship center." },
  { id: 135, img: p135, sector: "religious", name: "First United Methodist Church", city: "Midland, TX", client: "First United Methodist Church", size: "", done: "October 2004", text: "Master site planning that closed a block of Ohio Avenue to unify the downtown campus, with renovated preschool rooms, a two-story classroom addition, an atrium enclosure and administrative offices." },
  { id: 144, img: p144, sector: "religious", name: "Golf Course Road Church of Christ", city: "Midland, TX", client: "Golf Course Road Church of Christ", size: "$9.8M education building", done: "", text: "From a 1995 VGA master plan: a two-story educational building linked to the worship center by wide corridors with open rotundas at the crossings, ready for future phases." },
  { id: 143, img: p143, sector: "corporate", name: "Bush Tennis Center", city: "Midland, TX", client: "Bush Tennis Center", size: "1 center court, 18 competition, 8 jump-start courts", done: "Fall 2011", text: "VGA led architecture, MEP, structural and site work for classroom, restroom and maintenance buildings, the courts and a center court grandstand, built in a single summer-to-fall season." },
  { id: 157, img: p157, sector: "corporate", name: "Midland Shared Spaces", city: "Midland, TX", client: "Midland Shared Spaces", size: "42,573 sq ft", done: "January 2014", text: "An existing two-story office building reworked to house several non-profits together: 96% of interior partitions removed, all-new mechanical, plumbing, electrical and LED lighting, board and community rooms and a commercial kitchen." },
  { id: 131, img: p131, sector: "housing", name: "Mission Green Apartment Homes", city: "Odessa, TX", client: "", size: "102 units (Phase I)", done: "", text: "One-, two- and three-bedroom units with connecting private garages, energy-efficient planning, a clubhouse, pool and outdoor recreation; Phase II adds 102 more units." },
  { id: 145, img: p145, sector: "housing", name: "Wood Residence", city: "Vista La Paz, Odessa, TX", client: "", size: "12,000 sq ft", done: "", text: "A traditional home with a grand room, butler's pantry and formal dining framed toward the yards, a secluded master suite, a guest suite and a basement theater." },
];

const SERVICES = ["Economic Feasibility Analysis", "Land and Urban Planning", "Energy Analysis", "Site Selection and Evaluation", "Cost Estimating", "Programming", "Design Development", "Construction Documentation", "Construction Administration"];
const PRACTICE = ["Architecture", "Design Development", "Cost Estimating", "Interior Design", "Strategic Consulting", "Planning"];

const VALUES = [
  ["Innovating", "Finding new and better ways of doing things is always encouraged, whether it's a business process, a design concept or a technical time-saver."],
  ["Fostering strong relationships", "New and repeat clients are vital. Open communication, dedication to the client's program and understanding what motivates them keep clients coming back."],
  ["Sharing knowledge", "Taking time to mentor others is vital. Much like design itself, everyone benefits from looking at things from a different perspective."],
  ["Advocating for our clients", "Becoming an expert in our clients' business and market shows dedication and pride in what we do."],
];

const PRINCIPALS = [
  { name: "William J. Parsons, AIA", title: "Principal Architect · Licensed in TX", edu: "Texas Tech University, Bachelor of Architecture, 1978", text: "Focused on construction documentation of large institutional architecture, with deep knowledge of state and federal codes and life safety research. He has helped healthcare institutions, school districts and municipal and state agencies plan for future building needs.", email: "wjparsons@vandergriff-group.com" },
  { name: "Mark R. Pelletier", title: "Principal Architect · Licensed in TX, CO, NM", edu: "Boston Architectural College, B.Arch, 1993 · Worcester State College, B.S. Geography/Geology, 1984", text: "More than 20 years in construction with a focus on healthcare and commercial work, often serving as both project manager and architect on projects up to $25 million. LEED and NCARB certified, with a record of on-budget, on-time delivery.", email: "mpelletier@vandergriff-group.com" },
];

const TEAM = [
  ["Brian Polaski", "Project Architect · Licensed in CO and WA", "bpolaski@vandergriff-group.com"],
  ["Justin Lyon", "Project Architect · Licensed in TX", "justin@vandergriff-group.com"],
  ["Tony Gore", "Project Manager", "tgore@vandergriff-group.com"],
  ["Victor Radej", "Project Manager", "vradej@vandergriff-group.com"],
  ["Randall Thompson", "Intern Architect", "rthompson@vandergriff-group.com"],
  ["Jeremy Bentz", "AutoCAD Specialist", "jbentz@vandergriff-group.com"],
];

const sheetNo = (i) => `A-${String(101 + i)}`;

// ---------------------------------------------------------------- Pieces
function Header() {
  const [open, setOpen] = useState(false);
  const links = [["#work", "Work"], ["#services", "Services"], ["#firm", "Firm"], ["#people", "People"], ["#contact", "Contact"]];
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label="Vandergriff Group Architects home"><img src={logo} alt="Vandergriff Group Architects, PC" width="432" height="98" /></a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {links.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="nav-call" href={PHONE_HREF}><Phone size={15} /> {PHONE}</a>
        </nav>
        <button type="button" className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="label">Architects · Midland, Texas · Since 1979</p>
          <h1>Building West Texas, one landmark at a time.</h1>
          <p className="lede">Vandergriff Group Architects designs the public, healthcare, academic and faith buildings Permian Basin communities gather in, from the Horseshoe Arena to Martin County Hospital.</p>
          <div className="hero-actions">
            <a className="btn btn-ink" href="#work">See the work <ArrowRight size={18} /></a>
            <a className="btn btn-ghost" href={PHONE_HREF}><Phone size={17} /> {PHONE}</a>
          </div>
        </div>
        <figure className="hero-figure">
          <div className="dim dim-top" aria-hidden="true"><span>Midland County Horseshoe</span></div>
          <div className="dim dim-side" aria-hidden="true"><span>28′-0″ steel horseshoe</span></div>
          <img src={hero} alt="The 28-foot steel horseshoe at the entrance to the Midland County Horseshoe Arena" width="939" height="581" />
          <span className="section-mark" aria-hidden="true"><b>A</b><i>101</i></span>
          <figcaption className="titleblock">
            <div><small>Project</small>Midland County Horseshoe</div>
            <div><small>Size</small>143,000 sq ft</div>
            <div><small>Completed</small>2006</div>
          </figcaption>
        </figure>
      </div>
      <div className="wrap stats">
        <div><strong>1979</strong><span>Founded in Midland</span></div>
        <div><strong>50+</strong><span>Medical facility projects</span></div>
        <div><strong>1983</strong><span>Midland ISD client since</span></div>
        <div><strong>153k</strong><span>sq ft, Midland County Pavilion</span></div>
      </div>
    </section>
  );
}

function Work() {
  const [sector, setSector] = useState("all");
  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const list = useMemo(() => (sector === "all" ? PROJECTS : PROJECTS.filter((p) => p.sector === sector)), [sector]);
  const info = SECTORS.find((s) => s.id === sector);
  const current = PROJECTS.find((p) => p.id === openId);
  useEffect(() => {
    if (!current) return undefined;
    const esc = (e) => { if (e.key === "Escape") setOpenId(null); };
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [current]);
  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="sec-head">
          <p className="label">Drawing set · Selected work</p>
          <h2>Courthouse towns, campuses, clinics and arenas.</h2>
        </div>
        <div className="filters" role="tablist" aria-label="Filter projects by sector">
          {SECTORS.map((s) => (
            <button key={s.id} type="button" role="tab" aria-selected={sector === s.id} className={sector === s.id ? "is-on" : ""} onClick={() => { setSector(s.id); setShowAll(false); }}>{s.name}</button>
          ))}
        </div>
        {info && info.text && (
          <div className="sector-note">
            <p>{info.text}</p>
            {info.clients.length > 0 && <ul>{info.clients.map((c) => <li key={c}>{c}</li>)}</ul>}
          </div>
        )}
        <div className="sheets">
          {(showAll ? list : list.slice(0, 6)).map((p) => {
            const i = PROJECTS.indexOf(p);
            return (
              <button type="button" className="sheet" key={p.id} onClick={() => setOpenId(p.id)} aria-label={`Open project: ${p.name}`}>
                <span className="sheet-img"><img src={p.img} alt="" loading="lazy" width="785" height="395" /></span>
                <span className="sheet-tb">
                  <span className="tb-name">{p.name}</span>
                  <span className="tb-meta">{p.city}{p.done ? ` · ${p.done}` : ""}</span>
                  <span className="tb-no">{sheetNo(i)}</span>
                </span>
              </button>
            );
          })}
        </div>
        {!showAll && list.length > 6 && (
          <button type="button" className="more" onClick={() => setShowAll(true)}>Show all {list.length} projects <ArrowRight size={17} /></button>
        )}
      </div>
      {current && (
        <div className="drawer-back" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpenId(null); }}>
          <article className="drawer" role="dialog" aria-modal="true" aria-label={current.name}>
            <button type="button" className="drawer-x" onClick={() => setOpenId(null)} aria-label="Close project"><X size={24} /></button>
            <img src={current.img} alt={current.name} width="785" height="395" />
            <div className="drawer-body">
              <p className="label">{SECTORS.find((s) => s.id === current.sector).name} · Sheet {sheetNo(PROJECTS.indexOf(current))}</p>
              <h3>{current.name}</h3>
              <dl className="specs">
                {current.client && <div><dt>Client</dt><dd>{current.client}</dd></div>}
                <div><dt>Location</dt><dd>{current.city}</dd></div>
                {current.size && <div><dt>Size</dt><dd>{current.size}</dd></div>}
                {current.done && <div><dt>Completed</dt><dd>{current.done}</dd></div>}
              </dl>
              <p>{current.text}</p>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap services-grid">
        <div>
          <p className="label label-light">Scope of services</p>
          <h2>From feasibility to the final punch list.</h2>
          <p className="muted-light">VGA works as a fully integrated team of multi-discipline design professionals, bringing civil, mechanical and electrical engineers and structural consultants in as the project needs them.</p>
          <ul className="practice">{PRACTICE.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <ol className="schedule">
          {SERVICES.map((s, i) => (
            <li key={s}><span className="sch-no">{String(i + 1).padStart(2, "0")}</span><span>{s}</span><span className="sch-line" aria-hidden="true" /></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Firm() {
  return (
    <section className="firm" id="firm">
      <div className="wrap firm-grid">
        <figure className="firm-photo">
          <img src={office} alt="The entrance to Vandergriff Group Architects' office" loading="lazy" width="939" height="581" />
          <figcaption>312 N. Big Spring St., Midland</figcaption>
        </figure>
        <div>
          <p className="label">About VGA</p>
          <h2><em>“A firm led by motivation.”</em></h2>
          <p>Founded in 1979, Vandergriff Group has become one of the leading architectural firms in the West Texas region, with an in-depth portfolio of municipal and governmental architecture.</p>
          <p>Working across many markets teaches us how clients communicate and work, how they use technology, and how the built environment shapes quality of life for the people who use it. A long list of repeat clients reflects our commitment to being client-driven: solutions must answer the client's needs.</p>
        </div>
      </div>
      <div className="wrap values">
        {VALUES.map(([t, d], i) => (
          <div key={t} className="value"><span className="val-no">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div>
    </section>
  );
}

function People() {
  return (
    <section className="people" id="people" style={{ "--sketch": `url(${sketch})` }}>
      <div className="wrap">
        <div className="sec-head">
          <p className="label">People</p>
          <h2>Licensed architects you can call directly.</h2>
        </div>
        <div className="principals">
          {PRINCIPALS.map((p) => (
            <article key={p.name} className="principal">
              <h3>{p.name}</h3>
              <p className="ptitle">{p.title}</p>
              <p className="edu">{p.edu}</p>
              <p>{p.text}</p>
              <a href={`mailto:${p.email}`}><Mail size={16} /> {p.email}</a>
            </article>
          ))}
        </div>
        <table className="team">
          <caption>Staff directory</caption>
          <tbody>
            {TEAM.map(([n, r, e]) => (
              <tr key={n}><th scope="row">{n}</th><td>{r}</td><td><a href={`mailto:${e}`}>{e}</a></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", organization: "", phone: "", email: "", type: "", notes: "", website: "" });
  const up = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await r.json().catch(() => ({}));
      setStatus(d.success ? (d.demo ? "demo" : "sent") : "error");
    } catch { setStatus("demo"); }
  }
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="label">Contact</p>
          <h2>Start a project conversation.</h2>
          <ul className="clist">
            <li><MapPin size={18} /><a href={MAP_URL} target="_blank" rel="noopener noreferrer">{ADDRESS[0]}<br />{ADDRESS[1]} <ArrowUpRight size={14} /></a></li>
            <li><Phone size={18} /><a href={PHONE_HREF}>{PHONE}</a></li>
            <li><Printer size={18} /><span>Fax {FAX}</span></li>
            <li><Mail size={18} /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          </ul>
        </div>
        {status === "sent" || status === "demo" ? (
          <div className="cform done" role="status">
            <h3>Thank you.</h3>
            <p>{status === "demo" ? `This concept's form isn't connected yet. Please call ${PHONE} or email ${EMAIL}.` : "We'll be in touch soon."}</p>
          </div>
        ) : (
          <form className="cform" onSubmit={submit}>
            <label>Name *<input required value={form.name} onChange={(e) => up("name", e.target.value)} autoComplete="name" /></label>
            <label>Organization<input value={form.organization} onChange={(e) => up("organization", e.target.value)} autoComplete="organization" /></label>
            <div className="row2">
              <label>Phone *<input required type="tel" value={form.phone} onChange={(e) => up("phone", e.target.value)} autoComplete="tel" /></label>
              <label>Email<input type="email" value={form.email} onChange={(e) => up("email", e.target.value)} autoComplete="email" /></label>
            </div>
            <label>Project type
              <select value={form.type} onChange={(e) => up("type", e.target.value)}>
                <option value="">Choose...</option>
                {SECTORS.slice(1).map((s) => <option key={s.id}>{s.name}</option>)}
                <option>Planning / feasibility</option>
              </select>
            </label>
            <label>About the project<textarea rows={4} value={form.notes} onChange={(e) => up("notes", e.target.value)} /></label>
            <div className="hp" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => up("website", e.target.value)} /></label></div>
            {status === "error" && <p className="err" role="alert">That didn't send. Please call {PHONE}.</p>}
            <button className="btn btn-ink" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send"} <ArrowRight size={18} /></button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <span className="logo-plate"><img src={logo} alt="Vandergriff Group Architects, PC" width="432" height="98" loading="lazy" /></span>
        <p>{ADDRESS[0]}<br />{ADDRESS[1]}</p>
        <p><a href={PHONE_HREF}>Tel {PHONE}</a><br />Fax {FAX}</p>
      </div>
      <div className="wrap foot-base">
        <span>© {new Date().getFullYear()} Vandergriff Group Architects, PC · Independent concept, not for official use</span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Services />
        <Firm />
        <People />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
