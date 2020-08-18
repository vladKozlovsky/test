import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import ProjectTable from "./ProjectTable";

import { deleteProject } from "../../../store/actions/project.actions";

const ProjectTableContainer = ({ projectList, onFieldChange, filter }) => {
    const dispatch = useDispatch();
    const controlRef = useRef(null);

    const [projectControlId, setProjectControlId] = useState(null);
    const [editProjectId, setEditProjectId] = useState(null);

    const handleClickOutside = ({ target }) => {
        if (controlRef.current && !controlRef.current.contains(target)) {
            setProjectControlId(null);
        }
    };

    const deleteProjectHandler = id => {
        dispatch(deleteProject(id, filter));
        setProjectControlId(null);
    };

    const editProjectHandler = id => {
        setEditProjectId(id);
        setProjectControlId(null);

    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return <ProjectTable
        projectList={ projectList }
        onFieldChange={ onFieldChange }
        filter={ filter }
        projectControlId={ projectControlId }
        editProjectId={ editProjectId }
        controlRef={ controlRef }
        onOpenProjectControl={ id => setProjectControlId(id) }
        onCloseForm={ marker => setEditProjectId(marker) }
        onDeleteProject={ deleteProjectHandler }
        onEditProject={ editProjectHandler }
    />
};

export default ProjectTableContainer;