/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (function() {

eval("var pass = document.querySelector('.js-form-password');\nvar btnEnter = document.querySelector('.js-form-btn');\nvar btnLogin = document.querySelector('.js-login-modal');\nvar page = document.querySelector('.page-body');\nvar formModal = document.querySelector('.js-modal-form');\nvar btnExit = document.querySelector('.js-logguot');\nvar userName = document.querySelector('.user-name');\nvar modalWindow = document.querySelector('.js-modal-window');\nvar formChangeName = document.querySelector('.form-change-name');\nvar userKey = 'autorized';\n\nif (localStorage.getItem(userKey)) {\n  var userList = localStorage.getItem(userKey);\n  var returnUserList = JSON.parse(userList);\n  authorizedAndChanegeNAme();\n  userName.textContent = returnUserList.user;\n  btnLogin.classList.remove('btn__active');\n  btnExit.classList.add('btn__active');\n}\n\nuserName.addEventListener('click', function (e) {\n  var changeNameInput = document.querySelector('.js-change-name');\n  changeNameInput.value = userName.textContent;\n  changeNameInput.classList.add('active');\n  userName.classList.remove('active');\n});\nformChangeName.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var changeNameInput = document.querySelector('.js-change-name');\n  userName.textContent = changeNameInput.value;\n  changeNameInput.classList.remove('active');\n  userName.classList.add('active');\n  formChangeName.reset();\n});\ndocument.querySelector('.js-change-name').addEventListener('blur', function () {\n  formChangeName.requestSubmit();\n});\n\nfunction loginFormOn() {\n  if (modalWindow.matches('.active')) {\n    return;\n  }\n\n  modalWindow.classList.add('active');\n  page.classList.add('modal-open');\n}\n\nmodalWindow.addEventListener('click', function (e) {\n  if (e.target.classList.contains('modal')) {\n    closeModalWindow();\n  }\n});\nbtnLogin.addEventListener('click', function () {\n  loginFormOn();\n});\nformModal.addEventListener('submit', function (e) {\n  e.preventDefault();\n  authorization();\n  formModal.reset();\n});\n\nfunction authorization() {\n  var loginInput = document.querySelector('.js-form-login');\n  var loginValue = loginInput.value;\n  var checkbox = document.querySelector('.js-form-checkbox');\n\n  if (checkbox.checked) {\n    saveToLocalStorage(loginValue);\n  }\n\n  authorizedAndChanegeNAme(loginValue);\n  closeModalWindow();\n}\n\nfunction authorizedAndChanegeNAme(user) {\n  userName.textContent = user;\n  userName.classList.add('active');\n  btnLogin.classList.remove('btn__active');\n  btnExit.classList.add('btn__active');\n}\n\nfunction saveToLocalStorage(user) {\n  var userObj = {\n    authorized: true,\n    user: user\n  };\n  JSON.stringify(userObj);\n  localStorage.setItem(userKey, JSON.stringify(userObj));\n}\n\nbtnExit.addEventListener('click', function () {\n  btnExit.classList.remove('btn__active');\n  btnLogin.classList.add('btn__active');\n  localStorage.clear();\n  userName.innerHTML = localStorage.getItem('loginName');\n});\n\nfunction closeModalWindow() {\n  modalWindow.classList.remove('active');\n  page.classList.remove('modal-open');\n}\n/*   tabs */\n\n\nvar tabsButton = document.querySelectorAll('.js-tabs');\ntabsButton.forEach(function (tab) {\n  tab.addEventListener('click', function (e) {\n    e.preventDefault();\n\n    if (e.target.matches('.active-tabs')) {\n      return;\n    }\n\n    openActiveElement(e);\n  });\n});\n\nfunction openActiveElement(e) {\n  var currentContentElem = document.querySelector(\"[data-content=\\\"\".concat(e.target.closest('.js-tabs').dataset.trigger, \"\\\"]\"));\n  /* remove */\n\n  document.querySelector('.active-tabs').classList.remove('active-tabs');\n  document.querySelector('.active-content').classList.remove('active-content');\n  /* add */\n\n  e.target.classList.add('active-tabs');\n  currentContentElem.classList.add('active-content');\n}\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js */ \"./js/index.js\");\n/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./scss/main.scss\");\n\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;