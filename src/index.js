import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AP from "./components/AP";
import Session1 from "./components/Session1";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/website" element={<App />} />
                <Route path="advanced-programming" element={<AP />} />
                <Route path="advanced-programming/session1" element={<Session1/>} />
            </Routes>
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

