function fetchData(schema) {
    return JSON.parse(window.localStorage.getItem(schema));
}

function putData(schema, newData) {
    let currentdata = fetchData(schema)
    if (!currentdata) {
        currentdata = []
    }
    currentdata.push(newData)
    window.localStorage.setItem(schema, JSON.stringify(currentdata));
}


function createProject(title, projectID) {
    title;
    projectID;
    return {title, projectID}
}

function createToDo(title, description, dueDate, priority, projectID ) {
    title;
    description;
    dueDate;
    priority;
    projectID;
    return { title, description, dueDate, priority, projectID };
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