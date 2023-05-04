/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
	const map = new Map();
	for (const char of s) {
		map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
	}

	let answer = '';
	for (const char of order) {
		if (map.has(char)) {
			answer += char.repeat(map.get(char));
			map.delete(char);
		}
	}

	for (const [key, value] of map) {
		answer += key.repeat(value);
	}

	return answer;
};