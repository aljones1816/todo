import renderMenu from "./UI/menu";
import createUser from "./AppLogic/User";
import { Storage } from "./AppLogic/Storage";
import renderProjects from "./UI/projects";
import rendertodolist from "./UI/todolist";
import createProject from "./AppLogic/Project";
import "./globalStyles.css";
import createToDo from "./AppLogic/ToDo";

function initalizeApp() {
  const currentProjects = Storage().fetchData("projects");
  

  // render the navbar
  const app = document.getElementById("app");
  app.appendChild(renderMenu().menu);
  
  renderProjects(currentProjects);

  app.appendChild(rendertodolist(currentProjects, "three").generateToDoListHTML().todolist);
}

initalizeApp();
