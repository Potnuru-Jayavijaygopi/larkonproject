import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Dashboard from "./pages/Dashboard";

import CategoryList from "./pages/category/CategoryList";
import AddCategory from "./pages/category/AddCategory";
import CreateCategory from "./pages/category/CreateCategory";

import InventoryList from "./pages/inventory/InventoryList";
import ReceivedOrders from "./pages/inventory/ReceivedOrders";

import Widgets from "./pages/widgets/Widgets";

import SignIn from "./pages/authentication/SignIn";
import SignUp from "./pages/authentication/SignUp";
import ResetPassword from "./pages/authentication/ResetPassword";
import LockScreen from "./pages/authentication/LockScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },

      { path: "category/list", element: <CategoryList /> },
      { path: "category/edit", element: <AddCategory /> },
      { path: "category/create", element: <CreateCategory /> },

      { path: "inventory/warehouse", element: <InventoryList /> },
      { path: "inventory/received", element: <ReceivedOrders /> },

      { path: "widgets", element: <Widgets /> },

      { path: "authentication", element: <SignIn /> },
      { path: "authentication/signin", element: <SignIn /> },
      { path: "authentication/signup", element: <SignUp /> },
      { path: "authentication/reset-password", element: <ResetPassword /> },
      { path: "authentication/lock-screen", element: <LockScreen /> },

      { path: "*", element: <Dashboard /> },
    ],
  },
]);

export default router;
