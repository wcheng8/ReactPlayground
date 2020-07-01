import React, { useContext } from "react";
import AppContext from "./context";

const ThemeButton = ({ text }) => {
	const { theme, trithemeToggler } = useContext(AppContext);
	// This button should use the current theme
	console.log(theme);
	return (
		<button style={theme} onClick={trithemeToggler}>
			{text}
		</button>
	);
};

export default ThemeButton;
