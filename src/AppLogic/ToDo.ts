export interface ToDo {
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    status: string;
    projectID: string;
    getToDoID: () => string;

}



export default function createToDo(
    todoID: string,
    title: string,
    description: string,
    dueDate: string,
    priority: string,
    projectID: string,
    status: string
) {
    todoID;

    function getToDoID() {
        return todoID;
    }
    
    return {title, description, dueDate, priority, projectID, status, getToDoID};
}