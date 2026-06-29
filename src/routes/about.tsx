import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Target, Heart, Lightbulb, Users, Rocket } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { logoBase64 } from "@/assets/logo";

export const Route = createFileRoute("/about")({
  component: About,
});

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const values = [
  { icon: Heart,     title: "Client-first always",    desc: "Every decision we make runs through one filter: does this serve our client's goals? Not our portfolio, not our aesthetic — your results." },
  { icon: Lightbulb, title: "Clarity over complexity", desc: "We simplify before we build. Clear thinking leads to clean products that are easier to use, maintain, and grow." },
  { icon: Rocket,    title: "Momentum is sacred",      desc: "We move fast without cutting corners. Good things shouldn't take forever, and great work doesn't need to." },
  { icon: Users,     title: "Radical transparency",    desc: "You'll always know where your project stands. No hidden scopes, no surprise costs, no vanishing acts post-launch." },
];

const milestones = [
  { year: "2023", title: "Founded",        desc: "Hirespirit was born from a simple frustration — great businesses deserved better digital presence." },
  { year: "2024", title: "First 20 clients", desc: "Grew from a one-person shop to a focused team. Shipped 20+ projects across restaurants, SaaS, and agencies." },
  { year: "2025", title: "Scale & Systems", desc: "Built repeatable systems for faster delivery. Launched our brand identity service. Crossed 50 projects." },
  { year: "2026", title: "Now",             desc: "Booking premium projects for Q3. Expanding into product strategy and technical co-founding partnerships." },
];

const team = [
  { name: "Founder & CEO",  role: "Strategy & Vision",    initials: "HS", color: "from-navy to-primary" },
  { name: "Lead Designer",  role: "UX & Visual Design",   initials: "LD", color: "from-primary to-primary-glow" },
  { name: "Lead Engineer",  role: "Frontend & Backend",   initials: "LE", color: "from-primary-glow to-navy" },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-primary/8 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-widest">Who we are</motion.p>
            <motion.h1 variants={fadeUp} className="mt-3 text-5xl md:text-7xl font-bold font-display leading-[1.05] max-w-3xl">
              We build digital things that <span className="text-gradient">actually work.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Hirespirit is a small, senior team of designers and engineers who take on ambitious digital
              projects for founders and growing companies. We're obsessed with craft, speed, and outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-gradient-primary p-10 text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white/10" />
            <div className="absolute bottom-0 right-12 w-40 h-40 rounded-full bg-white/5" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium uppercase tracking-widest opacity-70 mb-3">Our Vision</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight mb-5">
                A world where every great idea gets a great digital home.
              </h2>
              <p className="text-white/80 leading-relaxed text-lg">
                We believe quality digital products shouldn't be locked behind enterprise budgets or months
                of agency process. Hirespirit exists to make exceptional digital work accessible, fast, and built to last.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-border bg-card p-10 relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-primary/5" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight mb-5">
                Build conversion-first digital products. On time. Every time.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We combine senior design and engineering talent with the speed and ownership of a startup team.
                Every project comes with a clear scope, defined timeline, and a team that treats your
                success as their own measure of success.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">What drives us</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold font-display">Our core values</h2>
            <p className="mt-4 text-lg text-muted-foreground">These aren't wall posters. They're the principles that shape every project decision.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-16 grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-elegant transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-display mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">Our journey</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold font-display">How we got here</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center`}
                >
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-primary -translate-x-1/2 mt-1 md:mt-0 border-2 border-background" />
                  <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? "md:pr-16 md:text-right md:w-1/2" : "md:pl-16 md:w-1/2"}`}>
                    <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">{m.year}</span>
                    <h3 className="text-xl font-semibold font-display">{m.title}</h3>
                    <p className="mt-2 text-muted-foreground">{m.desc}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">The team</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold font-display">Small team. Big output.</h2>
            <p className="mt-4 text-lg text-muted-foreground">Every person on a project is a senior. No juniors padding the hours.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-border bg-card p-8 text-center hover:shadow-elegant transition-all"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto text-white text-2xl font-bold mb-5 font-display`}>
                  {member.initials}
                </div>
                <h3 className="font-semibold text-lg font-display">{member.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-gradient-primary p-12 md:p-16 text-center text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <img src={logoBase64} alt="" className="w-16 h-16 object-contain mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-5">Let's work together</h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Whether you have a fully-formed brief or just an idea on a napkin, we'd love to hear from you.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition">
                Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
