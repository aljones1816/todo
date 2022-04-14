import { Project } from "../AppLogic/Project";

export default function renderProjects(projectsList: Project[]) {
  const projects = document.createElement("div");
  const projectUL = document.createElement("ul");
  const header = document.createElement("h2");
  header.innerText = "Projects";
  projects.appendChild(header);
  
  projectsList.map((project) => {
    let projectHTML = `
        <li id="${project.title}">${project.title}</li>
        `;
    projectUL.innerHTML += projectHTML;
  });

  projects.appendChild(projectUL);

  return { projects };
}
