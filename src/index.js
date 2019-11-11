import { homePage, homePageContent } from './home';
import { contactUS } from './contact';
import { ourMenu } from './menu';
import { aboutUs } from './about';

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

homePage();
homePageContent();

Array.from($$('.tab')).forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault;
        let btnName = el.className.replace('tab ', '');
        let main = $('main');
        console.log("good")

        switch (btnName) {
            case 'home':
                {
                    homePageContent();
                    main.id = "home";
                    break;
                }
            case 'about':
                {
                    aboutUs();
                    main.id = "about";
                    break;
                }
            case 'menu':
                {
                    ourMenu();
                    main.id = "menu";
                    break;
                }
            case 'contact':
                {
                    contactUS();
                    main.id = "contact";
                    break;
                }
        }


    })

});