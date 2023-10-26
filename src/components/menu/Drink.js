"use client";
import { useState } from "react";

export default function Drink() {
  const cocktails = [
    {
      img: "/menu-pics/cocktail/gin.webp",
      title: "Gin Tonic / Lemon",
      price: "6.00€",
    },
    {
      img: "/menu-pics/cocktail/ginpremium.webp",
      title: "Gin Tonic / Lemon Premium",
      price: "9.00€",
    },
    {
      img: "/menu-pics/cocktail/vodka.webp",
      title: "Vodka Tonic / Lemon",
      price: "6.00€",
    },
    {
      img: "/menu-pics/cocktail/negroni.webp",
      title: "Negroni",
      price: "6.00€",
    },
    {
      img: "/menu-pics/cocktail/americano.webp",
      title: "Americano",
      price: "6.00€",
    },
    {
      img: "/menu-pics/cocktail/sbagliato.webp",
      title: "Sbagliato",
      price: "6.00€",
    },
    {
      img: "/menu-pics/cocktail/hugo.webp",
      title: "Hugo",
      price: "6.00€",
    },
    {
      img: "/menu-pics/cocktail/mojito.webp",
      title: "Mojito",
      price: "6.00€",
    },
    {
      img: "/menu-pics/cocktail/margarita.webp",
      title: "Margarita",
      price: "6.00€",
    },
    {
      img: "/menu-pics/cocktail/longisland.webp",
      title: "Long Island",
      price: "6.00€",
    },
    {
      img: "/menu-pics/cocktail/cubalibre.webp",
      title: "Cuba Libre",
      price: "6.00€",
    },
    {
      img: "/menu-pics/cocktail/moscowmule.webp",
      title: "Moscow Mule",
      price: "6.00€",
    },
  ];

  const alcolici = [
    {
      img: "/menu-pics/alcolici/birraspina.webp",
      title: "Birra alla Spina",
      price: "4.00€",
    },
    {
      img: "/menu-pics/alcolici/birrabottiglia.webp",
      title: "Birra in Bottiglia",
      price: "2.80€",
    },
    {
      img: "/menu-pics/alcolici/tennets.webp",
      title: "Tennet's / Ceres",
      price: "4.00€",
    },
    {
      img: "/menu-pics/alcolici/campari.webp",
      title: "Campari Soda",
      price: "3.50€",
    },
    {
      img: "/menu-pics/alcolici/spritz.webp",
      title: "Spritz Campari / Aperol",
      price: "5.00€",
    },
    {
      img: "/menu-pics/alcolici/calicevino.webp",
      title: "Calice Vino Bianco / Rosso",
      price: "3.00€",
    },
    {
      img: "/menu-pics/alcolici/spumante.webp",
      title: "Spumante / Prosecco",
      price: "3.50€",
    },
    {
      img: "/menu-pics/alcolici/amari.webp",
      title: "Amari",
      price: "3.50€",
    },
    {
      img: "/menu-pics/alcolici/grappa.webp",
      title: "Grappa",
      price: "4.00€",
    },
    {
      img: "/menu-pics/alcolici/shot.webp",
      title: "Shot",
      price: "2.50€",
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
        Drink
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
              Cocktails
            </h2>
            <div className="grid grid-cols-1 gap-2 bg-lightmag">
              {cocktails.map((product, index) => (
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
              {alcolici.map((product, index) => (
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
        </>
      )}
    </div>
  );
}
