import * as projectTypes from "../types/project.types";
import { ProjectAPI } from "../../apiServices";

export const userActions = {
    createProjectAC: payload => ({ type: projectTypes.CREATE_NEW_PROJECT, payload }),
    getProjects: (payload, filter) => ({ type: projectTypes.GET_PROJECTS, payload, filter }),
    deleteProject: payload => ({ type: projectTypes.DELETE_PROJECT, payload }),
    editProject: payload => ({ type: projectTypes.EDIT_PROJECT, payload }),
};

export const createProject = newData => async dispatch => {
   try {
       const { data } = await ProjectAPI.createProject(newData);
       dispatch(userActions.createProjectAC(data));
   } catch (err) {
       console.log(err)
   }
};

export const getProjects = (filter, field) => async dispatch => {
   try {
       const { data } = await ProjectAPI.getProjects(filter, field);
       dispatch(userActions.getProjects(data, filter));
   } catch (err) {
       console.log(err)
   }
};

export const deleteProject = (id, filter) => async dispatch => {
    try {
        await ProjectAPI.deleteProject(id);
        dispatch(userActions.deleteProject({ id, filter }));
    } catch (err) {
        console.log(err)
    }
};
