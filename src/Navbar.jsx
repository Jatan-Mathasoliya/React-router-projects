import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meals"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
                  }`
                }
              >
                The Meals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cocktails"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
                  }`
                }
              >
                Cocktails
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
                  }`
                }
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bankdetails"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
                  }`
                }
              >
                Banks Details
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto mt-6 p-4">
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
