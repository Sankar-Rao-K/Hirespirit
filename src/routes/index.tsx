import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Globe, Smartphone, Cpu, Bot, Palette, Cloud,
  Search, Shield, Sparkles, Layers, CheckCircle2, Zap,
  Stethoscope, GraduationCap, UtensilsCrossed, Building2, ShoppingBag,
  Plane, Dumbbell, Landmark, Factory, Star, TrendingUp, Users, Rocket,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hirespirit — Digital solutions for modern businesses" },
      { name: "description", content: "Hirespirit is a full-service technology partner: websites, mobile apps, custom software, AI solutions, SEO and hosting for businesses across every industry." },
      { name: "keywords", content: "Hirespirit, website development, mobile app development, custom software, AI solutions, SEO agency, Hyderabad" },
      { property: "og:title", content: "Hirespirit — Digital solutions for modern businesses" },
      { property: "og:description", content: "Websites, mobile apps, AI, and custom software for every industry. From MVP to enterprise." },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:title", content: "Hirespirit — Digital solutions for modern businesses" },
      { name: "twitter:description", content: "Websites, mobile apps, AI, and custom software for every industry. From MVP to enterprise." },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Hirespirit",
          url: SITE_URL,
        }),
      },
    ],
  }),
  component: Home,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

const services = [
  { icon: Globe, title: "Website Development", desc: "Business, e-commerce, booking, portfolio & landing pages built to convert.", tags: ["Responsive", "SEO", "Admin Panel"] },
  { icon: Smartphone, title: "Mobile Apps", desc: "Android, iOS & cross-platform apps with payments, GPS, push & offline support.", tags: ["React Native", "Flutter", "Expo"] },
  { icon: Cpu, title: "Custom Software", desc: "ERP, CRM, HRMS, POS, inventory & billing systems built for your workflow.", tags: ["ERP", "CRM", "POS"] },
  { icon: Bot, title: "AI Solutions", desc: "Chatbots, voice assistants, OCR, recommendations and AI agents.", tags: ["OpenAI", "LangChain", "Agents"] },
  { icon: Palette, title: "UI/UX Design", desc: "Wireframes, Figma design, dashboards and full website redesigns.", tags: ["Figma", "Design Systems"] },
  { icon: Search, title: "SEO & Marketing", desc: "Technical SEO, local SEO, ads, funnels and lead-generation systems.", tags: ["Google Ads", "Meta Ads"] },
  { icon: Cloud, title: "Cloud & Hosting", desc: "AWS, Cloudflare, Firebase, Supabase, Docker and CI/CD deployments.", tags: ["AWS", "Cloudflare"] },
  { icon: Shield, title: "Maintenance & Security", desc: "SSL, backups, audits, uptime monitoring and monthly reports.", tags: ["24/7", "SLA"] },
];

const industries = [
  { icon: Stethoscope, name: "Healthcare", note: "EMR, appointments, patient apps" },
  { icon: GraduationCap, name: "Education", note: "School ERP, LMS, parent apps" },
  { icon: UtensilsCrossed, name: "Restaurants", note: "QR menu, ordering, delivery" },
  { icon: Building2, name: "Real Estate", note: "Property portals, agent CRM" },
  { icon: ShoppingBag, name: "E-commerce", note: "Single & multi-vendor stores" },
  { icon: Plane, name: "Travel & Hotels", note: "Booking engines, guest apps" },
  { icon: Dumbbell, name: "Fitness & Gyms", note: "Memberships, tracking, trainers" },
  { icon: Landmark, name: "Finance & NBFC", note: "Loans, EMI, customer portals" },
  { icon: Factory, name: "Manufacturing", note: "Inventory, production, ERP" },
];

const packages = [
  { name: "Launch", tier: "Bronze", price: "₹25,000", tagline: "Get online — fast.",
    highlights: ["5-page responsive website", "Contact form + WhatsApp", "Google Maps + Analytics", "Basic on-page SEO", "SSL setup + 1 month support"] },
  { name: "Grow", tier: "Silver", price: "₹65,000", featured: true, tagline: "For serious businesses.",
    highlights: ["10-page CMS website", "Admin panel + bookings", "Payment gateway integration", "SEO + Google Business setup", "3 months maintenance"] },
  { name: "Scale", tier: "Gold", price: "₹1,50,000+", tagline: "Complete digital suite.",
    highlights: ["Website + mobile app", "AI chatbot / automation", "Admin & vendor dashboards", "Cloud hosting + CI/CD", "6 months priority support"] },
];

