import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
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
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
