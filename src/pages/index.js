import Lottie from 'react-lottie';

import Header from "../components/Header"
import Footer from "../components/Footer"

import * as ideaAnimation from '../assets/lottie/92540-leadmaker-001.json'

export default function Home() {

  return (
    <>
      <Header />
      <main className="flex h-[100vh] flex-col px-5 items-center justify-start">
        <div className="main-blur" />

        <div className="max-w-7xl">
          <div className="w-full flex flex-row justify-center items-center relative z-10 min-h-[75vh]">
            <div className="w-full flex flex-col items-center">
              <h1 className="text-7xl font-black text-center text-gray-50">
                Olá <span className="inline-block animate-hello">🤚</span>
                <br/>
                <span className="inline-block">Nós somos a</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-100 to-brand-blue-100"> Tentalus</span>
              </h1>
              <span className="text-3xl font-bold mt-6 text-center text-gray-50">
                Quer tirar sua ideia do papel? 
                <br/>
                Fale com um especialista e veja como podemos ajudar.
              </span>
              <div className="w-full flex flex-row items-center justify-center mt-6">
                <button className="relative mx-2 overflow-hidden hover:scale-105 hover:bg-brand-orange-100 hover:text-white duration-300 bg-white border border-white border-opacity-5 bg-opacity-5 px-5 py-3 font-bold text-lg rounded-full">
                  <span className="relative rounded-full">Fale com um especialista</span>
                </button>
                <button className="relative mx-2 overflow-hidden hover:scale-105 hover:bg-white hover:bg-opacity-25 hover:text-white  duration-300 border border-white border-opacity-10 px-5 py-3 font-bold text-lg rounded-full">
                  <span className="relative rounded-full">Nosso portifólio</span>
                </button>
              </div>
            </div>
            {/* <div className="w-1/2">
              <Lottie
                width={600}
                height={600}
                options={{
                  animationData: ideaAnimation,
                }}
              />
            </div> */}
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
