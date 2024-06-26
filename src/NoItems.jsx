import React from "react";
import CartImage from "./assets/empty-cart.png";
import { Link } from "react-router-dom";
const NoItems = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img
        src={CartImage}
        alt="Empty Cart"
        className="h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 mb-4"
      />
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">
        Your cart is empty
      </h1>
      <Link to={"/"}>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NoItems;
