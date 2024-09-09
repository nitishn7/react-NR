import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
				name: "Dummy initial name",
				location: "Dummy initial location",
			},
		};
	}
	async componentDidMount() {
		this.timer = setInterval(() => {
			console.log(
				"this set Interval has to be cleared while unMounting the component since SPA will keep it in memory."
			);
		}, 1000);
		const data = await fetch("https://api.github.com/users/nitishn7");
		const json = await data.json();

		this.setState({
			userInfo: json,
		});
		console.log(json);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		console.log("Component Unmounted");
	}

	render() {
		const { name, location, avatar_url } = this.state.userInfo;
		return (
			<div className="user-card">
				<img src={avatar_url} />
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: PanditBKL </h4>
			</div>
		);
	}
}

export default UserClass;
