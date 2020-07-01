import React, { useState } from "react";

export const themes = {
	light: {
		color: "black",
		background: "white",
	},
	dark: {
		color: "white",
		background: "black",
	},
	ocean: {
		color: "blue",
		background: "grey",
	},
};

const AppContext = React.createContext();

export const CustomAppProvider = (props) => {
	const [theme, setTheme] = useState(themes.dark);
	const trithemeToggler = () => {
		if (theme === themes.light) {
			setTheme(themes.dark);
		} else if (theme === themes.dark) {
			setTheme(themes.ocean);
		} else {
			setTheme(themes.light);
		}
	};
	return (
		<AppContext.Provider value={{ theme, trithemeToggler }}>
			{props.children}
		</AppContext.Provider>
	);
};
export default AppContext;
