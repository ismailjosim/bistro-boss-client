import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import AuthProvider from './contexts/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={ router }>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);

