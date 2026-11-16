import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Apunta al nuevo App.jsx de la raíz de src

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);