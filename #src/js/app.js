let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));


window.addEventListener('load', function () {
	
	document.body.classList.add('is-load');

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._margin-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if(!header.classList.contains('._is-scroll')) {
				const setPedding = () => {
					if(document.documentElement.clientWidth < 992) {
						wrapper.style.marginTop = header.clientHeight - 1 + 'px';
					}
				} 
				setPedding();
				window.addEventListener('resize', () => {
					if(!header.classList.contains('._is-scroll')) {
						setPedding();
					}
				});
			}
			
		}
	}
	// ==== AND ADD PADDING-TOP ================================

	@@include('_function.js');
	@@include('files/dynamic_adapt.js');
	@@include('forms.js');
	@@include('../common/burger/burger.js');
	@@include('../common/checkbox/checkbox.js');
	@@include('../common/popup/popup.js');
	@@include('../common/header/header.js');
	@@include('../common/instagram/instagram.js');
	@@include('../common/viewed-products/viewed-products.js');
	@@include('../common/price-slider/price-slider.js');
	@@include('../common/filter/filter.js');
	@@include('../common/catalog/catalog.js');
	@@include('../common/logos-list/logos-list.js');
	@@include('../common/quantity/quantity.js');
	
	
	
	@@include('pages/#single-product.js');
	@@include('pages/#service.js');
	@@include('pages/#order.js');
	@@include('pages/#blog-detail.js');
	@@include('pages/#cabinet.js');

	createTabs('.tabs', '.tab-trigger', '.tab-content')
	
});

window.addEventListener('DOMContentLoaded', function() {
	if(isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}


	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
});

//@@include('plagins/lazy-load.js');
@@include('../common/address-block/address-block.js');

