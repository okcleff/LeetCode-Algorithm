/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
	let answer = 0;
	const max = Math.max(...nums);
	const min = Math.min(...nums);

	for (let num of nums) {
		if (max !== num && min !== num) answer++;
	}

	return answer;
};