import {
    FaHome,
    FaTasks,
    FaChartBar,
    FaCalendar,
    FaCog,
} from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="w-64 bg-black text-white p-5 hidden md:block">

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