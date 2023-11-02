import Navbar from "@/components/Navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import NavbarAddress from "@/components/NavbarAddress";

import localFont from "next/font/local";

const barbooth = localFont({
  src: "./barbooth.ttf",
  display: "swap",
});

export const metadata = {
  title: "Brughi Bar",
  description: "Il miglior bar della provincia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barbooth.className}>
        <div className="text-white tracking-widest">
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
