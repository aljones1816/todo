import { createProject, Project } from "./Project";
import { User, createUser } from "./User";
import { createToDo, ToDo } from "./ToDo";

interface JSONUser {
  userID: string;
  username: string;
  password: string;
}

const DataHandler = () => {
  /*this function will return an array containing all existing user objects, or any empty array if there are no users. 
  Can substitute any fetching method here as long as it return the correct structure*/
  const fetchUsers = () => {
    return JSON.parse(localStorage.getItem("users") || "[]");
  };

  /* this function returns a user object containing an array of project objects, if any exist which contain arrays of todo objects, if any exist*/
  const handleUserLogin = (username: string, password: string) => {
    let fetchedData = fetchUsers();

    // return false if activeUserID is not in users
    if (!fetchedData.some((user: JSONUser) => user.username === username)) {
      // TODO return an error instead of false so we can prompt users to sign up
      return 4;
    } else if (
      // case when user input wrong password
      fetchedData.some(
        (user: JSONUser) =>
          user.username === username && user.password !== password
      )
    ) {
      // TODO return an error instead of false so we can let user know their password is wrong
      return 5;
    } else {
      const userJSON = fetchedData.find(
        (user: JSONUser) => user.username === username
      );
      handleSetActiveUser(userJSON.userID);

      // return a user object with the required methods since JSON stores only text
      // case when projects exist
      if (userJSON.projects.length != 0) {
        return createUser(
          userJSON.userID,
          userJSON.username,
          userJSON.password,
          userJSON.projects.map(
            (project: {
              projectID: string;
              title: string;
              ToDos: {
                todoID: string;
                title: string;
                description: string;
                dueDate: string;
                priority: string;
                status: string;
              }[];
            }) => {
              // case when project has todos
              if (project.ToDos.length != 0) {
                createProject(
                  project.title,
                  project.projectID,
                  project.ToDos.map((todo) => {
                    return createToDo(
                      todo.title,
                      todo.description,
                      todo.dueDate,
                      todo.priority,
                      todo.status,
                      todo.todoID
                    );
                  })
                );
              } else {
                // case when project has no todos
                createProject(project.title, project.projectID);
              }
            }
          )
        );
      } else {
        // case when no projects exist
        return createUser(
          userJSON.userID,
          userJSON.username,
          userJSON.password
        );
      }
    }
  };

  const handleUserLogout = () => {
    window.localStorage.removeItem("activeUser");
  };

  const handleSetActiveUser = (userID: string) => {
    JSON.stringify(window.localStorage.setItem("activeUser", userID));
  };

  const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  const handleRegisterUser = (userName: string, password: string) => {
    let users = fetchUsers();
    let userID = generateUUID();
    let newUser = createUser(userID, userName, password);
    // check if user already exists
    if (users.some((user: JSONUser) => user.username === userName)) {
      return false;
    } else {
      users.push(newUser);
    }
    window.localStorage.setItem("users", JSON.stringify(users));
    return newUser;
  };

  const updateUsersProjects = (userID: string, updatedProjects: Project[]) => {
    let users = fetchUsers();
    users.find((user: JSONUser) => user.userID === userID).projects =
      updatedProjects;
    window.localStorage.setItem("users", JSON.stringify(users));
  };

  const checkForActiveUser = () => {
    let activeUser = window.localStorage.getItem("activeUser");
    if (activeUser) {
      return activeUser;
    } else {
      // TODO return error code so we can prompt a user to login
      return false;
    }
  };

  return {
    generateUUID,
    handleRegisterUser,
    handleUserLogin,
    handleUserLogout,
    checkForActiveUser,
    updateUsersProjects,
  };
};

export { DataHandler };
