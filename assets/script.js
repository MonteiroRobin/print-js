// écouteur d'événement pour exécuter la fonction lorsque le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', function () {

	// tableau d'objets
	const slidesData = [
		{
			"image": "slide1.jpg",
			"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image": "slide2.jpg",
			"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image": "slide3.jpg",
			"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image": "slide4.png",
			"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
		}
	];

	// Index sur, pour afficher la première image
	let currentSlideIndex = 0;

	// Pour récuperer et stockez les éléments du DOM
	const slidesContainer = document.querySelector("#banner .banner-img");
	const tagLineContainer = document.querySelector("#banner p");
	const dotsContainer = document.querySelector(".dots");
	const arrowLeft = document.querySelector(".arrow_left");
	const arrowRight = document.querySelector(".arrow_right");

	// fonction pour charger image dans le carrousel
	function loadSlide(index) {
		const slide = slidesData[index];
		slidesContainer.src = `./assets/images/slideshow/${slide.image}`;
		tagLineContainer.innerHTML = slide.tagLine;

		dotsContainer.querySelectorAll('.dot').forEach(dot => dot.classList.remove('dot_selected'));
		dotsContainer.children[index].classList.add('dot_selected');
	}

	// Crée des points et ajoute un écouteur d'événement pour changer l'image lorsque le point est cliqué
	slidesData.forEach((slide, index) => {
		const dot = document.createElement('span');
		dot.classList.add('dot'); //permet d'ajouter la classe dot , pour pouvoir appliquer le css
		dot.addEventListener('click', function () {
			currentSlideIndex = index;
			loadSlide(currentSlideIndex);
		});
		dotsContainer.appendChild(dot);
	});


	// Ajoute des écouteurs d'événement pour changer l'image lorsque les flèches sont cliquées
	arrowLeft.addEventListener('click', function () {

		//permet de passer à l'image précédente
		currentSlideIndex--;

		// vérifie si l'index de l'image est inférieur à 0
		if (currentSlideIndex < 0) {
			currentSlideIndex = slidesData.length - 1;
		}
		loadSlide(currentSlideIndex);
	});

	arrowRight.addEventListener('click', function () {
		//image suivant
		currentSlideIndex++;

		//vérifie si l'index à dépassé le nombre total d'image
		if (currentSlideIndex >= slidesData.length) {

			//si oui remt l'index à 0
			currentSlideIndex = 0;
		}
		loadSlide(currentSlideIndex);
	});

	// Charge la première image au démarrage
	loadSlide(currentSlideIndex);
});
