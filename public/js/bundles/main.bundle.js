/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/app/controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/app/controller.js":
/*!*************************************!*\
  !*** ./public/js/app/controller.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./public/js/app/elements.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./public/js/app/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./public/js/app/view.js\");\n\n\n\n\n\n///// Controller\nconst CTRL = (function(MDL, VIEW) {\n\n    class Item {\n        constructor(type, value) {\n            this.type = type;\n            this.value = value;\n        }\n    }\n\n    const handleEquals = () => {\n        const items = MDL.parseExpression();\n        let totalValue;\n        switch(items.operator) {\n            case(\"+\"):\n                totalValue = items.numOne + items.numTwo;\n                break;\n            case(\"-\"):\n                totalValue = items.numOne - items.numTwo;\n                break;\n            case(\"x\"):\n                totalValue = items.numOne * items.numTwo; \n                break;\n            case(\"/\"):\n                totalValue = items.numOne / items.numTwo;\n                break;\n        }\n        const newItem = new Item(\"number\", totalValue);\n        MDL.clearExpression();\n        MDL.pushItem(newItem);\n        VIEW.appendDisplay();\n    };\n\n    const handleClear = () => {\n        MDL.clearExpression();\n        VIEW.clearDisplay();\n    };\n\n    const handleNumber = (event) => {\n        const value = event.target.getAttribute(\"number\");\n        const number = new Item(\"number\", value);\n        console.log(number);\n        MDL.pushItem(number);\n        console.log(JSON.stringify(MDL.getExpression(), null, 2));\n        VIEW.appendDisplay();\n    };\n    \n    const handleOperator = (event) => {\n        const value = event.target.getAttribute(\"operator\");\n        const operator = new Item(\"operator\", value);\n        console.log(operator);\n        MDL.pushItem(operator);\n        console.log(JSON.stringify(MDL.getExpression(), null, 2));\n        VIEW.appendDisplay();\n    };\n\n    return {\n        handleEquals,\n        handleClear,\n        handleNumber,\n        handleOperator,\n    };\n} (_model__WEBPACK_IMPORTED_MODULE_1__[\"MDL\"], _view__WEBPACK_IMPORTED_MODULE_2__[\"VIEW\"]) );\n\n\n\n///// Execution and Listeners\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].calcContainer.addEventListener(\"click\", (event) => {\n    if(event.target.matches(\".equals\")) { \n        CTRL.handleEquals();\n\n    } else if(event.target.matches(\".clear\")) { \n        CTRL.handleClear();\n\n    } else if(event.target.matches(\".num\")) {\n        CTRL.handleNumber(event);\n\n    } else if(event.target.matches(\".operator\")) {\n        CTRL.handleOperator(event);\n    }\n});\n\n//# sourceURL=webpack:///./public/js/app/controller.js?");

/***/ }),

/***/ "./public/js/app/elements.js":
/*!***********************************!*\
  !*** ./public/js/app/elements.js ***!
  \***********************************/
/*! exports provided: elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n\nconst elements = {\n    calcContainer: document.querySelector(\".calculator-container\"),\n    display: document.querySelector(\".display\"),\n};\n\n\n\n//# sourceURL=webpack:///./public/js/app/elements.js?");

/***/ }),

/***/ "./public/js/app/model.js":
/*!********************************!*\
  !*** ./public/js/app/model.js ***!
  \********************************/
/*! exports provided: MDL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDL\", function() { return MDL; });\n\n\n///// Model\nconst MDL = (function() {\n\n    let expressionArr = [];\n\n\n    const clearExpression = () => {\n        expressionArr = [];\n    };\n\n    const pushItem = (item) => {\n        expressionArr.push(item);\n    };\n\n    const getExpression = () => {\n        return expressionArr;\n    };\n\n    const parseExpression = () => {\n        let numOne = \"\";\n        let operator;\n        let numTwo = \"\";\n        \n        expressionArr.forEach((item) => {\n            if(item.type === \"number\" && !operator) {\n                numOne += item.value;\n            } else if(item.type === \"number\" && operator) {\n                numTwo += item.value;\n            } else {\n                operator = item.value;\n            }\n        });\n\n        return {\n            numOne: parseFloat(numOne),\n            numTwo: parseFloat(numTwo),\n            operator,\n        };\n    };\n\n    return {\n        clearExpression,\n        pushItem,\n        getExpression,\n        parseExpression,\n    };\n} () );\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/model.js?");

/***/ }),

/***/ "./public/js/app/view.js":
/*!*******************************!*\
  !*** ./public/js/app/view.js ***!
  \*******************************/
/*! exports provided: VIEW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VIEW\", function() { return VIEW; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./public/js/app/elements.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./public/js/app/model.js\");\n\n\n\n\n///// View\nconst VIEW = (function(MDL) {\n\n    const clearDisplay = () => {\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].display.innerHTML = \"\";\n    };\n\n    const appendDisplay = () => {\n        clearDisplay();\n\n        const items = MDL.parseExpression();\n        const expression = `${items.numOne || items.numOne === 0? items.numOne : \"\"} ${items.operator? items.operator : \"\"} ${items.numTwo || items.numTwo === 0? items.numTwo : \"\"}`;\n\n        let node = document.createElement(\"div\");\n        node.classList.add(\"expression\");\n        node.innerHTML = expression;\n        \n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].display.appendChild(node);\n    };\n\n    return {\n        clearDisplay,\n        appendDisplay,\n    };\n} (_model__WEBPACK_IMPORTED_MODULE_1__[\"MDL\"]) );\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/view.js?");

/***/ })

/******/ });