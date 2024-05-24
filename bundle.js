/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-image: url("https://static01.nyt.com/images/2024/02/27/well/23Well-fitness-data/23Well-fitness-data-superJumbo.jpg");
  margin: 0;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu Sans", sans-serif;
}

h2, span {
  color: #7f0283;
}

h3:hover {
  color: #f546e0;
}

.user-dash {
  height: 85%;
  width: 85%;
  background: rgba(245, 243, 243, 0.1);
  border-radius: 2rem;
  backdrop-filter: blur(4px);
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: 1fr 1fr;
  box-shadow: rgb(198, 6, 205) 0px 5px 10px;
  padding: 2rem;
  border-color: #7f0283;
}

.card-banner {
  grid-row: 1/2;
  grid-column: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 2rem;
  font-weight: bold;
  color: #fcfcf9;
  padding-right: 2rem;
}

.card {
  margin: 2rem;
  padding: 2rem;
  background: rgba(239, 90, 227, 0.1);
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(198, 6, 205) 0px 5px 10px;
  color: #ffffff;
}

.card1 {
  display: flex;
  flex-direction: column;
  grid-row: 2/10;
  grid-column: 1/2;
}

.user-card {
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  color: #ffffff;
  background: rgba(218, 125, 249, 0.1);
  border-radius: 2rem;
}

.moreInfoBttn {
  background-color: #7f0283;
  border: none;
  color: white;
  border-radius: 0.5rem;
  height: 2.5rem;
  width: 8rem;
  font-size: 1rem;
  text-align: center;
  line-height: 2.5rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

.moreInfoBttn:hover {
  background-color: #f546e0;
  cursor: pointer;
}

/* Widgets Box */
.card2 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  grid-row: 1/13;
  grid-column: 2/3;
  gap: 2rem;
  justify-items: center;
  align-items: center;
}

.widget {
  color: #ffffff;
  width: 90%;
  height: 90%;
  background: rgba(249, 247, 249, 0.1);
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,+HAAA;EACA,SAAA;EACA,UAAA;EACA,sBAAA;EACA,4BAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sCAAA;AACF;;AAEA;EACE,cAAA;AACF;;AACA;EACE,cAAA;AAEF;;AAAA;EACE,WAAA;EACA,UAAA;EACA,oCAAA;EACA,mBAAA;EACA,0BAAA;EACA,aAAA;EACA,mCAAA;EACA,8BAAA;EACA,yCAAA;EACA,aAAA;EACA,qBAAA;AAGF;;AADA;EACE,aAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,6BAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;AAIF;;AAFA;EACE,YAAA;EACA,aAAA;EACA,mCAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yCAAA;EACA,cAAA;AAKF;;AAHA;EACE,aAAA;EACA,sBAAA;EACA,cAAA;EACA,gBAAA;AAMF;;AAHA;EACE,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,oCAAA;EAEA,mBAAA;AAKF;;AAFA;EACE,yBAAA;EACA,YAAA;EACA,YAAA;EACA,qBAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;AAKF;;AAHA;EACE,yBAAA;EACA,eAAA;AAMF;;AAFA,gBAAA;AACA;EACE,aAAA;EACA,0BAAA;EACA,mCAAA;EACA,cAAA;EACA,gBAAA;EACA,SAAA;EACA,qBAAA;EACA,mBAAA;AAKF;;AAFA;EACE,cAAA;EACA,UAAA;EACA,WAAA;EACA,oCAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAKF","sourcesContent":["body {\n  background-image: url('https://static01.nyt.com/images/2024/02/27/well/23Well-fitness-data/23Well-fitness-data-superJumbo.jpg');\n  margin: 0;\n  padding: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Ubuntu Sans', sans-serif;\n}\n\nh2, span {\n  color: #7f0283;\n}\nh3:hover {\n  color: #f546e0;\n}\n.user-dash {\n  height: 85%;\n  width: 85%;\n  background: rgba(245, 243, 243, 0.1); \n  border-radius: 2rem;\n  backdrop-filter: blur(4px);\n  display: grid;\n  grid-template-rows: repeat(12, 1fr);\n  grid-template-columns: 1fr 1fr;\n  box-shadow: rgba(198, 6, 205, 1) 0px 5px 10px;\n  padding: 2rem;\n  border-color:#7f0283;\n}\n.card-banner {\n  grid-row: 1 / 2;\n  grid-column: 1/ 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  font-size: 2rem;\n  font-weight: bold;\n  color: #fcfcf9;\n  padding-right: 2rem; \n}\n.card {\n  margin: 2rem;\n  padding: 2rem;\n  background: rgba(239, 90, 227, 0.1); \n  border-radius: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: rgba(198, 6, 205, 1) 0px 5px 10px;\n  color: #ffffff;\n}\n.card1 {\n  display: flex;\n  flex-direction: column;\n  grid-row: 2 / 10;\n  grid-column: 1 / 2;\n}\n\n.user-card {\n  display: flex;\n  align-items: start;\n  justify-content: start;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  color: #ffffff;\n  background: rgba(218, 125, 249, 0.1); \n\n  border-radius: 2rem;\n}\n\n.moreInfoBttn {\n  background-color:#7f0283 ;\n  border: none;\n  color: white;\n  border-radius: 0.5rem;\n  height: 2.5rem;\n  width: 8rem;\n  font-size: 1rem;\n  text-align: center;\n  line-height: 2.5rem;\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n}\n.moreInfoBttn:hover {\n  background-color: #f546e0;\n  cursor: pointer;\n}\n\n\n/* Widgets Box */\n.card2 {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(4, auto);\n  grid-row: 1 / 13;\n  grid-column: 2 / 3;\n  gap: 2rem;\n  justify-items: center; \n  align-items: center;\n}\n\n.widget {\n  color: #ffffff; \n  width: 90%; \n  height: 90%; \n  background: rgba(249, 247, 249, 0.1); \n  border-radius: 2rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayUserInfo),
/* harmony export */   displayHydroData: () => (/* binding */ displayHydroData),
/* harmony export */   displaySleepData: () => (/* binding */ displaySleepData)
/* harmony export */ });
/* harmony import */ var _userDataFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _hydrationDataFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
// imports




