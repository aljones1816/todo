import { Storage } from "./Components/AppLogic/Storage";
import { toDo, generateToDoState } from "./Components/AppLogic/ToDo";
import { Project, generateProjectState } from "./Components/AppLogic/Project";

function initalizeApp() {
  // fetch the existing todos from local storage
  const todosState = Storage.readData("todos");
  console.log(todosState);
}

initalizeApp();
