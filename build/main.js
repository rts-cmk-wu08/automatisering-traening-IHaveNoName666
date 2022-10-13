/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/componetes/advArticle.js":
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

/***/ "./src/componetes/advSection.js":
/*!**************************************!*\
  !*** ./src/componetes/advSection.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.js */ "./src/data.js");
/* harmony import */ var _advArticle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advArticle.js */ "./src/componetes/advArticle.js");
/* harmony import */ var _advSection_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advSection.scss */ "./src/componetes/advSection.scss");



console.log(_data_js__WEBPACK_IMPORTED_MODULE_0__.advantages);

var advSection = function advSection() {
  var element = document.createElement('div');
  element.classList.add('advantages');
  _data_js__WEBPACK_IMPORTED_MODULE_0__.advantages.forEach(function (advantage) {
    element.append((0,_advArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(advantage));
  });
  return element;
};

/* harmony default export */ __webpack_exports__["default"] = (advSection);

/***/ }),

/***/ "./src/componetes/section.js":
/*!***********************************!*\
  !*** ./src/componetes/section.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _advSection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advSection.js */ "./src/componetes/advSection.js");
/* harmony import */ var _section_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.scss */ "./src/componetes/section.scss");



var section = function section() {
  var element = document.createElement('section');
  element.classList.add("section");
  element.innerHTML = "\n\n    <h1 class=\"section__headline\">Our Advantages</h1>\n\n";
  element.append((0,_advSection_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
  return element;
};

/* harmony default export */ __webpack_exports__["default"] = (section);

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "advantages": function() { return /* binding */ advantages; },
/* harmony export */   "facilities": function() { return /* binding */ facilities; },
/* harmony export */   "hero": function() { return /* binding */ hero; },
/* harmony export */   "services": function() { return /* binding */ services; },
/* harmony export */   "sites": function() { return /* binding */ sites; }
/* harmony export */ });
var hero = {
  image: "https://dazzling-squirrel-77a63d.netlify.app/imgs/hero.png",
  headline: "Find out how we can save your time in Backpacking in Europe",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.",
  icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Globe.png"
};
var services = [{
  illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/exploring.png",
  headline: "Promoting your territory towards foreign tourists",
  text: "EasyCamper wants to promote the excellence of Italian food and wine, art, culture and the economy.",
  linktext: "Discover the places linked to your area that you can link to your structure"
}, {
  illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/tourist_map.png",
  headline: "Additional services designed for the needs of campers",
  text: "Travelling often means that you dont have time to organise excursions along your route. EasyCamper takes care of that!",
  linktext: "Discover the Guided Tours and additional services that you can link to your structure"
}, {
  illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/destination.png",
  headline: "Free online showcase with promotion in Italy and abroad",
  text: "Forget about the time and money spent on creating your own website or e-commerce system for bookings.",
  linktext: "Easycamper creates your showcase. Discover the terms and conditions for joining the Network"
}];
var facilities = {
  headline: "Making your facility known is our priority",
  options: [{
    icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/list-check.png",
    headline: "Choose the type of stop",
    text: "Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping"
  }, {
    icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/spellcheck.png",
    headline: "Describe your structure",
    text: "Describe thee property, location and nearby attractions"
  }, {
    icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Text-Frame-Add.png",
    headline: "Build your showcase",
    text: "Add photos, videos and descriptions Define the price of each type of that make your propety truly"
  }, {
    icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Calendar-Today.png",
    headline: "Prices and Availability",
    text: "pitch and configure the availablity calendar."
  }]
};
var sites = {
  headline: "Join the community campervan sites managers.",
  text: "Discover all the equibbed areas in Italy. Find the shop with all the services for you and your camper.",
  btnicon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/arrow-icon.png",
  places: [{
    img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/lucciano.png",
    name: "Lucciano",
    city: "Rome"
  }, {
    img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/cremonesi.png",
    name: "Cremonesi",
    city: "Florence"
  }, {
    img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/beneventi.png",
    name: "Beneventi",
    city: "Venice"
  }]
};
var advantages = [{
  icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/compare.png",
  headline: "Convenience and Transparency",
  text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
}, {
  icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/library_books.png",
  headline: "Digital marketing and editorial support",
  text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
}, {
  icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Compare-HSV.png",
  headline: "Community of services dedicated to campers",
  text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
}];

