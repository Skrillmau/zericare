import {createStore, applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { ReactReduxContext } from 'react-redux';
import thunk from 'redux-thunk';

import authReducer from './Store/Reducers/auth';
import errorReducer from './Store/Reducers/error';
import userReducer from './Store/Reducers/user';


const initialState = {};
const middleware = [thunk];

const rootReducer = combineReducers ({
    authStore: authReducer,
    errorStore:errorReducer,
    userStore:userReducer
    
});
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;