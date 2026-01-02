import { Link } from "react-router-dom";
import restaurantLogo from "url:../../public/restaurant.jpg";
const RestaurantCard = ({ resData }) => {
  const { restaurantID, restaurantName, address, type, parkingLot } = resData;
  return (
    <div className="m-4 p-4 w-full sm:w-[250px] bg-blue-200 rounded-lg shadow-lg shadow-amber-900 hover:bg-blue-300 hover:scale-105 transition-all duration-300">
      <img
        className="w-full h-[180px] object-cover rounded-lg"
        src={restaurantLogo}
        alt="res logo"
      />
      <h3 className="font-bold mt-4 text-lg truncate">
        <Link to={"/restaurant/" + restaurantID}>{restaurantName}</Link>
      </h3>
      <h5 className="mt-2 text-gray-700">📌 {address}</h5>
      <h5 className="mt-1 text-gray-700">🍽️ {type}</h5>
      <h5 className="mt-1 font-semibold">
        {"🅿 "}
        {parkingLot ? "Parking Available" : "No Parking"}
      </h5>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard
// output - HOCRestaurantCard

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label
          htmlFor=""
          className="absolute bg-black text-white p-1 rounded-md z-50"
        >
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
