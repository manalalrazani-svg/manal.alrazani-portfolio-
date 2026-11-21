const langToggle = document.getElementById('langToggle');
let currentLang = 'en';
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.documentElement.lang = currentLang;
  document.body.classList.toggle('rtl', currentLang === 'ar');
  document.querySelectorAll('[data-en][data-ar]').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
  langToggle.textContent = currentLang === 'en' ? 'عربي' : 'EN';
});
const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});
const mobileMenu = document.getElementById('mobileMenu');
const nav = document.querySelector('.desktop-nav');
mobileMenu.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
