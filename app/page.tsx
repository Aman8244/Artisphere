import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar"
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="background-black">
      <header className="dark">
        <Navbar />
      </header>
      <section className=" flex justify-center items-center sm:h-[520px]">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex justify-center p-10 md:px-20 flex-col sm:w-3/5">
            <div className="text-white text-[2rem] md:text-[3rem] font-serif uppercase">
              Artisphere
            </div>
            <p className="text-gray-300 sm:text-[1rem] font-sans">
              Welcome to Artisphere, the ultimate online destination where artists showcase their creations and buyers find their perfect piece. Explore a curated selection of artworks, from paintings to sculptures, and easily purchase your favorites with confidence. Join us in celebrating the beauty of art, all from the comfort of your home.
            </p>
            <div>
              <Button className="bg-purple-700 px-4 mt-8 md:mt-8 hover:bg-purple-500 text-white" asChild>
                <Link href={"/dashboard"}>
                  Explore
                </Link>
              </Button>
            </div>
          </div>
          <div className="p-6">
            <Image src={"/horse.jpeg"} height={100} width={500} alt="horse-art" />
          </div>
        </div>
      </section>
    </main>
  );
}
