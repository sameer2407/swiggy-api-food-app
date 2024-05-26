import React from "react";
import { imgLink } from "./utils/contents";

const RestaurantCard = ({ restData }) => {
  const cost = restData.info.costForTwo;
  const rating = restData.info.avgRating;
  const cousines = restData.info.cuisines;
  const maxCuisines = cousines.slice(0, 3);
  const cousinesString = maxCuisines.join(", ");
  const name = restData.info.name;
  const imgId = restData.info.cloudinaryImageId;

  return (
    <div className="res-card w-[180px] h-[350px] border-[1px] border-solid overflow-hidden  m-[10px] transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-100  duration-300 text-sm rounded-xl">
      <img
        className="food-img  w-[100%] h-[50%] rounded-xl"
        src={`${imgLink}${imgId}`}
      />
      <h3 className="heading mb-1  pt-[5px]   font-extrabold text-blue-600  text-base font-sans  pl-[2px]">
        {name}
      </h3>
      <p className="tags mb-1 ml-[2px] pl-[2px]">{cousinesString}</p>

      <p className="ratings mb-1 ml-[2px] pl-[2px]">{rating}</p>
      <p className="ratings mb-1 ml-[2px] pl-[2px]">{cost}</p>
    </div>
  );
};

export default RestaurantCard;
