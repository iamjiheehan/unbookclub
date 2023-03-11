import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import GlobalStyle from './styled-components/GlobalStyled';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Fragment>
        <GlobalStyle />
        <App />
      </React.Fragment>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
