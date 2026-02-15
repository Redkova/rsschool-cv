const burger = document.querySelector('.burger');
const navList = document.querySelector('.navigation-list');
const navLinks = document.querySelectorAll('.navigation-list a');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.toggle('active');
        navList.classList.remove('active');
        burger.classList.remove('active');
    });
});