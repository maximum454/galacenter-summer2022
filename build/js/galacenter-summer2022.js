const swiperPopularySummer2022 = new Swiper('.swiper-populary-summer2022', {
    slidesPerView: 5,
    spaceBetween:50,
    loop:false,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween:30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween:30,
        },
        900: {
            slidesPerView: 4,
            spaceBetween:40,
        },
        1024: {
            slidesPerView: 5,
        }
    }


});

const swiperBrandSummer2022 = new Swiper('.swiper-brand-summer2022', {
    slidesPerView: 4,
    spaceBetween:67,
    loop:false,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween:30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween:30,
        },
        900: {
            slidesPerView: 3,
            spaceBetween:40,
        },
        1024: {
            slidesPerView: 4,
        }
    }


});


