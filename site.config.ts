import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Sloeberry Spirits",
    tagline: "Small-batch fruit liqueurs, straight from the farm.",
    description: "Sloeberry Spirits is a family-run distillery nestled on a farm on the Rutland-Leicestershire border, handcrafting premium fruit and dessert liqueurs the traditional way. Every bottle begins with hand-foraged and carefully selected fruits, slowly infused into fine spirits to coax out the deepest, most natural flavours. From their award-winning Sloe Gin to indulgent Salted Caramel Vodka, each liqueur is a taste of the Melton Mowbray countryside in a bottle.",
    email: "hello@sloeberryspirits.co.uk",
    location: "Melton Mowbray, Leicestershire",
    foundedYear: 2015,
    logoUrl: "https://static.wixstatic.com/media/4751f9_d961d15242454dc58958f740ce730d7e~mv2.png/v1/fill/w_660,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto",
    socialInstagram: "https://instagram.com/sloeberryspirits",
    socialFacebook: "https://facebook.com/sloeberryspirits",
  },

  features: {
    producerOnboarding: false,
    adminPanel: false,
    multiProducer: false,
    stripeConnect: false,
    reviews: true,
  },

  stats: [
    { value: "Award-Winning", label: "Sloe Gin" },
    { value: "10+", label: "Unique Flavours" },
    { value: "100%", label: "Family Made" },
    { value: "Est. 2015", label: "Melton Mowbray" },
  ],
};

export default config;
