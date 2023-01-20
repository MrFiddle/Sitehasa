const nav = document.querySelector('nav');
const navIcon = document.querySelector('.navDotMenu')
const mobileMenu = document.querySelector('.mobile__menu');

navIcon.addEventListener('click', toggleNav);

function toggleNav() {
    if (mobileMenu.style.display == 'flex') {
        mobileMenu.style.display = 'none';
        console.log(vh)
    } else {
        mobileMenu.style.display = 'flex';
    }
}