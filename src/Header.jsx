import React, { useContext, useEffect, useState } from "react";
import { MdFoodBank } from "react-icons/md";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
  const [login, setLogin] = useState("Log In");

  const loginClick = () => {
    if (login === "Log In") {
      setLogin("Log Out");
    } else {
      setLogin("Log In");
    }
  };

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className="header flex flex-col md:flex-row justify-between border-[1px] border-solid border-black md:h-[12vh] p-4 md:p-8">
      <div className="logo-container flex items-center md:h-full">
        <Link to={"/"}>
          <MdFoodBank className="text-4xl text-orange-500" />
        </Link>
      </div>
      <div className="nav-items flex flex-col md:flex-row md:items-center">
        <ul className="flex flex-col md:flex-row md:gap-4">
          <li className="  transition ease-in-out delay-100 hover:text-orange-400">
            <Link to="/">Home</Link>
          </li>
          <li className="  transition ease-in-out delay-100 hover:text-orange-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="  transition ease-in-out delay-100 hover:text-orange-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to={"/cart"}>
              <div className=" flex">
                <GiShoppingCart className="text-2xl   text-orange-500" />
                <span className=" text-sm font-normal text-green-800">
                  ({cartItems.length})
                </span>
              </div>
            </Link>
          </li>
          <Link to={"/login"}>
            <li
              className="lgn-btn top-rated-btn cursor-pointer transition ease-in-out delay-100 hover:text-orange-400"
              onClick={loginClick}
            >
              {login}
            </li>
          </Link>
          <li className="px-4 transition ease-in-out delay-100 hover:text-orange-400">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
