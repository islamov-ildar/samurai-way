import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from './redux/redux-store'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: any) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

console.log('store', store.getState())

store.subscribe(() => rerenderEntireTree(store.getState()))

reportWebVitals();