import { useState } from 'react';

import Langs from '../../addons/functions/Languages';

const NavbarComponents = () => {
    const [ lang, setLang ] = useState(0);
    const item = localStorage.getItem('lang');

    function Languages() {
        if(item === 'FR_fr') {
            window.location.replace("http://h-devs.com/en");
            localStorage.setItem('lang', 'EN_en');
        } else {
            window.location.replace("http://h-devs.com/fr");
            localStorage.setItem('lang', 'FR_fr');
        }
    }

    Langs()

    return(
        <nav className="flex justify-between p-5">
            <div class="ocean" id='navbar'>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            <div className="order-1">
                    <span className="font-bold text-white">
                        HDev
                    </span>
                </div>
                <div className='hidden md:block order-2'>
                    <ul className="flex flex-row space-x-10 items-center justify-center">
                        {!item || item === 'FR_fr' ?
                            <>
                                <li>
                                    <a href="/#" className="text-white hover:underline underline-offset-2">
                                        Accueil
                                    </a>
                                </li>
                                <li>
                                    <a href="#teams" className="text-white hover:underline underline-offset-2">
                                        Equipe
                                    </a>
                                </li>
                                <li>
                                    <a href="#project" className="text-white hover:underline underline-offset-2">
                                        Projets
                                    </a>
                                </li>
                                <li>
                                    <a href="#faq" className="text-white hover:underline underline-offset-2">
                                        A Propos
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-white hover:underline underline-offset-2">
                                        Contact
                                    </a>
                                </li>
                            </>
                        :
                            <>
                                <li>
                                    <a href="/#" className="text-white hover:underline underline-offset-2">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#teams" className="text-white hover:underline underline-offset-2">
                                        Teams
                                    </a>
                                </li>
                                <li>
                                    <a href="#project" className="text-white hover:underline underline-offset-2">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#faq" className="text-white hover:underline underline-offset-2">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-white hover:underline underline-offset-2">
                                        Contact
                                    </a>
                                </li>
                            </>
                        }
                    </ul>
                </div>
                <div className='block md:hidden order-2'>
                    <button className='flex flex-col space-y-1' id='dropdown-btn'>
                        <div className='w-5 border-2 border-white'></div>
                        <div className='w-5 border-2 border-white'></div>
                        <div className='w-5 border-2 border-white'></div>
                    </button>
                </div>
                <div className='hidden absolute right-5 top-10'>
                    <ul className='flex flex-col space-y-3'>
                        <li>
                            test link
                        </li>
                    </ul>
                </div>
                <div className='hidden md:block order-3'>
                    {!item || item === 'FR_fr' ?
                        <button className='flex flex-row space-x-3 items-center justify-center' onClick={Languages}>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' alt='' className='w-5 h-5 rounded-full'></img>
                            <span className='text-white'>English</span>
                        </button>
                    :
                        <button className='flex flex-row space-x-3 items-center justify-center' onClick={Languages}>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png' alt='' className='w-5 h-5 rounded-full'></img>
                            <span className='text-white'>Français</span>
                        </button>
                    }
                </div>
        </nav>
    )
}

export default NavbarComponents;