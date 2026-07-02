import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Code2, Layout, Smartphone, Sparkles, Zap, Globe,
  CheckCircle2, TrendingUp, Shield, Clock,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TechBackground } from "@/components/TechBackground";
import { logoBase64 } from "@/assets/logo";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

const services = [
  { icon: Layout,     title: "Websites",      desc: "Marketing sites and brand experiences built to convert visitors into customers." },
  { icon: Code2,      title: "Web Apps",       desc: "Custom dashboards, internal tools, and SaaS products engineered to scale." },
  { icon: Smartphone, title: "Landing Pages",  desc: "High-converting pages for product launches, campaigns, and ad funnels." },
  { icon: Sparkles,   title: "Portfolios",     desc: "Polished portfolio sites for creators, founders, and consultants." },
  { icon: Zap,        title: "Automation",     desc: "Workflow automation that saves hours and removes operational friction." },
  { icon: Globe,      title: "Brand Systems",  desc: "Cohesive digital identity — logos, design systems, and visual language." },
];

const whyUs = [
  { icon: Shield,     label: "Fixed scope, fixed timeline — no surprise invoices" },
  { icon: Code2,      label: "Production-grade code you actually own" },
  { icon: TrendingUp, label: "Performance, SEO, and accessibility baked in" },
  { icon: Clock,      label: "Post-launch support without retainers" },
];

function Home() {
  return (
    <>
      {/* ── SEO: structured data for organization ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Hirespirit",
            url: "https://hirespirit.tech",
            logo: "https://hirespirit.tech/logo.png",
            description:
              "Hirespirit builds custom websites, web apps, and landing pages for modern businesses. Conversion-focused digital products delivered fast.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-94914-62696",
              contactType: "customer service",
              email: "hirespiritatz6@gmail.com",
              areaServed: "IN",
              availableLanguage: "English",
            },
            sameAs: ["https://instagram.com/hirespirit.tech"],
          }),
        }}
      />

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        {/* ── Hero ── */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white"
          aria-label="Hero section"
        >
          <TechBackground />

          {/* Soft vignette so content stays readable */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_30%,transparent_40%,rgba(255,255,255,0.6)_100%)]" />

          <div className="relative w-full mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-32">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">

              {/* Left: text */}
              <motion.div initial="hidden" animate="show" variants={stagger}>
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur px-4 py-1.5 text-xs font-medium text-primary"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                  Now booking Q3 2026 projects
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  className="mt-6 text-5xl md:text-7xl font-bold font-display leading-[1.05] tracking-tight text-foreground"
                >
                  Digital systems<br />
                  that <span className="text-gradient">drive growth.</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
                >
                  Hirespirit builds websites, web apps, and landing pages for modern businesses —
                  custom-built, conversion-focused, and delivered without agency overhead.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 font-medium shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all"
                  >
                    Build Your Ideas <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur-sm px-7 py-3.5 font-medium text-foreground hover:bg-accent transition hover:-translate-y-0.5"
                  >
                    See Our Work
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div variants={fadeUp} className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
                  {[
                    ["10+",   "Projects Shipped"],
                    ["100%",  "Client Focused"],
                    ["4.9★",  "Client Rating"],
                  ].map(([n, l]) => (
                    <div key={l}>
                      <div className="text-3xl font-display font-bold text-gradient">{n}</div>
                      <div className="text-muted-foreground mt-1 text-sm">{l}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right: visual — floating feature cards instead of a static logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                className="hidden lg:block relative h-[420px]"
                aria-hidden="true"
              >
                {/* Center glow */}
                <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-primary/10 blur-3xl" />

                {/* Floating card 1 */}
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 left-2 w-48 rounded-2xl bg-white border border-border shadow-elegant p-5"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                    <Code2 className="w-4.5 h-4.5 text-white" />
                  </div>
                  <p className="text-xs text-muted-foreground">Avg. build time</p>
                  <p className="text-xl font-display font-bold mt-0.5">7–14 days</p>
                </motion.div>

                {/* Floating card 2 */}
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-44 right-0 w-52 rounded-2xl bg-white border border-border shadow-elegant p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <TrendingUp className="w-4.5 h-4.5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Live</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Client focus rate</p>
                  <p className="text-xl font-display font-bold mt-0.5">100%</p>
                </motion.div>

                {/* Floating card 3 */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-6 left-12 w-44 rounded-2xl bg-white border border-border shadow-elegant p-5"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                    <Shield className="w-4.5 h-4.5 text-white" />
                  </div>
                  <p className="text-xs text-muted-foreground">Fixed scope</p>
                  <p className="text-xl font-display font-bold mt-0.5">Zero surprises</p>
                </motion.div>

                {/* Connecting dots */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420" fill="none">
                  <circle cx="100" cy="60" r="3" fill="rgba(37,99,235,0.4)" />
                  <circle cx="320" cy="210" r="3" fill="rgba(37,99,235,0.4)" />
                  <circle cx="160" cy="370" r="3" fill="rgba(37,99,235,0.4)" />
                </svg>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/40"
              aria-hidden="true"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-24 md:py-32" aria-labelledby="services-heading">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
              <p className="text-sm font-medium text-primary uppercase tracking-widest">What We Do</p>
              <h2 id="services-heading" className="mt-3 text-4xl md:text-5xl font-bold font-display">
                Built for businesses that ship.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From a single landing page to a full digital platform — we cover the full stack.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((s) => (
                <motion.article
                  key={s.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-elegant transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-sm" aria-hidden="true">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold font-display">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Why Us ── */}
        <section className="py-24 md:py-32 bg-secondary/40" aria-labelledby="why-heading">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-widest">
                Why Hirespirit
              </motion.p>
              <motion.h2 id="why-heading" variants={fadeUp} className="mt-3 text-4xl md:text-5xl font-bold font-display">
                Senior thinking. Startup speed.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">
                You get a small, senior team that takes full ownership of your project. No account
                managers, no handoffs — direct access to the people designing and building for you.
              </motion.p>
              <motion.ul variants={stagger} className="mt-8 space-y-4" role="list">
                {whyUs.map((item) => (
                  <motion.li key={item.label} variants={fadeUp} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="mt-1">{item.label}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="mt-10">
                <Link to="/about" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  Learn More About Us <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl bg-gradient-primary shadow-elegant overflow-hidden max-w-md mx-auto lg:mx-0 w-full"
              aria-hidden="true"
            >
              <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center p-16">
                <img src={logoBase64} alt="Hirespirit" className="w-full max-w-xs drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 md:py-32 relative overflow-hidden" aria-labelledby="cta-heading">
          <div className="absolute inset-0 bg-gradient-primary" aria-hidden="true" />
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="relative mx-auto max-w-4xl px-6 text-center text-primary-foreground">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.h2 id="cta-heading" variants={fadeUp} className="text-4xl md:text-6xl font-bold font-display leading-tight">
                Ready to build something great?
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-lg md:text-xl opacity-85 max-w-2xl mx-auto">
                Tell us about your project. We respond within one business day with a clear, honest proposal.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition hover:-translate-y-0.5 shadow-lg"
                >
                  Build Your Ideas <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/plans"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-8 py-4 font-medium hover:bg-white/10 transition hover:-translate-y-0.5"
                >
                  View Our Plans
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}