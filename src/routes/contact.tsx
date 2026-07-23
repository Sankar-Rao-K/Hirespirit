import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hirespirit" },
      { name: "description", content: "Start your project with Hirespirit. Book a free discovery call or send us your brief — we respond within 24 hours." },
      { property: "og:title", content: "Contact — Hirespirit" },
      { property: "og:description", content: "Book a discovery call or send your project brief." },
      { property: "og:url", content: absoluteUrl("/contact") },
      { name: "twitter:title", content: "Contact — Hirespirit" },
      { name: "twitter:description", content: "Book a discovery call or send your project brief." },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Contact", "/contact")),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative bg-emerald-hero grain-overlay text-cream pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">Get in touch</p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] max-w-3xl">
            Tell us what you're <span className="text-gradient-gold italic font-normal">building.</span>
          </h1>
          <p className="mt-6 text-lg text-cream/75 max-w-2xl">
            Every proposal comes back within 48 hours — scoped, timelined and priced line-by-line.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream/40">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <div className="rounded-3xl bg-card border border-primary-deep/10 p-8 md:p-10 shadow-soft">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-16">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-deep">Thanks — we got it.</h3>
                <p className="mt-2 text-muted-foreground">We'll reply within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-5"
              >
                <h2 className="text-2xl font-semibold text-primary-deep mb-2">Send us your brief</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Company" name="company" />
                  <Field label="Phone / WhatsApp" name="phone" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-primary-deep/70">Service interested in</label>
                  <select className="mt-2 w-full rounded-xl border border-primary-deep/15 bg-cream/40 px-4 py-3 text-sm text-primary-deep focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none">
                    <option>Website Development</option>
                    <option>Mobile App</option>
                    <option>Custom Software / ERP</option>
                    <option>AI Solution</option>
                    <option>SEO & Marketing</option>
                    <option>Complete Industry Suite</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-primary-deep/70">Tell us about your project</label>
                  <textarea
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-primary-deep/15 bg-cream/40 px-4 py-3 text-sm text-primary-deep placeholder-primary-deep/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                    placeholder="Business, goals, timeline, budget range..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-gradient text-cream px-7 py-3.5 font-medium shadow-elegant hover:shadow-gold hover:-translate-y-0.5 transition-all"
                >
                  Send brief <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <ContactCard icon={Mail} label="Email" value="hirespiritatz6@gmail.com" href="mailto:hirespiritatz6@gmail.com" />
            <ContactCard icon={Phone} label="Phone / WhatsApp" value="+91 94914 62696" href="tel:+919491462696" />
            <ContactCard icon={Instagram} label="Instagram" value="@hirespirit.tech" href="https://instagram.com/hirespirit.tech" />
            <ContactCard icon={MapPin} label="Based in" value="Hyderabad, India" />

            <div className="rounded-3xl bg-emerald-gradient text-cream p-8 mt-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(201,168,76,0.5)_1px,transparent_0)] [background-size:24px_24px]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">Response time</p>
                <p className="mt-3 text-2xl font-display font-semibold">Under 24 hours</p>
                <p className="mt-2 text-sm text-cream/70">
                  Monday–Saturday, we respond to every enquiry personally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-widest text-primary-deep/70">{label}{required && " *"}</label>
      <input
        id={name} name={name} type={type} required={required}
        className="mt-2 w-full rounded-xl border border-primary-deep/15 bg-cream/40 px-4 py-3 text-sm text-primary-deep placeholder-primary-deep/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
      />
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl bg-card border border-primary-deep/10 p-5 hover:border-gold/40 hover:shadow-soft transition-all">
      <div className="w-11 h-11 rounded-xl bg-emerald-gradient flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-deep/60">{label}</p>
        <p className="text-primary-deep font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}
