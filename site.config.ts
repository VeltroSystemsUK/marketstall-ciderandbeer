import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Orchard & Hop",
    tagline: "Small-batch cider and craft beer from Herefordshire orchards",
    description:
      "We press our own apples and pears from century-old orchards in Herefordshire, ferment slowly in oak vats, and brew small-batch craft ales in our converted barn. Nothing force-carbonated, nothing pasteurised — just honest, living drinks.",
    email: "hello@orchardandhop.co.uk",
    location: "Ledbury, Herefordshire",
    foundedYear: 2011,
    socialInstagram: "https://instagram.com/orchardandhop",
    socialFacebook: "https://facebook.com/orchardandhop",
  },

  features: {
    producerOnboarding: false,
    adminPanel: false,
    multiProducer: false,
    stripeConnect: false,
    reviews: true,
  },

  stats: [
    { value: "20+", label: "Apple Varieties" },
    { value: "12", label: "Brews on Tap" },
    { value: "4.8★", label: "Average Rating" },
    { value: "Est. 2011", label: "Herefordshire" },
  ],
};

export default config;
