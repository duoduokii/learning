function test(stores) {
	return (next) => {
		return (action) => {
			console.log("test");
			next(action);
		};
	};
}

export default test;
