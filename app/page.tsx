"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// ─── NAV LINKS ───────────────────────────────────────────────
const links = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "#services" },
  { label: "Sectors",  href: "#sectors"  },
  { label: "Process",  href: "#process"  },
  { label: "Contact",  href: "#contact"  },
];

// ─── DATA ────────────────────────────────────────────────────
const services = [
  ["Structural Solutions",          "Factory warehouses, overhead cranes, office buildings and related structural work."],
  ["Mechanical Solutions",          "Custom machinery design and mechanical systems for specific applications."],
  ["Fabrication",                   "Welding, cutting, grinding, rolling and bending — built to spec."],
  ["Professional Design Solutions", "Concept designs, detailed engineering drawings and full design packages."],
  ["Procurement Solutions",         "End-to-end procurement support — sourcing, supply chain coordination and delivery management."],
  ["Installation & Commissioning",  "On-site installation, commissioning and handover support."],
  ["Maintenance & Repairs",         "Ongoing maintenance and repair support for structures and equipment."],
];

const sectors = [
  ["Construction",     "Structural and mechanical solutions for building projects."],
  ["Maintenance",      "Ongoing maintenance and repair for industrial facilities."],
  ["Mining",           "Fabrication and structural support for mining operations."],
  ["Agriculture",      "Mechanical and structural solutions for agricultural applications, including monitoring and measurement solutions for precise farming operations."],
  ["Transport (Rail)", "Mechanical maintenance and fabrication for rail infrastructure."],
  ["Manufacturing",    "Optimisation solutions and automation for production facilities."],
];

const steps = [
  ["01", "Get a Client",   "Individuals, businesses and entities that require engineering services."],
  ["02", "Consultation",   "We capture requirements, expectations and goals, then outline our approach."],
  ["03", "Quotation",      "Costing and formal quotation. On acceptance: contract + upfront deposit."],
  ["04", "We Get to Work", "Design concepts → detailed design → fabrication → installation & commissioning."],
];

