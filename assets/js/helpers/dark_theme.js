export default function darkModeHandler() {
	const body = document.body;
	const toggle = document.getElementById('darkmode-toggle');

	// 1. Aplica el tema guardado al cargar
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme === 'dark') {
		body.classList.add('dark-theme');
		toggle.checked = true;
	} else {
		body.classList.remove('dark-theme');
		toggle.checked = false;
	}

	// 2. Cambia el tema al hacer click en el toggle
	toggle.addEventListener('change', () => {
		if (toggle.checked) {
			body.classList.add('dark-theme');
			localStorage.setItem('theme', 'dark');
		} else {
			body.classList.remove('dark-theme');
			localStorage.setItem('theme', 'light');
		}
	});
}
