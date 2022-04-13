import renderNav from "./UI/menu";
import createUser from "./AppLogic/User";
import { Storage } from "./AppLogic/Storage";
import renderProjects from "./UI/projects";
import rendertodolist from "./UI/todolist";
import './globalStyles.css';

function initalizeApp() {
  // render the navbar
  renderNav();
  createUser("Alan", "123");
  const currentProjects = Storage().fetchData("projects");
  renderProjects(currentProjects);
  rendertodolist(currentProjects, "three");


}

initalizeApp();
