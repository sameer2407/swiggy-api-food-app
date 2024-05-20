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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57280&lng=77.07151&page_type=DESKTOP_WEB_LISTING"
      );
      const restData2 = await apiData.json();
      const restaurants =
        restData2.data.cards[1].card.card.gridElements.infoWithStyle
          .restaurants;

      setData(restaurants);
      setCopyData(restaurants);
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
          <Link to={`/restaurants/${restaurant.info.id}`}>
            <RestaurantCard key={restaurant.info.id} restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
