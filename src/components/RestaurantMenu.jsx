import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Beardcrumb from "./Beardcrumb";
import DealsForYou from "./DealsForYou";
import RestaurantDetailsCard from "./RestaurantDetailsCard";
import MenuItemsWithCategory from "./MenuItemsWithCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const restaurantName = resInfo?.[0]?.restaurantName;

  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="mx-4 mb-50 lg:mx-56 md:mx-12 sm:mx-12 xs:mx-12">
      <h1 className="text-3xl font-bold border-b border-gray-200 mb-10">
        {restaurantName}
      </h1>
      <Beardcrumb activeCrumb={restaurantName} />
      <RestaurantDetailsCard />
      <DealsForYou />

      <h2 className="text-center uppercase text-gray-500 text-md mb-10 flex justify-center items-center gap-2">
        Menu
      </h2>

      <MenuItemsWithCategory category="Recommended" resInfo={resInfo} />
      <MenuItemsWithCategory
        category="Paneer Ka Khazane Se"
        resInfo={resInfo}
      />
      <MenuItemsWithCategory
        category="Tandoori Ke Khaana Se"
        resInfo={resInfo}
      />
    </div>
  );
};

export default RestaurantMenu;
