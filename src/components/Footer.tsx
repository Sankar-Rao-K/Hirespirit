import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { logoBase64 } from "@/assets/logo";

const Instagram = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const footerLinks = {
  Company: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Our Work", to: "/work" },
    { label: "Plans", to: "/plans" },
  ],
  Services: [
    { label: "Websites", to: "/work" },
    { label: "Web Apps", to: "/work" },
    { label: "Landing Pages", to: "/work" },
    { label: "Brand Systems", to: "/work" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logoBase64} alt="Hirespirit" className="h-10 w-10 object-contain" />
              <span className="font-display font-semibold text-lg tracking-tight">
                hire<span className="text-primary">spirit</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building digital systems for modern businesses. Websites, apps, and brand experiences that convert.
            </p>
            <div className="mt-6 flex gap-4 text-muted-foreground">
              <a href="https://instagram.com/hirespirit.tech" target="_blank" rel="noreferrer" className="hover:text-primary transition w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:hirespiritatz6@gmail.com" className="hover:text-primary transition w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+919491462696" className="hover:text-primary transition w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{group}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hirespirit. All rights reserved.</p>
          <p>Built with ❤️ for modern businesses.</p>
        </div>
      </div>
    </footer>
  );
}
