import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  BsChevronDown,
  BsChevronRight,
  BsChevronDoubleRight,
} from 'react-icons/bs';

import dashboardIcon from '../assets/dashboard.png';
import productIcon from '../assets/product.png';
import categoryIcon from '../assets/category.png';
import inventoryIcon from '../assets/inventory.png';
import ordersIcon from '../assets/orders.png';
import purchasesIcon from '../assets/purchases.png';
import attributesIcon from '../assets/attributes.png';
import invoicesIcon from '../assets/invoices.png';
import settingsIcon from '../assets/settings.png';

import profileIcon from '../assets/profile.png';
import rolesIcon from '../assets/roles.png';
import permissionsIcon from '../assets/permissions.png';
import customerIcon from '../assets/customer.png';
import sellersIcon from '../assets/sellers.png';

import couponsIcon from '../assets/coupons.png';
import reviewsIcon from '../assets/reviews.png';

import chatIcon from '../assets/chat.png';
import emailIcon from '../assets/email.png';
import calendarIcon from '../assets/calendar.png';
import todoIcon from '../assets/todo.png';

import helpCenterIcon from '../assets/help center.png';
import faqsIcon from '../assets/FAQS.png';
import privacyPolicyIcon from '../assets/privacy policy.png';

import pagesIcon from '../assets/pages.png';
import authenticationIcon from '../assets/authentication.png';
import widgetsIcon from '../assets/widgets.png';

import baseUiIcon from '../assets/base ui.png';
import advancedUiIcon from '../assets/advanced ui.png';
import chartsIcon from '../assets/charts.png';
import formsIcon from '../assets/forms.png';
import tablesIcon from '../assets/tables.png';
import iconsIcon from '../assets/icons.png';
import mapsIcon from '../assets/maps.png';
import badgeMenuIcon from '../assets/badge menu.png';
import menuItemIcon from '../assets/menu item.png';
import disableItemIcon from '../assets/disable item.png';

