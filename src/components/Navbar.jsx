import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-aqua-600 p-4 flex justify-center space-x-6 shadow-md">
      <Link
        to="/student"
        className={({ isActive }) => 
          `px-4 py-2 rounded-md font-semibold text-white transition ${
            isActive ? "bg-indigo-800" : "hover:bg-indigo-500"
          }`
        }
      >
        Student Form
      </Link>
      <Link
        to="/employee"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md font-semibold text-white transition ${
            isActive ? "bg-indigo-800" : "hover:bg-indigo-500"
          }`
        }
      >
        Employee Form
      </Link>

      <Link
        to="/dog-adoption"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md font-semibold text-white transition ${
            isActive ? "bg-indigo-800" : "hover:bg-indigo-500"
          }`
        }
      >
        Dog Adoption Form
      </Link>
    </nav>
  );
};

export default Navbar;
