import SVGIcons from "@/assets/SvgIcons";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-magenta w-full border-t border-black ">
      <div className="container mx-auto flex flex-wrap justify-between px-0">
        <div className="w-full md:w-1/2 lg:w-1/3 text-center border-b lg:border-b-0 lg:border-r border-black">
          <h2 className="text-2xl md:text-3xl font-bold py-3 mb-0">Orari</h2>
          <p>Dal Lunedì al Venerdì : 07:00-23:00</p>
          <p>Sabato e Domenica : 08:30-12:00 / 15:00-23:00</p>
          <p className="underline font-bold">Mercoledì chiuso!</p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 text-center border-b lg:border-b-0 lg:border-r border-black">
          <h2 className="text-2xl md:text-3xl font-bold py-3 mb-0">Contatti</h2>
          <p className="mb-0">Via Brughiera, 18</p>
          <p>20008 Bareggio (MI)</p>
          <p>
            <a href="tel:+393450913688" className="no-underline text-white ">
              Telefono: +39 345 0913688
            </a>
          </p>
          <p>
            <a
              href="mailto:brughibarsas@gmail.com"
              className="no-underline text-white "
            >
              Mail: brughibarsas@gmail.com
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 text-center border-b lg:border-b-0 border-black">
          <h2 className="text-2xl md:text-3xl font-bold py-3 mb-0">Social</h2>
          <a
            href="https://www.instagram.com/brughi_bar/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline mx-auto inline-block p-2"
          >
            <SVGIcons.InstagramBig />
          </a>
          <a
            href="https://www.facebook.com/BrughiBar"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline mx-auto inline-block p-2"
          >
            <SVGIcons.FacebookBig />
          </a>
        </div>
      </div>
    </div>
  );
}
