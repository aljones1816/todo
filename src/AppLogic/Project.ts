import { ToDo } from "./ToDo";

export interface Project {
  title: string;
  ToDos: ToDo[];
  getProjectID: () => string;
  addToDo: (todo: ToDo) => void;
  deleteToDo: (todoID: string) => void;
}

export function createProject(projectID: string, title: string, ToDos: ToDo[]) {
  function addToDo(todo: ToDo) {
    ToDos.push(todo);
    return;
  }
  projectID;
  const getProjectID = () => projectID;

  function deleteToDo(todoID: string) {
    let index = ToDos.findIndex(function (ToDo) {
      return ToDo.getToDoID() === todoID;
    });
    ToDos.splice(index, 1);
    return;
  }

  return { title, ToDos, getProjectID, addToDo, deleteToDo };
}
