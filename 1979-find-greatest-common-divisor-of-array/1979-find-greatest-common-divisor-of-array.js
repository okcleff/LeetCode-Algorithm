/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
	nums.sort((a, b) => a - b);
	return gcd(nums[0], nums[nums.length - 1]);
};

var gcd = function (a, b) {
	if (!b) {
		return a;
	}

	return gcd(b, a % b);
};