/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
	let answer = [];
	for (let i = 0; i < matrix[0].length; i++) {
		let arr = [];
		for (let j = 0; j < matrix.length; j++) {
			arr.push(matrix[j][i]);
		}
		answer.push(arr);
	}
	return answer;
};