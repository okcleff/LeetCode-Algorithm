/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
	const merge = [...items1, ...items2];
	const hash = {};

	merge.map((arr) => {
		hash[arr[0]] = hash[arr[0]] + arr[1] || arr[1];
	});

	const answer = [];
	for (let key in hash) {
		answer.push([Number(key), hash[key]]);
	}

	return answer.sort((a, b) => a[0] - b[0]);
};