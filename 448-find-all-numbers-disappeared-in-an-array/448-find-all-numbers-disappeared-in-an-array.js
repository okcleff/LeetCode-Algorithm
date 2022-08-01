/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
	let origin = nums.map((_, index) => {
		return index + 1;
	});

	return origin.filter((num) => nums.indexOf(num) === -1);
};