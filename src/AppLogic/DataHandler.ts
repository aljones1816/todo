import { createProject, Project } from "./Project";
import { User, createUser } from "./User";

interface JSONUser {
  userID: string;
  username: string;
  password: string;
}

const DataHandler = () => {
  const handleUserLogin = (username: string, password: string) => {
    let fetchedData = JSON.parse(window.localStorage.getItem("users") || "[]");

    // return false if activeUserID is not in users
    if (!fetchedData.some((user: JSONUser) => user.username === username)) {
      // TODO return an error instead of false so we can prompt users to sign up
      return false;
    } else if (
      // case when user input wrong password
      fetchedData.some(
        (user: JSONUser) =>
          user.username === username && user.password !== password
      )
    ) {
      // TODO return an error instead of false so we can let user know their password is wrong
      return false;
    } else {
      JSON.stringify(window.localStorage.setItem("activeUser", username));
      const userJSON = fetchedData.find(
        (user: JSONUser) => user.username === username
      );
      // return a user object with the required methods since JSON stores only text
      return createUser(
        userJSON.userID,
        userJSON.username,
        userJSON.password,
        userJSON.projects
      );
    }
  };

  const handleUserLogout = () => {
    window.localStorage.removeItem("activeUser");
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
    let users = JSON.parse(window.localStorage.getItem("users") || "[]");
    let userID = generateUUID();
    let newUser = createUser(userID, userName, password);
    users.push(newUser);
    window.localStorage.setItem("users", JSON.stringify(users));
    return newUser;
  };

  const updateUsersProjects = (userID: string, updatedProjects: Project[]) => {
    let users = JSON.parse(window.localStorage.getItem("users") || "[]");
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
