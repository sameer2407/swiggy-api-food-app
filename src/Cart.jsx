import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "./utils/cartSlice";

import ItemCartList from "./ItemCartList";
import NoItems from "./NoItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  if (cartItems.length == 0) {
    return (
      <>
        <NoItems></NoItems>
      </>
    );
  }

  return (
    <div className=" text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        <button
          className="p-2 m-2 bg-red-400 text-white rounded-lg"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
        <ItemCartList items={cartItems}></ItemCartList>
      </div>
    </div>
  );
};

export default Cart;
