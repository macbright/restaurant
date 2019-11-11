import { homePage, homePageContent } from "./home";
import { contactUS } from "./contact";
import { ourMenu } from "./menu";
import { aboutUs } from "./about";

// eslint-disable-next-line no-undef
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

homePage();
homePageContent();

// eslint-disable-next-line no-undef
Array.from($$(".tab")).forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault;
        const btnName = el.className.replace("tab ", "");
        const main = $("main");

        switch (btnName) {
            case "home":
                {
                    homePageContent();
                    main.id = "home";
                    break;
                }
            case "about":
                {
                    aboutUs();
                    main.id = "about";
                    break;
                }
            case "menu":
                {
                    ourMenu();
                    main.id = "menu";
                    break;
                }
            case "contact":
                {
                    contactUS();
                    main.id = "contact";
                    break;
                }
        }
    });
});