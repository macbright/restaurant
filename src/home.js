// eslint-disable-next-line no-undef
const $ = document.querySelector.bind(document);

const homePage = () => {
	// eslint-disable-next-line no-undef
	$('#content').innerHTML = ` 
		<header class="container">
			<div class="heading"> Macbrite Restaurant</div>
			<div class="tab home"> Home</div>
			<div class="tab about"> About Us</div>
			<div class="tab menu"> Menu</div>
			<div class="tab contact"> Contact Us</div>
		</header>
		<main id="home", class="container"></main>
			
	`;
};

const homePageContent = () => {
	// eslint-disable-next-line no-undef
	$('main').innerHTML = `
		<div class="home-content"> 
			<h1 class="home-h1"> come eat with us @ Macbrite Restaurant </h1>
			<h4 class="home-h4"> It's never too early to book your Holiday Party! 
			Come on <br> in or give us a call to reserve yours today! </h4>
		</div>
	`;
};

export { homePage, homePageContent }; /* eslint-disable-line import/prefer-default-export */