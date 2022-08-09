/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
	nums.sort((a, b) => a - b);
	const leng = nums.length - 1;
	return nums[leng] * nums[leng - 1] - nums[1] * nums[0];
};