import { ToDo } from "./ToDo";

export interface Project {
  projectID: string;
  title: string;
  ToDos: ToDo[];
  getProjectID: () => string;
  addToDo: () => void;
  deleteToDo: () => void;
}

export function createProject(title: string, projectID: string, ToDos: ToDo[]) {
  projectID;

  function addToDo(todo: ToDo) {
    ToDos.push(todo);
  }

  function DeleteToDo(todoID: string) {
    let index = ToDos.findIndex(function (ToDo) {
      return ToDo.getToDoID() === todoID;
    });
    ToDos.splice(index, 1);
  }

  return { title, ToDos, addToDo, DeleteToDo, projectID };
}
