import React from "react";
import { imgLink } from "./utils/contents";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-5 m-2 border-b-2 border-gray-200 text-base text-left flex justify-around"
        >
          <div className="w-1/2">
            <span className="text-xl font-bold text-[#454545]">
              {item.card.info.name}
            </span>
            <br />
            <span role="img" aria-label="vegetable">
              🥦
            </span>
            <span className="price text-base font-bold text-[#454545] mb-3">
              ₹ {item.card.info.price / 100}/-
            </span>
            <p>{item.card.info.description}</p>
          </div>
          <div className="relative item-image">
            <img
              className="h-[144px] w-[156px] rounded-xl"
              src={`${imgLink}${item.card.info.imageId}`}
              alt={item.card.info.name}
            />
            <button
              className="addButton absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2 bg-green-500 text-white py-1 px-2 rounded-md font-bold"
              onClick={() => {
                dispatch(addItem(item)); // Corrected item parameter
              }}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
