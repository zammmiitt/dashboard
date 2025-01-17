import axios from "axios";

interface Project {
  id: number;
  projectName: string;
  description: string;
  location: string;
  estimatedCompletionDate: string;
  image: string;
  show: boolean;
}

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Your-Username/Your-Repo", // Replace with your JSON server URL
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  /**
   * Fetch a paginated list of projects
   * @param perPage Number of projects per page
   * @param page Current page number
   * @returns Promise resolving to the list of projects
   */
  getProjects(perPage: number, page: number): Promise<Project[]> {
    return apiClient
      .get<Project[]>(`/projects?_limit=${perPage}&_page=${page}`)
      .then(response => response.data);
  },

  /**
   * Fetch a specific project by ID
   * @param id Project ID
   * @returns Promise resolving to the project details
   */
  getProject(id: number): Promise<Project> {
    return apiClient
      .get<Project>(`/projects/${id}`)
      .then(response => response.data);
  },
};
