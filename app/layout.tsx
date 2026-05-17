import type { Metadata, Viewport } from "next";
import { Josefin_Slab, Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/AuthContext";
import { BasketProvider } from "@/contexts/BasketContext";
import config from "@/site.config";
import "./globals.css";

const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin-slab",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const title = `${config.brand.name} — ${config.brand.location}`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${config.brand.name}`,
  },
  description: config.brand.description,
  keywords: [
    "craft cider",
    "artisan beer",
    config.brand.location,
    "orchard cider",
    "perry",
    "small batch",
  ],
  authors: [{ name: "Veltro Ltd" }],
  creator: "Veltro Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: config.brand.name,
    title,
    description: config.brand.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1569937756344-f9a024f80046?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.brand.name,
    description: config.brand.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#275f34",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${josefinSlab.variable} ${montserrat.variable}`}
    >
      <body>
        <AuthProvider>
          <BasketProvider>
            {children}
            <Toaster
              position="bottom-center"
              toastOptions={{
                style: {
                  background: "#204c2a",
                  color: "#fff",
                  borderRadius: "10px",
                  fontFamily: "var(--font-montserrat)",
                },
                success: {
                  iconTheme: { primary: "#e87518", secondary: "#fff" },
                },
              }}
            />
          </BasketProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
