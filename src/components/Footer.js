import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white w-full">
      <div className="container mx-auto flex justify-between p-4">
        <div className="logo">
          <h1>Bar Brughi</h1>
        </div>
        <div className="contact">
          <h2 className="text-3xl mb-10">Contact</h2>
          <p>Via Brughiera, 16 </p>
          <p>20008 Bareggio (MI)</p>
        </div>
        <div className="orari">
          <h2 className="text-3xl mb-10">Orari</h2>
          <p>Dal Lunedì al Venerdì</p>
          <p>06:30-23:00</p>
          <p>Sabato e Domenica</p>
          <p>06:30-23:00</p>
          <p>Mercoledì chiuso!</p>
        </div>
        <div className="social">
          <h2 className="text-3xl mb-10">Social</h2>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
