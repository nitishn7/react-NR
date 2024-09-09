import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/myHeader";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import ComingSoon from "./components/ComingSoon";
const ComingSoon = lazy(() => import("./components/ComingSoon"));

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/ContactUs",
				element: <ContactUs />,
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />,
			},
			{
				path: "/ComingSoon",
				element: (
					<Suspense fallback={<h1>Hold on for exciting offers</h1>}>
						<ComingSoon />
					</Suspense>
				),
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	// <React.StrictMode>
	<RouterProvider router={appRouter} />

	// </React.StrictMode>
);
