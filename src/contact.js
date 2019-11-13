// eslint-disable-next-line no-undef
const $ = document.querySelector.bind(document);

const contactUS = () => {
	// eslint-disable-next-line no-undef
	let child = document.createElement('main')
	// eslint-disable-next-line no-undef
	child.classList.add('container')
	$('#content').appendChild(child)
	child.innerHTML = `
	<section id="contact" class="contact-content">
			
		<h1 class="heading1">Contact Us</h1>
		<div class=" row contact-info">
			<div class="col-md-4">
				<h5> no 5 cresent avenue</h5>
				<p>Abuja, Nigeria</p>
				<h5>+234908435848</h5>
				<p>Every day 9am to 10pm</p>
				<h6 class="email">support@macbrite.com</h6>
				<p>Send us your query anytime!</p>
			</div>
			
			<div class="contact-form col-md-6">
				<form action="#" class="form">
					<input type="text" class="form-control" placeholder="Enter your name" required>
					<input type="email" class="form-control" placeholder="Enter email address" required>
					<input type="text" class="form-control" placeholder="Enter your subject" required>
					<textarea class="form-control" placeholder="Enter Message" required>
							</textarea>
					
					<button type="submit" class="">
							Submit
					</button>
				</form>
			</div>
		</div>
	</section>
			
	`;
};

export { contactUS }; /* eslint-disable-line import/prefer-default-export */