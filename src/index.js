import { homePage, homePageContent } from './home';
import { contactUS } from './contact';
import { ourMenu } from './menu';
import { aboutUs } from './about';

// eslint-disable-next-line no-undef
const $ = document.querySelector.bind(document);
// eslint-disable-next-line no-undef
const $$ = document.querySelectorAll.bind(document);

homePage();
homePageContent();

// eslint-disable-next-line no-undef
Array.from($$('.tab')).forEach(el => { /* eslint-disable-line arrow-parens */
	el.addEventListener('click', e => {	/* eslint-disable-line arrow-parens */
		e.preventDefault;	/* eslint-disable-line no-unused-expressions */
		const btnName = el.className.replace('tab ', '');	/* eslint-disable-line no-trailing-spaces */
		// eslint-disable-next-line no-undef
		const main = $('main');

		switch (btnName) { /* eslint-disable-line default-case */
			case 'home':
				homePageContent();
				main.id = 'home';
				break;
			case 'about':
				aboutUs();
				main.id = 'about';
				break;
			case 'menu':
				ourMenu();
				main.id = 'menu';
				break;
			case 'contact':
				contactUS();
				main.id = 'contact';
				break;
		}
	});
});
