import React, { useState, useEffect } from "react";
import MenuItemCard from "./MenuItemCard";
import { useParams } from "react-router-dom";

import { menuApiLink } from "./utils/contents";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${menuApiLink}${resId}`);
        const json = await response.json();
        setResInfo(json);
      } catch (err) {
        console.error("Error fetching menu:", err);
        setError("Failed to fetch menu");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const restaurantInfo = resInfo?.data?.cards?.find(
    (card) => card.card?.card?.info
  )?.card?.card?.info;

  if (!restaurantInfo) {
    return <div>No restaurant information available</div>;
  }

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  const menuItems =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards;

  if (!menuItems || menuItems.length === 0) {
    return <div>No menu items available</div>;
  }

  return (
    <div className="menu">
      <center className="  pt-3 ">
        <h1 className=" font-bold  text-3xl text-orange-700 ">{name}</h1>
        <h2 className=" font-semibold text-base text-gray-800 italic">
          {cuisines?.join(", ")}
        </h2>
        <h3 className="  font-medium  text-blue-500">{costForTwoMessage}</h3>
      </center>

      {menuItems.map((menuItem, index) => {
        const { name, description, itemAttribute, imageId } =
          menuItem.card.info;

        const { defaultPrice, price } = menuItem.card.info;
        const Price = defaultPrice !== undefined ? defaultPrice : price;

        return (
          <MenuItemCard
            key={index}
            name={name}
            description={description}
            vegClassifier={itemAttribute?.vegClassifier}
            imageId={imageId}
            Price={Price}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
