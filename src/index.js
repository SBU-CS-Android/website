import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AP from "./components/AP";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/website" element={<App />} />
                <Route path="advanced-programming" element={<AP />} />
            </Routes>
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

