import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { logoBase64 } from "@/assets/logo";


const navLinks = [
  { label: "Home",    to: "/" },
  { label: "About",   to: "/about" },
  { label: "Plans",   to: "/plans" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState           = useRouterState();
  const currentPath           = routerState.location.pathname;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/90 border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="Hirespirit home">
          <img src={logoBase64} alt="Hirespirit logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-1 ring-border" />
          <span className="font-display font-semibold text-lg tracking-tight">
            hire<span className="text-primary">spirit</span>
          </span>
        </Link>

        {/* Desktop links — active state uses font-weight, no underline */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={currentPath === link.to ? "page" : undefined}
              className={`transition-colors ${
                currentPath === link.to
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
        >
          Build Your Ideas <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-accent transition"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl px-6 py-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              aria-current={currentPath === link.to ? "page" : undefined}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                currentPath === link.to
                  ? "bg-accent text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-full bg-gradient-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Build Your Ideas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
