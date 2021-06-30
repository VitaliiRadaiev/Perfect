let cardDetailItems = document.querySelectorAll('.p-card-2__detail');
if(cardDetailItems.length) {
    cardDetailItems.forEach(item => {
        let text = item.querySelector('.p-card-2__detail-collapse');
        let title = item.querySelector('.p-card-2__detail-title');
        let parent = item.closest('.p-card-2');
        let col3 = parent.querySelector('.p-card-2__col-3');
        let star = parent.querySelector('.p-card-2__star');
        if(text && title) {
            title.addEventListener('click', () => {
                title.classList.toggle('is-open');
                _slideToggle(text, 400);
            })
        }

        if(parent && col3 && document.documentElement.clientWidth < 768 && star) {
            col3.prepend(item)
            col3.prepend(star)
        }
    })
}