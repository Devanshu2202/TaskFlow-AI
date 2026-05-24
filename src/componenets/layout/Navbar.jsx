import {
    FaBell,
    FaMoon,
    FaBars,
    FaSun,
} from "react-icons/fa";

const Navbar = ({
    setIsSidebarOpen,
    darkMode,
    setDarkMode,
}) => {
    return (
        <div
            className={`shadow px-6 py-4 flex items-center justify-between ${darkMode
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
                }`}
        >

            {/* Left Side */}
            <div className="flex items-center gap-4">

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <FaBars />
                </button>

                <input
                    type="text"
                    placeholder="Search..."
                    className={`border rounded-lg px-4 py-2 w-40 md:w-64 outline-none ${darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white text-black"
                        }`}
                />

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-5">

                <FaBell className="text-xl cursor-pointer" />

                <button
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? (
                        <FaSun className="text-xl cursor-pointer" />
                    ) : (
                        <FaMoon className="text-xl cursor-pointer" />
                    )}
                </button>

                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">

                </div>

            </div>

        </div>
    );
};

export default Navbar;