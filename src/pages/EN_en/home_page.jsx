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

const EN_HomePage = () => {
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
        '[WEB] A Discord robot creation company for individuals or businesses.',
        '[WEB] A Discord RolePlay bot focused on magic and spells!',
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
        }, 30000)
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

    return(
        <div>
            <NavbarComponents/>
            <div className="flex justify-between p-2 md:p-16">
                <div className="order-1 p-2">
                    <div className="flex flex-col space-y-5">
                        <span className="text-3xl md:text-5xl font-bold">
                            Hello, we are <span className="text-indigo-400">HDev</span>.
                        </span>
                        <p className="text-gray-500 w-80 md:w-2/33">
                            HDev is a dynamic digital company specializing in creating impactful websites, designing original digital identities, and integrating cryptocurrency-related solutions.
                        </p>
                        <p className="text-gray-500 w-80 md:w-2/3">
                            With a talented team of developers and designers, we offer unique digital experiences that combine cutting-edge technology with captivating design.
                        </p>
                        <p className="text-gray-500 w-80 md:w-2/3">
                            Our passion for innovation drives us to create tailor-made solutions for each client, helping them stand out in the ever-evolving digital world.
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
                        Our fine <span className="text-indigo-300">team </span> !
                    </span>
                    <p className="text-start" id='faq-content'>
                        The workgroup is a dynamic and talented team, working collaboratively to achieve common goals. With competent and dedicated members, the workgroup brings diverse and complementary expertise, enabling us to approach challenges with creativity and efficiency.
                    </p>
                </div>
                <div className="hidden md:block absolute right-16 flex flex-col space-y-5 p-16">
                    <span className="text-5xl font-bold ml-48">
                        Our fine <span className="text-indigo-300">team </span> !
                    </span>
                    <p className="text-start ml-48" id='faq-content'>
                        The workgroup is a dynamic and talented team, working collaboratively to achieve common goals. With competent and dedicated members, the workgroup brings diverse and complementary expertise, enabling us to approach challenges with creativity and efficiency.
                    </p>
                </div>
                <div className='hidden md:block flex items-center justify-center mt-5 md:mt-64 p-2 md:p-12'>
                    <div className='flex flex-col space-y-5 items-center justify-center mt-10'>
                        <div className='flex flex-row space-x-24 rounded-md'>
                            <div className='card-container'>
                                <span className='pro badges'>Developer</span>
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
                                <p className='mt-5'>Web & Mobile <br/> Application Developer</p>
                                <div className='buttons'>
                                    <button className='primary'>
                                        Send a message
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
                                    <h6>Skills</h6>
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
                                <span className='pro badges'>Graphic designer</span>
                                <img className='round' src='https://randomuser.me/api/portraits/women/79.jpg' alt='user'></img>
                                <h3>Ilies HAMDI</h3>
                                <div className='flex flex-row space-x-3 items-center justify-center p-2 h-24'>
                                    <div className='carriers-grade'>
                                        <small>
                                            Web Design
                                        </small>
                                    </div>
                                </div>
                                <p className='mt-5'>Graphic Designer and Graphic Mockup Designer</p>
                                <div className='buttons'>
                                    <button className='primary'>
                                        Send a message
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
                                    <h6>Skills</h6>
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
                                <span className='pro badges'>Developer</span>
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
                                <p className='mt-5'>Web & Mobile <br/> Application Developer</p>
                                <div className='buttons'>
                                    <button className='primary'>
                                        Send a message
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
                                    <h6>Skills</h6>
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
                                <span className='pro badges'>Graphic designer</span>
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
                                <p className='mt-5'>Graphic Designer, Digital Identity Creator, and Poster Designer</p>
                                <div className='buttons'>
                                    <button className='primary'>
                                        Send a message
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
                                    <h6>Skills</h6>
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
                        Discover some <br></br><span className="text-indigo-300">projects </span> ?
                    </span>
                    <p className='text-start' id='projects-content'>
                        Our IT development company specializes in creating and implementing customized projects that align with the needs and goals of our clients. With our technical expertise and creative approach, we are able to design innovative and high-performing solutions, ensuring an optimal user experience and complete satisfaction.
                    </p>
                </div>
                <div className="hidden md:block absolute flex flex-col space-y-5 md:p-16">
                    <span className="text-5xl font-bold">
                        Discover some <span className="text-indigo-300">projects </span> ?
                    </span>
                    <p className='text-start' id='projects-content'>
                        Our IT development company specializes in creating and implementing customized projects that align with the needs and goals of our clients. With our technical expertise and creative approach, we are able to design innovative and high-performing solutions, ensuring an optimal user experience and complete satisfaction.
                    </p>
                </div>
                <div className="flex justify-between mt-10" id='projects-container'>
                    <div className="hidden md:block order-1 mt-10">
                        <img src={imgObject[inRange(main - 1)]} alt='' className='image-projects'></img>
                    </div>
                    <div className="order-2">
                        <a href={projectLink[inRange(main)]} className=''>
                            <div className='flex flex-col items-center justify-center space-y-2'>
                                <img src={imgObject[inRange(main)]} alt='' className='image-focus' style={{ width: 350, height: 250, borderRadius: 15 }}></img>
                                <div className='loader-line'></div>
                            </div>
                        </a>
                        <div className="flex flex-col space-y-5  md:ml-5">
                            <div className="flex flex-col space-y-2 items-left justify-left p-3">
                                <span className="font-bold text-indigo-300 text-3xl" id="title-project">{projectTitle[inRange(main)]}</span>
                                <p className="text-gray-600 w-80 md:w-96" id="title-description">
                                    {projectDescription[inRange(main)]}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block order-3 mt-10">
                        <img src={imgObject[inRange(main + 1)]} alt='' className='image-projects'></img>
                    </div>
                </div>
            </div>
            <div className="p-2 mt-14 md:mt-28" id='faq'>
                <div className="block md:hidden flex flex-col space-y-3 p-2">
                    <span className="text-3xl md:text-5xl font-bold">
                        Our <span className="text-indigo-300">environments</span>
                    </span>
                    <p className="text-start" id='faq-content'>
                        Our FAQ (Frequently Asked Questions) is a valuable resource to address your most common inquiries. It includes a comprehensive list of frequently asked questions by our customers, accompanied by clear and detailed answers.
                    </p>
                </div>
                <div className="hidden md:block absolute right-16 flex flex-col space-y-5 p-16">
                    <span className="text-5xl font-bold ml-48">
                        Our <span className="text-indigo-300">environments</span>
                    </span>
                    <p className="text-start ml-48" id='faq-content'>
                        Our FAQ (Frequently Asked Questions) is a valuable resource to address your most common inquiries. It includes a comprehensive list of frequently asked questions by our customers, accompanied by clear and detailed answers.
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
                                                    What programming languages do you master?
                                                </span>
                                            </div>
                                            <div className='order-2'>
                                                <svg id='chevron' className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                            </div>
                                        </div>
                                    </summary>
                                    <p>
                                        As a full-stack development team, we mainly specialize in JavaScript/TypeScript, PHP, Solidity, as well as markup languages like HTML & CSS. Our primary environment is Node.js.
                                    </p>
                                </details>
                            </li>
                            <li>
                                <details className='border-b-2 border-indigo-400 p-5 rounded w-80 md:w-auto'>
                                    <summary className=''>
                                        <div className='flex justify-between'>
                                            <div className='order-1'>
                                                <span className='font-bold'>
                                                    How can I request a quote for an IT development or graphic design project?
                                                </span>
                                            </div>
                                            <div className='order-2'>
                                                <svg id='chevron' className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                            </div>
                                        </div>
                                    </summary>
                                    <p>
                                        To request a quote, we offer several simplified or customized methods. The easiest way would be to get in touch using the form below in the <a href='#contact'>contact</a> section or send us an email at the address <span>hdevs.contact@gmail.com</span>.
                                    </p>
                                </details>
                            </li>
                            <li>
                                <details className='border-b-2 border-indigo-400 p-5 rounded w-80 md:w-auto'>
                                    <summary className=''>
                                        <div className='flex justify-between'>
                                            <div className='order-1'>
                                                <span className='font-bold'>
                                                    What are the development stages of an application or a graphic design?Quelles sont les étapes de développement d'une application ou d'un design graphique ?
                                                </span>
                                            </div>
                                            <div className='order-2'>
                                                <svg id='chevron' className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                            </div>
                                        </div>
                                    </summary>
                                    <p>
                                    In terms of development, the essential steps involve creating a specifications document to determine the tasks to be done in advance. Then, we set up a "test" environment to develop the project locally or on a machine while providing visibility to developers, designers, and client(s). Once the development in the test environment is complete, we deploy the public version that is accessible to everyone with your domain name.<br/>Regarding the design aspect, we also start with a specifications document to define the color palette and interface design according to the client's requirements. Then, the graphic mockup is created, which the developer(s) can use as a basis for website or application development.
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
                                                    Do you provide maintenance and support services after project delivery?
                                                </span>
                                            </div>
                                            <div className='order-2'>
                                                <svg id='chevron' className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                            </div>
                                        </div>
                                    </summary>
                                    <p>
                                    Annual After-Sales Service (SAS) and SEO packages are available upon client request. Support is provided to address minor errors, whether in design or development. Major changes are only included in the SAS subscription or when there is a new quote request, especially for website or application redesign.
                                    </p>
                                </details>
                            </li>
                            <li>
                                <details className='border-b-2 border-indigo-400 p-5 rounded w-80 md:w-auto'>
                                    <summary className=''>
                                        <div className='flex justify-between'>
                                            <div className='order-1'>
                                                <span className='font-bold'>
                                                    How is the process of collaborating with your company?
                                                </span>
                                            </div>
                                            <div className='order-2'>
                                                <svg id='chevron' className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                            </div>
                                        </div>
                                    </summary>
                                    <p>
                                    The collaboration between the client and h-devs is essential for the smooth progress of the project. Regular updates on the progress are sent to gather more perspectives and potential modifications after careful consideration. The entire team provides their personal viewpoints to establish a report on the project's strengths and weaknesses.
                                    </p>
                                </details>
                            </li>
                            <li>
                                <details className='border-b-2 border-indigo-400 p-5 rounded w-80 md:w-auto'>
                                    <summary className=''>
                                        <div className='flex justify-between'>
                                            <div className='order-1'>
                                                <span className='font-bold'>
                                                    What are your pricing and payment terms?
                                                </span>
                                            </div>
                                            <div className='order-2'>
                                                <svg id='chevron' className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                            </div>
                                        </div>
                                    </summary>
                                    <p>
                                    Regarding project pricing, it is based on hourly rates, which are defined in advance when sending the quote/invoice upon establishing the specifications. On paper, the hours spent on any task are specified so that the client is aware of the maximum time allocated for each task. The payment methods accepted are bank transfers, PayPal, and cryptocurrencies.
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
                        <span className="text-indigo-300">Contact </span> us ?
                    </span>
                    <p className="text-start">
                        Please get in touch with us quickly using our contact form, and we will take care of reaching out to you shortly to provide a prompt response.
                    </p>
                </div>
                <div className="hidden md:block absolute flex flex-col space-y-5 md:p-16">
                    <span className="text-5xl font-bold">
                        <span className="text-indigo-300">Contact</span> us ?
                    </span>
                    <p className="w-82 md:w-96 text-start">
                        Please get in touch with us quickly using our contact form, and we will take care of reaching out to you shortly to provide a prompt response.
                    </p>
                </div>
                <div className="flex justify-between mt-10 md:mt-52 md:p-16">
                    <div className="order-1 p-2">
                        <form className="flex flex-col space-y-5 md:mr-16">
                            <input className="p-3 border-2 border-black rounded-md w-80 md:w-96" type="text" placeholder="Name"></input>
                            <input className="p-3 border-2 border-black rounded-md w-80 md:w-96" type="email" placeholder="E-mail"></input>
                            <input className="p-3 border-2 border-black rounded-md w-80 md:w-96" type="phone" placeholder="Phone number"></input>
                            <input className="p-3 border-2 border-black rounded-md w-80 md:w-96 h-32" type="text" placeholder="Message"></input>
                            <button className="bg-indigo-300 hover:bg-indigo-400 p-3 rounded-md w-80 md:w-96 font-bold" type={"submit"}>
                                Send
                            </button>
                        </form>
                        <div className="flex flex-col md:flex-row space-y-3 space-x-0 md:space-y-0 md:space-x-10 mt-5">
                            <div className="flex flex-row space-x-3 items-center">
                                <img src="https://generation-sessions.s3.amazonaws.com/36126705fba3a10dc0d4852e6e5cca70/img/frame-831.svg" alt="" className="w-8 h-8">
                                </img>
                                <div className="flex flex-col space-y-1">
                                    <span className="font-bold">Phone</span>
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

export default EN_HomePage;