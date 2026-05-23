import {
    FaHome,
    FaTasks,
    FaChartBar,
    FaCalendar,
    FaCog,
} from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <div className={`
    fixed md:static top-0 left-0 z-50
    h-screen w-64 bg-black text-white p-5
    transform transition-transform duration-300
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}>

            <button
                className="md:hidden mb-5"
                onClick={() => setIsSidebarOpen(false)}
            >
                ✕
            </button>

            <h1 className="text-2xl font-bold mb-10">
                TaskFlow AI
            </h1>

            <ul className="space-y-6">

                <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                    <FaHome />
                    Dashboard
                </li>

                <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                    <FaTasks />
                    Tasks
                </li>

                <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                    <FaChartBar />
                    Analytics
                </li>

                <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                    <FaCalendar />
                    Calendar
                </li>

                <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                    <FaCog />
                    Settings
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;