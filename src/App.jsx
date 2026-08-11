import React from 'react';
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

      { path: '*', element: <Dashboard/> },
    ],
  },
  
]);

export default router;