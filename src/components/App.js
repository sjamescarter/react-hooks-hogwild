import React, { useState } from "react";
import Nav from "./Nav";
import Button from "./Button";
import hogs from "../porkers_data";
import HogList from "./HogList";
import Sort from "./Sort";

function App() {
	const [greased, setGreased] = useState(false);
	const [sortBy, setSortBy] = useState('none')
	
	return (
		<div className="App">
			<Nav>
				<Button displayText={greased ? "Show All Pigs" : "Show Greased Pigs"} handler={() => setGreased(!greased)} />
				<Sort handler={(e) => setSortBy(e.target.value)} />
				<Button displayText="Hide Pigs" handler={() => console.log("hide button")} />
			</Nav>
			<HogList hogs={ hogs } greased={ greased } sortBy={sortBy} />
		</div>
	);
}

export default App;
