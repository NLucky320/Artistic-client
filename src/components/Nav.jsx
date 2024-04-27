import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink, Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import logo from "../assets/palette.png";
import logo1 from "../assets/artist-svgrepo-com.svg";

import { Tooltip } from 'react-tooltip'
const Nav = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  // console.log(theme);
  const { logOut, user } = useAuth();
  // console.log(user);

  const [openNav, setOpenNav] = React.useState(false);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
    Navigate("/");
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 pl-4 lg:pr-12 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold " : "font-bold"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/allCraftsItems"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "font-bold"
          }
        >
          All Craft 
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/addCraftsItem"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "font-bold"
          }
        >
          Add Craft 
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/myArt&CraftList"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "font-bold"
          }
        >
          My Art and Craft 
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center justify-center w-16 h-16 md:w-12 md:h-12 rounded-full dark:bg-violet-600">
            <img src={logo} alt="" />
          </div>
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold pl-6 text-xl text-primary"
          >
            Craftopia <span className="text-secondary">Creations </span>{" "}
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {user ? (
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-circle avatar ">
                  <div className="w-12 rounded-full">
                    <img src={user?.photoURL || ""} className="" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-1 z-[1] pr-10 mr-4 rounded-box w-52"
                >
                  <li>
                    <button className="btn bg-primary text-white rounded">
                      {user?.displayName || "user name not found"}
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <button></button>
            )}

            {user ? (
              <button
                onClick={handleSignOut}
                className="btn bg-primary text-white rounded "
              >
                {" "}
                LogOut
              </button>
            ) : (
              <div className="flex gap-2">
                <Link to="/login">
                  <button className="btn bg-primary text-white rounded ">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn bg-primary text-white rounded ">
                    Register
                  </button>
                </Link>
              </div>
            )}

            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                checked={theme === "dark"} // Check if the theme is "dark"
                onChange={handleToggle}
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
};

export default Nav;
