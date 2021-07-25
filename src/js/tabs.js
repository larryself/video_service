/*   tabs */
const tabsButton = document.querySelectorAll('.js-tabs');
tabsButton.forEach(tab => {
    tab.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.matches('.active-tabs')) {
            return;
        }
        openActiveElement(e);
    });
});

function openActiveElement(e) {
    const currentContentElem = document.querySelector(
        `[data-content="${e.target.closest('.js-tabs').dataset.trigger}"]`
    );
    /* remove */
    document.querySelector('.active-tabs').classList.remove('active-tabs');
    document.querySelector('.active-content').classList.remove('active-content');
    /* add */
    e.target.classList.add('active-tabs');
    currentContentElem.classList.add('active-content');
}