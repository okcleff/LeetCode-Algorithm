/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
	nums.sort((a, b) => a - b);
	const arr = [];

	while (nums.length) {
		const max = nums.pop();
		const min = nums.shift();
		arr.push((max + min) / 2);
	}

	return new Set(arr).size;
};