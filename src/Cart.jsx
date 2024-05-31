import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "./utils/cartSlice";
import ItemCartList from "./ItemCartList";
import NoItems from "./NoItems";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.card.info.price;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <>
        <NoItems />
      </>
    );
  }

  return (
    <div className="text-center m-4 p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-bold p-6 text-gray-600 font-mono">
            Your Selected Cart Items
          </h1>
        </div>
        <div className="">
          <h2 className="text-normal text-gray-600 font-bold">
            Total Price: ₹ {totalPrice / 100}/-
          </h2>
          <Link to={"/cart/order"}>
            <button className="p-2 mt-2 bg-green-500 text-white rounded-lg">
              Order
            </button>
          </Link>

          <button
            className="p-2 m-2 bg-red-400 text-white rounded-lg"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>

      <ItemCartList items={cartItems} />
    </div>
  );
};

export default Cart;
