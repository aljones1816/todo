import { ToDo } from "./ToDo";

export interface Project {
  title: string;
  ToDos: ToDo[];
  projectID: string;
  addToDo: (todo: ToDo) => void;
  deleteToDo: (todoID: string) => void;
}

export function createProject(
  projectID: string,
  title: string,
  ToDos: ToDo[] = []
) {
  function addToDo(todo: ToDo) {
    ToDos.push(todo);
    return;
  }

  function deleteToDo(todoID: string) {
    let index = ToDos.findIndex(function (ToDo) {
      return ToDo.todoID === todoID;
    });
    ToDos.splice(index, 1);
    return;
  }

  return { title, ToDos, projectID, addToDo, deleteToDo };
}
