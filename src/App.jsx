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

import OrderList from './Pages/orders/OrderList';
import OrderDetails from './Pages/orders/OrderDetails';
import OrderCart from './Pages/orders/OrderCart';
import OrderCheckout from './Pages/orders/OrderCheckout';

import PurchaseList from './Pages/purchases/PurchaseList';
import OrdersList from './Pages/purchases/OrdersList';
import ReturnOrders from './Pages/purchases/ReturnOrders';

import AttributeList from './Pages/attributes/AttributeList';
import AddAttribute from './Pages/attributes/AddAttribute';
import CreateAttribute from './Pages/attributes/CreateAttribute';

import Widgets from './Pages/widgets/Widgets';

import Accordion from './Pages/base-ui/Accordion';
import Alerts from './Pages/base-ui/Alerts';
import Avatar from './Pages/base-ui/Avatar';
import Badge from './Pages/base-ui/Badge';
import Breadcrumb from './Pages/base-ui/Breadcrumb';
import Buttons from './Pages/base-ui/Buttons';
import Card from './Pages/base-ui/Card';
import Carousel from './Pages/base-ui/Carousel';
import Collapse from './Pages/base-ui/Collapse';
import Dropdown from './Pages/base-ui/Dropdown';
import ListGroup from './Pages/base-ui/ListGroup';
import Modal from './Pages/base-ui/Modal';
import Offcanvas from './Pages/base-ui/Offcanvas';
import BasePagination from './Pages/base-ui/Pagination';
import Placeholders from './Pages/base-ui/Placeholders';
import Tabs from './Pages/base-ui/Tabs';

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

      // Orders routes
      { path: 'orders/list', element: <OrderList /> },
      { path: 'orders/details', element: <OrderDetails /> },
      { path: 'orders/cart', element: <OrderCart /> },
      { path: 'orders/checkout', element: <OrderCheckout /> },

      // Purchases routes
      { path: 'purchases/list', element: <PurchaseList /> },
      { path: 'purchases/orders', element: <OrdersList /> },
      { path: 'purchases/order-list', element: <OrdersList /> },
      { path: 'purchases/returns', element: <ReturnOrders /> },

      // Attributes routes
      { path: 'attributes/list', element: <AttributeList /> },
      { path: 'attributes/edit', element: <AddAttribute /> },
      { path: 'attributes/edit/:id', element: <AddAttribute /> },
      { path: 'attributes/add', element: <AddAttribute /> },
      { path: 'attributes/add/:id', element: <AddAttribute /> },
      { path: 'attributes/create', element: <CreateAttribute /> },

      // Base-UI routes
      { path: 'base-ui/accordion', element: <Accordion /> },
      { path: 'base-ui/alerts', element: <Alerts /> },
      { path: 'base-ui/avatar', element: <Avatar /> },
      { path: 'base-ui/badge', element: <Badge /> },
      { path: 'base-ui/breadcrumb', element: <Breadcrumb /> },
      { path: 'base-ui/buttons', element: <Buttons /> },
      { path: 'base-ui/card', element: <Card /> },
      { path: 'base-ui/carousel', element: <Carousel /> },
      { path: 'base-ui/collapse', element: <Collapse /> },
      { path: 'base-ui/dropdown', element: <Dropdown /> },
      { path: 'base-ui/list-group', element: <ListGroup /> },
      { path: 'base-ui/modal', element: <Modal /> },
      { path: 'base-ui/offcanvas', element: <Offcanvas /> },
      { path: 'base-ui/pagination', element: <BasePagination /> },
      { path: 'base-ui/placeholders', element: <Placeholders /> },
      { path: 'base-ui/tabs', element: <Tabs /> },

      // Widgets route
      { path: 'widgets', element: <Widgets /> },

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
