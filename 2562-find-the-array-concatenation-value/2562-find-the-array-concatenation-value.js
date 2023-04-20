/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
	let answer = 0;

	while (nums.length > 1) {
		const last = nums.length - 1;
		const concatNumber = `${nums[0]}` + `${nums[last]}`;
		nums.pop();
		nums.shift();
		answer += concatNumber * 1;
	}

	if (nums.length) answer += nums[0];

	return answer;
};