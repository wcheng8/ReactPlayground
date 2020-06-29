import React, { Component } from "react";

class HoverCounterTwo extends Component {
	incrementCount = () => {
		this.setState((prevState) => {
			return { count: prevState.count + 1 };
		});
	};

	render() {
		const { count, incrementCount } = this.props;
		return (
			<div>
				<h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
			</div>
		);
	}
}

export default HoverCounterTwo;
