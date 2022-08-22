/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Article */ \"./src/js/Article.js\");\n/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/data */ \"./src/js/data.js\");\nconst tagsWrapper = document.querySelector('.strategies__tags');\nconst tags = tagsWrapper.querySelectorAll('.tag');\nconst strategiesWrapper = document.querySelector('.strategy-wrapper');\nconst strategies = strategiesWrapper.querySelectorAll('.strategy');\n\n\n\n\n\nwindow.onload = function () {\n    console.log('I am loaded');\n    // Render data\n    if (_js_data__WEBPACK_IMPORTED_MODULE_1__.data) {\n        renderArticlesToDom();\n    }\n\n    // Tags\n    addTagsClickHandler();\n}\n\nconst addTagsClickHandler = () => {\n    tagsWrapper.addEventListener('click', (evt) => {\n        console.log(evt);\n        if (evt.target.classList.contains('tag')) {\n            let clickedTag = evt.target;\n            removeSelectedTags();\n            selectClickedTag(clickedTag);\n\n            if (clickedTag.innerHTML === 'All') {\n                showAllStrategies();\n            } else {\n                filterStrategiesBySelectedTag(clickedTag.innerHTML);\n            }\n        }\n    })\n}\n\nconst removeSelectedTags = () => {\n    tags.forEach(tag => {\n        tag.classList.remove('tag_selected');\n        tag.classList.add('tag_bordered');\n    })\n}\n\nconst selectClickedTag = (clickedTag) => {\n    clickedTag.classList.remove('tag_bordered');\n    clickedTag.classList.add('tag_selected');\n}\n\nconst showAllStrategies = () => {\n    strategies.forEach(strategy => {\n        strategy.classList.remove('strategy_hidden');\n    })\n}\n\nconst filterStrategiesBySelectedTag = (selectedTag) => {\n    console.log(strategies);\n    strategies.forEach(strategy => {\n        let tags = strategy.querySelectorAll('.tag');\n        strategy.classList.add('strategy_hidden');\n        tags.forEach(tag => {\n            if (tag.innerHTML === selectedTag) {\n                strategy.classList.remove('strategy_hidden');\n            }\n        })\n    })\n}\n\nconst renderArticlesToDom = () => {\n    let strategiesContainer = getStrategiesContainer();\n    generateArticle(_js_data__WEBPACK_IMPORTED_MODULE_1__.data).forEach(article => {\n        strategiesContainer.append(article.getTemplate());\n    })\n}\n\nconst getStrategiesContainer = () => {\n    strategiesWrapper.innerHTML = '';\n    return strategiesWrapper;\n}\n\nconst generateArticle = (data) => {\n    let articles = [];\n\n    data.forEach(article => {\n        articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_0__.Article(article));\n    })\n\n    return articles;\n}\n\n//# sourceURL=webpack://be-productive/./src/index.js?");

/***/ }),

