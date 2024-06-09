import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src="https://www.creativefabrica.com/wp-content/uploads/2022/10/12/food-delivery-logo-design-template-Graphics-41271638-1-1-580x380.jpg"
				/>
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

const resList = [
	{
		info: {
			id: "25793",
			name: "KFC",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25793.JPG",
			locality: "KVR layout",
			areaName: "Bellandur",
			costForTwo: "₹550 for two",
			cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
			avgRating: 4.2,
			parentId: "547",
			avgRatingString: "4.2",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 20,
				lastMileTravel: 1.2,
				serviceability: "SERVICEABLE",
				slaString: "15-20 mins",
				lastMileTravelString: "1.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 01:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
	},

	{
		info: {
			id: "489129",
			name: "Chinese Wok",
			cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
			locality: "Anand Nagar",
			areaName: "Marathahalli",
			costForTwo: "₹250 for two",
			cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
			avgRating: 4.2,
			parentId: "61955",
			avgRatingString: "4.2",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 35,
				lastMileTravel: 4.1,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "4.1 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 02:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "ITEMS",
				subHeader: "AT ₹169",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-3a1a0ef9-b71e-4ed7-b04a-3ac753675b54",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/chinese-wok-anand-nagar-marathahalli-bangalore-489129",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "10590",
			name: "Pizza Hut",
			cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
			locality: "Bellandur",
			areaName: "Central 3 Mall",
			costForTwo: "₹300 for two",
			cuisines: ["Pizzas"],
			avgRating: 4.2,
			parentId: "721",
			avgRatingString: "4.2",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 26,
				lastMileTravel: 1.2,
				serviceability: "SERVICEABLE",
				slaString: "25-30 mins",
				lastMileTravelString: "1.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 01:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹125 OFF",
				subHeader: "ABOVE ₹249",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-3a1a0ef9-b71e-4ed7-b04a-3ac753675b54",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/pizza-hut-bellandur-central-3-mall-bangalore-10590",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "126298",
			name: "UBQ by Barbeque Nation",
			cloudinaryImageId: "ra5uw1t9sk0t39mmfefe",
			locality: "Daddakanahalli",
			areaName: "Sarjapur Road",
			costForTwo: "₹300 for two",
			cuisines: [
				"North Indian",
				"Barbecue",
				"Biryani",
				"Kebabs",
				"Mughlai",
				"Desserts",
				"Snacks",
			],
			avgRating: 4,
			parentId: "10804",
			avgRatingString: "4.0",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 43,
				lastMileTravel: 4.7,
				serviceability: "SERVICEABLE",
				slaString: "40-45 mins",
				lastMileTravelString: "4.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-07 23:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "50% OFF",
				subHeader: "UPTO ₹100",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-3a1a0ef9-b71e-4ed7-b04a-3ac753675b54",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-daddakanahalli-sarjapur-road-bangalore-126298",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "288804",
			name: "Barbeque Nation",
			cloudinaryImageId: "l1eo9lzlfcriyew8wron",
			locality: "Sarjapur Road",
			areaName: "Sarjapur Road",
			costForTwo: "₹600 for two",
			cuisines: [
				"North Indian",
				"Barbecue",
				"Biryani",
				"Kebabs",
				"Mughlai",
				"Desserts",
				"Snacks",
			],
			avgRating: 3.8,
			parentId: "2438",
			avgRatingString: "3.8",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 45,
				lastMileTravel: 4.7,
				serviceability: "SERVICEABLE",
				slaString: "45-50 mins",
				lastMileTravelString: "4.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-07 23:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "50% OFF",
				subHeader: "UPTO ₹100",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-3a1a0ef9-b71e-4ed7-b04a-3ac753675b54",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/barbeque-nation-sarjapur-road-bangalore-288804",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "618083",
			name: "La Pino'z Pizza",
			cloudinaryImageId: "d3pgrav1whn3gzcvy5qk",
			locality: "Outer Ring Road",
			areaName: "Kadubeesanahalli",
			costForTwo: "₹400 for two",
			cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
			avgRating: 4,
			parentId: "4961",
			avgRatingString: "4.0",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 57,
				lastMileTravel: 1.9,
				serviceability: "SERVICEABLE",
				slaString: "55-60 mins",
				lastMileTravelString: "1.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 03:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "50% OFF",
				subHeader: "UPTO ₹100",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-3a1a0ef9-b71e-4ed7-b04a-3ac753675b54",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-outer-ring-road-kadubeesanahalli-bangalore-618083",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "579803",
			name: "The Belgian Waffle Co.",
			cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
			locality: "Elegance Opal Apartment",
			areaName: "Bellandur",
			costForTwo: "₹200 for two",
			cuisines: ["Waffle", "Desserts", "Ice Cream"],
			avgRating: 4.4,
			veg: true,
			parentId: "2233",
			avgRatingString: "4.4",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 34,
				lastMileTravel: 1.1,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "1.1 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 01:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId:
										"v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "20% OFF",
				subHeader: "UPTO ₹50",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-3a1a0ef9-b71e-4ed7-b04a-3ac753675b54",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-elegance-opal-apartment-bellandur-bangalore-579803",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "363",
			name: "Meghana Foods",
			cloudinaryImageId: "yfyo8aklppbwdplv7ofp",
			locality: "Marathahalli",
			areaName: "Kadubeesanahalli",
			costForTwo: "₹500 for two",
			cuisines: [
				"Biryani",
				"Andhra",
				"South Indian",
				"Chinese",
				"Seafood",
			],
			avgRating: 4.4,
			parentId: "635",
			avgRatingString: "4.4",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 36,
				lastMileTravel: 2.9,
				serviceability: "SERVICEABLE",
				slaString: "35-40 mins",
				lastMileTravelString: "2.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 01:30:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "Rxawards/_CATEGORY-Biryani.png",
						description: "Delivery!",
					},
				],
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "Delivery!",
									imageId: "Rxawards/_CATEGORY-Biryani.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-3a1a0ef9-b71e-4ed7-b04a-3ac753675b54",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/meghana-foods-marathahalli-kadubeesanahalli-bangalore-363",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "409261",
			name: "Paris Panini - Gourmet Sandwiches & Wraps",
			cloudinaryImageId: "mfskkiczhnxndbioznjb",
			locality: "Bellandur",
			areaName: "Bellandur",
			costForTwo: "₹500 for two",
			cuisines: [
				"Continental",
				"Pastas",
				"Salads",
				"Snacks",
				"Desserts",
				"Fast Food",
				"French",
			],
			avgRating: 4.4,
			parentId: "21019",
			avgRatingString: "4.4",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 35,
				lastMileTravel: 4.3,
				serviceability: "SERVICEABLE",
				slaString: "35-40 mins",
				lastMileTravelString: "4.3 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-07 23:30:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "Rxawards/_CATEGORY-Sandwiches.png",
						description: "Delivery!",
					},
					{
						imageId: "newg.png",
						description: "Gourmet",
					},
				],
				textExtendedBadges: [
					{
						iconId: "guiltfree/GF_Logo_android_3x",
						shortDescription: "options available",
						fontColor: "#7E808C",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "Delivery!",
									imageId:
										"Rxawards/_CATEGORY-Sandwiches.png",
								},
							},
							{
								attributes: {
									description: "Gourmet",
									imageId: "newg.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: "",
									fontColor: "#7E808C",
									iconId: "guiltfree/GF_Logo_android_3x",
									shortDescription: "options available",
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹120",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-3a1a0ef9-b71e-4ed7-b04a-3ac753675b54",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/paris-panini-gourmet-sandwiches-and-wraps-bellandur-bangalore-409261",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "489235",
			name: "Big Bowl",
			cloudinaryImageId: "c99751d54e4e1847186c62b3309c1327",
			locality: "Anand Nagar",
			areaName: "Marathahalli",
			costForTwo: "₹250 for two",
			cuisines: ["North Indian", "Chinese", "Tibetan", "Desserts"],
			avgRating: 4.1,
			parentId: "434792",
			avgRatingString: "4.1",
			totalRatingsString: "500+",
			sla: {
				deliveryTime: 41,
				lastMileTravel: 4.1,
				serviceability: "SERVICEABLE",
				slaString: "40-45 mins",
				lastMileTravelString: "4.1 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 02:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "ITEMS",
				subHeader: "AT ₹179",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-3a1a0ef9-b71e-4ed7-b04a-3ac753675b54",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/big-bowl-anand-nagar-marathahalli-bangalore-489235",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
];

const RestaurantCard = (props) => {
	const { resData } = props;
	const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
		resData?.info;
	return (
		<div className="res-card">
			<img
				className="res-logo"
				alt="restaurant-image"
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					cloudinaryImageId
				}
			/>
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating}</h4>
			<h4>{costForTwo}</h4>
			<h4>{sla.deliveryTime} minutes</h4>
		</div>
	);
};

const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="restaurant-container">
				{resList.map((restaurant) => (
					<RestaurantCard
						key={restaurant.info.id}
						resData={restaurant}
					/>
				))}
			</div>
		</div>
	);
};

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
