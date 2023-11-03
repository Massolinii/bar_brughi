import { cairo } from "@/assets/FontExport.jsx";

export default function DoveSiamo() {
  return (
    <div className="w-full pb-12">
      <div className="container mx-auto p-2">
        <p className="text-6xl lg:text-8xl text-end mb-0 p-2 md:pb-4 border-r-2 border-magenta text-lightmag">
          Dove Siamo
        </p>
        <div className="relative">
          <div className={cairo.className}>
            <p className="p-2 mb-4 border-r-2 border-magenta text-end text-lg">
              Via Brughiera, 18 - Bareggio (MI) 20008
            </p>
          </div>
          <div className="absolute top-0 left-1/4 w-3/4 md:left-1/2 md:w-1/2 border-t-2 border-magenta"></div>
        </div>

        <div className="map-container w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11185.764491768445!2d8.985604047775288!3d45.501197966786634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786edb935cb8b9d%3A0x8a3b093b3c00a24a!2sBRUGHI%20BAR!5e0!3m2!1sit!2sit!4v1698232191027!5m2!1sit!2sit"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
