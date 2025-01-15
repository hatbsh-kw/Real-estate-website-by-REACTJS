
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import your styles
import App from './App'; // Your main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component inside StrictMode */}
  </React.StrictMode>
);
