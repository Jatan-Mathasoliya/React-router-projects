import React from "react";
import { NavLink, useNavigate, useParams, Outlet } from "react-router-dom";

function Potter_nav() {
  return (
    <>
      <div className="bg-black p-4 shadow-md">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-6 text-lg text-gold font-semibold">
            <li>
              <NavLink
                to={`/harry_potter/en/books`}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/Harry_potter/en/characters`}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }
              >
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/Harry_potter/en/houses`}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }
              >
                Houses
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/Harry_potter/en/spells`}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }
              >
                Spells
              </NavLink>
            </li>
          </ul>
          <select
            className="bg-gray-700 text-yellow-300 p-2 rounded-lg"
          >
            <option value="en">en (English)</option>
            <option value="es">es (Español)</option>
            <option value="fr">fr (Français)</option>
            <option value="it">it (Italiano)</option>
            <option value="pt">pt (Português)</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Potter_nav;
