import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <header className="flex items-center justify-center py-4 mx-auto  shadow-md">
            <ul className="flex gap-4">
                <li><Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link></li>
                <li><Link to="/about" className="text-gray-800 hover:text-blue-600">About</Link></li>
                <li><Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link></li>
            </ul>
        </header>
    )
}
export default Navbar;