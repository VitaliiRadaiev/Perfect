let cardDetailItems = document.querySelectorAll('.p-card-2__detail');
if(cardDetailItems.length) {
    cardDetailItems.forEach(item => {
        let text = item.querySelector('.p-card-2__detail-collapse');
        let title = item.querySelector('.p-card-2__detail-title');
        if(text && title) {
            title.addEventListener('click', () => {
                title.classList.toggle('is-open');
                _slideToggle(text, 400);
            })
        }
    })
}