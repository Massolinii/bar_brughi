import Navbar from "@/components/Navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import NavbarAddress from "@/components/NavbarAddress";

import { Quicksand } from "next/font/google";

const inter = Quicksand({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Bar Brughi",
  description: "Brughi Baaaaaar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="text-white">
          <NavbarAddress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Copyright />
        </div>
      </body>
    </html>
  );
}
