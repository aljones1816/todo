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
                var user = (0, User_1.createUser)(userJSON.userID, userJSON.username, userJSON.password);
                return user;
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
            var users = fetchUsers();
            // create variable with a user object with an ID equal to the activeUser
            var activeUserObject = users.find(function (user) { return user.userID === activeUser; });
            var user = handleUserLogin(activeUserObject.username, activeUserObject.password);
            if (user != 4 && user != 5) {
                return user;
            }
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
    function deleteToDo(todoID) {
        var index = ToDos.findIndex(function (ToDo) {
            return ToDo.todoID === todoID;
        });
        ToDos.splice(index, 1);
        return;
    }
    return { title: title, ToDos: ToDos, projectID: projectID, addToDo: addToDo, deleteToDo: deleteToDo };
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
        var project = (0, Project_1.createProject)((0, DataHandler_1.DataHandler)().generateUUID(), title, todos);
        projects.push(project);
    };
    var deleteProject = function (projectID) {
        var index = projects.findIndex(function (project) {
            return project.projectID === projectID;
        });
        projects.splice(index, 1);
    };
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


/***/ }),

/***/ "./src/UI/loginform.ts":
/*!*****************************!*\
  !*** ./src/UI/loginform.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logincontainer = void 0;
var DataHandler_1 = __webpack_require__(/*! ../AppLogic/DataHandler */ "./src/AppLogic/DataHandler.ts");
var logincontainer = document.createElement("div");
exports.logincontainer = logincontainer;
logincontainer.id = "login-container";
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
loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    var username = usernameInput.value;
    var password = passwordInput.value;
    var guy = (0, DataHandler_1.DataHandler)().handleUserLogin(username, password);
    if (guy != 4 && guy != 5) {
        usernameInput.value = "";
        passwordInput.value = "";
        location.reload();
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
            location.reload();
        });
    }
    else {
        usernameAlert.innerText = "";
        usernameAlert.innerText = "Wrong Password buttface!";
    }
});
logincontainer.appendChild(loginForm);
logincontainer.appendChild(usernameAlert);


/***/ }),

