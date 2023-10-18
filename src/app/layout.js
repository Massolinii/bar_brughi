import Navbar from "@/components/Navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import NavbarAddress from "@/components/NavbarAddress";

import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bar Brughi",
  description: "Brughi Baaaaaar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-white">
          <NavbarAddress />
          <Navbar />
          <main className="font-nunito">{children}</main>
          <Footer />
          <Copyright />
        </div>
      </body>
    </html>
  );
}
