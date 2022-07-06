import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';

import Button from '../components/Button';

export default function Header() {

    const [showCookiesPolicy, setShowCookiesPolicy] = useState(false);
    const [headerPosition, setHeaderPosition] = useState('relative');

    function handleCloseCookiesPolicy() {
        setShowCookiesPolicy(false);
        localStorage.setItem('tentalus_show-cookies-policy', 'false');
    }

    useEffect(() => {
        localStorage.getItem('tentalus_show-cookies-policy') === 'false' ? null : setShowCookiesPolicy(true);

        document.addEventListener('scroll', function(e) {
            var top  = window.pageYOffset || document.documentElement.scrollTop
        })
    }, [])

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
                <link rel="shortcut icon" href="https://media.graphassets.com/1AK69ZHGSomWxRMQ7SPJ" type="image/x-icon"/>
                <title>Tentalus - Software development</title>
            </Head>        
            <header className="w-full py-2 px-5 flex flex-col justify-center items-center border-b border-gray-600">
                <div className="flex justify-between items-center w-full max-w-7xl">
                    <div className="flex-1  relative z-10">
                        <img className="w-52" src="https://media.graphassets.com/xl7SVWSwRu2LKGrvMcT0" />
                    </div>
                    <div className="w-auto relative z-10 flex items-center">
                        <ul className="flex flex-row items-center">
                            <li className="ml-6 text-md hover:scale-x-105 hover:text-white duration-100">
                                <a href="#">
                                    Sobre nós
                                </a>
                            </li>
                            <li className="ml-6 text-md hover:scale-x-105 hover:text-white duration-100">
                                <a href="#">
                                O que fazemos
                                </a>
                            </li>
                            <li className="ml-6 text-md hover:scale-x-105 hover:text-white duration-100">
                                <a href="#">
                                    Tecnologias
                                </a>
                            </li>
                            <li className="ml-6 text-md hover:scale-x-105 hover:text-white duration-100">
                                <a href="#">
                                    Fale conosco
                                </a>
                            </li>
                        </ul>
                        <div className="ml-6 flex items-center">
                            <Button>
                                <IoLanguage className="text-white" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`${showCookiesPolicy ? 'translate-y-0 opacity-1' : '-translate-y-2 opacity-0'} w-full h-12 flex items-center justify-center bg-gradient-to-r from-brand-orange-200 to-brand-blue-200 transition-all duration-300 z-10 relative`}>
                <div className="w-full h-12 max-w-7xl text-white flex items-center justify-center">
                    <span className="flex-1 text-center">
                        Utilizamos cookies e tecnologia para aprimorar sua experiência de navegação de acordo com nossa 
                        <a href="" className="text-brand-orange-50"> Política de Privacidade</a>.
                    </span>
                    <button onClick={handleCloseCookiesPolicy}>
                        <FaTimes className="text-white" />
                    </button>
                </div>
            </div>
        </>
    )
}