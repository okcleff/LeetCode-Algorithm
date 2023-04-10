/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
	const leng = original.length;
	if (leng !== m * n) return [];

	const answer = [];
	let arr = [];

	for (let i = 0; i < leng; i++) {
		arr.push(original[i]);
		if (arr.length === n) {
			answer.push(arr);
			arr = [];
		}
	}
	return answer;
};