import React from "react";
import ReactDOM from "react-dom/client";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App.jsx";
import "./index.css";

// const initialState = {
// 	count: 0,
// };

// function reducer(state = initialState, action) {
// 	if (action.type === "increment") {
// 		return { ...state, count: state.count + 1 };
// 	} else if (action.type === "decrement") {
// 		return { ...state, count: state.count - 1 };
// 	} else {
// 		return state;
// 	}
// }

// const store = createStore(reducer);

// const increment = { type: "increment" };
// const decrement = { type: "decrement" };

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);
