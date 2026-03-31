import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NISR Open Data Portal | Republic of Rwanda",
  description: "Official Open Data Portal for the National Institute of Statistics of Rwanda (NISR), providing high-quality, verified public datasets for research, innovation, and transparency.",
  keywords: ["Rwanda", "Open Data", "NISR", "Statistics", "Kigali", "Public Data", "Datasets"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 selection:bg-[#00A1DE]/30`}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-32 pb-20">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster 
            position="bottom-right"
            toastOptions={{
              className: 'rounded-2xl font-bold text-xs',
              style: {
                background: '#0f172a',
                color: '#fff',
                padding: '16px 24px',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
