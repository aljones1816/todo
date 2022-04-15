import { Project, createProject } from "./Project";
import { DataHandler } from "./DataHandler";
import { ToDo } from "./ToDo";

interface User {
  getUsername: () => string;
  getPassword: () => string;
  getUserID: () => string;
  getProjects: () => Project[];
  newProject: (title: string, todos: ToDo[]) => void;
  deleteProject: (projectID: string) => void;
}

// function will instantiate a new user object with an empty array of projects by default
const createUser = (
  userID: string,
  username: string,
  password: string,
  projects: Project[] = []
) => {
  userID;
  username;
  password;
  projects;

  const newProject = (title: string, todos: ToDo[] = []) => {
    const project = createProject(title, DataHandler().generateUUID(), todos);
    projects.push(project);
  };

  const deleteProject = (projectID: string) => {
    let index = projects.findIndex(function (project: Project) {
      return project.getProjectID() === projectID;
    });
    projects.splice(index, 1);
  };

  const getProjects = () => projects;

  const getUsername = () => username;
  const getPassword = () => password;
  const getUserID = () => userID;

  return {
    username,
    password,
    userID,
    newProject,
    deleteProject,
    projects,
  };
};

export { User, createUser };
