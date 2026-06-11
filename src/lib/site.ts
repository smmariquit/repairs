// src/lib/site.ts

export const site = {
  name: "Stimmie Repairs",
  shortName: "repairs.stimmie.dev",
  domain: "repairs.stimmie.dev",
  url: "https://repairs.stimmie.dev",
  tagline: "Cellphone repair & laptop cleaning, done right.",
  description:
    "Affordable cellphone repair and thorough laptop cleaning services. Fast turnaround, transparent pricing, and a satisfaction guarantee.",
  contact: {
    email: "hello@repairs.stimmie.dev",
    phone: "+63 900 000 0000",
    location: "Metro Manila, Philippines",
  },
  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    github: "https://github.com/smmariquit",
  },
} as const;

export type Site = typeof site;
