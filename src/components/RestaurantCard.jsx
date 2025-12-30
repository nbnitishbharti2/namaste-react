import { Link } from "react-router-dom";
const RestaurantCard = ({ resData }) => {
  const { restaurantID, restaurantName, address, type, parkingLot } = resData;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/37e31a5f-6dc1-4ef2-8a9f-67d075111a4e_16865.JPG"
        alt="res logo"
      />
      <h3>
        <Link to={"/restaurant/" + restaurantID}>{restaurantName}</Link>
      </h3>
      <h5>{address}</h5>
      <h5>{type}</h5>
      <h5>{parkingLot}</h5>
    </div>
  );
};

export default RestaurantCard;
