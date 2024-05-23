import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restData from "./utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [data, setData] = useState(restData);
  const [copyData, setCopyData] = useState(restData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting current geolocation:", error);
        setLoading(false);
        setError("Failed to get geolocation");
      }
    );
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetchData();
    }
  }, [latitude, longitude]);

  const fetchData = async () => {
    try {
      const apiData = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`
      );
      const restData2 = await apiData.json();

      console.log("API Response:", restData2);

      if (restData2?.data?.cards) {
        let restaurants = [];
        for (const card of restData2.data.cards) {
          if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
            restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
            break;
          }
        }

        if (restaurants.length > 0) {
          setData(restaurants);
          setCopyData(restaurants);
        } else {
          throw new Error("Restaurants data not found in response");
        }
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filterData = copyData.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setData(filterData);
  };

  const handleTopRated = () => {
    const filteredList = copyData.filter((restaurant) => {
      return restaurant.info.avgRating > 4.5;
    });
    setData(filteredList);
  };

  if (loading) {
    return (
      <div className="flex flex-wrap">
        {[...Array(20)].map((_, i) => (
          <Shimmer key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="body">
      <div className="filter p-[10px] h-[auto] flex">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="search-box border rounded-sm border-solid m-[2px] p-1"
          />
          <button
            className="m-[2px] cursor-pointer rounded border-[1px] p-1 bg-orange-400"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-btn m-[2px] cursor-pointer rounded border-[1px] p-1 bg-orange-400"
          onClick={handleTopRated}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {data.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
            state={{ latitude, longitude }}
          >
            <RestaurantCard restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
