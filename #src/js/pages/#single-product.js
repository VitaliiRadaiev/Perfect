let productSlider = document.querySelectorAll('.single-product__gallery');
if(productSlider.length) {
    productSlider.forEach(slider => {
        let dataSlider;
        let dataSliderThumb;
        let gallery = slider.querySelector('.single-product__gallery-slider');
        let thumbs = slider.querySelector('.single-product__gallery-thumbs');
        let length = thumbs.querySelector('.swiper-wrapper').children.length;
        
        if(length > 4) {
            thumbs.classList.add('_show-arrows');
            slider.classList.add('_show-arrows');
        }

        dataSliderThumb = new Swiper(thumbs, {
            spaceBetween: 15,
            slidesPerView: 'auto',
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            touchRatio: length > 4 ? 1 : 0,
        });

        dataSlider = new Swiper(gallery, {
            spaceBetween: 10,
            loop: true,
            thumbs: {
            swiper: dataSliderThumb,
            },
            navigation: {
                nextEl: slider.querySelector('.single-product__gallery-btn-next'),
                prevEl: slider.querySelector('.single-product__gallery-btn-prev'),
            },
        });
    })
}