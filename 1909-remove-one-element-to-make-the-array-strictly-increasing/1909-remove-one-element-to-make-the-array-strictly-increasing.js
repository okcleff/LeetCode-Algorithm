/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
	for (let i = 0; i < nums.length; i++) {
		const copied = [...nums];
		copied.splice(i, 1);
		const sorted = [...copied].sort((a, b) => a - b);

		const isIncreasing = copied.length === [...new Set(copied)].length;
    const isSorted = copied.join('') === sorted.join('');

		if (isIncreasing && isSorted) return true;
	}

	return false;
};