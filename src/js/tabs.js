if (localStorage.getItem('tabs') == 'tv') {
    document.querySelector('.main-nav__item_active').classList.remove('main-nav__item_active');
    document.querySelector('.main-nav__section_active').classList.remove('main-nav__section_active');
    document.querySelector('[data-trigger="tv"]').classList.add('main-nav__item_active');
    document.querySelector('[data-content="tv"]').classList.add('main-nav__section_active')
    window.location.hash='#tv'
}
/*   tabs */
const tabsButton = document.querySelectorAll('.js-tabs');
tabsButton.forEach(tab => {
    tab.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.matches('.main-nav__item_active')) {
            return;
        }

        if (e.target.closest('.js-tabs').dataset.trigger == 'tv') {
            localStorage.setItem('tabs', 'tv');
            window.location.hash='#tv'
        }
        if (e.target.closest('.js-tabs').dataset.trigger == 'films') {
            window.location.hash = '';
            localStorage.clear();
        }
        openActiveElement(e);

    });
});

function openActiveElement(e) {

    const currentContentElem = document.querySelector(
        `[data-content="${e.target.closest('.js-tabs').dataset.trigger}"]`
    );


    /* remove */
    document.querySelector('.main-nav__item_active').classList.remove('main-nav__item_active');
    document.querySelector('.main-nav__section_active').classList.remove('main-nav__section_active');
    /* add */
    e.target.classList.add('main-nav__item_active');
    currentContentElem.classList.add('main-nav__section_active');
}