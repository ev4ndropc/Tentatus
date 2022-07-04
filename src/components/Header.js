export default function Header() {

    return (
        <header className="w-full py-2 px-5 flex justify-center align-middle bg-gray-700 border-b border-gray-600">
            <div className="flex justify-between items-center w-full max-w-7xl">
                <div className="flex-1  relative z-10">
                    <img className="w-52" src="https://media.graphassets.com/xl7SVWSwRu2LKGrvMcT0" />
                </div>
                <div className="w-auto relative z-10">
                    <ul className="flex flex-row">
                        <li className="ml-6 text-lg hover:scale-x-105 hover:text-white duration-100">
                            <a href="#">
                                Sobre nós
                            </a>
                        </li>
                        <li className="ml-6 text-lg">
                            <a href="#">
                            O que fazemos
                            </a>
                        </li>
                        <li className="ml-6 text-lg">
                            <a href="#">
                                Tecnologias
                            </a>
                        </li>
                        <li className="ml-6 text-lg">
                            <a href="#">
                                Fale conosco
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </header>
    )
}