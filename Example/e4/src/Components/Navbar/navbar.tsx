import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <header className="sticky top-0 flex items-center justify-center p-4 max-auto bg-white shadow-md">
            <nav>
                <ul className="flex gap-6">
                    <li>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold " : "text-gray-800 hover:text-blue-600"
                        }>
                            Home
                        </NavLink>
                    </li>
                     <li>   
                        <NavLink to="about" className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold " : "text-gray-800 hover:text-blue-600"
                        }>
                            About
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to="/login" className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold " : "text-gray-800 hover:text-blue-600"
                        }>
                            Dashboard
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold " : "text-gray-800 hover:text-blue-600"
                        }>
                            Home
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold " : "text-gray-800 hover:text-blue-600"
                        }>
                            Home
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
export default Navbar;