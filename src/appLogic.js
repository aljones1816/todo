function fetchData(schema) {
    let fetchedData = JSON.parse(window.localStorage.getItem(schema) || '[]');
    console.log('the data I just fetched is:', fetchedData);
    if (schema === 'projects' && fetchedData.length != 0) {
        return fetchedData.map(project => createProject(project.title, project.projectID, project.ToDos));
    } else return fetchedData;
}

function putData(schema, newData) {
    let currentdata = fetchData(schema)
    currentdata.push(newData)
    window.localStorage.setItem(schema, JSON.stringify(currentdata));
}


function createProject(title, projectID, ToDos = []) {
    title;
    projectID;
    ToDos;
    
    function addToDo(title, description, dueDate, priority, projectID) {
        let newToDo = createToDo(title, description, dueDate, priority, projectID);
        ToDos.push(newToDo);
    }

    function DeleteToDo(ToDoID) {
        let index = ToDos.findIndex(function (ToDo) {
            return ToDo.ToDoID === ToDoID;
        });
        ToDos.splice(index, 1);
    }

    return {title, projectID, ToDos, addToDo, DeleteToDo};
}

function createToDo(title, description, dueDate, priority, projectID, status = 'todo') {
    title;
    description;
    dueDate;
    priority;
    projectID;
    status;

    return { title, description, dueDate, priority, projectID, status };
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

