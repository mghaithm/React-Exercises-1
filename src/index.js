import React from 'react';
import ReactDOM from 'react-dom/client'; // 🆕 use 'react-dom/client'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // 🆕 new root API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
