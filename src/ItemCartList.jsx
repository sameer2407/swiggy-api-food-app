import React from "react";
import { imgLink } from "./utils/contents";
import { useDispatch } from "react-redux";
import { removeItemAtIndex } from "./utils/cartSlice";
import { CiCircleRemove } from "react-icons/ci";

const ItemCartList = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <div className="p-2">
      {items.map((item, index) => (
        <div
          key={item.card.info.id}
          className="flex flex-col sm:flex-row items-center justify-between p-2 mb-2 border rounded-lg shadow-sm bg-white"
        >
          <img
            className="h-12 w-12 sm:h-16 sm:w-16 rounded-md object-cover"
            src={`${imgLink}${item.card.info.imageId}`}
            alt={item.card.info.name}
          />
          <div className="flex-1 mx-2 text-center sm:text-left mt-1 sm:mt-0">
            <h3 className="text-sm font-semibold text-gray-800">
              {item.card.info.name}
            </h3>
            <p className="text-xs text-gray-600">
              ₹ {item.card.info.price / 100}/-
            </p>
          </div>
          <button
            className="mt-1 sm:mt-0 text-red-500 text-2xl hover:text-red-700"
            onClick={() => dispatch(removeItemAtIndex(index))}
          >
            <CiCircleRemove size={34} />
          </button>
        </div>
      ))}
    </div>
  );
};

//<a href="https://iconscout.com/3d-illustrations/empty-cart" class="text-underline font-size-sm" target="_blank">Empty Cart</a> by <a href="https://iconscout.com/contributors/iconscout" class="text-underline font-size-sm" target="_blank">IconScout Store</a>

export default ItemCartList;
