import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const mainLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-products"}>All-Product</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  const afterLoginLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-products"}>All-Product</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-indigo-400 dark:bg-zinc-600 shadow-md sticky top-0 z-50">
      {/* LEFT - LOGO */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box w-52 shadow mt-3 z-100"
          >
            {user ? afterLoginLinks : mainLinks}

            {!user && (
              <>
                <li>
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
                <li>
                  <NavLink to={"/register"}>Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to={"/"} className="text-2xl font-bold tracking-wide">
          GarmentPilot
        </Link>
      </div>

      {/* CENTER - NAV LINKS (Desktop Only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user ? afterLoginLinks : mainLinks}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end space-x-2">
        {/* IF LOGGED OUT */}
        {!user && (
          <>
            <Link to={"/login"} className="btn  btn-primary btn-xs md:btn-sm">
              Login
            </Link>
            <Link to={"/register"} className="btn btn-primary btn-xs md:btn-sm">
              Register
            </Link>
          </>
        )}

        {/* IF LOGGED IN */}
        {user && (
          <>
            {/* Avatar */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user?.photoURL || "https://i.ibb.co/2hY4Z1p/user.png"}
                    alt="User Avatar"
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box w-52 shadow z-100"
              >
                <li className="font-semibold text-lg px-3 py-2">
                  {user.displayName || "user"}
                </li>
                <li>
                  <NavLink to="/dashboard/my-profile">Profile</NavLink>
                </li>
                <li>
                  <button onClick={logOutUser} className="text-red-500">
                    Logout
                  </button>
                </li>
                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="toggle mb-2"
                />
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