import logoImg from '../assets/logo.png';

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location ? location.pathname : '/';

  const [openMenu, setOpenMenu] = useState('baseUi');

  const toggleParentMenu = (e, menuKey) => {
    if (e) e.preventDefault();
    setOpenMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  const handleSubItemClick = (e, menuKey, routePath) => {
    if (e) e.preventDefault();
    setOpenMenu(menuKey);
    navigate(routePath);
  };

  const handleStandaloneClick = (e, routePath) => {
    if (e) e.preventDefault();
    setOpenMenu(null);
    navigate(routePath);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand d-flex align-items-center justify-content-between px-3 py-3">
        <div
          className="logo-text cursor-pointer d-flex align-items-center"
          onClick={(e) => handleStandaloneClick(e, '/')}
        >
          <img
            src={logoImg}
            alt="Larkon Logo"
            style={{ height: '36px', maxWidth: '140px', objectFit: 'contain' }}
          />
        </div>
        <BsChevronDoubleRight className="text-secondary cursor-pointer small opacity-75" />
      </div>

      <div className="sidebar-menu px-2 pb-4">
        <div
          className="menu-category text-uppercase small text-secondary px-3 mt-3 mb-2"
          style={{ fontSize: '0.68rem', letterSpacing: '0.8px' }}
        >
          General
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link-custom ${isActive || currentPath === '/dashboard' ? 'active' : ''}`
          }
          onClick={(e) => handleStandaloneClick(e, '/')}
        >
          <div className="nav-link-left">
            <img src={dashboardIcon} alt="Dashboard" className="sidebar-icon-img" />
            <span>Dashboard</span>
          </div>
        </NavLink>
        <div>
          <a
            href="#products"
            className={`nav-link-custom ${currentPath.startsWith('/products') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'products')}
          >
            <div className="nav-link-left">
              <img src={productIcon} alt="Products" className="sidebar-icon-img" />
              <span>Products</span>
            </div>
            {openMenu === 'products' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'products' && (
            <div className="submenu">
              <NavLink
                to="/products/list"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'products', '/products/list')}
              >
                Product-List
              </NavLink>
              <NavLink
                to="/products/grid"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'products', '/products/grid')}
              >
                Product-Grid
              </NavLink>
              <NavLink
                to="/products/details"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'products', '/products/details')}
              >
                Product-Details
              </NavLink>
              <NavLink
                to="/products/add"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'products', '/products/add')}
              >
                Edit-Product
              </NavLink>
              <NavLink
                to="/products/create"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'products', '/products/create')}
              >
                Create-Product
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <a
            href="#category"
            className={`nav-link-custom ${currentPath.startsWith('/category') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'category')}
          >
            <div className="nav-link-left">
              <img src={categoryIcon} alt="Category" className="sidebar-icon-img" />
              <span>Category</span>
            </div>
            {openMenu === 'category' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'category' && (
            <div className="submenu">
              <NavLink
                to="/category/list"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'category', '/category/list')}
              >
                Category-List
              </NavLink>
              <NavLink
                to="/category/edit"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'category', '/category/edit')}
              >
                Edit-Category
              </NavLink>
              <NavLink
                to="/category/create"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'category', '/category/create')}
              >
                Create-Category
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <a
            href="#inventory"
            className={`nav-link-custom ${currentPath.startsWith('/inventory') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'inventory')}
          >
            <div className="nav-link-left">
              <img src={inventoryIcon} alt="Inventory" className="sidebar-icon-img" />
              <span>Inventory</span>
            </div>
            {openMenu === 'inventory' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'inventory' && (
            <div className="submenu">
              <NavLink
                to="/inventory/warehouse"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'inventory', '/inventory/warehouse')}
              >
                Warehouse-Inventory
              </NavLink>
              <NavLink
                to="/inventory/received"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'inventory', '/inventory/received')}
              >
                Received-Orders
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <a
            href="#orders"
            className={`nav-link-custom ${currentPath.startsWith('/orders') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'orders')}
          >
            <div className="nav-link-left">
              <img src={ordersIcon} alt="Orders" className="sidebar-icon-img" />
              <span>Orders</span>
            </div>
            {openMenu === 'orders' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'orders' && (
            <div className="submenu">
              <NavLink
                to="/orders/list"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'orders', '/orders/list')}
              >
                Order-List
              </NavLink>
              <NavLink
                to="/orders/details"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'orders', '/orders/details')}
              >
                Order-Details
              </NavLink>
              <NavLink
                to="/orders/cart"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'orders', '/orders/cart')}
              >
                Order-Cart
              </NavLink>
              <NavLink
                to="/orders/checkout"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'orders', '/orders/checkout')}
              >
                Order-Checkout
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <a
            href="#purchases"
            className={`nav-link-custom ${currentPath.startsWith('/purchases') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'purchases')}
          >
            <div className="nav-link-left">
              <img src={purchasesIcon} alt="Purchases" className="sidebar-icon-img" />
              <span>Purchases</span>
            </div>
            {openMenu === 'purchases' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'purchases' && (
            <div className="submenu">
              <NavLink
                to="/purchases/list"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'purchases', '/purchases/list')}
              >
                Purchase-List
              </NavLink>
              <NavLink
                to="/purchases/orders"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'purchases', '/purchases/orders')}
              >
                Orders-List
              </NavLink>
              <NavLink
                to="/purchases/returns"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'purchases', '/purchases/returns')}
              >
                Return-Orders
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <a
            href="#attributes"
            className={`nav-link-custom ${currentPath.startsWith('/attributes') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'attributes')}
          >
            <div className="nav-link-left">
              <img src={attributesIcon} alt="Attributes" className="sidebar-icon-img" />
              <span>Attributes</span>
            </div>
            {openMenu === 'attributes' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'attributes' && (
            <div className="submenu">
              <NavLink
                to="/attributes/list"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'attributes', '/attributes/list')}
              >
                Attribute-List
              </NavLink>
              <NavLink
                to="/attributes/edit"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'attributes', '/attributes/edit')}
              >
                Edit-Attribute
              </NavLink>
              <NavLink
                to="/attributes/create"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'attributes', '/attributes/create')}
              >
                Create-Attribute
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <a
            href="#invoices"
            className={`nav-link-custom ${currentPath.startsWith('/invoices') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'invoices')}
          >
            <div className="nav-link-left">
              <img src={invoicesIcon} alt="Invoices" className="sidebar-icon-img" />
              <span>Invoices</span>
            </div>
            {openMenu === 'invoices' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'invoices' && (
            <div className="submenu">
              <NavLink
                to="/invoices/list"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'invoices', '/invoices/list')}
              >
                Invoice-List
              </NavLink>
              <NavLink
                to="/invoices/details"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'invoices', '/invoices/details')}
              >
                Invoice-Details
              </NavLink>
              <NavLink
                to="/invoices/create"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'invoices', '/invoices/create')}
              >
                Create-Invoice
              </NavLink>
            </div>
          )}
        </div>
        <NavLink
          to="/settings"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/settings')}
        >
          <div className="nav-link-left">
            <img src={settingsIcon} alt="Settings" className="sidebar-icon-img" />
            <span>Settings</span>
          </div>
        </NavLink>
        <div
          className="menu-category text-uppercase small text-secondary px-3 mt-4 mb-2"
          style={{ fontSize: '0.68rem', letterSpacing: '0.8px' }}
        >
          Users
        </div>

        <NavLink
          to="/profile"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/profile')}
        >
          <div className="nav-link-left">
            <img src={profileIcon} alt="Profile" className="sidebar-icon-img" />
            <span>Profile</span>
          </div>
        </NavLink>
        <div>
          <a
            href="#roles"
            className={`nav-link-custom ${currentPath.startsWith('/roles') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'roles')}
          >
            <div className="nav-link-left">
              <img src={rolesIcon} alt="Roles" className="sidebar-icon-img" />
              <span>Roles</span>
            </div>
            {openMenu === 'roles' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>
          {openMenu === 'roles' && (
            <div className="submenu">
              <NavLink
                to="/roles/list"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'roles', '/roles/list')}
              >
                Roles-List
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to="/permissions"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/permissions')}
        >
          <div className="nav-link-left">
            <img src={permissionsIcon} alt="Permissions" className="sidebar-icon-img" />
            <span>Permissions</span>
          </div>
        </NavLink>
        <div>
          <a
            href="#customers"
            className={`nav-link-custom ${currentPath.startsWith('/customers') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'customers')}
          >
            <div className="nav-link-left">
              <img src={customerIcon} alt="Customers" className="sidebar-icon-img" />
              <span>Customers</span>
            </div>
            {openMenu === 'customers' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>
          {openMenu === 'customers' && (
            <div className="submenu">
              <NavLink
                to="/customers/list"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'customers', '/customers/list')}
              >
                Customer-List
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <a
            href="#sellers"
            className={`nav-link-custom ${currentPath.startsWith('/sellers') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'sellers')}
          >
            <div className="nav-link-left">
              <img src={sellersIcon} alt="Sellers" className="sidebar-icon-img" />
              <span>Sellers</span>
            </div>
            {openMenu === 'sellers' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>
          {openMenu === 'sellers' && (
            <div className="submenu">
              <NavLink
                to="/sellers/list"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'sellers', '/sellers/list')}
              >
                Seller-List
              </NavLink>
            </div>
          )}
        </div>
        <div
          className="menu-category text-uppercase small text-secondary px-3 mt-4 mb-2"
          style={{ fontSize: '0.68rem', letterSpacing: '0.8px' }}
        >
          Other
        </div>
        <div>
          <a
            href="#coupons"
            className={`nav-link-custom ${currentPath.startsWith('/coupons') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'coupons')}
          >
            <div className="nav-link-left">
              <img src={couponsIcon} alt="Coupons" className="sidebar-icon-img" />
              <span>Coupons</span>
            </div>
            {openMenu === 'coupons' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'coupons' && (
            <div className="submenu">
              <NavLink
                to="/coupons/list"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'coupons', '/coupons/list')}
              >
                Coupons-List
              </NavLink>
              <NavLink
                to="/coupons/add"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'coupons', '/coupons/add')}
              >
                Coupons-Add
              </NavLink>
            </div>
          )}
        </div>
                

        <NavLink
          to="/reviews"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/reviews')}
        >
          <div className="nav-link-left">
            <img src={reviewsIcon} alt="Reviews" className="sidebar-icon-img" />
            <span>Reviews</span>
          </div>
        </NavLink>
        <div
          className="menu-category text-uppercase small text-secondary px-3 mt-4 mb-2"
          style={{ fontSize: '0.68rem', letterSpacing: '0.8px' }}
        >
          Other Apps
        </div>

        <NavLink
          to="/chat"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/chat')}
        >
          <div className="nav-link-left">
            <img src={chatIcon} alt="Chat" className="sidebar-icon-img" />
            <span>Chat</span>
          </div>
        </NavLink>

        <NavLink
          to="/email"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/email')}
        >
          <div className="nav-link-left">
            <img src={emailIcon} alt="Email" className="sidebar-icon-img" />
            <span>Email</span>
          </div>
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/calendar')}
        >
          <div className="nav-link-left">
            <img src={calendarIcon} alt="Calendar" className="sidebar-icon-img" />
            <span>Calendar</span>
          </div>
        </NavLink>

        <NavLink
          to="/todo"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/todo')}
        >
          <div className="nav-link-left">
            <img src={todoIcon} alt="Todo" className="sidebar-icon-img" />
            <span>Todo</span>
          </div>
        </NavLink>
        <div
          className="menu-category text-uppercase small text-secondary px-3 mt-4 mb-2"
          style={{ fontSize: '0.68rem', letterSpacing: '0.8px' }}
        >
          Support
        </div>

        <NavLink
          to="/help-center"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/help-center')}
        >
          <div className="nav-link-left">
            <img src={helpCenterIcon} alt="Help Center" className="sidebar-icon-img" />
            <span>Help Center</span>
          </div>
        </NavLink>

        <NavLink
          to="/faqs"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/faqs')}
        >
          <div className="nav-link-left">
            <img src={faqsIcon} alt="FAQS" className="sidebar-icon-img" />
            <span>FAQS</span>
          </div>
        </NavLink>

        <NavLink
          to="/privacy-policy"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/privacy-policy')}
        >
          <div className="nav-link-left">
            <img src={privacyPolicyIcon} alt="Privacy Policy" className="sidebar-icon-img" />
            <span>Privacy Policy</span>
          </div>
        </NavLink>
        <div
          className="menu-category text-uppercase small text-secondary px-3 mt-4 mb-2"
          style={{ fontSize: '0.68rem', letterSpacing: '0.8px' }}
        >
          Custom
        </div>
        <div>
          <a
            href="#pages"
            className={`nav-link-custom ${currentPath.startsWith('/pages') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'pages')}
          >
            <div className="nav-link-left">
              <img src={pagesIcon} alt="Pages" className="sidebar-icon-img" />
              <span>Pages</span>
            </div>
            {openMenu === 'pages' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'pages' && (
            <div className="submenu">
              <NavLink
                to="/pages/coming-soon"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'pages', '/pages/coming-soon')}
              >
                Coming-Soon
              </NavLink>
              <NavLink
                to="/pages/maintenance"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'pages', '/pages/maintenance')}
              >
                Maintenance
              </NavLink>
              <NavLink
                to="/pages/error-404"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'pages', '/pages/error-404')}
              >
                Error-404
              </NavLink>
              <NavLink
                to="/pages/timeline"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'pages', '/pages/timeline')}
              >
                Timeline
              </NavLink>
              <NavLink
                to="/pages/pricing"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'pages', '/pages/pricing')}
              >
                Pricing
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <a
            href="#authentication"
            className={`nav-link-custom ${currentPath.startsWith('/authentication') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'authentication')}
          >
            <div className="nav-link-left">
              <img src={authenticationIcon} alt="Authentication" className="sidebar-icon-img" />
              <span>Authentication</span>
            </div>
            {openMenu === 'authentication' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'authentication' && (
            <div className="submenu">
              <NavLink
                to="/authentication/signin"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'authentication', '/authentication/signin')}
              >
                Sign-In
              </NavLink>
              <NavLink
                to="/authentication/signup"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'authentication', '/authentication/signup')}
              >
                Sign-Up
              </NavLink>
              <NavLink
                to="/authentication/reset-password"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'authentication', '/authentication/reset-password')}
              >
                Reset-Password
              </NavLink>
              <NavLink
                to="/authentication/lock-screen"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'authentication', '/authentication/lock-screen')}
              >
                Lock-Screen
              </NavLink>
            </div>
          )}
        </div>
        <NavLink
          to="/widgets"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/widgets')}
        >
          <div className="nav-link-left">
            <img src={widgetsIcon} alt="Widgets" className="sidebar-icon-img" />
            <span>Widgets</span>
          </div>
          <span
            className="badge-hot"
            style={{
              backgroundColor: '#10b981',
              color: '#fff',
              fontSize: '0.65rem',
              padding: '0.15rem 0.4rem',
              borderRadius: '0.25rem',
            }}
          >
            +9
          </span>
        </NavLink>
        <div
          className="menu-category text-uppercase small text-secondary px-3 mt-4 mb-2"
          style={{ fontSize: '0.68rem', letterSpacing: '0.8px' }}
        >
          Components
        </div>
        <div>
          <a
            href="#base-ui"
            className={`nav-link-custom ${currentPath.startsWith('/base-ui') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'baseUi')}
          >
            <div className="nav-link-left">
              <img src={baseUiIcon} alt="Base UI" className="sidebar-icon-img" />
              <span>Base UI</span>
            </div>
            {openMenu === 'baseUi' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'baseUi' && (
            <div className="submenu">
              {[
                { name: 'Accordion', key: 'accordion' },
                { name: 'Alerts', key: 'alerts' },
                { name: 'Avatar', key: 'avatar' },
                { name: 'Badge', key: 'badge' },
                { name: 'Breadcrumb', key: 'breadcrumb' },
                { name: 'Buttons', key: 'buttons' },
                { name: 'Card', key: 'card' },
                { name: 'Carousel', key: 'carousel' },
                { name: 'Collapse', key: 'collapse' },
                { name: 'Dropdown', key: 'dropdown' },
                { name: 'List-Group', key: 'list-group' },
                { name: 'Modal', key: 'modal' },
                { name: 'Tabs', key: 'tabs' },
                { name: 'Offcanvas', key: 'offcanvas' },
                { name: 'Pagination', key: 'pagination' },
                { name: 'Placeholders', key: 'placeholders' },
                { name: 'Popovers', key: 'popovers' },
                { name: 'Progress', key: 'progress' },
                { name: 'Scrollspy', key: 'scrollspy' },
                { name: 'Spinners', key: 'spinners' },
                { name: 'Toasts', key: 'toasts' },
                { name: 'Tooltips', key: 'tooltips' },
              ].map((subItem) => (
                <NavLink
                  key={subItem.key}
                  to={`/base-ui/${subItem.key}`}
                  className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleSubItemClick(e, 'baseUi', `/base-ui/${subItem.key}`)}
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <div>
          <a
            href="#advanced-ui"
            className={`nav-link-custom ${currentPath.startsWith('/advanced-ui') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'advancedUi')}
          >
            <div className="nav-link-left">
              <img src={advancedUiIcon} alt="Advanced UI" className="sidebar-icon-img" />
              <span>Advanced UI</span>
            </div>
            {openMenu === 'advancedUi' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'advancedUi' && (
            <div className="submenu">
              {[
                { name: 'Sweet-Alert', key: 'sweet-alert' },
                { name: 'Nestable-List', key: 'nestable' },
                { name: 'Ratings', key: 'ratings' },
                { name: 'Animation', key: 'animation' },
                { name: 'Swiper-Slider', key: 'swiper' },
              ].map((subItem) => (
                <NavLink
                  key={subItem.key}
                  to={`/advanced-ui/${subItem.key}`}
                  className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleSubItemClick(e, 'advancedUi', `/advanced-ui/${subItem.key}`)}
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
<div>
          <a
            href="#email"
            className={`nav-link-custom ${currentPath.startsWith('/email') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'email')}
          >
            <div className="nav-link-left">
              <img src={emailIcon} alt="Email" className="sidebar-icon-img" />
              <span>Email</span>
            </div>
            {openMenu === 'email' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'email' && (
            <div className="submenu">
              {[
                { name: 'Inbox', key: 'inbox' },
                { name: 'Read Email', key: 'read' },
                { name: 'Compose', key: 'compose' },
              ].map((subItem) => (
                <NavLink
                  key={subItem.key}
                  to={`/email/${subItem.key}`}
                  className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleSubItemClick(e, 'email', `/email/${subItem.key}`)}
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <div>
          <a
            href="#charts"
            className={`nav-link-custom ${currentPath.startsWith('/charts') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'charts')}
          >
            <div className="nav-link-left">
              <img src={chartsIcon} alt="Charts" className="sidebar-icon-img" />
              <span>Charts</span>
            </div>
            {openMenu === 'charts' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'charts' && (
            <div className="submenu">
              {[
                { name: 'Apex-Charts', key: 'apex' },
                { name: 'Chartjs', key: 'chartjs' },
              ].map((subItem) => (
                <NavLink
                  key={subItem.key}
                  to={`/charts/${subItem.key}`}
                  className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleSubItemClick(e, 'charts', `/charts/${subItem.key}`)}
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <div>
          <a
            href="#forms"
            className={`nav-link-custom ${currentPath.startsWith('/forms') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'forms')}
          >
            <div className="nav-link-left">
              <img src={formsIcon} alt="Forms" className="sidebar-icon-img" />
              <span>Forms</span>
            </div>
            {openMenu === 'forms' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'forms' && (
            <div className="submenu">
              {[
                { name: 'Basic-Elements', key: 'basic' },
                { name: 'Form-Validation', key: 'validation' },
                { name: 'Wizard', key: 'wizard' },
                { name: 'Editors', key: 'editors' },
                { name: 'File-Uploads', key: 'uploads' },
              ].map((subItem) => (
                <NavLink
                  key={subItem.key}
                  to={`/forms/${subItem.key}`}
                  className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleSubItemClick(e, 'forms', `/forms/${subItem.key}`)}
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <div>
          <a
            href="#tables"
            className={`nav-link-custom ${currentPath.startsWith('/tables') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'tables')}
          >
            <div className="nav-link-left">
              <img src={tablesIcon} alt="Tables" className="sidebar-icon-img" />
              <span>Tables</span>
            </div>
            {openMenu === 'tables' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'tables' && (
            <div className="submenu">
              {[
                { name: 'Basic-Tables', key: 'basic' },
                { name: 'Data-Tables', key: 'datatables' },
              ].map((subItem) => (
                <NavLink
                  key={subItem.key}
                  to={`/tables/${subItem.key}`}
                  className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleSubItemClick(e, 'tables', `/tables/${subItem.key}`)}
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <div>
          <a
            href="#icons"
            className={`nav-link-custom ${currentPath.startsWith('/icons') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'icons')}
          >
            <div className="nav-link-left">
              <img src={iconsIcon} alt="Icons" className="sidebar-icon-img" />
              <span>Icons</span>
            </div>
            {openMenu === 'icons' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'icons' && (
            <div className="submenu">
              {[
                { name: 'Bootstrap-Icons', key: 'bootstrap' },
                { name: 'Feather-Icons', key: 'feather' },
              ].map((subItem) => (
                <NavLink
                  key={subItem.key}
                  to={`/icons/${subItem.key}`}
                  className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleSubItemClick(e, 'icons', `/icons/${subItem.key}`)}
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <div>
          <a
            href="#maps"
            className={`nav-link-custom ${currentPath.startsWith('/maps') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'maps')}
          >
            <div className="nav-link-left">
              <img src={mapsIcon} alt="Maps" className="sidebar-icon-img" />
              <span>Maps</span>
            </div>
            {openMenu === 'maps' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'maps' && (
            <div className="submenu">
              {[
                { name: 'Google-Maps', key: 'google' },
                { name: 'Vector-Maps', key: 'vector' },
              ].map((subItem) => (
                <NavLink
                  key={subItem.key}
                  to={`/maps/${subItem.key}`}
                  className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleSubItemClick(e, 'maps', `/maps/${subItem.key}`)}
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <a
          href="#badge-menu"
          className="nav-link-custom"
          onClick={(e) => e.preventDefault()}
        >
          <div className="nav-link-left">
            <img src={badgeMenuIcon} alt="Badge Menu" className="sidebar-icon-img" />
            <span>Badge Menu</span>
          </div>
          <span
            className="badge bg-danger rounded-circle p-1"
            style={{ fontSize: '0.65rem', minWidth: '18px' }}
          >
            1
          </span>
        </a>
        <div>
          <a
            href="#menu-item"
            className={`nav-link-custom ${currentPath.startsWith('/menu-item') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'menuItem')}
          >
            <div className="nav-link-left">
              <img src={menuItemIcon} alt="Menu Item" className="sidebar-icon-img" />
              <span>Menu Item</span>
            </div>
            {openMenu === 'menuItem' ? <BsChevronDown className="small" /> : <BsChevronRight className="small" />}
          </a>

          {openMenu === 'menuItem' && (
            <div className="submenu">
              <NavLink
                to="/menu-item/sub-1"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'menuItem', '/menu-item/sub-1')}
              >
                Sub-Item-1
              </NavLink>
              <NavLink
                to="/menu-item/sub-2"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'menuItem', '/menu-item/sub-2')}
              >
                Sub-Item-2
              </NavLink>
            </div>
          )}
        </div>
        <div className="nav-link-custom opacity-50 cursor-not-allowed">
          <div className="nav-link-left">
            <img src={disableItemIcon} alt="Disable Item" className="sidebar-icon-img" />
            <span>Disable Item</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;