/* eslint-disable react/no-unescaped-entities */
import React from "react";
import fotochisiamo from "../../images/interno-prova.webp";

import { cairo } from "@/assets/FontExport";

export default function ChiSiamo() {
  return (
    <div className="bg-black w-full mb-8 lg:mb-20">
      <div className="container mx-auto grid grid-cols-12 gap-4 p-2">
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
          <h2 className="text-6xl md:text-8xl text-end mb-2 md:mb-4 text-lightmag">
            Chi Siamo
          </h2>

          <div className={cairo.className}>
            <p className="p-2 border-t-2 border-l-2 border-magenta text-lg">
              Siamo partiti da un'idea semplice: cercare un angolo chill dove
              poter fare colazione, godersi un apericena e rilassarsi. Un posto
              dove chiacchierare, lavorare o studiare non fosse un problema, ma
              un piacere, con quella atmosfera di ritrovo del quartiere.
            </p>
            <p className="p-2 border-l-2 border-magenta text-lg">
              E quando non l'abbiamo trovato,
              <span className="text-2xl"> abbiamo deciso di crearlo noi</span>.
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <img src={fotochisiamo.src} alt="Chi Siamo" className="w-full" />
        </div>
      </div>
    </div>
  );
}
