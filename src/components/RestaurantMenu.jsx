import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);

  return (
    <div className="menu">
      <h1>{resInfo?.[0]?.restaurantName}</h1>
      <h2>Menu</h2>
      <ul>
        {resInfo.map((item) => (
          <li key={item.itemID}>
            {item?.itemName} - {item?.itemPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
