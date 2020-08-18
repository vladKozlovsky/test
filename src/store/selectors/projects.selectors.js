
class ProjectsSelectors {
    static getProjectsSelector = (state, filter) => state.project[filter];
};

export default ProjectsSelectors;