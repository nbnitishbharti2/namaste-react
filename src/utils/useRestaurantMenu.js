import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const data = await fetch(MENU_URL + resId + "/menu");
      const json = await data?.json();
      setResInfo(json);
    } catch (error) {
      console.error("Error fetching restaurant menu: ", error.statusText);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
