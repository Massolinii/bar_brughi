import image1 from "../images/bancone-prova.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="flex items-center h-screen w-full border-b-2 border-gray-800"
      style={{
        backgroundImage: `url(${image1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-white">
        <div className="w-full text-left">
          <h1 className="text-4xl">Bar Brughi</h1>
          <p className="text-lg">prova prova</p>
          <br></br> <br></br>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
