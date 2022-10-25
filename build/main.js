/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component/advArticle.js":
/*!**************************************!*\
  !*** ./src/componetes/advArticle.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var advArticle = function advArticle(advantage) {
  var element = document.createElement('article');
  element.classList.add('adv-article');
  element.innerHTML = "\n        <img class=\"advSection__icon\" src=\"".concat(advantage.icon, "\" alt=\"icon\" />\n            <h1 class=\"advSection__headline\">").concat(advantage.headline, "</h1>\n            <p class=\"advSection__text\">").concat(advantage.text, "</p>\n    ");
  return element;
};

/* harmony default export */ __webpack_exports__["default"] = (advArticle);

/***/ }),

/***/ "./src/component/advSection.js":
/*!**************************************!*\
  !*** ./src/componetes/advSection.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _advArticle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advArticle.js */ "./src/component/advArticle.js");
/* harmony import */ var _advSection_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advSection.scss */ "./src/component/advSection.scss");

 //console.log(advantages)

var advSection = function advSection() {
  var element = document.createElement('div');
  element.classList.add('advantages');
  fetch("http://localhost:4000/advantages").then(function (response) {
    return response.json();
  }).then(function (advantages) {
    advantages.forEach(function (advantage) {
      element.append((0,_advArticle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(advantage));
    });
  });
  return element;
};

/* harmony default export */ __webpack_exports__["default"] = (advSection);

/***/ }),

/***/ "./src/component/section.js":
/*!***********************************!*\
  !*** ./src/componetes/section.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _advSection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advSection.js */ "./src/component/advSection.js");
/* harmony import */ var _section_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.scss */ "./src/componetes/section.scss");



var section = function section() {
  var element = document.createElement('section');
  element.classList.add("section");
  element.innerHTML = "\n    <h1>Our Advantages</h1>\n";
  element.append((0,_advSection_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
  return element;
};

/* harmony default export */ __webpack_exports__["default"] = (section);

/***/ }),

/***/ "./src/component/advSection.scss":
/*!****************************************!*\
  !*** ./src/componetes/advSection.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/component/section.scss":
/*!*************************************!*\
  !*** ./src/componetes/section.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componetes/section.js */ "./src/componetes/section.js");

