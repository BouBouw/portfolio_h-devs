import instagram_icon from '../../addons/images/networks/instagram.png';
import linkledin_icon from '../../addons/images/networks/linkledin.png';
import github_icon from '../../addons/images/networks/github.png';
import twitter_icon from '../../addons/images/networks/twitter.png';

const FooterComponents = () => {
    const item = localStorage.getItem('lang');

    return(
        <footer className="p-5" id="footer">
            <div className='flex justify-between'>
                <div className='hidden md:block order-1'>
                    <div className="flex flex-col space-y-3 space-x-0 md:flex-row md:space-y-0 md:space-x-5 items-center justify-center">
                        <a href="/#" className="text-white hover:text-black">{!item || item === 'FR_fr' ? "Modifier son profil" : "Edit profile"}</a>
                        <a href="/#" className="text-white hover:text-black">{!item || item === 'FR_fr' ? "Gérer ses projets" : "Manage your projects"}</a>
                    </div>
                </div>
                <div className='order-2'>
                    <ul className='flex flex-row space-x-5 items-center justify-center'>
                        <li>
                            <a href="/#" className="">
                                <img src={ linkledin_icon } alt="" className="w-7 h-7 rounded-md"></img>
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="">
                                <img src={ instagram_icon } alt="" className="w-7 h-7 rounded-md"></img>
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="">
                                <img src={ twitter_icon } alt="" className="w-7 h-7 rounded-md"></img>
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="">
                                <img src={ github_icon } alt="" className="w-7 h-7 rounded-md"></img>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='hidden md:block order-3'>
                    <p className="text-white">
                        {!item || item === 'FR_fr' ? "Copyright © 2023 HDevs. Tous droits réservés." : "Copyright © 2023 HDevs. All rights reserved."}
                    </p>
                </div>
            </div>
            <div class="ocean" id='footer-sea'>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
        </footer>
    )
};

export default FooterComponents;