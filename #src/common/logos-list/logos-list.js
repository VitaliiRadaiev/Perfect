{
	const sliders = document.querySelectorAll('.logos-list');
	if(sliders.length) {
		sliders.forEach(slider => {
			if(slider) {
				let mySwiper;
		
				function mobileSlider() {
					if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
						mySwiper = new Swiper(slider, {
							autoplay: {
								delay: 3000,
								disableOnInteraction: false,
							},
							slidesPerView: 3,
							speed: 600,
							pagination: {
								el: slider.querySelector('.swiper-pagination'),
								clickable: true,
							  },
						});
		
						slider.dataset.mobile = 'true';
		
						//mySwiper.slideNext(0);
					}
		
					if(document.documentElement.clientWidth > 767) {
						slider.dataset.mobile = 'false';
		
						if(slider.classList.contains('swiper-container-initialized')) {
							mySwiper.destroy();
						}
					}
				}
		
				mobileSlider();
		
				window.addEventListener('resize', () => {
					mobileSlider();
				})
			}
		})
	}

}