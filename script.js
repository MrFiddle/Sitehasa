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
minesImg.src = 'https://www.regiopoliductos.com/wp-content/uploads/2019/09/back6.jpg';
var urbanImg = new Image();
urbanImg.src = 'https://assets3.thrillist.com/v1/image/1891766/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70';
var waterImg = new Image();
waterImg.src = 'https://www.seapal.gob.mx/wp-content/uploads/2021/11/COMUNICADO-155-Seapal-4.jpg';
var cropImg = new Image();
cropImg.src = 'https://grupolosencinos.com/wp-content/uploads/2021/04/venta-de-plasticos-agricolas-acolchados-para-invernaderos.jpg';

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
    hero.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://www.regiopoliductos.com/wp-content/uploads/2019/09/back6.jpg)'
}

function toggleMineHero() {
    console.log("a")

    hero.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://www.regiopoliductos.com/wp-content/uploads/2019/09/back6.jpg)'

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

    hero.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://assets3.thrillist.com/v1/image/1891766/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70)'
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

    hero.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://www.seapal.gob.mx/wp-content/uploads/2021/11/COMUNICADO-155-Seapal-4.jpg)'

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
    
    hero.style.background = 'no-repeat linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://grupolosencinos.com/wp-content/uploads/2021/04/venta-de-plasticos-agricolas-acolchados-para-invernaderos.jpg)'

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