import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANTS_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const res = await data.json();
    setRestaurantList(res);
    setFilteredRestaurant(res);
  };

  // const filterTopRestaurant = () => {
  //   let filteredRestaurant = restaurantList.filter(
  //     (res) => res.info.avgRating > 4.5
  //   );
  //   setFilteredRestaurant([...filteredRestaurant]);
  // };

  const handleSearch = () => {
    let filteredRestaurant = restaurantList.filter((res) =>
      res.restaurantName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant([...filteredRestaurant]);
  };

  if (!isOnline) {
    return <h1>You are offline</h1>;
  }

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
        {/* <button className="filter-btn" onClick={filterTopRestaurant}>
          Top Rated Restaurant
        </button> */}
      </div>
      {filteredRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurant &&
            filteredRestaurant.map((res, index) => (
              <RestaurantCard key={res?.restaurantID} resData={res} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Body;
