import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import {addNewPost, state, subscribe, updateNewPostText} from "./redux/state";
import store from './redux/state'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerenderEntireTree = (store: any) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} addPost={store.addNewPost} updateNewPostText={store.updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store);

// subscribe(rerenderEntireTree)
store.subscribe(rerenderEntireTree)

reportWebVitals();