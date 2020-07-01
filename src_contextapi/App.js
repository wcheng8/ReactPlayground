import React from "react";
import { CustomAppProvider } from "./context";
import Form from "./Form";

const App = () => {
	return (
		<CustomAppProvider>
			<Form />
		</CustomAppProvider>
		// implement a button which toggles the theme
	);
};

export default App;
