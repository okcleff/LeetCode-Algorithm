/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let curr = nums[0];
	let count = 1;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === curr) {
			count <= 0 ? (nums[i] = '_') : count--;
		} else {
			curr = nums[i];
			count = 1;
		}
	}

	nums.sort((a, b) => {
		if (typeof b === 'string') return -1;
	});

	return nums.filter((num) => num !== '_').length;
};