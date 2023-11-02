"use client";
import Caffetteria from "@/components/menu/Caffetteria";
import Drink from "@/components/menu/Drink";
import Food from "@/components/menu/Food";

export default function Page() {
  return (
    <main className="bg-black">
      <h1 className="text-center py-4 text-6xl lg:text-8xl border-b">
        Il Nostro Menù
      </h1>
      <Caffetteria />
      <Food />
      <Drink />
    </main>
  );
}
