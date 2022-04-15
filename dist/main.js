/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/globalStyles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/globalStyles.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n.hidden {\n  display: none;\n}\n\n.visible {\n  display: flex;\n}\n\n.main-nav {\n  grid-area: navbar;\n}\n\n.content-list {\n  grid-area: content-list;\n}\n\n.content-area {\n  grid-area: content-area;\n}\n\n.wrapper {\n  display: grid;\n  gap: 20px;\n  grid-template-areas:\n    \"navbar\"\n    \"content-list\"\n    \"content-area\"\n}\n\n@media only screen and (min-width: 960px) {\n  .hidden {\n    display: flex;\n  }\n\n  #navbar {\n    display: none;\n  }\n  \n.wrapper {\n  grid-template-columns: 1fr 3fr;\n  grid-template-areas:\n    \"content-list content-area\"\n    \"content-list content-area\"\n}\n\n}\n\n  ", "",{"version":3,"sources":["webpack://./src/globalStyles.css"],"names":[],"mappings":";;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,SAAS;EACT;;;;AAIF;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;AAEF;EACE,8BAA8B;EAC9B;;;AAGF;;AAEA","sourcesContent":["\n\n.hidden {\n  display: none;\n}\n\n.visible {\n  display: flex;\n}\n\n.main-nav {\n  grid-area: navbar;\n}\n\n.content-list {\n  grid-area: content-list;\n}\n\n.content-area {\n  grid-area: content-area;\n}\n\n.wrapper {\n  display: grid;\n  gap: 20px;\n  grid-template-areas:\n    \"navbar\"\n    \"content-list\"\n    \"content-area\"\n}\n\n@media only screen and (min-width: 960px) {\n  .hidden {\n    display: flex;\n  }\n\n  #navbar {\n    display: none;\n  }\n  \n.wrapper {\n  grid-template-columns: 1fr 3fr;\n  grid-template-areas:\n    \"content-list content-area\"\n    \"content-list content-area\"\n}\n\n}\n\n  "],"sourceRoot":""}]);
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

/***/ "./src/globalStyles.css":
/*!******************************!*\
  !*** ./src/globalStyles.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_globalStyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./globalStyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/globalStyles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_globalStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_globalStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_globalStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_globalStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/AppLogic/DataHandler.ts":
/*!*************************************!*\
  !*** ./src/AppLogic/DataHandler.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataHandler = void 0;
var Project_1 = __webpack_require__(/*! ./Project */ "./src/AppLogic/Project.ts");
var User_1 = __webpack_require__(/*! ./User */ "./src/AppLogic/User.ts");
var ToDo_1 = __webpack_require__(/*! ./ToDo */ "./src/AppLogic/ToDo.ts");
var DataHandler = function () {
    /*this function will return an array containing all existing user objects, or any empty array if there are no users.
    Can substitute any fetching method here as long as it return the correct structure*/
    var fetchUsers = function () {
        return JSON.parse(localStorage.getItem("users") || "[]");
    };
    /* this function returns a user object containing an array of project objects, if any exist which contain arrays of todo objects, if any exist*/
    var handleUserLogin = function (username, password) {
        var fetchedData = fetchUsers();
        // return false if activeUserID is not in users
        if (!fetchedData.some(function (user) { return user.username === username; })) {
            // TODO return an error instead of false so we can prompt users to sign up
            return false;
        }
        else if (
        // case when user input wrong password
        fetchedData.some(function (user) {
            return user.username === username && user.password !== password;
        })) {
            // TODO return an error instead of false so we can let user know their password is wrong
            return false;
        }
        else {
            handleSetActiveUser(username);
            var userJSON = fetchedData.find(function (user) { return user.username === username; });
            // return a user object with the required methods since JSON stores only text
            // case when projects exist
            if (userJSON.projects.length != 0) {
                (0, User_1.createUser)(userJSON.userID, userJSON.username, userJSON.password, userJSON.projects.map(function (project) {
                    // case when project has todos
                    if (project.ToDos.length != 0) {
                        (0, Project_1.createProject)(project.title, project.projectID, project.ToDos.map(function (todo) {
                            return (0, ToDo_1.createToDo)(todo.title, todo.description, todo.dueDate, todo.priority, todo.status, todo.todoID);
                        }));
                    }
                    else {
                        // case when project has no todos
                        (0, Project_1.createProject)(project.title, project.projectID);
                    }
                }));
            }
            else {
                // case when no projects exist
                (0, User_1.createUser)(userJSON.userID, userJSON.username, userJSON.password);
            }
        }
    };
    var handleUserLogout = function () {
        window.localStorage.removeItem("activeUser");
    };
    var handleSetActiveUser = function (username) {
        JSON.stringify(window.localStorage.setItem("activeUser", username));
    };
    var generateUUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    var handleRegisterUser = function (userName, password) {
        var users = fetchUsers();
        var userID = generateUUID();
        var newUser = (0, User_1.createUser)(userID, userName, password);
        users.push(newUser);
        window.localStorage.setItem("users", JSON.stringify(users));
        return newUser;
    };
    var updateUsersProjects = function (userID, updatedProjects) {
        var users = fetchUsers();
        users.find(function (user) { return user.userID === userID; }).projects =
            updatedProjects;
        window.localStorage.setItem("users", JSON.stringify(users));
    };
    var checkForActiveUser = function () {
        var activeUser = window.localStorage.getItem("activeUser");
        if (activeUser) {
            return activeUser;
        }
        else {
            // TODO return error code so we can prompt a user to login
            return false;
        }
    };
    return {
        generateUUID: generateUUID,
        handleRegisterUser: handleRegisterUser,
        handleUserLogin: handleUserLogin,
        handleUserLogout: handleUserLogout,
        checkForActiveUser: checkForActiveUser,
        updateUsersProjects: updateUsersProjects,
    };
};
exports.DataHandler = DataHandler;


