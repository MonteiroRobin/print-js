document.addEventListener('DOMContentLoaded', function () {
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

	let currentSlideIndex = 0;
	const slidesContainer = document.querySelector("#banner .banner-img");
	const tagLineContainer = document.querySelector("#banner p");
	const dotsContainer = document.querySelector(".dots");
	const arrowLeft = document.querySelector(".arrow_left");
	const arrowRight = document.querySelector(".arrow_right");

	function loadSlide(index) {
		const slide = slidesData[index];
		slidesContainer.src = `./assets/images/slideshow/${slide.image}`;
		tagLineContainer.innerHTML = slide.tagLine;


		dotsContainer.querySelectorAll('.dot').forEach(dot => dot.classList.remove('dot_selected'));
		dotsContainer.children[index].classList.add('dot_selected');
	}


	slidesData.forEach((slide, index) => {
		const dot = document.createElement('span');
		dot.classList.add('dot');  // ajout de la classe
		dot.addEventListener('click', function () {
			currentSlideIndex = index;
			loadSlide(currentSlideIndex);
		});
		dotsContainer.appendChild(dot);
	});

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


	loadSlide(currentSlideIndex);
});
