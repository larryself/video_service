function openActiveElement(trig) {
  const tabs = [...document.querySelectorAll('[data-trigger]')];
  const section = [...document.querySelectorAll('[data-content]')];
  const sectionActiveClass = 'main-nav__section_active';
  const itemActiveClass = 'main-nav__item_active';
  tabs.forEach((tab, i) => {
    if (tab.dataset.trigger !== trig) {
      if (tab.classList.contains(itemActiveClass)) {
        tab.classList.remove(itemActiveClass);
        section[i].classList.remove(sectionActiveClass);
      }
    } else {
      tab.classList.add(itemActiveClass);
      section[i].classList.add(sectionActiveClass);
      window.location.hash = trig;
    }
  });
}

if (window.location.hash) {
  const elem = window.location.hash;
  const triggerElement = elem.slice(1);
  openActiveElement(triggerElement);
}

const tabsButton = document.querySelectorAll('.js-tabs');
tabsButton.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    const currentTrigger = e.target.closest('.js-tabs').dataset.trigger;
    openActiveElement(currentTrigger);
  });
});
