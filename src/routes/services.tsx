import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe, Smartphone, Cpu, Bot, Palette, Cloud, Search, Shield, Megaphone, BarChart3, Workflow, Lock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/site-config";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Hirespirit" },
      { name: "description", content: "Full service catalogue: web & app development, custom software, AI, UI/UX, SEO, hosting, maintenance, branding and business automation." },
      { property: "og:title", content: "Services — Hirespirit" },
      { property: "og:description", content: "Websites, apps, AI, cloud, SEO and everything in between." },
      { property: "og:url", content: absoluteUrl("/services") },
      { name: "twitter:title", content: "Services — Hirespirit" },
      { name: "twitter:description", content: "Websites, apps, AI, cloud, SEO and everything in between." },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Services", "/services")),
      },
    ],
  }),
  component: ServicesPage,
});

const catalogue = [
  {
    icon: Globe, title: "Website Development",
    items: ["Business websites", "E-commerce stores", "Booking & membership", "Landing pages", "Portfolio & personal", "School / NGO / hospital sites"],
  },
  {
    icon: Smartphone, title: "Mobile App Development",
    items: ["Android & iOS apps", "React Native / Expo / Flutter", "Customer, admin, delivery & vendor apps", "Push, GPS, camera, QR, payments", "Offline-first architecture", "Play Store / App Store deployment"],
  },
  {
    icon: Cpu, title: "Custom Software",
    items: ["ERP & CRM systems", "HRMS & payroll", "POS & inventory", "Billing & invoicing", "Warehouse management", "Employee & asset tracking"],
  },
  {
    icon: Bot, title: "AI Solutions",
    items: ["AI chatbots & voice assistants", "Document processing / OCR", "AI recommendations & search", "Resume screening", "AI agents & workflows", "OpenAI / Gemini / LangChain integration"],
  },
  {
    icon: Palette, title: "UI / UX Design",
    items: ["Wireframes & user flows", "Figma design systems", "Dashboard design", "Mobile UI kits", "Website redesigns", "Usability research"],
  },
  {
    icon: Search, title: "SEO Services",
    items: ["Technical & on-page SEO", "Local SEO + Google Business", "Schema markup", "Keyword research", "Backlink strategy", "Monthly reports"],
  },
  {
    icon: Megaphone, title: "Digital Marketing",
    items: ["Google, Meta & YouTube ads", "Lead generation funnels", "Email marketing", "Landing page optimization", "Conversion tracking", "Content strategy"],
  },
  {
    icon: Cloud, title: "Cloud & Hosting",
    items: ["Domain + hosting setup", "AWS / GCP / Azure / Cloudflare", "Firebase & Supabase", "Docker & CI/CD", "Managed VPS + backups", "Email & DNS setup"],
  },
  {
    icon: Workflow, title: "Business Automation",
    items: ["WhatsApp automation", "CRM & invoice automation", "Appointment reminders", "Google Sheets workflows", "AI-powered workflows", "Zapier / n8n integrations"],
  },
  {
    icon: BarChart3, title: "Analytics",
    items: ["Google Analytics setup", "Heatmaps & session replay", "Sales & customer dashboards", "Conversion tracking", "Monthly business reports", "Data visualization"],
  },
  {
    icon: Shield, title: "Maintenance Plans",
    items: ["Bug fixes & updates", "Security patches & backups", "Content changes", "Feature additions", "Performance optimization", "Monthly reports"],
  },
  {
    icon: Lock, title: "Security & Audit",
    items: ["SSL & firewall setup", "Malware removal", "Security audits", "Performance audits", "Disaster recovery", "Compliance guidance"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative bg-emerald-hero grain-overlay text-cream pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">Service catalogue</p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl">
            Everything you need, <span className="text-gradient-gold italic font-normal">under one roof.</span>
          </h1>
          <p className="mt-6 text-lg text-cream/75 max-w-2xl">
            Twelve service verticals. Every project is assembled from modular components,
            quoted transparently, and delivered on a fixed timeline.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream/40">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogue.map((c) => (
            <div key={c.title} className="rounded-2xl bg-card border border-primary-deep/10 p-7 hover:border-primary/30 hover:shadow-elegant transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-gradient flex items-center justify-center mb-5">
                <c.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-primary-deep">{c.title}</h3>
              <ul className="mt-4 space-y-2">
                {c.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary-deep">Not sure what you need?</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Book a free 30-minute discovery call. We'll map your goals, recommend the right
            stack, and send a written proposal within 48 hours.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-gradient text-cream px-7 py-3.5 font-medium shadow-elegant hover:shadow-gold transition-all">
            Book a discovery call <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
