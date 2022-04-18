import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='bcc'>
    <App />
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

