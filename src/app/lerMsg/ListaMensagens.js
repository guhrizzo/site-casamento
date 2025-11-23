"use client";

import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function ListaMensagens() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    async function carregar() {
      const q = query(
        collection(db, "mensagens"),
        orderBy("createdAt", "desc")
      );

      const snap = await getDocs(q);
      setMensagens(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }

    carregar();
  }, []);

  return (
    <div className="flex flex-col gap-4 absolute text-black lg:top-[18vh] top-[27dvh] scale-95 lg:scale-100 lg:m-4">
      {mensagens.map((m) => (
        <div
          key={m.id}
          className="p-4 bg-gray-50 shadow rounded-xl border-2 w-[99vw] lg:max-w-[98vw] border-[#11111156]"
        >
          <p className="text-lg font-bold">{m.nome}</p>
          <p className="mt-2">{m.mensagem}</p>
        </div>
      ))}
    </div>
  );
}
