import Navbar from "@/components/Navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import NavbarAddress from "@/components/NavbarAddress";

import { bonnie } from "@/assets/FontExport";

export const metadata = {
  title: "Brughi Bar",
  description: "Il miglior bar della provincia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bonnie.className}>
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
