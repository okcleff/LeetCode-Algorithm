/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
	const isArithmetic = (arr) => {
		let diff = arr[1] - arr[0];
		for (let i = 1; i < arr.length - 1; i++) {
			if (arr[i + 1] - arr[i] !== diff) return false;
		}
		return true;
	};
  
	let answer = [];
	for (let i = 0; i < l.length; i++) {
		let subarr = [...nums].slice(l[i], r[i] + 1).sort((a, b) => b - a);
		answer.push(isArithmetic(subarr));
	}
	return answer;
};