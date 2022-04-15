/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
            return 4;
        }
        else if (
        // case when user input wrong password
        fetchedData.some(function (user) {
            return user.username === username && user.password !== password;
        })) {
            // TODO return an error instead of false so we can let user know their password is wrong
            return 5;
        }
        else {
            var userJSON = fetchedData.find(function (user) { return user.username === username; });
            handleSetActiveUser(userJSON.userID);
            // return a user object with the required methods since JSON stores only text
            // case when projects exist
            if (userJSON.projects.length != 0) {
                return (0, User_1.createUser)(userJSON.userID, userJSON.username, userJSON.password, userJSON.projects.map(function (project) {
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
                return (0, User_1.createUser)(userJSON.userID, userJSON.username, userJSON.password);
            }
        }
    };
    var handleUserLogout = function () {
        window.localStorage.removeItem("activeUser");
    };
    var handleSetActiveUser = function (userID) {
        JSON.stringify(window.localStorage.setItem("activeUser", userID));
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
        // check if user already exists
        if (users.some(function (user) { return user.username === userName; })) {
            return false;
        }
        else {
            users.push(newUser);
        }
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
    var getProjects = function () { return projects; };
    var getUsername = function () { return username; };
    var getPassword = function () { return password; };
    var getUserID = function () { return userID; };
    return {
        username: username,
        password: password,
        userID: userID,
        newProject: newProject,
        deleteProject: deleteProject,
        projects: projects,
    };
};
exports.createUser = createUser;


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
var DataHandler_1 = __webpack_require__(/*! ./AppLogic/DataHandler */ "./src/AppLogic/DataHandler.ts");
function initalizeApp() {
    var app = document.getElementById("app");
    // create a form to login a new user
    var loginForm = document.createElement("form");
    loginForm.id = "loginForm";
    var loginHeading = document.createElement("h2");
    loginHeading.innerText = "login";
    loginForm.appendChild(loginHeading);
    var usernameLabel = document.createElement("label");
    usernameLabel.innerText = "Username: ";
    var usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.id = "usernameInput";
    var passwordLabel = document.createElement("label");
    passwordLabel.innerText = "Password: ";
    var passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "passwordInput";
    var loginButton = document.createElement("button");
    loginButton.innerText = "login";
    loginButton.id = "loginButton";
    loginForm.appendChild(usernameLabel);
    loginForm.appendChild(usernameInput);
    loginForm.appendChild(passwordLabel);
    loginForm.appendChild(passwordInput);
    loginForm.appendChild(loginButton);
    var usernameAlert = document.createElement("p");
    app.appendChild(loginForm);
    app.appendChild(usernameAlert);
    loginButton.addEventListener("click", function (e) {
        e.preventDefault();
        var username = usernameInput.value;
        var password = passwordInput.value;
        var guy = (0, DataHandler_1.DataHandler)().handleUserLogin(username, password);
        console.log(guy);
        if (guy != 4 && guy != 5) {
            usernameAlert.innerText = "";
            usernameAlert.innerText = "Welcome ".concat(guy.username, "!");
            usernameInput.value = "";
            passwordInput.value = "";
        }
        else if (guy === 4) {
            usernameAlert.innerText = "";
            usernameAlert.innerText = "No user with that name bud!";
            var registerButton = document.createElement("button");
            registerButton.innerText = "register a new user instead";
            registerButton.id = "registerButton";
            usernameAlert.appendChild(registerButton);
            registerButton.addEventListener("click", function (e) {
                e.preventDefault();
                (0, DataHandler_1.DataHandler)().handleRegisterUser(username, password);
                (0, DataHandler_1.DataHandler)().handleUserLogin(username, password);
                usernameAlert.innerText = "";
                usernameAlert.innerText = "Welcome ".concat(username, "!");
            });
        }
        else {
            usernameAlert.innerText = "";
            usernameAlert.innerText = "Wrong Password buttface!";
        }
    });
}
initalizeApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDO2dCQUNsRCxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsYUFBYSxDQUFDLFNBQVMsR0FBRyxrQkFBVyxRQUFRLE1BQUcsQ0FBQztZQUNuRCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUM3QixhQUFhLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO1NBQ3REO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsWUFBWSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL0FwcExvZ2ljL0RhdGFIYW5kbGVyLnRzIiwid2VicGFjazovL3RvZG8vLi9zcmMvQXBwTG9naWMvUHJvamVjdC50cyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0FwcExvZ2ljL1RvRG8udHMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9BcHBMb2dpYy9Vc2VyLnRzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IHsgVXNlciwgY3JlYXRlVXNlciB9IGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRvRG8sIFRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5cbmludGVyZmFjZSBKU09OVXNlciB7XG4gIHVzZXJJRDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5jb25zdCBEYXRhSGFuZGxlciA9ICgpID0+IHtcbiAgLyp0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIGV4aXN0aW5nIHVzZXIgb2JqZWN0cywgb3IgYW55IGVtcHR5IGFycmF5IGlmIHRoZXJlIGFyZSBubyB1c2Vycy4gXG4gIENhbiBzdWJzdGl0dXRlIGFueSBmZXRjaGluZyBtZXRob2QgaGVyZSBhcyBsb25nIGFzIGl0IHJldHVybiB0aGUgY29ycmVjdCBzdHJ1Y3R1cmUqL1xuICBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcnNcIikgfHwgXCJbXVwiKTtcbiAgfTtcblxuICAvKiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYSB1c2VyIG9iamVjdCBjb250YWluaW5nIGFuIGFycmF5IG9mIHByb2plY3Qgb2JqZWN0cywgaWYgYW55IGV4aXN0IHdoaWNoIGNvbnRhaW4gYXJyYXlzIG9mIHRvZG8gb2JqZWN0cywgaWYgYW55IGV4aXN0Ki9cbiAgY29uc3QgaGFuZGxlVXNlckxvZ2luID0gKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgZmV0Y2hlZERhdGEgPSBmZXRjaFVzZXJzKCk7XG5cbiAgICAvLyByZXR1cm4gZmFsc2UgaWYgYWN0aXZlVXNlcklEIGlzIG5vdCBpbiB1c2Vyc1xuICAgIGlmICghZmV0Y2hlZERhdGEuc29tZSgodXNlcjogSlNPTlVzZXIpID0+IHVzZXIudXNlcm5hbWUgPT09IHVzZXJuYW1lKSkge1xuICAgICAgLy8gVE9ETyByZXR1cm4gYW4gZXJyb3IgaW5zdGVhZCBvZiBmYWxzZSBzbyB3ZSBjYW4gcHJvbXB0IHVzZXJzIHRvIHNpZ24gdXBcbiAgICAgIHJldHVybiA0O1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBjYXNlIHdoZW4gdXNlciBpbnB1dCB3cm9uZyBwYXNzd29yZFxuICAgICAgZmV0Y2hlZERhdGEuc29tZShcbiAgICAgICAgKHVzZXI6IEpTT05Vc2VyKSA9PlxuICAgICAgICAgIHVzZXIudXNlcm5hbWUgPT09IHVzZXJuYW1lICYmIHVzZXIucGFzc3dvcmQgIT09IHBhc3N3b3JkXG4gICAgICApXG4gICAgKSB7XG4gICAgICAvLyBUT0RPIHJldHVybiBhbiBlcnJvciBpbnN0ZWFkIG9mIGZhbHNlIHNvIHdlIGNhbiBsZXQgdXNlciBrbm93IHRoZWlyIHBhc3N3b3JkIGlzIHdyb25nXG4gICAgICByZXR1cm4gNTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlckpTT04gPSBmZXRjaGVkRGF0YS5maW5kKFxuICAgICAgICAodXNlcjogSlNPTlVzZXIpID0+IHVzZXIudXNlcm5hbWUgPT09IHVzZXJuYW1lXG4gICAgICApO1xuICAgICAgaGFuZGxlU2V0QWN0aXZlVXNlcih1c2VySlNPTi51c2VySUQpO1xuXG4gICAgICAvLyByZXR1cm4gYSB1c2VyIG9iamVjdCB3aXRoIHRoZSByZXF1aXJlZCBtZXRob2RzIHNpbmNlIEpTT04gc3RvcmVzIG9ubHkgdGV4dFxuICAgICAgLy8gY2FzZSB3aGVuIHByb2plY3RzIGV4aXN0XG4gICAgICBpZiAodXNlckpTT04ucHJvamVjdHMubGVuZ3RoICE9IDApIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVVzZXIoXG4gICAgICAgICAgdXNlckpTT04udXNlcklELFxuICAgICAgICAgIHVzZXJKU09OLnVzZXJuYW1lLFxuICAgICAgICAgIHVzZXJKU09OLnBhc3N3b3JkLFxuICAgICAgICAgIHVzZXJKU09OLnByb2plY3RzLm1hcChcbiAgICAgICAgICAgIChwcm9qZWN0OiB7XG4gICAgICAgICAgICAgIHByb2plY3RJRDogc3RyaW5nO1xuICAgICAgICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgICBUb0Rvczoge1xuICAgICAgICAgICAgICAgIHRvZG9JRDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IHN0cmluZztcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHN0cmluZztcbiAgICAgICAgICAgICAgfVtdO1xuICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAvLyBjYXNlIHdoZW4gcHJvamVjdCBoYXMgdG9kb3NcbiAgICAgICAgICAgICAgaWYgKHByb2plY3QuVG9Eb3MubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgICAgICAgICAgICAgcHJvamVjdC50aXRsZSxcbiAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdElELFxuICAgICAgICAgICAgICAgICAgcHJvamVjdC5Ub0Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVRvRG8oXG4gICAgICAgICAgICAgICAgICAgICAgdG9kby50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICB0b2RvLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgIHRvZG8uc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgIHRvZG8udG9kb0lEXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2FzZSB3aGVuIHByb2plY3QgaGFzIG5vIHRvZG9zXG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LnByb2plY3RJRCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjYXNlIHdoZW4gbm8gcHJvamVjdHMgZXhpc3RcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVVzZXIoXG4gICAgICAgICAgdXNlckpTT04udXNlcklELFxuICAgICAgICAgIHVzZXJKU09OLnVzZXJuYW1lLFxuICAgICAgICAgIHVzZXJKU09OLnBhc3N3b3JkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVzZXJMb2dvdXQgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYWN0aXZlVXNlclwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZXRBY3RpdmVVc2VyID0gKHVzZXJJRDogc3RyaW5nKSA9PiB7XG4gICAgSlNPTi5zdHJpbmdpZnkod2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZlVXNlclwiLCB1c2VySUQpKTtcbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZVVVSUQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZShcbiAgICAgIC9beHldL2csXG4gICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICB2YXIgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMCxcbiAgICAgICAgICB2ID0gYyA9PSBcInhcIiA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlZ2lzdGVyVXNlciA9ICh1c2VyTmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgbGV0IHVzZXJzID0gZmV0Y2hVc2VycygpO1xuICAgIGxldCB1c2VySUQgPSBnZW5lcmF0ZVVVSUQoKTtcbiAgICBsZXQgbmV3VXNlciA9IGNyZWF0ZVVzZXIodXNlcklELCB1c2VyTmFtZSwgcGFzc3dvcmQpO1xuICAgIC8vIGNoZWNrIGlmIHVzZXIgYWxyZWFkeSBleGlzdHNcbiAgICBpZiAodXNlcnMuc29tZSgodXNlcjogSlNPTlVzZXIpID0+IHVzZXIudXNlcm5hbWUgPT09IHVzZXJOYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB1c2Vycy5wdXNoKG5ld1VzZXIpO1xuICAgIH1cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2Vyc1wiLCBKU09OLnN0cmluZ2lmeSh1c2VycykpO1xuICAgIHJldHVybiBuZXdVc2VyO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVVzZXJzUHJvamVjdHMgPSAodXNlcklEOiBzdHJpbmcsIHVwZGF0ZWRQcm9qZWN0czogUHJvamVjdFtdKSA9PiB7XG4gICAgbGV0IHVzZXJzID0gZmV0Y2hVc2VycygpO1xuICAgIHVzZXJzLmZpbmQoKHVzZXI6IEpTT05Vc2VyKSA9PiB1c2VyLnVzZXJJRCA9PT0gdXNlcklEKS5wcm9qZWN0cyA9XG4gICAgICB1cGRhdGVkUHJvamVjdHM7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcnNcIiwgSlNPTi5zdHJpbmdpZnkodXNlcnMpKTtcbiAgfTtcblxuICBjb25zdCBjaGVja0ZvckFjdGl2ZVVzZXIgPSAoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZVVzZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3RpdmVVc2VyXCIpO1xuICAgIGlmIChhY3RpdmVVc2VyKSB7XG4gICAgICByZXR1cm4gYWN0aXZlVXNlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETyByZXR1cm4gZXJyb3IgY29kZSBzbyB3ZSBjYW4gcHJvbXB0IGEgdXNlciB0byBsb2dpblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdlbmVyYXRlVVVJRCxcbiAgICBoYW5kbGVSZWdpc3RlclVzZXIsXG4gICAgaGFuZGxlVXNlckxvZ2luLFxuICAgIGhhbmRsZVVzZXJMb2dvdXQsXG4gICAgY2hlY2tGb3JBY3RpdmVVc2VyLFxuICAgIHVwZGF0ZVVzZXJzUHJvamVjdHMsXG4gIH07XG59O1xuXG5leHBvcnQgeyBEYXRhSGFuZGxlciB9O1xuIiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgVG9Eb3M6IFRvRG9bXTtcbiAgZ2V0UHJvamVjdElEOiAoKSA9PiBzdHJpbmc7XG4gIGFkZFRvRG86ICh0b2RvOiBUb0RvKSA9PiB2b2lkO1xuICBkZWxldGVUb0RvOiAodG9kb0lEOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KFxuICBwcm9qZWN0SUQ6IHN0cmluZyxcbiAgdGl0bGU6IHN0cmluZyxcbiAgVG9Eb3M6IFRvRG9bXSA9IFtdXG4pIHtcbiAgZnVuY3Rpb24gYWRkVG9Ebyh0b2RvOiBUb0RvKSB7XG4gICAgVG9Eb3MucHVzaCh0b2RvKTtcbiAgICByZXR1cm47XG4gIH1cbiAgcHJvamVjdElEO1xuICBjb25zdCBnZXRQcm9qZWN0SUQgPSAoKSA9PiBwcm9qZWN0SUQ7XG5cbiAgZnVuY3Rpb24gZGVsZXRlVG9Ebyh0b2RvSUQ6IHN0cmluZykge1xuICAgIGxldCBpbmRleCA9IFRvRG9zLmZpbmRJbmRleChmdW5jdGlvbiAoVG9Ebykge1xuICAgICAgcmV0dXJuIFRvRG8udG9kb0lEID09PSB0b2RvSUQ7XG4gICAgfSk7XG4gICAgVG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4geyB0aXRsZSwgVG9Eb3MsIGdldFByb2plY3RJRCwgYWRkVG9EbywgZGVsZXRlVG9EbyB9O1xufVxuIiwiaW50ZXJmYWNlIFRvRG8ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkdWVEYXRlOiBzdHJpbmc7XG4gIHByaW9yaXR5OiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xuICB0b2RvSUQ6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9EbyhcbiAgdG9kb0lEOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIGR1ZURhdGU6IHN0cmluZyxcbiAgcHJpb3JpdHk6IHN0cmluZyxcbiAgc3RhdHVzOiBzdHJpbmdcbikge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgc3RhdHVzLFxuICAgIHRvZG9JRCxcbiAgfTtcbn1cblxuZXhwb3J0IHsgVG9EbywgY3JlYXRlVG9EbyB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCwgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCB7IERhdGFIYW5kbGVyIH0gZnJvbSBcIi4vRGF0YUhhbmRsZXJcIjtcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5cbmludGVyZmFjZSBVc2VyIHtcbiAgZ2V0VXNlcm5hbWU6ICgpID0+IHN0cmluZztcbiAgZ2V0UGFzc3dvcmQ6ICgpID0+IHN0cmluZztcbiAgZ2V0VXNlcklEOiAoKSA9PiBzdHJpbmc7XG4gIGdldFByb2plY3RzOiAoKSA9PiBQcm9qZWN0W107XG4gIG5ld1Byb2plY3Q6ICh0aXRsZTogc3RyaW5nLCB0b2RvczogVG9Eb1tdKSA9PiB2b2lkO1xuICBkZWxldGVQcm9qZWN0OiAocHJvamVjdElEOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbi8vIGZ1bmN0aW9uIHdpbGwgaW5zdGFudGlhdGUgYSBuZXcgdXNlciBvYmplY3Qgd2l0aCBhbiBlbXB0eSBhcnJheSBvZiBwcm9qZWN0cyBieSBkZWZhdWx0XG5jb25zdCBjcmVhdGVVc2VyID0gKFxuICB1c2VySUQ6IHN0cmluZyxcbiAgdXNlcm5hbWU6IHN0cmluZyxcbiAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgcHJvamVjdHM6IFByb2plY3RbXSA9IFtdXG4pID0+IHtcbiAgdXNlcklEO1xuICB1c2VybmFtZTtcbiAgcGFzc3dvcmQ7XG4gIHByb2plY3RzO1xuXG4gIGNvbnN0IG5ld1Byb2plY3QgPSAodGl0bGU6IHN0cmluZywgdG9kb3M6IFRvRG9bXSA9IFtdKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QodGl0bGUsIERhdGFIYW5kbGVyKCkuZ2VuZXJhdGVVVUlEKCksIHRvZG9zKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdElEOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoZnVuY3Rpb24gKHByb2plY3Q6IFByb2plY3QpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0LmdldFByb2plY3RJRCgpID09PSBwcm9qZWN0SUQ7XG4gICAgfSk7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGdldFVzZXJuYW1lID0gKCkgPT4gdXNlcm5hbWU7XG4gIGNvbnN0IGdldFBhc3N3b3JkID0gKCkgPT4gcGFzc3dvcmQ7XG4gIGNvbnN0IGdldFVzZXJJRCA9ICgpID0+IHVzZXJJRDtcblxuICByZXR1cm4ge1xuICAgIHVzZXJuYW1lLFxuICAgIHBhc3N3b3JkLFxuICAgIHVzZXJJRCxcbiAgICBuZXdQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgcHJvamVjdHMsXG4gIH07XG59O1xuXG5leHBvcnQgeyBVc2VyLCBjcmVhdGVVc2VyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgRGF0YUhhbmRsZXIgfSBmcm9tIFwiLi9BcHBMb2dpYy9EYXRhSGFuZGxlclwiO1xuXG5mdW5jdGlvbiBpbml0YWxpemVBcHAoKSB7XG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuXG4gIC8vIGNyZWF0ZSBhIGZvcm0gdG8gbG9naW4gYSBuZXcgdXNlclxuICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgbG9naW5Gb3JtLmlkID0gXCJsb2dpbkZvcm1cIjtcblxuICBjb25zdCBsb2dpbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGxvZ2luSGVhZGluZy5pbm5lclRleHQgPSBcImxvZ2luXCI7XG5cbiAgbG9naW5Gb3JtLmFwcGVuZENoaWxkKGxvZ2luSGVhZGluZyk7XG5cbiAgY29uc3QgdXNlcm5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdXNlcm5hbWVMYWJlbC5pbm5lclRleHQgPSBcIlVzZXJuYW1lOiBcIjtcblxuICBjb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB1c2VybmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgdXNlcm5hbWVJbnB1dC5pZCA9IFwidXNlcm5hbWVJbnB1dFwiO1xuXG4gIGNvbnN0IHBhc3N3b3JkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHBhc3N3b3JkTGFiZWwuaW5uZXJUZXh0ID0gXCJQYXNzd29yZDogXCI7XG5cbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgcGFzc3dvcmRJbnB1dC50eXBlID0gXCJwYXNzd29yZFwiO1xuICBwYXNzd29yZElucHV0LmlkID0gXCJwYXNzd29yZElucHV0XCI7XG5cbiAgY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsb2dpbkJ1dHRvbi5pbm5lclRleHQgPSBcImxvZ2luXCI7XG4gIGxvZ2luQnV0dG9uLmlkID0gXCJsb2dpbkJ1dHRvblwiO1xuXG4gIGxvZ2luRm9ybS5hcHBlbmRDaGlsZCh1c2VybmFtZUxhYmVsKTtcbiAgbG9naW5Gb3JtLmFwcGVuZENoaWxkKHVzZXJuYW1lSW5wdXQpO1xuICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQocGFzc3dvcmRMYWJlbCk7XG4gIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChwYXNzd29yZElucHV0KTtcbiAgbG9naW5Gb3JtLmFwcGVuZENoaWxkKGxvZ2luQnV0dG9uKTtcblxuICBjb25zdCB1c2VybmFtZUFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgYXBwLmFwcGVuZENoaWxkKGxvZ2luRm9ybSk7XG4gIGFwcC5hcHBlbmRDaGlsZCh1c2VybmFtZUFsZXJ0KTtcblxuICBsb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IGd1eSA9IERhdGFIYW5kbGVyKCkuaGFuZGxlVXNlckxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XG4gICAgY29uc29sZS5sb2coZ3V5KTtcbiAgICBpZiAoZ3V5ICE9IDQgJiYgZ3V5ICE9IDUpIHtcbiAgICAgIHVzZXJuYW1lQWxlcnQuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgIHVzZXJuYW1lQWxlcnQuaW5uZXJUZXh0ID0gYFdlbGNvbWUgJHtndXkudXNlcm5hbWV9IWA7XG4gICAgICB1c2VybmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIHBhc3N3b3JkSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH0gZWxzZSBpZiAoZ3V5ID09PSA0KSB7XG4gICAgICB1c2VybmFtZUFsZXJ0LmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICB1c2VybmFtZUFsZXJ0LmlubmVyVGV4dCA9IFwiTm8gdXNlciB3aXRoIHRoYXQgbmFtZSBidWQhXCI7XG4gICAgICBjb25zdCByZWdpc3RlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICByZWdpc3RlckJ1dHRvbi5pbm5lclRleHQgPSBcInJlZ2lzdGVyIGEgbmV3IHVzZXIgaW5zdGVhZFwiO1xuICAgICAgcmVnaXN0ZXJCdXR0b24uaWQgPSBcInJlZ2lzdGVyQnV0dG9uXCI7XG4gICAgICB1c2VybmFtZUFsZXJ0LmFwcGVuZENoaWxkKHJlZ2lzdGVyQnV0dG9uKTtcblxuICAgICAgcmVnaXN0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgRGF0YUhhbmRsZXIoKS5oYW5kbGVSZWdpc3RlclVzZXIodXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICAgICAgRGF0YUhhbmRsZXIoKS5oYW5kbGVVc2VyTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICAgICAgdXNlcm5hbWVBbGVydC5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICB1c2VybmFtZUFsZXJ0LmlubmVyVGV4dCA9IGBXZWxjb21lICR7dXNlcm5hbWV9IWA7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlcm5hbWVBbGVydC5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgdXNlcm5hbWVBbGVydC5pbm5lclRleHQgPSBgV3JvbmcgUGFzc3dvcmQgYnV0dGZhY2UhYDtcbiAgICB9XG4gIH0pO1xufVxuXG5pbml0YWxpemVBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==