import { Poppins } from "next/font/google";
import ListaMensagens from "./ListaMensagens";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function MensagensPage() {
  return (
    <div className={`${poppins.variable} text-black w-screen min-h-screen bg-gray-200`}>
      <h1 className="text-3xl font-bold absolute text-black lg:top-[12vh] top-[19dvh] m-4">
        Mensagens Recebidas
      </h1>

      <ListaMensagens />
    </div>
  );
}
