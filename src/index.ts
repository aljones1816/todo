import { Storage } from "./AppLogic/Storage";

function initalizeApp() {
  const projects = Storage.readData("projects");
  console.log(projects);
}

initalizeApp();
