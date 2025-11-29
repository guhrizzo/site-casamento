import { Poppins } from "next/font/google";
import ContadorNovo from "./contador";
import Navbar from "./NavBar";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Navbar />
      <main className="flex min-h-screen w-full flex-col justify-center items-center 
bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('/elegant-wedding-couple.png')] 
bg-cover bg-center">

        <div className={`${poppins.className}h-screen`}>
          <ContadorNovo />
        </div>
        
      </main>
      
    </div>
  );
}