/***/ }),

/***/ "./src/AppLogic/Project.ts":
/*!*********************************!*\
  !*** ./src/AppLogic/Project.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createProject = void 0;
function createProject(projectID, title, ToDos) {
    if (ToDos === void 0) { ToDos = []; }
    function addToDo(todo) {
        ToDos.push(todo);
        return;
    }
    projectID;
    var getProjectID = function () { return projectID; };
    function deleteToDo(todoID) {
        var index = ToDos.findIndex(function (ToDo) {
            return ToDo.todoID === todoID;
        });
        ToDos.splice(index, 1);
        return;
    }
    return { title: title, ToDos: ToDos, getProjectID: getProjectID, addToDo: addToDo, deleteToDo: deleteToDo };
}
exports.createProject = createProject;


/***/ }),

/***/ "./src/AppLogic/ToDo.ts":
/*!******************************!*\
  !*** ./src/AppLogic/ToDo.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createToDo = void 0;
function createToDo(todoID, title, description, dueDate, priority, status) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        status: status,
        todoID: todoID,
    };
}
exports.createToDo = createToDo;


/***/ }),

/***/ "./src/AppLogic/User.ts":
/*!******************************!*\
  !*** ./src/AppLogic/User.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createUser = void 0;
var Project_1 = __webpack_require__(/*! ./Project */ "./src/AppLogic/Project.ts");
var DataHandler_1 = __webpack_require__(/*! ./DataHandler */ "./src/AppLogic/DataHandler.ts");
// function will instantiate a new user object with an empty array of projects by default
var createUser = function (userID, username, password, projects) {
    if (projects === void 0) { projects = []; }
    userID;
    username;
    password;
    projects;
    var newProject = function (title, todos) {
        if (todos === void 0) { todos = []; }
        var project = (0, Project_1.createProject)(title, (0, DataHandler_1.DataHandler)().generateUUID(), todos);
        projects.push(project);
    };
    var deleteProject = function (projectID) {
        var index = projects.findIndex(function (project) {
            return project.getProjectID() === projectID;
        });
        projects.splice(index, 1);
    };
    var getUsername = function () { return username; };
    var getPassword = function () { return password; };
    var getUserID = function () { return userID; };
    return { getUsername: getUsername, getPassword: getPassword, getUserID: getUserID, newProject: newProject, deleteProject: deleteProject };
};
exports.createUser = createUser;


/***/ }),

/***/ "./src/UI/menu.ts":
/*!************************!*\
  !*** ./src/UI/menu.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var projects_1 = __webpack_require__(/*! ./projects */ "./src/UI/projects.ts");
var DataHandler_1 = __webpack_require__(/*! ../AppLogic/DataHandler */ "./src/AppLogic/DataHandler.ts");
function renderMenu() {
    var menuIsClicked = false;
    var menu = document.createElement("div");
    var menuHTML = "\n        <div class=navbar>\n        <svg id = \"menuBar\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-5 -7 24 24\" width=\"24\" fill=\"currentColor\"><path d=\"M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z\"></path></svg>\n        </div>\n    ";
    menu.innerHTML = menuHTML;
    document.addEventListener("click", function () {
        if (menuIsClicked) {
            menu.innerHTML = menuHTML;
            menuIsClicked = false;
        }
        else {
            var currentProjects = (0, DataHandler_1.Storage)().fetchData("projects");
            (0, projects_1.default)(currentProjects);
            menu.appendChild((0, projects_1.default)(currentProjects).projectUL);
            menuIsClicked = true;
        }
    });
    return { menu: menu };
}
exports["default"] = renderMenu;


/***/ }),

/***/ "./src/UI/projects.ts":
/*!****************************!*\
  !*** ./src/UI/projects.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var todolist_1 = __webpack_require__(/*! ./todolist */ "./src/UI/todolist.ts");
function renderProjects(projectsList) {
    var projectUL = document.createElement("ul");
    var allProjectsOption = document.createElement("li");
    allProjectsOption.innerText = "All Projects";
    var allIds = [];
    projectsList.forEach(function (project) {
        allIds.push(project.projectID);
    });
    allProjectsOption.addEventListener("click", function () {
        var toDoList = document.getElementById("toDoList");
        toDoList.innerHTML = "";
        toDoList.appendChild((0, todolist_1.default)(projectsList, allIds, "All Projects").generateToDoListHTML().todolist);
    });
    projectUL.appendChild(allProjectsOption);
    projectsList.map(function (project) {
        var projectLI = document.createElement("li");
        projectLI.setAttribute("id", project.projectID);
        projectLI.innerText = project.title;
        projectLI.addEventListener("click", function () {
            var toDoList = document.getElementById("toDoList");
            toDoList.innerHTML = "";
            toDoList.appendChild((0, todolist_1.default)([project], [project.projectID], project.title).generateToDoListHTML().todolist);
        });
        projectUL.appendChild(projectLI);
    });
    return { projectUL: projectUL };
}
exports["default"] = renderProjects;


