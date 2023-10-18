import SVGIcons from "@/assets/SvgIcons";
import spritzphoto from "../images/spritz-prova.webp";

import { useEffect, useState } from "react";

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
            0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1,
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
    <div className="bg-black w-full">
      <div className="container mx-auto grid grid-cols-12 gap-4 p-0 md:my-8">
        {/* Left col for image: col-span-12 on mobile, col-span-4 on md and above */}
        <div className="col-span-12 md:col-span-4">
          <img
            src={spritzphoto.src}
            alt="Some description"
            className="w-full"
          />
        </div>
        {/* Middle col for SVG - hidden on mobile, col-span-4 on md and above */}
        <div className="hidden md:flex md:col-span-4 justify-center items-center">
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
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center p-4">
          <p className="text-4xl md:text-6xl mb-8 md:mb-20 text-end">
            Come <br /> nasce il <br /> Bar Brughi
          </p>
          <p className="pe-12">
            Un giorno i nostri amici Kevini e Luchino si sono svegliati e si
            sono detti: come facciamo i soldi ? E quindi si sono aperti un bar.
            UALA! (flambè)
          </p>
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
