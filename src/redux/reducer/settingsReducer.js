import * as types from '../types';

const initialState = {
    editing: false
};

const settingsReducer = (state = initialState, action) => {
    if (action.type === types.SET_EDITING) {
        return {
            ...state,
            editing: action.payload.editing
        }
    }
    return state;
}

export default settingsReducer;
