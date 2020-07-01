import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const [pokemondata, setPokemondata] = useState("");
	const [input, setInput] = useState("");
	const [pokemonapi, setPokemonapi] = useState("");

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemonapi}`)
			.then((res) => setPokemondata(res.data.sprites.front_default))
			.catch((err) => console.log(err));
	}, [pokemonapi]);
	return (
		<div className="App">
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={() => setPokemonapi(input)}>Get Da Pokemon!</button>
			<img src={pokemondata} alt="" />
		</div>
	);
}

export default App;
