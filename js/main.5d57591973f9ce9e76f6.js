!function(){var e={790:function(){var e=document.querySelector(".js-enter-modal"),t=document.querySelector(".page-body"),n=document.querySelector(".js-modal-form"),r=document.querySelector(".js-logguot"),o=document.querySelector(".js-current-user-name"),a=document.querySelector(".js-modal-window"),c=document.querySelector(".js-form-change-name"),i="autorized";function s(e){var t={authorized:!0,user:e};JSON.stringify(t),localStorage.setItem(i,JSON.stringify(t))}function u(){a.matches(".modal_active")||(a.classList.add("modal_active"),t.classList.add("page-body_not-overflow"))}function l(){a.classList.remove("modal_active"),t.classList.remove("page-body_not-overflow")}function d(t){o.textContent=t,o.classList.add("header-login__user-name_active"),e.classList.remove("header-login__btn_active"),r.classList.add("header-login__btn_active")}if(o.addEventListener("click",(function(){var e=document.querySelector(".js-change-name-input");e.value=o.textContent,e.classList.add("header-login__input_active"),e.focus(),o.classList.remove("header-login__user-name_active")})),c.addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector(".js-change-name-input");s(t.value),o.textContent=t.value,t.classList.remove("header-login__input_active"),o.classList.add("header-login__user-name_active"),c.reset()})),document.querySelector(".js-change-name-input").addEventListener("blur",(function(){c.requestSubmit()})),a.addEventListener("click",(function(e){e.target.classList.contains("modal")?l():u()})),e.addEventListener("click",(function(){u()})),localStorage.getItem(i)){var m=localStorage.getItem(i);d(JSON.parse(m).user)}n.addEventListener("submit",(function(e){var t;e.preventDefault(),t=document.querySelector(".js-form-login").value,document.querySelector(".js-form-checkbox").checked&&s(t),d(t),l(),n.reset()})),r.addEventListener("click",(function(){r.classList.remove("header-login__btn_active"),e.classList.add("header-login__btn_active"),localStorage.clear(),o.innerHTML=""}))},503:function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(t){var n=e(document.querySelectorAll("[data-trigger]")),r=e(document.querySelectorAll("[data-content]")),o="main-nav__section_active",a="main-nav__item_active";n.forEach((function(e,n){e.dataset.trigger!==t?e.classList.contains(a)&&(e.classList.remove(a),r[n].classList.remove(o)):(e.classList.add(a),r[n].classList.add(o),window.location.hash=t)}))}window.location.hash&&n(window.location.hash.slice(1)),document.querySelectorAll(".js-tabs").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),n(e.target.closest(".js-tabs").dataset.trigger)}))}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(790),n(503)}()}();