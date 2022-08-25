/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
	for (let i = 0; i < nums.length; i++) {
		const copied = [...nums];
		copied.splice(i, 1);
		const sorted = [...copied].sort((a, b) => a - b);

		let isIncreasing = true;
		for (let i = 0; i < copied.length - 1; i++) {
			if (copied[i] >= copied[i + 1]) isIncreasing = false;
		}

		if (copied.join('') === sorted.join('') && isIncreasing) return true;
	}

	return false;
};