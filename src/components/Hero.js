import image1 from "../images/bancone-prova.webp";

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
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="container mx-auto text-white z-10">
        <div className="w-full text-left">
          <h1 className="text-4xl">Bar Brughi</h1>
          <p className="text-lg">prova prova</p>
          <br /> <br />
          <button
            className="mt-4 bg-rose-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
