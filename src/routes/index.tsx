import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Code2, Layout, Smartphone, Sparkles, Zap, Globe,
  CheckCircle2, Star, TrendingUp, Shield, Clock,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { logoBase64 } from "@/assets/logo";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

// ─── Animation presets ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  { icon: Layout,    title: "Websites",      desc: "Marketing sites and brand experiences built to convert visitors into customers." },
  { icon: Code2,     title: "Web Apps",      desc: "Custom dashboards, internal tools, and SaaS products engineered to scale." },
  { icon: Smartphone,title: "Landing Pages", desc: "High-converting pages for product launches, campaigns, and ad funnels." },
  { icon: Sparkles,  title: "Portfolios",    desc: "Polished portfolio sites for creators, founders, and consultants." },
  { icon: Zap,       title: "Automation",    desc: "Workflow automation that saves hours and removes operational friction." },
  { icon: Globe,     title: "Brand Systems", desc: "Cohesive digital identity — logos, design systems, and visual language." },
];

const testimonials = [
  { name: "Arjun Reddy",  role: "Founder, Kshatriya",    text: "They didn't just build a website — they translated our brand into something people remember." },
  { name: "Priya Menon",  role: "Head of Growth, FinPilot", text: "Conversion went up 38% in the first month. The team is sharp and unusually fast." },
  { name: "Daniel Cole",  role: "CEO, Northbeam",         text: "Best agency we've worked with. Honest scoping, clean delivery, zero drama." },
];

const whyUs = [
  { icon: Shield,      label: "Fixed scope, fixed timeline — no surprise invoices" },
  { icon: Code2,       label: "Production-grade code you actually own" },
  { icon: TrendingUp,  label: "Performance, SEO, and accessibility baked in" },
  { icon: Clock,       label: "Post-launch support without retainers" },
];

// ─── Component ────────────────────────────────────────────────────────────────
function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-20">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32 md:pt-28 md:pb-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Now booking Q3 2026 projects
              </motion.span>

              <motion.h1 variants={fadeUp} className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight font-display">
                Digital systems<br />that <span className="text-gradient">drive growth.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Hirespirit builds websites, web apps, and landing pages for modern businesses —
                custom-built, conversion-focused, and delivered without agency overhead.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 font-medium shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5">
                  Start your project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>
                <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-medium hover:bg-accent transition hover:-translate-y-0.5">
                  See our work
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
                {[["50+", "Projects shipped"], ["38%", "Avg. conversion lift"], ["4.9★", "Client rating"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="text-3xl font-display font-bold text-gradient">{n}</div>
                    <div className="text-muted-foreground mt-1 text-sm">{l}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-primary blur-3xl opacity-25 animate-pulse" />
                <div className="relative w-full h-full rounded-3xl bg-card shadow-elegant border border-border flex items-center justify-center p-14">
                  <img src={logoBase64} alt="Hirespirit" className="w-full h-full object-contain drop-shadow-lg" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">What we do</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold font-display">Built for businesses that ship.</h2>
            <p className="mt-4 text-lg text-muted-foreground">From a single landing page to a full digital platform — we cover the full stack.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-elegant transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-sm">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold font-display">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-widest">Why Hirespirit</motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-4xl md:text-5xl font-bold font-display">Senior thinking. Startup speed.</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">
              You get a small team that takes full ownership. No account managers, no handoffs —
              direct access to the people designing and building your product.
            </motion.p>
            <motion.ul variants={stagger} className="mt-8 space-y-4">
              {whyUs.map((item) => (
                <motion.li key={item.label} variants={fadeUp} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="mt-1">{item.label}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="mt-10">
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-3xl bg-gradient-primary shadow-elegant overflow-hidden max-w-md mx-auto lg:mx-0 w-full"
          >
            <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center p-16">
              <img src={logoBase64} alt="Hirespirit" className="w-full max-w-xs drop-shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">Clients</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold font-display">What founders say.</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.figure
                key={t.name}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl bg-card border border-border p-7 shadow-card hover:shadow-elegant transition-all"
              >
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary" />
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
        <div className="relative mx-auto max-w-4xl px-6 text-center text-primary-foreground">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold font-display leading-tight">
              Ready to build something great?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg md:text-xl opacity-85 max-w-2xl mx-auto">
              Tell us about your project. We'll get back within one business day.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition hover:-translate-y-0.5 shadow-lg">
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/plans" className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-8 py-4 font-medium hover:bg-white/10 transition hover:-translate-y-0.5">
                View our plans
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
