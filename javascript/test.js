// 请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并
// 为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']

function concat(origin, inset) {
	const map = new Map();
	origin.forEach((item, index) => {
		const n = item[0];
		map.set(n, index);
	});
	let num = 0;
	inset.forEach((item, index) => {
		if (map.get(item) !== undefined) {
			origin.splice(map.get(item) + num + 1, 0, item);
			num++;
		}
	});
	console.log(origin);
}
const origin = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
const inset = ["A", "B", "C", "D"];
concat(origin, inset);
