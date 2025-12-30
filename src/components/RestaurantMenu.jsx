import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState(null);
	const { resId } = useParams();

	useEffect(() => {
		fetchRestaurantMenu();
	}, []);

	const fetchRestaurantMenu = async () => {
		const data = await fetch(MENU_URL + resId);
		const json = await data.json();
		setResInfo(json?.data);
	}

	if (resInfo === null) {
		return <Shimmer />;
	}
	console.log(resInfo);
	const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
	const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
	console.log(itemCards);

	return (
		<div className="menu">
			<h1>{name}</h1>
			<h2>{cuisines.join(", ")}</h2>
			<h3>{costForTwoMessage}</h3>
			<h2>Menu</h2>
			<ul>
				{itemCards.map((item, index) => (
					<li key={index}>
						{item?.card?.info?.name} - {item?.card?.info?.defaultPrice / 100}
					</li>
				))}
			</ul>
		</div>
	)
}

export default RestaurantMenu;