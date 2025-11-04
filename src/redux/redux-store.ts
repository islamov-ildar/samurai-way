import {applyMiddleware, combineReducers, createStore} from "redux";
import postPageReducer from "./postPageReducer";
import dialogsReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarPageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import {thunk as thunkMiddleware} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";

const reducers = combineReducers({
    postPage: postPageReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersPageReducer,
    authReducer: authReducer,
    appReducer: appReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;