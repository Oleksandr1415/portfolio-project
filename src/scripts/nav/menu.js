const menuButton = document.querySelector('[data-slot="nav-menu-toggle"]');
const menuBackground = document.querySelector('[data-slot="nav-menu-close-background"]');
const openMenu = document.getElementById('nav-menu-burger-icon');
const closeMenu = document.getElementById('nav-menu-close-icon');
const navMenu = document.getElementById('nav-menu-background-planet');
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

  const isOpen = navMenu.classList.contains('translate-y-[-70%]');
  menuButton?.setAttribute('aria-expanded', String(isOpen));
  menuButton?.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}
