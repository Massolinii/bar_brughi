import SVGIcons from "@/assets/SvgIcons";
import React from "react";

export default function Footer() {
  return (
    <div className="font-nunito bg-magenta text-white w-full border-t border-black ">
      <div className="container mx-auto flex flex-wrap justify-between px-0">
        <div className="w-full hidden md:block md:w-1/2 lg:w-1/4 text-center border-b lg:border-b-0 lg:border-r border-gray-800 ">
          <h1 className="text-2xl md:text-3xl mb-2 py-3">Bar Brughi</h1>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 text-center border-b lg:border-b-0 lg:border-r border-gray-800 ps-2 pb-3">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 py-3">Orari</h2>
          <p>Dal Lunedì al Venerdì : 06:30-23:00</p>
          <p>Sabato e Domenica : 06:30-23:00</p>
          <p className="underline">Mercoledì chiuso!</p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 text-center border-b lg:border-b-0 lg:border-r border-gray-800 ps-2 pb-3">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 py-3">Contatti</h2>
          <p className="mb-0">Via Brughiera, 16</p>
          <p>20008 Bareggio (MI)</p>
          <p>
            <a href="tel:+393271666666" className="no-underline text-white">
              Telefono: +39 3271666666
            </a>
          </p>
          <p>
            <a
              href="mailto:example@brughi.com"
              className="no-underline text-white"
            >
              Mail: mario.rossi@example.it
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 text-center border-b lg:border-b-0 border-gray-800 ps-2 pb-3">
          <h2 className="text-2xl md:text-3xl font-bold py-3">Social</h2>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-white mx-auto inline-block p-3"
          >
            <SVGIcons.InstagramBig />
          </a>
        </div>
      </div>
    </div>
  );
}
