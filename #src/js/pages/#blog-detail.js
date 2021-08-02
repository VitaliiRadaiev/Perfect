{
    let paragraphs = document.querySelectorAll('.text-content p');
    if(paragraphs.length) {
        paragraphs.forEach(p => {
            if(p.querySelector('img')) {
                p.classList.add('has-img')
            }
        })
    }

}

// {
//     let aside = document.querySelector('.blog-detail-aside');
//     if(aside) {
//         let asideWrap = document.querySelector('.blog-detail__col-2');
//         window.addEventListener('scroll', () => {
//             console.log(aside.getBoundingClientRect().top < 121);
//             if(document.documentElement.clientWidth > 991) {
//                 if(aside.getBoundingClientRect().top < 121) {
//                     console.log('test2');
//                     aside.classList.add('_fixed');
//                     aside.style.top = '122px';
//                     aside.style.maxWidth = (asideWrap.clientWidth) + 'px';
//                 }else if(asideWrap.getBoundingClientRect().top >= 121) {
//                     aside.classList.remove('_fixed');
//                     console.log('test');
//                 }

//                 if(asideWrap.getBoundingClientRect().bottom <= aside.clientHeight + 121) {
//                     aside.classList.add('_static');
//                     asideWrap.classList.add('_flex-end');
//                 } else {
//                     aside.classList.remove('_static');
//                     asideWrap.classList.remove('_flex-end');
//                 }
//             }
//         })


//     }
// }