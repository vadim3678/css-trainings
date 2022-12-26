const mToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

mToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
