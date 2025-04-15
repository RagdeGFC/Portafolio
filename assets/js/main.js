import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateDateYear from './helpers/date_updater.js';
import changeLang from './helpers/language.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import darkModeHandler from './helpers/dark_theme.js';
import AboutCarousel from './components/carousel.js'; // Importar la clase AboutCarousel

loader();
resetToHome();
activeMenu();
parallax();
updateDateYear();
sendEmail();
changeLang();
darkModeHandler();

const aboutCarousels = document.querySelectorAll(
	'.about__carousel-container, .projects__carousel-container',
);
aboutCarousels.forEach((carouselContainer) => {
	new AboutCarousel(carouselContainer);
});
