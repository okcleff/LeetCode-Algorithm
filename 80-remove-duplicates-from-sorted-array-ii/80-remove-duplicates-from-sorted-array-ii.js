/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let curr = nums[0];
	let count = 1;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === curr) {
			if (count <= 0) {
				nums.splice(i, 1);
				i--;
			} else {
				count--;
			}
		} else {
			curr = nums[i];
			count = 1;
		}
	}

	return nums.length;
};