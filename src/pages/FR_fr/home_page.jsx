import { useState } from 'react';

import Lottie from 'react-lottie';
import animationData from '../../addons/animations/lottie.json';
import sphereData from '../../addons/animations/sphere.json';

import test from '../../addons/images/projects/test.jpeg';
import BotDiscordFrance from '../../addons/images/projects/bot-discord-france.jpg';

import NavbarComponents from "../../components/Headers/navbar_components";
import FooterComponents from '../../components/Footers/footer_components';

import apps from '../../addons/images/icons/apps.png';
import bots from '../../addons/images/icons/bots.png';
import clouds from '../../addons/images/icons/cloud.png';
import mockup from '../../addons/images/icons/mockup.png';
import token from '../../addons/images/icons/token.png';
import website from '../../addons/images/icons/website.png';
import maker from '../../addons/images/icons/maker.png';
import design from '../../addons/images/icons/design.png';

import instagram_icon from '../../addons/images/networks/instagram.png';
import linkledin_icon from '../../addons/images/networks/linkledin.png';
import github_icon from '../../addons/images/networks/github.png';
import twitter_icon from '../../addons/images/networks/twitter.png';

const FR_HomePage = () => {
    const imgObject = [
        `${BotDiscordFrance}`,
        `${test}`,
        `${test}`
    ];

    const projectLink = [
        'https://botdiscord.fr/',
        'https://magic-bot.ovh/',
        'https://facebook.com/'
    ]

    const projectTitle = [
        'Bot Discord France',
        'Magic Bot - Bot Discord',
        'Project #3',
    ];

    const projectDescription = [
        '[WEB] Une entreprise de créations de robots Discord pour particuliers ou entreprises.',
        '[WEB] Un robot Discord RôlePlay centrée sur la magie et les sorts !',
        '3. Loreum Ipseum'
    ];

    const [main, setMain ] = useState(0);

    function inRange(val) {
        if(val < 0) {
            return imgObject.length + val;
        } else if(val > imgObject.length - 1) {
            return val - imgObject.length;
        } else {
            return val;
        }
    }
    
    function rightScroll() {
        setInterval(async () => {
            return setMain((prevMain) => inRange(prevMain + 1));
        }, 30000);
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    const sphereOptions = {
        loop: true,
        autoplay: true,
        animationData: sphereData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        },
    }

    rightScroll();

    function SendEmail() {
        var email = 'hdevs.contact@gmail.com';
        var subject = 'test';
        var body = 'test';

        var mailToLink = "[mailto](https://www.google.com/search?q=mailto):" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

        window.location.href = mailToLink;
    }

    return(
        <div>
            <NavbarComponents/>
            <div className="flex justify-between p-2 md:p-16">
                <div className="order-1 p-2">
                    <div className="flex flex-col space-y-5">
                        <span className="text-3xl md:text-5xl font-bold">
                            Bonjour, nous sommes <span className="text-indigo-400">HDev</span>.
                        </span>
                        <p className="text-gray-500 w-80 md:w-2/3">
                            HDev est une entreprise digitale dynamique spécialisée dans la création de sites internet percutants, la conception d'identités numériques originales et l'intégration de solutions liées aux crypto-monnaies.
                        </p>
                        <p className="text-gray-500 w-80 md:w-2/3">
                            Avec une équipe talentueuse de développeurs et de designers, nous offrons des expériences numériques uniques qui allient technologie de pointe et design captivant.
                        </p>
                        <p className="text-gray-500 w-80 md:w-2/3">
                            Notre passion pour l'innovation nous pousse à créer des solutions sur mesure pour chaque client, les aidant ainsi à se démarquer dans le monde numérique en constante évolution.
                        </p>
                    </div>
                </div>
                <div className="hidden md:block order-2">
                    <div className='centered-text'>
                        <Lottie options={sphereOptions} height={200} width={200}/>
                    </div>
                    <ul className='circle-container'>
                        <li>
                            <div className='right-icons flex flex-row space-x-3 items-center p-2' id='icons-container'>
                                <img src={ bots } className='circle-icons' alt='bots'></img>
                                <span>Robots Digital</span>
                            </div>
                        </li>
                        <li>
                            <div className='right-icons flex flex-row space-x-3 items-center p-2' id='icons-container'>
                                <img src={ token } className='circle-icons' alt='token'></img>
                                <span>Crypto-Monnaies</span>
                            </div>
                        </li>
                        <li>
                            <div className='center-icons flex flex-row space-x-3 items-center p-2' id='icons-container'>
                                <img src={ mockup } className='circle-icons' alt='web design'></img>
                                <span>Web Design</span>
                            </div>
                        </li>
                        <li>
                            <div className='left-icons flex flex-row space-x-3 items-center p-2' id='icons-container'>
                                <img src={ maker } className='circle-icons' alt='logo'></img>
                                <span>Identité Visuelle</span>
                            </div>
                        </li>
                        <li>
                            <div className='left-icons flex flex-row space-x-3 items-center p-2' id='icons-container'>
                                <img src={ apps } className='circle-icons' alt='apps & softwares'></img>
                                <span>Logiciels & Apps</span>
                            </div>
                        </li>
                        <li>
                            <div className='left-icons flex flex-row space-x-3 items-center p-2' id='icons-container'>
                                <img src={ website } className='circle-icons' alt='websites'></img>
                                <span>Sites Internet</span>
                            </div>
                        </li>
                        <li>
                            <div className='center-icons flex flex-row space-x-3 items-center p-2' id='icons-container'>
                                <img src={ design } className='circle-icons' alt='design'></img>
                                <span>Graphisme</span>
                            </div>
                        </li>
                        <li>
                            <div className='right-icons flex flex-row space-x-3 items-center p-2' id='icons-container'>
                                <img src={ clouds } className='circle-icons' alt='clouds'></img>
                                <span>Infrastructures</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='p-2 mt-32' id='teams'>
                <div className="block md:hidden flex flex-col space-y-3 p-2">
                    <span className="text-3xl md:text-5xl font-bold">
                        Notre fine <span className="text-indigo-300">équipe </span> !
                    </span>
                    <p className="text-start" id='faq-content'>
                        Le groupe de travail est une équipe dynamique et talentueuse, travaillant en collaboration pour atteindre des objectifs communs. Avec des membres compétents et engagés, le groupe de travail apporte une expertise variée et complémentaire, ce qui permet d'aborder les défis avec créativité et efficacité.
                    </p>
                </div>
                <div className="hidden md:block absolute right-16 flex flex-col space-y-5 p-16">
                    <span className="text-5xl font-bold ml-48">
                        Notre fine <span className="text-indigo-300">équipe </span> !
                    </span>
                    <p className="text-start ml-48" id='faq-content'>
                        Le groupe de travail est une équipe dynamique et talentueuse, travaillant en collaboration pour atteindre des objectifs communs. Avec des membres compétents et engagés, le groupe de travail apporte une expertise variée et complémentaire, ce qui permet d'aborder les défis avec créativité et efficacité.
                    </p>
                </div>
                <div className='hidden md:block flex items-center justify-center mt-5 md:mt-64 p-2 md:p-12'>
                    <div className='flex flex-col space-y-5 items-center justify-center mt-10'>
                        <div className='flex flex-row space-x-24 rounded-md'>
                            <div className='card-container'>
                                <span className='pro badges'>Développeur</span>
                                <img className='round' src='https://randomuser.me/api/portraits/women/79.jpg' alt='user'></img>
                                <h3>Samy HAMDI</h3>
                                <div className='flex flex-row space-x-3 items-center justify-center p-2 h-24'>
                                    <div className='carriers-grade'>
                                        <small>
                                            Front-End
                                        </small>
                                    </div>
                                    <div className='carriers-grade'>
                                        <small>
                                            Back-End
                                        </small>
                                    </div>
                                    <div className='carriers-grade'>
                                        <small>
                                            Blockchain
                                        </small>
                                    </div>
                                    <div className='carriers-grade'>
                                        <small>
                                            IA
                                        </small>
                                    </div>
                                </div>
                                <p className='mt-5'>Développeur de sites internet & applications bureaux / mobiles</p>
                                <div className='buttons'>
                                    <button className='primary'>
                                        Envoyer un message
                                    </button>
                                </div>
                                <div className='mt-5'>
                                    <ul className='flex flex-row space-x-5 items-center justify-center'>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={instagram_icon} alt='instagram_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={linkledin_icon} alt='linkledin_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={github_icon} alt='github_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={twitter_icon} alt='twitter_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='skills'>
                                    <h6>Compétences</h6>
                                    <ul className='skills-list'>
			                            <li className='skills-items'>Node.JS</li>
			                            <li className='skills-items'>HTML</li>
			                            <li className='skills-items'>CSS</li>
                                        <li className='skills-items'>PHP</li>
			                            <li className='skills-items'>JavaScript</li>
			                            <li className='skills-items'>TypeScript</li>
			                            <li className='skills-items'>React.JS</li>
                                        <li className='skills-items'>Solidity</li>
                                        <li className='skills-items'>SQL</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='card-container'>
                                <span className='pro badges'>Graphiste</span>
                                <img className='round' src='https://randomuser.me/api/portraits/women/79.jpg' alt='user'></img>
                                <h3>Ilies HAMDI</h3>
                                <div className='flex flex-row space-x-3 items-center justify-center p-2 h-24'>
                                    <div className='carriers-grade'>
                                        <small>
                                            Web Design
                                        </small>
                                    </div>
                                </div>
                                <p className='mt-5'>Graphiste et concepteur de maquettes graphiques</p>
                                <div className='buttons'>
                                    <button className='primary'>
                                        Envoyer un message
                                    </button>
                                </div>
                                <div className='mt-5'>
                                    <ul className='flex flex-row space-x-5 items-center justify-center'>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={instagram_icon} alt='instagram_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={linkledin_icon} alt='linkledin_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={github_icon} alt='github_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={twitter_icon} alt='twitter_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='skills'>
                                    <h6>Compétences</h6>
                                    <ul className='skills-list'>
                                        <li className='skills-items'>UI / UX Design</li>
			                            <li className='skills-items'>Figma</li>
			                            <li className='skills-items'>Intégrations</li>
                                        <li className='skills-items'>Animations</li>
                                        <li className='skills-items'>Interactions</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='card-container'>
                                <span className='pro badges'>Développeur</span>
                                <img className='round' src='https://randomuser.me/api/portraits/women/79.jpg' alt='user'></img>
                                <h3>Quentin LEGROS</h3>
                                <div className='flex flex-row space-x-3 items-center justify-center p-2 h-24'>
                                    <div className='carriers-grade'>
                                        <small>
                                            Front-End
                                        </small>
                                    </div>
                                    <div className='carriers-grade'>
                                        <small>
                                            Back-End
                                        </small>
                                    </div>
                                    <div className='carriers-grade'>
                                        <small>
                                            Cyber-Securité
                                        </small>
                                    </div>
                                </div>
                                <p className='mt-5'>Développeur de sites internet & applications bureaux / mobiles</p>
                                <div className='buttons'>
                                    <button className='primary'>
                                        Envoyer un message
                                    </button>
                                </div>
                                <div className='mt-5'>
                                    <ul className='flex flex-row space-x-5 items-center justify-center'>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={instagram_icon} alt='instagram_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={linkledin_icon} alt='linkledin_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={github_icon} alt='github_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={twitter_icon} alt='twitter_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='skills'>
                                    <h6>Compétences</h6>
                                    <ul className='skills-list'>
                                        <li className='skills-items'>Node.JS</li>
			                            <li className='skills-items'>HTML</li>
			                            <li className='skills-items'>CSS</li>
                                        <li className='skills-items'>PHP</li>
			                            <li className='skills-items'>JavaScript</li>
			                            <li className='skills-items'>TypeScript</li>
			                            <li className='skills-items'>React.JS</li>
                                        <li className='skills-items'>Solidity</li>
                                        <li className='skills-items'>SQL</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='card-container'>
                                <span className='pro badges'>Graphiste</span>
                                <img className='round' src='https://randomuser.me/api/portraits/women/79.jpg' alt='user'></img>
                                <h3>Thibaul DOE</h3>
                                <div className='flex flex-row space-x-3 items-center justify-center p-2 h-24'>
                                    <div className='carriers-grade'>
                                        <small>
                                            Logo
                                        </small>
                                    </div>
                                    <div className='carriers-grade'>
                                        <small>
                                            Bannière
                                        </small>
                                    </div>
                                    <div className='carriers-grade'>
                                        <small>
                                            3D
                                        </small>
                                    </div>
                                </div>
                                <p className='mt-5'>Graphiste, créateur d'identitée numérique et affiches</p>
                                <div className='buttons'>
                                    <button className='primary'>
                                        Envoyer un message
                                    </button>
                                </div>
                                <div className='mt-5'>
                                    <ul className='flex flex-row space-x-5 items-center justify-center'>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={instagram_icon} alt='instagram_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={linkledin_icon} alt='linkledin_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={github_icon} alt='github_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' className=''>
                                                <img src={twitter_icon} alt='twitter_account' className='w-5 h-5 rounded-md'></img>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='skills'>
                                    <h6>Compétences</h6>
                                    <ul className='skills-list'>
                                        <li className='skills-items'>UI / UX</li>
			                            <li className='skills-items'>Logo</li>
			                            <li className='skills-items'>Illustrations</li>
			                            <li className='skills-items'>Motion</li>
			                            <li className='skills-items'>Mockup</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2 mt-24" id='project'>
                <div className="block md:hidden flex flex-col space-y-3 p-2">
                    <span className="text-3xl md:text-5xl font-bold">
                        Découvrir quelques <br></br><span className="text-indigo-300">projets </span> ?
                    </span>
                </div>
                <div className="hidden md:block absolute flex flex-col space-y-5 md:p-16">
                    <span className="text-5xl font-bold">
                        Découvrir quelques <span className="text-indigo-300">projets </span> ?
                    </span>
                    <p className='text-start' id='projects-content'>
                        Notre entreprise de développement informatique est spécialisée dans la création et la réalisation de projets sur mesure, en harmonie avec les besoins et les objectifs de nos clients. Grâce à notre expertise technique et notre approche créative, nous sommes en mesure de concevoir des solutions innovantes et performantes, garantissant une expérience utilisateur optimale et une satisfaction totale.
                    </p>
                </div>
                <div className="flex justify-between mt-10" id='projects-container'>
                    <div className="hidden md:block order-1 mt-5 lg:mt-5">
                        <img src={imgObject[inRange(main - 1)]} alt='' className='image-projects'></img>
                    </div>
                    <div className="order-2 lg:mt-5">
                        <a href={projectLink[inRange(main)]} target='_blank' className=''>
                            <div className='flex flex-col items-center justify-center space-y-2'>
                                <img src={imgObject[inRange(main)]} alt='' className='image-focus' style={{ width: 350, height: 250, borderRadius: 15 }}></img>
                                <div className='loader-line'></div>
                            </div>
                        </a>
                        <div className="flex flex-col space-y-5 md:ml-5">
                            <div className="flex flex-col space-y-2 items-left justify-left p-3">
                                <span className="font-bold text-indigo-300 text-3xl" id="title-project">{projectTitle[inRange(main)]}</span>
                                <p className="text-gray-600 w-80 md:w-96" id="title-description">
                                    {projectDescription[inRange(main)]}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block order-3 mt-10 lg:mt-5">
                        <img src={imgObject[inRange(main + 1)]} alt='' className='image-projects'></img>
                    </div>
                </div>
            </div>
            <div className="p-2 mt-14 md:mt-28" id='faq'>
                <div className="block md:hidden flex flex-col space-y-3 p-2">
                    <span className="text-3xl md:text-5xl font-bold">
                        Nos <span className="text-indigo-300">environnements </span>
                    </span>
                    <p className="text-start" id='faq-content'>
                    Notre F.A.Q (Foire Aux Questions) est une ressource précieuse pour répondre à vos interrogations les plus courantes. Elle regroupe une liste complète de questions fréquemment posées par notre clientèle, accompagnées de réponses claires et détaillées.
                    </p>
                </div>
                <div className="hidden md:block absolute right-16 flex flex-col space-y-5 p-16">
                    <span className="text-5xl font-bold ml-48">
                        Nos <span className="text-indigo-300">environnements </span>
                    </span>
                    <p className="text-start ml-48" id='faq-content'>
                    Notre F.A.Q (Foire Aux Questions) est une ressource précieuse pour répondre à vos interrogations les plus courantes. Elle regroupe une liste complète de questions fréquemment posées par notre clientèle, accompagnées de réponses claires et détaillées.
                    </p>
                </div>
                <div className='flex mt-5 md:mt-64 p-2 md:p-16 items-center justify-center'>
                    <div className='flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-24 items-center justify-center'>
                        <ul className='flex flex-col space-y-24 mt-5'>
                            <li>
                                <details className='border-b-2 border-indigo-400 p-5 rounded w-80 md:w-auto'>
                                    <summary className=''>
                                        <div className='flex justify-between'>
                                            <div className='order-1'>
                                                <span className='font-bold'>
                                                    Quels sont les langages de programmation que vous maîtrisez ?
                                                </span>
                                            </div>
                                            <div className='order-2'>
                                                <svg id='chevron' className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                            </div>
                                        </div>
                                    </summary>
                                    <p>
                                        En étant une équipe de développeur full-stack, nous maitrisons principalement le JavaScript / TypeScript, PHP, Solidity ainsi que les balises de typages comme HTML & CSS. Notre environnement principal est le Node.JS.
                                    </p>
                                </details>
                            </li>
                            <li>
                                <details className='border-b-2 border-indigo-400 p-5 rounded w-80 md:w-auto'>
                                    <summary className=''>
                                        <div className='flex justify-between'>
                                            <div className='order-1'>
                                                <span className='font-bold'>
                                                    Comment puis-je demander un devis pour un projet de développement informatique ou de graphisme ?
                                                </span>
                                            </div>
                                            <div className='order-2'>
                                                <svg id='chevron' className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                            </div>
                                        </div>
                                    </summary>
                                    <p>
                                        Pour demander un devis, nous avons plusieurs moyen que ce soit simplifiés ou personnalisés. Le plus simple serait de prendre contact grâce au formulaire ci-dessous dans la section <a href='#contact'>contact</a> ou bien nous envoyer un e-mail à l'adresse <span>hdevs.contact@gmail.com</span>.
                                    </p>
                                </details>
                            </li>
                            <li>
                                <details className='border-b-2 border-indigo-400 p-5 rounded w-80 md:w-auto'>
                                    <summary className=''>
                                        <div className='flex justify-between'>
                                            <div className='order-1'>
                                                <span className='font-bold'>
                                                    Quelles sont les étapes de développement d'une application ou d'un design graphique ?
                                                </span>
                                            </div>
                                            <div className='order-2'>
                                                <svg id='chevron' className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                            </div>
                                        </div>
                                    </summary>
                                    <p>
                                        Au niveau du développement les étapes essentielles sont la mise en place d'un cahier des charges afin de connaître au préalable les tâches à faire en amont, ensuite nous déployer un environnement de "test" qui permet de développer localement ou sur machine le projet tous en ayant une visibilité par les développeurs, les graphistes et le(s) client(s). Lors de la fin du développement de l'environnement de test, nous déployer la version publique qui est accèssible à tous le monde avec votre nom de domaine.<br/> Au niveau du graphisme, en premier lieu se fait aussi de même le cahier des charges ainsi que la palette de couleur et le design de l'interface selon le(s) client(s). Ensuite prend forme la maquette graphique d'oû le(s) développeur(s) pourront se basée dessus afin de développer le site internet ou l'application.
                                    </p>
                                </details>
                            </li>
                        </ul>
                        <ul className='flex flex-col space-y-24 pt-24 md:pt-0'>
                            <li>
                                <details className='border-b-2 border-indigo-400 p-5 rounded w-80 md:w-auto'>
                                    <summary className=''>
                                        <div className='flex justify-between'>
                                            <div className='order-1'>
                                                <span className='font-bold'>
                                                    Fournissez-vous des services de maintenance et de support après la livraison du projet ?
                                                </span>
                                            </div>
                                            <div className='order-2'>
                                                <svg id='chevron' className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                            </div>
                                        </div>
                                    </summary>
                                    <p>
                                        Des formules annuelle de Services Après Ventes (SAV), SEO sont possibles à la demande du client. Le support est pris en charge lorsqu'il faut régler quelques petites erreurs que ce soit en design ou en développement. Les changements majeurs sont seulement compris lorsqu'il y a un abonnement de SAV ou bien une nouvelle demande de devis notamment avec la refonte d'un site ou d'une application
                                    </p>
                                </details>
                            </li>
                            <li>
                                <details className='border-b-2 border-indigo-400 p-5 rounded w-80 md:w-auto'>
                                    <summary className=''>
                                        <div className='flex justify-between'>
                                            <div className='order-1'>
                                                <span className='font-bold'>
                                                    Comment se déroule le processus de collaboration avec votre entreprise ?
                                                </span>
                                            </div>
                                            <div className='order-2'>
                                                <svg id='chevron' className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                            </div>
                                        </div>
                                    </summary>
                                    <p>
                                        La collaboration entre le client et h-devs est essentiels au bon déroulement de la structure du projet. Des mises à jours régulières de l'avancement sont envoyés afins de connaître d'avantages points de vues et d'éventuelles modifications après réfléxions. Toute l'équipe donne son point de vue personnel afin d'établir un rapport de ce qui est un point fort et faible.
                                    </p>
                                </details>
                            </li>
                            <li>
                                <details className='border-b-2 border-indigo-400 p-5 rounded w-80 md:w-auto'>
                                    <summary className=''>
                                        <div className='flex justify-between'>
                                            <div className='order-1'>
                                                <span className='font-bold'>
                                                    Quelles sont vos tarifications et modalités de paiement ?
                                                </span>
                                            </div>
                                            <div className='order-2'>
                                                <svg id='chevron' className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                            </div>
                                        </div>
                                    </summary>
                                    <p>
                                        Au niveau de la tarification des projets, cela se fait par taux horaires, celui-ci est préalablement définis lors de l'envois du devis / facture lorsque le cahier des charges est établis. Sur papier, les heures passer sur n'importe quelles fonctions est définie afin que le client sache le temps limite que l'on passe sur une tâches. Les modalités de paiement sont les virements bancaires, paypal et crypto-monnaies.
                                    </p>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-2 mt-14 md:mt-28" id='contact'>
                <div className="block md:hidden flex flex-col space-y-3 p-2">
                    <span className="text-3xl md:text-5xl font-bold">
                        Nous <span className="text-indigo-300">contacter </span> ?
                    </span>
                    <p className="text-start">
                        Prenez contact rapidement avec nous grâce a notre formulaire, nous prenons en charge de vous recontacter par la suite afin de vous répondre dans un brief délais.
                    </p>
                </div>
                <div className="hidden md:block absolute flex flex-col space-y-5 md:p-16">
                    <span className="text-5xl font-bold">
                        Nous <span className="text-indigo-300">contacter</span> ?
                    </span>
                    <p className="w-80 md:w-96 text-start">
                        Prenez contact rapidement avec nous grâce a notre formulaire, nous prenons en charge de vous recontacter par la suite afin de vous répondre dans un brief délais.
                    </p>
                </div>
                <div className="flex justify-between mt-10 md:mt-52 md:p-16">
                    <div className="order-1 p-2">
                        <form className="flex flex-col space-y-5 md:mr-16">
                            <input className="p-3 border-2 border-black rounded-md w-80 md:w-96" type="text" placeholder="Nom"></input>
                            <input className="p-3 border-2 border-black rounded-md w-80 md:w-96" type="email" placeholder="E-mail"></input>
                            <input className="p-3 border-2 border-black rounded-md w-80 md:w-96" type="phone" placeholder="Numéro de téléphone"></input>
                            <input className="p-3 border-2 border-black rounded-md w-80 md:w-96 h-32" type="text" placeholder="Message"></input>
                            <button className="bg-indigo-300 hover:bg-indigo-400 p-3 rounded-md w-96w-80 md:w-96 font-bold" type={"button"} onClick={SendEmail}>
                                Envoyer
                            </button>
                        </form>
                        <div className="flex flex-col md:flex-row space-y-3 space-x-0 md:space-y-0 md:space-x-10 mt-5">
                            <div className="flex flex-row space-x-3 items-center">
                                <img src="https://generation-sessions.s3.amazonaws.com/36126705fba3a10dc0d4852e6e5cca70/img/frame-831.svg" alt="" className="w-8 h-8">
                                </img>
                                <div className="flex flex-col space-y-1">
                                    <span className="font-bold">Téléphone</span>
                                    <span>+33 7 89 40 12 33</span>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-3 items-center">
                                <img src="https://generation-sessions.s3.amazonaws.com/36126705fba3a10dc0d4852e6e5cca70/img/frame-833.svg" alt="" className="w-8 h-8">
                                </img>
                                <div className="flex flex-col space-y-1">
                                    <span className="font-bold">E-Mail</span>
                                    <span>hdevs.contact@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block order-2">
                        <Lottie options={defaultOptions} />
                    </div>
                </div>
            </div>
            <FooterComponents/>
        </div>
    )
}

export default FR_HomePage;