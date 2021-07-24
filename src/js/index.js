const pass = document.querySelector('.js-form-password');
const btnEnter = document.querySelector('.js-form-btn');

const btnLogin = document.querySelector('.js-login-modal');
const page = document.querySelector('.page-body');
const formModal = document.querySelector('.js-modal-form');
const btnExit = document.querySelector('.js-logguot');
const userName = document.querySelector('.user-name');
const modalWindow = document.querySelector('.js-modal-window');

const formChangeName = document.querySelector('.form-change-name');



let userKey = 'autorized';
if (localStorage.getItem(userKey)) {
  const userList = localStorage.getItem(userKey);
  const returnUserList = JSON.parse(userList);
  authorizedAndChanegeNAme();
  userName.textContent = returnUserList.user;
  btnLogin.classList.remove('btn__active');
  btnExit.classList.add('btn__active');
}
userName.addEventListener('click', e => {
  const changeNameInput = document.querySelector('.js-change-name');
  changeNameInput.value = userName.textContent;
  changeNameInput.classList.add('active');
  userName.classList.remove('active');
});

formChangeName.addEventListener('submit', e => {
  e.preventDefault();
  const changeNameInput = document.querySelector('.js-change-name');
  userName.textContent = changeNameInput.value;
  changeNameInput.classList.remove('active');
  userName.classList.add('active');
  formChangeName.reset();
});
document.querySelector('.js-change-name').addEventListener('blur', () => {
  formChangeName.requestSubmit();
});

function loginFormOn() {
  if (modalWindow.matches('.active')) {
    return;
  }

  modalWindow.classList.add('active');
  page.classList.add('modal-open');
}

modalWindow.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    closeModalWindow();
  }
});

btnLogin.addEventListener('click', () => {
  loginFormOn();
});
formModal.addEventListener('submit', e => {
  e.preventDefault();
  authorization();
  formModal.reset();
});

function authorization() {
  const loginInput = document.querySelector('.js-form-login');
  const loginValue = loginInput.value;
  const checkbox = document.querySelector('.js-form-checkbox');
  if (checkbox.checked) {
    saveToLocalStorage(loginValue);
  }
  authorizedAndChanegeNAme(loginValue);
  closeModalWindow();
}

function authorizedAndChanegeNAme(user) {
  userName.textContent = user;
  userName.classList.add('active');
  btnLogin.classList.remove('btn__active');
  btnExit.classList.add('btn__active');
}

function saveToLocalStorage(user) {
  let userObj = {
    authorized: true,
    user: user
  };
  JSON.stringify(userObj);
  localStorage.setItem(userKey, JSON.stringify(userObj));
}

btnExit.addEventListener('click', () => {
  btnExit.classList.remove('btn__active');
  btnLogin.classList.add('btn__active');
  localStorage.clear();
  userName.innerHTML = localStorage.getItem('loginName');
});

function closeModalWindow() {
  modalWindow.classList.remove('active');
  page.classList.remove('modal-open');
}

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
