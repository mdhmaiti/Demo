import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "grocery online",
  description: " shop for healthy foods online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
      
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <main className="flex flex-col min-h-screen relative  ">
              <div className="absolute h-screen  -z-50 inset-8 opacity-30 blur-3xl bg-gradient-to-r from-slate-300 to-rose-500"/>
              <Navbar />

              <div className="flex-1"> {children}
               </div>
              
               <Toaster />
              
               <Footer />
            </main>
            
        </ThemeProvider>
      </body>
    </html>
  );
}
