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
