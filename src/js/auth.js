/* modal */
const btnLoginEnter = document.querySelector('.js-enter-modal');
const page = document.querySelector('.page-body');
const formModal = document.querySelector('.js-modal-form');
const btnExit = document.querySelector('.js-logguot');
const userName = document.querySelector('.js-current-user-name');
const modalWindow = document.querySelector('.js-modal-window');

const formChangeName = document.querySelector('.js-form-change-name');
let userKey = 'autorized';
if (localStorage.getItem(userKey)) {
    const userList = localStorage.getItem(userKey);
    const returnUserList = JSON.parse(userList);
    authorizedAndChanegeNAme();
    userName.textContent = returnUserList.user;
    btnLoginEnter.classList.remove('header-login__btn_active');
    btnExit.classList.add('header-login__btn_active');
}
userName.addEventListener('click', e => {
    const changeNameInput = document.querySelector('.js-change-name-input');
    changeNameInput.value = userName.textContent;
    changeNameInput.classList.add('header-login__input_active');
    changeNameInput.focus();
    userName.classList.remove('header-login__user-name_active');
});

formChangeName.addEventListener('submit', e => {
    e.preventDefault();
    const changeNameInput = document.querySelector('.js-change-name-input');
    userName.textContent = changeNameInput.value;
    changeNameInput.classList.remove('header-login__input_active');
    userName.classList.add('header-login__user-name_active');
    formChangeName.reset();
});
document.querySelector('.js-change-name-input').addEventListener('blur', () => {
    formChangeName.requestSubmit();
});

function loginFormOn() {
    if (modalWindow.matches('.modal_active')) {
        return;
    }
    modalWindow.classList.add('modal_active');
    page.classList.add('page-body_not-overflow');
}

modalWindow.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
        return closeModalWindow();
    }
    loginFormOn();
});

btnLoginEnter.addEventListener('click', () => {
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
    userName.classList.add('header-login__user-name_active');
    btnLoginEnter.classList.remove('header-login__btn_active');
    btnExit.classList.add('header-login__btn_active');
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
    btnExit.classList.remove('header-login__btn_active');
    btnLoginEnter.classList.add('header-login__btn_active');
    localStorage.clear();
    userName.innerHTML = localStorage.getItem('loginName');
});

function closeModalWindow() {
    modalWindow.classList.remove('modal_active');
    page.classList.remove('page-body_not-overflow');
}