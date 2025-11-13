import React, {act} from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {createRoot} from "react-dom/client";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

test('renders learn react link', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </MemoryRouter>
    );
    const linkElement = screen.getByText('Profile');
    expect(linkElement).toBeInTheDocument();
});

it('render without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    act(() => {
        root.render(
            <MemoryRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </MemoryRouter>
        );
        root.unmount();
    })
})