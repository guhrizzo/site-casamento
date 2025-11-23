import { NextResponse } from "next/server";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC0MKL6O8qobwjSN6uIbQheTxHF10abKw",
  authDomain: "msg-casamento.firebaseapp.com",
  projectId: "msg-casamento",
  storageBucket: "msg-casamento.firebasestorage.app",
  messagingSenderId: "107970674750",
  appId: "1:107970674750:web:8385bf9001fea719c7116f",
  measurementId: "G-14FJ4B6ZE9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function POST(req) {
  try {
    const { nome, mensagem } = await req.json();

    if (!nome || !mensagem) {
      return NextResponse.json(
        { error: "Faltando dados" },
        { status: 400 }
      );
    }

    await addDoc(collection(db, "mensagens"), {
      nome,
      mensagem,
      createdAt: new Date()
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro no servidor:", err);
    return NextResponse.json(
      { error: "Erro no servidor" },
      { status: 500 }
    );
  }
}
