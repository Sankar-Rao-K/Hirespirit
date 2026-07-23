import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Target, Users, Sparkles, Code2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/site-config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hirespirit" },
      { name: "description", content: "Hirespirit is a technology partner building websites, apps, AI and custom software for modern businesses. Meet the studio behind the work." },
      { property: "og:title", content: "About — Hirespirit" },
      { property: "og:description", content: "A technology partner, not just a development shop." },
      { property: "og:url", content: absoluteUrl("/about") },
      { name: "twitter:title", content: "About — Hirespirit" },
      { name: "twitter:description", content: "A technology partner, not just a development shop." },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("About", "/about")),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, t: "Business first", d: "We don't sell code — we sell outcomes. Every project is scoped around your business goals, not our stack." },
  { icon: Users, t: "Long-term partners", d: "We stay after launch. Maintenance, iteration and growth are baked into how we work." },
  { icon: Sparkles, t: "Craft matters", d: "Design and engineering standards are non-negotiable. Nothing ships until we'd be proud to show it." },
  { icon: Code2, t: "You own it", d: "Source code, hosting, admin logins, documentation — everything is handed over on day one." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative bg-emerald-hero grain-overlay text-cream pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">About Hirespirit</p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl">
            A studio that thinks like a <span className="text-gradient-gold italic font-normal">co-founder.</span>
          </h1>
          <p className="mt-6 text-lg text-cream/75 max-w-2xl">
            We started Hirespirit because most businesses don't need a "developer" —
            they need a partner who understands technology, design and growth in equal parts.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Our story</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-deep">Built for the modern business owner.</h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Hirespirit exists to close the gap between "I have an idea" and "we have a running business." We build websites, apps, AI systems and custom software — but what we really deliver is speed, clarity and confidence.
            </p>
            <p>
              We work with restaurants, clinics, schools, real estate firms, gyms, startups and enterprises. Some need a website. Some need a complete digital suite. Every engagement is scoped honestly and delivered on a fixed timeline.
            </p>
            <p>
              We're not the biggest agency. We're the one that shows up, ships fast, and stays after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">What we stand for</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-deep">Values that shape every project.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl bg-card border border-primary-deep/10 p-8 hover:border-primary/30 transition-all">
                <div className="w-11 h-11 rounded-xl bg-emerald-gradient flex items-center justify-center mb-5">
                  <v.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-primary-deep">{v.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary-deep">Let's build something worth building.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-gradient text-cream px-7 py-3.5 font-medium shadow-elegant hover:shadow-gold transition-all">
            Get in touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
