import { Project } from "../AppLogic/Project";

export default function renderProjects(projectsList: Project[]) {
  const projects = document.createElement("div");
  const projectUL = document.createElement("ul");

  // we check if list is null in index so assume not null
  projectsList.map((project) => {
    let projectHTML = `
        <h2>Projects</h2>
        <li id="${project.title}">${project.title}</li>
        `;
    projectUL.innerHTML += projectHTML;
  });

  projects.appendChild(projectUL);

  return { projects };
}
