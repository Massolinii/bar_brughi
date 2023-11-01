"use client";
import { useState } from "react";
import ProductList from "./ProductList";

export default function Drink() {
  const cocktails = [
    {
      img: "/menu-pics/cocktail/gin.webp",
      title: "Gin Tonic / Lemon",
      price: "6.00€",
      description: "Gin, Tonic/Lemon",
    },
    {
      img: "/menu-pics/cocktail/ginpremium.webp",
      title: "Gin Tonic / Lemon Premium",
      price: "9.00€",
      description: "Gin, Premium Tonic/Lemon",
    },
    {
      img: "/menu-pics/cocktail/vodka.webp",
      title: "Vodka Tonic / Lemon",
      price: "6.00€",
      description: "Vodka, Tonic/Lemon",
    },
    {
      img: "/menu-pics/cocktail/negroni.webp",
      title: "Negroni",
      price: "6.00€",
      description: "Campari, Vermouth, Gin",
    },
    {
      img: "/menu-pics/cocktail/americano.webp",
      title: "Americano",
      price: "6.00€",
      description: "Campari, Vermouth, Soda",
    },
    {
      img: "/menu-pics/cocktail/sbagliato.webp",
      title: "Sbagliato",
      price: "6.00€",
      description: "Campari, Vermouth, Spumante",
    },
    {
      img: "/menu-pics/cocktail/hugo.webp",
      title: "Hugo",
      price: "6.00€",
      description: "Prosecco, Sciroppo di sambuco, Soda",
    },
    {
      img: "/menu-pics/cocktail/mojito.webp",
      title: "Mojito",
      price: "6.00€",
      description: "Rum bianco, Soda, Succo di lime, Zucchero di canna",
    },
    {
      img: "/menu-pics/cocktail/margarita.webp",
      title: "Margarita",
      price: "6.00€",
      description: "Triple Sec, Tequila, Succo di lime",
    },
    {
      img: "/menu-pics/cocktail/longisland.webp",
      title: "Long Island",
      price: "6.00€",
      description:
        "Tequila, Gin, Triple Sec, Vodka, Rum Bianco, Succo di limone, Sciruppo di zucchero, Cola",
    },
    {
      img: "/menu-pics/cocktail/cubalibre.webp",
      title: "Cuba Libre",
      price: "6.00€",
      description: "Rum bianco, Coca Cola, Lime",
    },
    {
      img: "/menu-pics/cocktail/moscowmule.webp",
      title: "Moscow Mule",
      price: "6.00€",
      description: "Vodka, Ginger Beer, Succo di Lime",
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
      description: "Gin, Vermouth dry, Campari ",
    },
    {
      img: "/menu-pics/alcolici/spritz.webp",
      title: "Spritz Campari / Aperol",
      price: "5.00€",
      description: "Prosecco, Campari/Aperol, Soda",
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
    <div className="container mx-auto bg-black px-2 pb-3 pt-5">
      <button
        className="text-4xl p-2 mb-2 block w-full md:w-2/3 mx-auto border font-bold"
        onClick={toggleMenu}
      >
        Drink
        <span
          className={`text-3xl right-2 transform ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <>
          <ProductList title="Cocktail" products={cocktails} />
          <ProductList title="Alcolici" products={alcolici} />
        </>
      )}
    </div>
  );
}
