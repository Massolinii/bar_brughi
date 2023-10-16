"use client";
import HeroPresentation from "@/components/HeroPresentation";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <HeroPresentation />
    </main>
  );
}
