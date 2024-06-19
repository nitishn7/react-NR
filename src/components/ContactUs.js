import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class ContactUs extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log("parent mounted!");
	}
	render() {
		return (
			<div className="contact-us-container">
				<h1>You can contact us at:</h1>
				<div className="user-card-container">
					{/* <User name={"Nitish"} location={"Vas Legas"} /> */}
					<UserClass
						name={"ClassName"}
						location={"father of Object"}
					/>
				</div>
			</div>
		);
	}
}

export default ContactUs;
