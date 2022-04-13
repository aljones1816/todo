/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AppLogic/Project.ts":
/*!*********************************!*\
  !*** ./src/AppLogic/Project.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function createProject(title, projectID, ToDos) {
    function addToDo(todo) {
        ToDos.push(todo);
    }
    function DeleteToDo(todoID) {
        var index = ToDos.findIndex(function (ToDo) {
            return ToDo.getToDoID() === todoID;
        });
        ToDos.splice(index, 1);
    }
    function getProjectID() {
        return projectID;
    }
    return { title: title, ToDos: ToDos, addToDo: addToDo, DeleteToDo: DeleteToDo, getProjectID: getProjectID };
}
exports["default"] = createProject;


/***/ }),

/***/ "./src/AppLogic/Storage.ts":
/*!*********************************!*\
  !*** ./src/AppLogic/Storage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Storage = void 0;
var Project_1 = __webpack_require__(/*! ./Project */ "./src/AppLogic/Project.ts");
var Storage = (function () {
    function fetchData(schema) {
        var fetchedData = JSON.parse(window.localStorage.getItem(schema) || "[]");
        console.log("the data I just fetched is:", fetchedData);
        if (schema === "projects" && fetchedData.length != 0) {
            return fetchedData.map(function (project) {
                return (0, Project_1.default)(project.title, project.projectID, project.ToDos);
            });
        }
        else
            return fetchedData;
    }
    function putData(schema, newData) {
        var currentdata = fetchData(schema);
        currentdata.push(newData);
        window.localStorage.setItem(schema, JSON.stringify(currentdata));
    }
    return { fetchData: fetchData, putData: putData };
});
exports.Storage = Storage;


/***/ }),

/***/ "./src/AppLogic/User.ts":
/*!******************************!*\
  !*** ./src/AppLogic/User.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Storage_1 = __webpack_require__(/*! ./Storage */ "./src/AppLogic/Storage.ts");
function createUser(username, password) {
    function handleRegisterUser() {
        var currentUsers;
        if ((0, Storage_1.Storage)().fetchData("users")) {
            currentUsers = (0, Storage_1.Storage)().fetchData("users");
        }
        else {
            currentUsers = [];
        }
        var user = currentUsers.find(function (user) {
            return user.username === username;
        });
        if (user) {
            return false;
        }
        else {
            var newUser = {
                username: username,
                password: password,
            };
            currentUsers.push(newUser);
            (0, Storage_1.Storage)().putData("users", currentUsers);
            return true;
        }
    }
    return { handleRegisterUser: handleRegisterUser };
}
exports["default"] = createUser;


/***/ }),

/***/ "./src/UI/menu.ts":
/*!************************!*\
  !*** ./src/UI/menu.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function renderNav() {
    var content = document.getElementById('navbar');
    var navHtml = "\n        <div class=navbar>\n        <svg id = \"menuBar\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-5 -7 24 24\" width=\"24\" fill=\"currentColor\"><path d=\"M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z\"></path></svg>\n        </div>\n    ";
    content.innerHTML += navHtml;
    return true;
}
exports["default"] = renderNav;


/***/ }),

/***/ "./src/UI/projects.ts":
/*!****************************!*\
  !*** ./src/UI/projects.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
exports["default"] = renderProjects;


/***/ }),

