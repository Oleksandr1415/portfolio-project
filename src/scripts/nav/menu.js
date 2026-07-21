const menuButton = document.querySelector('[data-slot="toggleMenu"]');
const openMenu = document.getElementById("nav-menu-burger-icon");
const closeMenu = document.getElementById("nav-menu-close-icon");

menuButton?.addEventListener("click", () => {
	openMenu.classList.toggle("opacity-0");
	closeMenu.classList.toggle("opacity-0");
});
