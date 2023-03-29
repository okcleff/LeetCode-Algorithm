/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
	const answer = [];

	for (let i = 0; i < queries.length; i++) {
		const left = queries[i][0];
		const right = queries[i][1];
		const subarray = arr.slice(left, right + 1);
		const xor = subarray.reduce((acc, curr) => acc ^ curr);
		answer.push(xor);
	}

	return answer;
};