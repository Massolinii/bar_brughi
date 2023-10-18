export default function HomeBanner({ image, text, link }) {
  return (
    <div
      className="relative  mx-auto w-full h-60 md:h-80 bg-overlay border-y-2 border-black"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute container w-full inset-0 flex justify-between items-center p-4 md:p-8 z-10">
        <div>
          <h2 className="text-2xl md:text-3xl">{text}</h2>
        </div>
        <div>
          <a
            href={link}
            className="text-white text-6xl md:text-8xl no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            →
          </a>
        </div>
      </div>
    </div>
  );
}
