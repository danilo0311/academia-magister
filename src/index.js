import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.js';
import Header from './components/Header/Header.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <Header></Header>
    <App></App>
  </React.StrictMode>

);