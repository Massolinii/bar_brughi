"use client";
import Caffetteria from "@/components/menu/Caffetteria";
import Drink from "@/components/menu/Drink";
import Food from "@/components/menu/Food";

export default function Page() {
  return (
    <main>
      <h1 className="text-center py-4 text-6xl lg:text-8xl border-b">
        Il Nostro Menù
      </h1>
      <div className="dotted-background">
        <Caffetteria />
        <Food />
        <Drink />
      </div>
    </main>
  );
}
