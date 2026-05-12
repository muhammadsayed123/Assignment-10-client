// import React from "react";

import { use, useEffect, useState } from "react";
import { AuthContest } from "../Contexts/AuthContext";
import { Link } from "react-router";

const Navbar = () => {
  const { user, logOut } = use(AuthContest);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch();
  };

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start lg:ml-10 md:ml-5">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <p>
                  <Link to="/allMovie" className="hover:text-amber-600">
                    All Movies
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/myCollection" className="hover:text-amber-600">
                    My Collection
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link className="hover:text-amber-600">Watchlist</Link>
                </p>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl text-amber-500">
            MovieMaster
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <p>
                <Link to="/allMovie" className="hover:text-amber-600">
                  All Movies
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link to="/myCollection" className="hover:text-amber-600">
                  My Collection
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link className="hover:text-amber-600">Watchlist</Link>
              </p>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:mr-10 md:mr-5">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme")}
            className="toggle mr-2"
          />
          {user ? (
            <Link onClick={handleLogOut} className="btn">
              Sign Out
            </Link>
          ) : (
            <div>
              <Link to="/login" className="btn  hover:bg-amber-500 mr-2">
                Login
              </Link>
              <Link to="/register" className="btn hover:bg-amber-500 ">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
