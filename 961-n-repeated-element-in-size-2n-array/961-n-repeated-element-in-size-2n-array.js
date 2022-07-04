/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		if (
			nums.lastIndexOf(nums[i]) - nums.indexOf(nums[i]) + 1 ===
			nums.length / 2
		)
			return nums[i];
	}
};