export const GET_GRID = "GET_GRID";
export const UPDATE_GRID = "UPDATE_GRID";

export function getGrid() {
    return dispatch => {
        dispatch({
            type: GET_GRID,
            grid: [
                [true, false, true],
                [false, true, false],
                [true, false, true]
            ]
        });
    };
}

export function updateGrid(grid) {
    return dispatch => {
        dispatch({
            type: UPDATE_GRID,
            grid
        });
    };
}
