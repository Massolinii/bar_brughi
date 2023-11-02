"use client";
import ChiSiamo from "@/components/chi-siamo/ChiSiamo";
import Contatti from "@/components/chi-siamo/Contatti";
import DoveSiamo from "@/components/chi-siamo/DoveSiamo";

export default function Page() {
  return (
    <main>
      <h1 className="text-center py-4 text-6xl lg:text-8xl border-b">
        Chi Siamo
      </h1>
      <div className="pt-10 mb:pt-20 dotted-background">
        <ChiSiamo />
        <DoveSiamo />
        <Contatti />
      </div>
    </main>
  );
}