// Query selectors
var userCard = document.querySelector(".card1");
var welcomeUser = document.querySelector(".card-banner");
var widgetBox = document.querySelector(".card2");

var isAllUserInfoDisplayed = false;

// Functions
function displayUserInfo(user, userData) {
  welcomeUser.innerHTML = `<h3> Welcome,<span> ${user.name.split(" ")[0]}!</span>`;
  checkIfDisplayed(user, userData);
}

function checkIfDisplayed(user, userData) {
  userCard.innerHTML = "";
  if (isAllUserInfoDisplayed) {
    const friends = (0,_userDataFunctions_js__WEBPACK_IMPORTED_MODULE_0__.findFriends)(user, userData);
    const friendsNames = friends.map((friend) => friend.name).join(", ");
    userCard.innerHTML = `
      <section class='user-card'>
      <h2>User Profile</h2>
      <div>
        <h3><span>User id:</span> #${user.id}</h3> 
        <h3><span>Full name:</span> ${user.name}</h3>
        <h3><span>Email:</span> ${user.email}</h3>
        <h3><span>Address:</span> ${user.address}</h3>
        <h3><span>Friends:</span> ${friendsNames}</h3>
        <h3><span>Daily Step Goal:</span> ${user.dailyStepGoal}</h3>
        <h3><span>Stride Length:</span> ${user.strideLength}</h3>
        <button class='moreInfoBttn'>Hide</button>
      </div>
      </section>
    `;
  } else {
    userCard.innerHTML = `
      <section class='user-card'> 
        <div>
          <h3><span>${user.name.split(" ")[0]}'s</span> daily step goal is <span>${user.dailyStepGoal} </span>steps</h3>
          <h3>The <span>average</span> step goal is <span>${_userDataFunctions_js__WEBPACK_IMPORTED_MODULE_0__.userSteps}</span></h3>
        </div>
        <button class='moreInfoBttn'>More User Info</button>
      </section>
    `;
  }
  var infoBttn = document.querySelector(".moreInfoBttn");
  infoBttn.addEventListener("click", () => toggleUserInfo(user, userData));
}

function toggleUserInfo(user, userData) {
  isAllUserInfoDisplayed = !isAllUserInfoDisplayed;
  checkIfDisplayed(user, userData);
}

function displayHydroData(date, weekOfHydro, usersOunces, ouncesByDate) {
  widgetBox.innerHTML = `
    <div class='widget widget1'>
    <h2>Hydro Stats</h2>  
    <div>
      <h3>You drank <span>${ouncesByDate}oz</span> of water today.</h3>
      <h3><span>Average</span> ounces of water consumed: <span>${usersOunces}</span></h3>
      <h3><span>Water consumption</span> last week: <span>${weekOfHydro.map((day) => day.numOunces).join(", ")}</span></h3>
      </div>
    </div>`;
}

