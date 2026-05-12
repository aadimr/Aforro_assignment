import Dashboard from "../pages/dashboard/Dashboard";
import { Navigate } from "react-router-dom";
import Leaderboard from "../pages/leaderboard/Leaderboard";
import Order from "../pages/order/Order";
import Products from "../pages/products/Products";
import SalesReport from "../pages/salesReport/SalesReport";
import Message from "../pages/massages/Massages";
import Settings from "../pages/settings/Settings";

export const routing = [
    { path: "", element: <Dashboard /> },

    { path: "leaderboard", element: <Leaderboard /> },
    { path: "order", element: <Order /> },
    { path: "products", element: <Products /> },
    { path: "sales_report", element: <SalesReport /> },
    { path: "messages", element: <Message /> },
    { path: "settings", element: <Settings /> },

    { path: "*", element: <Navigate to="/dashboard" replace /> },
];