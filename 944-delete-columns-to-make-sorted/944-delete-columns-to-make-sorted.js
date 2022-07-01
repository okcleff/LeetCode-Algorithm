/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
	let answer = 0;
	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 0; j < strs.length - 1; j++) {
			if (strs[j].charCodeAt(i) > strs[j + 1].charCodeAt(i)) {
				answer++;
				break;
			}
		}
	}
	return answer;
};