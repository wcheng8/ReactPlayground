import React, { useState, useContext } from "react";
import AppContext from "./context";

const ThemeInput = () => {
	const appContext = useContext(AppContext);
	// This input should use the current theme
	const [inputValue, setInputValue] = useState("");
	console.log(appContext);
	return (
		<input
			type="text"
			style={appContext.theme}
			value={inputValue}
			onChange={(e) => setInputValue(e.target.value)}
		/>
	);
};

export default ThemeInput;
