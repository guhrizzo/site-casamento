import { db } from "@/app/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export async function GET() {
  try {
    const q = query(
      collection(db, "confirmacoes"),
      orderBy("createdAt", "desc")
    );

    const snap = await getDocs(q);

    const dados = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return Response.json(dados, { status: 200 });

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Erro ao listar" }, { status: 500 });
  }
}