function displaySleepData(
  avgSleepHours,
  avgSleepQuality,
  sleepHoursByDay,
  sleepQualityByDay,
  hoursSleptThisWeek,
  sleepQualityByWeek
) {
  widgetBox.innerHTML += `
  <div class='widget widget2'>
    <h2>Sleep Stats</h2>
    <div>
      <h3>You've slept <span>${Math.round(sleepHoursByDay)}</span> hours last night</h3>
      <h3>Last night's <span>sleep quality</span> was <span>${sleepQualityByDay}</span>/5</h3>
      <h3><span>Average</span> Hours of sleep per week ${Math.round(avgSleepHours)} </h3>
      <h3><span>Average</span> sleep quality: <span>${avgSleepQuality.toFixed(2)}</span> </h3>
      <h3><span>Hours slept</span> this week: <span>${hoursSleptThisWeek.map((day) => Math.round(day.hoursSlept)).join(", ")}</span> </h3>
      <h3><span>Sleep quality</span> this Week: <span>${sleepQualityByWeek.map((day) => day.sleepQuality).join(", ")}</span></h3>
    </div>
  </div>`;
}


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   avgSteps: () => (/* binding */ avgSteps),
/* harmony export */   findFriends: () => (/* binding */ findFriends),
/* harmony export */   getLoggedInUser: () => (/* binding */ getLoggedInUser),
/* harmony export */   getRandomIndex: () => (/* binding */ getRandomIndex),
/* harmony export */   getUserDataById: () => (/* binding */ getUserDataById),
/* harmony export */   loggedInUser: () => (/* binding */ loggedInUser),
/* harmony export */   randomUser: () => (/* binding */ randomUser),
/* harmony export */   setLoggedInUser: () => (/* binding */ setLoggedInUser),
/* harmony export */   setUserData: () => (/* binding */ setUserData),
/* harmony export */   userSteps: () => (/* binding */ userSteps)
/* harmony export */ });
let newUserData = [];
let userSteps = 0;
let randomUser = {};
let loggedInUser = {};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function getUserDataById(userID, userDataArray) {
  return userDataArray.find((user) => user.id === userID);
}
function avgSteps(userDataArray) {
  return userDataArray.reduce((acc, user) => {
    return acc + user.dailyStepGoal / userDataArray.length;
  }, 0);
}
function setLoggedInUser(userID) {
  loggedInUser = getUserDataById(userID, newUserData);
}
function getLoggedInUser() {
  return loggedInUser;
}
function setUserData(data) {
  newUserData = data;
  userSteps = avgSteps(data);
}
function findFriends(user, userDataArray) {
  return user.friends.map((friendID) => {
    return userDataArray.find((userP) => userP.id === friendID);
  });
}




/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHydrationData: () => (/* binding */ getHydrationData),
/* harmony export */   setHydroData: () => (/* binding */ setHydroData),
/* harmony export */   specificOuncesByDay: () => (/* binding */ specificOuncesByDay),
/* harmony export */   weekOfHydroData: () => (/* binding */ weekOfHydroData)
/* harmony export */ });
let newHydroData = [];

function getHydrationData(user, hydroArray) {
  const userHydroData = hydroArray.filter((userP) => userP.userID === user.id);
  const totalOunces = userHydroData.reduce(
    (total, day) => total + day.numOunces,
    0
  );
  return totalOunces / userHydroData.length;
}
function specificOuncesByDay(date, hydroArray, user) {
  const userHydroData = hydroArray.filter((userP) => userP.userID === user.id);
  const specificDate = userHydroData.find((day) => day.date === date);
  return specificDate ? specificDate.numOunces : 0;
}
function weekOfHydroData(user, hydroArray) {
  const userHydroData = hydroArray.filter((userP) => userP.userID === user.id);
  return userHydroData.slice(-7).reverse();
}
function setHydroData(data) {
  newHydroData = data;
}

// exports



/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchActivityData: () => (/* binding */ fetchActivityData),
/* harmony export */   fetchHydrationData: () => (/* binding */ fetchHydrationData),
/* harmony export */   fetchSleepData: () => (/* binding */ fetchSleepData),
/* harmony export */   fetchUserData: () => (/* binding */ fetchUserData)
/* harmony export */ });
function fetchUserData() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data.users;
    });
}

function fetchHydrationData() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data.hydrationData;
    });
}

function fetchSleepData() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data.sleepData;
    });
}

