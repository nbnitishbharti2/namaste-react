import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const res = await data.json();

    setRestaurantList(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTopRestaurant = () => {
    let filteredRestaurant = restaurantList.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredRestaurant([...filteredRestaurant]);
  };

  const handleSearch = () => {
    let filteredRestaurant = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredRestaurant, searchText);
    setFilteredRestaurant([...filteredRestaurant]);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={filterTopRestaurant}>
          Top Rated Restaurant
        </button>
      </div>
      {filteredRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurant &&
            filteredRestaurant.map((res, index) => (
              <RestaurantCard key={res?.info?.id} resData={res} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Body;
