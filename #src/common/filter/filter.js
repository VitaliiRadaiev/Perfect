{
    let filterTitle = document.querySelector('.filter__item_1');
    let filterMobileCollapse = document.querySelector('.filter__mobile-collapse');
    if(filterTitle && filterMobileCollapse) {
        filterTitle.addEventListener('click', () => {
            if(document.documentElement.clientWidth < 992) {
                filterTitle.classList.toggle('active')
                _slideToggle(filterMobileCollapse, 400)
            }
        })
    }
}