/***/ }),

/***/ "./src/UI/todolist.ts":
/*!****************************!*\
  !*** ./src/UI/todolist.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function rendertodolist(projectArray, projectID, projectHeading) {
    //filter project array to only include projects with id in the projectID array
    var currentProjects = projectArray.filter(function (project) {
        return projectID.includes(project.projectID);
    });
    function generateToDoHTML(todoObject) {
        var todohtml = "\n        <div class=\"todo\" id=\"".concat(todoObject.getToDoID, "\">\n            <p>").concat(todoObject.title, "</p>\n            <p>").concat(todoObject.dueDate, "</p>\n            <p>").concat(todoObject.status, "</p>\n        </div>\n        ");
        return todohtml;
    }
    function generateToDoListHTML() {
        var todolist = document.createElement("div");
        todolist.setAttribute("id", "toDoList");
        var todolistUL = document.createElement("ul");
        var header = document.createElement("h2");
        header.innerText = projectHeading;
        todolist.appendChild(header);
        currentProjects.forEach(function (project) {
            project.ToDos.map(function (todo) {
                var todohtml = generateToDoHTML(todo);
                todolistUL.innerHTML += todohtml;
            });
            todolist.appendChild(todolistUL);
        });
        return { todolist: todolist };
    }
    function renderNewToDoForm() {
        var content = document.getElementById("content");
        var formHTML = "\n        <div class=\"newtodoform\">\n            <form id=\"newtodoform\">\n                <label for=\"title\">Title</label>\n                <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Title\">\n                <label for=\"duedate\">Due Date</label>\n                <input type=\"date\" id=\"duedate\" name=\"duedate\">\n                <label for=\"status\">Status</label>\n                <select id=\"status\" name=\"status\">\n                    <option value=\"todo\">To Do</option>\n                    <option value=\"inprogress\">In Progress</option>\n                    <option value=\"done\">Done</option>\n                </select>\n                <button id=\"submitNewToDo\" type=\"submit\">Submit</button>\n            </form>\n        </div>\n        ";
        content.innerHTML += formHTML;
    }
    function renderNewToDoButton() {
        var content = document.getElementById("content");
        var buttonHTML = "\n        <svg id = \"newtodo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-2 -2 24 24\" width=\"24\" fill=\"currentColor\"><path d=\"M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-7v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2h-4z\"></path></svg>\n        ";
        content.innerHTML += buttonHTML;
    }
    return { renderNewToDoForm: renderNewToDoForm, renderNewToDoButton: renderNewToDoButton, generateToDoListHTML: generateToDoListHTML };
}
exports["default"] = rendertodolist;


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
var menu_1 = __webpack_require__(/*! ./UI/menu */ "./src/UI/menu.ts");
var DataHandler_1 = __webpack_require__(/*! ./AppLogic/DataHandler */ "./src/AppLogic/DataHandler.ts");
var projects_1 = __webpack_require__(/*! ./UI/projects */ "./src/UI/projects.ts");
var todolist_1 = __webpack_require__(/*! ./UI/todolist */ "./src/UI/todolist.ts");
__webpack_require__(/*! ./globalStyles.css */ "./src/globalStyles.css");
function initalizeApp() {
    // let testProj = createProject("My 3rd Project", "three", [
    //   createToDo(
    //     "one",
    //     "test todo",
    //     "test todo description",
    //     "test todo due date",
    //     "test todo priority",
    //     "three",
    //     "test todo status"
    //   ),
    // ]);
    // Storage().putData("projects", testProj);
    var currentProjects = (0, DataHandler_1.Storage)().fetchData("projects");
    // render the navbar
    var app = document.getElementById("app");
    app.appendChild((0, menu_1.default)().menu);
    (0, projects_1.default)(currentProjects);
    var ToDoListHeader = "All ToDos";
    // initially render all todos
    var allIds = [];
    currentProjects.forEach(function (project) {
        allIds.push(project.projectID);
    });
    app.appendChild((0, todolist_1.default)(currentProjects, allIds, ToDoListHeader).generateToDoListHTML().todolist);
}
initalizeApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBZ0I7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsV0FBVyxDQUNiLHNCQUFjLEVBQ1osZUFBZSxFQUNmLE1BQU0sRUFDTixjQUFjLENBQ2YsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FDbEMsQ0FBQztBQUNKLENBQUM7QUFFRCxZQUFZLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZ2xvYmFsU3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9nbG9iYWxTdHlsZXMuY3NzPzcxY2IiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0FwcExvZ2ljL0RhdGFIYW5kbGVyLnRzIiwid2VicGFjazovL3RvZG8vLi9zcmMvQXBwTG9naWMvUHJvamVjdC50cyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0FwcExvZ2ljL1RvRG8udHMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9BcHBMb2dpYy9Vc2VyLnRzIiwid2VicGFjazovL3RvZG8vLi9zcmMvVUkvbWVudS50cyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL1VJL3Byb2plY3RzLnRzIiwid2VicGFjazovL3RvZG8vLi9zcmMvVUkvdG9kb2xpc3QudHMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1haW4tbmF2IHtcXG4gIGdyaWQtYXJlYTogbmF2YmFyO1xcbn1cXG5cXG4uY29udGVudC1saXN0IHtcXG4gIGdyaWQtYXJlYTogY29udGVudC1saXN0O1xcbn1cXG5cXG4uY29udGVudC1hcmVhIHtcXG4gIGdyaWQtYXJlYTogY29udGVudC1hcmVhO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm5hdmJhclxcXCJcXG4gICAgXFxcImNvbnRlbnQtbGlzdFxcXCJcXG4gICAgXFxcImNvbnRlbnQtYXJlYVxcXCJcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xcbiAgLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAjbmF2YmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbi53cmFwcGVyIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJjb250ZW50LWxpc3QgY29udGVudC1hcmVhXFxcIlxcbiAgICBcXFwiY29udGVudC1saXN0IGNvbnRlbnQtYXJlYVxcXCJcXG59XFxuXFxufVxcblxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbFN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1Q7Ozs7QUFJRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVGO0VBQ0UsOEJBQThCO0VBQzlCOzs7QUFHRjs7QUFFQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluLW5hdiB7XFxuICBncmlkLWFyZWE6IG5hdmJhcjtcXG59XFxuXFxuLmNvbnRlbnQtbGlzdCB7XFxuICBncmlkLWFyZWE6IGNvbnRlbnQtbGlzdDtcXG59XFxuXFxuLmNvbnRlbnQtYXJlYSB7XFxuICBncmlkLWFyZWE6IGNvbnRlbnQtYXJlYTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJuYXZiYXJcXFwiXFxuICAgIFxcXCJjb250ZW50LWxpc3RcXFwiXFxuICAgIFxcXCJjb250ZW50LWFyZWFcXFwiXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcXG4gIC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgI25hdmJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4ud3JhcHBlciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiY29udGVudC1saXN0IGNvbnRlbnQtYXJlYVxcXCJcXG4gICAgXFxcImNvbnRlbnQtbGlzdCBjb250ZW50LWFyZWFcXFwiXFxufVxcblxcbn1cXG5cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsU3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsU3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IHsgVXNlciwgY3JlYXRlVXNlciB9IGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRvRG8sIFRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5cbmludGVyZmFjZSBKU09OVXNlciB7XG4gIHVzZXJJRDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5jb25zdCBEYXRhSGFuZGxlciA9ICgpID0+IHtcbiAgLyp0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIGV4aXN0aW5nIHVzZXIgb2JqZWN0cywgb3IgYW55IGVtcHR5IGFycmF5IGlmIHRoZXJlIGFyZSBubyB1c2Vycy4gXG4gIENhbiBzdWJzdGl0dXRlIGFueSBmZXRjaGluZyBtZXRob2QgaGVyZSBhcyBsb25nIGFzIGl0IHJldHVybiB0aGUgY29ycmVjdCBzdHJ1Y3R1cmUqL1xuICBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcnNcIikgfHwgXCJbXVwiKTtcbiAgfTtcblxuICAvKiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYSB1c2VyIG9iamVjdCBjb250YWluaW5nIGFuIGFycmF5IG9mIHByb2plY3Qgb2JqZWN0cywgaWYgYW55IGV4aXN0IHdoaWNoIGNvbnRhaW4gYXJyYXlzIG9mIHRvZG8gb2JqZWN0cywgaWYgYW55IGV4aXN0Ki9cbiAgY29uc3QgaGFuZGxlVXNlckxvZ2luID0gKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgZmV0Y2hlZERhdGEgPSBmZXRjaFVzZXJzKCk7XG5cbiAgICAvLyByZXR1cm4gZmFsc2UgaWYgYWN0aXZlVXNlcklEIGlzIG5vdCBpbiB1c2Vyc1xuICAgIGlmICghZmV0Y2hlZERhdGEuc29tZSgodXNlcjogSlNPTlVzZXIpID0+IHVzZXIudXNlcm5hbWUgPT09IHVzZXJuYW1lKSkge1xuICAgICAgLy8gVE9ETyByZXR1cm4gYW4gZXJyb3IgaW5zdGVhZCBvZiBmYWxzZSBzbyB3ZSBjYW4gcHJvbXB0IHVzZXJzIHRvIHNpZ24gdXBcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gY2FzZSB3aGVuIHVzZXIgaW5wdXQgd3JvbmcgcGFzc3dvcmRcbiAgICAgIGZldGNoZWREYXRhLnNvbWUoXG4gICAgICAgICh1c2VyOiBKU09OVXNlcikgPT5cbiAgICAgICAgICB1c2VyLnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiB1c2VyLnBhc3N3b3JkICE9PSBwYXNzd29yZFxuICAgICAgKVxuICAgICkge1xuICAgICAgLy8gVE9ETyByZXR1cm4gYW4gZXJyb3IgaW5zdGVhZCBvZiBmYWxzZSBzbyB3ZSBjYW4gbGV0IHVzZXIga25vdyB0aGVpciBwYXNzd29yZCBpcyB3cm9uZ1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVTZXRBY3RpdmVVc2VyKHVzZXJuYW1lKTtcblxuICAgICAgY29uc3QgdXNlckpTT04gPSBmZXRjaGVkRGF0YS5maW5kKFxuICAgICAgICAodXNlcjogSlNPTlVzZXIpID0+IHVzZXIudXNlcm5hbWUgPT09IHVzZXJuYW1lXG4gICAgICApO1xuICAgICAgLy8gcmV0dXJuIGEgdXNlciBvYmplY3Qgd2l0aCB0aGUgcmVxdWlyZWQgbWV0aG9kcyBzaW5jZSBKU09OIHN0b3JlcyBvbmx5IHRleHRcbiAgICAgIC8vIGNhc2Ugd2hlbiBwcm9qZWN0cyBleGlzdFxuICAgICAgaWYgKHVzZXJKU09OLnByb2plY3RzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIGNyZWF0ZVVzZXIoXG4gICAgICAgICAgdXNlckpTT04udXNlcklELFxuICAgICAgICAgIHVzZXJKU09OLnVzZXJuYW1lLFxuICAgICAgICAgIHVzZXJKU09OLnBhc3N3b3JkLFxuICAgICAgICAgIHVzZXJKU09OLnByb2plY3RzLm1hcChcbiAgICAgICAgICAgIChwcm9qZWN0OiB7XG4gICAgICAgICAgICAgIHByb2plY3RJRDogc3RyaW5nO1xuICAgICAgICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgICBUb0Rvczoge1xuICAgICAgICAgICAgICAgIHRvZG9JRDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IHN0cmluZztcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHN0cmluZztcbiAgICAgICAgICAgICAgfVtdO1xuICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAvLyBjYXNlIHdoZW4gcHJvamVjdCBoYXMgdG9kb3NcbiAgICAgICAgICAgICAgaWYgKHByb2plY3QuVG9Eb3MubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgICAgICAgICAgICAgcHJvamVjdC50aXRsZSxcbiAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdElELFxuICAgICAgICAgICAgICAgICAgcHJvamVjdC5Ub0Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVRvRG8oXG4gICAgICAgICAgICAgICAgICAgICAgdG9kby50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICB0b2RvLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgIHRvZG8uc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgIHRvZG8udG9kb0lEXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2FzZSB3aGVuIHByb2plY3QgaGFzIG5vIHRvZG9zXG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LnByb2plY3RJRCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjYXNlIHdoZW4gbm8gcHJvamVjdHMgZXhpc3RcbiAgICAgICAgY3JlYXRlVXNlcih1c2VySlNPTi51c2VySUQsIHVzZXJKU09OLnVzZXJuYW1lLCB1c2VySlNPTi5wYXNzd29yZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVzZXJMb2dvdXQgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYWN0aXZlVXNlclwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZXRBY3RpdmVVc2VyID0gKHVzZXJuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3RpdmVVc2VyXCIsIHVzZXJuYW1lKSk7XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVVVUlEID0gKCkgPT4ge1xuICAgIHJldHVybiBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoXG4gICAgICAvW3h5XS9nLFxuICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICAgICAgdiA9IGMgPT0gXCJ4XCIgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZWdpc3RlclVzZXIgPSAodXNlck5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIGxldCB1c2VycyA9IGZldGNoVXNlcnMoKTtcbiAgICBsZXQgdXNlcklEID0gZ2VuZXJhdGVVVUlEKCk7XG4gICAgbGV0IG5ld1VzZXIgPSBjcmVhdGVVc2VyKHVzZXJJRCwgdXNlck5hbWUsIHBhc3N3b3JkKTtcbiAgICB1c2Vycy5wdXNoKG5ld1VzZXIpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJzXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJzKSk7XG4gICAgcmV0dXJuIG5ld1VzZXI7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVXNlcnNQcm9qZWN0cyA9ICh1c2VySUQ6IHN0cmluZywgdXBkYXRlZFByb2plY3RzOiBQcm9qZWN0W10pID0+IHtcbiAgICBsZXQgdXNlcnMgPSBmZXRjaFVzZXJzKCk7XG4gICAgdXNlcnMuZmluZCgodXNlcjogSlNPTlVzZXIpID0+IHVzZXIudXNlcklEID09PSB1c2VySUQpLnByb2plY3RzID1cbiAgICAgIHVwZGF0ZWRQcm9qZWN0cztcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2Vyc1wiLCBKU09OLnN0cmluZ2lmeSh1c2VycykpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrRm9yQWN0aXZlVXNlciA9ICgpID0+IHtcbiAgICBsZXQgYWN0aXZlVXNlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjdGl2ZVVzZXJcIik7XG4gICAgaWYgKGFjdGl2ZVVzZXIpIHtcbiAgICAgIHJldHVybiBhY3RpdmVVc2VyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPIHJldHVybiBlcnJvciBjb2RlIHNvIHdlIGNhbiBwcm9tcHQgYSB1c2VyIHRvIGxvZ2luXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2VuZXJhdGVVVUlELFxuICAgIGhhbmRsZVJlZ2lzdGVyVXNlcixcbiAgICBoYW5kbGVVc2VyTG9naW4sXG4gICAgaGFuZGxlVXNlckxvZ291dCxcbiAgICBjaGVja0ZvckFjdGl2ZVVzZXIsXG4gICAgdXBkYXRlVXNlcnNQcm9qZWN0cyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IERhdGFIYW5kbGVyIH07XG4iLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eb1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3Qge1xuICB0aXRsZTogc3RyaW5nO1xuICBUb0RvczogVG9Eb1tdO1xuICBnZXRQcm9qZWN0SUQ6ICgpID0+IHN0cmluZztcbiAgYWRkVG9EbzogKHRvZG86IFRvRG8pID0+IHZvaWQ7XG4gIGRlbGV0ZVRvRG86ICh0b2RvSUQ6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoXG4gIHByb2plY3RJRDogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICBUb0RvczogVG9Eb1tdID0gW11cbikge1xuICBmdW5jdGlvbiBhZGRUb0RvKHRvZG86IFRvRG8pIHtcbiAgICBUb0Rvcy5wdXNoKHRvZG8pO1xuICAgIHJldHVybjtcbiAgfVxuICBwcm9qZWN0SUQ7XG4gIGNvbnN0IGdldFByb2plY3RJRCA9ICgpID0+IHByb2plY3RJRDtcblxuICBmdW5jdGlvbiBkZWxldGVUb0RvKHRvZG9JRDogc3RyaW5nKSB7XG4gICAgbGV0IGluZGV4ID0gVG9Eb3MuZmluZEluZGV4KGZ1bmN0aW9uIChUb0RvKSB7XG4gICAgICByZXR1cm4gVG9Eby50b2RvSUQgPT09IHRvZG9JRDtcbiAgICB9KTtcbiAgICBUb0Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiB7IHRpdGxlLCBUb0RvcywgZ2V0UHJvamVjdElELCBhZGRUb0RvLCBkZWxldGVUb0RvIH07XG59XG4iLCJpbnRlcmZhY2UgVG9EbyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGR1ZURhdGU6IHN0cmluZztcbiAgcHJpb3JpdHk6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIHRvZG9JRDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb0RvKFxuICB0b2RvSUQ6IHN0cmluZyxcbiAgdGl0bGU6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgZHVlRGF0ZTogc3RyaW5nLFxuICBwcmlvcml0eTogc3RyaW5nLFxuICBzdGF0dXM6IHN0cmluZ1xuKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBzdGF0dXMsXG4gICAgdG9kb0lELFxuICB9O1xufVxuXG5leHBvcnQgeyBUb0RvLCBjcmVhdGVUb0RvIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IHsgRGF0YUhhbmRsZXIgfSBmcm9tIFwiLi9EYXRhSGFuZGxlclwiO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcblxuaW50ZXJmYWNlIFVzZXIge1xuICBnZXRVc2VybmFtZTogKCkgPT4gc3RyaW5nO1xuICBnZXRQYXNzd29yZDogKCkgPT4gc3RyaW5nO1xuICBnZXRVc2VySUQ6ICgpID0+IHN0cmluZztcbiAgbmV3UHJvamVjdDogKHRpdGxlOiBzdHJpbmcsIHRvZG9zOiBUb0RvW10pID0+IHZvaWQ7XG4gIGRlbGV0ZVByb2plY3Q6IChwcm9qZWN0SUQ6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuLy8gZnVuY3Rpb24gd2lsbCBpbnN0YW50aWF0ZSBhIG5ldyB1c2VyIG9iamVjdCB3aXRoIGFuIGVtcHR5IGFycmF5IG9mIHByb2plY3RzIGJ5IGRlZmF1bHRcbmNvbnN0IGNyZWF0ZVVzZXIgPSAoXG4gIHVzZXJJRDogc3RyaW5nLFxuICB1c2VybmFtZTogc3RyaW5nLFxuICBwYXNzd29yZDogc3RyaW5nLFxuICBwcm9qZWN0czogUHJvamVjdFtdID0gW11cbikgPT4ge1xuICB1c2VySUQ7XG4gIHVzZXJuYW1lO1xuICBwYXNzd29yZDtcbiAgcHJvamVjdHM7XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9ICh0aXRsZTogc3RyaW5nLCB0b2RvczogVG9Eb1tdID0gW10pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdCh0aXRsZSwgRGF0YUhhbmRsZXIoKS5nZW5lcmF0ZVVVSUQoKSwgdG9kb3MpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SUQ6IHN0cmluZykgPT4ge1xuICAgIGxldCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChmdW5jdGlvbiAocHJvamVjdDogUHJvamVjdCkge1xuICAgICAgcmV0dXJuIHByb2plY3QuZ2V0UHJvamVjdElEKCkgPT09IHByb2plY3RJRDtcbiAgICB9KTtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIGNvbnN0IGdldFVzZXJuYW1lID0gKCkgPT4gdXNlcm5hbWU7XG4gIGNvbnN0IGdldFBhc3N3b3JkID0gKCkgPT4gcGFzc3dvcmQ7XG4gIGNvbnN0IGdldFVzZXJJRCA9ICgpID0+IHVzZXJJRDtcblxuICByZXR1cm4geyBnZXRVc2VybmFtZSwgZ2V0UGFzc3dvcmQsIGdldFVzZXJJRCwgbmV3UHJvamVjdCwgZGVsZXRlUHJvamVjdCB9O1xufTtcblxuZXhwb3J0IHsgVXNlciwgY3JlYXRlVXNlciB9O1xuIiwiaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL0FwcExvZ2ljL1Byb2plY3RcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi4vQXBwTG9naWMvRGF0YUhhbmRsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgbGV0IG1lbnVJc0NsaWNrZWQgPSBmYWxzZTtcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgbWVudUhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9bmF2YmFyPlxuICAgICAgICA8c3ZnIGlkID0gXCJtZW51QmFyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCItNSAtNyAyNCAyNFwiIHdpZHRoPVwiMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk0xIDBoMTJhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDEgMSAwLTJ6bTAgOGgxMmExIDEgMCAwIDEgMCAySDFhMSAxIDAgMSAxIDAtMnptMC00aDEyYTEgMSAwIDAgMSAwIDJIMWExIDEgMCAxIDEgMC0yelwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgbWVudS5pbm5lckhUTUwgPSBtZW51SFRNTDtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChtZW51SXNDbGlja2VkKSB7XG4gICAgICBtZW51LmlubmVySFRNTCA9IG1lbnVIVE1MO1xuICAgICAgbWVudUlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY3VycmVudFByb2plY3RzID0gU3RvcmFnZSgpLmZldGNoRGF0YShcInByb2plY3RzXCIpO1xuICAgICAgcmVuZGVyUHJvamVjdHMoY3VycmVudFByb2plY3RzKTtcbiAgICAgIG1lbnUuYXBwZW5kQ2hpbGQocmVuZGVyUHJvamVjdHMoY3VycmVudFByb2plY3RzKS5wcm9qZWN0VUwpO1xuICAgICAgbWVudUlzQ2xpY2tlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4geyBtZW51IH07XG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL0FwcExvZ2ljL1Byb2plY3RcIjtcbmltcG9ydCByZW5kZXJUb0RvTGlzdCBmcm9tIFwiLi90b2RvbGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0c0xpc3Q6IFByb2plY3RbXSkge1xuICBjb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGFsbFByb2plY3RzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGFsbFByb2plY3RzT3B0aW9uLmlubmVyVGV4dCA9IFwiQWxsIFByb2plY3RzXCI7XG4gIGxldCBhbGxJZHM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJvamVjdHNMaXN0LmZvckVhY2goKHByb2plY3Q6IFByb2plY3QpID0+IHtcbiAgICBhbGxJZHMucHVzaChwcm9qZWN0LnByb2plY3RJRCk7XG4gIH0pO1xuXG4gIGFsbFByb2plY3RzT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvRG9MaXN0XCIpO1xuICAgIHRvRG9MaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdG9Eb0xpc3QuYXBwZW5kQ2hpbGQoXG4gICAgICByZW5kZXJUb0RvTGlzdChcbiAgICAgICAgcHJvamVjdHNMaXN0LFxuICAgICAgICBhbGxJZHMsXG4gICAgICAgIFwiQWxsIFByb2plY3RzXCJcbiAgICAgICkuZ2VuZXJhdGVUb0RvTGlzdEhUTUwoKS50b2RvbGlzdFxuICAgICk7XG4gIH0pO1xuXG4gIHByb2plY3RVTC5hcHBlbmRDaGlsZChhbGxQcm9qZWN0c09wdGlvbik7XG5cbiAgcHJvamVjdHNMaXN0Lm1hcCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwcm9qZWN0TEkuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdC5wcm9qZWN0SUQpO1xuICAgIHByb2plY3RMSS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgcHJvamVjdExJLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9Eb0xpc3RcIik7XG4gICAgICB0b0RvTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgdG9Eb0xpc3QuYXBwZW5kQ2hpbGQoXG4gICAgICAgIHJlbmRlclRvRG9MaXN0KFxuICAgICAgICAgIFtwcm9qZWN0XSxcbiAgICAgICAgICBbcHJvamVjdC5wcm9qZWN0SURdLFxuICAgICAgICAgIHByb2plY3QudGl0bGVcbiAgICAgICAgKS5nZW5lcmF0ZVRvRG9MaXN0SFRNTCgpLnRvZG9saXN0XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdFVMLmFwcGVuZENoaWxkKHByb2plY3RMSSk7XG4gIH0pO1xuXG4gIHJldHVybiB7IHByb2plY3RVTCB9O1xufVxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9BcHBMb2dpYy9Qcm9qZWN0XCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4uL0FwcExvZ2ljL1RvRG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVydG9kb2xpc3QoXG4gIHByb2plY3RBcnJheTogUHJvamVjdFtdLFxuICBwcm9qZWN0SUQ6IHN0cmluZ1tdLFxuICBwcm9qZWN0SGVhZGluZzogc3RyaW5nXG4pIHtcbiAgLy9maWx0ZXIgcHJvamVjdCBhcnJheSB0byBvbmx5IGluY2x1ZGUgcHJvamVjdHMgd2l0aCBpZCBpbiB0aGUgcHJvamVjdElEIGFycmF5XG4gIGxldCBjdXJyZW50UHJvamVjdHMgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHByb2plY3RJRC5pbmNsdWRlcyhwcm9qZWN0LnByb2plY3RJRCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlVG9Eb0hUTUwodG9kb09iamVjdDogVG9Ebykge1xuICAgIGxldCB0b2RvaHRtbCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9cIiBpZD1cIiR7dG9kb09iamVjdC5nZXRUb0RvSUR9XCI+XG4gICAgICAgICAgICA8cD4ke3RvZG9PYmplY3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgPHA+JHt0b2RvT2JqZWN0LmR1ZURhdGV9PC9wPlxuICAgICAgICAgICAgPHA+JHt0b2RvT2JqZWN0LnN0YXR1c308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgcmV0dXJuIHRvZG9odG1sO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVUb0RvTGlzdEhUTUwoKSB7XG4gICAgbGV0IHRvZG9saXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvbGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvRG9MaXN0XCIpO1xuICAgIGxldCB0b2RvbGlzdFVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IHByb2plY3RIZWFkaW5nO1xuICAgIHRvZG9saXN0LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjdXJyZW50UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5Ub0Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgbGV0IHRvZG9odG1sID0gZ2VuZXJhdGVUb0RvSFRNTCh0b2RvKTtcbiAgICAgICAgdG9kb2xpc3RVTC5pbm5lckhUTUwgKz0gdG9kb2h0bWw7XG4gICAgICB9KTtcblxuICAgICAgdG9kb2xpc3QuYXBwZW5kQ2hpbGQodG9kb2xpc3RVTCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyB0b2RvbGlzdCB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyTmV3VG9Eb0Zvcm0oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBsZXQgZm9ybUhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuZXd0b2RvZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJuZXd0b2RvZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWVkYXRlXCI+RHVlIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlZGF0ZVwiIG5hbWU9XCJkdWVkYXRlXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXR1c1wiPlN0YXR1czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInN0YXR1c1wiIG5hbWU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRvZG9cIj5UbyBEbzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW5wcm9ncmVzc1wiPkluIFByb2dyZXNzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkb25lXCI+RG9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXROZXdUb0RvXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICBjb250ZW50LmlubmVySFRNTCArPSBmb3JtSFRNTDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlck5ld1RvRG9CdXR0b24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBsZXQgYnV0dG9uSFRNTCA9IGBcbiAgICAgICAgPHN2ZyBpZCA9IFwibmV3dG9kb1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiLTIgLTIgMjQgMjRcIiB3aWR0aD1cIjI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTB6bTAtMmE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNnptMS03djRhMSAxIDAgMCAxLTIgMHYtNEg1YTEgMSAwIDAgMSAwLTJoNFY1YTEgMSAwIDEgMSAyIDB2NGg0YTEgMSAwIDAgMSAwIDJoLTR6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICBgO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MICs9IGJ1dHRvbkhUTUw7XG4gIH1cblxuICByZXR1cm4geyByZW5kZXJOZXdUb0RvRm9ybSwgcmVuZGVyTmV3VG9Eb0J1dHRvbiwgZ2VuZXJhdGVUb0RvTGlzdEhUTUwgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcmVuZGVyTWVudSBmcm9tIFwiLi9VSS9tZW51XCI7XG5pbXBvcnQgY3JlYXRlVXNlciBmcm9tIFwiLi9BcHBMb2dpYy9Vc2VyXCI7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4vQXBwTG9naWMvRGF0YUhhbmRsZXJcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tIFwiLi9VSS9wcm9qZWN0c1wiO1xuaW1wb3J0IHJlbmRlcnRvZG9saXN0IGZyb20gXCIuL1VJL3RvZG9saXN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBQcm9qZWN0IH0gZnJvbSBcIi4vQXBwTG9naWMvUHJvamVjdFwiO1xuaW1wb3J0IFwiLi9nbG9iYWxTdHlsZXMuY3NzXCI7XG5pbXBvcnQgY3JlYXRlVG9EbyBmcm9tIFwiLi9BcHBMb2dpYy9Ub0RvXCI7XG5cbmZ1bmN0aW9uIGluaXRhbGl6ZUFwcCgpIHtcbiAgLy8gbGV0IHRlc3RQcm9qID0gY3JlYXRlUHJvamVjdChcIk15IDNyZCBQcm9qZWN0XCIsIFwidGhyZWVcIiwgW1xuICAvLyAgIGNyZWF0ZVRvRG8oXG4gIC8vICAgICBcIm9uZVwiLFxuICAvLyAgICAgXCJ0ZXN0IHRvZG9cIixcbiAgLy8gICAgIFwidGVzdCB0b2RvIGRlc2NyaXB0aW9uXCIsXG4gIC8vICAgICBcInRlc3QgdG9kbyBkdWUgZGF0ZVwiLFxuICAvLyAgICAgXCJ0ZXN0IHRvZG8gcHJpb3JpdHlcIixcbiAgLy8gICAgIFwidGhyZWVcIixcbiAgLy8gICAgIFwidGVzdCB0b2RvIHN0YXR1c1wiXG4gIC8vICAgKSxcbiAgLy8gXSk7XG5cbiAgLy8gU3RvcmFnZSgpLnB1dERhdGEoXCJwcm9qZWN0c1wiLCB0ZXN0UHJvaik7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IFN0b3JhZ2UoKS5mZXRjaERhdGEoXCJwcm9qZWN0c1wiKTtcblxuICAvLyByZW5kZXIgdGhlIG5hdmJhclxuICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbiAgYXBwLmFwcGVuZENoaWxkKHJlbmRlck1lbnUoKS5tZW51KTtcblxuICByZW5kZXJQcm9qZWN0cyhjdXJyZW50UHJvamVjdHMpO1xuXG4gIGNvbnN0IFRvRG9MaXN0SGVhZGVyID0gXCJBbGwgVG9Eb3NcIjtcblxuICAvLyBpbml0aWFsbHkgcmVuZGVyIGFsbCB0b2Rvc1xuICBsZXQgYWxsSWRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGN1cnJlbnRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0OiBQcm9qZWN0KSA9PiB7XG4gICAgYWxsSWRzLnB1c2gocHJvamVjdC5wcm9qZWN0SUQpO1xuICB9KTtcblxuICBhcHAuYXBwZW5kQ2hpbGQoXG4gICAgcmVuZGVydG9kb2xpc3QoXG4gICAgICBjdXJyZW50UHJvamVjdHMsXG4gICAgICBhbGxJZHMsXG4gICAgICBUb0RvTGlzdEhlYWRlclxuICAgICkuZ2VuZXJhdGVUb0RvTGlzdEhUTUwoKS50b2RvbGlzdFxuICApO1xufVxuXG5pbml0YWxpemVBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==