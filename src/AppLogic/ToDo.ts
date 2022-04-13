export interface ToDo {
    toDoID: string;
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    status: string;
    getToDoID: () => string;

}



export default function createToDo(
    todoID: string,
    title: string,
    description: string,
    dueDate: string,
    priority: string,
    projectID: string,
) {

    function getToDoID() {
        return todoID;
    }
    
    return {getToDoID, title, description, dueDate, priority, projectID};
}