'use client'
import HeroPageRocket from "@/components/Heros/HeroPageRocket";
import Star from "@/components/Stars";
import localFont from 'next/font/local'

const FontArista = localFont({ src: '../components/fonts/Arista-Pro-Regular-trial.woff2' })
const FontInter = localFont({ src: '../components/fonts/Inter.woff2' })

const Header = () => {
  return (
    <header className="py-2 w-full  mx-auto px-5 lg:justify-start justify-center flex z-10 ">
      <nav className="flex container mx-auto items-center">
        <div>
          <img src='/logo-dark-horizontar.png' alt="logo" className="lg:h-32 h-24" />
        </div>
        <div className="flex-1"/>
        <div className="md:flex lg:flex hidden gap-5 ">
          <a href="#" className={(FontArista.className)+" text-white hover:text-green-500 text-xl"}>Sobre</a>
          <a href="#" className={(FontArista.className)+" text-white hover:text-green-500 text-xl"}>Blog</a>
          <a href="#" className={(FontArista.className)+" text-white hover:text-green-500 text-xl"}>Portfolio</a>
          <a href="#" className={(FontArista.className)+" text-white hover:text-green-500 text-xl"}>Contato</a>
        </div>
      </nav>
    </header>
  )
}

export default function Home() {
  return (
    <div className="h-full  bg-black flex items-center  flex-col relative">
      <div className=" h-screen top-0 bottom-0  overflow-hidden absolute z-0 w-full">
        {[...Array(200)].map((_, index) => (
          <Star key={index} size={Math.floor(Math.random() * 2) + 1} />
        ))}
      </div>
      <Header />
      <main className="z-10 w-full h-full flex justify-start items-start flex-col">
        <HeroPageRocket/>
        <section className="w-full bg-green-500 h-96">

        </section>
      </main>


    </div>
  );
}
