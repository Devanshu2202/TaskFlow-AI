import { FaBell, FaMoon } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-white shadow px-6 py-4 flex items-center justify-between">

            <input
                type="text"
                placeholder="Search..."
                className="border rounded-lg px-4 py-2 w-64 outline-none"
            />

            <div className="flex items-center gap-5">

                <FaBell className="text-xl cursor-pointer" />

                <FaMoon className="text-xl cursor-pointer" />

                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                    D
                </div>

            </div>
        </div>
    );
};

export default Navbar;