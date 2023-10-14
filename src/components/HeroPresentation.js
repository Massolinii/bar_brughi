import spritzphoto from "../images/spritz-prova.webp";

export default function HeroPresentation() {
  return (
    <div className="bg-white w-full">
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
              stroke="black"
              strokeWidth="3"
              fill="white"
            />
          </svg>
        </div>

        {/* Right col for text: col-span-12 on mobile, col-span-4 on md and above */}
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center text-right">
          <p className="text-3xl">Come nasce il Bar Brughi</p>
          <p>
            Un giorno i nostri amici Kevini e Luchino si sono svegliati e si
            sono detti : come facciamo i soldi ? E quindi si sono aperti un bar.
            UALA! (flambè)
          </p>
        </div>
      </div>
    </div>
  );
}
