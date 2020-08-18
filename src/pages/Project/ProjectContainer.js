import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Project from "./Project";

import { getProjects, userActions } from "../../store/actions/project.actions";
import { ProjectAPI } from "../../apiServices";
import { ProjectsSelectors } from "../../store/selectors";

const ProjectContainer = () => {
    const dispatch = useDispatch();

    const [filter, setFilter] = useState("All");
    const [field, setField] = useState("vID");

    const projectList = useSelector(state => ProjectsSelectors.getProjectsSelector(state, filter));

    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setOpenStatus] = useState(false);

    const searchHandler = async () => {
        const { data } = await ProjectAPI.getProjects(filter, field);

        const matchFilter = new RegExp(searchValue, "i");
        const filteredData = data.filter(({ name }) => !searchValue || matchFilter.test(name));
        dispatch(userActions.getProjects(filteredData, filter));
    };

    useEffect(() => {
        dispatch(getProjects(filter, field));
    }, [dispatch, filter, field]);

    return <Project
        searchValue={ searchValue }
        isOpen={ isOpen }
        filter={ filter }
        projects={ projectList }
        onChange={ ({ target }) => setSearchValue(target.value) }
        onSearch={ searchHandler }
        onFilterChange={ filter => setFilter(filter) }
        onFieldChange={ fieldName => setField(fieldName) }
        onOpenProjectForm={ marker => setOpenStatus(marker) }
    />
};

export default ProjectContainer;