let $header = document.querySelector('.header');
if($header) {
    let row1Close = false;
    let $headerRow1 = document.querySelector('.header__row-1');
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 50) {
            $header.classList.add('_is-scroll')

            if(document.documentElement.clientWidth < 992) {
                if(!row1Close) {
                    _slideUp($headerRow1, 400);
                    row1Close = true;
                }
            }
        } else {
            $header.classList.remove('_is-scroll');
            if(document.documentElement.clientWidth < 992) {
                if(row1Close) {
                    _slideDown($headerRow1, 400);
                    row1Close = false;
                }
            }
        }
    })
}