{
    let aside = document.querySelector('.aside');
    if(aside) {
        let asideWrap = document.querySelector('.subhero-content__aside');
        let title = aside.querySelector('.aside__mobile-title');
        let list = aside.querySelector('.aside__list');

        window.addEventListener('scroll', () => {
            if(document.documentElement.clientWidth > 991) {
                if(aside.getBoundingClientRect().top < 121) {
                    aside.classList.add('_fixed');
                    aside.style.top = '122px';
                    aside.style.maxWidth = (asideWrap.clientWidth) + 'px';
                }else if(asideWrap.getBoundingClientRect().top >= 121) {
                    aside.classList.remove('_fixed');
                }

                if(asideWrap.getBoundingClientRect().bottom <= aside.clientHeight + 121) {
                    aside.classList.add('_static');
                    asideWrap.classList.add('_flex-end');
                } else {
                    aside.classList.remove('_static');
                    asideWrap.classList.remove('_flex-end');
                }
            }
        })

        title.addEventListener('click', () => {
            if(document.documentElement.clientWidth < 992) {
                title.classList.toggle('active');
                _slideToggle(list)
            }
        })

    }
}