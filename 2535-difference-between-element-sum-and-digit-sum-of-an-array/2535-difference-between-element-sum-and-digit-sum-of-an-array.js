/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
	const elSum = nums.reduce((acc, curr) => acc + curr, 0);
	const digitSum = nums
		.join('')
		.split('')
		.reduce((acc, curr) => acc + Number(curr), 0);
	return Math.abs(elSum - digitSum);
};