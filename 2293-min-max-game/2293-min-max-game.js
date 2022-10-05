/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
	let answer = [...nums];
	while (answer.length > 1) {
		let arr = [];
		let isMin = true;
		for (let i = 0; i < answer.length; i += 2) {
			isMin
				? arr.push(Math.min(answer[i], answer[i + 1]))
				: arr.push(Math.max(answer[i], answer[i + 1]));
			isMin = !isMin;
		}
		answer = arr;
	}
	return answer[0];
};