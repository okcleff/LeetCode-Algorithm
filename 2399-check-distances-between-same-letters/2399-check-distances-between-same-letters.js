/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
	const charSet = new Set([...s]);
  
	for (let char of charSet) {
		const index = char.charCodeAt() - 97;
		const left = s.indexOf(char);
		const right = s.lastIndexOf(char);
		const space = right - left - 1;

		if (distance[index] !== space) return false;
	}

	return true;
};