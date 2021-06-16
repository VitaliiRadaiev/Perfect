// === Burger Handler =====================================================================
	function burgerBtnAnimation(e) {
		$('.burger span:nth-child(1)').toggleClass('first');
		$('.burger span:nth-child(2)').toggleClass('second');
		$('.burger span:nth-child(3)').toggleClass('third');
		$('.burger span:nth-child(4)').toggleClass('fourth');
		let classNameElem = document.querySelector('.burger').dataset.activel;
		let menu = document.querySelector(`.${classNameElem}`);
		menu.classList.toggle('open');
		document.body.classList.toggle('lock');

		let header = document.querySelector('.header');
		menu.style.paddingTop = header.clientHeight + 'px';

	}
	$('.burger').click((e) => burgerBtnAnimation(e));
// === Burger Handler =====================================================================	