// ─── MAIN PAGE ───────────────────────────────────────────────
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="text-slate-900">

      {/* ── NAVBAR ─────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <a href="#top">
            <Image
              src="/matq-logo.jpeg"
              alt="MAT-Q Engineering"
              width={110}
              height={36}
              className="object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`hidden sm:inline-flex rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                scrolled
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-white text-slate-900 hover:bg-slate-100"
              }`}
            >
              Get a Quote
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`md:hidden rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
                scrolled || menuOpen
                  ? "border-slate-300 text-slate-700"
                  : "border-white/30 text-white"
              }`}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-5">
            <div className="rounded-xl border border-white/15 bg-slate-900/90 backdrop-blur p-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-white/85 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold text-center"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section id="top" className="min-h-screen flex flex-col md:flex-row">

        {/* Left Panel */}
        <div className="flex flex-col justify-center bg-slate-900 w-full md:w-1/2 px-6 md:px-10 py-24 md:py-0">
          <div className="w-12 h-1 bg-red-600 mb-8" data-aos="fade-right" />

          <p
            className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400 mb-4"
            data-aos="fade-up" data-aos-delay="100"
          >
            Engineering Solutions · Professional Design · Procurement
          </p>

          <h1
            className="text-4xl md:text-5xl font-semibold text-white leading-tight"
            data-aos="fade-up" data-aos-delay="200"
          >
            MAT-Q<br />Engineering<br />
            <span className="text-white/40 text-2xl font-normal">(Pty) Ltd</span>
          </h1>

          <p
            className="mt-6 text-slate-400 text-sm md:text-base leading-7 max-w-sm"
            data-aos="fade-up" data-aos-delay="300"
          >
            Providing structural, mechanical, fabrication and installation solutions,
            alongside premium Professional Design Solutions and Procurement Solutions.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            data-aos="fade-up" data-aos-delay="400"
          >
            <a
              href="#contact"
              className="rounded-lg bg-white text-slate-900 px-6 py-3 text-sm font-semibold hover:bg-slate-100 text-center transition"
            >
              Request a Quotation
            </a>
            <a
              href="#services"
              className="rounded-lg border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 text-center transition"
            >
              Our Services
            </a>
          </div>

          <div
            className="mt-12 md:mt-16 pt-8 border-t border-white/10 text-sm text-slate-500 leading-7"
            data-aos="fade-up" data-aos-delay="500"
          >
            <p>062 951 3276</p>
            <p>sales-info@mat-qengineering.co.za</p>
            <p>mat-qengineering.co.za</p>
          </div>
        </div>

        {/* Right Panel — Image */}
        <div
          className="w-full md:w-1/2 h-100 md:h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url('/hero.jpeg')" }}
        >
          <div className="absolute inset-0 bg-slate-900/35" />
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
            <div className="inline-flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 px-5 py-3">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <p className="text-xs md:text-sm text-white font-medium">
                Serving the Southern African Region
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div data-aos="fade-right">
              <div className="w-10 h-1 bg-red-600 mb-6" />
              <h2 className="text-3xl font-semibold text-slate-900">About MAT-Q Engineering</h2>
              <p className="mt-5 text-slate-600 leading-7">
                MAT-Q Engineering (Pty) Ltd is an independent consulting company
                committed to delivering solutions at the highest level of quality and professionalism.
              </p>
              <p className="mt-4 text-slate-600 leading-7">
                We draw on a network of qualified, experienced professionals to provide structural,
                mechanical, electrical coordination and HVAC-related services — from
                initial consultation and design through to fabrication, installation and commissioning.
              </p>
              <p className="mt-4 text-slate-600 leading-7">
                Our focus is on clear scope, professional execution, and reliable delivery
                for clients across the Southern African region.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="100">
              {[
                ["Independent",  "An autonomous company built on professional integrity."],
                ["End-to-End",   "Consultation through to commissioning."],
                ["Multi-Sector", "Mining, Rail, Construction, Agriculture."],
                ["Regional",     "Available across the Southern African region."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="w-6 h-0.5 bg-red-600 mb-3" />
                  <p className="font-semibold text-sm text-slate-900">{title}</p>
                  <p className="mt-1 text-xs text-slate-500 leading-5">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────── */}
      <section id="services" className="scroll-mt-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="w-10 h-1 bg-red-600 mb-6" data-aos="fade-right" />
          <h2 className="text-3xl font-semibold text-slate-900" data-aos="fade-up">Services</h2>
          <p className="mt-3 text-slate-600 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            Practical solution packages with clear scope and professional delivery.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map(([title, desc], i) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="w-6 h-0.5 bg-red-600 mb-4" />
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ────────────────────────────────────────── */}
      <section id="sectors" className="scroll-mt-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="w-10 h-1 bg-red-600 mb-6" data-aos="fade-right" />
          <h2 className="text-3xl font-semibold text-slate-900" data-aos="fade-up">Sectors</h2>
          <p className="mt-3 text-slate-600 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            We serve clients across a wide range of industries throughout the Southern African region.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {sectors.map(([title, desc], i) => (
              <div
                key={title}
                className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="mt-1 w-1 shrink-0 rounded-full bg-red-600 self-stretch" />
                <div>
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-slate-600 leading-6">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────── */}
      <section id="process" className="scroll-mt-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="w-10 h-1 bg-red-600 mb-6" data-aos="fade-right" />
          <h2 className="text-3xl font-semibold text-white" data-aos="fade-up">Process</h2>
          <p className="mt-3 text-slate-400 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            A clear, structured approach from first contact to execution.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map(([n, title, desc], i) => (
              <div
                key={n}
                className={`rounded-xl border p-5 ${
                  n === "03"
                    ? "border-red-600/50 bg-red-600/10"
                    : "border-white/10 bg-white/5"
                }`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <p className={`text-2xl font-bold mb-3 ${n === "03" ? "text-red-500" : "text-white/20"}`}>
                  {n}
                </p>
                <p className="font-semibold text-white text-sm">{title}</p>
                <p className="mt-2 text-xs text-slate-400 leading-5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS PREVIEW ───────────────────────────────── */}
      <section id="projects" className="scroll-mt-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="w-10 h-1 bg-red-600 mb-6" data-aos="fade-right" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900" data-aos="fade-up">Key Projects</h2>
              <p className="mt-3 text-slate-600 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                A selection of high-caliber engineering projects delivered across the Southern African region.
              </p>
            </div>
            <a
              href="/projects"
              className="shrink-0 rounded-lg bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-slate-800 transition"
              data-aos="fade-left"
            >
              View All Projects →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1 — Agricultural */}
            <a
              href="/projects#agri"
              className="group rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-600/10 text-red-600 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Agricultural
                </span>
                <span className="text-xs text-slate-400">Dec 2025 – Jan 2026</span>
              </div>
              <div className="w-6 h-0.5 bg-red-600 mb-4" />
              <h3 className="font-semibold text-slate-900 text-lg leading-snug group-hover:text-red-600 transition-colors">
                High-Capacity Manure Applicator Redesign & Structural Strengthening
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-6">
                Full SolidWorks redesign, weight-balance calculations, and structural reinforcement
                of a high-capacity agricultural applicator for the John Deere 7R Series.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["SolidWorks CAD", "Structural Analysis", "Weight Distribution", "Agriculture"].map((tag) => (
                  <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </a>

            {/* Card 2 — Industrial */}
            <a
              href="/projects#eskom"
              className="group rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-600/10 text-red-600 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Industrial
                </span>
                <span className="text-xs text-slate-400">Mar – Nov 2026</span>
              </div>
              <div className="w-6 h-0.5 bg-red-600 mb-4" />
              <h3 className="font-semibold text-slate-900 text-lg leading-snug group-hover:text-red-600 transition-colors">
                Mill Crane Replacement — Matla Power Station (Eskom)
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-6">
                Turnkey replacement of seven 36-ton mill cranes at Eskom&apos;s Matla Power Station,
                including design, procurement, installation, and commissioning.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Turnkey", "36-Ton Cranes", "VSD Controls", "Eskom Compliance"].map((tag) => (
                  <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="w-10 h-1 bg-red-600 mb-6" data-aos="fade-right" />
          <h2 className="text-3xl font-semibold text-slate-900" data-aos="fade-up">Contact</h2>
          <p className="mt-3 text-slate-600 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            Send your project details and we&apos;ll respond with next steps and a quotation.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">

            <form
              action="https://formspree.io/f/xdaqlgjv"
              method="POST"
              className="space-y-4"
              data-aos="fade-right"
            >
              <input
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                name="name" placeholder="Your name" required
              />
              <input
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                name="email" type="email" placeholder="Email address" required
              />
              <input
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                name="phone" placeholder="Phone number (optional)"
              />
              <textarea
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                name="message" rows={6} placeholder="Describe your project or requirements" required
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition"
              >
                Send Message
              </button>
            </form>

            <div className="flex flex-col gap-5" data-aos="fade-left" data-aos-delay="100">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-6 h-0.5 bg-red-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-3">Direct Contact</h3>
                <p className="text-sm text-slate-600 leading-8">
                  <strong className="text-slate-900">MAT-Q Engineering (Pty) Ltd</strong><br />
                  <a href="tel:+27629513276" className="hover:text-slate-900 transition">062 951 3276</a><br />
                  <a href="mailto:sales-info@mat-qengineering.co.za" className="hover:text-slate-900 transition">
                    sales-info@mat-qengineering.co.za
                  </a><br />
                  <a href="https://mat-qengineering.co.za" className="hover:text-slate-900 transition">
                    mat-qengineering.co.za
                  </a>
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-6">
                <p className="text-sm text-white font-semibold">Serving Southern Africa</p>
                <p className="mt-1 text-sm text-slate-400">Available for projects across the region.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MAT-Q Engineering (Pty) Ltd. All rights reserved.</p>
          <p>mat-qengineering.co.za</p>
        </div>
      </footer>

    </main>
  );
}