import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import { logoBase64 } from "@/assets/logo";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Hirespirit Web Design Portfolio" },
      { name: "description", content: "Browse Hirespirit projects — websites, web apps, and landing pages that delivered real business results for restaurants, SaaS companies, agencies, and more." },
      { property: "og:title", content: "Our Work — Hirespirit Web Design Portfolio" },
      { property: "og:description", content: "Real projects, real results. See how Hirespirit builds digital products that convert." },
      { property: "og:url", content: "https://hirespirit.tech/work" },
    ],
    links: [{ rel: "canonical", href: "https://hirespirit.tech/work" }],
  }),
  component: Work,
});

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const projects = [
  { tag: "Restaurant", title: "Kshatriya",              desc: "Authentic taste, royal experience. Full-stack restaurant site with menu, reservations, and an ambiance-first design.", result: "+65% reservations online", gradient: "from-orange-500 to-amber-400" },
  { tag: "SaaS",       title: "Automation Hub",          desc: "AI-powered automation platform with onboarding flow, pricing tiers, and a dashboard for workflow management.",         result: "5,000+ signups on launch",  gradient: "from-navy to-primary" },
  { tag: "Agency",     title: "Digital Experiences",     desc: "Lead-generating site for a creative production studio, built around motion design and bold visual storytelling.",        result: "3× lead increase MoM",     gradient: "from-primary to-primary-glow" },
  { tag: "Tech",       title: "Powering Business",       desc: "B2B platform marketing site with custom illustrations, case studies, and a high-conversion trial sign-up flow.",        result: "38% conversion lift",      gradient: "from-purple-600 to-primary" },
  { tag: "Portfolio",  title: "Creator Studio",          desc: "Polished portfolio and booking site for a digital creator. Dark mode, video-first layout, integrated Calendly.",         result: "Booked within 48hrs of launch", gradient: "from-gray-700 to-gray-900" },
  { tag: "E-commerce", title: "Boutique Commerce",       desc: "High-end fashion brand store with a custom product configurator and seamless checkout flow.",                            result: "2.1× avg. order value",    gradient: "from-rose-500 to-pink-400" },
];

const steps = [
  { n: "01", title: "Discover", desc: "We map your goals, audience, and the outcomes that matter." },
  { n: "02", title: "Design",   desc: "Distinctive visual direction and clickable prototypes — no templates." },
  { n: "03", title: "Build",    desc: "Production-grade code, performance budgets, and accessibility baked in." },
  { n: "04", title: "Launch",   desc: "Ship, measure, iterate. We stay close after go-live." },
];

function Work() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-[500px] h-[300px] rounded-full bg-primary/8 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-widest">Selected work</motion.p>
            <motion.h1 variants={fadeUp} className="mt-3 text-5xl md:text-7xl font-bold font-display leading-[1.05] max-w-3xl">
              Projects that <span className="text-gradient">move the needle.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Each project here is measured by one thing: did it achieve the client's business goal?
              Here's a selection of the work we're most proud of.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Projects grid ── */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={logoBase64} alt="" className="w-20 h-20 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500 object-contain" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <span className="self-start rounded-full bg-black/30 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">{project.tag}</span>
                    <span className="self-end rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 px-3 py-1 text-xs font-semibold text-green-300">{project.result}</span>
                  </div>
                </div>
                <div className="p-7 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold font-display">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{project.desc}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all mt-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">How we work</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold font-display">A simple, honest process.</h2>
            <p className="mt-4 text-lg text-muted-foreground">No hidden phases, no bloated sprints. Here's exactly how every Hirespirit project runs.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.n} variants={fadeUp} className="relative rounded-2xl border border-border bg-card p-7 hover:shadow-elegant transition-all">
                {i < steps.length - 1 && <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-border z-10" />}
                <div className="text-5xl font-display font-bold text-gradient">{s.n}</div>
                <h3 className="mt-4 text-xl font-semibold font-display">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-widest">Your project next</motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-4xl md:text-5xl font-bold font-display">Want results like these?</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Let's talk about your project. We'll scope it honestly and tell you exactly what we can do.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-8 py-4 font-semibold shadow-elegant hover:shadow-glow transition hover:-translate-y-0.5">
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/plans" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 font-medium hover:bg-accent transition hover:-translate-y-0.5">
                See our plans
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
