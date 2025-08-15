import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import WhatsappIcon from "@/components/whatsapp";
import { Viewport, Metadata } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    template: "%s | Krivan Marketing Group",
    default: "Krivan Marketing Group",
  },
  description:
    "Beyond traditional marketing, Krivan Marketing Group offers tax filing, business registration, and website creation, providing the compliance, structure, and digital presence you need to grow effectively.",
  openGraph: {
    siteName: "Krivan Marketing Group",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground flex flex-col min-h-screen">
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col flex-1 ">
            <Navbar />
            <main className="container mx-auto flex-1 max-w-5xl">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
        <WhatsappIcon />
      </body>
    </html>
  );
}
