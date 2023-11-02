import { useState } from "react";
import ProductList from "./ProductList";

export default function Caffetteria() {
  const caffe = [
    {
      img: "/menu-pics/caffetteria/caffe.webp",
      title: "Caffè / Macchiato",
      price: "1.10€",
    },
    {
      img: "/menu-pics/caffetteria/deca.webp",
      title: "Caffè Deca / Macchiato Deca",
      price: "1.10€",
    },
    {
      img: "/menu-pics/caffetteria/cappuccino.webp",
      title: "Cappuccino",
      price: "1.40€",
    },
    {
      img: "/menu-pics/caffetteria/cappuccino-deca.webp",
      title: "Cappuccino Deca",
      price: "1.50€",
    },
    {
      img: "/menu-pics/caffetteria/marocchino.webp",
      title: "Marocchino",
      price: "1.30€",
    },
    {
      img: "/menu-pics/caffetteria/lattè.webp",
      title: "Latte Macchiato",
      price: "1.50€",
    },
    {
      img: "/menu-pics/caffetteria/hotmilk.webp",
      title: "Latte Caldo",
      price: "1.20€",
    },
    {
      img: "/menu-pics/caffetteria/caffeorzo.webp",
      title: "Orzo / Macchiato",
      price: "1.40€",
    },
    {
      img: "/menu-pics/caffetteria/cioccolata.webp",
      title: "Cioccolata Calda",
      price: "3.00€",
    },
    {
      img: "/menu-pics/caffetteria/ginseng.webp",
      title: "Ginseng / Macchiato",
      price: "1.40€",
    },
    {
      img: "/menu-pics/caffetteria/espressoshakerato.webp",
      title: "Espresso Shakerato",
      price: "3.00€",
    },
    {
      img: "/menu-pics/caffetteria/espressoshakeratocorretto.webp",
      title: "Espresso Shakerato Corretto",
      price: "4.50€",
    },
    {
      img: "/menu-pics/caffetteria/caffecorretto.webp",
      title: "Caffè Corretto",
      price: "1.80€",
    },
    {
      img: "/menu-pics/caffetteria/caffeamericano.webp",
      title: "Caffè Americano",
      price: "1.20€",
    },
    {
      img: "/menu-pics/caffetteria/thè.webp",
      title: "Tè caldo",
      price: "2.50€",
    },
  ];

  const bibite = [
    {
      img: "/menu-pics/bibite/acqua.webp",
      title: "Acqua",
      price: "1.00€",
    },
    {
      img: "/menu-pics/bibite/tonica.webp",
      title: "Tonica",
      price: "2.50€",
    },
    {
      img: "/menu-pics/bibite/cola.webp",
      title: "Bibite",
      price: "2.50€",
      description: "Coca Cola, Fanta, Pepsi",
    },
    {
      img: "/menu-pics/bibite/redbull.webp",
      title: "Redbull",
      price: "4.00€",
    },
    {
      img: "/menu-pics/bibite/estathè.webp",
      title: "Estathè",
      price: "3.00€",
    },
    {
      img: "/menu-pics/bibite/succhibottiglia.webp",
      title: "Succhi in Bottiglia",
      price: "2.50€",
    },
    {
      img: "/menu-pics/bibite/aranciata.webp",
      title: "Spremuta di Arancia",
      price: "3.50€",
    },
    {
      img: "/menu-pics/bibite/crodino.webp",
      title: "Crodino",
      price: "2.00€",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto bg-black px-2 pt-8 pb-4">
      <button
        className="text-4xl p-2 mb-2 block w-full md:w-2/3 mx-auto border font-bold"
        onClick={toggleMenu}
      >
        Caffetteria
        <span
          className={`text-3xl right-2 transform ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <>
          <ProductList title="Caffè e Bevande Calde" products={caffe} />
          <ProductList title="Bibite" products={bibite} />
        </>
      )}
    </div>
  );
}
