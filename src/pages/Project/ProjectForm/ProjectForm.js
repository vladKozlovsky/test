import React from "react";

import { InputField, Button } from "../../../components";

import "./styles.scss";

const ProjectForm = ({ data, onChange, onClick }) => (
    <div className="project-form-container" >
        <div className="project-form">
            <h2 className="project-form__header" >Create new project</h2>
            <InputField
                value={ data.name }
                onChange={ onChange }
                fieldName="name"
                label="Name"
                placeholder="Enter name"
            />
            <InputField
                value={ data.description }
                onChange={ onChange }
                fieldName="description"
                label="Description"
                placeholder="Enter description"
            />
            <div className="project-form__select-wrapper">
                <select
                    className="project-form__selector"
                    value={ data.type }
                    name="type"
                    onChange={ onChange }
                >
                    <option value="IT">IT</option>
                    <option value="Construction">Construction</option>
                    <option value="Economics">Economics</option>
                    <option value="Logistics">Logistics</option>
                </select>
                <select
                    className="project-form__selector"
                    value={ data.category }
                    name="category"
                    onChange={ onChange }
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Big">Big</option>
                </select>
                <select
                    className="project-form__selector"
                    value={ data.status }
                    name="status"
                    onChange={ onChange }
                >
                    <option value="Design">Design</option>
                    <option value="InProgress">InProgress</option>
                    <option value="InReview">InReview</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div className="project-form__date-wrapper" >
                <label htmlFor="startDate" >Project start date</label>
                <input
                    value={ data.startDate }
                    onChange={ onChange }
                    type="date"
                    name="startDate"
                    id="startDate"
                    className="input-field__input"
                />
            </div>
            <div className="project-form__date-wrapper" >
                <label htmlFor="endDate" >Project end date</label>
                <input
                    value={ data.endDate }
                    onChange={ onChange }
                    type="date"
                    name="endDate"
                    id="endDate"
                    className="input-field__input"
                />
            </div>
            <div className="project-form__buttons-wrapper">
                <Button
                    onClick={ onClick.bind(null, "save") }
                    text="Save"
                    className="project-form__save-btn"
                />
                <Button
                    onClick={ onClick.bind(null, "draft") }
                    text="Save as draft"
                    className="project-form__save-as-draft"
                />
            </div>
        </div>
    </div>
)

export default ProjectForm;