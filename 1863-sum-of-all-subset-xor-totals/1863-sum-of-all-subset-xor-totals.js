/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
	const subsets = nums.reduce(
		(subset, value) => subset.concat(subset.map((set) => [value, ...set])),
		[[]]
	);

	const xor = (arr) => {
		return arr.reduce((a, c) => c ^ a, 0);
	};

	let answer = 0;
	subsets.map((arr) => {
		answer += xor(arr);
	});

	return answer;
};