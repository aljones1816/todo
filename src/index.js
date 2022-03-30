import { rendertodolist } from '/src/domUpdater.js'
import { addListItem, toggleProjectMenu } from '/src/appLogic.js'
import { renderNav, renderProjects, renderNewToDoButton } from './domUpdater';
import '/src/projectsStyles.css';
import { createProject, createToDo, fetchData, putData } from './appLogic';

function initalizeApp() {
    // render the navbar
    renderNav();

    const currentProjects = fetchData("projects")

    // if (currentProjects) {
    //     renderProjects(currentProjects);
        
    // } else {
        
    // }

    let test = createProject('testProject',3,[createToDo('testToDo', 'testDescription', 'today', 'high', 3, 'todo')])

    putData('projects', test)
    let test2 = fetchData('projects')
   
    
    document.getElementById("menuBar").addEventListener("click", () => {
        toggleProjectMenu();
    })

    renderNewToDoButton();
    

}

initalizeApp();


