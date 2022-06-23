import { v4 as uuidv4 } from "uuid";

export interface Project {
  projectID: string;
  title: string;
  getProjectID: () => string;
}

interface projectState {
  projectID: string;
  title: string;
}

export const Project = (projectState: projectState) => {
  const projectID = projectState.projectID;
  const title = projectState.title;

  return {
    title,
    getProjectID: () => projectID,
  };
};

export const generateProjectState = (title: string): projectState => {
  const projectID = uuidv4();

  return {
    projectID,
    title,
  };
};
