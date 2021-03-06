//client starting point

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import LoginControl from './components/auth/LoginControl';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//////////////////start here 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginControl /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

//then goto App.js