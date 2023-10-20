import SVGIcons from "@/assets/SvgIcons";

export default function HomeBanner({ image, text, link }) {
  return (
    <div
      className="relative  mx-auto w-full h-60 md:h-80 bg-overlay border-y-2 border-black "
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute container w-full inset-0 flex justify-between items-center p-0 py-2 px-2 z-10">
        <div>
          <a
            href={link}
            className="text-white text-6xl md:text-8xl no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl md:text-3xl mb-0">{text}</h2>
          </a>
        </div>
        <div>
          <a
            href={link}
            className="text-white text-6xl md:text-8xl no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGIcons.HomeBannerArrow />
          </a>
        </div>
      </div>
    </div>
  );
}
