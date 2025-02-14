import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import { FaWhatsapp } from "react-icons/fa";
// import { Analytics } from "@vercel/analytics/react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Krivan",
  description: "The fastest way to boost your Business online presence.",
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
      <body className="bg-background text-foreground">
        {/* <Analytics /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col gap-20 items-center">
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </ThemeProvider>
        <div className="fixed bottom-6 right-0 z-50 w-20 h-20 ps-4 p-2 bg-slate-950 rounded-l-xl">
          <a
            href="https://whatsapp.me/254113743723"
            target="_blank"
            className="text-green-500 hover:text-white transition"
          >
            <FaWhatsapp size={48} />
          </a>
        </div>
      </body>
    </html>
  );
}