function fetchActivityData() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data.activityData;
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fetchUserData,
  fetchHydrationData,
  fetchSleepData,
  fetchActivityData,
});


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAverageSleepHours: () => (/* binding */ getAverageSleepHours),
/* harmony export */   getAverageSleepQuality: () => (/* binding */ getAverageSleepQuality),
/* harmony export */   setSleepData: () => (/* binding */ setSleepData),
/* harmony export */   sleepHoursForWeek: () => (/* binding */ sleepHoursForWeek),
/* harmony export */   sleepQualityForWeek: () => (/* binding */ sleepQualityForWeek),
/* harmony export */   specificSleepHoursByDay: () => (/* binding */ specificSleepHoursByDay),
/* harmony export */   specificSleepQualityByDay: () => (/* binding */ specificSleepQualityByDay)
/* harmony export */ });
// global variables
let newSleepData = [];

function getAverageSleepHours(user, sleepArray) {
  const userSleepData = sleepArray.filter((userP) => userP.userID === user.id);
  const totalHours = userSleepData.reduce(
    (total, day) => total + day.hoursSlept,
    0
  );
  return totalHours / userSleepData.length;
}

function getAverageSleepQuality(user, sleepArray) {
  const userSleepData = sleepArray.filter((userP) => userP.userID === user.id);
  const totalQuality = userSleepData.reduce(
    (total, day) => total + day.sleepQuality,
    0
  );
  return totalQuality / userSleepData.length;
}

function specificSleepHoursByDay(date, sleepArray, user) {
  const userSleepData = sleepArray.filter((userP) => userP.userID === user.id);
  const specificDate = userSleepData.find((day) => day.date === date);
  return specificDate ? specificDate.hoursSlept : 0;
}

function specificSleepQualityByDay(date, sleepArray, user) {
  const userSleepData = sleepArray.filter((entry) => entry.userID === user.id);
  const specificDate = userSleepData.find((day) => day.date === date);
  return specificDate ? specificDate.sleepQuality : 0;
}

function sleepHoursForWeek(user, sleepArray, startDate) {
  const userSleepData = sleepArray.filter((entry) => entry.userID === user.id);
  const start = new Date(startDate);
  const end = new Date(startDate);
  end.setDate(start.getDate() + 6);

  const sleepDataForWeek = userSleepData.filter((entry) => {
    const entryDate = new Date(entry.date);
    return entryDate >= start && entryDate <= end;
  });

  return sleepDataForWeek.map((entry) => ({
    date: entry.date,
    hoursSlept: entry.hoursSlept,
  }));
}

function sleepQualityForWeek(user, sleepArray, startDate) {
  const userSleepData = sleepArray.filter((entry) => entry.userID === user.id);
  const start = new Date(startDate);
  const end = new Date(startDate);
  end.setDate(start.getDate() + 6);

  const sleepDataForWeek = userSleepData.filter((entry) => {
    const entryDate = new Date(entry.date);
    return entryDate >= start && entryDate <= end;
  });

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    weekDates.push(date.toISOString().split("T")[0].replace(/-/g, "/"));
  }

  return weekDates.map((date) => {
    const dayData = sleepDataForWeek.find((entry) => entry.date === date);
    return {
      date,
      sleepQuality: dayData ? dayData.sleepQuality : 0,
    };
  });
}

function setSleepData(data) {
  newSleepData = data;
}




/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoggedInUser: () => (/* reexport safe */ _userDataFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getLoggedInUser)
/* harmony export */ });
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _apiCalls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _userDataFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _hydrationDataFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _sleepDataFunctions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
// imports









// Global variables
let userData = [];
let hydroData = [];
let sleepData = [];
let activityData = [];
let userSteps = 0;

