import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const {id, name, cloudinaryImageId, cuisines, avgRating, sla} = props?.resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
        alt="res logo"
      />
      <h3>
        <Link to={"/restaurant/" + id}>{name}</Link>
      </h3>
      <h5>{cuisines.join(', ')}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{sla?.slaString}</h5>
    </div>
  );
};

export default RestaurantCard;