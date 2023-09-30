import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import MainRoutes from './Routes/MainRoutes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={MainRoutes}></RouterProvider>
  </React.StrictMode>
);