/***/ "./src/UI/todolist.ts":
/*!****************************!*\
  !*** ./src/UI/todolist.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function rendertodolist(projectArray, projectID) {
    //filter project array to only include project with id = projectID
    var projects = projectArray.filter(function (project) { return project.projectID === projectID; });
    function generateToDoHTML(todoObject) {
        var todohtml = "\n        <div class=\"todo\" id=\"".concat(todoObject.toDoID, "\">\n            <p>").concat(todoObject.title, "</p>\n            <p>").concat(todoObject.dueDate, "</p>\n            <p>").concat(todoObject.status, "</p>\n        </div>\n        ");
        return todohtml;
    }
    function renderNewToDoForm() {
        var content = document.getElementById('content');
        var formHTML = "\n        <div class=\"newtodoform\">\n            <form id=\"newtodoform\">\n                <label for=\"title\">Title</label>\n                <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Title\">\n                <label for=\"duedate\">Due Date</label>\n                <input type=\"date\" id=\"duedate\" name=\"duedate\">\n                <label for=\"status\">Status</label>\n                <select id=\"status\" name=\"status\">\n                    <option value=\"todo\">To Do</option>\n                    <option value=\"inprogress\">In Progress</option>\n                    <option value=\"done\">Done</option>\n                </select>\n                <button id=\"submitNewToDo\" type=\"submit\">Submit</button>\n            </form>\n        </div>\n        ";
        content.innerHTML += formHTML;
    }
    function renderNewToDoButton() {
        var content = document.getElementById('content');
        var buttonHTML = "\n        <svg id = \"newtodo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-2 -2 24 24\" width=\"24\" fill=\"currentColor\"><path d=\"M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-7v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2h-4z\"></path></svg>\n        ";
        content.innerHTML += buttonHTML;
    }
    console.log("the data I fetched is:", projectArray);
    console.log("the projects are:", projects);
    var content = document.getElementById('content');
    projects.map(function (project) {
        project.ToDos.map(function (todo) {
            var todohtml = generateToDoHTML(todo);
            content.innerHTML += todohtml;
        });
    });
    return { renderNewToDoForm: renderNewToDoForm, renderNewToDoButton: renderNewToDoButton };
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var menu_1 = __webpack_require__(/*! ./UI/menu */ "./src/UI/menu.ts");
var User_1 = __webpack_require__(/*! ./AppLogic/User */ "./src/AppLogic/User.ts");
var Storage_1 = __webpack_require__(/*! ./AppLogic/Storage */ "./src/AppLogic/Storage.ts");
var projects_1 = __webpack_require__(/*! ./UI/projects */ "./src/UI/projects.ts");
var todolist_1 = __webpack_require__(/*! ./UI/todolist */ "./src/UI/todolist.ts");
function initalizeApp() {
    // render the navbar
    (0, menu_1.default)();
    (0, User_1.default)("Alan", "123");
    var currentProjects = (0, Storage_1.Storage)().fetchData("projects");
    (0, projects_1.default)(currentProjects);
    (0, todolist_1.default)(currentProjects, "three");
}
initalizeApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLHNFQUFrQztBQUNsQyxrRkFBeUM7QUFDekMsMkZBQTZDO0FBQzdDLGtGQUEyQztBQUMzQyxrRkFBMkM7QUFFM0MsU0FBUyxZQUFZO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBUyxHQUFFLENBQUM7SUFDWixrQkFBVSxFQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQixJQUFNLGVBQWUsR0FBRyxxQkFBTyxHQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELHNCQUFjLEVBQUMsZUFBZSxDQUFDLENBQUM7SUFDaEMsc0JBQWMsRUFBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFHM0MsQ0FBQztBQUVELFlBQVksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9BcHBMb2dpYy9Qcm9qZWN0LnRzIiwid2VicGFjazovL3RvZG8vLi9zcmMvQXBwTG9naWMvU3RvcmFnZS50cyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0FwcExvZ2ljL1VzZXIudHMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9VSS9tZW51LnRzIiwid2VicGFjazovL3RvZG8vLi9zcmMvVUkvcHJvamVjdHMudHMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9VSS90b2RvbGlzdC50cyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb0RvfSBmcm9tIFwiLi9Ub0RvXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdCB7XG4gICAgcHJvamVjdElEOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBUb0RvczogVG9Eb1tdO1xuICAgIGdldFByb2plY3RJRDogKCkgPT4gc3RyaW5nO1xuICAgIGFkZFRvRG86ICgpID0+IHZvaWQ7XG4gICAgZGVsZXRlVG9EbzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHByb2plY3RJRDogc3RyaW5nLFxuICAgIFRvRG9zOiBUb0RvW11cblxuKSB7XG4gIFxuICAgIGZ1bmN0aW9uIGFkZFRvRG8odG9kbzogVG9Ebykge1xuICAgICAgVG9Eb3MucHVzaCh0b2RvKTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIERlbGV0ZVRvRG8odG9kb0lEOiBzdHJpbmcpIHtcbiAgICAgIGxldCBpbmRleCA9IFRvRG9zLmZpbmRJbmRleChmdW5jdGlvbiAoVG9Ebykge1xuICAgICAgICByZXR1cm4gVG9Eby5nZXRUb0RvSUQoKSA9PT0gdG9kb0lEO1xuICAgICAgfSk7XG4gICAgICBUb0Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0SUQoKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0SUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdGl0bGUsIFRvRG9zLCBhZGRUb0RvLCBEZWxldGVUb0RvLCBnZXRQcm9qZWN0SUQgfTtcbiAgXG59IiwiaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5cbmNvbnN0IFN0b3JhZ2UgPSAoKCkgPT57XG5cbiAgIGZ1bmN0aW9uIGZldGNoRGF0YShzY2hlbWE6IHN0cmluZykge1xuICAgIGxldCBmZXRjaGVkRGF0YSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHNjaGVtYSkgfHwgXCJbXVwiKTtcbiAgICBjb25zb2xlLmxvZyhcInRoZSBkYXRhIEkganVzdCBmZXRjaGVkIGlzOlwiLCBmZXRjaGVkRGF0YSk7XG4gICAgaWYgKHNjaGVtYSA9PT0gXCJwcm9qZWN0c1wiICYmIGZldGNoZWREYXRhLmxlbmd0aCAhPSAwKSB7XG4gICAgICByZXR1cm4gZmV0Y2hlZERhdGEubWFwKChwcm9qZWN0OiBQcm9qZWN0KSA9PlxuICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3QudGl0bGUsIHByb2plY3QucHJvamVjdElELCBwcm9qZWN0LlRvRG9zKVxuICAgICAgKTtcbiAgICB9IGVsc2UgcmV0dXJuIGZldGNoZWREYXRhO1xufVxuICBcbmZ1bmN0aW9uIHB1dERhdGEoc2NoZW1hOiBzdHJpbmcsIG5ld0RhdGE6IG9iamVjdCkge1xuICAgIGxldCBjdXJyZW50ZGF0YSA9IGZldGNoRGF0YShzY2hlbWEpO1xuICAgIGN1cnJlbnRkYXRhLnB1c2gobmV3RGF0YSk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHNjaGVtYSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudGRhdGEpKTtcbiAgfVxuXG4gIHJldHVybiB7ZmV0Y2hEYXRhLCBwdXREYXRhfTtcbn0pO1xuXG5leHBvcnQge1N0b3JhZ2V9OyIsImltcG9ydCB7U3RvcmFnZX0gZnJvbSBcIi4vU3RvcmFnZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVVzZXIodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIFxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlZ2lzdGVyVXNlcigpIHtcbiAgICBsZXQgY3VycmVudFVzZXJzOiBVc2VyW107XG4gICAgaWYgKFN0b3JhZ2UoKS5mZXRjaERhdGEoXCJ1c2Vyc1wiKSkge1xuICAgICAgY3VycmVudFVzZXJzID0gU3RvcmFnZSgpLmZldGNoRGF0YShcInVzZXJzXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50VXNlcnMgPSBbXTtcbiAgICB9XG4gICAgbGV0IHVzZXIgPSBjdXJyZW50VXNlcnMuZmluZChmdW5jdGlvbiAodXNlcjogVXNlcikge1xuICAgICAgcmV0dXJuIHVzZXIudXNlcm5hbWUgPT09IHVzZXJuYW1lO1xuICAgIH0pO1xuICAgIGlmICh1c2VyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdVc2VyID0ge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9O1xuICAgICAgY3VycmVudFVzZXJzLnB1c2gobmV3VXNlcik7XG4gICAgICBTdG9yYWdlKCkucHV0RGF0YShcInVzZXJzXCIsIGN1cnJlbnRVc2Vycyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtoYW5kbGVSZWdpc3RlclVzZXJ9XG4gICAgXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJOYXYoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKVxuICAgIGxldCBuYXZIdG1sID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPW5hdmJhcj5cbiAgICAgICAgPHN2ZyBpZCA9IFwibWVudUJhclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiLTUgLTcgMjQgMjRcIiB3aWR0aD1cIjI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMSAwaDEyYTEgMSAwIDAgMSAwIDJIMWExIDEgMCAxIDEgMC0yem0wIDhoMTJhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDEgMSAwLTJ6bTAtNGgxMmExIDEgMCAwIDEgMCAySDFhMSAxIDAgMSAxIDAtMnpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgY29udGVudC5pbm5lckhUTUwgKz0gbmF2SHRtbDtcbiAgICByZXR1cm4gdHJ1ZVxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vQXBwTG9naWMvUHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0c0xpc3Q6IFByb2plY3RbXSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgICAvLyB3ZSBjaGVjayBpZiBsaXN0IGlzIG51bGwgaW4gaW5kZXggc28gYXNzdW1lIG5vdCBudWxsXG4gICAgcHJvamVjdHNMaXN0Lm1hcChwcm9qZWN0ID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RIVE1MID0gYFxuICAgICAgICA8bGkgaWQ9XCIke3Byb2plY3QucHJvamVjdElEfVwiPiR7cHJvamVjdC50aXRsZX08L2xpPlxuICAgICAgICBgO1xuICAgICAgICBwcm9qZWN0cy5pbm5lckhUTUwgKz0gcHJvamVjdEhUTUw7XG4gICAgICAgIFxuICAgIH0pXG4gICAgXG59IiwiaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuLi9BcHBMb2dpYy9Qcm9qZWN0JztcbmltcG9ydCB7VG9Eb30gZnJvbSAnLi4vQXBwTG9naWMvVG9Ebyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcnRvZG9saXN0KHByb2plY3RBcnJheTogUHJvamVjdFtdLCBwcm9qZWN0SUQ6IHN0cmluZykge1xuICAgIC8vZmlsdGVyIHByb2plY3QgYXJyYXkgdG8gb25seSBpbmNsdWRlIHByb2plY3Qgd2l0aCBpZCA9IHByb2plY3RJRFxuICAgIGxldCBwcm9qZWN0cyA9IHByb2plY3RBcnJheS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3RJRCA9PT0gcHJvamVjdElEKVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVUb0RvSFRNTCh0b2RvT2JqZWN0OiBUb0RvKSB7XG4gICAgICAgIGxldCB0b2RvaHRtbCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9cIiBpZD1cIiR7dG9kb09iamVjdC50b0RvSUR9XCI+XG4gICAgICAgICAgICA8cD4ke3RvZG9PYmplY3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgPHA+JHt0b2RvT2JqZWN0LmR1ZURhdGV9PC9wPlxuICAgICAgICAgICAgPHA+JHt0b2RvT2JqZWN0LnN0YXR1c308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIFxuICAgICAgICByZXR1cm4gdG9kb2h0bWxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJOZXdUb0RvRm9ybSAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgICAgIGxldCBmb3JtSFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5ld3RvZG9mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybSBpZD1cIm5ld3RvZG9mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZWRhdGVcIj5EdWUgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVkYXRlXCIgbmFtZT1cImR1ZWRhdGVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhdHVzXCI+U3RhdHVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic3RhdHVzXCIgbmFtZT1cInN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidG9kb1wiPlRvIERvPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnByb2dyZXNzXCI+SW4gUHJvZ3Jlc3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRvbmVcIj5Eb25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdE5ld1RvRG9cIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCArPSBmb3JtSFRNTDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJOZXdUb0RvQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgICAgICBsZXQgYnV0dG9uSFRNTCA9IGBcbiAgICAgICAgPHN2ZyBpZCA9IFwibmV3dG9kb1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiLTIgLTIgMjQgMjRcIiB3aWR0aD1cIjI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTB6bTAtMmE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNnptMS03djRhMSAxIDAgMCAxLTIgMHYtNEg1YTEgMSAwIDAgMSAwLTJoNFY1YTEgMSAwIDEgMSAyIDB2NGg0YTEgMSAwIDAgMSAwIDJoLTR6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICBgO1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCArPSBidXR0b25IVE1MO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwidGhlIGRhdGEgSSBmZXRjaGVkIGlzOlwiLCBwcm9qZWN0QXJyYXkpXG4gICAgY29uc29sZS5sb2coXCJ0aGUgcHJvamVjdHMgYXJlOlwiLCBwcm9qZWN0cylcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiB7XG4gICAgICAgIHByb2plY3QuVG9Eb3MubWFwKHRvZG8gPT4ge1xuICAgICAgICAgICAgbGV0IHRvZG9odG1sID0gZ2VuZXJhdGVUb0RvSFRNTCh0b2RvKVxuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgKz0gdG9kb2h0bWxcbiAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4ge3JlbmRlck5ld1RvRG9Gb3JtLCByZW5kZXJOZXdUb0RvQnV0dG9ufVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgcmVuZGVyTmF2IGZyb20gXCIuL1VJL21lbnVcIjtcbmltcG9ydCBjcmVhdGVVc2VyIGZyb20gXCIuL0FwcExvZ2ljL1VzZXJcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9BcHBMb2dpYy9TdG9yYWdlXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSBcIi4vVUkvcHJvamVjdHNcIjtcbmltcG9ydCByZW5kZXJ0b2RvbGlzdCBmcm9tIFwiLi9VSS90b2RvbGlzdFwiO1xuXG5mdW5jdGlvbiBpbml0YWxpemVBcHAoKSB7XG4gIC8vIHJlbmRlciB0aGUgbmF2YmFyXG4gIHJlbmRlck5hdigpO1xuICBjcmVhdGVVc2VyKFwiQWxhblwiLCBcIjEyM1wiKTtcbiAgY29uc3QgY3VycmVudFByb2plY3RzID0gU3RvcmFnZSgpLmZldGNoRGF0YShcInByb2plY3RzXCIpO1xuICByZW5kZXJQcm9qZWN0cyhjdXJyZW50UHJvamVjdHMpO1xuICByZW5kZXJ0b2RvbGlzdChjdXJyZW50UHJvamVjdHMsIFwidGhyZWVcIik7XG5cblxufVxuXG5pbml0YWxpemVBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==