import { renderNav, renderProjects, renderNewToDoButton } from '/src/domUpdater.ts'
import { addListItem, toggleProjectMenu } from '/src/appLogic.ts'
import '/src/projectsStyles.css';
import { createProject, createToDo, fetchData, putData } from './appLogic';

function initalizeApp() {
    // render the navbar
    renderNav();

    const currentProjects = fetchData("projects")
    renderProjects(currentProjects);
   
    
    document.getElementById("menuBar").addEventListener("click", () => {
        toggleProjectMenu();
    })

    renderNewToDoButton();
    

}

initalizeApp();


