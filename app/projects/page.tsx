"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

type Tab = "all" | "agricultural" | "industrial";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Sectors", href: "/#sectors" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

const matlaImages = [
  { src: "/MECHANICAL_AND_STRUCTURAL_DESIGN_DRAWINGS_-_MQE-CLSE-DWG-069_page_1.png", caption: "GA Drawing — MQE-CLSE-DWG-069" },
  { src: "/CONCEPT_DESIGN_REPORT_-_MQE-DSGN-TR-002_page_1.png", caption: "Concept Design Report — Cover" },
  { src: "/CONCEPT_DESIGN_REPORT_-_MQE-DSGN-TR-002_page_2.png", caption: "Concept Design — Diagram p.2" },
  { src: "/CONCEPT_DESIGN_REPORT_-_MQE-DSGN-TR-002_page_3.png", caption: "Concept Design — Diagram p.3" },
  { src: "/CONCEPT_DESIGN_REPORT_-_MQE-DSGN-TR-002_page_4.png", caption: "Concept Design — Diagram p.4" },
  { src: "/CONCEPT_DESIGN_REPORT_-_MQE-DSGN-TR-002_page_5.png", caption: "Concept Design — Diagram p.5" },
  { src: "/MECHANICAL_AND_STRUCTURAL_DETAIL_DESIGN_REPORT_-_MQE-CLSE-TR-068_page_1.png", caption: "Detail Design Report — Cover" },
  { src: "/MECHANICAL_AND_STRUCTURAL_DETAIL_DESIGN_REPORT_-_MQE-CLSE-TR-068_page_2.png", caption: "Detail Design — Structural p.2" },
  { src: "/MECHANICAL_AND_STRUCTURAL_DETAIL_DESIGN_REPORT_-_MQE-CLSE-TR-068_page_3.png", caption: "Detail Design — Structural p.3" },
  { src: "/MECHANICAL_AND_STRUCTURAL_DETAIL_DESIGN_REPORT_-_MQE-CLSE-TR-068_page_4.png", caption: "Detail Design — Structural p.4" },
  { src: "/MECHANICAL_AND_STRUCTURAL_DETAIL_DESIGN_REPORT_-_MQE-CLSE-TR-068_page_5.png", caption: "Detail Design — Structural p.5" },
  { src: "/C&I_+_Electrical_Bill_of_Materials-MQE-CLSE-SPEC-073_page_1.png", caption: "Electrical & C&I BOM — MQE-CLSE-SPEC-073" },
];

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [lightboxOpen]);

  const openLightbox = (src: string, caption = "") => {
    setLightboxSrc(src);
    setLightboxCaption(caption);
    setLightboxOpen(true);
  };

  return (
    <main className="text-slate-900 bg-slate-50 min-h-screen relative">
      {/* LIGHTBOX */}
      {lightboxOpen && lightboxSrc && (
        <div
          className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white text-sm font-medium uppercase tracking-wider transition-colors"
            >
              Close ✕
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxSrc}
              alt={lightboxCaption || "Project image"}
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
            />

            {lightboxCaption && (
              <p className="mt-4 text-white/70 text-xs uppercase tracking-widest font-semibold text-center">
                {lightboxCaption}
              </p>
            )}
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm"
            : "bg-slate-900/95 backdrop-blur border-b border-white/10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/matq-logo.jpeg" alt="MAT-Q Engineering" width={110} height={36} className="object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className={`hidden sm:inline-flex rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                scrolled ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-white text-slate-900 hover:bg-slate-100"
              }`}
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`md:hidden rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
                scrolled ? "border-slate-300 text-slate-700" : "border-white/30 text-white"
              }`}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-5 bg-white border-b border-slate-200">
            <div className="flex flex-col gap-3 pt-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-slate-900"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-semibold text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="bg-slate-900 text-white pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-12 h-1 bg-red-600 mb-6" data-aos="fade-right" />
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight" data-aos="fade-up">
            Key Project Portfolio
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            A reflection of high-caliber engineering solutions, professional design, procurement excellence,
            and structural verification across Southern Africa.
          </p>

          <div className="mt-8 flex gap-3 flex-wrap" data-aos="fade-up" data-aos-delay="150">
            {(["all", "agricultural", "industrial"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeTab === tab ? "bg-red-600 text-white" : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {tab === "all" ? "All Projects" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS LIST */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-24">
          {/* PROJECT 1: Manure Applicator */}
          {(activeTab === "all" || activeTab === "agricultural") && (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300" data-aos="fade-up">
              <div className="border-b border-slate-100 p-8 md:p-10 bg-slate-50/50">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="bg-red-600/10 text-red-600 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    Agricultural Engineering &amp; Design
                  </span>
                  <p className="text-sm text-slate-500 font-medium">Timeline: Dec 2025 – Jan 2026</p>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-950">
                  High-Capacity Manure Applicator Redesign &amp; Structural Strengthening
                </h2>
                <p className="mt-3 text-sm text-slate-600 max-w-4xl leading-relaxed">
                  Comprehensive redesign, technical fault-finding, and structural safety verification of a
                  modern high-capacity agricultural fertilizer applicator, utilizing state-of-the-art 3D
                  simulation interfaces.
                </p>
              </div>

              <div className="p-8 md:p-10">
                {/* Gallery */}
                <div className="mb-12">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 border-l-2 border-red-600 pl-3 mb-6">
                    Engineering Documentation &amp; Progress
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { src: "/manure_week3_page_49.png", caption: "Complete 3D Assembly", delay: 0 },
                      { src: "/manure_week3_page_53.png", caption: "Fabrication Progress", delay: 50 },
                      { src: "/manure_week3_page_56.png", caption: "Turning Validation", delay: 100 },
                      { src: "/manure_week3_page_64.png", caption: "Lift Simulation", delay: 150 },
                    ].map((img) => (
                      <div
                        key={img.src}
                        className="space-y-2 cursor-pointer group"
                        data-aos="fade-up"
                        data-aos-delay={img.delay}
                        onClick={() => openLightbox(img.src, img.caption)}
                      >
                        <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                          <Image
                            src={img.src}
                            alt={img.caption}
                            width={600}
                            height={400}
                            className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                          />
                        </div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold text-center tracking-wider">
                          {img.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {/* Column 1 */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 border-l-2 border-red-600 pl-3 mb-3">
                        Operational Objectives
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li><strong>Precision Placement:</strong> Minimize nutrient loss by seeding adjacent to crop rows.</li>
                        <li><strong>Fuel &amp; Time Savings:</strong> Expand structural scale to cover more terrain per pass.</li>
                        <li><strong>Flow Control:</strong> Responsive configuration to regulate precise output metrics.</li>
                        <li><strong>Refill Optimisation:</strong> Maximize bin holding volume to suppress operational idle periods.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 border-l-2 border-red-600 pl-3 mb-3">
                        Identified Stress Challenges
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>Reducing heavy lateral friction on assemblies during turning sequences.</li>
                        <li>Fixing structural welding stress hotspots along the standard chassis geometry.</li>
                        <li>Engineering balanced distribution curves to stabilize tire loading constraints.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 border-l-2 border-red-600 pl-3 mb-3">
                        Modification Progress
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { src: "/manure_week3_page_58.png", caption: "Modified Machine" },
                          { src: "/manure_week3_page_60.png", caption: "Extended Drawbar CAD" },
                        ].map((img) => (
                          <div
                            key={img.src}
                            className="cursor-pointer overflow-hidden rounded border border-slate-200"
                            onClick={() => openLightbox(img.src, img.caption)}
                          >
                            <Image
                              src={img.src}
                              alt={img.caption}
                              width={300}
                              height={224}
                              className="w-full h-28 object-cover hover:scale-105 transition"
                            />
                          </div>
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-slate-500">On-site modification progress and extended drawbar redesign.</p>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 border-l-2 border-red-600 pl-3 mb-3">
                        Design &amp; Methodology
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Re-engineered in <strong>SolidWorks CAD</strong> software environment to inspect the
                        chassis skeletal boundaries. Determined physical weight profiles and static
                        center-of-gravity targets on the multi-wheel configurations to guarantee structural
                        safety limits.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 border-l-2 border-red-600 pl-3 mb-3">
                        Structural Reinforcement Design
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { src: "/manure_week3_page_51.png", caption: "Front Cylinder Reinforcement" },
                          { src: "/manure_week3_page_54.png", caption: "Rear Reinforcement CAD" },
                        ].map((img) => (
                          <div key={img.src} className="cursor-pointer overflow-hidden rounded border border-slate-200" onClick={() => openLightbox(img.src, img.caption)}>
                            <Image src={img.src} alt={img.caption} width={300} height={224} className="w-full h-28 object-cover hover:scale-105 transition" />
                          </div>
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-slate-500">Front cylinder mount strengthening and rear wheel assembly reinforcement.</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 border-l-2 border-red-600 pl-3 mb-3">
                        Optimized Results
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li><strong>Weight Distribution:</strong> Drawbar vertical load brought to 1,133 kg (safe for John Deere 7R Series).</li>
                        <li><strong>Axle Shifts:</strong> Front tires moved 800 mm forward for turning clearance.</li>
                        <li><strong>Cylinder Action:</strong> Hydraulic actuator reach adjusted via customized limiters.</li>
                        <li><strong>Overload Tolerance:</strong> Front wheel assembly at 4.15% (within 5% axle tolerance).</li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between h-full">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Technical Highlight</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        This agricultural design workflow utilizes physical stress assessments and structural
                        weight-balancing vectors to transform prototype concepts into robust, durable, and
                        highly operational machinery certified for strict farm routines.
                      </p>

                      <div className="mt-6 space-y-4">
                        {[
                          { src: "/manure_week3_page_70.png", caption: "Final Cylinder Mount Design" },
                          { src: "/manure_week3_page_68.png", caption: "Final Lift Simulation" },
                        ].map((img) => (
                          <div key={img.src} className="cursor-pointer group" onClick={() => openLightbox(img.src, img.caption)}>
                            <div className="overflow-hidden rounded-lg border border-slate-200">
                              <Image src={img.src} alt={img.caption} width={600} height={400} className="w-full object-cover group-hover:scale-105 transition duration-300" />
                            </div>
                            <p className="text-[10px] text-slate-400 uppercase font-bold text-center tracking-wider mt-2">{img.caption}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider mb-2">Engineering Deliverables</span>
                      <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                        Full CAD Drawing Package, Costing Blueprint, Load Verification Report, and Southern
                        African Regional Compliance Sign-off.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PROJECT 2: Matla Power Station */}
          {(activeTab === "all" || activeTab === "industrial") && (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300" data-aos="fade-up">
              <div className="border-b border-slate-100 p-8 md:p-10 bg-slate-50/50">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="bg-red-600/10 text-red-600 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    Industrial Infrastructure &amp; Turnkey Procurement
                  </span>
                  <p className="text-sm text-slate-500 font-medium">Timeline: March 2026 – November 2026</p>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-950">Mill Crane Replacement — Matla Power Station</h2>
                <p className="mt-3 text-sm text-slate-600 max-w-4xl leading-relaxed">
                  Turnkey management, structural calculations, fabrication tracking, and installation of
                  critical mill cranes across Matla Power Station Units 1–6.
                </p>
              </div>

              <div className="p-8 md:p-10 space-y-8">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Executive Summary — Matla Mill Crane Replacement</h3>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        Replacement of existing mill cranes with a modular, certified 36-ton crane system
                        (4 × 9 t hoists) across Units 1–6. The program covers detailed design, procurement,
                        fabrication, site installation, commissioning and handover with full testing to
                        SANS/industry requirements.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs font-semibold uppercase text-slate-700 mb-2">Scope Highlights</h4>
                          <ul className="text-sm text-slate-600 space-y-2">
                            <li>Dual-beam bridge + cross/long travel crawlers</li>
                            <li>4 × synchronized 9 t hoists (36 t total)</li>
                            <li>Structural assemblies, hoist frames, hoist drives</li>
                            <li>PLC/VSD control, HMI (diagnostics) &amp; radio remote</li>
                            <li>Full mechanical &amp; electrical BOMs and GA drawings</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase text-slate-700 mb-2">Key Deliverables</h4>
                          <ul className="text-sm text-slate-600 space-y-2">
                            <li>Concept &amp; detailed design reports</li>
                            <li>GA &amp; fabrication drawings</li>
                            <li>Mechanical &amp; electrical BOMs</li>
                            <li>Commissioning plan &amp; ITR templates</li>
                            <li>FAT reports, O&amp;M manuals and inspection schedule</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-56 shrink-0">
                      <div className="bg-white rounded-lg border border-slate-200 p-4">
                        <p className="text-xs uppercase font-semibold text-slate-400 mb-2">One-line Synopsis</p>
                        <p className="text-sm font-semibold text-slate-900">
                          Modular 36 t crane replacement to restore reliable lifting capability, reduce
                          downtime and meet SANS compliance.
                        </p>
                        <div className="mt-4">
                          <span className="text-xs font-medium text-slate-500 uppercase">Suggested Next Actions</span>
                          <ol className="mt-2 text-sm text-slate-600 list-decimal list-inside space-y-1">
                            <li>Confirm supplier part numbers &amp; lead times</li>
                            <li>Pre-installation runway survey</li>
                            <li>Prepare commissioning schedule &amp; ITRs</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <h4 className="text-xs font-semibold uppercase text-slate-700 mb-2">Risks &amp; Mitigation (summary)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                      <div>
                        <strong className="text-slate-900 block mb-1">Interlock Failure</strong>
                        Hardwired interlocks + dual switch contacts; tested at commissioning hold points.
                      </div>
                      <div>
                        <strong className="text-slate-900 block mb-1">Unsynchronised Hoists</strong>
                        VSD synchronisation, FAT and site speed/load share validation.
                      </div>
                      <div>
                        <strong className="text-slate-900 block mb-1">Site Fit &amp; Alignment</strong>
                        Pre-install survey and modular design to reduce onsite modifications.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Matla Gallery */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 border-l-2 border-red-600 pl-3 mb-6">
                    Technical Project Documentation
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {matlaImages.map((img) => (
                      <div
                        key={img.src}
                        className="cursor-pointer overflow-hidden rounded-lg border border-slate-200 shadow-sm"
                        onClick={() => openLightbox(img.src, img.caption)}
                        data-aos="fade-up"
                      >
                        <Image
                          src={img.src}
                          alt={img.caption}
                          width={600}
                          height={400}
                          className="w-full h-36 object-cover hover:scale-105 transition duration-300"
                        />
                        <p className="p-2 text-[11px] text-slate-500 uppercase font-medium text-center">{img.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-900 text-white/50 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} MAT-Q Engineering (Pty) Ltd. All rights reserved.</p>
          <Link href="/#contact" className="hover:text-white transition-colors">
            sales-info@mat-qengineering.co.za
          </Link>
        </div>
      </footer>
    </main>
  );
}