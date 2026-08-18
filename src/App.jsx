import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import RolesList from './Pages/Roles/RolesList';
import RoleEdit from './Pages/Roles/Roleedit';
import RoleCreate from './Pages/Roles/RoleCreate';
import Permissions from './Pages/Permissions/Permissions';
import Permissions2 from './Pages/Permissions/Permissions2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },

      { path: 'profile', element: <Profile /> },
      { path: 'pages/profile', element: <Profile /> },

      { path: 'roles', element: <RolesList /> },
      { path: 'roles/list', element: <RolesList /> },
      { path: 'roles/edit', element: <RoleEdit /> },
      { path: 'roles/edit/:id', element: <RoleEdit /> },
      { path: 'roles/create', element: <RoleCreate /> },
      { path: 'roles/add', element: <RoleCreate /> },
      
      { path: 'permissions', element: <Permissions /> },
      { path: 'permissions2', element: <Permissions2 /> },

      { path: '*', element: <Dashboard /> },
    ],
  },
]);

export default router;