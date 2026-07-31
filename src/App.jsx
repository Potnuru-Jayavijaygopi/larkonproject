import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';

// import ProductList from './pages/product/ProductList';
// import ProductGrid from './pages/product/ProductGrid';
// import ProductDetails from './pages/product/ProductDetails';
// import AddProduct from './pages/product/AddProduct';
// import CreateProduct from './pages/product/CreateProduct';

// import CategoryList from './pages/category/CategoryList';
// import AddCategory from './pages/category/AddCategory';
// import CreateCategory from './pages/category/CreateCategory';

// import InventoryList from './pages/inventory/InventoryList';
// import ReceivedOrders from './pages/inventory/ReceivedOrders';

// import OrderList from './pages/orders/OrderList';
// import OrderDetails from './pages/orders/OrderDetails';
// import OrderCart from './pages/orders/OrderCart';
// import OrderCheckout from './pages/orders/OrderCheckout';

import AttributeList from './pages/attributes/AttributeList';
import AddAttribute from './pages/attributes/AddAttribute';
import CreateAttribute from './pages/attributes/CreateAttribute';

// import InvoiceList from './pages/invoices/InvoiceList';
// import InvoiceDetails from './pages/invoices/InvoiceDetails';
// import CreateInvoice from './pages/invoices/CreateInvoice';

import PurchaseList from './pages/purchases/PurchaseList';
import OrdersList from './pages/purchases/OrdersList';
import ReturnOrders from './pages/purchases/ReturnOrders';

// import Settings from './pages/settings/Settings';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },

     
      // { path: 'products/list', element: <ProductList /> },
      // { path: 'products/grid', element: <ProductGrid /> },
      // { path: 'products/details', element: <ProductDetails /> },
      // { path: 'products/add', element: <AddProduct /> },
      // { path: 'products/create', element: <CreateProduct /> },

   
      // { path: 'category/list', element: <CategoryList /> },
      // { path: 'category/edit', element: <AddCategory /> },
      // { path: 'category/create', element: <CreateCategory /> },

      
      // { path: 'inventory/warehouse', element: <InventoryList /> },
      // { path: 'inventory/received', element: <ReceivedOrders /> },


      // { path: 'orders/list', element: <OrderList /> },
      // { path: 'orders/details', element: <OrderDetails /> },
      // { path: 'orders/cart', element: <OrderCart /> },
      // { path: 'orders/checkout', element: <OrderCheckout /> },

     
      { path: 'purchases/list', element: <PurchaseList /> },
      { path: 'purchases/orders', element: <OrdersList /> },
      { path: 'purchases/returns', element: <ReturnOrders /> },

      
      { path: 'attributes/list', element: <AttributeList /> },
      { path: 'attributes/edit', element: <AddAttribute /> },
      { path: 'attributes/create', element: <CreateAttribute /> },

      
      // { path: 'invoices/list', element: <InvoiceList /> },
      // { path: 'invoices/details', element: <InvoiceDetails /> },
      // { path: 'invoices/create', element: <CreateInvoice /> },

     
      // { path: 'settings', element: <Settings /> },

      { path: '*', element: <Dashboard /> },
    ],
  },
]);

export default router;
