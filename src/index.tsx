import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state} from './redux/state'
import {BrowserRouter} from "react-router";

export const addNewPost = (post: string) => {
    const newPost = {
        id: state.postPage.posts.length + 1,
        message: post,
        likesCount: 0
    }

    state.postPage.posts.push(newPost);

    console.log('addNewPost', state);
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state} addPost={addNewPost}/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
