"use client";
import HeroPresentation from "@/components/HeroPresentation";
import Hero from "@/components/Hero";
import HomeBanner from "@/components/HomeBanner";

import aperitivoImage from "../images/aperitivo-prova.webp";
import internoImage from "../images/interno-prova.webp";
import esternoImage from "../images/esterno-prova.webp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <br /> <br /> <br /> <br /> <br />
      <HeroPresentation />
      <HomeBanner image={aperitivoImage} text="Menù" link="/menu" />
      <HomeBanner image={internoImage} text="Chi Siamo" link="/chi-siamo" />
      <HomeBanner image={esternoImage} text="Contatti" link="/contatti" />
    </main>
  );
}
