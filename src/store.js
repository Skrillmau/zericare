import {createStore, applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { ReactReduxContext } from 'react-redux';
import thunk from 'redux-thunk';

import authReducer from './Store/Reducers/auth';


const initialState = {};
const middleware = [thunk];

const rootReducer = combineReducers ({
    authStore: authReducer,
    
});
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;