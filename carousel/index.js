const btnPrevEl = document.getElementById("btn-prev");
const btnNextEl = document.getElementById("btn-next");
const slideEls = document.querySelectorAll(".slide");

let currentSlide = 0;
const numberOfSlides = slideEls.length;

slideEls.forEach((slide, index) => {
	slide.style.transform = `translateX(${100 * index}%)`;
});

function prevClick() {
	if (currentSlide === 0) {
		currentSlide = numberOfSlides - 1;
	} else {
		currentSlide = currentSlide - 1;
	}

	slideEls.forEach((slide, index) => {
		slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
	});
}

function nextClick() {
	if (currentSlide === numberOfSlides - 1) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}
	slideEls.forEach((slide, index) => {
		slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
	});
}

btnPrevEl.addEventListener("click", prevClick);
btnNextEl.addEventListener("click", nextClick);
