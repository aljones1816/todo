import { Project } from "../AppLogic/Project";
import { ToDo } from "../AppLogic/ToDo";

export default function rendertodolist(
  projectArray: Project[],
  projectID: string[],
  projectHeading: string
) {
  //filter project array to only include projects with id in the projectID array
  let currentProjects = projectArray.filter(function (project) {
    return projectID.includes(project.projectID);
  });

  function generateToDoHTML(todoObject: ToDo) {
    let todohtml = `
        <div class="todo" id="${todoObject.getToDoID}">
            <p>${todoObject.title}</p>
            <p>${todoObject.dueDate}</p>
            <p>${todoObject.status}</p>
        </div>
        `;

    return todohtml;
  }

  function generateToDoListHTML() {
    let todolist = document.createElement("div");
    todolist.setAttribute("id", "toDoList");
    let todolistUL = document.createElement("ul");
    let header = document.createElement("h2");
    header.innerText = projectHeading;
    todolist.appendChild(header);

    currentProjects.forEach((project) => {
      project.ToDos.map((todo) => {
        let todohtml = generateToDoHTML(todo);
        todolistUL.innerHTML += todohtml;
      });

      todolist.appendChild(todolistUL);
    });

    return { todolist };
  }

  function renderNewToDoForm() {
    const content = document.getElementById("content");
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

  function renderNewToDoButton() {
    const content = document.getElementById("content");
    let buttonHTML = `
        <svg id = "newtodo" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-7v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2h-4z"></path></svg>
        `;
    content.innerHTML += buttonHTML;
  }

  return { renderNewToDoForm, renderNewToDoButton, generateToDoListHTML };
}
