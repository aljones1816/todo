/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/projectsStyles.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/projectsStyles.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n.hidden {\n  display: none;\n}\n\n.visible {\n  display: flex;\n}\n\n.main-nav {\n  grid-area: navbar;\n}\n\n.content-list {\n  grid-area: content-list;\n}\n\n.content-area {\n  grid-area: content-area;\n}\n\n.wrapper {\n  display: grid;\n  gap: 20px;\n  grid-template-areas:\n    \"navbar\"\n    \"content-list\"\n    \"content-area\"\n}\n\n@media only screen and (min-width: 960px) {\n  .hidden {\n    display: flex;\n  }\n\n  #navbar {\n    display: none;\n  }\n  \n.wrapper {\n  grid-template-columns: 1fr 3fr;\n  grid-template-areas:\n    \"content-list content-area\"\n    \"content-list content-area\"\n}\n\n}\n\n  ", "",{"version":3,"sources":["webpack://./src/projectsStyles.css"],"names":[],"mappings":";;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,SAAS;EACT;;;;AAIF;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;AAEF;EACE,8BAA8B;EAC9B;;;AAGF;;AAEA","sourcesContent":["\n\n.hidden {\n  display: none;\n}\n\n.visible {\n  display: flex;\n}\n\n.main-nav {\n  grid-area: navbar;\n}\n\n.content-list {\n  grid-area: content-list;\n}\n\n.content-area {\n  grid-area: content-area;\n}\n\n.wrapper {\n  display: grid;\n  gap: 20px;\n  grid-template-areas:\n    \"navbar\"\n    \"content-list\"\n    \"content-area\"\n}\n\n@media only screen and (min-width: 960px) {\n  .hidden {\n    display: flex;\n  }\n\n  #navbar {\n    display: none;\n  }\n  \n.wrapper {\n  grid-template-columns: 1fr 3fr;\n  grid-template-areas:\n    \"content-list content-area\"\n    \"content-list content-area\"\n}\n\n}\n\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/projectsStyles.css":
/*!********************************!*\
  !*** ./src/projectsStyles.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projectsStyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./projectsStyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/projectsStyles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projectsStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projectsStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projectsStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projectsStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
  } // For old IE

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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/appLogic.ts":
/*!*************************!*\
  !*** ./src/appLogic.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createToDo = exports.createProject = exports.fetchData = exports.toggleProjectMenu = exports.putData = void 0;
function fetchData(schema) {
    var fetchedData = JSON.parse(window.localStorage.getItem(schema) || '[]');
    console.log('the data I just fetched is:', fetchedData);
    if (schema === 'projects' && fetchedData.length != 0) {
        return fetchedData.map(function (project) { return createProject(project.title, project.projectID, project.ToDos); });
    }
    else
        return fetchedData;
}
exports.fetchData = fetchData;
function putData(schema, newData) {
    var currentdata = fetchData(schema);
    currentdata.push(newData);
    window.localStorage.setItem(schema, JSON.stringify(currentdata));
}
exports.putData = putData;
function createProject(title, projectID, ToDos) {
    title;
    projectID;
    ToDos;
    function addToDo(title, description, dueDate, priority, projectID, ToDoID) {
        var newToDo = createToDo(title, description, dueDate, priority, projectID, ToDoID);
        ToDos.push(newToDo);
    }
    function DeleteToDo(ToDoID) {
        var index = ToDos.findIndex(function (ToDo) {
            return ToDo.ToDoID === ToDoID;
        });
        ToDos.splice(index, 1);
    }
    return { title: title, projectID: projectID, ToDos: ToDos, addToDo: addToDo, DeleteToDo: DeleteToDo };
}
exports.createProject = createProject;
function createToDo(ToDoID, title, description, dueDate, priority, projectID, status) {
    if (status === void 0) { status = 'todo'; }
    title;
    description;
    dueDate;
    priority;
    projectID;
    status;
    ToDoID;
    return { ToDoID: ToDoID, title: title, description: description, dueDate: dueDate, priority: priority, projectID: projectID, status: status };
}
exports.createToDo = createToDo;
;
function toggleProjectMenu() {
    var projectList = document.getElementById("projects");
    if (projectList.classList.contains('hidden')) {
        projectList.classList.remove('hidden');
        projectList.classList.add('visible');
    }
    else {
        projectList.classList.remove('visible');
        projectList.classList.add('hidden');
    }
}
exports.toggleProjectMenu = toggleProjectMenu;


/***/ }),

/***/ "./src/domUpdater.ts":
/*!***************************!*\
  !*** ./src/domUpdater.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderNewToDoButton = exports.renderProjects = exports.renderNav = exports.rendertodolist = exports.renderNewToDoForm = void 0;
function rendertodolist(projectArray, projectID) {
    //filter project array to only include project with id = projectID
    var projects = projectArray.filter(function (project) { return project.projectID === projectID; });
    console.log("the data I fetched is:", projectArray);
    console.log("the projects are:", projects);
    var content = document.getElementById('content');
    projects.map(function (project) {
        project.ToDos.map(function (todo) {
            var todohtml = generateToDoHTML(todo);
            content.innerHTML += todohtml;
        });
    });
}
exports.rendertodolist = rendertodolist;
function generateToDoHTML(todoObject) {
    var todohtml = "\n    <div class=\"todo\" id=\"".concat(todoObject.ToDoID, "\">\n        <p>").concat(todoObject.title, "</p>\n        <p>").concat(todoObject.dueDate, "</p>\n        <p>").concat(todoObject.status, "</p>\n    </div>\n    ");
    return todohtml;
}
function renderNav() {
    var content = document.getElementById('navbar');
    var navHtml = "\n        <div class=navbar>\n        <svg id = \"menuBar\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-5 -7 24 24\" width=\"24\" fill=\"currentColor\"><path d=\"M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z\"></path></svg>\n        </div>\n    ";
    content.innerHTML += navHtml;
}
exports.renderNav = renderNav;
function renderProjects(projectsList) {
    var content = document.getElementById('projects');
    var projects = document.createElement('ul');
    content.appendChild(projects);
    // we check if list is null in index so assume not null
    projectsList.map(function (project) {
        var projectHTML = "\n        <li id=\"".concat(project.projectID, "\">").concat(project.title, "</li>\n        ");
        projects.innerHTML += projectHTML;
    });
}
exports.renderProjects = renderProjects;
function renderNewToDoButton() {
    var content = document.getElementById('content');
    var buttonHTML = "\n    <svg id = \"newtodo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-2 -2 24 24\" width=\"24\" fill=\"currentColor\"><path d=\"M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-7v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2h-4z\"></path></svg>\n    ";
    content.innerHTML += buttonHTML;
}
exports.renderNewToDoButton = renderNewToDoButton;
var renderNewToDoForm = function () {
    var content = document.getElementById('content');
    var formHTML = "\n    <div class=\"newtodoform\">\n        <form id=\"newtodoform\">\n            <label for=\"title\">Title</label>\n            <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Title\">\n            <label for=\"duedate\">Due Date</label>\n            <input type=\"date\" id=\"duedate\" name=\"duedate\">\n            <label for=\"status\">Status</label>\n            <select id=\"status\" name=\"status\">\n                <option value=\"todo\">To Do</option>\n                <option value=\"inprogress\">In Progress</option>\n                <option value=\"done\">Done</option>\n            </select>\n            <button id=\"submitNewToDo\" type=\"submit\">Submit</button>\n        </form>\n    </div>\n    ";
    content.innerHTML += formHTML;
};
exports.renderNewToDoForm = renderNewToDoForm;


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var domUpdater_1 = __webpack_require__(/*! ./domUpdater */ "./src/domUpdater.ts");
var appLogic_1 = __webpack_require__(/*! ./appLogic */ "./src/appLogic.ts");
__webpack_require__(/*! ../../../../src/projectsStyles.css */ "./src/projectsStyles.css");
var appLogic_2 = __webpack_require__(/*! ./appLogic */ "./src/appLogic.ts");
function initalizeApp() {
    // render the navbar
    (0, domUpdater_1.renderNav)();
    var currentProjects = (0, appLogic_2.fetchData)("projects");
    (0, domUpdater_1.renderProjects)(currentProjects);
    (0, domUpdater_1.rendertodolist)(currentProjects, 'three');
    document.getElementById("menuBar").addEventListener("click", function () {
        (0, appLogic_1.toggleProjectMenu)();
    });
    (0, domUpdater_1.renderNewToDoButton)();
    document.getElementById("newtodo").addEventListener("click", function () {
        (0, domUpdater_1.renderNewToDoForm)();
    });
}
initalizeApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsdURBQXVELGtCQUFrQixHQUFHLGNBQWMsa0JBQWtCLEdBQUcsZUFBZSxzQkFBc0IsR0FBRyxtQkFBbUIsNEJBQTRCLEdBQUcsbUJBQW1CLDRCQUE0QixHQUFHLGNBQWMsa0JBQWtCLGNBQWMsdUZBQXVGLCtDQUErQyxhQUFhLG9CQUFvQixLQUFLLGVBQWUsb0JBQW9CLEtBQUssZ0JBQWdCLG1DQUFtQyxpR0FBaUcsS0FBSyxhQUFhLHNGQUFzRixLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxNQUFNLHNDQUFzQyxrQkFBa0IsR0FBRyxjQUFjLGtCQUFrQixHQUFHLGVBQWUsc0JBQXNCLEdBQUcsbUJBQW1CLDRCQUE0QixHQUFHLG1CQUFtQiw0QkFBNEIsR0FBRyxjQUFjLGtCQUFrQixjQUFjLHVGQUF1RiwrQ0FBK0MsYUFBYSxvQkFBb0IsS0FBSyxlQUFlLG9CQUFvQixLQUFLLGdCQUFnQixtQ0FBbUMsaUdBQWlHLEtBQUsseUJBQXlCO0FBQzluRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRHO0FBQzVHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsK0ZBQU87Ozs7QUFJc0Q7QUFDOUUsT0FBTyxpRUFBZSwrRkFBTyxJQUFJLHNHQUFjLEdBQUcsc0dBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDS0EsU0FBUyxTQUFTLENBQUMsTUFBYztJQUM3QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEQsSUFBSSxNQUFNLEtBQUssVUFBVSxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ2xELE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQWdCLElBQUssb0JBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUE5RCxDQUE4RCxDQUFDLENBQUM7S0FDaEg7O1FBQU0sT0FBTyxXQUFXLENBQUM7QUFDOUIsQ0FBQztBQXlEb0MsOEJBQVM7QUF2RDlDLFNBQVMsT0FBTyxDQUFDLE1BQWMsRUFBRSxPQUFlO0lBQzVDLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDbkMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDekIsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBbURRLDBCQUFPO0FBOUNoQixTQUFTLGFBQWEsQ0FBQyxLQUFhLEVBQUUsU0FBaUIsRUFBRSxLQUFhO0lBQ2xFLEtBQUssQ0FBQztJQUNOLFNBQVMsQ0FBQztJQUNWLEtBQUssQ0FBQztJQUVOLFNBQVMsT0FBTyxDQUFDLEtBQWEsRUFBRSxXQUFtQixFQUFFLE9BQWUsRUFBRSxRQUFnQixFQUFFLFNBQWlCLEVBQUUsTUFBYztRQUNySCxJQUFJLE9BQU8sR0FBUyxVQUFVLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxTQUFTLFVBQVUsQ0FBQyxNQUFjO1FBQzlCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTyxFQUFDLEtBQUssU0FBRSxTQUFTLGFBQUUsS0FBSyxTQUFFLE9BQU8sV0FBRSxVQUFVLGNBQUMsQ0FBQztBQUMxRCxDQUFDO0FBNEIrQyxzQ0FBYTtBQTFCN0QsU0FBUyxVQUFVLENBQUMsTUFBYyxFQUFFLEtBQWEsRUFBRSxXQUFtQixFQUFFLE9BQWUsRUFBRSxRQUFnQixFQUFFLFNBQWlCLEVBQUUsTUFBZTtJQUFmLHdDQUFlO0lBQ3pJLEtBQUssQ0FBQztJQUNOLFdBQVcsQ0FBQztJQUNaLE9BQU8sQ0FBQztJQUNSLFFBQVEsQ0FBQztJQUNULFNBQVMsQ0FBQztJQUNWLE1BQU0sQ0FBQztJQUNQLE1BQU0sQ0FBQztJQUVQLE9BQU8sRUFBRSxNQUFNLFVBQUUsS0FBSyxTQUFFLFdBQVcsZUFBRSxPQUFPLFdBQUUsUUFBUSxZQUFFLFNBQVMsYUFBRSxNQUFNLFVBQUUsQ0FBQztBQUM5RSxDQUFDO0FBZ0I0RCxnQ0FBVTtBQWhCdEUsQ0FBQztBQUVKLFNBQVMsaUJBQWlCO0lBQ3RCLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQ3JELElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDMUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDeEM7U0FBTTtRQUNILFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3ZDO0FBSUwsQ0FBQztBQUVpQiw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7O0FDakZuQyxTQUFTLGNBQWMsQ0FBQyxZQUE0QixFQUFFLFNBQWlCO0lBQ25FLGtFQUFrRTtJQUNsRSxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLGlCQUFPLElBQUksY0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQS9CLENBQStCLENBQUM7SUFFOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxZQUFZLENBQUM7SUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLENBQUM7SUFDMUMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDaEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBTztRQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFJO1lBQ2xCLElBQUksUUFBUSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUNyQyxPQUFPLENBQUMsU0FBUyxJQUFJLFFBQVE7UUFDckMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0FBQ0YsQ0FBQztBQXNFUSx3Q0FBYztBQXBFdkIsU0FBUyxnQkFBZ0IsQ0FBQyxVQUFnQjtJQUN0QyxJQUFJLFFBQVEsR0FBRyx5Q0FDUyxVQUFVLENBQUMsTUFBTSw2QkFDaEMsVUFBVSxDQUFDLEtBQUssOEJBQ2hCLFVBQVUsQ0FBQyxPQUFPLDhCQUNsQixVQUFVLENBQUMsTUFBTSwyQkFFekIsQ0FBQztJQUVGLE9BQU8sUUFBUTtBQUNuQixDQUFDO0FBRUQsU0FBUyxTQUFTO0lBQ2QsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFDakQsSUFBSSxPQUFPLEdBQUcsZ1VBSWIsQ0FBQztJQUNGLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDO0FBQ2pDLENBQUM7QUFnRHdCLDhCQUFTO0FBOUNsQyxTQUFTLGNBQWMsQ0FBQyxZQUE0QjtJQUNoRCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUNuRCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsdURBQXVEO0lBQ3ZELFlBQVksQ0FBQyxHQUFHLENBQUMsaUJBQU87UUFDcEIsSUFBSSxXQUFXLEdBQUcsNkJBQ1IsT0FBTyxDQUFDLFNBQVMsZ0JBQUssT0FBTyxDQUFDLEtBQUssb0JBQzVDLENBQUM7UUFDRixRQUFRLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQztJQUV0QyxDQUFDLENBQUM7QUFFTixDQUFDO0FBaUNtQyx3Q0FBYztBQS9CbEQsU0FBUyxtQkFBbUI7SUFDeEIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDbEQsSUFBSSxVQUFVLEdBQUcseVZBRWhCLENBQUM7SUFDRixPQUFPLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQztBQUNwQyxDQUFDO0FBeUJtRCxrREFBbUI7QUF2QmhFLElBQU0saUJBQWlCLEdBQUc7SUFDN0IsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDbEQsSUFBSSxRQUFRLEdBQUcsNnRCQWdCZCxDQUFDO0lBQ0YsT0FBTyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7QUFDbEMsQ0FBQztBQXBCWSx5QkFBaUIscUJBb0I3Qjs7Ozs7OztVQ2xGRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLGtGQUFpSDtBQUNqSCw0RUFBOEM7QUFDOUMsMEZBQWlDO0FBQ2pDLDRFQUEyRTtBQUUzRSxTQUFTLFlBQVk7SUFDakIsb0JBQW9CO0lBQ3BCLDBCQUFTLEdBQUUsQ0FBQztJQUVaLElBQU0sZUFBZSxHQUFHLHdCQUFTLEVBQUMsVUFBVSxDQUFDO0lBQzdDLCtCQUFjLEVBQUMsZUFBZSxDQUFDLENBQUM7SUFDaEMsK0JBQWMsRUFBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFekMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDekQsZ0NBQWlCLEdBQUUsQ0FBQztJQUN4QixDQUFDLENBQUM7SUFFRixvQ0FBbUIsR0FBRSxDQUFDO0lBRXRCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQ3pELGtDQUFpQixHQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0FBRU4sQ0FBQztBQUVELFlBQVksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0c1N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHNTdHlsZXMuY3NzPzI4NjYiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2FwcExvZ2ljLnRzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tVXBkYXRlci50cyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbi1uYXYge1xcbiAgZ3JpZC1hcmVhOiBuYXZiYXI7XFxufVxcblxcbi5jb250ZW50LWxpc3Qge1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50LWxpc3Q7XFxufVxcblxcbi5jb250ZW50LWFyZWEge1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50LWFyZWE7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwibmF2YmFyXFxcIlxcbiAgICBcXFwiY29udGVudC1saXN0XFxcIlxcbiAgICBcXFwiY29udGVudC1hcmVhXFxcIlxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XFxuICAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gICNuYXZiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuLndyYXBwZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImNvbnRlbnQtbGlzdCBjb250ZW50LWFyZWFcXFwiXFxuICAgIFxcXCJjb250ZW50LWxpc3QgY29udGVudC1hcmVhXFxcIlxcbn1cXG5cXG59XFxuXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvamVjdHNTdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNUOzs7O0FBSUY7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFRjtFQUNFLDhCQUE4QjtFQUM5Qjs7O0FBR0Y7O0FBRUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbi1uYXYge1xcbiAgZ3JpZC1hcmVhOiBuYXZiYXI7XFxufVxcblxcbi5jb250ZW50LWxpc3Qge1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50LWxpc3Q7XFxufVxcblxcbi5jb250ZW50LWFyZWEge1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50LWFyZWE7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwibmF2YmFyXFxcIlxcbiAgICBcXFwiY29udGVudC1saXN0XFxcIlxcbiAgICBcXFwiY29udGVudC1hcmVhXFxcIlxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XFxuICAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gICNuYXZiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuLndyYXBwZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImNvbnRlbnQtbGlzdCBjb250ZW50LWFyZWFcXFwiXFxuICAgIFxcXCJjb250ZW50LWxpc3QgY29udGVudC1hcmVhXFxcIlxcbn1cXG5cXG59XFxuXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RzU3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdHNTdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGRlZmluZSBhIHByb2plY3QgdHlwZVxuZXhwb3J0IGludGVyZmFjZSBwcm9qZWN0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHByb2plY3RJRDogc3RyaW5nO1xuICAgIFRvRG9zOiB0b2RvW107XG4gICAgYWRkVG9EbzogKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGR1ZURhdGU6IHN0cmluZywgcHJpb3JpdHk6IHN0cmluZywgcHJvamVjdElEOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgRGVsZXRlVG9EbzogKFRvRG9JRDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG4vL2RlZmluZSB0b2RvIHR5cGVcbmV4cG9ydCBpbnRlcmZhY2UgdG9kbyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGR1ZURhdGU6IHN0cmluZztcbiAgICBwcmlvcml0eTogc3RyaW5nO1xuICAgIFRvRG9JRDogc3RyaW5nO1xuICAgIHByb2plY3RJRDogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBmZXRjaERhdGEoc2NoZW1hOiBzdHJpbmcpIHtcbiAgICBsZXQgZmV0Y2hlZERhdGEgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShzY2hlbWEpIHx8ICdbXScpO1xuICAgIGNvbnNvbGUubG9nKCd0aGUgZGF0YSBJIGp1c3QgZmV0Y2hlZCBpczonLCBmZXRjaGVkRGF0YSk7XG4gICAgaWYgKHNjaGVtYSA9PT0gJ3Byb2plY3RzJyAmJiBmZXRjaGVkRGF0YS5sZW5ndGggIT0gMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hlZERhdGEubWFwKChwcm9qZWN0OiBwcm9qZWN0KSA9PiBjcmVhdGVQcm9qZWN0KHByb2plY3QudGl0bGUsIHByb2plY3QucHJvamVjdElELCBwcm9qZWN0LlRvRG9zKSk7XG4gICAgfSBlbHNlIHJldHVybiBmZXRjaGVkRGF0YTtcbn1cblxuZnVuY3Rpb24gcHV0RGF0YShzY2hlbWE6IHN0cmluZywgbmV3RGF0YTogb2JqZWN0KSB7XG4gICAgbGV0IGN1cnJlbnRkYXRhID0gZmV0Y2hEYXRhKHNjaGVtYSlcbiAgICBjdXJyZW50ZGF0YS5wdXNoKG5ld0RhdGEpXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHNjaGVtYSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudGRhdGEpKTtcbn1cblxuXG4gXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGU6IHN0cmluZywgcHJvamVjdElEOiBzdHJpbmcsIFRvRG9zOiB0b2RvW10pIHtcbiAgICB0aXRsZTtcbiAgICBwcm9qZWN0SUQ7XG4gICAgVG9Eb3M7XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkVG9Ebyh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBkdWVEYXRlOiBzdHJpbmcsIHByaW9yaXR5OiBzdHJpbmcsIHByb2plY3RJRDogc3RyaW5nLCBUb0RvSUQ6IHN0cmluZykge1xuICAgICAgICBsZXQgbmV3VG9EbzogdG9kbyA9IGNyZWF0ZVRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdElELCBUb0RvSUQpO1xuICAgICAgICBUb0Rvcy5wdXNoKG5ld1RvRG8pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIERlbGV0ZVRvRG8oVG9Eb0lEOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gVG9Eb3MuZmluZEluZGV4KGZ1bmN0aW9uIChUb0RvKSB7XG4gICAgICAgICAgICByZXR1cm4gVG9Eby5Ub0RvSUQgPT09IFRvRG9JRDtcbiAgICAgICAgfSk7XG4gICAgICAgIFRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHt0aXRsZSwgcHJvamVjdElELCBUb0RvcywgYWRkVG9EbywgRGVsZXRlVG9Eb307XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvRG8oVG9Eb0lEOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGR1ZURhdGU6IHN0cmluZywgcHJpb3JpdHk6IHN0cmluZywgcHJvamVjdElEOiBzdHJpbmcsIHN0YXR1cyA9ICd0b2RvJykge1xuICAgIHRpdGxlO1xuICAgIGRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGU7XG4gICAgcHJpb3JpdHk7XG4gICAgcHJvamVjdElEO1xuICAgIHN0YXR1cztcbiAgICBUb0RvSUQ7XG5cbiAgICByZXR1cm4geyBUb0RvSUQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RJRCwgc3RhdHVzIH07XG4gIH07XG5cbmZ1bmN0aW9uIHRvZ2dsZVByb2plY3RNZW51KCkge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIilcbiAgICBpZiAocHJvamVjdExpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxufVxuXG5leHBvcnQgeyBwdXREYXRhLCB0b2dnbGVQcm9qZWN0TWVudSwgZmV0Y2hEYXRhLCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUb0RvIH1cblxuIiwiaW1wb3J0IHsgcHJvamVjdCwgdG9kbyB9IGZyb20gJy4vYXBwTG9naWMnO1xuXG5mdW5jdGlvbiByZW5kZXJ0b2RvbGlzdChwcm9qZWN0QXJyYXk6IEFycmF5PHByb2plY3Q+LCBwcm9qZWN0SUQ6IHN0cmluZykge1xuICAgIC8vZmlsdGVyIHByb2plY3QgYXJyYXkgdG8gb25seSBpbmNsdWRlIHByb2plY3Qgd2l0aCBpZCA9IHByb2plY3RJRFxuICAgIGxldCBwcm9qZWN0cyA9IHByb2plY3RBcnJheS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3RJRCA9PT0gcHJvamVjdElEKVxuXG4gICAgY29uc29sZS5sb2coXCJ0aGUgZGF0YSBJIGZldGNoZWQgaXM6XCIsIHByb2plY3RBcnJheSlcbiAgICBjb25zb2xlLmxvZyhcInRoZSBwcm9qZWN0cyBhcmU6XCIsIHByb2plY3RzKVxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIHByb2plY3RzLm1hcChwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC5Ub0Rvcy5tYXAodG9kbyA9PiB7XG4gICAgICAgICAgICBsZXQgdG9kb2h0bWwgPSBnZW5lcmF0ZVRvRG9IVE1MKHRvZG8pXG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCArPSB0b2RvaHRtbFxuICAgIH0pXG59KVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvRG9IVE1MKHRvZG9PYmplY3Q6IHRvZG8pIHtcbiAgICBsZXQgdG9kb2h0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRvZG9cIiBpZD1cIiR7dG9kb09iamVjdC5Ub0RvSUR9XCI+XG4gICAgICAgIDxwPiR7dG9kb09iamVjdC50aXRsZX08L3A+XG4gICAgICAgIDxwPiR7dG9kb09iamVjdC5kdWVEYXRlfTwvcD5cbiAgICAgICAgPHA+JHt0b2RvT2JqZWN0LnN0YXR1c308L3A+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICAgIHJldHVybiB0b2RvaHRtbFxufVxuXG5mdW5jdGlvbiByZW5kZXJOYXYoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKVxuICAgIGxldCBuYXZIdG1sID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPW5hdmJhcj5cbiAgICAgICAgPHN2ZyBpZCA9IFwibWVudUJhclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiLTUgLTcgMjQgMjRcIiB3aWR0aD1cIjI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMSAwaDEyYTEgMSAwIDAgMSAwIDJIMWExIDEgMCAxIDEgMC0yem0wIDhoMTJhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDEgMSAwLTJ6bTAtNGgxMmExIDEgMCAwIDEgMCAySDFhMSAxIDAgMSAxIDAtMnpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgY29udGVudC5pbm5lckhUTUwgKz0gbmF2SHRtbDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdHNMaXN0OiBBcnJheTxwcm9qZWN0Pikge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgICAvLyB3ZSBjaGVjayBpZiBsaXN0IGlzIG51bGwgaW4gaW5kZXggc28gYXNzdW1lIG5vdCBudWxsXG4gICAgcHJvamVjdHNMaXN0Lm1hcChwcm9qZWN0ID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RIVE1MID0gYFxuICAgICAgICA8bGkgaWQ9XCIke3Byb2plY3QucHJvamVjdElEfVwiPiR7cHJvamVjdC50aXRsZX08L2xpPlxuICAgICAgICBgO1xuICAgICAgICBwcm9qZWN0cy5pbm5lckhUTUwgKz0gcHJvamVjdEhUTUw7XG4gICAgICAgIFxuICAgIH0pXG4gICAgXG59XG5cbmZ1bmN0aW9uIHJlbmRlck5ld1RvRG9CdXR0b24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBsZXQgYnV0dG9uSFRNTCA9IGBcbiAgICA8c3ZnIGlkID0gXCJuZXd0b2RvXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCItMiAtMiAyNCAyNFwiIHdpZHRoPVwiMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk0xMCAyMEM0LjQ3NyAyMCAwIDE1LjUyMyAwIDEwUzQuNDc3IDAgMTAgMHMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHptMC0yYTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2em0xLTd2NGExIDEgMCAwIDEtMiAwdi00SDVhMSAxIDAgMCAxIDAtMmg0VjVhMSAxIDAgMSAxIDIgMHY0aDRhMSAxIDAgMCAxIDAgMmgtNHpcIj48L3BhdGg+PC9zdmc+XG4gICAgYDtcbiAgICBjb250ZW50LmlubmVySFRNTCArPSBidXR0b25IVE1MO1xufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyTmV3VG9Eb0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBsZXQgZm9ybUhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cIm5ld3RvZG9mb3JtXCI+XG4gICAgICAgIDxmb3JtIGlkPVwibmV3dG9kb2Zvcm1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlZGF0ZVwiPkR1ZSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlZGF0ZVwiIG5hbWU9XCJkdWVkYXRlXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhdHVzXCI+U3RhdHVzPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzdGF0dXNcIiBuYW1lPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRvZG9cIj5UbyBEbzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnByb2dyZXNzXCI+SW4gUHJvZ3Jlc3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZG9uZVwiPkRvbmU8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdE5ld1RvRG9cIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MICs9IGZvcm1IVE1MO1xufVxuXG5cbmV4cG9ydCB7IHJlbmRlcnRvZG9saXN0LCByZW5kZXJOYXYsIHJlbmRlclByb2plY3RzLCByZW5kZXJOZXdUb0RvQnV0dG9uIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyTmF2LCByZW5kZXJQcm9qZWN0cywgcmVuZGVyTmV3VG9Eb0J1dHRvbiwgcmVuZGVydG9kb2xpc3QsIHJlbmRlck5ld1RvRG9Gb3JtIH0gZnJvbSAnLi9kb21VcGRhdGVyJztcbmltcG9ydCB7IHRvZ2dsZVByb2plY3RNZW51IH0gZnJvbSAnLi9hcHBMb2dpYydcbmltcG9ydCAnL3NyYy9wcm9qZWN0c1N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgY3JlYXRlVG9EbywgZmV0Y2hEYXRhLCBwdXREYXRhIH0gZnJvbSAnLi9hcHBMb2dpYyc7XG5cbmZ1bmN0aW9uIGluaXRhbGl6ZUFwcCgpIHtcbiAgICAvLyByZW5kZXIgdGhlIG5hdmJhclxuICAgIHJlbmRlck5hdigpO1xuXG4gICAgY29uc3QgY3VycmVudFByb2plY3RzID0gZmV0Y2hEYXRhKFwicHJvamVjdHNcIilcbiAgICByZW5kZXJQcm9qZWN0cyhjdXJyZW50UHJvamVjdHMpO1xuICAgIHJlbmRlcnRvZG9saXN0KGN1cnJlbnRQcm9qZWN0cywgJ3RocmVlJyk7XG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51QmFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZVByb2plY3RNZW51KCk7XG4gICAgfSlcblxuICAgIHJlbmRlck5ld1RvRG9CdXR0b24oKTtcbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld3RvZG9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVuZGVyTmV3VG9Eb0Zvcm0oKTtcbiAgICB9KVxuXG59XG5cbmluaXRhbGl6ZUFwcCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==