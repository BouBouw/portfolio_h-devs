const Langs = () => {
    let lang = localStorage.getItem('lang');

    switch(lang) {
        default: 
            console.log('default');
            break;

        case 'FR_fr':
            // window.location.replace("http://localhost:3000/fr/");
            break;

        case 'US_us':
            // window.location.replace("http://localhost:3000/us/");
            break;
    }
}

export default Langs;