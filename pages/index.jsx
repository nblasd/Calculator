import Image from "next/image";
import { Inter } from "next/font/google";
import Calculator from "@/components/Calculator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Calculator />
    </main>
  );
}
