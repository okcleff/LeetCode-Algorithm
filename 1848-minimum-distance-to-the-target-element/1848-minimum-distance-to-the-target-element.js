/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
	let left = Infinity;
	let right = Infinity;

	for (let step = 0; step <= start; step++)
		if (nums[start - step] === target) {
			left = step;
			break;
		}

	for (let step = 0; step < nums.length - start; step++)
		if (nums[start + step] === target) {
			right = step;
			break;
		}

	return Math.min(left, right);
};