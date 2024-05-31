import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ResCat from "./ResCat";
import ShimmerItemList from "./ShimmerItemList";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { resId } = useParams();
  const location = useLocation();
  const { latitude, longitude } = location.state || {};

  const [showIndex, setShowIndex] = useState(0);

  console.log("hi therefdgdfgdfg");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${resId}`
        );
        const data = await response.json();
        setResInfo(data);
      } catch (err) {
        console.error("Error fetching menu:", err);
        setError("Failed to fetch menu");
      } finally {
        setLoading(false);
      }
    };

    if (latitude && longitude && resId) {
      fetchMenu();
    } else {
      setError("Missing location or restaurant ID");
      setLoading(false);
    }
  }, [latitude, longitude, resId]);

  if (loading) {
    return (
      <div>
        <ShimmerItemList></ShimmerItemList>
      </div>
    );
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

  const categories = resInfo?.data?.cards
    ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu">
      <center className="pt-3">
        <h1 className="font-bold text-3xl text-orange-700">{name}</h1>
        <h2 className="font-semibold text-base text-gray-800 italic">
          {cuisines?.join(", ")}
        </h2>
        <h3 className="font-medium text-blue-500">{costForTwoMessage}</h3>
      </center>

      {categories?.map((category, index) => (
        <ResCat
          key={index}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
