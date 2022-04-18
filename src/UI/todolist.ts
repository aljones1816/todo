import { createToDo, ToDo } from "../AppLogic/ToDo";
import { Project } from "../AppLogic/Project";
import { DataHandler } from "../AppLogic/DataHandler";
import { User } from "../AppLogic/User";

const generateToDoElement = (todo: ToDo) => {
  const todoElement = document.createElement("div");
  todoElement.id = todo.todoID;
  todoElement.className = "todo";

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = todo.title;

  const todoDescription = document.createElement("p");
  todoDescription.innerText = todo.description;

  const todoDueDate = document.createElement("p");
  todoDueDate.innerText = todo.dueDate;

  const todoPriority = document.createElement("p");
  todoPriority.innerText = todo.priority;

  const todoStatus = document.createElement("p");
  todoStatus.innerText = todo.status;

  const todoEditButton = document.createElement("button");
  todoEditButton.innerText = "edit";

  const todoDeleteButton = document.createElement("button");
  todoDeleteButton.innerText = "delete";

  todoElement.appendChild(todoTitle);
  todoElement.appendChild(todoDescription);
  todoElement.appendChild(todoDueDate);
  todoElement.appendChild(todoPriority);
  todoElement.appendChild(todoStatus);
  todoElement.appendChild(todoEditButton);
  todoElement.appendChild(todoDeleteButton);

  return todoElement;
};

const generatenewToDoForm = (user: User) => {
  const newToDoForm = document.createElement("form");
  newToDoForm.id = "newToDoForm";

  const newToDoTitleLabel = document.createElement("label");
  newToDoTitleLabel.innerText = "Title: ";

  const newToDoTitleInput = document.createElement("input");
  newToDoTitleInput.type = "text";
  newToDoTitleInput.id = "newToDoTitleInput";

  const newToDoDescriptionLabel = document.createElement("label");
  newToDoDescriptionLabel.innerText = "Description: ";

  const newToDoDescriptionInput = document.createElement("input");
  newToDoDescriptionInput.type = "text";
  newToDoDescriptionInput.id = "newToDoDescriptionInput";

  const newToDoDueDateLabel = document.createElement("label");
  newToDoDueDateLabel.innerText = "Due Date: ";

  const newToDoDueDateInput = document.createElement("input");
  newToDoDueDateInput.type = "text";
  newToDoDueDateInput.id = "newToDoDueDateInput";

  const newToDoPriorityLabel = document.createElement("label");
  newToDoPriorityLabel.innerText = "Priority: ";

  const newToDoPriorityInput = document.createElement("input");
  newToDoPriorityInput.type = "text";
  newToDoPriorityInput.id = "newToDoPriorityInput";

  const newToDoStatusLabel = document.createElement("label");
  newToDoStatusLabel.innerText = "Status: ";

  const newToDoStatusInput = document.createElement("input");
  newToDoStatusInput.type = "text";
  newToDoStatusInput.id = "newToDoStatusInput";

  const newToDoSubmitButton = document.createElement("button");
  newToDoSubmitButton.innerText = "submit";
  newToDoSubmitButton.id = "newToDoSubmitButton";

  newToDoForm.appendChild(newToDoTitleLabel);

  newToDoForm.appendChild(newToDoTitleInput);
  newToDoForm.appendChild(newToDoDescriptionLabel);
  newToDoForm.appendChild(newToDoDescriptionInput);
  newToDoForm.appendChild(newToDoDueDateLabel);
  newToDoForm.appendChild(newToDoDueDateInput);
  newToDoForm.appendChild(newToDoPriorityLabel);
  newToDoForm.appendChild(newToDoPriorityInput);
  newToDoForm.appendChild(newToDoStatusLabel);
  newToDoForm.appendChild(newToDoStatusInput);
  newToDoForm.appendChild(newToDoSubmitButton);

  newToDoSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newToDo = createToDo(
      DataHandler().generateUUID(),
      newToDoTitleInput.value,
      newToDoDescriptionInput.value,
      newToDoDueDateInput.value,
      newToDoPriorityInput.value,
      newToDoStatusInput.value
    );

    user.projects[0].addToDo(newToDo);

    DataHandler().updateUsersProjects(user.userID, user.projects);
  });

  return newToDoForm;
};

const renderToDoList = (user: User) => {
  const app = document.getElementById("app");
  let todoList = document.getElementById("todo-list");
  if (todoList) {
    todoList.innerHTML = "";
    const title = document.createElement("h2");
    title.innerText = user.projects[0].title;
    todoList.appendChild(title);
    if (user.projects[0].ToDos.length != 0) {
      user.projects[0].ToDos.forEach((todo) => {
        todoList.appendChild(generateToDoElement(todo));
      });
    }
  } else {
    todoList = document.createElement("div");
    const title = document.createElement("h2");
    title.innerText = user.projects[0].title;
    todoList.appendChild(title);
    if (user.projects[0].ToDos.length != 0) {
      user.projects[0].ToDos.forEach((todo) => {
        todoList.appendChild(generateToDoElement(todo));
      });
    }
  }
  todoList.appendChild(generatenewToDoForm(user));
  app.appendChild(todoList);
};

export { renderToDoList };
