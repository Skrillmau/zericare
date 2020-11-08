import * as actionTypes from '../Actions/actionTypes';
import updateObject from './utils';

const initialState = {
    
    error: ''
}

const setError = (state, action) => {

    const error = action.payload.error
    return updateObject(state, { error});
}
const clearError = (state, action) => {

    return updateObject(state, { error:''});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ERROR: return setError(state, action);
        case actionTypes.CLEAR_ERROR: return clearError(state, action);
  
        default: return state;
    }
}

export default reducer;