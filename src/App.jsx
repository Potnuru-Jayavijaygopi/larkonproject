
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';



import InvoiceList from './pages/invoices/InvoiceList';
import InvoiceDetails from './pages/invoices/InvoiceDetails';
import CreateInvoice from './pages/invoices/CreateInvoice';



import Settings from './pages/settings/Settings';


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

      { path: '*', element: <Dashboard /> },
    ],
  },
]);

export default router;
