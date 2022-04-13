import {Project} from "./Project";
import createProject from "./Project";

const Storage = (() =>{

   function fetchData(schema: string) {
    let fetchedData = JSON.parse(window.localStorage.getItem(schema) || "[]");
    console.log("the data I just fetched is:", fetchedData);
    if (schema === "projects" && fetchedData.length != 0) {
      return fetchedData.map((project: Project) =>
        createProject(project.title, project.projectID, project.ToDos)
      );
    } else return fetchedData;
}
  
function putData(schema: string, newData: object) {
    let currentdata = fetchData(schema);
    currentdata.push(newData);
    window.localStorage.setItem(schema, JSON.stringify(currentdata));
  }

  return {fetchData, putData};
});

export {Storage};