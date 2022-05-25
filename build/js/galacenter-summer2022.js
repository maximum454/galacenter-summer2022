$(function () {
    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({scrollTop: dn}, 1000);
    });

    $('.js-all-more').on('click', function (){
        $('.all-block__item').removeClass('hidden');
        $(this).addClass('d-none');
    })

    $('.js-slider-add').on('click', function (){
        $('.slider-block').removeClass('hidden');
        $(this).addClass('d-none');
    })

    $('.wrp').parent('.container').css({'max-width':'100%', 'padding':'0'});

    $('.js-category-more').on('click', function (){
        $('.supersubbota2022-category__body').removeClass('d-none')
    })
})

const swiperMainSummer2022 = new Swiper('.swiper-main-summer2022', {
    slidesPerView: 1,
    loop:false,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    autoplay: {
        delay: 500000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

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


