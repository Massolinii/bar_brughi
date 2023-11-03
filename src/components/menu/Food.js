import { useState } from "react";
import ProductList from "./ProductList";

export default function Food() {
  const salato = [
    {
      img: "/menu-pics/salato/panino.webp",
      title: "Panino",
      price: "5.00€",
      description: "Da farcire come vuoi",
    },
    {
      img: "/menu-pics/salato/toast.webp",
      title: "Toast prosciutto e formaggio",
      price: "3.50€",
    },
    {
      img: "/menu-pics/salato/toastfarcito.webp",
      title: "Toast Farcito",
      price: "4.00€",
      description: "Da farcire come vuoi",
    },
    {
      img: "/menu-pics/salato/piadina.webp",
      title: "Piadina",
      price: "5.00€",
      description: "Da farcire come vuoi",
    },
    {
      img: "/menu-pics/salato/focaccia.webp",
      title: "Focaccia sale, olio e origano",
      price: "2.50€",
      description: "",
    },
    {
      img: "/menu-pics/salato/focacciafarcita.webp",
      title: "Focaccia farcita",
      price: "5.00€",
      description: "Da farcire come vuoi",
    },
  ];

  const dolce = [
    {
      img: "/menu-pics/dolce/cornetto.webp",
      title: "Brioches",
      price: "1.30€",
      description: "Vari gusti",
    },
    {
      img: "/menu-pics/dolce/pasticciotto.webp",
      title: "Pasticciotto",
      price: "1.50€",
    },
    {
      img: "/menu-pics/dolce/cornettosalentino.webp",
      title: "Cornetto Salentino",
      price: "1.50€",
    },
    {
      img: "/menu-pics/dolce/torta.webp",
      title: "Fetta di Torta",
      price: "2.50€",
    },
    {
      img: "/menu-pics/dolce/piadinanutella.webp",
      title: "Panino / Piadina Nutella",
      price: "3.50€",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto px-2 px-2 py-4">
      <button
        className="text-4xl p-2 mb-2 block w-full md:w-2/3 mx-auto border-y-2 border-x-8 font-bold bg-black"
        onClick={toggleMenu}
      >
        Food
        <span
          className={`text-3xl right-2 transform ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <>
          <ProductList title="Salato" products={salato} />
          <ProductList title="Dolce" products={dolce} />
        </>
      )}
    </div>
  );
}
