import { useState, useEffect } from "react";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANTS_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const isOnline = useOnlineStatus();

  const PromotedRestaurantCard = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);
    let res = await data.json();
    res = res.map((restaurant) => ({
      ...restaurant,
      promoted: Math.random() > 0.7,
    }));
    setRestaurantList(res);
    setFilteredRestaurant(res);
  };

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
    <div className="body mx-12">
      <div className="filter mx-2">
        <div className="search p-4">
          <input
            type="text"
            id="search-input"
            className="px-2 py-2 border border-gray-150 rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="mx-4 px-4 py-2 border bg-green-800 text-white rounded-lg cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {filteredRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="mx-auto flex flex-wrap gap-5 justify-center">
          {filteredRestaurant &&
            filteredRestaurant.map((res) =>
              // If the restaurant is promoted then we need to show the promotion label to it.
              res?.promoted ? (
                <PromotedRestaurantCard key={res?.restaurantID} resData={res} />
              ) : (
                <RestaurantCard key={res?.restaurantID} resData={res} />
              )
            )}
        </div>
      )}
    </div>
  );
};

export default Body;
