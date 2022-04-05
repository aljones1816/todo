// define a project type
export interface project {
    title: string;
    projectID: string;
    ToDos: todo[];
    addToDo: (title: string, description: string, dueDate: string, priority: string, projectID: string) => void;
    DeleteToDo: (ToDoID: string) => void;
}

//define todo type
export interface todo {
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    ToDoID: string;
    projectID: string;
    status: string;
}

function fetchData(schema: string) {
    let fetchedData = JSON.parse(window.localStorage.getItem(schema) || '[]');
    console.log('the data I just fetched is:', fetchedData);
    if (schema === 'projects' && fetchedData.length != 0) {
        return fetchedData.map((project: project) => createProject(project.title, project.projectID, project.ToDos));
    } else return fetchedData;
}

function putData(schema: string, newData: object) {
    let currentdata = fetchData(schema)
    currentdata.push(newData)
    window.localStorage.setItem(schema, JSON.stringify(currentdata));
}


 

function createProject(title: string, projectID: string, ToDos: todo[]) {
    title;
    projectID;
    ToDos;
    
    function addToDo(title: string, description: string, dueDate: string, priority: string, projectID: string, ToDoID: string) {
        let newToDo: todo = createToDo(title, description, dueDate, priority, projectID, ToDoID);
        ToDos.push(newToDo);
    }

    function DeleteToDo(ToDoID: string) {
        let index = ToDos.findIndex(function (ToDo) {
            return ToDo.ToDoID === ToDoID;
        });
        ToDos.splice(index, 1);
    }

    return {title, projectID, ToDos, addToDo, DeleteToDo};
}

function createToDo(ToDoID: string, title: string, description: string, dueDate: string, priority: string, projectID: string, status = 'todo') {
    title;
    description;
    dueDate;
    priority;
    projectID;
    status;
    ToDoID;

    return { ToDoID, title, description, dueDate, priority, projectID, status };
  };

function toggleProjectMenu() {
    let projectList = document.getElementById("projects")
    if (projectList.classList.contains('hidden')) {
        projectList.classList.remove('hidden');
        projectList.classList.add('visible');
    } else {
        projectList.classList.remove('visible');
        projectList.classList.add('hidden');
    }
    
    
    
}

export { putData, toggleProjectMenu, fetchData, createProject, createToDo }

