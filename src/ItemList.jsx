import React, { useState } from "react";
import { imgLink } from "./utils/contents";
import Remove from "./Remove";
import Add from "./Add";

const ItemList = ({ items }) => {
  // Initialize an array of added statuses with false
  const [addedStatuses, setAddedStatuses] = useState(items.map(() => false));

  // Function to update the added status of an item
  const setAddedStatus = (index, status) => {
    const newStatuses = [...addedStatuses];
    newStatuses[index] = status;
    setAddedStatuses(newStatuses);
  };

  return (
    <div>
      {items.map((item, index) => (
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
            {addedStatuses[index] ? (
              <Remove
                added={addedStatuses[index]}
                setAdded={() => setAddedStatus(index, false)}
                item={item}
              />
            ) : (
              <Add
                added={addedStatuses[index]}
                setAdded={() => setAddedStatus(index, true)}
                item={item}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
