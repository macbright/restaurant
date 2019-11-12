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
	el.addEventListener('click', e => { /* eslint-disable-line arrow-parens */
		e.preventDefault; /* eslint-disable-line no-unused-expressions */
		const btnName = el.className.replace('tab ', ''); 
		// eslint-disable-next-line no-undef
		const main = $('main');

		switch (btnName) { /* eslint-disable-line default-case */
			case 'home': /* eslint-disable-line indent*/
				{ /* eslint-disable-line indent*/
				homePageContent(); /* eslint-disable-line indent*/
				main.id = 'home'; /* eslint-disable-line indent*/
				break; /* eslint-disable-line indent*/
				} /* eslint-disable-line indent*/
			case 'about': /* eslint-disable-line indent*/
				{ /* eslint-disable-line indent*/
				aboutUs();
				main.id = 'about'; /* eslint-disable-line indent*/
				break; /* eslint-disable-line indent*/
				} /* eslint-disable-line indent*/
			case 'menu': /* eslint-disable-line indent*/
				{ /* eslint-disable-line indent*/
				ourMenu(); /* eslint-disable-line indent*/
				main.id = 'menu'; /* eslint-disable-line indent*/
				break; /* eslint-disable-line indent*/
				} /* eslint-disable-line indent*/
			case 'contact': /* eslint-disable-line indent*/
				{ /* eslint-disable-line indent*/
				contactUS(); /* eslint-disable-line indent*/
				main.id = 'contact'; /* eslint-disable-line indent*/
				break; /* eslint-disable-line indent*/
				} /* eslint-disable-line indent*/
		} /* eslint-disable-line indent*/
	});
});
