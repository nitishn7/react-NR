import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			count2: 1,
		};
	}
	componentDidMount() {
		console.log("Child mounted!");
	}

	render() {
		const { name, location } = this.props;
		const { count } = this.state;
		return (
			<div className="user-card">
				<h1>Count: {count}</h1>
				<button
					onClick={() => {
						this.setState({
							count: this.state.count + 1,
						});
					}}
				>
					Click me!
				</button>
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: PanditBKL</h4>
			</div>
		);
	}
}

export default UserClass;
