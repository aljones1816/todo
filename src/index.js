import { rendertodos } from '/src/domUpdater.js'
import { addListItem } from '/src/appLogic.js'
import { renderNav, renderProjects } from './domUpdater';
import '/src/projectsStyles.css';

function initalizeApp() {
    // render the navbar
    renderNav();

    // make a call to local storage to see if there are any existing list items, render them if so
    let currentItems = JSON.parse(window.localStorage.getItem('items'))
    if (currentItems) {
        rendertodos(currentItems);
        //render add new item button
    } else {
        //render add new item button
    }
    const test = [{id: "projectone", title: "big project"}]
    renderProjects(test);

    

}

initalizeApp();
