import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const Add = ({ item, setAdded }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="addButton absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2 bg-green-500 text-white py-1 px-2 rounded-md font-bold"
        onClick={() => {
          dispatch(addItem(item));
          setAdded(true);
        }}
      >
        Add +
      </button>
    </>
  );
};

export default Add;
