/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
	const dict = {};
	nums.map((num) => {
		dict[num] = dict[num] + 1 || 1;
	});

	const numSet = [...new Set(nums)].sort((a, b) => b - a);

	let answer = 0;
	numSet.map((num) => {
		if (numSet.indexOf(num - k) !== -1) answer += dict[num] * dict[num - k];
	});
	return answer;
};