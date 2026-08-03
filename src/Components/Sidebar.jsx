import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  BsBoxFill,
  BsGrid,
  BsBox,
  BsTag,
  BsLayers,
  BsBag,
  BsCart,
  BsSliders,
  BsReceipt,
  BsGear,
  BsPerson,
  BsShieldLock,
  BsKey,
  BsPeople,
  BsShop,
  BsTicketPerforated,
  BsStar,
  BsChatDots,
  BsEnvelope,
  BsCalendarEvent,
  BsCheck2Square,
  BsQuestionCircle,
  BsInfoCircle,
  BsShieldCheck,
  BsFileEarmarkText,
  BsLock,
  BsXDiamond,
  BsUiChecksGrid,
  BsChevronDown,
  BsChevronRight,
} from 'react-icons/bs';
import logo from '../assets/logo.png';


function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location ? location.pathname : '/';

  const [openMenu, setOpenMenu] = useState(null);

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
  
      <div className="sidebar-brand">
        <div
          className="logo-text cursor-pointer"
          onClick={(e) => handleStandaloneClick(e, '/')}
        >
         <img src={logo} alt="logo" width="120" style={{marginLeft:20}}/>
        </div>
      </div>

      <div className="sidebar-menu">
        <div className="menu-category">General</div>

     
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link-custom ${isActive || currentPath === '/dashboard' ? 'active' : ''}`
          }
          onClick={(e) => handleStandaloneClick(e, '/')}
        >
          <div className="nav-link-left">
            <BsGrid />
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
              <BsBox />
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
                Product List Table
              </NavLink>
              <NavLink
                to="/products/grid"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'products', '/products/grid')}
              >
                Product Grid Catalog
              </NavLink>
              <NavLink
                to="/products/details"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'products', '/products/details')}
              >
                Product Details
              </NavLink>
              <NavLink
                to="/products/add"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'products', '/products/add')}
              >
                Edit Product Form
              </NavLink>
              <NavLink
                to="/products/create"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'products', '/products/create')}
              >
                Create Product Form
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
              <BsTag />
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
                Category List
              </NavLink>
              <NavLink
                to="/category/edit"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'category', '/category/edit')}
              >
                Category Edit
              </NavLink>
              <NavLink
                to="/category/create"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'category', '/category/create')}
              >
                Category Create
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
              <BsLayers />
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
                Inventory Warehouse
              </NavLink>
              <NavLink
                to="/inventory/received"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'inventory', '/inventory/received')}
              >
                Received Orders
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
              <BsBag />
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
                Order List
              </NavLink>
              <NavLink
                to="/orders/details"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'orders', '/orders/details')}
              >
                Order Details
              </NavLink>
              <NavLink
                to="/orders/cart"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'orders', '/orders/cart')}
              >
                Order Cart
              </NavLink>
              <NavLink
                to="/orders/checkout"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'orders', '/orders/checkout')}
              >
                Order Checkout
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
              <BsCart />
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
                Purchase List
              </NavLink>
              <NavLink
                to="/purchases/orders"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'purchases', '/purchases/orders')}
              >
                Purchase Order
              </NavLink>
              <NavLink
                to="/purchases/returns"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'purchases', '/purchases/returns')}
              >
                Purchase Return
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
              <BsSliders />
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
                Attribute List
              </NavLink>
              <NavLink
                to="/attributes/edit"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'attributes', '/attributes/edit')}
              >
                Attribute Edit
              </NavLink>
              <NavLink
                to="/attributes/create"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'attributes', '/attributes/create')}
              >
                Attribute Create
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
              <BsReceipt />
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
                Invoice List
              </NavLink>
              <NavLink
                to="/invoices/details"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'invoices', '/invoices/details')}
              >
                Invoice Details
              </NavLink>
              <NavLink
                to="/invoices/create"
                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleSubItemClick(e, 'invoices', '/invoices/create')}
              >
                Create Invoice
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to="/settings"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/settings')}
        >
          <div className="nav-link-left"><BsGear /><span>Settings</span></div>
        </NavLink>

        <div className="menu-category mt-2">Users</div>

        <NavLink
          to="/profile"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/profile')}
        >
          <div className="nav-link-left"><BsPerson /><span>Profile</span></div>
        </NavLink>

        <NavLink
          to="/roles"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/roles')}
        >
          <div className="nav-link-left"><BsShieldLock /><span>Roles</span></div>
        </NavLink>

        <NavLink
          to="/permissions"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/permissions')}
        >
          <div className="nav-link-left"><BsKey /><span>Permissions</span></div>
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/customers')}
        >
          <div className="nav-link-left"><BsPeople /><span>Customers</span></div>
        </NavLink>

        <NavLink
          to="/sellers"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/sellers')}
        >
          <div className="nav-link-left"><BsShop /><span>Sellers</span></div>
        </NavLink>

        <div className="menu-category mt-2">Other</div>

        <NavLink
          to="/coupons"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/coupons')}
        >
          <div className="nav-link-left"><BsTicketPerforated /><span>Coupons</span></div>
        </NavLink>

        <NavLink
          to="/reviews"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/reviews')}
        >
          <div className="nav-link-left"><BsStar /><span>Reviews</span></div>
        </NavLink>

        <div className="menu-category mt-2">Other Apps</div>

        <NavLink
          to="/chat"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/chat')}
        >
          <div className="nav-link-left"><BsChatDots /><span>Chat</span></div>
        </NavLink>

        <NavLink
          to="/email"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/email')}
        >
          <div className="nav-link-left"><BsEnvelope /><span>Email</span></div>
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/calendar')}
        >
          <div className="nav-link-left"><BsCalendarEvent /><span>Calendar</span></div>
        </NavLink>

        <NavLink
          to="/todo"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/todo')}
        >
          <div className="nav-link-left"><BsCheck2Square /><span>Todo</span></div>
        </NavLink>

        <div className="menu-category mt-2">Support</div>

        <NavLink
          to="/help-center"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/help-center')}
        >
          <div className="nav-link-left"><BsQuestionCircle /><span>Help Center</span></div>
        </NavLink>

        <NavLink
          to="/faqs"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/faqs')}
        >
          <div className="nav-link-left"><BsInfoCircle /><span>FAQS</span></div>
        </NavLink>

        <NavLink
          to="/privacy-policy"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/privacy-policy')}
        >
          <div className="nav-link-left"><BsShieldCheck /><span>Privacy Policy</span></div>
        </NavLink>

        <div className="menu-category mt-2">Custom</div>

        <NavLink
          to="/pages"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/pages')}
        >
          <div className="nav-link-left"><BsFileEarmarkText /><span>Pages</span></div>
        </NavLink>

        <NavLink
          to="/authentication"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/authentication')}
        >
          <div className="nav-link-left"><BsLock /><span>Permissions</span></div>
        </NavLink>

        <NavLink
          to="/widgets"
          className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          onClick={(e) => handleStandaloneClick(e, '/widgets')}
        >
          <div className="nav-link-left"><BsXDiamond /><span>Widgets</span></div>
          <span className="badge-hot">Hot</span>
        </NavLink>

        <div className="menu-category mt-2">Components</div>

        <div>
          <a
            href="#base-ui"
            className={`nav-link-custom ${currentPath.startsWith('/base-ui') ? 'active' : ''}`}
            onClick={(e) => toggleParentMenu(e, 'baseUi')}
          >
            <div className="nav-link-left"><BsUiChecksGrid /><span>Base UI</span></div>
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
                { name: 'List Group', key: 'list-group' },
                { name: 'Modal', key: 'modal' },
                { name: 'Tabs', key: 'tabs' },
                { name: 'Offcanvas', key: 'offcanvas' },
                { name: 'Pagination', key: 'pagination' },
                { name: 'Placeholders', key: 'placeholders' },
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
      </div>
    </aside>
  );
}

export default Sidebar;