/***/ }),

/***/ "./src/componetes/advSection.scss":
/*!****************************************!*\
  !*** ./src/componetes/advSection.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/componetes/section.scss":
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _componetes_section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componetes/section.js */ "./src/componetes/section.js");

var element = document.querySelector(".wrapper");
element.append((0,_componetes_section_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSVIsT0FBTyxHQUFHQyxRQUFRLENBQUM2QixhQUFULENBQXVCLFVBQXZCLENBQWQ7QUFDQTlCLE9BQU8sQ0FBQ2MsTUFBUixDQUFlQyxrRUFBTyxFQUF0QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0b21hdGlzZXJpbmctdHJhZW5pbmctaWhhdmVub25hbWU2NjYvLi9zcmMvY29tcG9uZXRlcy9hZHZBcnRpY2xlLmpzIiwid2VicGFjazovL2F1dG9tYXRpc2VyaW5nLXRyYWVuaW5nLWloYXZlbm9uYW1lNjY2Ly4vc3JjL2NvbXBvbmV0ZXMvYWR2U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0aXNlcmluZy10cmFlbmluZy1paGF2ZW5vbmFtZTY2Ni8uL3NyYy9jb21wb25ldGVzL3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGlzZXJpbmctdHJhZW5pbmctaWhhdmVub25hbWU2NjYvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0aXNlcmluZy10cmFlbmluZy1paGF2ZW5vbmFtZTY2Ni8uL3NyYy9jb21wb25ldGVzL2FkdlNlY3Rpb24uc2Nzcz8xZTIzIiwid2VicGFjazovL2F1dG9tYXRpc2VyaW5nLXRyYWVuaW5nLWloYXZlbm9uYW1lNjY2Ly4vc3JjL2NvbXBvbmV0ZXMvc2VjdGlvbi5zY3NzPzdmYTciLCJ3ZWJwYWNrOi8vYXV0b21hdGlzZXJpbmctdHJhZW5pbmctaWhhdmVub25hbWU2NjYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGlzZXJpbmctdHJhZW5pbmctaWhhdmVub25hbWU2NjYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2F1dG9tYXRpc2VyaW5nLXRyYWVuaW5nLWloYXZlbm9uYW1lNjY2L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXV0b21hdGlzZXJpbmctdHJhZW5pbmctaWhhdmVub25hbWU2NjYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hdXRvbWF0aXNlcmluZy10cmFlbmluZy1paGF2ZW5vbmFtZTY2Ni8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmxldCBhZHZBcnRpY2xlID0gZnVuY3Rpb24oYWR2YW50YWdlKSB7XHJcblxyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJylcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWR2LWFydGljbGUnKVxyXG4gICAgXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aW1nIGNsYXNzPVwiYWR2U2VjdGlvbl9faWNvblwiIHNyYz1cIiR7YWR2YW50YWdlLmljb259XCIgYWx0PVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cImFkdlNlY3Rpb25fX2hlYWRsaW5lXCI+JHthZHZhbnRhZ2UuaGVhZGxpbmV9PC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZTZWN0aW9uX190ZXh0XCI+JHthZHZhbnRhZ2UudGV4dH08L3A+XHJcbiAgICBgXHJcbiAgICBcclxuICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IGFkdkFydGljbGUiLCJpbXBvcnQgeyBhZHZhbnRhZ2VzIH0gZnJvbSBcIi4uL2RhdGEuanNcIlxyXG5pbXBvcnQgYWR2QXJ0aWNsZSBmcm9tIFwiLi9hZHZBcnRpY2xlLmpzXCJcclxuaW1wb3J0IFwiLi9hZHZTZWN0aW9uLnNjc3NcIlxyXG5cclxuY29uc29sZS5sb2coYWR2YW50YWdlcylcclxubGV0IGFkdlNlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuXHJcbmxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhZHZhbnRhZ2VzJylcclxuXHJcbmFkdmFudGFnZXMuZm9yRWFjaChhZHZhbnRhZ2UgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kKGFkdkFydGljbGUoYWR2YW50YWdlKSlcclxuXHJcbn0pXHJcblxyXG5cclxucmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWR2U2VjdGlvbiIsImltcG9ydCBhZHZTZWN0aW9uIGZyb20gXCIuL2FkdlNlY3Rpb24uanNcIlxyXG5pbXBvcnQgXCIuL3NlY3Rpb24uc2Nzc1wiXHJcbmxldCBzZWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcblxyXG5sZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxyXG5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpXHJcblxyXG5lbGVtZW50LmlubmVySFRNTCA9IGBcclxuXHJcbiAgICA8aDEgY2xhc3M9XCJzZWN0aW9uX19oZWFkbGluZVwiPk91ciBBZHZhbnRhZ2VzPC9oMT5cclxuXHJcbmBcclxuZWxlbWVudC5hcHBlbmQoYWR2U2VjdGlvbigpKVxyXG5cclxucmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VjdGlvbiIsIlxyXG5leHBvcnQgbGV0IGhlcm8gPSB7XHJcbiAgICBpbWFnZTogXCJodHRwczovL2RhenpsaW5nLXNxdWlycmVsLTc3YTYzZC5uZXRsaWZ5LmFwcC9pbWdzL2hlcm8ucG5nXCIsXHJcbiAgICBoZWFkbGluZTogXCJGaW5kIG91dCBob3cgd2UgY2FuIHNhdmUgeW91ciB0aW1lIGluIEJhY2twYWNraW5nIGluIEV1cm9wZVwiLFxyXG4gICAgY29weTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBYyBhbWV0IGlkIGVnZXQgc2NlbGVyaXNxdWUgYW1ldCBldGlhbSBpbiBzaXQgY29tbW9kby4gUHJldGl1bSB1dCBkdWlzIG9yY2kgcHVsdmluYXIgcHJldGl1bSBpZCBjb25zZWN0ZXR1ci5cIixcclxuICAgIGljb246IFwiaHR0cHM6Ly9kYXp6bGluZy1zcXVpcnJlbC03N2E2M2QubmV0bGlmeS5hcHAvaW1ncy9pY29ucy9HbG9iZS5wbmdcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCBzZXJ2aWNlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBpbGx1c3RyYXRpb246IFwiaHR0cHM6Ly9kYXp6bGluZy1zcXVpcnJlbC03N2E2M2QubmV0bGlmeS5hcHAvaW1ncy9pbGx1c3RyYXRpb25zL2V4cGxvcmluZy5wbmdcIixcclxuICAgICAgICBoZWFkbGluZTogXCJQcm9tb3RpbmcgeW91ciB0ZXJyaXRvcnkgdG93YXJkcyBmb3JlaWduIHRvdXJpc3RzXCIsXHJcbiAgICAgICAgdGV4dDogXCJFYXN5Q2FtcGVyIHdhbnRzIHRvIHByb21vdGUgdGhlIGV4Y2VsbGVuY2Ugb2YgSXRhbGlhbiBmb29kIGFuZCB3aW5lLCBhcnQsIGN1bHR1cmUgYW5kIHRoZSBlY29ub215LlwiLFxyXG4gICAgICAgIGxpbmt0ZXh0OiBcIkRpc2NvdmVyIHRoZSBwbGFjZXMgbGlua2VkIHRvIHlvdXIgYXJlYSB0aGF0IHlvdSBjYW4gbGluayB0byB5b3VyIHN0cnVjdHVyZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlsbHVzdHJhdGlvbjogXCJodHRwczovL2RhenpsaW5nLXNxdWlycmVsLTc3YTYzZC5uZXRsaWZ5LmFwcC9pbWdzL2lsbHVzdHJhdGlvbnMvdG91cmlzdF9tYXAucG5nXCIsXHJcbiAgICAgICAgaGVhZGxpbmU6IFwiQWRkaXRpb25hbCBzZXJ2aWNlcyBkZXNpZ25lZCBmb3IgdGhlIG5lZWRzIG9mIGNhbXBlcnNcIixcclxuICAgICAgICB0ZXh0OiBcIlRyYXZlbGxpbmcgb2Z0ZW4gbWVhbnMgdGhhdCB5b3UgZG9udCBoYXZlIHRpbWUgdG8gb3JnYW5pc2UgZXhjdXJzaW9ucyBhbG9uZyB5b3VyIHJvdXRlLiBFYXN5Q2FtcGVyIHRha2VzIGNhcmUgb2YgdGhhdCFcIixcclxuICAgICAgICBsaW5rdGV4dDogXCJEaXNjb3ZlciB0aGUgR3VpZGVkIFRvdXJzIGFuZCBhZGRpdGlvbmFsIHNlcnZpY2VzIHRoYXQgeW91IGNhbiBsaW5rIHRvIHlvdXIgc3RydWN0dXJlXCJcclxuICAgIH0sIFxyXG4gICAge1xyXG4gICAgICAgIGlsbHVzdHJhdGlvbjogXCJodHRwczovL2RhenpsaW5nLXNxdWlycmVsLTc3YTYzZC5uZXRsaWZ5LmFwcC9pbWdzL2lsbHVzdHJhdGlvbnMvZGVzdGluYXRpb24ucG5nXCIsXHJcbiAgICAgICAgaGVhZGxpbmU6IFwiRnJlZSBvbmxpbmUgc2hvd2Nhc2Ugd2l0aCBwcm9tb3Rpb24gaW4gSXRhbHkgYW5kIGFicm9hZFwiLFxyXG4gICAgICAgIHRleHQ6IFwiRm9yZ2V0IGFib3V0IHRoZSB0aW1lIGFuZCBtb25leSBzcGVudCBvbiBjcmVhdGluZyB5b3VyIG93biB3ZWJzaXRlIG9yIGUtY29tbWVyY2Ugc3lzdGVtIGZvciBib29raW5ncy5cIixcclxuICAgICAgICBsaW5rdGV4dDogXCJFYXN5Y2FtcGVyIGNyZWF0ZXMgeW91ciBzaG93Y2FzZS4gRGlzY292ZXIgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIGZvciBqb2luaW5nIHRoZSBOZXR3b3JrXCJcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBsZXQgZmFjaWxpdGllcyA9IHtcclxuICAgIGhlYWRsaW5lOiBcIk1ha2luZyB5b3VyIGZhY2lsaXR5IGtub3duIGlzIG91ciBwcmlvcml0eVwiLFxyXG4gICAgb3B0aW9ucyA6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb246IFwiaHR0cHM6Ly9kYXp6bGluZy1zcXVpcnJlbC03N2E2M2QubmV0bGlmeS5hcHAvaW1ncy9pY29ucy9saXN0LWNoZWNrLnBuZ1wiLFxyXG4gICAgICAgICAgICBoZWFkbGluZTogXCJDaG9vc2UgdGhlIHR5cGUgb2Ygc3RvcFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlNlbGVjdCB0aGUgdHlwZSBvZiBzdG9wb3ZlciB5b3UgYXJlIG9yZGVyaW5nIGZyb20gRXF1aXBwZWQgQXJlYSwgQ2FtcGluZyBhbmQgQWdyaWNhbXBpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uOiBcImh0dHBzOi8vZGF6emxpbmctc3F1aXJyZWwtNzdhNjNkLm5ldGxpZnkuYXBwL2ltZ3MvaWNvbnMvc3BlbGxjaGVjay5wbmdcIixcclxuICAgICAgICAgICAgaGVhZGxpbmU6IFwiRGVzY3JpYmUgeW91ciBzdHJ1Y3R1cmVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJEZXNjcmliZSB0aGVlIHByb3BlcnR5LCBsb2NhdGlvbiBhbmQgbmVhcmJ5IGF0dHJhY3Rpb25zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWNvbjogXCJodHRwczovL2RhenpsaW5nLXNxdWlycmVsLTc3YTYzZC5uZXRsaWZ5LmFwcC9pbWdzL2ljb25zL1RleHQtRnJhbWUtQWRkLnBuZ1wiLFxyXG4gICAgICAgICAgICBoZWFkbGluZTogXCJCdWlsZCB5b3VyIHNob3djYXNlXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiQWRkIHBob3RvcywgdmlkZW9zIGFuZCBkZXNjcmlwdGlvbnMgRGVmaW5lIHRoZSBwcmljZSBvZiBlYWNoIHR5cGUgb2YgdGhhdCBtYWtlIHlvdXIgcHJvcGV0eSB0cnVseVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb246IFwiaHR0cHM6Ly9kYXp6bGluZy1zcXVpcnJlbC03N2E2M2QubmV0bGlmeS5hcHAvaW1ncy9pY29ucy9DYWxlbmRhci1Ub2RheS5wbmdcIixcclxuICAgICAgICAgICAgaGVhZGxpbmU6IFwiUHJpY2VzIGFuZCBBdmFpbGFiaWxpdHlcIixcclxuICAgICAgICAgICAgdGV4dDogXCJwaXRjaCBhbmQgY29uZmlndXJlIHRoZSBhdmFpbGFibGl0eSBjYWxlbmRhci5cIlxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgc2l0ZXMgPSB7XHJcbiAgICBoZWFkbGluZTogXCJKb2luIHRoZSBjb21tdW5pdHkgY2FtcGVydmFuIHNpdGVzIG1hbmFnZXJzLlwiLFxyXG4gICAgdGV4dDogXCJEaXNjb3ZlciBhbGwgdGhlIGVxdWliYmVkIGFyZWFzIGluIEl0YWx5LiBGaW5kIHRoZSBzaG9wIHdpdGggYWxsIHRoZSBzZXJ2aWNlcyBmb3IgeW91IGFuZCB5b3VyIGNhbXBlci5cIixcclxuICAgIGJ0bmljb246IFwiaHR0cHM6Ly9kYXp6bGluZy1zcXVpcnJlbC03N2E2M2QubmV0bGlmeS5hcHAvaW1ncy9pY29ucy9hcnJvdy1pY29uLnBuZ1wiLFxyXG4gICAgcGxhY2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6IFwiaHR0cHM6Ly9kYXp6bGluZy1zcXVpcnJlbC03N2E2M2QubmV0bGlmeS5hcHAvaW1ncy9sdWNjaWFuby5wbmdcIixcclxuICAgICAgICAgICAgbmFtZTogXCJMdWNjaWFub1wiLFxyXG4gICAgICAgICAgICBjaXR5OiBcIlJvbWVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6IFwiaHR0cHM6Ly9kYXp6bGluZy1zcXVpcnJlbC03N2E2M2QubmV0bGlmeS5hcHAvaW1ncy9jcmVtb25lc2kucG5nXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiQ3JlbW9uZXNpXCIsXHJcbiAgICAgICAgICAgIGNpdHk6IFwiRmxvcmVuY2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6IFwiaHR0cHM6Ly9kYXp6bGluZy1zcXVpcnJlbC03N2E2M2QubmV0bGlmeS5hcHAvaW1ncy9iZW5ldmVudGkucG5nXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiQmVuZXZlbnRpXCIsXHJcbiAgICAgICAgICAgIGNpdHk6IFwiVmVuaWNlXCJcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGFkdmFudGFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjpcImh0dHBzOi8vZGF6emxpbmctc3F1aXJyZWwtNzdhNjNkLm5ldGxpZnkuYXBwL2ltZ3MvaWNvbnMvY29tcGFyZS5wbmdcIixcclxuICAgICAgICBoZWFkbGluZTogXCJDb252ZW5pZW5jZSBhbmQgVHJhbnNwYXJlbmN5XCIsXHJcbiAgICAgICAgdGV4dDogXCJZb3UgZG9u4oCZdCBoYXZlIHRvIGZpbmQgb3V0IGxhdGVyIG9yIG9ubHkgYWZ0ZXIgY2FtZW5pZXJrIGFuZCB0cmFyc3BhcmVudCBFYXN5YW1wZXIgcmF0YWlucyBwbGlhY2FzIGFuZCBiZWF1dGlhcyBvZiB5b3VyIHRhcmlhYXJ5IGFuZCBoYWxwaW4gYSBmaXhlZCBjb21taXNzaW9uIG9uIGVhY2ggdHJhbnNhY3Rpb24gb2YgNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb246XCJodHRwczovL2RhenpsaW5nLXNxdWlycmVsLTc3YTYzZC5uZXRsaWZ5LmFwcC9pbWdzL2ljb25zL2xpYnJhcnlfYm9va3MucG5nXCIsXHJcbiAgICAgICAgaGVhZGxpbmU6IFwiRGlnaXRhbCBtYXJrZXRpbmcgYW5kIGVkaXRvcmlhbCBzdXBwb3J0XCIsXHJcbiAgICAgICAgdGV4dDogXCJZb3UgZG9u4oCZdCBoYXZlIHRvIGZpbmQgb3V0IGxhdGVyIG9yIG9ubHkgYWZ0ZXIgY2FtZW5pZXJrIGFuZCB0cmFyc3BhcmVudCBFYXN5YW1wZXIgcmF0YWlucyBwbGlhY2FzIGFuZCBiZWF1dGlhcyBvZiB5b3VyIHRhcmlhYXJ5IGFuZCBoYWxwaW4gYSBmaXhlZCBjb21taXNzaW9uIG9uIGVhY2ggdHJhbnNhY3Rpb24gb2YgNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb246XCJodHRwczovL2RhenpsaW5nLXNxdWlycmVsLTc3YTYzZC5uZXRsaWZ5LmFwcC9pbWdzL2ljb25zL0NvbXBhcmUtSFNWLnBuZ1wiLFxyXG4gICAgICAgIGhlYWRsaW5lOiBcIkNvbW11bml0eSBvZiBzZXJ2aWNlcyBkZWRpY2F0ZWQgdG8gY2FtcGVyc1wiLFxyXG4gICAgICAgIHRleHQ6IFwiWW91IGRvbuKAmXQgaGF2ZSB0byBmaW5kIG91dCBsYXRlciBvciBvbmx5IGFmdGVyIGNhbWVuaWVyayBhbmQgdHJhcnNwYXJlbnQgRWFzeWFtcGVyIHJhdGFpbnMgcGxpYWNhcyBhbmQgYmVhdXRpYXMgb2YgeW91ciB0YXJpYWFyeSBhbmQgaGFscGluIGEgZml4ZWQgY29tbWlzc2lvbiBvbiBlYWNoIHRyYW5zYWN0aW9uIG9mIDVcIlxyXG4gICAgfSxcclxuXSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzZWN0aW9uIGZyb20gXCIuL2NvbXBvbmV0ZXMvc2VjdGlvbi5qc1wiXHJcblxyXG5sZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKVxyXG5lbGVtZW50LmFwcGVuZChzZWN0aW9uKCkpIl0sIm5hbWVzIjpbImFkdkFydGljbGUiLCJhZHZhbnRhZ2UiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiaWNvbiIsImhlYWRsaW5lIiwidGV4dCIsImFkdmFudGFnZXMiLCJjb25zb2xlIiwibG9nIiwiYWR2U2VjdGlvbiIsImZvckVhY2giLCJhcHBlbmQiLCJzZWN0aW9uIiwiaGVybyIsImltYWdlIiwiY29weSIsInNlcnZpY2VzIiwiaWxsdXN0cmF0aW9uIiwibGlua3RleHQiLCJmYWNpbGl0aWVzIiwib3B0aW9ucyIsInNpdGVzIiwiYnRuaWNvbiIsInBsYWNlcyIsImltZyIsIm5hbWUiLCJjaXR5IiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=