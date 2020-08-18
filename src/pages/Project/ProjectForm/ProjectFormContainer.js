import React, { useState } from "react";
import { useDispatch } from "react-redux";

import ProjectForm from "./ProjectForm";

import { convertDate } from "../../../shared/halpers";
import { createProject, userActions } from "../../../store/actions/project.actions";

const initialInputData = {
    name: "",
    description: "",
    category: "Small",
    type: "IT",
    status: "Design",
    startDate: 0,
    endDate: 0
};

const ProjectFormContainer = ({ onCloseForm, formType, data, filter }) => {
    const dispatch = useDispatch();

    const setInitialData = () => {
        let initialData;

        if(formType === "editForm") {
            initialData = {
                ...data,
                startDate: convertDate(data.startDate),
                endDate: convertDate(data.endDate),
            }
        } else {
            initialData = initialInputData;
        }

        return initialData;
    };

    const [inputsData, setInputsData] = useState(setInitialData());

    const inputChangeHandler = ({ target }) => {
        setInputsData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const clickHandler = type => {
        const data = {
            ...inputsData,
            startDate: new Date(inputsData.startDate).toISOString(),
            endDate: new Date(inputsData.endDate).toISOString(),
        };

        data.isDraft = type === "draft";

        if(formType === "editForm") {
            dispatch(userActions.editProject({ data, projectListName: filter }));
        } else {
            dispatch(createProject(data));
        }

        setInputsData(initialInputData);
        onCloseForm(false);
    };

    return <ProjectForm
        data={ inputsData }
        onChange={ inputChangeHandler }
        onClick={ clickHandler }
    />;
};

export default ProjectFormContainer;