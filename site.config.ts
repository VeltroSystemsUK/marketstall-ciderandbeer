import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Sloeberry Spirits",
    tagline: "Handpicked. Farm-made. Unmistakably English.",
    description: "Sloeberry Spirits is a small family business nestled on a farm on the Rutland-Leicestershire border, crafting small-batch fruit liqueurs and sloe gin using time-honoured infusion methods. Every bottle begins with handpicked fruits and the finest base spirits, resulting in flavours that are vivid, generous, and unmistakably rooted in the English countryside. From award-winning Sloe Gin to indulgent Salted Caramel Vodka, this is liqueur-making with real soul.",
    email: "hello@sloeberryspirits.co.uk",
    location: "Melton Mowbray, Leicestershire",
    foundedYear: 2018,
    logoUrl: "https://static.wixstatic.com/media/4751f9_d961d15242454dc58958f740ce730d7e~mv2.png/v1/fill/w_660,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4751f9_d961d15242454dc58958f740ce730d7e~mv2.png",
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
    { value: "10+", label: "Distinct Flavours" },
    { value: "Farm-Made", label: "Rutland Border" },
    { value: "Est. 2018", label: "Melton Mowbray" },
  ],
};

export default config;
