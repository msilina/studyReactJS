import * as types from '../types';

export const setSettings = editing => dispatch => {
    dispatch({
        type: types.SET_EDITING,
        payload: { editing }
    });
};

