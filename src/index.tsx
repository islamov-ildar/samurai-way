import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {addNewPost, state, subscribe, updateNewPostText} from "./redux/state";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerenderEntireTree = (state: any, addNewPost: any, updateNewPostText: any) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addNewPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(state, addNewPost, updateNewPostText);

subscribe(rerenderEntireTree)

reportWebVitals();