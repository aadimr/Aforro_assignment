import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex h-screen overflow-hidden bg-[#F5F6FA]">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto overflow-x-hidden p-5 bg-[#F5F6FA]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;