class AboutCarousel {
	constructor(carouselContainer) {
		this.carouselContainer = carouselContainer;
		this.carousel = carouselContainer.querySelector(
			'.about__carousel, .projects__carousel',
		);
		this.slides = carouselContainer.querySelectorAll(
			'.about__carousel-slide, .projects__carousel-slide',
		);
		this.prevButton = carouselContainer.querySelector(
			'.about__carousel-prev, .projects__carousel-prev',
		);
		this.nextButton = carouselContainer.querySelector(
			'.about__carousel-next, .projects__carousel-next',
		);
		this.currentIndex = 0;
		this.init();
	}

	init() {
		if (this.prevButton) {
			this.nextButton.addEventListener('click', () => this.next());
			this.prevButton.addEventListener('click', () => this.prev());
		}
	}

	next() {
		this.currentIndex = (this.currentIndex + 1) % this.slides.length;
		this.updateCarousel();
	}

	prev() {
		this.currentIndex =
			(this.currentIndex - 1 + this.slides.length) % this.slides.length;
		this.updateCarousel();
	}

	updateCarousel() {
		const translateValue = -this.currentIndex * 100;
		this.carousel.style.transform = `translateX(${translateValue}%)`;
	}
}

export default AboutCarousel;
