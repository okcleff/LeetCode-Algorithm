/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
	const map = {};

	for (let i = 0; i < rings.length; i += 2) {
		map[rings[i + 1]]
			? (map[rings[i + 1]] += rings[i])
			: (map[rings[i + 1]] = rings[i]);
	}

	let answer = 0;
	for (key in map) {
		if (
			map[key].includes('B') &&
			map[key].includes('G') &&
			map[key].includes('R')
		) {
			answer++;
		}
	}

	return answer;
};