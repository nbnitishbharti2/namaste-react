import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from '../utils/mockData';



const Body = () => {

  const [restaurantList, setRestaurantList] = useState(resList);

  const filterTopRestaurant = () => {
    let filteredRestaurant = restaurantList.filter(res => res.info.avgRating > 4.5);
    setRestaurantList(filteredRestaurant);
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRestaurant}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {restaurantList && restaurantList.map((res, index) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;