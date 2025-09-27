import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from './redux/state'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: any) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={store.addNewPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)

reportWebVitals();