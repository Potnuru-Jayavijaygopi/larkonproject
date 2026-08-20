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

import InvoiceList from './Pages/invoices/InvoiceList';
import InvoiceDetails from './Pages/invoices/InvoiceDetails';
import CreateInvoice from './Pages/invoices/CreateInvoice';

import Settings from './Pages/settings/Settings';

import CouponsList from './Pages/Coupons-List';
import CouponAdd from './Pages/Coupon-Add';
import Reviews from './Pages/Reviews';
import Chat from './Pages/Chat';
import Email from './Pages/Email';

import Profile from './Pages/Profile';
import RolesList from './Pages/Roles/RolesList';
import RoleCreate from './Pages/Roles/RoleCreate';
import Roleedit from './Pages/Roles/Roleedit';
import Permissions from './Pages/Permissions/Permissions';
import Permissions2 from './Pages/Permissions/Permissions2';

import CustomerDetails from './Pages/Customerdetails/detailspage';
import SellerList from './Pages/Pages2/sellerlist';
import SellerDetails from './Pages/Pages2/sellerdetails';
import SellerCreate from './Pages/Pages2/sellercreate';
import SellerEdit from './Pages/Pages2/selleredit';

import Error404 from './Pages/pages1/Error404';
import ComingSoon from './Pages/pages1/ComingSoon';
import Maintenance from './Pages/pages1/Maintenance';
import Pricing from './Pages/pages1/Pricing';
import Timeline from './Pages/pages1/Timeline';

import Calendar from './Pages/Support/Calendar';
import Faqs from './Pages/Support/Faqs';
import HelpCenter from './Pages/Support/HelpCenter';
import PrivacyPolicy from './Pages/Support/PrivacyPolicy';
import Todo from './Pages/Support/Todo';

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

      // Coupons routes
      { path: 'coupons', element: <CouponsList /> },
      { path: 'coupons/list', element: <CouponsList /> },
      { path: 'coupons-list', element: <CouponsList /> },
      { path: 'coupons/add', element: <CouponAdd /> },
      { path: 'coupon-add', element: <CouponAdd /> },
      { path: 'coupons/edit', element: <CouponAdd /> },
      { path: 'coupons/edit/:id', element: <CouponAdd /> },

      // Profile, Roles, Permissions routes
      { path: 'profile', element: <Profile /> },
      { path: 'roles', element: <RolesList /> },
      { path: 'roles/list', element: <RolesList /> },
      { path: 'roles/create', element: <RoleCreate /> },
      { path: 'roles/add', element: <RoleCreate /> },
      { path: 'roles/edit', element: <Roleedit /> },
      { path: 'roles/edit/:id', element: <Roleedit /> },
      { path: 'permissions', element: <Permissions /> },
      { path: 'permissions/list', element: <Permissions /> },
      { path: 'permissions2', element: <Permissions2 /> },
      { path: 'permissions/2', element: <Permissions2 /> },

      // Customers & Sellers routes
      { path: 'customers', element: <CustomerDetails /> },
      { path: 'customers/list', element: <CustomerDetails /> },
      { path: 'customers/details', element: <CustomerDetails /> },
      { path: 'customers/details/:id', element: <CustomerDetails /> },

      { path: 'sellers', element: <SellerList /> },
      { path: 'sellers/list', element: <SellerList /> },
      { path: 'sellers/details', element: <SellerDetails /> },
      { path: 'sellers/details/:id', element: <SellerDetails /> },
      { path: 'sellers/create', element: <SellerCreate /> },
      { path: 'sellers/add', element: <SellerCreate /> },
      { path: 'sellers/edit', element: <SellerEdit /> },
      { path: 'sellers/edit/:id', element: <SellerEdit /> },

      // Pages1 (Error 404, Coming Soon, Maintenance, Pricing, Timeline) routes
      { path: 'pages/error-404', element: <Error404 /> },
      { path: 'pages1/error-404', element: <Error404 /> },
      { path: 'error-404', element: <Error404 /> },
      { path: '404', element: <Error404 /> },

      { path: 'pages/coming-soon', element: <ComingSoon /> },
      { path: 'pages1/coming-soon', element: <ComingSoon /> },
      { path: 'coming-soon', element: <ComingSoon /> },

      { path: 'pages/maintenance', element: <Maintenance /> },
      { path: 'pages1/maintenance', element: <Maintenance /> },
      { path: 'maintenance', element: <Maintenance /> },

      { path: 'pages/pricing', element: <Pricing /> },
      { path: 'pages1/pricing', element: <Pricing /> },
      { path: 'pricing', element: <Pricing /> },

      { path: 'pages/timeline', element: <Timeline /> },
      { path: 'pages1/timeline', element: <Timeline /> },
      { path: 'timeline', element: <Timeline /> },

      // Reviews, Chat, Email routes
      { path: 'reviews', element: <Reviews /> },
      { path: 'chat', element: <Chat /> },
      { path: 'email', element: <Email /> },

      // Invoices routes
      { path: 'invoices/list', element: <InvoiceList /> },
      { path: 'invoices/details', element: <InvoiceDetails /> },
      { path: 'invoices/details/:id', element: <InvoiceDetails /> },
      { path: 'invoices/create', element: <CreateInvoice /> },
      { path: 'invoices/add', element: <CreateInvoice /> },

      // Settings route
      { path: 'settings', element: <Settings /> },

      // Calendar & Support routes
      { path: 'calendar', element: <Calendar /> },
      { path: 'todo', element: <Todo /> },
      { path: 'faqs', element: <Faqs /> },
      { path: 'help-center', element: <HelpCenter /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },

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
