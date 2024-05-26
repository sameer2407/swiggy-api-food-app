import React from "react";
import { logoLink } from "./utils/contents";
import { useState } from "react";
import { MdFoodBank } from "react-icons/md";
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
    <div className="header flex flex-col md:flex-row justify-between border-[1px] border-solid border-black md:h-[12vh] p-4 md:p-8">
      <div className="logo-container flex items-center md:h-full">
        <Link to={"/"}>
          <MdFoodBank className="text-4xl text-orange-500" />
        </Link>
      </div>
      <div className="nav-items flex flex-col md:flex-row md:items-center">
        <ul className="flex flex-col md:flex-row md:gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li
            className="lgn-btn top-rated-btn cursor-pointer"
            onClick={loginClick}
          >
            {login}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
