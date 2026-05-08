import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.contact.email,
    telephone: site.contact.phone,
    areaServed: site.contact.location,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.location,
      addressCountry: "PH",
    },
    sameAs: Object.values(site.socials),
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
