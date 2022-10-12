/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
	const soldiers = new Map();
	mat.map((row, idx) => {
		soldiers.set(idx, row.filter((bin) => bin === 1).length);
	});

	let arr = [];
	for (let [k, v] of soldiers) {
		arr.push([k, v]);
	}

	arr.sort((a, b) => {
		if (b[1] > a[1]) {
			return -1;
		} else if (b[1] === a[1]) {
			return a[0] - b[0];
		} else {
			return 1;
		}
	});

	let answer = [];
	for (let i = 0; i < k; i++) {
		answer.push(arr[i][0]);
	}

	return answer;
};