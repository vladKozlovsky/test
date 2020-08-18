import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import ProjectForm from "../ProjectForm/ProjectFormContainer";

import { convertDate } from "../../../shared/halpers"
import { columnNames, StatusCircleStyles } from "./constants";
import "./styles.scss";

const ProjectTable = (
    {
        projectList,
        onFieldChange,
        filter,
        projectControlId,
        editProjectId,
        controlRef,
        onOpenProjectControl,
        onCloseForm,
        onDeleteProject,
        onEditProject
    }) => {
    let renderData;

    if(!!projectList.length) {
        renderData = (
            <table className="project-table">
                <thead className="project-table-thead" >
                    <tr>
                        { columnNames.map(field => (
                            <th
                                className="project-table-thead__field-name"
                                onClick={ onFieldChange.bind(null, field.name) }
                                key={ field.name }
                            >
                                { field.text }
                            </th>
                        )) }
                    </tr>
                </thead>
                <tbody className="project-table-tbody" >
                    { projectList.map(project => {
                        const { id, vID, name, type, category, description, status, startDate, endDate } = project;

                        return (
                            <tr key={ id } >
                                <td className="project-table-tbody__column" >{ vID }</td>
                                <td className="project-table-tbody__column" >{ name }</td>
                                <td className="project-table-tbody__column" >{ type }</td>
                                <td className="project-table-tbody__column" >{ category }</td>
                                <td className="project-table-tbody__column" >{ description }</td>
                                <td className="project-table-tbody__column status-column " >
                                <span
                                    className="project-table-tbody__circle"
                                    style={{ backgroundColor: StatusCircleStyles[status] }}
                                />
                                    { status }
                                </td>
                                <td className="project-table-tbody__column" >{ convertDate(startDate) }</td>
                                <td className="project-table-tbody__column" >{ convertDate(endDate) }</td>
                                <td className="project-table-tbody__column" >
                                    <FontAwesomeIcon
                                        icon={ faEllipsisH }
                                        onClick={ onOpenProjectControl.bind(null, id) }
                                        style={{ cursor: "pointer" }}
                                    />
                                    { (projectControlId === id) &&
                                    <div className="project-controls" ref={ controlRef } >
                                        <div
                                            onClick={ onEditProject.bind(null, id) }
                                            className="project-controls__buttons"
                                        >
                                            Edit
                                        </div>
                                        <hr/>
                                        <div
                                            onClick={ onDeleteProject.bind(null, id) }
                                            className="project-controls__buttons"
                                        >
                                            Delete
                                        </div>
                                    </div>
                                    }
                                </td>

                                { (editProjectId === id) && (
                                    <td>
                                        <ProjectForm
                                            onCloseForm={ onCloseForm }
                                            formType="editForm"
                                            data={ project }
                                            filter={ filter }
                                        />
                                    </td>
                                ) }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    } else {
        renderData = <div className="project-list-empty" >Project list is empty!</div>
    }

    return renderData;
};

export default ProjectTable;