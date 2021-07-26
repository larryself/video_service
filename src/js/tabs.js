

if (window.location.hash) {
    const elem = window.location.hash
    const triggerElement = elem.slice(1)
    openActiveElement(triggerElement);
}
/*   tabs */
const tabsButton = document.querySelectorAll('.js-tabs');
tabsButton.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        openActiveElement(e = e.target.closest('.js-tabs').dataset.trigger);
    });
});


function openActiveElement(trig){
    const tabs = [...document.querySelectorAll(`[data-trigger]`)];
    const section = [...document.querySelectorAll(`[data-content]`)];
    tabs.forEach((tab, i) => {
        if (tab.dataset.trigger != trig) {
            if (tab.classList.contains('main-nav__item_active')) {
                tab.classList.remove('main-nav__item_active');
                section[i].classList.remove('main-nav__section_active');
            }
        } else {
            tab.classList.add('main-nav__item_active');
            section[i].classList.add('main-nav__section_active');
            window.location.hash = trig;
        }
    })
}