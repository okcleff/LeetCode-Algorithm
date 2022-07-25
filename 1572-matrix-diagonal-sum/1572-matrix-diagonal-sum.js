/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
	const leng = mat.length;
	let answer = 0;
	for (let i = 0; i < leng; i++) {
		answer += mat[i][i];
		if (leng - i - 1 !== i) {
			answer += mat[leng - i - 1][i];
		}
	}
	return answer;
};