import renderMenu from "./UI/menu";
import createUser from "./AppLogic/User";
import { Storage } from "./AppLogic/DataHandler";
import renderProjects from "./UI/projects";
import rendertodolist from "./UI/todolist";
import { createProject, Project } from "./AppLogic/Project";
import "./globalStyles.css";
import createToDo from "./AppLogic/ToDo";

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
  const currentProjects = Storage().fetchData("projects");

  // render the navbar
  const app = document.getElementById("app");
  app.appendChild(renderMenu().menu);

  renderProjects(currentProjects);

  const ToDoListHeader = "All ToDos";

  // initially render all todos
  let allIds: string[] = [];

  currentProjects.forEach((project: Project) => {
    allIds.push(project.projectID);
  });

  app.appendChild(
    rendertodolist(
      currentProjects,
      allIds,
      ToDoListHeader
    ).generateToDoListHTML().todolist
  );
}

initalizeApp();
