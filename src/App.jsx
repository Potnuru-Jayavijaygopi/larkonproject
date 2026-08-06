
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';


import Dashboard from './pages/Dashboard';

import InvoiceList from './pages/invoices/InvoiceList';
import InvoiceDetails from './pages/invoices/InvoiceDetails';
import CreateInvoice from './pages/invoices/CreateInvoice';


import Settings from './pages/settings/Settings';



import ListGroup from './pages/base-ui/ListGroup';
import Modal from './pages/base-ui/Modal';
import Offcanvas from './pages/base-ui/Offcanvas';
import Pagination from './pages/base-ui/Pagination';
import Placeholders from './pages/base-ui/Placeholders';
import Tabs from './pages/base-ui/Tabs';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },

      

      
      { path: 'invoices/list', element: <InvoiceList /> },
      { path: 'invoices/details', element: <InvoiceDetails /> },
      { path: 'invoices/create', element: <CreateInvoice /> },

      { path: 'settings', element: <Settings /> },

     
      { path: 'base-ui/list-group', element: <ListGroup /> },
      { path: 'base-ui/modal', element: <Modal /> },
      { path: 'base-ui/offcanvas', element: <Offcanvas /> },
      { path: 'base-ui/pagination', element: <Pagination /> },
      { path: 'base-ui/placeholders', element: <Placeholders /> },
      { path: 'base-ui/tabs', element: <Tabs /> },

      

      
      { path: '*', element: <Dashboard /> },
    ],
  },
 
  
]);

export default router;
