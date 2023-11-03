const hamburger = document.querySelector('.material-symbols-outlined');
const navlist = document.querySelector('.navbar-links--container');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('.show');
});