"use client";
import HeroPresentation from "@/components/home/HeroPresentation";
import Hero from "@/components/home/Hero";
import HomeBanner from "@/components/home/HomeBanner";

import aperitivoImage from "../images/aperitivo-prova.webp";
import internoImage from "../images/interno-prova.webp";
import esternoImage from "../images/esterno-prova.webp";
import Spacer from "@/assets/Spacer.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <HomeBanner image={aperitivoImage} text="Menu" link="/menu" />
      <HomeBanner image={internoImage} text="Chi Siamo" link="/chi-siamo" />
      <HeroPresentation />
    </main>
  );
}
