import React, { useState } from "react";
import "./App.css";

function App() {
	const [animals, setAnimals] = useState(["dog"]);
	const [input, setInput] = useState("");

	const addAnimal = (e) => {
		e.preventDefault();
		setAnimals([...animals, input]);
		setInput("");
	};

	const handleSubmit = (e) => {
		setInput(e.target.value);
	};
	return (
		<div className="App">
			{animals && animals.map((a, i) => <li key={i}>{a}</li>)}
			<form onSubmit={addAnimal}>
				<input type="text" value={input} onChange={handleSubmit} />
				<button type="submit">Add animal!</button>
			</form>
		</div>
	);
}

export default App;
