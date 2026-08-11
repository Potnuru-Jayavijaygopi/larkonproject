import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Buttons from './pages/base-ui/Buttons';
import Card from './pages/base-ui/Card';
import Carousel from './pages/base-ui/Carousel';
import Collapse from './pages/base-ui/Collapse';
import Dropdown from './pages/base-ui/Dropdown';





import AttributeList from './pages/attributes/AttributeList';
import AddAttribute from './pages/attributes/AddAttribute';
import CreateAttribute from './pages/attributes/CreateAttribute';



import PurchaseList from './pages/purchases/PurchaseList';
import OrdersList from './pages/purchases/OrdersList';
import ReturnOrders from './pages/purchases/ReturnOrders';




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },

     
 

   
     

      
    

     
      { path: 'purchases/list', element: <PurchaseList /> },
      { path: 'purchases/orders', element: <OrdersList /> },
      { path: 'purchases/returns', element: <ReturnOrders /> },

      
      { path: 'attributes/list', element: <AttributeList /> },
      { path: 'attributes/edit', element: <AddAttribute /> },
      { path: 'attributes/create', element: <CreateAttribute /> },

      { path: 'base-ui/buttons', element: <Buttons /> },
      { path: 'base-ui/card', element: <Card /> },
      { path: 'base-ui/cards', element: <Card /> },
      { path: 'base-ui/carousel', element: <Carousel /> },
      { path: 'base-ui/collapse', element: <Collapse /> },
      { path: 'base-ui/dropdown', element: <Dropdown /> },
      
     

      { path: '*', element: <Dashboard /> },
    ],
  },
]);

export default router;
