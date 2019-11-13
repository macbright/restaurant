// eslint-disable-next-line no-undef
const $ = document.querySelector.bind(document);

const ourMenu = () => {
	// eslint-disable-next-line no-undef
	let child = document.createElement('main')
	child.classList.add('container')
	// eslint-disable-next-line no-undef
	$('#content').appendChild(child)
	child.innerHTML = `
		<div class="row foodMenu">
			<div class="col-md-3 meal">
				<div class="meal-img">
					<img src="https://www.guiadasemana.com.br/contentFiles/image/2017/11/FEA/galeria/50998_w840h525_1510324750pizza-em-fatias.jpg" alt="lunch meal">
				</div>
				<div class="meal-des">
					<p> Grilled Salmon <span> $25.00</span> </p>
					<p> Brown sugar dijon glaze, roasted butternut & cranberry farro, sautéed spinach & kale  </p>
				</div>
			</div>
			<div class="col-md-4 meal">
				<div class="meal-img">
					<img src="https://www.guiadasemana.com.br/contentFiles/image/2019/10/FEA/galeria/64482_w840h525_1572032807-t2a3592-crop.jpg" alt="lunch meal">
				</div>
				<div class="meal-des">
					<p> Sautéed Cod <span> $26.00</span> </p>
					<p> steamed clams in a spicy tomato broth, parmesan risotto, sautéed spinach, roasted garlic aioli  </p>
				</div>
			</div>
			<div class="col-md-3 meal">
				<div class="meal-img">
					<img src="https://www.guiadasemana.com.br/contentFiles/image/2019/10/FEA/galeria/64445_w840h525_1571313790baiao-de-dois.jpg" alt="lunch meal">
				</div>
				<div class="meal-des">
					<p> Penne <span> $19.00</span> </p>
					<p> Sausage, white beans, broccoli, diced plum tomatoes, garlic, parmesan, red pepper flakes </p>
				</div>
			</div>
			<div class="col-md-3 meal">
				<div class="meal-img">
					<img src="https://www.guiadasemana.com.br/contentFiles/image/2019/10/FEA/galeria/64445_w840h525_1571346510shutterstock-1111930097.jpg" alt="lunch meal">
				</div>
				<div class="meal-des">
					<p> Mascarpone & Spinach Ravioli <span> $19.00</span> </p>
					<p> Rroasted butternut, dried cranberries, spinach, sherry cream sauce
					With chicken 22 | With shrimp 24  </p>
				</div>
			</div>
			<div class="col-md-4 meal">
				<div class="meal-img">
					<img src="https://www.guiadasemana.com.br/contentFiles/image/2019/10/FEA/galeria/64445_w840h525_1571315221shutterstock-340505432.jpg" alt="lunch meal">
				</div>
				<div class="meal-des">
					<p> Sautéed Cod <span> $26.00</span> </p>
					<p> steamed clams in a spicy tomato broth, parmesan risotto, sautéed spinach, roasted garlic aioli  </p>
				</div>
			</div>
			<div class="col-md-3 meal">
				<div class="meal-img">
					<img src="https://www.guiadasemana.com.br/contentFiles/image/2019/10/FEA/galeria/64445_w840h525_1571314484acrajealta.jpg" alt="lunch meal">
				</div>
				<div class="meal-des">
					<p> Inside Out Chicken Cordon Bleu<span> $24.00</span> </p>
					<p> Topped with black forest ham & mozzarella cheese served with mashed potatoes, sautéed spinach, creamy dijon sauce     </p>
				</div>
			</div>
		</div>
	`;
};

export { ourMenu }; /* eslint-disable-line import/prefer-default-export */
