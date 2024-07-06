import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lea Beauty",
  description: "Explore beauty tips, tutorials, and product reviews.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
       
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-5A2LfwT5BlknWV/jm7uR3Wwh4PY4J8k4ptK1CpW8hWgkU1xgIXrGy3KTK30IEk/8" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <header>
          <Navbar/>
        </header>
        <main>{children}</main>
        <Footer/>
         <div className="bg"></div>
         <div className="bg bg2"></div>
         <div className="bg bg3"></div>
      </body>
    </html>
  );
}
