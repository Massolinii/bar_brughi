"use client";
import HeroPresentation from "@/components/HeroPresentation";
import Hero from "@/components/Hero";
import Image from "next/image";
import HomeBanner from "@/components/HomeBanner";

import aperitivoImage from "../images/aperitivo-prova.webp";
import internoImage from "../images/interno-prova.webp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <HeroPresentation />
      <HomeBanner image={aperitivoImage} text="Menù" link="/menu" />
      <HomeBanner image={internoImage} text="Chi Siamo" link="/chi-siamo" />
    </main>
  );
}
