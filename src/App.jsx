import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Components/MainLayout';

import Dashboard from './Pages/Dashboard';

import ProductList from './Pages/product/ProductList';
import ProductGrid from './Pages/product/ProductGrid';
import ProductDetails from './Pages/product/ProductDetails';
import AddProduct from './Pages/product/AddProduct';
import CreateProduct from './Pages/product/CreateProduct';

import CategoryList from './Pages/category/CategoryList';
import AddCategory from './Pages/category/AddCategory';
import CreateCategory from './Pages/category/CreateCategory';

import InventoryList from './Pages/inventory/InventoryList';
import ReceivedOrders from './Pages/inventory/ReceivedOrders';

import SignIn from './Pages/authentication/SignIn';
import SignUp from './Pages/authentication/SignUp';
import ResetPassword from './Pages/authentication/ResetPassword';
import LockScreen from './Pages/authentication/LockScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },

      // Product routes
      { path: 'products/list', element: <ProductList /> },
      { path: 'products/grid', element: <ProductGrid /> },
      { path: 'products/details', element: <ProductDetails /> },
      { path: 'products/details/:id', element: <ProductDetails /> },
      { path: 'products/add', element: <AddProduct /> },
      { path: 'products/add/:id', element: <AddProduct /> },
      { path: 'products/edit/:id', element: <AddProduct /> },
      { path: 'products/create', element: <CreateProduct /> },

      // Category routes
      { path: 'category/list', element: <CategoryList /> },
      { path: 'category-list', element: <CategoryList /> },
      { path: 'category/edit', element: <AddCategory /> },
      { path: 'category/edit/:id', element: <AddCategory /> },
      { path: 'category/add/:id', element: <AddCategory /> },
      { path: 'category/create', element: <CreateCategory /> },
      { path: 'category/add', element: <CreateCategory /> },

      // Inventory routes
      { path: 'inventory/warehouse', element: <InventoryList /> },
      { path: 'inventory/received', element: <ReceivedOrders /> },

      // Authentication routes
      { path: 'authentication', element: <SignIn /> },
      { path: 'authentication/signin', element: <SignIn /> },
      { path: 'authentication/signup', element: <SignUp /> },
      { path: 'authentication/reset-password', element: <ResetPassword /> },
      { path: 'authentication/lock-screen', element: <LockScreen /> },

      { path: '*', element: <Dashboard /> },
    ],
  },
]);

export default router;
