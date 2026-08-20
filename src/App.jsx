import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';

import OrderList from './pages/orders/OrderList';
import OrderDetails from './pages/orders/OrderDetails';
import OrderCart from './pages/orders/OrderCart';
import OrderCheckout from './pages/orders/OrderCheckout';

import Accordion from './pages/base-ui/Accordion';
import Alerts from './pages/base-ui/Alerts';
import Avatar from './pages/base-ui/Avatar';
import Badge from './pages/base-ui/Badge';
import Breadcrumb from './pages/base-ui/Breadcrumb';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },

      { path: 'orders/list', element: <OrderList /> },
      { path: 'orders/details', element: <OrderDetails /> },
      { path: 'orders/cart', element: <OrderCart /> },
      { path: 'orders/checkout', element: <OrderCheckout /> },

      { path: 'base-ui/accordion', element: <Accordion /> },
      { path: 'base-ui/alerts', element: <Alerts /> },
      { path: 'base-ui/avatar', element: <Avatar /> },
      { path: 'base-ui/badge', element: <Badge /> },
      { path: 'base-ui/breadcrumb', element: <Breadcrumb /> },

      { path: '*', element: <Navigate to="/orders/list" replace /> },
    ],
  },
]);

export default router;