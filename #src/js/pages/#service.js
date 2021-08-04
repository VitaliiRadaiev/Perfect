{
    let aside = document.querySelector('.aside');
    if(aside) {
        let asideWrap = document.querySelector('.subhero-content__aside');
        let title = aside.querySelector('.aside__mobile-title');
        let list = aside.querySelector('.aside__list');

        setStickyMenu('.aside', '.subhero-content__aside');

        title.addEventListener('click', () => {
            if(document.documentElement.clientWidth < 992) {
                title.classList.toggle('active');
                _slideToggle(list)
            }
        })

    }
}