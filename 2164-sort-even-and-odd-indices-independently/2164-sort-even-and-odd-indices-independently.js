/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
	const odd = nums.filter((num, idx) => idx % 2).sort((a, b) => b - a);
	const even = nums.filter((num, idx) => idx % 2 === 0).sort((a, b) => a - b);

	const answer = [];
	for (let i = 0; i < even.length; i++) {
		answer.push(even[i]);
		odd[i] && answer.push(odd[i]);
	}

	return answer;
};