import {combineReducers, createStore} from "redux";
import postPageReducer from "./postPageReducer";
import dialogsReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarPageReducer";

const reducers = combineReducers({
    postPage: postPageReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

const store = createStore(reducers);

// @ts-ignore
window.store = store;

export default store;