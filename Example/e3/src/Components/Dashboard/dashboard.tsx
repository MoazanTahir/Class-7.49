import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function Dashboard() {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-bold  text-gray-800">Dashboard</h2>
            <nav className="mb-6">
                <ul className="flex space-x-4">
                    <li>
                        <NavLink to="/dashboard/profile" className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold " : "text-gray-800 hover:text-blue-600"
                        }>
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/settings" className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold " : "text-gray-800 hover:text-blue-600"
                        }>
                            Settings
                        </NavLink>
                    </li>
                </ul>
            
            </nav>

            <div className="p-4 bg-white rounded-lg shadow-md">
                <Outlet/>
            </div>
        </div>
    )
}
export default Dashboard;