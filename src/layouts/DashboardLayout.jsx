import { useState } from "react";
import Sidebar from "../componenets/layout/Sidebar";
import Navbar from "../componenets/layout/Navbar";

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div
            className={`flex min-h-screen ${darkMode
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-black"
                }`}
        >

            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            <div className="flex-1 flex flex-col">
                <Navbar
                    setIsSidebarOpen={setIsSidebarOpen}
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                {/* Page Content */}
                <main className="p-6">
                    {children}
                </main>

            </div>
        </div>
    );
};

export default DashboardLayout;