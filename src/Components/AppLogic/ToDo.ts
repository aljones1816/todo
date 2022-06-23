import { v4 as uuidv4 } from "uuid";

export interface ToDo {
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

export const toDo = (toDoState: toDoState) => {
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

export const generateToDoState = (
  title: string,
  description: string,
  dueDate: string,
  priority: string,
  status: string,
  projectID: string
): toDoState => {
  const id = uuidv4();

  return {
    id,
    title,
    description,
    dueDate,
    priority,
    status,
    projectID,
  };
};
