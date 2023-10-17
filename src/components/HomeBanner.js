export default function HomeBanner({ image, text, link }) {
  return (
    <div
      className="relative  mx-auto w-full h-60 md:h-80 bg-overlay"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute container w-full inset-0 flex justify-between items-center p-4 md:p-8 z-10">
        <div className="text-white">
          <h2 className="text-2xl md:text-3xl">{text}</h2>
        </div>
        <div>
          <a
            href={link}
            className="text-white text-xl md:text-2xl no-underline"
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