function fetchAllData() {
  return (0,_apiCalls_js__WEBPACK_IMPORTED_MODULE_2__.fetchUserData)()
    .then((userDataResult) => {
      initializeUserData(userDataResult);
      return (0,_apiCalls_js__WEBPACK_IMPORTED_MODULE_2__.fetchHydrationData)();
    })
    .then((hydrationDataResult) => {
      const hydrationData = initializeHydrationData(hydrationDataResult);
      console.log(hydrationData);
      const loggedInUser = (0,_userDataFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getLoggedInUser)();
      (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"])(loggedInUser, userData);

      const date = "2023/07/01";
      const ouncesByDate = hydrationData.ouncesByDate;
      const usersOunces = hydrationData.usersOunces;
      const weekOfHydro = hydrationData.weekOfHydro;
      (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_1__.displayHydroData)(date, weekOfHydro, usersOunces, ouncesByDate);
      return (0,_apiCalls_js__WEBPACK_IMPORTED_MODULE_2__.fetchSleepData)();
    })
    .then((sleepDataResult) => {
      console.log("Fetched Sleep Data:", sleepDataResult);
      const fetchedSleepData = initializeSleepData(sleepDataResult);
      console.log("Sleep data initialized:", fetchedSleepData);

      const avgSleepHours = fetchedSleepData.avgSleepHours;
      const avgSleepQuality = fetchedSleepData.avgSleepQuality;
      const sleepHoursByDay = fetchedSleepData.sleepHoursByDay;
      const hoursSleptThisWeek = fetchedSleepData.hoursSleptThisWeek;
      const sleepQualityByDay = fetchedSleepData.sleepQualityByDay;
      const sleepQualityByWeek = fetchedSleepData.sleepQualityByWeek;
      console.log(sleepQualityByWeek);

      (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_1__.displaySleepData)(
        avgSleepHours,
        avgSleepQuality,
        sleepHoursByDay,
        sleepQualityByDay,
        hoursSleptThisWeek,
        sleepQualityByWeek
      );
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}

// functions
function initializeUserData(data) {
  userData = data;
  (0,_userDataFunctions_js__WEBPACK_IMPORTED_MODULE_3__.setUserData)(data);
  userSteps = (0,_userDataFunctions_js__WEBPACK_IMPORTED_MODULE_3__.avgSteps)(userData);
  const randomUser = (0,_userDataFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getUserDataById)((0,_userDataFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getRandomIndex)(userData), userData);
  (0,_userDataFunctions_js__WEBPACK_IMPORTED_MODULE_3__.setLoggedInUser)(randomUser.id);
}

function initializeHydrationData(data) {
  hydroData = data;
  (0,_hydrationDataFunctions_js__WEBPACK_IMPORTED_MODULE_4__.setHydroData)(data);
  const loggedInUser = (0,_userDataFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getLoggedInUser)();
  const weekOfHydro = (0,_hydrationDataFunctions_js__WEBPACK_IMPORTED_MODULE_4__.weekOfHydroData)(loggedInUser, hydroData);
  const usersOunces = (0,_hydrationDataFunctions_js__WEBPACK_IMPORTED_MODULE_4__.getHydrationData)(loggedInUser, hydroData);
  const ouncesByDate = (0,_hydrationDataFunctions_js__WEBPACK_IMPORTED_MODULE_4__.specificOuncesByDay)(
    "2023/07/01",
    hydroData,
    loggedInUser
  );
  return { weekOfHydro, usersOunces, ouncesByDate };
}

function initializeSleepData(data) {
  sleepData = data;
  (0,_sleepDataFunctions_js__WEBPACK_IMPORTED_MODULE_5__.setSleepData)(data);
  const loggedInUser = (0,_userDataFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getLoggedInUser)();
  const avgSleepHours = (0,_sleepDataFunctions_js__WEBPACK_IMPORTED_MODULE_5__.getAverageSleepHours)(loggedInUser, sleepData);
  const avgSleepQuality = (0,_sleepDataFunctions_js__WEBPACK_IMPORTED_MODULE_5__.getAverageSleepQuality)(loggedInUser, sleepData);
  const sleepHoursByDay = (0,_sleepDataFunctions_js__WEBPACK_IMPORTED_MODULE_5__.specificSleepHoursByDay)(
    "2023/07/01",
    sleepData,
    loggedInUser
  );
  const sleepQualityByDay = (0,_sleepDataFunctions_js__WEBPACK_IMPORTED_MODULE_5__.specificSleepQualityByDay)(
    "2023/07/01",
    sleepData,
    loggedInUser
  );
  const hoursSleptThisWeek = (0,_sleepDataFunctions_js__WEBPACK_IMPORTED_MODULE_5__.sleepHoursForWeek)(
    loggedInUser,
    sleepData,
    "2023/05/26"
  );
  const sleepQualityByWeek = (0,_sleepDataFunctions_js__WEBPACK_IMPORTED_MODULE_5__.sleepQualityForWeek)(
    loggedInUser,
    sleepData,
    "2023/05/26"
  );
  return {
    avgSleepHours,
    avgSleepQuality,
    sleepHoursByDay,
    sleepQualityByDay,
    hoursSleptThisWeek,
    sleepQualityByWeek,
  };
}

fetchAllData();


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map