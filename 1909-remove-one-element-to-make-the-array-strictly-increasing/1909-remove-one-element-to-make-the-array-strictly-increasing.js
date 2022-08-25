/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
	for (let i = 0; i < nums.length; i++) {
		const copied = [...nums];
		copied.splice(i, 1);
		const sorted = [...copied].sort((a, b) => a - b);

		let isIncreasing = copied.length === [...new Set(copied)].length;

		if (copied.join('') === sorted.join('') && isIncreasing) return true;
	}

	return false;
};