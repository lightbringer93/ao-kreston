// Imports
import Alpine from 'alpinejs';
import form from './form';
import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
import Swiper, { Navigation, Pagination } from 'swiper';

// Initiate AlpineJs
window.Alpine = Alpine;
Alpine.start();

// Scroll functions
window.addEventListener('scroll', function() {
    stickyHeader();
    hideHeader();
    toggleScrollTopButton();
});

// Header
const $header = document.getElementById('header');
let headerHeight = $header.offsetHeight;
let scrollPos = window.scrollY;
let lastScroll = 0;
const scrollUpClass = 'header-up';
const scrollDownClass = 'header-down';
const stickyClass = 'header-sticky';

function stickyHeader() {
    scrollPos = window.scrollY;
    if (scrollPos >= headerHeight) {
        $header.classList.add(stickyClass);
    }
    else {
        $header.classList.remove(stickyClass);
    }
}

function hideHeader() {
    let currentScroll = window.pageYOffset;
    if (currentScroll == 0) {
        $header.classList.remove(scrollUpClass);
        return;
    }
    if (currentScroll > lastScroll && !$header.classList.contains(scrollDownClass) && currentScroll > 670) {
        // down
        $header.classList.remove(scrollUpClass);
        $header.classList.add(scrollDownClass);
    } else if (currentScroll < lastScroll && $header.classList.contains(scrollDownClass)) {
        // up
        $header.classList.remove(scrollDownClass);
        $header.classList.add(scrollUpClass);
    }
    lastScroll = currentScroll;
}

// Scroll to top
const $scrollUp = document.querySelector('.scroll-up');
const scrollShowClass = 'scroll-show';

function toggleScrollTopButton() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        $scrollUp.classList.add(scrollShowClass);
    } else {
        $scrollUp.classList.remove(scrollShowClass);
    }
}

$scrollUp.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top:0, left:0, behavior: 'smooth'});
});
