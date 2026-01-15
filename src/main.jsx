import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// NÃO coloque outro <BrowserRouter> aqui se já está dentro do App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
