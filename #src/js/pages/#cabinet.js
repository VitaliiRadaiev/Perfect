{
    let mobileNavTrigger = document.querySelector('.cabinet__mobile-nav-title');
    if(mobileNavTrigger) {
        let list = mobileNavTrigger.nextElementSibling;
        mobileNavTrigger.addEventListener('click', () => {
            if(list) {
                mobileNavTrigger.classList.toggle('active');
                _slideToggle(list, 400);
            }
        })
    }

    setStickyMenu('.cabinet .aside-list', '.cabinet__col-2');

    let cabinetBoxActionAll = document.querySelectorAll('.cabinet-box-action');
    if(cabinetBoxActionAll.length) {
        cabinetBoxActionAll.forEach(item => {
            let trigger = item.querySelector('.cabinet-box-action__trigger');
            let text = item.querySelector('.cabinet-box-action__info-text');
            let close = item.querySelector('.cabinet-box-action__trigger-close');
            

            if(trigger && text) {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    _slideToggle(text);
                });

                close.addEventListener('click', (e) => {
                    e.preventDefault();
                    _slideUp(text);
                })
            }

        })
    }
}