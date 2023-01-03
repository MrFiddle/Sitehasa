const hero = document.querySelector('.hero');

const minesHero = document.querySelector('.heroMine');
const urbanHero = document.querySelector('.heroUrban');
const waterHero = document.querySelector('.heroWater');
const cropHero = document.querySelector('.heroCrop');

const mineDot = document.querySelector('.dot__mine');
const urbanDot = document.querySelector('.dot__urban');
const waterDot = document.querySelector('.dot__water');
const cropDot = document.querySelector('.dot__crop');

const nav = document.querySelector('nav');
const navIcon = document.querySelector('.navDotMenu')
const navLogo = document.querySelector('.navLogo span');
const mobileMenu = document.querySelector('.mobile__menu');

var minesImg = new Image();
minesImg.src = './assets/images/mines_hero.webp';
var urbanImg = new Image();
urbanImg.src = './assets/images/urban_hero.webp';
var waterImg = new Image();
waterImg.src = './assets/images/water_hero.webp';
var cropImg = new Image();
cropImg.src = './assets/images/crop_hero.webp';

heroHeight = hero.clientHeight;
navHeight = nav.clientHeight;

window.onscroll = () => {
    if (window.scrollY > heroHeight - (navHeight)) {
        nav.classList.add('nav__scrolled');
        navIcon.classList.add('nav__scrolledIcon');
        navLogo.style.color = 'black';

        document.querySelectorAll('.menu__item a').forEach(a => {
            a.style.color = '#373981';
        })

    } else {
        nav.classList.remove('nav__scrolled');
        navIcon.classList.remove('nav__scrolledIcon');
        navLogo.style.color = 'white';

        document.querySelectorAll('.menu__item a').forEach(a => {
            a.style.color = '#ffffff';
        })

    }
}

mineDot.addEventListener('click', toggleMineHero);
urbanDot.addEventListener('click', toggleUrbanHero);
waterDot.addEventListener('click', toggleWaterHero);
cropDot.addEventListener('click', toggleCropHero);
navIcon.addEventListener('click', toggleNav);

// startup();

function startup() {
    minesHero.style.display = 'flex';
}

function toggleMineHero() {
    console.log("a")
    hero.style.backgroundImage = 'url(./assets/images/mines_hero.webp)';

    minesHero.style.display = 'flex';
    urbanHero.style.display = 'none';
    waterHero.style.display = 'none';
    cropHero.style.display = 'none';

    mineDot.classList.add('dot__active');
    urbanDot.classList.remove('dot__active');
    waterDot.classList.remove('dot__active');
    cropDot.classList.remove('dot__active');

}

function toggleUrbanHero() {
    hero.style.backgroundImage = 'url(./assets/images/urban_hero.webp)'
    console.log(hero.style.backgroundImage)

    minesHero.style.display = 'none';
    urbanHero.style.display = 'flex';
    waterHero.style.display = 'none';
    cropHero.style.display = 'none';

    mineDot.classList.remove('dot__active');
    urbanDot.classList.add('dot__active');
    waterDot.classList.remove('dot__active');
    cropDot.classList.remove('dot__active');
}

function toggleWaterHero() {
    hero.style.backgroundImage = 'url(./assets/images/water_hero.webp)';

    minesHero.style.display = 'none';
    urbanHero.style.display = 'none';
    waterHero.style.display = 'flex';
    cropHero.style.display = 'none';

    mineDot.classList.remove('dot__active');
    urbanDot.classList.remove('dot__active');
    waterDot.classList.add('dot__active');
    cropDot.classList.remove('dot__active');

}

function toggleCropHero() {
    hero.style.backgroundImage = 'url(./assets/images/crop_hero.webp)';

    minesHero.style.display = 'none';
    urbanHero.style.display = 'none';
    waterHero.style.display = 'none';
    cropHero.style.display = 'flex';

    mineDot.classList.remove('dot__active');
    urbanDot.classList.remove('dot__active');
    waterDot.classList.remove('dot__active');
    cropDot.classList.add('dot__active');

}

function toggleNav() {
    if (mobileMenu.style.display == 'flex') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'flex';
    }
}