/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
	for (let i = 0; i < nums.length; i++) {
		let leftSum = nums.slice(0, i).reduce((acc, curr) => acc + curr, 0);
		let rightSum = nums.slice(i + 1).reduce((acc, curr) => acc + curr, 0);
		if (leftSum === rightSum) return i;
	}
	return -1;
};