import Image from "next/image";
import Button from "./button";
import { Poppins } from "next/font/google";
import ContadorNovo from "./contador";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col bg-white justify-center items-center bg-[url('/elegant-wedding-couple.png')] bg-cover bg-center">
        <div>
          <ContadorNovo />
        </div>
        

      </main>
    </div>
  );
}
