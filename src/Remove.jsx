import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemAtIndex } from "./utils/cartSlice";

import { MdDelete } from "react-icons/md";

const Remove = ({ item, setAdded }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  // Find the index of the item to be removed
  const itemIndex = cartItems.findIndex(
    (cartItem) => cartItem.card.info.id === item.card.info.id
  );

  return (
    <>
      <button
        className="addButton absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2 bg-red-600 text-white py-1 px-2 rounded-md font-bold"
        onClick={() => {
          if (itemIndex !== -1) {
            dispatch(removeItemAtIndex(itemIndex));
            setAdded(false);
          }
        }}
      >
        <MdDelete />
      </button>
    </>
  );
};

export default Remove;
