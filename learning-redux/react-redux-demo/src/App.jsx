import { useState } from "react";
import Counter from "./components/Counter";
import Modal from "./components/Modal";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h2>React Redux Demo</h2>
			<div className="card">
				<Counter />
				<Modal />
			</div>
		</>
	);
}

export default App;
