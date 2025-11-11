import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('render without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<App />);
    root.unmount();
})