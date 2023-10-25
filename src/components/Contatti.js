export default function Contatti() {
  return (
    <div className="bg-black w-full pb-20">
      <div className="container mx-auto p-2">
        <div className="border-b border-l p-2 grid grid-cols-1 md:grid-cols-3 gap-4  text-center">
          <div className="bg-magenta border-2 border-amber-400 h-[150px] flex flex-col items-center justify-center">
            <h3 className="text-lg mb-2">TELEFONO</h3>
            <p>
              +39 123 456 789 <a href="tel:+39123456789">📞</a>{" "}
              <a href="https://wa.me/+39123456789">💬</a>
            </p>
            <p>
              +39 987 654 321 <a href="tel:+39987654321">📞</a>{" "}
              <a href="https://wa.me/+39987654321">💬</a>
            </p>
          </div>
          <div className="bg-magenta border-2 border-amber-400 h-[150px] flex flex-col items-center justify-center">
            <h3 className="text-lg mb-2">E-MAIL</h3>
            <p>brughibarsas@gmail.com</p>
          </div>
          <div className="bg-magenta border-2 border-amber-400 h-[150px] flex flex-col items-center justify-center pt-3">
            <h3 className="text-lg mb-2">ORARI</h3>
            <p>Dal Lunedì al Venerdì : 07:00-23:00</p>
            <p>Sabato e Domenica : 08:30-12:00 / 15:00-23:00</p>
            <p className="underline font-bold">Mercoledì chiuso!</p>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl text-end">Contatti</h2>
        <h5 className="pt-20 text-center">
          Se vuoi prenotare un tavolo o organizzare un evento scrivici su
          WhatsApp, telefona o manda una mail!
        </h5>
      </div>
    </div>
  );
}