/***/ "./src/js/Article.js":
/*!***************************!*\
  !*** ./src/js/Article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Article\": () => (/* binding */ Article)\n/* harmony export */ });\nclass Article {\n    constructor({id, title, urlToImage, tags, ...rest}) {\n        this.id = id;\n        this.title = title;\n        this.url = urlToImage;\n        this.tags = tags;\n    }\n\n    // Article generator\n    getTemplate() {\n        let template = '';\n        let article = document.createElement('article');\n\n        article.className = 'strategy block-shadowed';\n        article.setAttribute('data-id', this.id)\n\n        if (this.url) {\n            template += `<img class=\"strategy__image\" src=${this.url} alt=\"strategy\">`\n        }\n\n        if (this.title || this.tags) {\n            template += `<div class=\"strategy__content\">`;\n\n            if (this.title) {\n                template += `<h3 class=\"strategy__title\">${this.title}</h3>`\n            }\n\n            if (this.tags) {\n                template += `<div class=\"strategy__tags tags\">`;\n\n                this.tags.map(tag => {\n                    template += `<span class=\"tag tag_colored\">${tag}</span>`\n                })\n            }\n\n            template += `</div>`;\n        }\n\n        article.innerHTML = template;\n        return article;\n    }\n}\n\n//# sourceURL=webpack://be-productive/./src/js/Article.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = [\n    {\n        id: 1,\n        title: 'Increasing Prosperity With Positive Thinking',\n        urlToImage: './src/img/strategies/1.jpg',\n        tags: ['Art', 'Design'],\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\n        date: '01.01.2020'\n    },\n    {\n        id: 2,\n        title: 'Success Steps For Your Personal Or Business Life',\n        urlToImage: './src/img/strategies/3.jpg',\n        tags: ['Culture', 'Design', 'Art'],\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\n        date: '01.01.2020'\n    },\n    {\n        id: 3,\n        title: 'Motivation Is The First Step To Success',\n        urlToImage: './src/img/strategies/2.jpg',\n        tags: ['Culture'],\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\n        date: '01.01.2020'\n    },\n    {\n        id: 4,\n        title: 'Success Steps For Your Personal Or Business Life',\n        urlToImage: './src/img/strategies/3.jpg',\n        tags: ['Culture', 'Design', 'Art'],\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\n        date: '01.01.2020'\n    },\n    {\n        id: 5,\n        title: 'Motivation Is The First Step To Success',\n        urlToImage: './src/img/strategies/2.jpg',\n        tags: ['Culture'],\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\n        date: '01.01.2020'\n    },\n    {\n        id: 6,\n        title: 'Increasing Prosperity With Positive Thinking',\n        urlToImage: './src/img/strategies/1.jpg',\n        tags: ['Art', 'Design'],\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\n        date: '01.01.2020'\n    }\n];\n\n\n// <article className=\"strategy block-shadowed\">\n//     <img className=\"strategy__image\" src=\"src/img/strategies/1.jpg\" alt=\"strategy\">\n//         <div className=\"strategy__content\">\n//             <h3 className=\"strategy__title\">Increasing Prosperity With Positive Thinking</h3>\n//             <div className=\"strategy__tags tags\">\n//                 <span className=\"tag tag_colored\">Art</span>\n//                 <span className=\"tag tag_colored\">Design</span>\n//             </div>\n//         </div>\n// </article>\n// <article className=\"strategy block-shadowed\">\n//     <img className=\"strategy__image\" src=\"src/img/strategies/2.jpg\" alt=\"strategy\">\n//         <div className=\"strategy__content\">\n//             <h3 className=\"strategy__title\">Motivation Is The First Step To Success</h3>\n//             <div className=\"strategy__tags tags\">\n//                 <span className=\"tag tag_colored\">Culture</span>\n//             </div>\n//         </div>\n// </article>\n// <article className=\"strategy block-shadowed\">\n//     <img className=\"strategy__image\" src=\"src/img/strategies/3.jpg\" alt=\"strategy\">\n//         <div className=\"strategy__content\">\n//             <h3 className=\"strategy__title\">Success Steps For Your Personal Or Business Life</h3>\n//             <div className=\"strategy__tags tags\">\n//                 <span className=\"tag tag_colored\">Culture</span>\n//                 <span className=\"tag tag_colored\">Design</span>\n//                 <span className=\"tag tag_colored\">Art</span>\n//             </div>\n//         </div>\n// </article>\n// <article className=\"strategy strategy_wide block-shadowed\">\n//     <img className=\"strategy__image\" src=\"src/img/strategies/4.jpg\" alt=\"strategy\">\n//         <div className=\"strategy__content\">\n//             <h3 className=\"strategy__title\">Success Steps For Your Personal Or Business Life Plus Funny Image on the\n//                 Back</h3>\n//             <div className=\"strategy__tags tags\">\n//                 <span className=\"tag tag_colored\">Culture</span>\n//                 <span className=\"tag tag_colored\">Design</span>\n//                 <span className=\"tag tag_colored\">Art</span>\n//             </div>\n//         </div>\n// </article>\n// <article className=\"strategy block-shadowed\">\n//     <img className=\"strategy__image\" src=\"src/img/strategies/5.jpg\" alt=\"strategy\">\n//         <div className=\"strategy__content\">\n//             <h3 className=\"strategy__title\">Increasing Prosperity With Positive Thinking</h3>\n//             <div className=\"strategy__tags tags\">\n//                 <span className=\"tag tag_colored\">Design</span>\n//             </div>\n//         </div>\n// </article>\n// <article className=\"strategy block-shadowed\">\n//     <img className=\"strategy__image\" src=\"src/img/strategies/1.jpg\" alt=\"strategy\">\n//         <div className=\"strategy__content\">\n//             <h3 className=\"strategy__title\">Increasing Prosperity With Positive Thinking</h3>\n//             <div className=\"strategy__tags tags\">\n//                 <span className=\"tag tag_colored\">Art</span>\n//                 <span className=\"tag tag_colored\">Design</span>\n//             </div>\n//         </div>\n// </article>\n// <article className=\"strategy block-shadowed\">\n//     <img className=\"strategy__image\" src=\"src/img/strategies/2.jpg\" alt=\"strategy\">\n//         <div className=\"strategy__content\">\n//             <h3 className=\"strategy__title\">Motivation Is The First Step To Success</h3>\n//             <div className=\"strategy__tags tags\">\n//                 <span className=\"tag tag_colored\">Culture</span>\n//             </div>\n//         </div>\n// </article>\n// <article className=\"strategy block-shadowed\">\n//     <img className=\"strategy__image\" src=\"src/img/strategies/3.jpg\" alt=\"strategy\">\n//         <div className=\"strategy__content\">\n//             <h3 className=\"strategy__title\">Success Steps For Your Personal Or Business Life</h3>\n//             <div className=\"strategy__tags tags\">\n//                 <span className=\"tag tag_colored\">Culture</span>\n//                 <span className=\"tag tag_colored\">Design</span>\n//                 <span className=\"tag tag_colored\">Art</span>\n//             </div>\n//         </div>\n// </article>\n\n//# sourceURL=webpack://be-productive/./src/js/data.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;