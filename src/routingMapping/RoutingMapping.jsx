import Dashboard from "../pages/dashboard/Dashboard";
import { Navigate } from "react-router-dom";
import Leaderboard from "../pages/leaderboard/Leaderboard";

export const routing = [
    { path: "", element: <Dashboard /> },
    { path: "*", element: <Navigate to="/dashboard" replace /> },
    { path: "leaboard", element: <Leaderboard /> },
    // { path: "/", element: <Dashboard /> },
    // { path: "/", element: <Dashboard /> },
    // { path: "/", element: <Dashboard /> },
    // { path: "/", element: <Dashboard /> },
    // { path: "/", element: <Dashboard /> },
];