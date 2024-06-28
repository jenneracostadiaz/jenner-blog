document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('#main-header');
	const nav = document.querySelector('nav');
	const headerHeight = header.offsetHeight;
	const navHeight = nav.offsetHeight;

	window.addEventListener('scroll', () => {
		if (window.scrollY > headerHeight) {
			nav.classList.add('fixed');
			document.body.style.paddingTop = `${navHeight}px`;
		} else {
			nav.classList.remove('fixed');
			document.body.style.paddingTop = 0;
		}
	});

	const hamburger = document.querySelector('.hamburger');
	const navLinks = document.querySelector('#mobil-nav');

	hamburger.addEventListener('click', () => {
		navLinks.classList.toggle('mobil-nav--open');
		hamburger.classList.toggle('hamburger--open');
	});
});
