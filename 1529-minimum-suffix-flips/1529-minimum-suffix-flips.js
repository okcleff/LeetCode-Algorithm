/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
	let curr = 0;
	let answer = 0;
	for (let bin of target) {
		if (bin ^ curr) {
			answer += 1;
			curr ^= 1;
		}
	}
	return answer;
};