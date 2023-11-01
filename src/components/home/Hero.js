/* eslint-disable react/no-unescaped-entities */
import image1 from "../../images/bancone-prova.webp";

export default function Hero() {
  return (
    <div
      className="relative tilt flex items-center h-screen w-full border-gray-800"
      style={{
        backgroundImage: `url(${image1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="container mx-auto z-10 p-2">
        <div className="w-full text-center pt-40">
          <h1 className="text-4xl pb-6">Bar Brughi</h1>
          <p className="text-lg">
            La risposta alla frase <br /> 'Dove andiamo stasera?'
          </p>
          <br /> <br />
          <button
            className="mt-4 bg-magenta hover:bg-rose-900 font-bold py-2 px-4 rounded"
            onClick={() => {
              const nextSection = document.getElementById("next-section");
              nextSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Scopri di più.
          </button>
        </div>
      </div>
    </div>
  );
}
