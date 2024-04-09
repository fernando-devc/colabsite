import Star from "@/components/Stars";
import {Tilt_Neon} from 'next/font/google'

const tilt = Tilt_Neon({
  subsets:['latin'],
  display:'swap'
})

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#0F1011] flex items-center relative overflow-hidden flex-col">
      <div className="py-2 w-full container mx-auto px-5 lg:justify-start justify-center flex">
        <img src='/colablogo.png' alt="logo" className="lg:h-32 h-28" />
      </div>
      {[Array(200)].map((_, index) => (
        <Star key={index} size={Math.floor(Math.random() * 1) + 1} />
      ))}
      <div className="flex-1 flex flex-col w-full ">
        <div className="flex-1 justify-center items-center flex">
          <h1 className={(tilt.className) + " text-white lg:text-7xl md:text-6xl text-4xl  font-bold "}>EM BREVE</h1>
        </div>
        <div className="h-64"></div>
      </div>
      <img src='/rocket.png' alt="logo" className="h-[55vh] absolute -bottom-11 z-10 " />
      <div className="flex relative h-auto w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-green-50 w-full absolute bottom-0 ">
          <path fill="currentColor" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </main>
  );
}
