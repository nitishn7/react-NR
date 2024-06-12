import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	console.log("body rendered");

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9298689&lng=77.6848366&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);

		const json = await data.json();
		const jsonList =
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;
		setListOfRestaurants(jsonList);
		setFilteredRestaurants(jsonList);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					></input>
					<button
						onClick={() => {
							console.log(searchText);
							setFilteredRestaurants(
								listOfRestaurants.filter((res) =>
									res.info.name
										.toLowerCase()
										.includes(searchText.toLowerCase())
								)
							);
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filter-button"
					onClick={() => {
						setListOfRestaurants(
							listOfRestaurants.filter(
								(res) => res.info.avgRating > 4
							)
						);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>
			<div className="restaurant-container">
				{filteredRestaurants.map((restaurant) => (
					<RestaurantCard
						key={restaurant.info.id}
						resData={restaurant}
					/>
				))}
			</div>
		</div>
	);
};

export default Body;