var element = document.querySelector(".wrapper");
element.append((0,_component_section_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNDLFNBQVQsRUFBb0I7RUFFakMsSUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZDtFQUNBRixPQUFPLENBQUNHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGFBQXRCO0VBRUFKLE9BQU8sQ0FBQ0ssU0FBUiw2REFDeUNOLFNBQVMsQ0FBQ08sSUFEbkQsZ0ZBRTJDUCxTQUFTLENBQUNRLFFBRnJELDhEQUdzQ1IsU0FBUyxDQUFDUyxJQUhoRDtFQU1BLE9BQU9SLE9BQVA7QUFDQyxDQVpMOztBQWNJLCtEQUFlRixVQUFmOzs7Ozs7Ozs7Ozs7O0FDZko7Q0FHQTs7QUFDQSxJQUFJVyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0VBRXhCLElBQUlULE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7RUFDQUYsT0FBTyxDQUFDRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixZQUF0QjtFQUdBTSxLQUFLLENBQUMsa0NBQUQsQ0FBTCxDQUNLQyxJQURMLENBQ1UsVUFBQUMsUUFBUTtJQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0VBQUEsQ0FEbEIsRUFFS0YsSUFGTCxDQUVVLFVBQUFHLFVBQVUsRUFBSTtJQUVoQkEsVUFBVSxDQUFDQyxPQUFYLENBQW1CLFVBQUFoQixTQUFTLEVBQUk7TUFDNUJDLE9BQU8sQ0FBQ2dCLE1BQVIsQ0FBZWxCLDBEQUFVLENBQUNDLFNBQUQsQ0FBekI7SUFFSCxDQUhEO0VBS0gsQ0FUTDtFQVlKLE9BQU9DLE9BQVA7QUFDQyxDQW5CRDs7QUFxQkEsK0RBQWVTLFVBQWY7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTs7QUFFQSxJQUFJUSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFXO0VBRXpCLElBQUlqQixPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFkO0VBQ0FGLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsU0FBdEI7RUFFQUosT0FBTyxDQUFDSyxTQUFSO0VBSUFMLE9BQU8sQ0FBQ2dCLE1BQVIsQ0FBZVAsMERBQVUsRUFBekI7RUFFQSxPQUFPVCxPQUFQO0FBQ0MsQ0FaRDs7QUFjQSwrREFBZWlCLE9BQWY7Ozs7Ozs7Ozs7O0FDakJBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxJQUFJakIsT0FBTyxHQUFHQyxRQUFRLENBQUNpQixhQUFULENBQXVCLFVBQXZCLENBQWQ7QUFDQWxCLE9BQU8sQ0FBQ2dCLE1BQVIsQ0FBZUMsa0VBQU8sRUFBdEIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dG9tYXRpc2VyaW5nLXRyYWVuaW5nLWloYXZlbm9uYW1lNjY2Ly4vc3JjL2NvbXBvbmV0ZXMvYWR2QXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0aXNlcmluZy10cmFlbmluZy1paGF2ZW5vbmFtZTY2Ni8uL3NyYy9jb21wb25ldGVzL2FkdlNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGlzZXJpbmctdHJhZW5pbmctaWhhdmVub25hbWU2NjYvLi9zcmMvY29tcG9uZXRlcy9zZWN0aW9uLmpzIiwid2VicGFjazovL2F1dG9tYXRpc2VyaW5nLXRyYWVuaW5nLWloYXZlbm9uYW1lNjY2Ly4vc3JjL2NvbXBvbmV0ZXMvYWR2U2VjdGlvbi5zY3NzPzFlMjMiLCJ3ZWJwYWNrOi8vYXV0b21hdGlzZXJpbmctdHJhZW5pbmctaWhhdmVub25hbWU2NjYvLi9zcmMvY29tcG9uZXRlcy9zZWN0aW9uLnNjc3M/N2ZhNyIsIndlYnBhY2s6Ly9hdXRvbWF0aXNlcmluZy10cmFlbmluZy1paGF2ZW5vbmFtZTY2Ni93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hdXRvbWF0aXNlcmluZy10cmFlbmluZy1paGF2ZW5vbmFtZTY2Ni93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2F1dG9tYXRpc2VyaW5nLXRyYWVuaW5nLWloYXZlbm9uYW1lNjY2Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxubGV0IGFkdkFydGljbGUgPSBmdW5jdGlvbihhZHZhbnRhZ2UpIHtcclxuXHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKVxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhZHYtYXJ0aWNsZScpXHJcbiAgICBcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJhZHZTZWN0aW9uX19pY29uXCIgc3JjPVwiJHthZHZhbnRhZ2UuaWNvbn1cIiBhbHQ9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiYWR2U2VjdGlvbl9faGVhZGxpbmVcIj4ke2FkdmFudGFnZS5oZWFkbGluZX08L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImFkdlNlY3Rpb25fX3RleHRcIj4ke2FkdmFudGFnZS50ZXh0fTwvcD5cclxuICAgIGBcclxuICAgIFxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgYWR2QXJ0aWNsZSIsIlxyXG5pbXBvcnQgYWR2QXJ0aWNsZSBmcm9tIFwiLi9hZHZBcnRpY2xlLmpzXCJcclxuaW1wb3J0IFwiLi9hZHZTZWN0aW9uLnNjc3NcIlxyXG5cclxuLy9jb25zb2xlLmxvZyhhZHZhbnRhZ2VzKVxyXG5sZXQgYWR2U2VjdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWR2YW50YWdlcycpXHJcblxyXG4gICAgXHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hZHZhbnRhZ2VzXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGFkdmFudGFnZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgYWR2YW50YWdlcy5mb3JFYWNoKGFkdmFudGFnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZChhZHZBcnRpY2xlKGFkdmFudGFnZSkpXHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuXHJcbnJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkdlNlY3Rpb24iLCJpbXBvcnQgYWR2U2VjdGlvbiBmcm9tIFwiLi9hZHZTZWN0aW9uLmpzXCJcclxuaW1wb3J0IFwiLi9zZWN0aW9uLnNjc3NcIlxyXG5cclxubGV0IHNlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuXHJcbmxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXHJcbmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIilcclxuXHJcbmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgPGgxPk91ciBBZHZhbnRhZ2VzPC9oMT5cclxuYFxyXG5cclxuZWxlbWVudC5hcHBlbmQoYWR2U2VjdGlvbigpKVxyXG5cclxucmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VjdGlvbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzZWN0aW9uIGZyb20gXCIuL2NvbXBvbmV0ZXMvc2VjdGlvbi5qc1wiXHJcblxyXG5sZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKVxyXG5lbGVtZW50LmFwcGVuZChzZWN0aW9uKCkpIl0sIm5hbWVzIjpbImFkdkFydGljbGUiLCJhZHZhbnRhZ2UiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiaWNvbiIsImhlYWRsaW5lIiwidGV4dCIsImFkdlNlY3Rpb24iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJhZHZhbnRhZ2VzIiwiZm9yRWFjaCIsImFwcGVuZCIsInNlY3Rpb24iLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==