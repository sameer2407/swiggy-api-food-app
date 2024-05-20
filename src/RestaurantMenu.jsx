import React, { useState, useEffect } from "react";
import MenuItemCard from "./MenuItemCard";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=${resId}`
        );
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
  // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[9].card.info.imageId
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      {menuItems.map((menuItem, index) => {
        const { name, description, itemAttribute, imageId } =
          menuItem.card.info;

        // Destructure defaultPrice and use defaultprice as a fallback
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
