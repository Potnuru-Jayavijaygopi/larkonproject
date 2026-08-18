import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Components/MainLayout";

import Dashboard from "./Pages/Dashboard";

import CategoryList from "./Pages/category/CategoryList";
import AddCategory from "./Pages/category/AddCategory";
import CreateCategory from "./Pages/category/CreateCategory";

import InventoryList from "./Pages/inventory/InventoryList";
import ReceivedOrders from "./Pages/inventory/ReceivedOrders";

import Widgets from "./Pages/widgets/Widgets";

import SignIn from "./Pages/authentication/SignIn";
import SignUp from "./Pages/authentication/SignUp";
import ResetPassword from "./Pages/authentication/ResetPassword";
import LockScreen from "./Pages/authentication/LockScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },

      { path: "category/list", element: <CategoryList /> },
      { path: "category-list", element: <CategoryList /> },
      { path: "category/edit", element: <AddCategory /> },
      { path: "category/edit/:id", element: <AddCategory /> },
      { path: "category/add/:id", element: <AddCategory /> },
      { path: "category/create", element: <CreateCategory /> },
      { path: "category/add", element: <CreateCategory /> },

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
