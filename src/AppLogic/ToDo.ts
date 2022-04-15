interface ToDo {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: string;
  todoID: string;
}

function createToDo(
  todoID: string,
  title: string,
  description: string,
  dueDate: string,
  priority: string,
  status: string
) {
  return {
    title,
    description,
    dueDate,
    priority,
    status,
    todoID,
  };
}

export { ToDo, createToDo };
