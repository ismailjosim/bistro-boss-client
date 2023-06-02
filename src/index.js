import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import AuthProvider from './contexts/AuthProvider';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';
// import 'sweetalert2/dist/sweetalert2.css';

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={ queryClient }>
        <Toaster
          position="top-right"
          reverseOrder={ false }
        />
        <RouterProvider router={ router } />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

