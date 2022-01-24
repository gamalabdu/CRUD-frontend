import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     ,
//   document.getElementById('root')
// );

const rootElement = document.getElementById("root");
    render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    , 
    rootElement);
