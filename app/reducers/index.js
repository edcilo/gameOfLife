import { combineReducers } from "redux";

import { GET_GRID, UPDATE_GRID } from "../actions/";

function cloneObject(object) {
    return JSON.parse(JSON.stringify(object));
}

let dataState = {
    grid: []
};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case GET_GRID:
            state = Object.assign({}, state, { grid: action.grid });
            return state;

        case UPDATE_GRID:
            state = Object.assign({}, state, { grid: action.grid });
            return state;

        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
