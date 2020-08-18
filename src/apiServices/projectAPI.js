import axios from "axios";

class ProjectAPI {
    static createProject = data => axios.post("/projects/", data);

    static getProjects = (filter, field) => axios.get(`/projects?state=${ filter }&sort=ASC&field=${ field }&page=1&size=50`);

    static deleteProject = id => axios.delete(`/projects/${ id }`);
};

export default ProjectAPI;