import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";

import CategoryList from "./pages/category/CategoryList";
import AddCategory from "./pages/category/AddCategory";
import CreateCategory from "./pages/category/CreateCategory";

import InventoryList from "./pages/inventory/InventoryList";
import ReceivedOrders from "./pages/inventory/ReceivedOrders";

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

      { path: "*", element: <Dashboard /> },
    ],
  },
]);

export default router;
