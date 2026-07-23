import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { absoluteUrl, breadcrumbJsonLd, SITE_NAME, SITE_URL } from "@/lib/site-config";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Hirespirit" },
      { name: "description", content: "Transparent tiered packages for websites, apps and complete industry suites. Bronze, Silver, Gold and Enterprise pricing starts here." },
      { property: "og:title", content: "Packages & Pricing — Hirespirit" },
      { property: "og:description", content: "Bronze, Silver, Gold and Enterprise packages with itemized pricing." },
      { property: "og:url", content: absoluteUrl("/packages") },
      { name: "twitter:title", content: "Packages & Pricing — Hirespirit" },
      { name: "twitter:description", content: "Bronze, Silver, Gold and Enterprise packages with itemized pricing." },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/packages") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Packages & Pricing", "/packages")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Website & app development packages",
          provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          areaServed: "IN",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Hirespirit Packages",
            itemListElement: [
              {
                "@type": "Offer",
                name: "Launch (Bronze)",
                priceCurrency: "INR",
                price: "25000",
                itemOffered: { "@type": "Service", name: "5-page responsive website with basic SEO" },
              },
              {
                "@type": "Offer",
                name: "Grow (Silver)",
                priceCurrency: "INR",
                price: "65000",
                itemOffered: { "@type": "Service", name: "10-page CMS website with bookings and payments" },
              },
              {
                "@type": "Offer",
                name: "Scale (Gold)",
                priceCurrency: "INR",
                priceSpecification: { "@type": "PriceSpecification", minPrice: "150000", priceCurrency: "INR" },
                itemOffered: { "@type": "Service", name: "Website + mobile app with AI automation" },
              },
              {
                "@type": "Offer",
                name: "Suite (Enterprise)",
                itemOffered: { "@type": "Service", name: "Custom multi-app ecosystem with ERP/CRM/HRMS integration" },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: PackagesPage,
});

const website = [
  { tier: "Bronze", name: "Launch", price: "₹25,000", note: "5-page starter", items: ["5-page responsive website", "Contact form + WhatsApp button", "Google Maps + Analytics", "Basic on-page SEO", "SSL setup", "1 month post-launch support"] },
  { tier: "Silver", name: "Grow", price: "₹65,000", note: "Business standard", featured: true, items: ["10-page CMS website", "Admin panel", "Table / appointment booking", "Payment gateway integration", "Local SEO + Google Business", "3 months maintenance"] },
  { tier: "Gold", name: "Scale", price: "₹1,50,000+", note: "Complete suite", items: ["Website + mobile app", "AI chatbot / automation", "Admin + vendor dashboards", "Cloud hosting + CI/CD", "Advanced SEO + analytics", "6 months priority support"] },
  { tier: "Enterprise", name: "Suite", price: "Custom", note: "Full industry suite", items: ["Multi-app ecosystem", "ERP / CRM / HRMS integration", "Dedicated project manager", "SLA-backed uptime", "Ongoing R&D partnership", "12+ months maintenance"] },
];

const industryExamples = [
  {
    industry: "Restaurant Suite",
    tiers: [
      { name: "Bronze", price: "₹20k–35k", items: ["Menu website", "QR menu", "WhatsApp orders"] },
      { name: "Silver", price: "₹40k–70k", items: ["Everything in Bronze", "Table reservation", "Admin panel + gallery"] },
      { name: "Gold", price: "₹80k–1.5L+", items: ["Everything in Silver", "Online ordering + payments", "PWA + loyalty + AI bot"] },
    ],
  },
  {
    industry: "Gym & Fitness Suite",
    tiers: [
      { name: "Bronze", price: "₹25k–40k", items: ["Gym website", "Membership form", "Trainer profiles"] },
      { name: "Silver", price: "₹60k–1L", items: ["Member app", "Attendance", "Payments + diet plans"] },
      { name: "Gold", price: "₹1.5L+", items: ["Full ecosystem", "Trainer dashboard", "AI workout recommender"] },
    ],
  },
  {
    industry: "Hospital / Clinic Suite",
    tiers: [
      { name: "Bronze", price: "₹35k–60k", items: ["Website + doctor profiles", "Appointment form", "Contact + maps"] },
      { name: "Silver", price: "₹90k–1.8L", items: ["Patient portal", "Online booking", "Payments + reminders"] },
      { name: "Gold", price: "₹2.5L+", items: ["Full EMR system", "Doctor & patient apps", "Lab / pharmacy integration"] },
    ],
  },
];

function PackagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative bg-emerald-hero grain-overlay text-cream pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">Packages & pricing</p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl">
            Priced honestly. <span className="text-gradient-gold italic font-normal">Scoped clearly.</span>
          </h1>
          <p className="mt-6 text-lg text-cream/75 max-w-2xl">
            Every quote is itemized — discovery, design, development, SEO, deployment and
            testing. No surprise invoices. Ever.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Core packages</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-deep">Starting points for any project.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {website.map((p) => (
              <div key={p.name} className={`rounded-2xl p-7 border transition-all ${p.featured ? "bg-emerald-gradient text-cream border-transparent shadow-elegant" : "bg-card border-primary-deep/10 hover:border-primary/30"}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest ${p.featured ? "text-gold" : "text-primary"}`}>{p.tier}</p>
                <h3 className={`mt-2 text-2xl font-semibold ${p.featured ? "text-cream" : "text-primary-deep"}`}>{p.name}</h3>
                <p className={`text-sm ${p.featured ? "text-cream/70" : "text-muted-foreground"}`}>{p.note}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className={`text-2xl font-display font-semibold ${p.featured ? "text-gold" : "text-primary-deep"}`}>{p.price}</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className={`flex items-start gap-2 text-sm ${p.featured ? "text-cream/85" : "text-foreground/80"}`}>
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${p.featured ? "text-gold" : "text-primary"}`} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Industry suites</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-deep max-w-2xl">Purpose-built bundles for common industries.</h2>
          </div>
          <div className="space-y-6">
            {industryExamples.map((ind) => (
              <div key={ind.industry} className="rounded-3xl bg-card border border-primary-deep/10 p-8">
                <h3 className="text-2xl font-semibold text-primary-deep mb-6">{ind.industry}</h3>
                <div className="grid md:grid-cols-3 gap-5">
                  {ind.tiers.map((t) => (
                    <div key={t.name} className="rounded-2xl bg-cream/50 border border-primary-deep/5 p-5">
                      <div className="flex items-baseline justify-between">
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{t.name}</p>
                        <span className="text-gold font-display font-semibold">{t.price}</span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {t.items.map((i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="w-1 h-1 mt-2 rounded-full bg-gold shrink-0" /> {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary-deep">Need something custom?</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Every business is different. Send us your requirements and we'll come back with
            an itemized proposal — no templates, no guesswork.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-gradient text-cream px-7 py-3.5 font-medium shadow-elegant hover:shadow-gold transition-all">
            Request a proposal <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
