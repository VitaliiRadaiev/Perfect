let $viewedProducts = document.querySelector('.viewed-products');
if($viewedProducts) {

    let dataSlider = new Swiper($viewedProducts.querySelector('.viewed-products__slider'), {
        slidesPerView: 5,
        spaceBetween: 9,
        speed: 500,
        watchOverflow: true,
        navigation: {
            nextEl: $viewedProducts.querySelector('.viewed-products__btn-next'),
            prevEl: $viewedProducts.querySelector('.viewed-products__btn-prev'),
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 9,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 9,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 9,
            },
            1268: {
                slidesPerView: 5,
                spaceBetween: 9,
            },
        },
    });
}

let $cardsMini = [].slice.call(document.querySelectorAll('.card-mini'));
if($cardsMini.length) {
    let maxHeight = Math.max(...$cardsMini.map((item) => {
        let text = item.querySelector('.card-mini__text');
        return text.clientHeight;
    }))

    $cardsMini.forEach(item => {
        let text = item.querySelector('.card-mini__text');
        text.style.minHeight = maxHeight + 'px';
    });
    
}

