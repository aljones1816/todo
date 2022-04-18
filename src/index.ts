import { DataHandler } from "./AppLogic/DataHandler";
import { logincontainer } from "./UI/loginform";
import { User } from "./AppLogic/User";
import { renderToDoList } from "./UI/todolist";

const handleLoginEvents = () => {};

function initalizeApp() {
  const activeUser = DataHandler().checkForActiveUser();
  const app = document.getElementById("app");

  const logoutButton = document.createElement("button");
  logoutButton.innerText = "logout";

  logoutButton.addEventListener("click", (e) => {
    DataHandler().handleUserLogout();
  });

  if (activeUser) {
    console.log(activeUser);
    // activeUser.newProject("My first project", []);
    // DataHandler().updateUsersProjects(activeUser.userID, activeUser.projects);
    renderToDoList(activeUser);
    app.appendChild(logoutButton);
  } else {
    app.appendChild(logincontainer);
  }
}

initalizeApp();
