{
	const slider = document.querySelector('.instagram__images');
	if(slider) {
		let mySwiper;

		function mobileSlider() {
			if(document.documentElement.clientWidth >= 768 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider, {
					slidesPerView: 'auto',
					speed: 800,
                    loop: true,
                    freeMode: true,
                    autoplay: {
                        delay: 6000,
                        disableOnInteraction: false,
                    },
				});

				slider.dataset.mobile = 'true';
			}

			if(document.documentElement.clientWidth < 768) {
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

}