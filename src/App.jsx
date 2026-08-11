import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Components/MainLayout';

import Dashboard from './Pages/Dashboard';
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

import InvoiceList from './Pages/invoices/InvoiceList';
import InvoiceDetails from './Pages/invoices/InvoiceDetails';
import CreateInvoice from './Pages/invoices/CreateInvoice';

import Settings from './Pages/settings/Settings';

import ListGroup from './Pages/base-ui/ListGroup';
import Modal from './Pages/base-ui/Modal';
import Offcanvas from './Pages/base-ui/Offcanvas';
import Pagination from './Pages/base-ui/Pagination';
import Placeholders from './Pages/base-ui/Placeholders';
import Tabs from './Pages/base-ui/Tabs';

import Buttons from './Pages/base-ui/Buttons';
import Card from './Pages/base-ui/Card';
import Carousel from './Pages/base-ui/Carousel';
import Collapse from './Pages/base-ui/Collapse';
import Dropdown from './Pages/base-ui/Dropdown';
import AttributeList from './Pages/attributes/AttributeList';
import AddAttribute from './Pages/attributes/AddAttribute';
import CreateAttribute from './Pages/attributes/CreateAttribute';
import PurchaseList from './Pages/purchases/PurchaseList';
import OrdersList from './Pages/purchases/OrdersList';
import ReturnOrders from './Pages/purchases/ReturnOrders';

import ProductList from './Pages/product/ProductList';
import ProductGrid from './Pages/product/ProductGrid';
import ProductDetails from './Pages/product/ProductDetails';
import AddProduct from './Pages/product/AddProduct';
import CreateProduct from './Pages/product/CreateProduct';

import ComingSoon from './Pages/pages1/ComingSoon';
import Maintenance from './Pages/pages1/Maintenance';
import Error404 from './Pages/pages1/Error404';
import Timeline from './Pages/pages1/Timeline';
import Pricing from './Pages/pages1/Pricing';

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
      { path: 'products/add', element: <AddProduct /> },
      { path: 'products/create', element: <CreateProduct /> },

      // Support routes
      { path: 'calendar', element: <Calendar /> },
      { path: 'todo', element: <Todo /> },
      { path: 'help-center', element: <HelpCenter /> },
      { path: 'faqs', element: <Faqs /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },

      // Coupons & Reviews
      { path: 'coupons/list', element: <CouponsList /> },
      { path: 'coupons/add', element: <CouponAdd /> },
      { path: 'reviews', element: <ReviewsList /> },

      // Apps
      { path: 'chat', element: <Chat /> },
      { path: 'email', element: <Email /> },

      // Customers
      { path: 'customer-details', element: <DetailsPage /> },
      { path: 'customers/details', element: <DetailsPage /> },
      { path: 'customers/customer-details', element: <DetailsPage /> },
      { path: 'customers/Customer Details', element: <DetailsPage /> },

      // Sellers
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

      // Invoices
      { path: 'invoices/list', element: <InvoiceList /> },
      { path: 'invoices/details', element: <InvoiceDetails /> },
      { path: 'invoices/create', element: <CreateInvoice /> },

      // Settings
      { path: 'settings', element: <Settings /> },

      // Base UI
      { path: 'base-ui/list-group', element: <ListGroup /> },
      { path: 'base-ui/modal', element: <Modal /> },
      { path: 'base-ui/offcanvas', element: <Offcanvas /> },
      { path: 'base-ui/pagination', element: <Pagination /> },
      { path: 'base-ui/placeholders', element: <Placeholders /> },
      { path: 'base-ui/tabs', element: <Tabs /> },
      { path: 'base-ui/buttons', element: <Buttons /> },
      { path: 'base-ui/card', element: <Card /> },
      { path: 'base-ui/cards', element: <Card /> },
      { path: 'base-ui/carousel', element: <Carousel /> },
      { path: 'base-ui/collapse', element: <Collapse /> },
      { path: 'base-ui/dropdown', element: <Dropdown /> },

      // Purchases
      { path: 'purchases/list', element: <PurchaseList /> },
      { path: 'purchases/orders', element: <OrdersList /> },
      { path: 'purchases/returns', element: <ReturnOrders /> },

      // Attributes
      { path: 'attributes/list', element: <AttributeList /> },
      { path: 'attributes/edit', element: <AddAttribute /> },
      { path: 'attributes/create', element: <CreateAttribute /> },

      // Custom Pages
      { path: 'pages/coming-soon', element: <ComingSoon /> },
      { path: 'pages/maintenance', element: <Maintenance /> },
      { path: 'pages/error-404', element: <Error404 /> },
      { path: 'pages/timeline', element: <Timeline /> },
      { path: 'pages/pricing', element: <Pricing /> },

      { path: '*', element: <Dashboard /> },
    ],
  },
]);

export default router;