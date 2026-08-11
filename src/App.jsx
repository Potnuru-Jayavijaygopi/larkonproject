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
      { path: '*', element: <Dashboard/> },
    ],
  },
  
]);

export default router;