import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';

import OrderList from './pages/orders/OrderList';
import OrderDetails from './pages/orders/OrderDetails';
import OrderCart from './pages/orders/OrderCart';
import OrderCheckout from './pages/orders/OrderCheckout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/orders/checkout" replace /> },
      { path: 'orders/list', element: <OrderList /> },
      { path: 'orders/details', element: <OrderDetails /> },
      { path: 'orders/cart', element: <OrderCart /> },
      { path: 'orders/checkout', element: <OrderCheckout /> },
      { path: '*', element: <Navigate to="/orders/checkout" replace /> },
    ],
  },
]);

export default router;