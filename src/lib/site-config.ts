// Central place for site-wide identity used across meta tags, canonical URLs,
// Open Graph / Twitter cards and structured data (JSON-LD).
//
// IMPORTANT: replace SITE_URL below with your real, live domain before you
// deploy. This one value drives every canonical link, og:url and schema.org
// "url" field across the entire site — update it here and everything stays
// in sync. Also update the two occurrences of this domain in
// public/robots.txt and public/sitemap.xml (they're static files, so they
// can't import this constant).
export const SITE_URL = "https://hirespirit.com";

export const SITE_NAME = "Hirespirit";

export const SITE_TAGLINE = "Digital solutions for modern businesses";

export const SITE_DESCRIPTION =
  "Hirespirit is a full-service technology partner: websites, mobile apps, custom software, AI solutions, SEO and hosting for businesses across every industry.";

// BCP 47 locale for og:locale. Change to match your primary audience.
export const SITE_LOCALE = "en_IN";

export const CONTACT = {
  email: "hirespiritatz6@gmail.com",
  phoneDisplay: "+91 94914 62696",
  phoneE164: "+919491462696",
  instagram: "https://instagram.com/hirespirit.tech",
  city: "Hyderabad",
  region: "Telangana",
  country: "IN",
};

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const LOGO_IMAGE = `${SITE_URL}/favicon.png`;

/** Builds an absolute canonical/og:url for a given site-relative path. */
export function absoluteUrl(path: string = "/") {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Organization structured data (JSON-LD), rendered once, site-wide, in __root.tsx. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_IMAGE,
    image: OG_IMAGE,
    description: SITE_DESCRIPTION,
    email: CONTACT.email,
    telephone: CONTACT.phoneE164,
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.region,
      addressCountry: CONTACT.country,
    },
    sameAs: [CONTACT.instagram],
  };
}

/** BreadcrumbList structured data for a single-level subpage. */
export function breadcrumbJsonLd(pageName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: pageName, item: absoluteUrl(path) },
    ],
  };
}
