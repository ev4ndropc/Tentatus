import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {

  return (
    <>
      <Header />
      <main className="flex h-[100vh] flex-col px-5 items-center justify-start bg-hero bg-no-repeat bg-cover">
        <div className="w-full max-w-[1120px]">
          <div className="mt-32">
            <div className="w-2/3 h-auto flex flex-col">
              <h2 className="text-6xl text-gray-200 font-bold leading-11">
                SOMOS A <strong className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-400">TENTALUS</strong>
              </h2>
              <div className="mt-2 text-3xl text-[#fdac05] leading-9">
                SUA BOUTIQUE DE SOFTWARE
              </div>
              <div className="w-2/3 mt-3 text-xl text-gray-100 leading-6">
                Não tenha somente uma boa aplicação web em produção mas também melhore seus processos de software e garantia de qualidade
              </div>
              <div className="mt-12 h-12">
                <a className="py-4 px-6 text-lg uppercase font-bold text-white bg-gradient-to-r from-brand-orange-100 to-brand-orange-200 rounded"  href="https://www.linkedin.com/in/tentalus/" target="_blank" rel="noopener noreferrer">Vamos conversar?</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  )
}
