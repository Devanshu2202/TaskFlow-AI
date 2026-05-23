import Sidebar from "../componenets/layout/Sidebar";
import Navbar from "../componenets/layout/Navbar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100">

            <Sidebar isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen} />

            <div className="flex-1">
                <Navbar
                    setIsSidebarOpen={setIsSidebarOpen} />

                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;