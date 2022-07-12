/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
	const obj = {};

	for (let v of nums) {
		obj[v] = obj[v] + 1 || 1;
	}

	let answer = 0;
	for (let key in obj) {
		if (obj[parseInt(key) + 1]) {
			answer = Math.max(answer, obj[key] + obj[parseInt(key) + 1]);
		}
	}

	return answer;  
};