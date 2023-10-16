import InstagramIconBig from "@/assets/InstagramIconBig";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-magenta text-white w-full border-t border-black ">
      <div className="container mx-auto flex flex-wrap justify-between px-0">
        <div className="w-full md:w-1/2 lg:w-1/4 text-left border-b lg:border-b-0 lg:border-r border-gray-800 pt-2">
          <h1 className="text-2xl md:text-3xl ">Bar Brughi</h1>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 text-left  border-b lg:border-b-0 lg:border-r border-gray-800 pt-2 ps-2">
          <h2 className="text-2xl md:text-3xl mb-2 md:mb-10">Orari</h2>
          <p>Dal Lunedì al Venerdì : 06:30-23:00</p>
          <p>Sabato e Domenica : 06:30-23:00</p>
          <p className="underline">Mercoledì chiuso!</p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 text-left  border-b lg:border-b-0 lg:border-r border-gray-800 pt-2 ps-2">
          <h2 className="text-2xl md:text-3xl mb-2 md:mb-10">Contatti</h2>
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

        <div className="w-full md:w-1/2 lg:w-1/4 text-left  border-b lg:border-b-0 border-gray-800 pt-2 ps-2">
          <h2 className="text-2xl md:text-3xl">Social</h2>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-white mx-auto inline-block p-3"
          >
            <InstagramIconBig className="mx-auto inline-block" />
          </a>
        </div>
      </div>
    </div>
  );
}
