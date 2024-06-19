import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState(null);
	const { resId } = useParams();
	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_API + resId);
		//resID 489129 is working for the structure of response below, other resIds have different structure
		const json = await data.json();

		setResInfo(json.data);
	};
	if (resInfo === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[2]?.card?.card?.info;

	const { itemCards } =
		resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[5].card.card
			.categories[0];

	return (
		<div className="menu">
			<h1>{name}</h1>
			<p>
				{cuisines.join(",")} - {costForTwoMessage}
			</p>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.id}>
						{item.card.info.name} -{" "}
						{"Rs." + item.card.info.price / 100}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
