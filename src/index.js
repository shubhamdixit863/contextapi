import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './ThemeContext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Data from './components/Data';
import { useState } from 'react';




const router = createBrowserRouter([
  {
    path: "/data",
    element: <Data/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
 

    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
