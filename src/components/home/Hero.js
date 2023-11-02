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
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-blacktrans to-transparent"></div>

      <div className="container mx-auto z-10 p-2 flex flex-col items-center">
        <div className="text-center border-2 border-white bg-stone-900 bg-opacity-75 p-8 m-4 mt-0">
          <h1 className="text-7xl md:text-8xl pb-6 tracking-tighter">
            Al Brughi Bar
          </h1>
          <p className="text-2xl">
            La risposta alla domanda <br /> 'Dove Andiamo Stasera?'
          </p>
        </div>
        <button
          className="border-2 border-darkmag bg-magenta hover:bg-darkmag hover:border-magenta font-bold py-2 px-4 rounded tracking-widest"
          onClick={() => {
            const heroPresentationSection = document.getElementById(
              "hero-presentation-section"
            );
            if (heroPresentationSection) {
              heroPresentationSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Scopri di più.
        </button>
      </div>
    </div>
  );
}
