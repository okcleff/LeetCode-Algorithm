/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
	let answer = [];
  
	for (let i = 0; i < matrix.length; i++) {
		const rowMin = Math.min(...matrix[i]);
		const rowMinIndex = matrix[i].indexOf(rowMin);
		let columnMax = -Infinity;

		for (let i = 0; i < matrix.length; i++) {
			columnMax = Math.max(columnMax, matrix[i][rowMinIndex]);
		}

		if (columnMax === rowMin) answer.push(rowMin);
	}

	return answer;
};