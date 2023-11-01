import SVGIcons from "@/assets/SvgIcons";

export default function Contatti() {
  return (
    <div className="bg-black w-full pb-20">
      <div className="container mx-auto p-2 ">
        <div className="border-b-2 border-l-2 border-magenta ps-2 pb-2 grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
          <div className="bg-magenta border border-stone-300 h-[200px] flex flex-col items-center justify-center">
            <h3 className="text-lg mb-2 text-3xl">TELEFONO</h3>

            <div className="flex items-center my-3">
              <a href="tel:+393450913688">
                <SVGIcons.PhoneBig />
              </a>
              <span className="ml-2">Telefona al 345 0913688</span>
            </div>

            <div className="flex items-center">
              <a href="https://wa.me/+393891253407">
                <SVGIcons.Whatsapp />
              </a>
              <span className="ml-2">Scrivici al 389 1253407</span>
            </div>
          </div>
          <div className="bg-magenta border border-stone-300 h-[200px] flex flex-col items-center justify-center">
            <h3 className="text-lg mb-2 text-3xl">E-MAIL</h3>
            <a
              href="mailto:brughibarsas@gmail.com"
              className="no-underline text-white "
            >
              brughibarsas@gmail.com
            </a>
          </div>
          <div className="bg-magenta border border-stone-300 h-[200px] flex flex-col items-center justify-center pt-3">
            <h3 className="text-lg mb-2 text-3xl">ORARI</h3>
            <p className="mb-2">
              <span className="font-bold">Dal Lunedì al Venerdì:</span>
              <br />
              07:00-23:00
            </p>
            <p className="mb-2">
              <span className="font-bold">Sabato e Domenica:</span>
              <br />
              08:30-12:00 / 15:00-23:00
            </p>
            <p className="underline font-bold">Mercoledì chiuso!</p>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl text-end pt-1 text-lightmag">
          Contatti
        </h2>
        <h5 className="pt-20 text-center text-xl">
          Se vuoi prenotare un tavolo o organizzare un evento scrivici su
          WhatsApp, telefona o manda una mail!
        </h5>
      </div>
    </div>
  );
}
