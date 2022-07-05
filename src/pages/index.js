import Lottie from 'react-lottie';

import Header from "../components/Header"
import Footer from "../components/Footer"

import * as ideaAnimation from '../assets/lottie/ideaAnimation.json'

export default function Home() {

  return (
    <>
      <Header />
      <main className="flex h-[100vh] flex-col px-5 items-center justify-start">
        <div className="main-blur" />

        <div className="max-w-7xl">
          <div className="w-full flex flex-row justify-center items-center relative z-10 min-h-[75vh]">
            <div className="w-1/2 flex flex-col items-start">
              <h1 className="text-6xl font-black text-left text-gray-50">
                Olá, nós somos a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-100 to-brand-blue-100"> Tentalus</span>
                <span className="inline-block animate-hello">🤚</span>
              </h1>
              <span className="text-3xl font-bold mt-4 text-gray-50">
                Quer tirar sua ideia do papel? 
                <br/>
                Fale com um especialista e veja como podemos ajudar.
              </span>
              <button className="bg-white border border-white border-opacity-5 bg-opacity-5 mt-6 px-6 py-4 font-bold text-lg rounded-full">Fale com um especialista</button>
            </div>
            <div className="w-1/2">
              <Lottie
                width={500}
                height={500}
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
