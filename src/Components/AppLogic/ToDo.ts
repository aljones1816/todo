interface ToDo {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: string;
  projectID: string;
  getToDoID: () => string;
}

interface toDoState {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: string;
  projectID: string;
}

const toDo = (toDoState: toDoState): ToDo => {
  const ID = toDoState.id;
  const title = toDoState.title;
  const description = toDoState.description;
  const dueDate = toDoState.dueDate;
  const priority = toDoState.priority;
  const status = toDoState.status;
  const projectID = toDoState.projectID;

  return {
    title,
    description,
    dueDate,
    priority,
    status,
    projectID,
    getToDoID: () => ID,
  };
};

export { toDo, ToDo, toDoState };
