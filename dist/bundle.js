/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

// import * as _ from "lodash"; 
function component(text) {
    var element = document.createElement('h1');
    element.textContent = text;
    return element;
}
document.body.prepend(component('Проект собран на Webpack'));
document.body.append(component('eee'));

/******/ })()
;
//# sourceMappingURL=bundle.js.map