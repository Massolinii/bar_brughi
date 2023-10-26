"use client";
import { useState } from "react";

export default function Food() {
  const salato = [
    {
      img: "/menu-pics/salato/panino.webp",
      title: "Panino",
      price: "5.00€",
    },
    {
      img: "/menu-pics/salato/toast.webp",
      title: "Toast",
      price: "3.50€",
    },
    {
      img: "/menu-pics/salato/toastfarcito.webp",
      title: "Toast Farcito",
      price: "4.00€",
    },
    {
      img: "/menu-pics/salato/piadina.webp",
      title: "Piadina",
      price: "5.00€",
    },
    {
      img: "/menu-pics/salato/pizzamarghe.webp",
      title: "Pizza Margherita",
      price: "2.80€",
    },
    {
      img: "/menu-pics/salato/focaccia.webp",
      title: "Focaccia",
      price: "2.50€",
    },
  ];

  const dolce = [
    {
      img: "/menu-pics/dolce/cornetto.webp",
      title: "Brioches",
      price: "1.30€",
    },
    {
      img: "/menu-pics/dolce/crostatina.webp",
      title: "Frolla / Crostatina",
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
    <div className="container mx-auto bg-black px-2 py-3">
      <button
        className="relative text-4xl p-2 mb-2 mx-auto block w-4/5 md:2/3 border transition duration-1000 ease-in-out font-bold"
        onClick={toggleMenu}
      >
        Food
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
              Salato
            </h2>
            <div className="grid grid-cols-1 gap-2 bg-lightmag">
              {salato.map((product, index) => (
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
              Dolce
            </h2>
            <div className="grid grid-cols-1 gap-2 bg-lightmag">
              {dolce.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 pb-0 border-t border-black"
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
