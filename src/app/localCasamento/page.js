"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export default function LocalDoCasamento() {
  return (
    <section 
      id="local"
      className={`${poppins.className} w-full flex flex-col items-center py-16 px-4 bg-white`}
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-[#3b2f2f] mb-4 text-center">
        Local do Casamento
      </h2>

      <p className="text-gray-700 text-center max-w-4xl mb-6 text-[18px]">
        A cerimônia será realizada neste local especial.  
        Clique no mapa para abrir no Google Maps!
      </p>

      <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1764387431199!5m2!1spt-BR!2sbr!6m8!1m7!1s9dn9ddUPntKtWy39qGtTcA!2m2!1d-22.28761508826948!2d-48.51698709862767!3f66.88896184029579!4f-2.318412353902346!5f1.1924812503605782"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="text-gray-900 text-lg font-semibold mt-4">
        R. Víctor Spatti, 11 — Jardim Parati, Jaú/SP
      </p>
    </section>
  );
}
