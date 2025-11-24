import { initializeApp } from "firebase/app";
import { db } from "@/app/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(req) {
  try {
    const { nome, qtd } = await req.json();

    await addDoc(collection(db, "confirmacoes"), {
      nome,
      qtd,
      createdAt: serverTimestamp(),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Erro ao enviar" }), { status: 500 });
  }
}
