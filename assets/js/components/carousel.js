class AboutCarousel {
	constructor(carouselContainer) {
		this.carouselContainer = carouselContainer;
		this.carousel = carouselContainer.querySelector(
			'.about__carousel, .projects__carousel, .home__profile-carousel',
		);
		this.slides = carouselContainer.querySelectorAll(
			'.about__carousel-slide, .projects__carousel-slide, .home__carousel-slide',
		);
		this.prevButton = carouselContainer.querySelector(
			'.about__carousel-prev, .projects__carousel-prev, .home__carousel-prev',
		);
		this.nextButton = carouselContainer.querySelector(
			'.about__carousel-next, .projects__carousel-next, .home__carousel-next',
		);
		this.currentIndex = 0;
		this.autoPlayInterval = null;
		this.isHomeCarousel = carouselContainer.classList.contains(
			'home__carousel-container',
		);
		this.init();
	}

	init() {
		if (this.prevButton) {
			this.nextButton.addEventListener('click', () => this.next());
			this.prevButton.addEventListener('click', () => this.prev());
		}
		if (this.isHomeCarousel) {
			this.startAutoPlay();
		}
	}

	startAutoPlay() {
		this.autoPlayInterval = setInterval(() => {
			this.next();
		}, 3000); // Cambia cada 1 segundo
	}

	stopAutoPlay() {
		if (this.autoPlayInterval) {
			clearInterval(this.autoPlayInterval);
			this.autoPlayInterval = null;
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
