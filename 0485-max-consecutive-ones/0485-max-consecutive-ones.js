/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
	let answer = 0;
	let curr = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i]) {
			curr++;
		} else {
			answer = Math.max(answer, curr);
			curr = 0;
		}
	}
	return Math.max(answer, curr);
};