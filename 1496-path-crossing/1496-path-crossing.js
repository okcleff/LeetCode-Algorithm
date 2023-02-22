/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
	const point = [0, 0];
	const map = new Map();
	map.set(point.join(), true);

	for (let i = 0; i < path.length; i++) {
		const dir = path[i];
		dir === 'N'
			? point[1]++
			: dir === 'S'
			? point[1]--
			: dir === 'E'
			? point[0]++
			: point[0]--;

		if (map.has(point.join())) {
			return true;
		} else {
			map.set(point.join(), true);
		}
	}
	return false;
};