
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';


import Dashboard from './pages/Dashboard';
import Calendar from "./Pages/Support/Calendar";
import Todo from "./Pages/Support/Todo";
import HelpCenter from "./Pages/Support/HelpCenter";
import Faqs from "./Pages/Support/Faqs";
import PrivacyPolicy from "./Pages/Support/PrivacyPolicy";

import CouponsList from './Pages/Coupons-List';
import CouponAdd from './Pages/Coupon-Add';
import ReviewsList from './Pages/Reviews';
import Chat from './Pages/Chat';
import Email from './Pages/Email';
import DetailsPage from './Pages/Customerdetails/detailspage';

import SellerList from './Pages/Pages2/sellerlist';
import SellerDetails from './Pages/Pages2/sellerdetails';
import SellerEdit from './Pages/Pages2/selleredit';
import SellerCreate from './Pages/Pages2/sellercreate';

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
    element: <MainLayout/>,
    children: [
      { index: true, element: <Dashboard/> },
      { path: 'dashboard', element: <Dashboard/> },
      { path: 'calendar', element: <Calendar/> },
      { path: 'todo', element: <Todo/> },
      { path: 'help-center', element: <HelpCenter/> },
      { path: 'faqs', element: <Faqs/> },
      { path: 'privacy-policy', element: <PrivacyPolicy/> },
       { path: 'coupons/list', element: <CouponsList /> },
      { path: 'coupons/add', element: <CouponAdd /> },
      { path: 'reviews', element: <ReviewsList /> },
      { path: 'chat', element: <Chat /> },
      { path: 'email', element: <Email /> },
       { path: 'customer-details', element: <DetailsPage /> },
      { path: 'customers/details', element: <DetailsPage /> },
      { path: 'customers/customer-details', element: <DetailsPage /> },
      { path: 'customers/Customer Details', element: <DetailsPage /> },

      { path: 'sellers/list', element: <SellerList /> },
      { path: 'seller-list', element: <SellerList /> },

      { path: 'sellers/details', element: <SellerDetails /> },
      { path: 'sellers/details/:id', element: <SellerDetails /> },
      { path: 'seller-details', element: <SellerDetails /> },

      { path: 'sellers/edit', element: <SellerEdit /> },
      { path: 'sellers/edit/:id', element: <SellerEdit /> },
      { path: 'seller-edit', element: <SellerEdit /> },

      { path: 'sellers/create', element: <SellerCreate /> },
      { path: 'sellers/add', element: <SellerCreate /> },
      { path: 'seller-create', element: <SellerCreate /> },

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

      { path: '*', element: <Dashboard/> },
    ],
  },
  
]);

export default router;