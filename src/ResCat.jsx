import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCat = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className=" w-[70%] mx-auto my-4 bg-gray-50 shadow-lg p-4 text-center ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards}></ItemList>}
      </div>
    </div>
  );
};

export default ResCat;
