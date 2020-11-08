import * as actionTypes from './actionTypes';

const setError = (error) => {
    return {
        type: actionTypes.SET_ERROR,
        payload:{
            error
        }
    }
}
const clearErr = () => {
    return {
        type: actionTypes.CLEAR_ERROR
    }
}

export const saveError = error => {
    return dispatch => {
        dispatch(setError(error));
       
    }
};

export const clearError = () => {
    return dispatch => {
        dispatch(clearErr());
       
    }
};