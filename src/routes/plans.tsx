import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, Rocket, Building2, Star, Calendar, Code2, Globe } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/plans")({
  component: Plans,
});

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const pricingPlans = [
  {
    icon: Zap,
    name: "Starter",
    price: "₹29,999",
    period: "one-time",
    tagline: "For founders who need to move fast.",
    features: ["5-page marketing website", "Mobile-first responsive design", "Contact form & WhatsApp integration", "Basic SEO setup", "1 revision round", "7-day delivery", "30-day post-launch support"],
    cta: "Get started",
    highlight: false,
    badge: null,
  },
  {
    icon: Rocket,
    name: "Growth",
    price: "₹74,999",
    period: "one-time",
    tagline: "For businesses ready to scale.",
    features: ["Everything in Starter", "Up to 15 pages", "Custom animations & interactions", "CMS integration (blog, portfolio)", "Advanced SEO & analytics setup", "3 revision rounds", "14-day delivery", "90-day post-launch support", "Performance optimization"],
    cta: "Start growing",
    highlight: true,
    badge: "Most Popular",
  },
  {
    icon: Building2,
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "For complex products and platforms.",
    features: ["Everything in Growth", "Custom web application", "API integrations", "Authentication & user management", "Database design", "Dedicated project manager", "Unlimited revisions", "6-month support & maintenance", "Priority response SLA"],
    cta: "Talk to us",
    highlight: false,
    badge: null,
  },
];

const roadmapItems = [
  { quarter: "Q3 2026", status: "now",     icon: Rocket,    color: "from-primary to-primary-glow", title: "Premium Web Projects",      desc: "Booking high-impact websites, landing pages, and web apps. Focus on conversion-first design and fast delivery." },
  { quarter: "Q4 2026", status: "soon",    icon: Star,      color: "from-navy to-primary",          title: "Product Strategy Service",   desc: "Expanding into product discovery and strategy workshops. Helping startups go from idea to validated spec before building." },
  { quarter: "Q1 2027", status: "planned", icon: Globe,     color: "from-purple-600 to-primary",    title: "Hirespirit Academy",         desc: "A knowledge base and courses for founders who want to understand what good digital products look like." },
  { quarter: "Q2 2027", status: "planned", icon: Code2,     color: "from-primary-glow to-navy",     title: "Technical Co-founding",      desc: "Partnering with early-stage founders as technical co-founders — equity-based arrangements for the right opportunities." },
];

const faqs = [
  { q: "How long does a typical project take?",       a: "Starter sites: 7 days. Growth packages: 14 days. Enterprise projects: scoped individually, typically 4–8 weeks." },
  { q: "Do you take payment upfront?",               a: "50% upfront, 50% on delivery. For Enterprise projects, we use milestone-based payments." },
  { q: "What if I need changes after launch?",       a: "All plans include a post-launch support window. After that, we offer flexible maintenance retainers or hourly arrangements." },
  { q: "Can I see your work before committing?",     a: "Absolutely — check our Work page, or ask us to share a specific case study relevant to your industry." },
  { q: "Do you sign NDAs?",                          a: "Yes. We're happy to sign an NDA before discussing your project in detail." },
];

function Plans() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-primary/8 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-widest">Pricing & Roadmap</motion.p>
            <motion.h1 variants={fadeUp} className="mt-3 text-5xl md:text-7xl font-bold font-display leading-[1.05] max-w-3xl">
              Honest pricing. <span className="text-gradient">Clear plans.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              No retainers, no inflated day rates, no mysterious fees. Every plan is fixed scope, fixed price —
              so you know exactly what you're getting.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6 items-start">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl border p-8 transition-all duration-300 ${
                  plan.highlight
                    ? "border-primary bg-gradient-primary text-primary-foreground shadow-elegant"
                    : "border-border bg-card shadow-card hover:shadow-elegant"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-white text-primary text-xs font-bold px-4 py-1.5 shadow-sm">{plan.badge}</span>
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${plan.highlight ? "bg-white/20" : "bg-primary/10"}`}>
                  <plan.icon className={`w-6 h-6 ${plan.highlight ? "text-white" : "text-primary"}`} />
                </div>
                <h3 className="text-xl font-bold font-display">{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.highlight ? "text-white/70" : "text-muted-foreground"}`}>{plan.tagline}</p>
                <div className="mt-6 mb-8">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  {plan.period && <span className={`text-sm ml-2 ${plan.highlight ? "text-white/70" : "text-muted-foreground"}`}>{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3 items-start">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlight ? "bg-white/20" : "bg-primary/10"}`}>
                        <Check className={`w-3 h-3 ${plan.highlight ? "text-white" : "text-primary"}`} />
                      </div>
                      <span className={`text-sm ${plan.highlight ? "text-white/85" : ""}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full rounded-full py-3.5 font-medium text-sm transition flex items-center justify-center gap-2 hover:-translate-y-0.5 ${
                    plan.highlight ? "bg-white text-primary hover:bg-white/90" : "bg-gradient-primary text-primary-foreground hover:shadow-glow"
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-sm text-muted-foreground mt-8">
            All prices in INR. International clients billed in USD. Custom quotes available for retainers.
          </motion.p>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">Where we're going</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold font-display">Our roadmap</h2>
            <p className="mt-4 text-lg text-muted-foreground">We're not just an agency — we're building toward a broader vision. Here's what's coming.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6">
            {roadmapItems.map((item) => (
              <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -4 }} className="rounded-2xl border border-border bg-card p-7 hover:shadow-elegant transition-all">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                    item.status === "now" ? "bg-green-500/15 text-green-600" : item.status === "soon" ? "bg-amber-500/15 text-amber-600" : "bg-secondary text-muted-foreground"
                  }`}>
                    {item.status === "now" ? "🟢 Live now" : item.status === "soon" ? "🟡 Coming soon" : "📅 Planned"}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{item.quarter}</span>
                </div>
                <h3 className="text-xl font-semibold font-display mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">FAQ</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold font-display">Common questions</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-border bg-card p-7 hover:border-primary/30 transition-all">
                <h3 className="font-semibold text-lg font-display mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-3xl bg-gradient-primary p-12 md:p-16 text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-5">Not sure which plan fits?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Tell us what you're building and we'll recommend the right fit — no pressure, no sales pitch.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition">
                Let's talk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
