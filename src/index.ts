import { renderNav, renderProjects, renderNewToDoButton, rendertodolist } from './domUpdater';
import { toggleProjectMenu } from './appLogic'
import '/src/projectsStyles.css';
import { createProject, createToDo, fetchData, putData } from './appLogic';

function initalizeApp() {
    // render the navbar
    renderNav();

    const currentProjects = fetchData("projects")
    renderProjects(currentProjects);
    rendertodolist(currentProjects, 'three');
    
    document.getElementById("menuBar").addEventListener("click", () => {
        toggleProjectMenu();
    })

    renderNewToDoButton();
    

}

initalizeApp();