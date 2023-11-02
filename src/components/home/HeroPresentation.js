/* eslint-disable react/no-unescaped-entities */
import SVGIcons from "@/assets/SvgIcons";
import spritzphoto from "../../images/spritz-prova.webp";
import aperitivophoto from "../../images/aperitivo-2-prova.webp";

import { useEffect, useState } from "react";
import Spacer from "@/assets/Spacer";

import { cairo } from "@/assets/FontExport";

export default function HeroPresentation() {
  const [stoolsArray, setStoolsArray] = useState([]);

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const screenWidth = window.innerWidth;

        let newStoolsArray = [];
        if (screenWidth < 576) {
          newStoolsArray = [0, 1, 0, 0, 1, 0];
        } else if (screenWidth >= 576 && screenWidth < 769) {
          newStoolsArray = [0, 1, 0, 0, 1, 0, 0, 1, 0];
        } else {
          newStoolsArray = [
            0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1,
          ];
        }

        setStoolsArray(newStoolsArray);
      }, 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black w-full" id="hero-presentation-section">
      <Spacer count={3} />
      <div className="container mx-auto grid grid-cols-12 gap-4 p-0 md:my-8 overflow-hidden">
        {/* Left col for images: col-span-12 on mobile, col-span-4 on md and above */}
        <div className="col-span-6 lg:col-span-4 relative ">
          <img
            src={spritzphoto.src}
            alt="Foto spritz"
            className="w-3/4 lg:w-full mx-auto"
          />
          <img
            src={aperitivophoto.src}
            alt="Foto aperitivo"
            className="w-3/4 lg:w-full absolute top-[250px] left-[80px]"
          />
          <Spacer count={10} />
        </div>
        {/* Middle col for SVG - hidden on mobile, col-span-4 on md and above */}
        <div className="hidden lg:flex lg:col-span-4 justify-center items-center">
          <svg height="100" width="100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="white"
              strokeWidth="3"
              fill="black"
            />
          </svg>
        </div>
        {/* Right col for text: col-span-12 on mobile, col-span-4 on md and above */}
        <div className="col-span-6 lg:col-span-4 flex flex-col justify-center p-4">
          <div className="relative mb-8 md:mb-20 pe-2">
            <div className="absolute top-0 bottom-0 right-0 w-60 border-magenta border-r-2 border-b-2"></div>
            <p className="text-5xl md:text-6xl  text-end p-2 mb-0 tracking-tighter">
              Come <br /> nasce il <br />{" "}
              <span className="text-lightmag">Brughi Bar</span>
            </p>
          </div>

          <div className={cairo.className}>
            <p className="p-2 me-0 md:me-8 border-l-2 text-xl tracking-wider border-magenta">
              La nascita di questo bar è frutto di una passione intensa per la
              mixologia e l'arte dell'ospitalità.
            </p>

            <p className="p-2 me-3 md:me-16 border-l-2 text-xl tracking-wider border-magenta">
              Abbiamo voluto creare un angolo raffinato ma allo stesso tempo
              accogliente, in cui non solo troverai cocktail impeccabili e
              ottimi aperitivi, ma anche un ambiente vibrante, perfetto per chi
              cerca incontri e serate indimenticabili.
            </p>

            <p className="p-2 me-6 md:me-24 border-l-2 border-b-2 text-xl tracking-wider border-magenta">
              Nato da un sogno, siamo il luogo ideale per vivere momenti
              speciali in buona compagnia.
            </p>
          </div>
        </div>
        <br /> <br />
      </div>
      <div className="flex">
        {stoolsArray.map((isBroken, index) =>
          isBroken ? (
            <SVGIcons.StoolBroken key={index} />
          ) : (
            <SVGIcons.Stool key={index} />
          )
        )}
      </div>
    </div>
  );
}
