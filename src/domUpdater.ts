import { project, todo } from './appLogic';

function rendertodolist(projectArray: Array<project>, projectID: string) {
    //filter project array to only include project with id = projectID
    let projects = projectArray.filter(project => project.projectID === projectID)

    console.log("the data I fetched is:", projectArray)
    console.log("the projects are:", projects)
    let content = document.getElementById('content')
    projects.map(project => {
        project.ToDos.map(todo => {
            let todohtml = generateToDoHTML(todo)
            content.innerHTML += todohtml
    })
})
}

function generateToDoHTML(todoObject: todo) {
    let todohtml = `
    <div class="todo" id="${todoObject.ToDoID}">
        <p>${todoObject.title}</p>
        <p>${todoObject.dueDate}</p>
        <p>${todoObject.status}</p>
    </div>
    `;

    return todohtml
}

function renderNav() {
    const content = document.getElementById('navbar')
    let navHtml = `
        <div class=navbar>
        <svg id = "menuBar" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="24" fill="currentColor"><path d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"></path></svg>
        </div>
    `;
    content.innerHTML += navHtml;
}

function renderProjects(projectsList: Array<project>) {
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

function renderNewToDoButton() {
    const content = document.getElementById('content')
    let buttonHTML = `
    <svg id = "newtodo" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-7v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2h-4z"></path></svg>
    `;
    content.innerHTML += buttonHTML;
}

export const renderNewToDoForm = () => {
    const content = document.getElementById('content')
    let formHTML = `
    <div class="newtodoform">
        <form id="newtodoform">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Title">
            <label for="duedate">Due Date</label>
            <input type="date" id="duedate" name="duedate">
            <label for="status">Status</label>
            <select id="status" name="status">
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
            </select>
            <button id="submitNewToDo" type="submit">Submit</button>
        </form>
    </div>
    `;
    content.innerHTML += formHTML;
}


export { rendertodolist, renderNav, renderProjects, renderNewToDoButton }