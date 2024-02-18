import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Renderiza o componente principal (App) no elemento com o ID 'root' usando o React StrictMode
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
