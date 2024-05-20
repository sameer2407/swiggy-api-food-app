import React from "react";
import { logoLink } from "./utils/contents";
import { useState } from "react";

import { Link } from "react-router-dom";
const Header = () => {
  const [login, setLogin] = useState(["Log In"]);

  const loginClick = () => {
    if (login === "Log In") {
      setLogin("Log Out");
    } else {
      setLogin("Log In");
    }
  };

  return (
    <div className="header flex flex-col md:flex-row justify-between border-[1px] border-solid border-black md:h-[20vh] p-4 md:p-8">
      <div className="logo-container flex items-center">
        <Link to={"/"}>
          <img
            className="logo w-12 h-auto md:w-20 cursor-pointer"
            src={logoLink}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="nav-items flex flex-col md:flex-row md:items-center">
        <ul className="flex flex-col md:flex-row md:gap-4">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className=" ">
            <button
              className="lgn-btn  top-rated-btn  cursor-pointer rounded border-[1px] p-1 bg-orange-400  "
              onClick={() => {
                loginClick();
              }}
            >
              {login}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
