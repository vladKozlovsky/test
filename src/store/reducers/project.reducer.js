import * as projectTypes from "../types/project.types";

const initialState = {
    My: [],
    Saved: [],
    All: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case projectTypes.CREATE_NEW_PROJECT:
            if(action.payload.isDraft) {
                return {
                    ...state,
                    saved: [...state.saved, action.payload]
                };
            } else {
                return {
                    ...state,
                    my: [...state.my, action.payload]
                };
            };
        case projectTypes.GET_PROJECTS:
            return {
                ...state,
                [action.filter]: action.payload
            };
        case projectTypes.DELETE_PROJECT:
            const { filter, id } = action.payload;
            return {
                ...state,
                [filter]: state[filter].filter(project => project.id !== id)
            };
        case projectTypes.EDIT_PROJECT:
            const { data, projectListName } = action.payload;
            return {
                ...state,
                [projectListName]: state[projectListName].map(project => {
                    if(project.id === data.id) {
                        return data;
                    }

                    return project
                })
            };
        default:
            return state;
    }
};

export default reducer;