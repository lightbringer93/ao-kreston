import Alpine from 'alpinejs'
import form from './form';
import accordion from './accordion';
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'
import {Swiper, Autoplay, Navigation, EffectFade} from 'swiper';
import {jarallax} from "jarallax";
import Aos from "aos";
import {Fancybox} from "@fancyapps/ui";

document.addEventListener('DOMContentLoaded', () => {

    window.Alpine = Alpine
    Alpine.plugin(collapse);
    Alpine.plugin(focus);
    Alpine.data('form', form);
    Alpine.data('accordion', accordion);
    Alpine.store('globals', {
        openModal: false,
    });
    Alpine.start()

    Swiper.use([Autoplay, Navigation, EffectFade]);

    Aos.init({
        disable: "mobile"
    });

    const elements = {
        collectionChildren: document.querySelectorAll('.collection-children'),
        eventForm: document.querySelector('.event-form'),
        counters: document.querySelectorAll('[data-count-to]'),
        parallax: document.querySelectorAll('.jarallax'),
        sliderLoading: document.querySelector('.slider-loading'),
        animatedElements: document.querySelectorAll('[data-animate]'),
        cta: document.querySelector('.cta'),
    };

    // CTA
    setTimeout(function () {
        elements.cta.style.opacity = "1";
    }, 3000);

    // Parallax
    jarallax(elements.parallax, {
        speed: 0.2,
    });

    // Swiper Slider
    const swiper = new Swiper('.swiper', {
        loop: true,
        speed: 700,
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                elements.sliderLoading.classList.add('hidden');
            },
        }
    });

    for (const child of elements.collectionChildren) {
        const mainLink = child.querySelector('a:first-child'),
            firstLink = child.querySelector('.submenu a:first-child');
        if (firstLink && mainLink) mainLink.setAttribute('href', firstLink.getAttribute('href'));
    }

    document.addEventListener('scroll', () => {
        for (const counter of elements.counters) {
            if (isInViewport(counter)) {
                const counted = counter.getAttribute('data-counted');
                if (counted) continue;
                startCounter(counter);
                counter.setAttribute('data-counted', 'true');
            }
        }

        for (const element of elements.animatedElements) {
            const animated = element.getAttribute('data-animated');
            if (isInViewport(element) && !animated) {
                animateCSS(element, element.getAttribute('data-animate'));
                element.setAttribute('data-animated', 'true');
            }
        }
    });

    if (elements.eventForm) {
        const dates = elements.eventForm.querySelectorAll('.event-date'),
            select = elements.eventForm.querySelector('.date-select select');
            // eventInput = elements.eventForm.querySelector('#event'),
            // eventName = elements.eventForm.querySelector('.event-name');

        // eventInput.value = eventName.getAttribute('data-event-name');

        for (const date of dates) {
            const option = document.createElement('option');
            option.value = date.getAttribute('data-key');
            option.text = date.getAttribute('data-value');
            select.appendChild(option);
        }
    }

    function startCounter(counter) {
        const animate = () => {
            const value = +counter.getAttribute('data-count-to'),
                data = +counter.innerText,
                counterSpeed = 200;

            const time = value / counterSpeed;

            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        }

        animate();
    }

    function isInViewport(element) {
        if (typeof jQuery === "function" && element instanceof jQuery) {
            element = element[0];
        }

        const rect = element.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        );
    }

    const animateCSS = (element, animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = element;

            node.classList.add(`${prefix}animated`, animationName);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });

});