const process = [
  { step: "01", title: "Discovery", desc: "We map your goals, users, competitors and scope before writing a single line." },
  { step: "02", title: "Design", desc: "Wireframes to polished UI in Figma — approved before development starts." },
  { step: "03", title: "Build", desc: "Production-grade code, weekly demos, and a client dashboard for visibility." },
  { step: "04", title: "Launch & Scale", desc: "Deployment, SEO, analytics, and ongoing maintenance so you keep growing." },
];

const heroServiceTiles = [
  { icon: Globe, label: "Web", tint: "from-primary/10 to-primary-glow/5" },
  { icon: Smartphone, label: "Mobile", tint: "from-primary-glow/15 to-primary/5" },
  { icon: Bot, label: "AI", tint: "from-primary/15 to-primary-glow/10" },
  { icon: Cpu, label: "Software", tint: "from-primary-glow/10 to-primary/10" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── HERO — dense two-column, light mode ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-background to-accent/40 pt-32 pb-20 md:pt-36 md:pb-28">
        {/* animated ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-primary/12 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute top-40 -right-40 w-[560px] h-[560px] rounded-full bg-primary-glow/15 blur-3xl animate-[pulse_14s_ease-in-out_infinite]" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--primary-deep)_1px,transparent_1px),linear-gradient(90deg,var(--primary-deep)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_50%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
            {/* LEFT — copy */}
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Technology partner for modern businesses
              </motion.span>

              <motion.h1 variants={fadeUp} className="mt-7 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-primary-deep">
                We build the{" "}
                <span className="relative inline-block">
                  <span className="text-gradient-emerald italic font-normal">digital systems</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/25" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 6 Q 25 0, 50 6 T 100 6" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </span>{" "}
                that grow your business.
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Websites, mobile apps, custom software, AI solutions and end-to-end
                digital transformation — designed and delivered like a full-service agency.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-emerald-gradient text-cream px-7 py-3.5 font-medium shadow-elegant hover:shadow-gold hover:-translate-y-0.5 transition-all">
                  Start your project <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-deep/15 bg-card px-7 py-3.5 font-medium text-primary-deep hover:border-primary/40 hover:bg-primary/5 transition">
                  Explore services
                </Link>
              </motion.div>

              {/* trust strip */}
              <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6 pt-6 border-t border-primary-deep/10">
                <div className="flex -space-x-2.5">
                  {["HS", "AM", "RV", "JD"].map((i, idx) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-cream bg-emerald-gradient text-cream text-[10px] font-semibold flex items-center justify-center shadow-soft" style={{ zIndex: 10 - idx }}>{i}</div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex gap-0.5 text-primary mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary" />)}
                  </div>
                  <span className="font-semibold text-primary-deep">4.9/5</span>
                  <span className="text-muted-foreground"> from clients worldwide</span>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT — dense bento mosaic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[540px]">
                {/* Big stat card */}
                <div className="col-span-4 row-span-3 rounded-3xl bg-emerald-gradient text-cream p-6 shadow-elegant relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:20px_20px]" />
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-primary-glow/40 blur-2xl group-hover:scale-125 transition-transform duration-700" />
                  <div className="relative flex flex-col h-full justify-between">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cream/70">
                      <TrendingUp className="w-3.5 h-3.5" /> Delivered
                    </div>
                    <div>
                      <div className="text-6xl md:text-7xl font-display font-semibold leading-none">50+</div>
                      <div className="mt-2 text-cream/80 text-sm">Modular services across 9 industries</div>
                    </div>
                  </div>
                </div>

                {/* Small stat */}
                <div className="col-span-2 row-span-3 rounded-3xl bg-card border border-primary-deep/10 p-5 shadow-soft flex flex-col justify-between">
                  <Users className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-4xl font-display font-semibold text-primary-deep">10+</div>
                    <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">Projects live</div>
                  </div>
                </div>

                {/* Service tiles row */}
                {heroServiceTiles.map((t, i) => (
                  <motion.div
                    key={t.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                    className={`col-span-3 lg:col-span-[1.5] row-span-2 rounded-2xl bg-gradient-to-br ${t.tint} border border-primary-deep/10 p-4 flex flex-col justify-between hover:-translate-y-1 hover:shadow-elegant transition-all cursor-default`}
                    style={{ gridColumn: `span ${i < 2 ? 3 : 3} / span ${i < 2 ? 3 : 3}` }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-card shadow-soft flex items-center justify-center">
                      <t.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-sm font-semibold text-primary-deep">{t.label}</div>
                  </motion.div>
                ))}

                {/* Rating card */}
                <div className="col-span-3 row-span-1 rounded-2xl bg-card border border-primary-deep/10 px-4 flex items-center justify-between shadow-soft">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-primary-deep">Ships in 2–8 weeks</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-primary-deep/40" />
                </div>

                {/* Rating stat */}
                <div className="col-span-3 row-span-1 rounded-2xl bg-primary-deep text-cream px-4 flex items-center justify-between shadow-elegant">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary-glow text-primary-glow" />)}
                    </div>
                    <span className="text-xs font-semibold">4.9 Rating</span>
                  </div>
                  <span className="text-xs text-cream/60">Verified</span>
                </div>
              </div>

              {/* floating tag */}
              <div className="absolute -top-4 -right-4 rounded-full bg-cream border border-primary/20 shadow-elegant px-4 py-2 text-xs font-semibold text-primary flex items-center gap-1.5 animate-[bounce_5s_ease-in-out_infinite]">
                <Sparkles className="w-3.5 h-3.5" /> Available Now
              </div>
            </motion.div>
          </div>
        </div>

        {/* marquee of capabilities */}
        <div className="mt-20 relative border-y border-primary-deep/10 bg-card/70 backdrop-blur py-5 overflow-hidden">
          <div className="flex gap-10 whitespace-nowrap animate-[marquee_35s_linear_infinite] text-primary-deep/45 text-sm uppercase tracking-[0.3em] font-medium">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-10 items-center">
                {["Web Development", "Mobile Apps", "AI & Automation", "Custom Software", "UI/UX Design", "SEO & Marketing", "Cloud & DevOps", "Branding", "Business Consulting"].map((t) => (
                  <span key={t} className="flex items-center gap-10">
                    {t} <span className="text-primary">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">What we do</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-primary-deep max-w-2xl">
                A complete digital agency, under one roof.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              We don't just build websites — we solve business problems using technology.
              From MVP to enterprise, every service is modular and priced transparently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-primary-deep/10 bg-card p-6 hover:border-primary/40 hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-emerald-gradient transition-colors">
                  <s.icon className="w-5 h-5 text-primary group-hover:text-cream transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-primary-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full bg-accent text-primary-deep/70">{t}</span>
                  ))}
                </div>
                <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-primary-deep/30 group-hover:text-primary group-hover:rotate-12 transition-all" />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary-deep font-medium hover:text-primary group">
              See the full service catalogue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES (light) ── */}
      <section className="py-28 bg-gradient-to-b from-accent/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,var(--primary)_1px,transparent_0)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_50%,transparent_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Industries we power</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-primary-deep">
                Purpose-built solutions for <span className="text-gradient-emerald italic font-normal">every industry.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              We don't sell generic packages. Every industry gets a purpose-built suite —
              website, apps, dashboards and AI features designed for its workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group rounded-2xl bg-card border border-primary-deep/10 p-6 hover:border-primary/40 hover:shadow-elegant hover:-translate-y-1 transition-all cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-emerald-gradient transition-colors">
                  <ind.icon className="w-5 h-5 text-primary group-hover:text-cream transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-primary-deep">{ind.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{ind.note}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/industries" className="inline-flex items-center gap-2 rounded-full bg-emerald-gradient text-cream px-6 py-3 text-sm font-medium shadow-elegant hover:shadow-gold hover:-translate-y-0.5 transition-all">
              Explore all industries <ArrowUpRight className="w-4 h-4" />
            </Link>
            <span className="text-muted-foreground text-sm">NGOs · Government · Retail · Hospitality · Media · Sports · SaaS</span>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">How we work</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-primary-deep">A process built on clarity.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl bg-card border border-primary-deep/10 p-6 hover:border-primary/30 hover:shadow-soft transition-all"
              >
                <div className="text-6xl font-display font-semibold text-gradient-emerald opacity-70">{p.step}</div>
                <h3 className="mt-4 text-xl font-semibold text-primary-deep">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-3 w-6 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-28 bg-accent/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Transparent packages</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-primary-deep max-w-xl">
                Pricing you can actually plan around.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Every project is quoted line-by-line — discovery, design, development, SEO,
              deployment and testing. Starting points below.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-8 border transition-all ${
                  p.featured
                    ? "bg-emerald-gradient text-cream border-transparent shadow-elegant lg:scale-105"
                    : "bg-card border-primary-deep/10 hover:border-primary/30 hover:shadow-soft"
                }`}
              >
                {p.featured && (
                  <span className="absolute top-6 right-6 text-[10px] font-semibold uppercase tracking-widest bg-cream text-primary-deep px-2.5 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <p className={`text-xs font-semibold uppercase tracking-widest ${p.featured ? "text-cream/80" : "text-primary"}`}>{p.tier}</p>
                <h3 className={`mt-2 text-3xl font-semibold ${p.featured ? "text-cream" : "text-primary-deep"}`}>{p.name}</h3>
                <p className={`mt-1 text-sm ${p.featured ? "text-cream/70" : "text-muted-foreground"}`}>{p.tagline}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className={`text-4xl font-display font-semibold ${p.featured ? "text-cream" : "text-primary-deep"}`}>{p.price}</span>
                  <span className={`text-sm ${p.featured ? "text-cream/60" : "text-muted-foreground"}`}>starting</span>
                </div>

                <ul className="mt-8 space-y-3">
                  {p.highlights.map((h) => (
                    <li key={h} className={`flex items-start gap-3 text-sm ${p.featured ? "text-cream/85" : "text-foreground/80"}`}>
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${p.featured ? "text-cream" : "text-primary"}`} />
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                    p.featured
                      ? "bg-cream text-primary-deep hover:shadow-gold"
                      : "border border-primary-deep/20 text-primary-deep hover:bg-primary-deep hover:text-cream"
                  }`}
                >
                  Get a quote <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Why Hirespirit</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-primary-deep">
              A partner, not just a vendor.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              We think like a co-founder. Every engagement is scoped, priced and delivered
              like a long-term partnership — not a one-off transaction.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                { icon: Layers, t: "Modular solutions", d: "Pick services à la carte or bundle industry suites." },
                { icon: Zap, t: "Fast delivery", d: "Most websites live in 2–3 weeks, apps in 6–8." },
                { icon: Shield, t: "You own everything", d: "Source code, hosting logins, admin — all yours." },
                { icon: Sparkles, t: "Design-first", d: "Every product ships polished, not just functional." },
              ].map((f) => (
                <div key={f.t} className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-deep">{f.t}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-emerald-gradient p-10 text-cream shadow-elegant relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] [background-size:24px_24px]" />
              <div className="relative">
                <div className="flex gap-0.5 text-cream mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-cream" />)}
                </div>
                <blockquote className="text-xl md:text-2xl font-display leading-relaxed">
                  "Hirespirit rebuilt our entire booking platform in three weeks.
                  It runs faster, converts better, and I finally understand where every rupee went."
                </blockquote>
                <div className="mt-8 pt-6 border-t border-cream/15 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-cream flex items-center justify-center text-primary-deep font-semibold">R</div>
                  <div>
                    <div className="font-semibold">Rahul Verma</div>
                    <div className="text-sm text-cream/60">Founder, Elevate Wellness</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-emerald-gradient text-cream p-12 md:p-16 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-glow/40 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/40 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                  Ready to build your <span className="italic font-normal text-cream/90">next chapter?</span>
                </h2>
                <p className="mt-5 text-cream/70 text-lg max-w-lg">
                  Tell us about your business — we'll come back with a proposal
                  scoped, timelined and priced within 48 hours.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-cream text-primary-deep px-7 py-4 font-medium shadow-elegant hover:-translate-y-0.5 transition-all">
                  Start your project <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/packages" className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-4 font-medium hover:bg-cream/10 transition">
                  View packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
