import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Stethoscope, GraduationCap, UtensilsCrossed, Building2, ShoppingBag, Plane, Dumbbell, Landmark, Factory, Truck, Scale, Hotel, Church, Newspaper } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/site-config";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Hirespirit" },
      { name: "description", content: "Purpose-built digital solutions for healthcare, education, restaurants, real estate, e-commerce, hospitality, finance and 15+ more industries." },
      { property: "og:title", content: "Industries — Hirespirit" },
      { property: "og:description", content: "Purpose-built solution suites for every vertical." },
      { property: "og:url", content: absoluteUrl("/industries") },
      { name: "twitter:title", content: "Industries — Hirespirit" },
      { name: "twitter:description", content: "Purpose-built solution suites for every vertical." },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/industries") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Industries", "/industries")),
      },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Stethoscope, name: "Healthcare", solutions: ["Hospital websites", "Doctor appointment booking", "Patient portal + EMR", "Pharmacy delivery apps", "Lab report portals", "AI health chatbots"] },
  { icon: GraduationCap, name: "Education", solutions: ["School / college websites", "Student & parent apps", "School ERP", "Online admissions", "LMS + live classes", "Coaching test platforms"] },
  { icon: UtensilsCrossed, name: "Restaurants & Cafés", solutions: ["Restaurant websites", "QR / digital menus", "Table booking", "WhatsApp ordering", "Kitchen display + delivery app", "Loyalty programs"] },
  { icon: Building2, name: "Real Estate", solutions: ["Property portals", "Agent CRM", "Virtual tours", "EMI calculators", "Lead management", "Builder project sites"] },
  { icon: ShoppingBag, name: "Retail & E-commerce", solutions: ["Single & multi-vendor stores", "POS + inventory", "Grocery / pharmacy delivery", "Loyalty & rewards", "Wholesale dealer portals", "B2B marketplaces"] },
  { icon: Hotel, name: "Hotels & Hospitality", solutions: ["Hotel booking engines", "Room availability & payments", "Guest experience apps", "Review management", "Convention hall booking", "Cloud kitchen ordering"] },
  { icon: Plane, name: "Travel & Tourism", solutions: ["Tour package websites", "Booking engines", "Driver + customer apps", "Trip planners", "Travel agency CRM", "Bus / taxi booking"] },
  { icon: Dumbbell, name: "Fitness & Wellness", solutions: ["Gym websites & apps", "Membership + payments", "Workout & diet tracking", "Trainer dashboards", "Attendance systems", "Subscription platforms"] },
  { icon: Landmark, name: "Finance & Insurance", solutions: ["Loan management", "EMI calculators", "Customer portals", "Policy & claims management", "CRM for advisors", "Digital wallet apps"] },
  { icon: Factory, name: "Manufacturing", solutions: ["ERP + inventory", "Production tracking", "Vendor portals", "Warehouse management", "Quality control", "Machine monitoring"] },
  { icon: Truck, name: "Logistics", solutions: ["Shipment tracking", "Fleet management", "Driver apps", "Delivery dashboards", "GPS + route optimization", "Courier platforms"] },
  { icon: Scale, name: "Professional Services", solutions: ["Law firm websites", "Case management", "CA client portals", "Architect / designer portfolios", "Consultation booking", "Webinar platforms"] },
  { icon: Church, name: "Religious & NGO", solutions: ["Temple / church / mosque sites", "Donation platforms", "Event calendars", "Live streaming", "Volunteer portals", "Community apps"] },
  { icon: Newspaper, name: "Media & Entertainment", solutions: ["News portals", "OTT platforms", "Podcast & radio sites", "Magazine platforms", "Video streaming", "Subscription management"] },
];

function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative bg-emerald-hero grain-overlay text-cream pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">Industry expertise</p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl">
            Solutions built for <span className="text-gradient-gold italic font-normal">your industry.</span>
          </h1>
          <p className="mt-6 text-lg text-cream/75 max-w-2xl">
            We don't sell generic websites — we deliver complete digital suites,
            engineered around how your industry actually runs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream/40">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-3xl bg-card border border-primary-deep/10 p-8 hover:border-gold/40 hover:shadow-elegant transition-all group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-gradient flex items-center justify-center">
                    <ind.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-deep">{ind.name}</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary-deep/30 group-hover:text-gold group-hover:rotate-12 transition-all" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
                {ind.solutions.map((s) => (
                  <div key={s} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary-deep">Don't see your industry?</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            We build for startups, MVPs, corporate internal tools, government portals and
            anything in between. Tell us the problem — we'll design the solution.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-gradient text-cream px-7 py-3.5 font-medium shadow-elegant hover:shadow-gold transition-all">
            Talk to us <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
