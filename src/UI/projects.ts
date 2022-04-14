import { Project } from "../AppLogic/Project";
import renderToDoList from "./todolist";

export default function renderProjects(projectsList: Project[]) {
  const projectUL = document.createElement("ul");
  const allProjectsOption = document.createElement("li");

  allProjectsOption.innerText = "All Projects";
  let allIds: string[] = [];

  projectsList.forEach((project: Project) => {
    allIds.push(project.projectID);
  });

  allProjectsOption.addEventListener("click", () => {
    const toDoList = document.getElementById("toDoList");
    toDoList.innerHTML = "";
    toDoList.appendChild(
      renderToDoList(
        projectsList,
        allIds,
        "All Projects"
      ).generateToDoListHTML().todolist
    );
  });

  projectUL.appendChild(allProjectsOption);

  projectsList.map((project) => {
    const projectLI = document.createElement("li");
    projectLI.setAttribute("id", project.projectID);
    projectLI.innerText = project.title;

    projectLI.addEventListener("click", () => {
      const toDoList = document.getElementById("toDoList");
      toDoList.innerHTML = "";
      toDoList.appendChild(
        renderToDoList(
          [project],
          [project.projectID],
          project.title
        ).generateToDoListHTML().todolist
      );
    });

    projectUL.appendChild(projectLI);
  });

  return { projectUL };
}
