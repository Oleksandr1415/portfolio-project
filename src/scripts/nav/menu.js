const menuButton = document.querySelector('[data-slot="toggle-nav-menu"]');
const menuBackground = document.querySelector('[data-slot="nav-menu-background"]');
const openMenu = document.getElementById('nav-menu-burger-icon');
const closeMenu = document.getElementById('nav-menu-close-icon');
const navMenu = document.getElementById('navigation-planet');
const navMenuItems = document.querySelectorAll('[data-slot="menu-item"');

menuButton?.addEventListener('click', toggleMenu);
menuBackground.addEventListener('click', toggleMenu);
navMenuItems.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});

function toggleMenu() {
  openMenu.classList.toggle('opacity-0');
  closeMenu.classList.toggle('opacity-0');
  closeMenu.classList.toggle('rotate-90');
  navMenu.classList.toggle('translate-y-[-70%]');
  menuBackground.classList.toggle('-translate-y-full');
}
