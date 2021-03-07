import './main.sass';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Mousewheel]);

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2,
    spaceBetween: 20,
    mousewheel: true,
});