import renderMenu from "./UI/menu";
import createUser from "./AppLogic/User";
import { Storage } from "./AppLogic/Storage";
import renderProjects from "./UI/projects";
import rendertodolist from "./UI/todolist";
import createProject from "./AppLogic/Project";
import "./globalStyles.css";

function initalizeApp() {
  const projects = Storage().fetchData("projects");

  // render the navbar
  const app = document.getElementById("app");
  app.appendChild(renderMenu().menu);

  const currentProjects = Storage().fetchData("projects");
  renderProjects(currentProjects);
}

initalizeApp();
