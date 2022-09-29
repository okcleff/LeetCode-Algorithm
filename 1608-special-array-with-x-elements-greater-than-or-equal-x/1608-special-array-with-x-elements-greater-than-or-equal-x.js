/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
	nums.sort((a, b) => b - a);

	let x = 0;
	while (x <= nums[0]) {
		if (nums.filter((num) => num >= x).length === x) return x;
		x++;
	}

	return -1;
};