import { rendertodolist } from '/src/domUpdater.js'
import { addListItem, toggleProjectMenu } from '/src/appLogic.js'
import { renderNav, renderProjects, renderNewToDoButton } from './domUpdater';
import '/src/projectsStyles.css';
import { fetchData } from './appLogic';

function initalizeApp() {
    // render the navbar
    renderNav();
    // window.localStorage.setItem('items', JSON.stringify([{title: 'first', description: "hihi", dueDate: "today", priority: "hi", projectID: 1},{title: 'second', description: "byebyebye", dueDate: "tomorrow", priority: "low", projectID: 2}]));
    // window.localStorage.setItem('projects', JSON.stringify([{title: "first project", projectID: 1 },{title: "second project", projectID: 2 }]));
    // make a call to local storage to see if there are any existing list items, render them if so
    let currentItems = fetchData('items')
    if (currentItems) {
        rendertodolist(currentItems);
        //render add new item button
    } else {
        //render add new item button
    }

    const currentProjects = fetchData("projects")
    if (currentProjects) {
        renderProjects(currentProjects);
        
    } else {
        
    }
    
    
    document.getElementById("menuBar").addEventListener("click", () => {
        toggleProjectMenu();
    })

    renderNewToDoButton();
    

}

initalizeApp();


