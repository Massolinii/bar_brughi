"use client";
import { useRef, useState, useEffect } from "react";

export default function Menu() {
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
    <div className="container mx-auto bg-black px-2 py-5">
      <button
        className="relative text-4xl p-2 mb-4 mx-auto block w-4/5 md:2/3 border transition duration-1000 ease-in-out font-bold"
        onClick={toggleMenu}
      >
        Caffetteria
        <span
          className={`absolute text-3xl right-2 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <>
          <div className="max-w-screen-md mx-auto">
            <h2 className="text-3xl bg-magenta mb-0 py-2 text-center text-bold text-2xl">
              Caffè e bevande calde
            </h2>
            <div className="grid grid-cols-1 gap-2 bg-lightmag">
              {caffe.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 pb-0 border-t border-black"
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-1/3 max-w-[90px] max-h-[80px] rounded-full object-cover border-2"
                  />
                  <div className="flex flex-col w-2/3 justify-center ml-2">
                    <span className="text-left ms-3 text-xl md:text-2xl mb-1">
                      {product.title}
                    </span>
                    <span className="text-right md:text-xl">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-screen-md mx-auto mt-6">
            <h2 className="text-3xl bg-magenta mb-0 py-2 text-center text-bold text-2xl">
              Bibite
            </h2>
            <div className="grid grid-cols-1 gap-2 bg-lightmag">
              {bibite.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 border-t border-black"
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-1/3 max-w-[90px] max-h-[80px] rounded-full object-cover"
                  />
                  <div className="flex flex-col w-2/3 justify-center ml-2">
                    <span className="text-left ms-3 text-xl md:text-2xl mb-1">
                      {product.title}
                    </span>
                    <span className="text-right md:text-xl">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
