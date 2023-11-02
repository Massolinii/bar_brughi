import React from "react";
import fotochisiamo from "../../images/interno-prova.webp";

import { cairo } from "@/assets/FontExport";

export default function ChiSiamo() {
  return (
    <div className="bg-black w-full mb-20">
      <div className="container mx-auto grid grid-cols-12 gap-4 p-2">
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl text-end mb-2 md:mb-4 text-lightmag">
            Chi Siamo
          </h2>

          <div className={cairo.className}>
            <p className="p-2 border-t-2 border-l-2 border-magenta text-lg">
              Benvenuti al nostro accogliente bar nel cuore della provincia! Da
              oltre 6 mesi, siamo il punto di ritrovo preferito per gli abitanti
              del luogo e i visitatori di passaggio. Offriamo una vasta
              selezione di caffè di alta qualità, cocktail artigianali e
              sfiziosi stuzzichini per accompagnare le vostre chiacchiere.
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
