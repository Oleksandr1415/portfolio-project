document.querySelectorAll('[data-slot="card"]').forEach((card) => {
  const chevron = card.querySelector('[data-slot="chevron"]');
  const badgesSection = card.querySelector('[data-slot="card-badges-section"]');

  card.addEventListener('click', () => {
    chevron.classList.toggle('rotate-180');
    badgesSection.classList.toggle('grid-rows-[0fr]');
    badgesSection.classList.toggle('grid-rows-[1fr]');
    badgesSection.classList.toggle('border-t');
  });
});
