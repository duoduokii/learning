function logger(stores) {
	return (next) => {
		return (action) => {
			console.log("logger");
			next(action);
		};
	};
}

export default logger;
