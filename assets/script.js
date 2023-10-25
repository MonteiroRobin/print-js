// Ajoute un écouteur d'événement pour exécuter la fonction lorsque le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', function () {

	// Un tableau d'objets, chaque objet représentant une diapositive avec une image et une ligne d'étiquette
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

	// L'indice de la diapositive actuelle dans le carrousel
	let currentSlideIndex = 0;

	// Récupère les éléments du DOM et les stocke dans des constantes pour un accès facile
	const slidesContainer = document.querySelector("#banner .banner-img");
	const tagLineContainer = document.querySelector("#banner p");
	const dotsContainer = document.querySelector(".dots");
	const arrowLeft = document.querySelector(".arrow_left");
	const arrowRight = document.querySelector(".arrow_right");

	// Définit une fonction pour charger une diapositive dans le carrousel
	function loadSlide(index) {
		const slide = slidesData[index];
		slidesContainer.src = `./assets/images/slideshow/${slide.image}`;
		tagLineContainer.innerHTML = slide.tagLine;

		dotsContainer.querySelectorAll('.dot').forEach(dot => dot.classList.remove('dot_selected'));
		dotsContainer.children[index].classList.add('dot_selected');
	}

	// Crée des points pour chaque diapositive et ajoute un écouteur d'événement pour changer la diapositive lorsque le point est cliqué
	slidesData.forEach((slide, index) => {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		dot.addEventListener('click', function () {
			currentSlideIndex = index;
			loadSlide(currentSlideIndex);
		});
		dotsContainer.appendChild(dot);
	});

	// Ajoute des écouteurs d'événement pour changer la diapositive lorsque les flèches sont cliquées
	arrowLeft.addEventListener('click', function () {
		currentSlideIndex--;
		if (currentSlideIndex < 0) {
			currentSlideIndex = slidesData.length - 1;
		}
		loadSlide(currentSlideIndex);
	});

	arrowRight.addEventListener('click', function () {
		currentSlideIndex++;
		if (currentSlideIndex >= slidesData.length) {
			currentSlideIndex = 0;
		}
		loadSlide(currentSlideIndex);
	});

	// Charge la première diapositive au démarrage
	loadSlide(currentSlideIndex);
});
