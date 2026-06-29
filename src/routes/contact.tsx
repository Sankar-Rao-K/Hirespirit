import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const contactInfo = [
  { Icon: Mail,          label: "Email us",           value: "hirespiritatz6@gmail.com",  href: "mailto:hirespiritatz6@gmail.com" },
  { Icon: Phone,         label: "Call or WhatsApp",   value: "+91 94914 62696",            href: "tel:+919491462696" },
  { Icon: InstagramIcon, label: "Instagram",           value: "@hirespirit.tech",           href: "https://instagram.com/hirespirit.tech" },
  { Icon: Clock,         label: "Response time",      value: "Within 1 business day",      href: null },
];

const services = ["Website", "Web App", "Landing Page", "Brand System", "Automation", "Portfolio", "Other"];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/8 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-widest">Get in touch</motion.p>
            <motion.h1 variants={fadeUp} className="mt-3 text-5xl md:text-7xl font-bold font-display leading-[1.05] max-w-3xl">
              Let's build something <span className="text-gradient">together.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Tell us about your project and we'll come back with a clear, honest proposal —
              no fluff, no bait-and-switch.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact section ── */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-12">

          {/* Info panel */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="lg:col-span-2 space-y-5">
            {contactInfo.map(({ Icon, label, value, href }) => (
              <motion.div key={label} variants={fadeUp} className="flex gap-4 items-start p-5 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Icon />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="font-medium hover:text-primary transition">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div variants={fadeUp} className="rounded-2xl bg-secondary/60 p-6 space-y-4">
              <p className="font-semibold font-display">What to expect</p>
              {["We read every message personally", "Reply within 1 business day", "Honest, no-pressure scoping call", "Clear written proposal after call"].map((item) => (
                <div key={item} className="flex gap-2.5 items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-3">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl border border-green-200 bg-green-50 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-3">Message received!</h3>
                <p className="text-muted-foreground">We'll get back to you within one business day. Check your email for a confirmation.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-5 shadow-card">
                <h2 className="text-2xl font-bold font-display mb-6">Tell us about your project</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your name *</label>
                    <input required placeholder="Full name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input required type="email" placeholder="you@company.com" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company / Project name</label>
                  <input placeholder="Optional" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">What do you need?</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedService(s === selectedService ? null : s)}
                        className={`px-4 py-2 rounded-full text-sm border transition ${
                          selectedService === s
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background hover:border-primary/50 hover:bg-accent"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget range</label>
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition text-foreground">
                    <option value="">Select a range</option>
                    <option>Under ₹30,000</option>
                    <option>₹30,000 – ₹75,000</option>
                    <option>₹75,000 – ₹2,00,000</option>
                    <option>₹2,00,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your project *</label>
                  <textarea required rows={5} placeholder="What are you building? What's the main goal? What's your timeline?" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none" />
                </div>

                <button type="submit" className="w-full rounded-xl bg-gradient-primary text-primary-foreground py-4 font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
                  Send inquiry <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  We read every message personally and reply within 1 business day.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
