import React from "react";

import orderIcon from "./assets/order-placed-purchased-icon.svg";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Order Placed</h1>
      <img src={orderIcon} alt="Order Placed Icon" className="w-24 h-24 mb-4" />
      <p className="text-sm text-gray-600 text-center mt-4">
        This is a front-end project only. Now die starving 😜
      </p>
      <Link to={"/"}>
        <button className="mt-6 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Order;
