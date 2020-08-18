import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { InputField, Button } from "../../components";
import ProjectForm from "./ProjectForm/ProjectFormContainer";
import ProjectTable from "./ProjectTable/ProjectTableContainer";

import "./styles.scss";

const Project = (
    {
        searchValue,
        isOpen,
        filter,
        projects,
        onChange,
        onSearch,
        onFilterChange,
        onFieldChange,
        onOpenProjectForm
    }) => {
    return (
        <div className="project-page container" >
            <header className="project-page-header">
                <div className="search-container" >
                    <InputField
                        value={ searchValue }
                        onChange={ onChange }
                        placeholder="Search by name"
                        icon={ faSearch }
                        className="search-container__input"
                        modifier="left"
                    />
                    <button
                        onClick={ onSearch }
                        disabled={ !searchValue }
                        className="btn search-container__btn"
                    >
                        Search
                    </button>
                </div>
                <div className="controls">
                    <Button
                        text="All"
                        active={ filter === "All" }
                        onClick={ onFilterChange.bind(null, "All") }
                    />
                    <Button
                        text="My"
                        active={ filter === "My" }
                        iconColor="#d91b60"
                        onClick={ onFilterChange.bind(null, "My") }
                    />
                    <Button
                        text="Saved"
                        active={ filter === "Saved" }
                        iconColor="#000"
                        onClick={ onFilterChange.bind(null, "Saved") }
                    />
                </div>
            </header>
            <main className="project-page-main" >
                <div className="project-page-main__header" >
                    <h2>Projects</h2>
                    <Button
                        text="Create Project"
                        onClick={ onOpenProjectForm.bind(null, true) }
                        className="project-page-main__create-project-btn"
                    />
                </div>
                { isOpen &&
                    <ProjectForm
                        onCloseForm={ onOpenProjectForm }
                    />
                }
                <ProjectTable
                    projectList={ projects }
                    onFieldChange={ onFieldChange }
                    filter={ filter }
                />
            </main>
        </div>
    );
};

export default Project;