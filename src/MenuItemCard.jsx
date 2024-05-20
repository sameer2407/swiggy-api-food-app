import React from "react";

import { itemImgLink } from "./utils/contents";
const MenuItemCard = ({ name, description, Price, vegClassifier, imageId }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <div className="flex justify-around p-4 ">
      <div className=" conatiner  w-1/2">
        <p className="text-base text-green-600">{vegClassifier}</p>

        <h1 className="text-2xl font-bold text-[#454545]">{name}</h1>
        <h1 className="price text-base font-bold text-[#454545] mb-3">
          {Price / 100}
        </h1>
        <h1 className=" ">{(description = truncateText(description, 80))}</h1>
      </div>
      <div className="relative item-image">
        <img
          className="h-[144px] w-[156px] rounded-xl"
          src={`${itemImgLink}${imageId}`}
        ></img>
        <button className="addButton absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2 bg-green-500 text-white py-1 px-2  rounded-md  font-bold">
          Add +
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