/***/ "./src/UI/todolist.ts":
/*!****************************!*\
  !*** ./src/UI/todolist.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderToDoList = void 0;
var ToDo_1 = __webpack_require__(/*! ../AppLogic/ToDo */ "./src/AppLogic/ToDo.ts");
var DataHandler_1 = __webpack_require__(/*! ../AppLogic/DataHandler */ "./src/AppLogic/DataHandler.ts");
var generateToDoElement = function (todo) {
    var todoElement = document.createElement("div");
    todoElement.id = todo.todoID;
    todoElement.className = "todo";
    var todoTitle = document.createElement("h3");
    todoTitle.innerText = todo.title;
    var todoDescription = document.createElement("p");
    todoDescription.innerText = todo.description;
    var todoDueDate = document.createElement("p");
    todoDueDate.innerText = todo.dueDate;
    var todoPriority = document.createElement("p");
    todoPriority.innerText = todo.priority;
    var todoStatus = document.createElement("p");
    todoStatus.innerText = todo.status;
    var todoEditButton = document.createElement("button");
    todoEditButton.innerText = "edit";
    var todoDeleteButton = document.createElement("button");
    todoDeleteButton.innerText = "delete";
    todoElement.appendChild(todoTitle);
    todoElement.appendChild(todoDescription);
    todoElement.appendChild(todoDueDate);
    todoElement.appendChild(todoPriority);
    todoElement.appendChild(todoStatus);
    todoElement.appendChild(todoEditButton);
    todoElement.appendChild(todoDeleteButton);
    return todoElement;
};
var generatenewToDoForm = function (user) {
    var newToDoForm = document.createElement("form");
    newToDoForm.id = "newToDoForm";
    var newToDoTitleLabel = document.createElement("label");
    newToDoTitleLabel.innerText = "Title: ";
    var newToDoTitleInput = document.createElement("input");
    newToDoTitleInput.type = "text";
    newToDoTitleInput.id = "newToDoTitleInput";
    var newToDoDescriptionLabel = document.createElement("label");
    newToDoDescriptionLabel.innerText = "Description: ";
    var newToDoDescriptionInput = document.createElement("input");
    newToDoDescriptionInput.type = "text";
    newToDoDescriptionInput.id = "newToDoDescriptionInput";
    var newToDoDueDateLabel = document.createElement("label");
    newToDoDueDateLabel.innerText = "Due Date: ";
    var newToDoDueDateInput = document.createElement("input");
    newToDoDueDateInput.type = "text";
    newToDoDueDateInput.id = "newToDoDueDateInput";
    var newToDoPriorityLabel = document.createElement("label");
    newToDoPriorityLabel.innerText = "Priority: ";
    var newToDoPriorityInput = document.createElement("input");
    newToDoPriorityInput.type = "text";
    newToDoPriorityInput.id = "newToDoPriorityInput";
    var newToDoStatusLabel = document.createElement("label");
    newToDoStatusLabel.innerText = "Status: ";
    var newToDoStatusInput = document.createElement("input");
    newToDoStatusInput.type = "text";
    newToDoStatusInput.id = "newToDoStatusInput";
    var newToDoSubmitButton = document.createElement("button");
    newToDoSubmitButton.innerText = "submit";
    newToDoSubmitButton.id = "newToDoSubmitButton";
    newToDoForm.appendChild(newToDoTitleLabel);
    newToDoForm.appendChild(newToDoTitleInput);
    newToDoForm.appendChild(newToDoDescriptionLabel);
    newToDoForm.appendChild(newToDoDescriptionInput);
    newToDoForm.appendChild(newToDoDueDateLabel);
    newToDoForm.appendChild(newToDoDueDateInput);
    newToDoForm.appendChild(newToDoPriorityLabel);
    newToDoForm.appendChild(newToDoPriorityInput);
    newToDoForm.appendChild(newToDoStatusLabel);
    newToDoForm.appendChild(newToDoStatusInput);
    newToDoForm.appendChild(newToDoSubmitButton);
    newToDoSubmitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var newToDo = (0, ToDo_1.createToDo)((0, DataHandler_1.DataHandler)().generateUUID(), newToDoTitleInput.value, newToDoDescriptionInput.value, newToDoDueDateInput.value, newToDoPriorityInput.value, newToDoStatusInput.value);
        user.projects[0].addToDo(newToDo);
        (0, DataHandler_1.DataHandler)().updateUsersProjects(user.userID, user.projects);
    });
    return newToDoForm;
};
var renderToDoList = function (user) {
    var app = document.getElementById("app");
    var todoList = document.getElementById("todo-list");
    if (todoList) {
        todoList.innerHTML = "";
        var title = document.createElement("h2");
        title.innerText = user.projects[0].title;
        todoList.appendChild(title);
        if (user.projects[0].ToDos.length != 0) {
            user.projects[0].ToDos.forEach(function (todo) {
                todoList.appendChild(generateToDoElement(todo));
            });
        }
    }
    else {
        todoList = document.createElement("div");
        var title = document.createElement("h2");
        title.innerText = user.projects[0].title;
        todoList.appendChild(title);
        if (user.projects[0].ToDos.length != 0) {
            user.projects[0].ToDos.forEach(function (todo) {
                todoList.appendChild(generateToDoElement(todo));
            });
        }
    }
    todoList.appendChild(generatenewToDoForm(user));
    app.appendChild(todoList);
};
exports.renderToDoList = renderToDoList;


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
var loginform_1 = __webpack_require__(/*! ./UI/loginform */ "./src/UI/loginform.ts");
var todolist_1 = __webpack_require__(/*! ./UI/todolist */ "./src/UI/todolist.ts");
var handleLoginEvents = function () { };
function initalizeApp() {
    var activeUser = (0, DataHandler_1.DataHandler)().checkForActiveUser();
    var app = document.getElementById("app");
    var logoutButton = document.createElement("button");
    logoutButton.innerText = "logout";
    logoutButton.addEventListener("click", function (e) {
        (0, DataHandler_1.DataHandler)().handleUserLogout();
    });
    if (activeUser) {
        console.log(activeUser);
        // activeUser.newProject("My first project", []);
        // DataHandler().updateUsersProjects(activeUser.userID, activeUser.projects);
        (0, todolist_1.renderToDoList)(activeUser);
        app.appendChild(logoutButton);
    }
    else {
        app.appendChild(loginform_1.logincontainer);
    }
}
initalizeApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsa0ZBQW1EO0FBQ25ELHlFQUEwQztBQUMxQyx5RUFBMEM7QUFRMUMsSUFBTSxXQUFXLEdBQUc7SUFDbEI7d0ZBQ29GO0lBQ3BGLElBQU0sVUFBVSxHQUFHO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQztJQUVGLGdKQUFnSjtJQUNoSixJQUFNLGVBQWUsR0FBRyxVQUFDLFFBQWdCLEVBQUUsUUFBZ0I7UUFDekQsSUFBSSxXQUFXLEdBQUcsVUFBVSxFQUFFLENBQUM7UUFFL0IsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBYyxJQUFLLFdBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUExQixDQUEwQixDQUFDLEVBQUU7WUFDckUsMEVBQTBFO1lBQzFFLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7YUFBTTtRQUNMLHNDQUFzQztRQUN0QyxXQUFXLENBQUMsSUFBSSxDQUNkLFVBQUMsSUFBYztZQUNiLFdBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUTtRQUF4RCxDQUF3RCxDQUMzRCxFQUNEO1lBQ0Esd0ZBQXdGO1lBQ3hGLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7YUFBTTtZQUNMLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQy9CLFVBQUMsSUFBYyxJQUFLLFdBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUExQixDQUEwQixDQUMvQyxDQUFDO1lBQ0YsbUJBQW1CLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXJDLDZFQUE2RTtZQUM3RSwyQkFBMkI7WUFDM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8scUJBQVUsRUFDZixRQUFRLENBQUMsTUFBTSxFQUNmLFFBQVEsQ0FBQyxRQUFRLEVBQ2pCLFFBQVEsQ0FBQyxRQUFRLEVBQ2pCLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUNuQixVQUFDLE9BV0E7b0JBQ0MsOEJBQThCO29CQUM5QixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDN0IsMkJBQWEsRUFDWCxPQUFPLENBQUMsS0FBSyxFQUNiLE9BQU8sQ0FBQyxTQUFTLEVBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSTs0QkFDckIsT0FBTyxxQkFBVSxFQUNmLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FDWixDQUFDO3dCQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7cUJBQ0g7eUJBQU07d0JBQ0wsaUNBQWlDO3dCQUNqQywyQkFBYSxFQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUNqRDtnQkFDSCxDQUFDLENBQ0YsQ0FDRixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsSUFBTSxJQUFJLEdBQVMscUJBQVUsRUFDM0IsUUFBUSxDQUFDLE1BQU0sRUFDZixRQUFRLENBQUMsUUFBUSxFQUNqQixRQUFRLENBQUMsUUFBUSxDQUNsQixDQUFDO2dCQUVGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtJQUNILENBQUMsQ0FBQztJQUVGLElBQU0sZ0JBQWdCLEdBQUc7UUFDdkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDO0lBRUYsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLE1BQWM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUM7SUFFRixJQUFNLFlBQVksR0FBRztRQUNuQixPQUFPLHNDQUFzQyxDQUFDLE9BQU8sQ0FDbkQsT0FBTyxFQUNQLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDOUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLElBQU0sa0JBQWtCLEdBQUcsVUFBQyxRQUFnQixFQUFFLFFBQWdCO1FBQzVELElBQUksS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDO1FBQ3pCLElBQUksTUFBTSxHQUFHLFlBQVksRUFBRSxDQUFDO1FBQzVCLElBQUksT0FBTyxHQUFHLHFCQUFVLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCwrQkFBK0I7UUFDL0IsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBYyxJQUFLLFdBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUExQixDQUEwQixDQUFDLEVBQUU7WUFDOUQsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtRQUNELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQyxDQUFDO0lBRUYsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLE1BQWMsRUFBRSxlQUEwQjtRQUNyRSxJQUFJLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQztRQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBYyxJQUFLLFdBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUF0QixDQUFzQixDQUFDLENBQUMsUUFBUTtZQUM3RCxlQUFlLENBQUM7UUFDbEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUM7SUFFRixJQUFNLGtCQUFrQixHQUFHO1FBQ3pCLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBTSxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUM7WUFFM0Isd0VBQXdFO1lBQ3hFLElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FDakMsVUFBQyxJQUFjLElBQUssV0FBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQTFCLENBQTBCLENBQy9DLENBQUM7WUFDRixJQUFNLElBQUksR0FBRyxlQUFlLENBQzFCLGdCQUFnQixDQUFDLFFBQVEsRUFDekIsZ0JBQWdCLENBQUMsUUFBUSxDQUMxQixDQUFDO1lBQ0YsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjthQUFNO1lBQ0wsMERBQTBEO1lBQzFELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDLENBQUM7SUFFRixPQUFPO1FBQ0wsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUI7S0FDcEIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVPLGtDQUFXOzs7Ozs7Ozs7Ozs7OztBQzdKcEIsU0FBZ0IsYUFBYSxDQUMzQixTQUFpQixFQUNqQixLQUFhLEVBQ2IsS0FBa0I7SUFBbEIsa0NBQWtCO0lBRWxCLFNBQVMsT0FBTyxDQUFDLElBQVU7UUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixPQUFPO0lBQ1QsQ0FBQztJQUVELFNBQVMsVUFBVSxDQUFDLE1BQWM7UUFDaEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUk7WUFDeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU87SUFDVCxDQUFDO0lBRUQsT0FBTyxFQUFFLEtBQUssU0FBRSxLQUFLLFNBQUUsU0FBUyxhQUFFLE9BQU8sV0FBRSxVQUFVLGNBQUUsQ0FBQztBQUMxRCxDQUFDO0FBbkJELHNDQW1CQzs7Ozs7Ozs7Ozs7Ozs7QUNwQkQsU0FBUyxVQUFVLENBQ2pCLE1BQWMsRUFDZCxLQUFhLEVBQ2IsV0FBbUIsRUFDbkIsT0FBZSxFQUNmLFFBQWdCLEVBQ2hCLE1BQWM7SUFFZCxPQUFPO1FBQ0wsS0FBSztRQUNMLFdBQVc7UUFDWCxPQUFPO1FBQ1AsUUFBUTtRQUNSLE1BQU07UUFDTixNQUFNO0tBQ1AsQ0FBQztBQUNKLENBQUM7QUFFYyxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7QUMzQnpCLGtGQUFtRDtBQUNuRCw4RkFBNEM7QUFZNUMseUZBQXlGO0FBQ3pGLElBQU0sVUFBVSxHQUFHLFVBQ2pCLE1BQWMsRUFDZCxRQUFnQixFQUNoQixRQUFnQixFQUNoQixRQUF3QjtJQUF4Qix3Q0FBd0I7SUFFeEIsTUFBTSxDQUFDO0lBQ1AsUUFBUSxDQUFDO0lBQ1QsUUFBUSxDQUFDO0lBQ1QsUUFBUSxDQUFDO0lBRVQsSUFBTSxVQUFVLEdBQUcsVUFBQyxLQUFhLEVBQUUsS0FBa0I7UUFBbEIsa0NBQWtCO1FBQ25ELElBQU0sT0FBTyxHQUFHLDJCQUFhLEVBQUMsNkJBQVcsR0FBRSxDQUFDLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQztJQUVGLElBQU0sYUFBYSxHQUFHLFVBQUMsU0FBaUI7UUFDdEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLE9BQWdCO1lBQ3ZELE9BQU8sT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7SUFFRixPQUFPO1FBQ0wsUUFBUTtRQUNSLFFBQVE7UUFDUixNQUFNO1FBQ04sVUFBVTtRQUNWLGFBQWE7UUFDYixRQUFRO0tBQ1QsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVhLGdDQUFVOzs7Ozs7Ozs7Ozs7OztBQy9DekIsd0dBQXNEO0FBRXRELElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFzRTVDLHdDQUFjO0FBckV2QixjQUFjLENBQUMsRUFBRSxHQUFHLGlCQUFpQixDQUFDO0FBRXRDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakQsU0FBUyxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUM7QUFFM0IsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxZQUFZLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUNqQyxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXBDLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEQsYUFBYSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7QUFFdkMsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0RCxhQUFhLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUM1QixhQUFhLENBQUMsRUFBRSxHQUFHLGVBQWUsQ0FBQztBQUVuQyxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELGFBQWEsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0FBRXZDLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEQsYUFBYSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7QUFDaEMsYUFBYSxDQUFDLEVBQUUsR0FBRyxlQUFlLENBQUM7QUFFbkMsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyRCxXQUFXLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUNoQyxXQUFXLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQztBQUUvQixTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3JDLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDckMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNyQyxTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3JDLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFbkMsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVsRCxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkIsSUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNyQyxJQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBRXJDLElBQU0sR0FBRyxHQUFHLDZCQUFXLEdBQUUsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTlELElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ3hCLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNuQjtTQUFNLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtRQUNwQixhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM3QixhQUFhLENBQUMsU0FBUyxHQUFHLDZCQUE2QixDQUFDO1FBQ3hELElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsY0FBYyxDQUFDLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQztRQUN6RCxjQUFjLENBQUMsRUFBRSxHQUFHLGdCQUFnQixDQUFDO1FBQ3JDLGFBQWEsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFMUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLDZCQUFXLEdBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDckQsNkJBQVcsR0FBRSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEQsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDN0IsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0tBQ0o7U0FBTTtRQUNMLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzdCLGFBQWEsQ0FBQyxTQUFTLEdBQUcsMEJBQTBCLENBQUM7S0FDdEQ7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdEMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN2RTFDLG1GQUFvRDtBQUVwRCx3R0FBc0Q7QUFHdEQsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLElBQVU7SUFDckMsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxXQUFXLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsV0FBVyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFFL0IsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFFakMsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxlQUFlLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFFN0MsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRCxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFFckMsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCxZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFdkMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFbkMsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RCxjQUFjLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUVsQyxJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUQsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUV0QyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLFdBQVcsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxXQUFXLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4QyxXQUFXLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFMUMsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRUYsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLElBQVU7SUFDckMsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxXQUFXLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQztJQUUvQixJQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUQsaUJBQWlCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUV4QyxJQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUQsaUJBQWlCLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsbUJBQW1CLENBQUM7SUFFM0MsSUFBTSx1QkFBdUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLHVCQUF1QixDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7SUFFcEQsSUFBTSx1QkFBdUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLHVCQUF1QixDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDdEMsdUJBQXVCLENBQUMsRUFBRSxHQUFHLHlCQUF5QixDQUFDO0lBRXZELElBQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RCxtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0lBRTdDLElBQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RCxtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ2xDLG1CQUFtQixDQUFDLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQztJQUUvQyxJQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0Qsb0JBQW9CLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztJQUU5QyxJQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0Qsb0JBQW9CLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUNuQyxvQkFBb0IsQ0FBQyxFQUFFLEdBQUcsc0JBQXNCLENBQUM7SUFFakQsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNELGtCQUFrQixDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7SUFFMUMsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNELGtCQUFrQixDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDakMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLG9CQUFvQixDQUFDO0lBRTdDLElBQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQ3pDLG1CQUFtQixDQUFDLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQztJQUUvQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFM0MsV0FBVyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNDLFdBQVcsQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNqRCxXQUFXLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDakQsV0FBVyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdDLFdBQVcsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM3QyxXQUFXLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDOUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlDLFdBQVcsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM1QyxXQUFXLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDNUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRTdDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUs7UUFDbEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQU0sT0FBTyxHQUFHLHFCQUFVLEVBQ3hCLDZCQUFXLEdBQUUsQ0FBQyxZQUFZLEVBQUUsRUFDNUIsaUJBQWlCLENBQUMsS0FBSyxFQUN2Qix1QkFBdUIsQ0FBQyxLQUFLLEVBQzdCLG1CQUFtQixDQUFDLEtBQUssRUFDekIsb0JBQW9CLENBQUMsS0FBSyxFQUMxQixrQkFBa0IsQ0FBQyxLQUFLLENBQ3pCLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsQyw2QkFBVyxHQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxVQUFDLElBQVU7SUFDaEMsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELElBQUksUUFBUSxFQUFFO1FBQ1osUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ2xDLFFBQVEsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztTQUNKO0tBQ0Y7U0FBTTtRQUNMLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN6QyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUNsQyxRQUFRLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7U0FDSjtLQUNGO0lBQ0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hELEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBRU8sd0NBQWM7Ozs7Ozs7VUNqSnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSx1R0FBcUQ7QUFDckQscUZBQWdEO0FBRWhELGtGQUErQztBQUUvQyxJQUFNLGlCQUFpQixHQUFHLGNBQU8sQ0FBQyxDQUFDO0FBRW5DLFNBQVMsWUFBWTtJQUNuQixJQUFNLFVBQVUsR0FBRyw2QkFBVyxHQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RCxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTNDLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEQsWUFBWSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFFbEMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7UUFDdkMsNkJBQVcsR0FBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLFVBQVUsRUFBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsaURBQWlEO1FBQ2pELDZFQUE2RTtRQUM3RSw2QkFBYyxFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDL0I7U0FBTTtRQUNMLEdBQUcsQ0FBQyxXQUFXLENBQUMsMEJBQWMsQ0FBQyxDQUFDO0tBQ2pDO0FBQ0gsQ0FBQztBQUVELFlBQVksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9BcHBMb2dpYy9EYXRhSGFuZGxlci50cyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0FwcExvZ2ljL1Byb2plY3QudHMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9BcHBMb2dpYy9Ub0RvLnRzIiwid2VicGFjazovL3RvZG8vLi9zcmMvQXBwTG9naWMvVXNlci50cyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL1VJL2xvZ2luZm9ybS50cyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL1VJL3RvZG9saXN0LnRzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IHsgVXNlciwgY3JlYXRlVXNlciB9IGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRvRG8sIFRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5cbmludGVyZmFjZSBKU09OVXNlciB7XG4gIHVzZXJJRDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5jb25zdCBEYXRhSGFuZGxlciA9ICgpID0+IHtcbiAgLyp0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIGV4aXN0aW5nIHVzZXIgb2JqZWN0cywgb3IgYW55IGVtcHR5IGFycmF5IGlmIHRoZXJlIGFyZSBubyB1c2Vycy4gXG4gIENhbiBzdWJzdGl0dXRlIGFueSBmZXRjaGluZyBtZXRob2QgaGVyZSBhcyBsb25nIGFzIGl0IHJldHVybiB0aGUgY29ycmVjdCBzdHJ1Y3R1cmUqL1xuICBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcnNcIikgfHwgXCJbXVwiKTtcbiAgfTtcblxuICAvKiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYSB1c2VyIG9iamVjdCBjb250YWluaW5nIGFuIGFycmF5IG9mIHByb2plY3Qgb2JqZWN0cywgaWYgYW55IGV4aXN0IHdoaWNoIGNvbnRhaW4gYXJyYXlzIG9mIHRvZG8gb2JqZWN0cywgaWYgYW55IGV4aXN0Ki9cbiAgY29uc3QgaGFuZGxlVXNlckxvZ2luID0gKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgZmV0Y2hlZERhdGEgPSBmZXRjaFVzZXJzKCk7XG5cbiAgICAvLyByZXR1cm4gZmFsc2UgaWYgYWN0aXZlVXNlcklEIGlzIG5vdCBpbiB1c2Vyc1xuICAgIGlmICghZmV0Y2hlZERhdGEuc29tZSgodXNlcjogSlNPTlVzZXIpID0+IHVzZXIudXNlcm5hbWUgPT09IHVzZXJuYW1lKSkge1xuICAgICAgLy8gVE9ETyByZXR1cm4gYW4gZXJyb3IgaW5zdGVhZCBvZiBmYWxzZSBzbyB3ZSBjYW4gcHJvbXB0IHVzZXJzIHRvIHNpZ24gdXBcbiAgICAgIHJldHVybiA0O1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBjYXNlIHdoZW4gdXNlciBpbnB1dCB3cm9uZyBwYXNzd29yZFxuICAgICAgZmV0Y2hlZERhdGEuc29tZShcbiAgICAgICAgKHVzZXI6IEpTT05Vc2VyKSA9PlxuICAgICAgICAgIHVzZXIudXNlcm5hbWUgPT09IHVzZXJuYW1lICYmIHVzZXIucGFzc3dvcmQgIT09IHBhc3N3b3JkXG4gICAgICApXG4gICAgKSB7XG4gICAgICAvLyBUT0RPIHJldHVybiBhbiBlcnJvciBpbnN0ZWFkIG9mIGZhbHNlIHNvIHdlIGNhbiBsZXQgdXNlciBrbm93IHRoZWlyIHBhc3N3b3JkIGlzIHdyb25nXG4gICAgICByZXR1cm4gNTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlckpTT04gPSBmZXRjaGVkRGF0YS5maW5kKFxuICAgICAgICAodXNlcjogSlNPTlVzZXIpID0+IHVzZXIudXNlcm5hbWUgPT09IHVzZXJuYW1lXG4gICAgICApO1xuICAgICAgaGFuZGxlU2V0QWN0aXZlVXNlcih1c2VySlNPTi51c2VySUQpO1xuXG4gICAgICAvLyByZXR1cm4gYSB1c2VyIG9iamVjdCB3aXRoIHRoZSByZXF1aXJlZCBtZXRob2RzIHNpbmNlIEpTT04gc3RvcmVzIG9ubHkgdGV4dFxuICAgICAgLy8gY2FzZSB3aGVuIHByb2plY3RzIGV4aXN0XG4gICAgICBpZiAodXNlckpTT04ucHJvamVjdHMubGVuZ3RoICE9IDApIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVVzZXIoXG4gICAgICAgICAgdXNlckpTT04udXNlcklELFxuICAgICAgICAgIHVzZXJKU09OLnVzZXJuYW1lLFxuICAgICAgICAgIHVzZXJKU09OLnBhc3N3b3JkLFxuICAgICAgICAgIHVzZXJKU09OLnByb2plY3RzLm1hcChcbiAgICAgICAgICAgIChwcm9qZWN0OiB7XG4gICAgICAgICAgICAgIHByb2plY3RJRDogc3RyaW5nO1xuICAgICAgICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgICBUb0Rvczoge1xuICAgICAgICAgICAgICAgIHRvZG9JRDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IHN0cmluZztcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHN0cmluZztcbiAgICAgICAgICAgICAgfVtdO1xuICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAvLyBjYXNlIHdoZW4gcHJvamVjdCBoYXMgdG9kb3NcbiAgICAgICAgICAgICAgaWYgKHByb2plY3QuVG9Eb3MubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgICAgICAgICAgICAgcHJvamVjdC50aXRsZSxcbiAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdElELFxuICAgICAgICAgICAgICAgICAgcHJvamVjdC5Ub0Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVRvRG8oXG4gICAgICAgICAgICAgICAgICAgICAgdG9kby50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICB0b2RvLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgIHRvZG8uc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgIHRvZG8udG9kb0lEXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2FzZSB3aGVuIHByb2plY3QgaGFzIG5vIHRvZG9zXG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LnByb2plY3RJRCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1c2VyOiBVc2VyID0gY3JlYXRlVXNlcihcbiAgICAgICAgICB1c2VySlNPTi51c2VySUQsXG4gICAgICAgICAgdXNlckpTT04udXNlcm5hbWUsXG4gICAgICAgICAgdXNlckpTT04ucGFzc3dvcmRcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXNlckxvZ291dCA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhY3RpdmVVc2VyXCIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNldEFjdGl2ZVVzZXIgPSAodXNlcklEOiBzdHJpbmcpID0+IHtcbiAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3RpdmVVc2VyXCIsIHVzZXJJRCkpO1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlVVVJRCA9ICgpID0+IHtcbiAgICByZXR1cm4gXCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIi5yZXBsYWNlKFxuICAgICAgL1t4eV0vZyxcbiAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHZhciByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLFxuICAgICAgICAgIHYgPSBjID09IFwieFwiID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVnaXN0ZXJVc2VyID0gKHVzZXJOYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgdXNlcnMgPSBmZXRjaFVzZXJzKCk7XG4gICAgbGV0IHVzZXJJRCA9IGdlbmVyYXRlVVVJRCgpO1xuICAgIGxldCBuZXdVc2VyID0gY3JlYXRlVXNlcih1c2VySUQsIHVzZXJOYW1lLCBwYXNzd29yZCk7XG4gICAgLy8gY2hlY2sgaWYgdXNlciBhbHJlYWR5IGV4aXN0c1xuICAgIGlmICh1c2Vycy5zb21lKCh1c2VyOiBKU09OVXNlcikgPT4gdXNlci51c2VybmFtZSA9PT0gdXNlck5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXJzLnB1c2gobmV3VXNlcik7XG4gICAgfVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJzXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJzKSk7XG4gICAgcmV0dXJuIG5ld1VzZXI7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVXNlcnNQcm9qZWN0cyA9ICh1c2VySUQ6IHN0cmluZywgdXBkYXRlZFByb2plY3RzOiBQcm9qZWN0W10pID0+IHtcbiAgICBsZXQgdXNlcnMgPSBmZXRjaFVzZXJzKCk7XG4gICAgdXNlcnMuZmluZCgodXNlcjogSlNPTlVzZXIpID0+IHVzZXIudXNlcklEID09PSB1c2VySUQpLnByb2plY3RzID1cbiAgICAgIHVwZGF0ZWRQcm9qZWN0cztcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2Vyc1wiLCBKU09OLnN0cmluZ2lmeSh1c2VycykpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrRm9yQWN0aXZlVXNlciA9ICgpID0+IHtcbiAgICBsZXQgYWN0aXZlVXNlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjdGl2ZVVzZXJcIik7XG4gICAgaWYgKGFjdGl2ZVVzZXIpIHtcbiAgICAgIGNvbnN0IHVzZXJzID0gZmV0Y2hVc2VycygpO1xuXG4gICAgICAvLyBjcmVhdGUgdmFyaWFibGUgd2l0aCBhIHVzZXIgb2JqZWN0IHdpdGggYW4gSUQgZXF1YWwgdG8gdGhlIGFjdGl2ZVVzZXJcbiAgICAgIGNvbnN0IGFjdGl2ZVVzZXJPYmplY3QgPSB1c2Vycy5maW5kKFxuICAgICAgICAodXNlcjogSlNPTlVzZXIpID0+IHVzZXIudXNlcklEID09PSBhY3RpdmVVc2VyXG4gICAgICApO1xuICAgICAgY29uc3QgdXNlciA9IGhhbmRsZVVzZXJMb2dpbihcbiAgICAgICAgYWN0aXZlVXNlck9iamVjdC51c2VybmFtZSxcbiAgICAgICAgYWN0aXZlVXNlck9iamVjdC5wYXNzd29yZFxuICAgICAgKTtcbiAgICAgIGlmICh1c2VyICE9IDQgJiYgdXNlciAhPSA1KSB7XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPIHJldHVybiBlcnJvciBjb2RlIHNvIHdlIGNhbiBwcm9tcHQgYSB1c2VyIHRvIGxvZ2luXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2VuZXJhdGVVVUlELFxuICAgIGhhbmRsZVJlZ2lzdGVyVXNlcixcbiAgICBoYW5kbGVVc2VyTG9naW4sXG4gICAgaGFuZGxlVXNlckxvZ291dCxcbiAgICBjaGVja0ZvckFjdGl2ZVVzZXIsXG4gICAgdXBkYXRlVXNlcnNQcm9qZWN0cyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IERhdGFIYW5kbGVyIH07XG4iLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eb1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3Qge1xuICB0aXRsZTogc3RyaW5nO1xuICBUb0RvczogVG9Eb1tdO1xuICBwcm9qZWN0SUQ6IHN0cmluZztcbiAgYWRkVG9EbzogKHRvZG86IFRvRG8pID0+IHZvaWQ7XG4gIGRlbGV0ZVRvRG86ICh0b2RvSUQ6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoXG4gIHByb2plY3RJRDogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICBUb0RvczogVG9Eb1tdID0gW11cbikge1xuICBmdW5jdGlvbiBhZGRUb0RvKHRvZG86IFRvRG8pIHtcbiAgICBUb0Rvcy5wdXNoKHRvZG8pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvRG8odG9kb0lEOiBzdHJpbmcpIHtcbiAgICBsZXQgaW5kZXggPSBUb0Rvcy5maW5kSW5kZXgoZnVuY3Rpb24gKFRvRG8pIHtcbiAgICAgIHJldHVybiBUb0RvLnRvZG9JRCA9PT0gdG9kb0lEO1xuICAgIH0pO1xuICAgIFRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHsgdGl0bGUsIFRvRG9zLCBwcm9qZWN0SUQsIGFkZFRvRG8sIGRlbGV0ZVRvRG8gfTtcbn1cbiIsImludGVyZmFjZSBUb0RvIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZHVlRGF0ZTogc3RyaW5nO1xuICBwcmlvcml0eTogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbiAgdG9kb0lEOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvRG8oXG4gIHRvZG9JRDogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICBkdWVEYXRlOiBzdHJpbmcsXG4gIHByaW9yaXR5OiBzdHJpbmcsXG4gIHN0YXR1czogc3RyaW5nXG4pIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIHN0YXR1cyxcbiAgICB0b2RvSUQsXG4gIH07XG59XG5cbmV4cG9ydCB7IFRvRG8sIGNyZWF0ZVRvRG8gfTtcbiIsImltcG9ydCB7IFByb2plY3QsIGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgeyBEYXRhSGFuZGxlciB9IGZyb20gXCIuL0RhdGFIYW5kbGVyXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eb1wiO1xuXG5pbnRlcmZhY2UgVXNlciB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIHVzZXJJRDogc3RyaW5nO1xuICBwcm9qZWN0czogUHJvamVjdFtdO1xuICBuZXdQcm9qZWN0OiAodGl0bGU6IHN0cmluZywgdG9kb3M6IFRvRG9bXSkgPT4gdm9pZDtcbiAgZGVsZXRlUHJvamVjdDogKHByb2plY3RJRDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG4vLyBmdW5jdGlvbiB3aWxsIGluc3RhbnRpYXRlIGEgbmV3IHVzZXIgb2JqZWN0IHdpdGggYW4gZW1wdHkgYXJyYXkgb2YgcHJvamVjdHMgYnkgZGVmYXVsdFxuY29uc3QgY3JlYXRlVXNlciA9IChcbiAgdXNlcklEOiBzdHJpbmcsXG4gIHVzZXJuYW1lOiBzdHJpbmcsXG4gIHBhc3N3b3JkOiBzdHJpbmcsXG4gIHByb2plY3RzOiBQcm9qZWN0W10gPSBbXVxuKSA9PiB7XG4gIHVzZXJJRDtcbiAgdXNlcm5hbWU7XG4gIHBhc3N3b3JkO1xuICBwcm9qZWN0cztcblxuICBjb25zdCBuZXdQcm9qZWN0ID0gKHRpdGxlOiBzdHJpbmcsIHRvZG9zOiBUb0RvW10gPSBbXSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KERhdGFIYW5kbGVyKCkuZ2VuZXJhdGVVVUlEKCksIHRpdGxlLCB0b2Rvcyk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3RJRDogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KGZ1bmN0aW9uIChwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgICByZXR1cm4gcHJvamVjdC5wcm9qZWN0SUQgPT09IHByb2plY3RJRDtcbiAgICB9KTtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdXNlcm5hbWUsXG4gICAgcGFzc3dvcmQsXG4gICAgdXNlcklELFxuICAgIG5ld1Byb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBwcm9qZWN0cyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFVzZXIsIGNyZWF0ZVVzZXIgfTtcbiIsImltcG9ydCB7IERhdGFIYW5kbGVyIH0gZnJvbSBcIi4uL0FwcExvZ2ljL0RhdGFIYW5kbGVyXCI7XG5cbmNvbnN0IGxvZ2luY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxvZ2luY29udGFpbmVyLmlkID0gXCJsb2dpbi1jb250YWluZXJcIjtcblxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5sb2dpbkZvcm0uaWQgPSBcImxvZ2luRm9ybVwiO1xuXG5jb25zdCBsb2dpbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5sb2dpbkhlYWRpbmcuaW5uZXJUZXh0ID0gXCJsb2dpblwiO1xubG9naW5Gb3JtLmFwcGVuZENoaWxkKGxvZ2luSGVhZGluZyk7XG5cbmNvbnN0IHVzZXJuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG51c2VybmFtZUxhYmVsLmlubmVyVGV4dCA9IFwiVXNlcm5hbWU6IFwiO1xuXG5jb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudXNlcm5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG51c2VybmFtZUlucHV0LmlkID0gXCJ1c2VybmFtZUlucHV0XCI7XG5cbmNvbnN0IHBhc3N3b3JkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5wYXNzd29yZExhYmVsLmlubmVyVGV4dCA9IFwiUGFzc3dvcmQ6IFwiO1xuXG5jb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xucGFzc3dvcmRJbnB1dC50eXBlID0gXCJwYXNzd29yZFwiO1xucGFzc3dvcmRJbnB1dC5pZCA9IFwicGFzc3dvcmRJbnB1dFwiO1xuXG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5sb2dpbkJ1dHRvbi5pbm5lclRleHQgPSBcImxvZ2luXCI7XG5sb2dpbkJ1dHRvbi5pZCA9IFwibG9naW5CdXR0b25cIjtcblxubG9naW5Gb3JtLmFwcGVuZENoaWxkKHVzZXJuYW1lTGFiZWwpO1xubG9naW5Gb3JtLmFwcGVuZENoaWxkKHVzZXJuYW1lSW5wdXQpO1xubG9naW5Gb3JtLmFwcGVuZENoaWxkKHBhc3N3b3JkTGFiZWwpO1xubG9naW5Gb3JtLmFwcGVuZENoaWxkKHBhc3N3b3JkSW5wdXQpO1xubG9naW5Gb3JtLmFwcGVuZENoaWxkKGxvZ2luQnV0dG9uKTtcblxuY29uc3QgdXNlcm5hbWVBbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB1c2VybmFtZSA9IHVzZXJuYW1lSW5wdXQudmFsdWU7XG4gIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dC52YWx1ZTtcblxuICBjb25zdCBndXkgPSBEYXRhSGFuZGxlcigpLmhhbmRsZVVzZXJMb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xuXG4gIGlmIChndXkgIT0gNCAmJiBndXkgIT0gNSkge1xuICAgIHVzZXJuYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHBhc3N3b3JkSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9IGVsc2UgaWYgKGd1eSA9PT0gNCkge1xuICAgIHVzZXJuYW1lQWxlcnQuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICB1c2VybmFtZUFsZXJ0LmlubmVyVGV4dCA9IFwiTm8gdXNlciB3aXRoIHRoYXQgbmFtZSBidWQhXCI7XG4gICAgY29uc3QgcmVnaXN0ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlZ2lzdGVyQnV0dG9uLmlubmVyVGV4dCA9IFwicmVnaXN0ZXIgYSBuZXcgdXNlciBpbnN0ZWFkXCI7XG4gICAgcmVnaXN0ZXJCdXR0b24uaWQgPSBcInJlZ2lzdGVyQnV0dG9uXCI7XG4gICAgdXNlcm5hbWVBbGVydC5hcHBlbmRDaGlsZChyZWdpc3RlckJ1dHRvbik7XG5cbiAgICByZWdpc3RlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIERhdGFIYW5kbGVyKCkuaGFuZGxlUmVnaXN0ZXJVc2VyKHVzZXJuYW1lLCBwYXNzd29yZCk7XG4gICAgICBEYXRhSGFuZGxlcigpLmhhbmRsZVVzZXJMb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xuICAgICAgdXNlcm5hbWVBbGVydC5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdXNlcm5hbWVBbGVydC5pbm5lclRleHQgPSBcIlwiO1xuICAgIHVzZXJuYW1lQWxlcnQuaW5uZXJUZXh0ID0gYFdyb25nIFBhc3N3b3JkIGJ1dHRmYWNlIWA7XG4gIH1cbn0pO1xuXG5sb2dpbmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dpbkZvcm0pO1xubG9naW5jb250YWluZXIuYXBwZW5kQ2hpbGQodXNlcm5hbWVBbGVydCk7XG5leHBvcnQgeyBsb2dpbmNvbnRhaW5lciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlVG9EbywgVG9EbyB9IGZyb20gXCIuLi9BcHBMb2dpYy9Ub0RvXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL0FwcExvZ2ljL1Byb2plY3RcIjtcbmltcG9ydCB7IERhdGFIYW5kbGVyIH0gZnJvbSBcIi4uL0FwcExvZ2ljL0RhdGFIYW5kbGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL0FwcExvZ2ljL1VzZXJcIjtcblxuY29uc3QgZ2VuZXJhdGVUb0RvRWxlbWVudCA9ICh0b2RvOiBUb0RvKSA9PiB7XG4gIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0VsZW1lbnQuaWQgPSB0b2RvLnRvZG9JRDtcbiAgdG9kb0VsZW1lbnQuY2xhc3NOYW1lID0gXCJ0b2RvXCI7XG5cbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcblxuICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRvZG8uZGVzY3JpcHRpb247XG5cbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb0R1ZURhdGUuaW5uZXJUZXh0ID0gdG9kby5kdWVEYXRlO1xuXG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b2RvUHJpb3JpdHkuaW5uZXJUZXh0ID0gdG9kby5wcmlvcml0eTtcblxuICBjb25zdCB0b2RvU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvZG9TdGF0dXMuaW5uZXJUZXh0ID0gdG9kby5zdGF0dXM7XG5cbiAgY29uc3QgdG9kb0VkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0b2RvRWRpdEJ1dHRvbi5pbm5lclRleHQgPSBcImVkaXRcIjtcblxuICBjb25zdCB0b2RvRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdG9kb0RlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcImRlbGV0ZVwiO1xuXG4gIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5KTtcbiAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb1N0YXR1cyk7XG4gIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHRvZG9FZGl0QnV0dG9uKTtcbiAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0RlbGV0ZUJ1dHRvbik7XG5cbiAgcmV0dXJuIHRvZG9FbGVtZW50O1xufTtcblxuY29uc3QgZ2VuZXJhdGVuZXdUb0RvRm9ybSA9ICh1c2VyOiBVc2VyKSA9PiB7XG4gIGNvbnN0IG5ld1RvRG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIG5ld1RvRG9Gb3JtLmlkID0gXCJuZXdUb0RvRm9ybVwiO1xuXG4gIGNvbnN0IG5ld1RvRG9UaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBuZXdUb0RvVGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRpdGxlOiBcIjtcblxuICBjb25zdCBuZXdUb0RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmV3VG9Eb1RpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBuZXdUb0RvVGl0bGVJbnB1dC5pZCA9IFwibmV3VG9Eb1RpdGxlSW5wdXRcIjtcblxuICBjb25zdCBuZXdUb0RvRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbmV3VG9Eb0Rlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjogXCI7XG5cbiAgY29uc3QgbmV3VG9Eb0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5ld1RvRG9EZXNjcmlwdGlvbklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbmV3VG9Eb0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSBcIm5ld1RvRG9EZXNjcmlwdGlvbklucHV0XCI7XG5cbiAgY29uc3QgbmV3VG9Eb0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbmV3VG9Eb0R1ZURhdGVMYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOiBcIjtcblxuICBjb25zdCBuZXdUb0RvRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuZXdUb0RvRHVlRGF0ZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbmV3VG9Eb0R1ZURhdGVJbnB1dC5pZCA9IFwibmV3VG9Eb0R1ZURhdGVJbnB1dFwiO1xuXG4gIGNvbnN0IG5ld1RvRG9Qcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBuZXdUb0RvUHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSBcIlByaW9yaXR5OiBcIjtcblxuICBjb25zdCBuZXdUb0RvUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmV3VG9Eb1ByaW9yaXR5SW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBuZXdUb0RvUHJpb3JpdHlJbnB1dC5pZCA9IFwibmV3VG9Eb1ByaW9yaXR5SW5wdXRcIjtcblxuICBjb25zdCBuZXdUb0RvU3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5ld1RvRG9TdGF0dXNMYWJlbC5pbm5lclRleHQgPSBcIlN0YXR1czogXCI7XG5cbiAgY29uc3QgbmV3VG9Eb1N0YXR1c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuZXdUb0RvU3RhdHVzSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBuZXdUb0RvU3RhdHVzSW5wdXQuaWQgPSBcIm5ld1RvRG9TdGF0dXNJbnB1dFwiO1xuXG4gIGNvbnN0IG5ld1RvRG9TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdUb0RvU3VibWl0QnV0dG9uLmlubmVyVGV4dCA9IFwic3VibWl0XCI7XG4gIG5ld1RvRG9TdWJtaXRCdXR0b24uaWQgPSBcIm5ld1RvRG9TdWJtaXRCdXR0b25cIjtcblxuICBuZXdUb0RvRm9ybS5hcHBlbmRDaGlsZChuZXdUb0RvVGl0bGVMYWJlbCk7XG5cbiAgbmV3VG9Eb0Zvcm0uYXBwZW5kQ2hpbGQobmV3VG9Eb1RpdGxlSW5wdXQpO1xuICBuZXdUb0RvRm9ybS5hcHBlbmRDaGlsZChuZXdUb0RvRGVzY3JpcHRpb25MYWJlbCk7XG4gIG5ld1RvRG9Gb3JtLmFwcGVuZENoaWxkKG5ld1RvRG9EZXNjcmlwdGlvbklucHV0KTtcbiAgbmV3VG9Eb0Zvcm0uYXBwZW5kQ2hpbGQobmV3VG9Eb0R1ZURhdGVMYWJlbCk7XG4gIG5ld1RvRG9Gb3JtLmFwcGVuZENoaWxkKG5ld1RvRG9EdWVEYXRlSW5wdXQpO1xuICBuZXdUb0RvRm9ybS5hcHBlbmRDaGlsZChuZXdUb0RvUHJpb3JpdHlMYWJlbCk7XG4gIG5ld1RvRG9Gb3JtLmFwcGVuZENoaWxkKG5ld1RvRG9Qcmlvcml0eUlucHV0KTtcbiAgbmV3VG9Eb0Zvcm0uYXBwZW5kQ2hpbGQobmV3VG9Eb1N0YXR1c0xhYmVsKTtcbiAgbmV3VG9Eb0Zvcm0uYXBwZW5kQ2hpbGQobmV3VG9Eb1N0YXR1c0lucHV0KTtcbiAgbmV3VG9Eb0Zvcm0uYXBwZW5kQ2hpbGQobmV3VG9Eb1N1Ym1pdEJ1dHRvbik7XG5cbiAgbmV3VG9Eb1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdUb0RvID0gY3JlYXRlVG9EbyhcbiAgICAgIERhdGFIYW5kbGVyKCkuZ2VuZXJhdGVVVUlEKCksXG4gICAgICBuZXdUb0RvVGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgIG5ld1RvRG9EZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgbmV3VG9Eb0R1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgIG5ld1RvRG9Qcmlvcml0eUlucHV0LnZhbHVlLFxuICAgICAgbmV3VG9Eb1N0YXR1c0lucHV0LnZhbHVlXG4gICAgKTtcblxuICAgIHVzZXIucHJvamVjdHNbMF0uYWRkVG9EbyhuZXdUb0RvKTtcblxuICAgIERhdGFIYW5kbGVyKCkudXBkYXRlVXNlcnNQcm9qZWN0cyh1c2VyLnVzZXJJRCwgdXNlci5wcm9qZWN0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBuZXdUb0RvRm9ybTtcbn07XG5cbmNvbnN0IHJlbmRlclRvRG9MaXN0ID0gKHVzZXI6IFVzZXIpID0+IHtcbiAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG4gIGxldCB0b2RvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1saXN0XCIpO1xuICBpZiAodG9kb0xpc3QpIHtcbiAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHVzZXIucHJvamVjdHNbMF0udGl0bGU7XG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGlmICh1c2VyLnByb2plY3RzWzBdLlRvRG9zLmxlbmd0aCAhPSAwKSB7XG4gICAgICB1c2VyLnByb2plY3RzWzBdLlRvRG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUb0RvRWxlbWVudCh0b2RvKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHVzZXIucHJvamVjdHNbMF0udGl0bGU7XG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGlmICh1c2VyLnByb2plY3RzWzBdLlRvRG9zLmxlbmd0aCAhPSAwKSB7XG4gICAgICB1c2VyLnByb2plY3RzWzBdLlRvRG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUb0RvRWxlbWVudCh0b2RvKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVuZXdUb0RvRm9ybSh1c2VyKSk7XG4gIGFwcC5hcHBlbmRDaGlsZCh0b2RvTGlzdCk7XG59O1xuXG5leHBvcnQgeyByZW5kZXJUb0RvTGlzdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IERhdGFIYW5kbGVyIH0gZnJvbSBcIi4vQXBwTG9naWMvRGF0YUhhbmRsZXJcIjtcbmltcG9ydCB7IGxvZ2luY29udGFpbmVyIH0gZnJvbSBcIi4vVUkvbG9naW5mb3JtXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vQXBwTG9naWMvVXNlclwiO1xuaW1wb3J0IHsgcmVuZGVyVG9Eb0xpc3QgfSBmcm9tIFwiLi9VSS90b2RvbGlzdFwiO1xuXG5jb25zdCBoYW5kbGVMb2dpbkV2ZW50cyA9ICgpID0+IHt9O1xuXG5mdW5jdGlvbiBpbml0YWxpemVBcHAoKSB7XG4gIGNvbnN0IGFjdGl2ZVVzZXIgPSBEYXRhSGFuZGxlcigpLmNoZWNrRm9yQWN0aXZlVXNlcigpO1xuICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcblxuICBjb25zdCBsb2dvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsb2dvdXRCdXR0b24uaW5uZXJUZXh0ID0gXCJsb2dvdXRcIjtcblxuICBsb2dvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgRGF0YUhhbmRsZXIoKS5oYW5kbGVVc2VyTG9nb3V0KCk7XG4gIH0pO1xuXG4gIGlmIChhY3RpdmVVc2VyKSB7XG4gICAgY29uc29sZS5sb2coYWN0aXZlVXNlcik7XG4gICAgLy8gYWN0aXZlVXNlci5uZXdQcm9qZWN0KFwiTXkgZmlyc3QgcHJvamVjdFwiLCBbXSk7XG4gICAgLy8gRGF0YUhhbmRsZXIoKS51cGRhdGVVc2Vyc1Byb2plY3RzKGFjdGl2ZVVzZXIudXNlcklELCBhY3RpdmVVc2VyLnByb2plY3RzKTtcbiAgICByZW5kZXJUb0RvTGlzdChhY3RpdmVVc2VyKTtcbiAgICBhcHAuYXBwZW5kQ2hpbGQobG9nb3V0QnV0dG9uKTtcbiAgfSBlbHNlIHtcbiAgICBhcHAuYXBwZW5kQ2hpbGQobG9naW5jb250YWluZXIpO1xuICB9XG59XG5cbmluaXRhbGl6ZUFwcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9