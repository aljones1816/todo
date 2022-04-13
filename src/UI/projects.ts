import { Project } from "../AppLogic/Project";

export default function renderProjects(projectsList: Project[]) {
    const content = document.getElementById('projects')
    const projects = document.createElement('ul');
    content.appendChild(projects);
    // we check if list is null in index so assume not null
    projectsList.map(project => {
        let projectHTML = `
        <li id="${project.projectID}">${project.title}</li>
        `;
        projects.innerHTML += projectHTML;
        
    })
    
}