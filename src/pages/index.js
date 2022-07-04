import Lottie from 'react-lottie';

import Header from "../components/Header"
import Footer from "../components/Footer"

import * as ideaAnimation from '../assets/lottie/89966-development.json'

export default function Home() {

  return (
    <>
      <Header />
      <main className="flex h-[100vh] flex-col px-5 items-center justify-center">
        <div className="main-blur" />

        <div className="max-w-7xl">
          <div className="w-full flex flex-row justify-center items-center relative z-10 min-h-[75vh]">
            <div className="w-1/2 flex flex-col items-start">
              <h1 className="text-6xl font-black text-left">
                Olá, nós somos a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdae05] to-[#01d9ff]"> Tentalus</span>
                <span className="inline-block animate-hello">🤚</span>
              </h1>
              <span className="text-4xl font-bold mt-4">
                Quer tirar sua ideia do papel? Fale com um especialista e veja como podemos ajudar.
              </span>
            </div>
            <div className="w-1/2">
              <Lottie
                options={{
                  animationData: ideaAnimation,
                }}
              />
            </div>
          </div>
        </div>

      </main>
      {/* <Footer /> */}
    </>
  )
}
