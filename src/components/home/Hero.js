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
        <div className="text-center border-2 border-white rounded-sm bg-stone-900 bg-opacity-75 p-3 m-4 mt-0">
          <h1 className="text-6xl md:text-8xl pb-6 tracking-tighter">
            Al Brughi Bar
          </h1>
          <p className="text-2xl mb-0">
            La risposta alla domanda <br /> 'Dove Andiamo Stasera?'
          </p>
        </div>
        <button
          className="transition ease-in-out delay-50 border-2 border-darkmag bg-magenta hover:bg-darkmag hover:border-magenta hover:-translate-y-1 hover:scale-110 duration-300 font-bold py-2 px-4 rounded tracking-widest"
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
