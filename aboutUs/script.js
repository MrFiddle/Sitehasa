const nav = document.querySelector('nav');
const navIcon = document.querySelector('.navDotMenu')
const mobileMenu = document.querySelector('.mobile__menu');

const mainContent = document.querySelector('.main__content');

const fSlide__number = document.querySelector('#number__fSlide');

fSlide__number.innerHTML = (new Date().getFullYear() - 1994);

// toggle mobile menu

navIcon.addEventListener('click', toggleNav);

function toggleNav() {
    if (mobileMenu.style.display == 'flex') {
        mobileMenu.style.display = 'none';
        console.log(vh)
    } else {
        mobileMenu.style.display = 'flex';
    }
}

let mainContentPosition = document.querySelector('.main__content').getBoundingClientRect().top;

// get the viewport height

let vh = window.innerHeight * 2;

window.onscroll = () => {
    if (window.scrollY >= vh) {
        document.querySelector('html').style.scrollSnapType = 'none';
    }
}