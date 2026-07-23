import { Link } from "@tanstack/react-router";
import { Mail, Phone, Instagram, ArrowUpRight } from "lucide-react";
import { logoBase64 } from "@/assets/logo";

const footerLinks = {
  Services: [
    { label: "Websites", to: "/services" },
    { label: "Mobile Apps", to: "/services" },
    { label: "Custom Software", to: "/services" },
    { label: "AI Solutions", to: "/services" },
    { label: "SEO & Marketing", to: "/services" },
  ],
  Industries: [
    { label: "Healthcare", to: "/industries" },
    { label: "Education", to: "/industries" },
    { label: "Restaurants", to: "/industries" },
    { label: "Real Estate", to: "/industries" },
    { label: "E-commerce", to: "/industries" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Packages", to: "/packages" },
    { label: "Contact", to: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-cream/90 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_60%_50%_at_10%_0%,var(--primary)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logoBase64} alt="Hirespirit" className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40" />
              <span className="font-display font-semibold text-lg tracking-tight text-cream">
                hire<span className="text-gradient-gold">spirit</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-cream/70 max-w-xs">
              A technology partner for modern businesses. Websites, apps, AI, and digital
              systems engineered to grow your business.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 text-gold px-5 py-2.5 text-sm font-medium hover:bg-gold hover:text-primary-deep transition-all"
            >
              Book a discovery call <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com/hirespirit.tech" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-cream/15 hover:border-gold hover:text-gold transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:hirespiritatz6@gmail.com" className="w-9 h-9 flex items-center justify-center rounded-full border border-cream/15 hover:border-gold hover:text-gold transition">
                <Mail className="w-4 h-4" />
              </a>
              <a href="tel:+919491462696" className="w-9 h-9 flex items-center justify-center rounded-full border border-cream/15 hover:border-gold hover:text-gold transition">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-5">{group}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-cream/70 hover:text-cream transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Hirespirit. Crafted with intent.</p>
          <p>Hyderabad, India · hirespiritatz6@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
